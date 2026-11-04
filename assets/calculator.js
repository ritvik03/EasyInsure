/* EasyInsure Phase 1 calculator — illustrative estimates only. */
(function () {
  "use strict";

  var CFG = window.PLAN_CALC;
  var ROOT = document.getElementById("plan-calculator");
  if (!CFG || !ROOT) return;

  var fmt = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
  function inr(n) {
    var value = Number(n);
    if (!isFinite(value)) return "—";
    return "₹" + fmt.format(Math.round(value));
  }
  function pct(n) {
    return (Number(n) * 100).toFixed(2).replace(/\.?0+$/, "") + "%";
  }
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function num(value, fallback) {
    var n = parseFloat(value);
    return isFinite(n) ? n : fallback;
  }

  function field(labelText, control) {
    var wrap = el("label", "calc-field");
    wrap.appendChild(el("span", "calc-label", labelText));
    wrap.appendChild(control);
    return wrap;
  }
  function numberField(labelText, value, opts) {
    var input = el("input", "calc-input");
    input.type = "number";
    input.value = value;
    if (opts) {
      if (opts.min !== undefined) input.min = opts.min;
      if (opts.max !== undefined) input.max = opts.max;
      if (opts.step !== undefined) input.step = opts.step;
    }
    return field(labelText, input);
  }
  function selectField(labelText, options, value) {
    var select = el("select", "calc-input");
    options.forEach(function (option) {
      var opt = el("option", "", option.label);
      opt.value = option.value;
      if (String(option.value) === String(value)) opt.selected = true;
      select.appendChild(opt);
    });
    return field(labelText, select);
  }
  function checkboxField(labelText, checked) {
    var wrap = el("label", "calc-check");
    var input = el("input");
    input.type = "checkbox";
    input.checked = !!checked;
    wrap.appendChild(input);
    wrap.appendChild(el("span", "", labelText));
    return wrap;
  }
  function getInputs(container) {
    var out = {};
    container.querySelectorAll("[data-calc-id]").forEach(function (node) {
      var id = node.getAttribute("data-calc-id");
      if (node.type === "checkbox") out[id] = node.checked;
      else if (node.type === "number") out[id] = num(node.value, 0);
      else out[id] = node.value;
    });
    return out;
  }
  function markControl(control, id) {
    control.querySelector("input,select").setAttribute("data-calc-id", id);
    return control;
  }

  /* ---------------- shared helpers ---------------- */
  function interpolateRate(table, age) {
    if (!table) return 0;
    var ages = Object.keys(table).map(Number).sort(function (a, b) { return a - b; });
    if (!ages.length) return 0;
    if (age <= ages[0]) return table[ages[0]];
    if (age >= ages[ages.length - 1]) return table[ages[ages.length - 1]];
    for (var i = 0; i < ages.length - 1; i += 1) {
      if (age >= ages[i] && age <= ages[i + 1]) {
        var span = ages[i + 1] - ages[i];
        var ratio = span === 0 ? 0 : (age - ages[i]) / span;
        return table[ages[i]] + (table[ages[i + 1]] - table[ages[i]]) * ratio;
      }
    }
    return 0;
  }
  function factorAt(table, year) {
    if (!table) return 0;
    var years = Object.keys(table).map(Number).sort(function (a, b) { return a - b; });
    if (!years.length) return 0;
    var key = years[0];
    for (var i = 0; i < years.length; i += 1) {
      if (years[i] <= year) key = years[i];
    }
    return table[key] || 0;
  }
  function allocationFor(cfg, y, premium, channel, single) {
    var list = single ? (cfg.allocationSingle || cfg.allocation) : (cfg.allocationRegular || cfg.allocation);
    if (!list) return 0;
    for (var i = 0; i < list.length; i += 1) {
      var band = list[i];
      if (y >= band.from && y <= band.to) {
        if (band.offline !== undefined) {
          return channel === "online" ? band.online : band.offline;
        }
        var offline = premium >= 50000 ? band.offlineAtLeast50000 : band.offlineBelow50000;
        return channel === "online" ? band.online : offline;
      }
    }
    return 0;
  }
  function adminFor(cfg, y, premium, single) {
    var admin = single ? (cfg.adminSingle || cfg.admin) : (cfg.adminRegular || cfg.admin);
    if (!admin) return 0;
    if (admin.type === "fixedMonthly") {
      if (y < admin.startYear) return 0;
      var monthly = admin.monthly * Math.pow(1 + (admin.escalation || 0), y - admin.startYear);
      if (admin.cap) monthly = Math.min(monthly, admin.cap);
      return monthly * 12;
    }
    if (admin.type === "percentMonthly") {
      if (y < admin.startYear) return 0;
      var base = Math.min(premium * admin.pctAnnual / 12, admin.monthlyCap);
      base *= Math.pow(1 + (admin.escalation || 0), y - admin.startYear);
      if (admin.cap) base = Math.min(base, admin.cap);
      return base * 12;
    }
    if (admin.type === "fixedMonthlyByPremium") {
      if (y < admin.startYear) return 0;
      var fixed = premium < admin.threshold ? admin.monthlyBelow : admin.monthlyAtLeast;
      fixed *= Math.pow(1 + (admin.escalation || 0), y - admin.startYear);
      if (admin.cap) fixed = Math.min(fixed, admin.cap);
      return fixed * 12;
    }
    if (admin.type === "pensionRegular") {
      if (y > admin.pct.length) return 0;
      return Math.min(premium * admin.pct[y - 1], admin.cap[y - 1]) * 12;
    }
    if (admin.type === "fixedMonthlyYears") {
      if (y > admin.values.length) return 0;
      return admin.values[y - 1] * 12;
    }
    return 0;
  }
  function gaFor(cfg, y, premium, single) {
    if (single && cfg.gaSingle) return cfg.gaSingle[String(y)] || 0;
    if (!single && cfg.gaRegular) return cfg.gaRegular[String(y)] || 0;
    var table = cfg.ga || {};
    if (cfg.gaBelow48000 && premium < cfg.gaThreshold) table = cfg.gaBelow48000;
    return table[String(y)] || 0;
  }
  function discontinuanceFor(cfg, y, premium, fund, single) {
    var disc = single ? (cfg.discontinuanceSingle || cfg.discontinuance) : (cfg.discontinuanceRegular || cfg.discontinuance);
    if (!disc || y >= 5) return 0;
    var band = null;
    (disc.bands || []).forEach(function (b) {
      if (band) return;
      if (b.max !== undefined && premium <= b.max) band = b;
      if (b.min !== undefined && premium >= b.min) band = b;
    });
    if (!band) return 0;
    var entry = band.years[String(y)] || band.years[y];
    if (!entry) return 0;
    var p = entry[0];
    var cap = entry[1];
    return Math.min(p * premium, p * fund, cap);
  }
  function bsaFor(cfg, inputs, age, premium, single) {
    if (!cfg.bsa) return 0;
    if (cfg.bsa.type === "multipleByAge") {
      var mult = age <= cfg.bsa.ageThreshold ? cfg.bsa.multipleAtOrBelow : cfg.bsa.multipleAbove;
      return premium * mult;
    }
    if (cfg.bsa.type === "multipleInput") {
      return premium * num(inputs.bsaMultiple, cfg.bsa.defaultMultiple);
    }
    return 0;
  }

  /* ---------------- premium table lookup ---------------- */
  function renderPremium(tab) {
    var cfg = tab.config;
    var wrap = el("div", "calc-body");
    var grid = el("div", "calc-grid");
    var result = el("div", "calc-result");
    var controls = {};

    var ageOptions = cfg.ages.map(function (a) { return { value: a, label: a + " years" }; });
    var ageField = selectField("Age at entry", ageOptions, cfg.ages[0]);
    grid.appendChild(markControl(ageField, "age"));

    if (cfg.kind === "age_term") {
      var termOptions = cfg.terms.map(function (t, i) {
        var label = t + " years";
        if (cfg.ppts) label += " (PPT " + cfg.ppts[i] + ")";
        return { value: t, label: label };
      });
      grid.appendChild(markControl(selectField("Policy term", termOptions, cfg.terms[0]), "term"));
    } else if (cfg.kind === "age_ppt") {
      grid.appendChild(markControl(selectField("Premium paying term", cfg.ppts.map(function (p) { return { value: p, label: p + " years" }; }), cfg.ppts[0]), "ppt"));
    } else if (cfg.kind === "age_ga") {
      grid.appendChild(markControl(selectField("Guaranteed addition period", cfg.gaPeriods.map(function (g) { return { value: g, label: g + " years" }; }), cfg.gaPeriods[0]), "ga"));
    } else if (cfg.kind === "age_sex") {
      grid.appendChild(markControl(selectField("Sex", [{ value: "male", label: "Male" }, { value: "female", label: "Female" }], "male"), "sex"));
    } else if (cfg.kind === "age_term_sex_option") {
      grid.appendChild(markControl(selectField("Policy term", cfg.terms.map(function (t) { return { value: t, label: t + " years" }; }), cfg.terms[0]), "term"));
      grid.appendChild(markControl(selectField("Sex", [{ value: "male", label: "Male" }, { value: "female", label: "Female" }], "male"), "sex"));
      grid.appendChild(markControl(selectField("Benefit option", cfg.options.map(function (o) { return { value: o, label: "Option " + o + (o === "I" ? " — Level Sum Assured" : " — Increasing Sum Assured") }; }), cfg.options[0]), "option"));
    }

    var amountLabel = cfg.kind === "age_sex" ? "Initial Daily Benefit (₹)" : "Basic Sum Assured (₹)";
    grid.appendChild(markControl(numberField(amountLabel, cfg.base, { min: 1000, step: 1000 }), "amount"));

    function compute() {
      var inputs = getInputs(grid);
      var age = String(inputs.age);
      var value = null;
      if (cfg.kind === "age_term") {
        value = (cfg.matrix[age] || {})[String(inputs.term)];
      } else if (cfg.kind === "age_ppt") {
        value = (cfg.matrix[age] || {})[String(inputs.ppt)];
      } else if (cfg.kind === "age_ga") {
        value = (cfg.matrix[age] || {})[String(inputs.ga)];
      } else if (cfg.kind === "age_sex") {
        value = (cfg.matrix[age] || {})[inputs.sex];
      } else if (cfg.kind === "age_term_sex_option") {
        var byTerm = ((cfg.matrix[inputs.option] || {})[age] || {})[String(inputs.term)] || {};
        value = byTerm[inputs.sex];
      }
      result.replaceChildren();
      if (value === null || value === undefined) {
        result.appendChild(el("p", "calc-error", "This combination is not available in the published table."));
        return;
      }
      var scale = num(inputs.amount, cfg.base) / cfg.base;
      var premium = value * scale;
      var headline = el("div", "calc-headline");
      headline.appendChild(el("span", "calc-headline-label", cfg.premiumType));
      headline.appendChild(el("strong", "", inr(premium)));
      result.appendChild(headline);
      var breakdown = el("p", "calc-small");
      breakdown.textContent = "Published rate " + inr(value) + " per " + cfg.baseLabel +
        " × (" + inr(inputs.amount) + " ÷ " + inr(cfg.base) + ").";
      result.appendChild(breakdown);
      result.appendChild(el("p", "calc-note", cfg.note));
      result.appendChild(el("p", "calc-warning", "This is a published sample, not a quotation. Rebates, taxes, underwriting loadings and rider premiums are excluded. Use LIC's official calculator for an exact premium."));
    }

    wrap.appendChild(el("p", "calc-intro", "Look up a premium from LIC's published sample table for this plan. Only the ages and terms printed in the brochure are available."));
    wrap.appendChild(grid);
    wrap.appendChild(result);
    grid.addEventListener("input", compute);
    grid.addEventListener("change", compute);
    compute();
    return wrap;
  }

  /* ---------------- GSV calculators ---------------- */
  function gsvResult(result, title, value, rows, note) {
    result.replaceChildren();
    var headline = el("div", "calc-headline");
    headline.appendChild(el("span", "calc-headline-label", title));
    headline.appendChild(el("strong", "", inr(Math.max(0, value))));
    result.appendChild(headline);
    var table = el("div", "calc-breakdown");
    rows.forEach(function (row) {
      var line = el("div", "calc-breakdown-row");
      line.appendChild(el("span", "", row[0]));
      line.appendChild(el("strong", "", row[1]));
      table.appendChild(line);
    });
    result.appendChild(table);
    result.appendChild(el("p", "calc-note", note));
    result.appendChild(el("p", "calc-warning", "Actual surrender value is the higher of GSV and LIC's Special Surrender Value (SSV). SSV is determined by LIC and may be higher; this calculator does not compute SSV."));
  }

  function renderGsv(tab) {
    var cfg = tab.config;
    var wrap = el("div", "calc-body");
    var grid = el("div", "calc-grid");
    var result = el("div", "calc-result");
    wrap.appendChild(el("p", "calc-intro",
      cfg.engine === "gsv_saral_pension" || cfg.engine === "gsv_smart_pension"
        ? "Estimate the surrender value using LIC's published formula. This does not compute the Special Surrender Value."
        : "Estimate the Guaranteed Surrender Value (GSV) using LIC's published factor tables. This is the guaranteed minimum, not necessarily the amount LIC will pay."));

    function add(id, label, value, opts) {
      grid.appendChild(markControl(numberField(label, value, opts), id));
    }

    if (cfg.engine === "gsv_full_life") {
      add("bsa", "Basic Sum Assured (₹)", cfg.defaultBsa, { min: 100000, step: 10000 });
      add("premium", "Annualized premium (₹)", cfg.defaultPremium, { min: 1000, step: 1000 });
      grid.appendChild(markControl(selectField("Premium paying term", [5, 8, 12, 16].map(function (p) { return { value: p, label: p + " years" }; }), cfg.defaultPpt), "ppt"));
      add("year", "Policy year of surrender", cfg.defaultYear, { min: 1, max: 35, step: 1 });
      add("incomePaid", "Income benefits already paid (₹)", 0, { min: 0, step: 1000 });
      add("flexi", "Accumulated Flexi Income balance (₹)", 0, { min: 0, step: 1000 });
    } else if (cfg.engine === "gsv_single_ga") {
      add("premium", "Single premium (₹)", cfg.defaultPremium, { min: 10000, step: 1000 });
      add("bsa", "Basic Sum Assured (₹)", cfg.defaultBsa, { min: 100000, step: 10000 });
      grid.appendChild(markControl(selectField("Guaranteed addition period", [8, 12, 16].map(function (p) { return { value: p, label: p + " years" }; }), cfg.defaultGaPeriod), "gaPeriod"));
      add("year", "Policy year of surrender", cfg.defaultYear, { min: 1, max: 35, step: 1 });
      add("incomePaid", "Regular income benefits already paid (₹)", 0, { min: 0, step: 1000 });
      add("flexi", "Accumulated Flexi Income balance (₹)", 0, { min: 0, step: 1000 });
    } else if (cfg.engine === "gsv_new_jeevan_shanti") {
      add("purchase", "Purchase price (₹)", cfg.defaultPurchase, { min: 50000, step: 10000 });
      add("year", "Policy year of surrender", cfg.defaultYear, { min: 1, step: 1 });
      add("paid", "Total annuity already paid (₹)", cfg.defaultPaid, { min: 0, step: 1000 });
    } else if (cfg.engine === "gsv_saral_pension") {
      add("purchase", "Purchase price (₹)", cfg.defaultPurchase, { min: 50000, step: 10000 });
      add("loan", "Outstanding loan (₹)", cfg.defaultLoan, { min: 0, step: 1000 });
      add("interest", "Outstanding loan interest (₹)", cfg.defaultInterest, { min: 0, step: 1000 });
    } else if (cfg.engine === "gsv_smart_pension") {
      grid.appendChild(markControl(selectField("Annuity option group", [
        { value: "D", label: "Option D" },
        { value: "E", label: "Options E1–E5" },
        { value: "FJ", label: "Options F or J" }
      ], "D"), "optionGroup"));
      add("purchase", "Purchase price (₹)", cfg.defaultPurchase, { min: 50000, step: 10000 });
      add("year", "Policy year of surrender", cfg.defaultYear, { min: 1, step: 1 });
      add("paid", "Annuities or early returns already paid (₹)", cfg.defaultPaid, { min: 0, step: 1000 });
      add("age", "Annuitant age (last birthday)", cfg.defaultAge, { min: 18, max: 100, step: 1 });
    } else if (cfg.engine === "gsv_new_jeevan_dhara") {
      grid.appendChild(markControl(selectField("Annuity option group", [
        { value: "1-9", label: "Options 1–9" },
        { value: "10-11", label: "Options 10–11" }
      ], "1-9"), "optionGroup"));
      add("amount", "Total premiums paid / purchase price (₹)", cfg.defaultAmount, { min: 50000, step: 10000 });
      add("year", "Policy year of surrender", cfg.defaultYear, { min: 1, step: 1 });
      add("paid", "Total annuity already paid (₹)", cfg.defaultPaid, { min: 0, step: 1000 });
      add("earlyRop", "Early return of premium already paid (₹)", 0, { min: 0, step: 1000 });
      grid.appendChild(markControl(checkboxField("Within one year of vesting", false), "withinVesting"));
      grid.appendChild(markControl(checkboxField("After the deferment period", false), "afterDeferment"));
      grid.appendChild(markControl(checkboxField("Early-return option (3–7)", false), "earlyRopOption"));
    }

    function compute() {
      var inputs = getInputs(grid);
      var year = Math.max(1, Math.round(inputs.year || 1));
      if (cfg.engine === "gsv_full_life") {
        var factor = factorAt(cfg.factors, year);
        var gaFactor = factorAt(cfg.gaFactors, year);
        var paidYears = Math.min(year, inputs.ppt || 1);
        var total = inputs.premium * paidYears;
        var ga = 40 * (inputs.bsa / 1000) * paidYears;
        var value = total * factor + ga * gaFactor - (inputs.incomePaid || 0) + (inputs.flexi || 0);
        gsvResult(result, "Guaranteed Surrender Value", value, [
          ["Premiums paid", inr(total)],
          ["Premium GSV factor", pct(factor)],
          ["Accrued guaranteed additions", inr(ga)],
          ["GA GSV factor", pct(gaFactor)],
          ["Income benefits deducted", inr(inputs.incomePaid || 0)],
          ["Flexi balance added", inr(inputs.flexi || 0)]
        ], "GSV = premiums paid × GSV factor + accrued GA × GA factor − income paid + Flexi balance. Premiums exclude taxes, extra premiums and rider premiums.");
      } else if (cfg.engine === "gsv_single_ga") {
        var baseFactor = year <= 3 ? 0.75 : 0.90;
        var premiumBase = inputs.premium * baseFactor - (year > 3 ? (inputs.incomePaid || 0) : 0);
        var gaAccrued = 40 * (inputs.bsa / 1000) * Math.min(year, inputs.gaPeriod || 1);
        var gaSv = gaAccrued * factorAt(cfg.gaFactors, year);
        var totalValue = premiumBase + gaSv + (inputs.flexi || 0);
        gsvResult(result, "Guaranteed Surrender Value", totalValue, [
          ["GSV on single premium", inr(premiumBase)],
          ["Premium GSV factor", pct(baseFactor)],
          ["Accrued guaranteed additions", inr(gaAccrued)],
          ["GA surrender factor", pct(factorAt(cfg.gaFactors, year))],
          ["GA surrender value", inr(gaSv)],
          ["Flexi balance added", inr(inputs.flexi || 0)]
        ], "GSV is 75% of the single premium in years 1–3 and 90% from year 4, reduced by regular income benefits due and paid, plus the surrender value of accrued guaranteed additions.");
      } else if (cfg.engine === "gsv_new_jeevan_shanti") {
        var f = year <= 3 ? 0.75 : 0.90;
        gsvResult(result, "Guaranteed Surrender Value", inputs.purchase * f - (inputs.paid || 0), [
          ["Purchase price", inr(inputs.purchase)],
          ["GSV factor", pct(f)],
          ["Annuity already paid", inr(inputs.paid || 0)]
        ], "GSV = purchase price × factor − total annuity paid. Factor is 75% in policy years 1–3 and 90% from year 4.");
      } else if (cfg.engine === "gsv_saral_pension") {
        var sv = 0.95 * inputs.purchase - (inputs.loan || 0) - (inputs.interest || 0);
        gsvResult(result, "Indicative surrender value", sv, [
          ["Purchase price", inr(inputs.purchase)],
          ["95% of purchase price", inr(0.95 * inputs.purchase)],
          ["Outstanding loan", inr(inputs.loan || 0)],
          ["Outstanding interest", inr(inputs.interest || 0)]
        ], "This surrender route is available only after six months and only on diagnosis of one of the specified critical illnesses. The policy terminates on payment.");
      } else if (cfg.engine === "gsv_smart_pension") {
        var svFactor;
        if ((inputs.age || 0) >= 100 || year >= 35) svFactor = 0.925;
        else if (year >= 21) svFactor = 0.90;
        else svFactor = 0.80 + 0.005 * (year - 1);
        var base = inputs.optionGroup === "FJ" ? inputs.purchase : Math.max(0, inputs.purchase - (inputs.paid || 0));
        gsvResult(result, "Indicative surrender value", base * svFactor, [
          ["Surrender base", inr(base)],
          ["SV factor", pct(svFactor)],
          ["Purchase price", inr(inputs.purchase)],
          ["Already paid", inr(inputs.paid || 0)]
        ], "Options D and E1–E5 use (purchase price − amounts paid) × SV factor; Options F and J use purchase price × SV factor. The SV factor is 80% in year 1, rises 0.5% a year to 90% in year 21, and is 92.5% after 35 years or age 100.");
      } else if (cfg.engine === "gsv_new_jeevan_dhara") {
        var value892;
        var rows892;
        if (inputs.afterDeferment) {
          value892 = 0.90 * inputs.amount - (inputs.paid || 0) - (inputs.earlyRopOption ? (inputs.earlyRop || 0) : 0);
          rows892 = [
            ["90% of premiums / purchase price", inr(0.90 * inputs.amount)],
            ["Annuities paid", inr(inputs.paid || 0)],
            ["Early return of premium", inr(inputs.earlyRopOption ? (inputs.earlyRop || 0) : 0)]
          ];
        } else {
          var f892;
          if (inputs.optionGroup === "10-11") {
            f892 = year <= 3 ? 0.75 : 0.90;
          } else if (inputs.withinVesting) {
            f892 = 0.90;
          } else if (year <= 1) {
            f892 = 0;
          } else if (year === 2) {
            f892 = 0.30;
          } else if (year === 3) {
            f892 = 0.35;
          } else if (year <= 7) {
            f892 = 0.50;
          } else {
            f892 = 0.90;
          }
          value892 = inputs.amount * f892;
          rows892 = [
            ["Premiums paid / purchase price", inr(inputs.amount)],
            ["GSV factor", pct(f892)]
          ];
        }
        gsvResult(result, "Guaranteed Surrender Value", value892, rows892,
          "During deferment the GSV is the total premiums or purchase price × the published factor. After deferment it is 90% of total premiums or purchase price less annuities paid (and, under options 3–7, less any early return of premium).");
      }
    }

    wrap.appendChild(grid);
    wrap.appendChild(result);
    grid.addEventListener("input", compute);
    grid.addEventListener("change", compute);
    compute();
    return wrap;
  }

  /* ---------------- ULIP projection ---------------- */
  function renderUlip(tab) {
    var cfg = tab.config;
    var wrap = el("div", "calc-body");
    var grid = el("div", "calc-grid");
    var result = el("div", "calc-result");
    wrap.appendChild(el("p", "calc-intro", "Illustrative projection using the plan's published charges and an assumed gross fund return. It is not a quotation and does not predict actual NAV performance."));

    var isBoth = cfg.premiumType === "both";
    if (isBoth) {
      grid.appendChild(markControl(selectField("Premium type", [
        { value: "regular", label: "Regular premium" },
        { value: "single", label: "Single premium" }
      ], "regular"), "premiumType"));
    }
    grid.appendChild(markControl(numberField("Age at entry", 30, { min: 0, max: 85, step: 1 }), "age"));
    var defaultPremium = cfg.minPremium;
    if (!defaultPremium && cfg.minPremiumByPpt) defaultPremium = Math.max.apply(null, Object.keys(cfg.minPremiumByPpt).map(function (k) { return cfg.minPremiumByPpt[k]; }));
    if (!defaultPremium) defaultPremium = cfg.minPremiumRegular || 30000;
    grid.appendChild(markControl(numberField("Premium (₹, yearly mode)", defaultPremium, { min: 0, step: 1000 }), "premium"));

    if (cfg.termOptions) {
      grid.appendChild(markControl(selectField("Policy term", cfg.termOptions.map(function (t) { return { value: t, label: t + " years" }; }), cfg.termOptions.indexOf(20) >= 0 ? 20 : cfg.termOptions[Math.min(2, cfg.termOptions.length - 1)]), "term"));
    }
    if (cfg.pptOptions) {
      grid.appendChild(markControl(selectField("Premium paying term", cfg.pptOptions.map(function (p) { return { value: p, label: p + " years" }; }), cfg.pptOptions.indexOf(10) >= 0 ? 10 : cfg.pptOptions[0]), "ppt"));
    }
    if (cfg.bsaOptions) {
      grid.appendChild(markControl(selectField("Basic Sum Assured option", cfg.bsaOptions.map(function (o) { return { value: o.multiple, label: o.label }; }), cfg.bsaOptions[0].multiple), "bsaOption"));
    }
    if (cfg.bsa && cfg.bsa.type === "multipleInput") {
      grid.appendChild(markControl(numberField("Basic Sum Assured multiple", cfg.bsa.defaultMultiple, { min: 5, max: 40, step: 1 }), "bsaMultiple"));
    }
    grid.appendChild(markControl(selectField("Purchase channel", [
      { value: "offline", label: "Offline / agent" },
      { value: "online", label: "Online direct" }
    ], "offline"), "channel"));
    grid.appendChild(markControl(numberField("Assumed gross return (% p.a.)", 8, { min: 0, max: 20, step: 0.5 }), "returnPct"));
    grid.appendChild(markControl(numberField("Surrender year to show", 5, { min: 1, max: 42, step: 1 }), "surrenderYear"));
    if (cfg.pension) {
      grid.appendChild(markControl(numberField("Commutation at vesting (%)", 0, { min: 0, max: 60, step: 5 }), "commutationPct"));
    }

    function compute() {
      var inputs = getInputs(grid);
      var single = cfg.premiumType === "single" || (isBoth && inputs.premiumType === "single");
      var premium = inputs.premium || 0;
      var term = Math.round(inputs.term || (cfg.termOptions ? cfg.termOptions[0] : 20));
      var ppt = cfg.pptEqualsTerm ? term : Math.round(inputs.ppt || term);
      var age = inputs.age || 0;
      var channel = inputs.channel || "offline";
      var ret = inputs.returnPct || 0;
      var surrenderYear = clamp(Math.round(inputs.surrenderYear || 5), 1, term);
      var bsaOption = inputs.bsaOption || (cfg.bsaOptions ? cfg.bsaOptions[0].multiple : 0);
      var bsa = 0;
      if (cfg.bsaOptions) bsa = premium * bsaOption;
      else if (cfg.bsa) bsa = bsaFor(cfg, inputs, age, premium, single);
      var payYears = single ? 1 : Math.min(ppt, term);

      result.replaceChildren();
      var errors = [];
      if (premium <= 0) errors.push("Enter a premium.");
      if (cfg.minPremium && premium < cfg.minPremium) errors.push("Minimum premium for this plan is " + inr(cfg.minPremium) + ".");
      if (cfg.ageMin !== undefined && age < cfg.ageMin) errors.push("Minimum entry age is " + cfg.ageMin + ".");
      if (cfg.ageMax !== undefined && age > cfg.ageMax) errors.push("Maximum entry age is " + cfg.ageMax + ".");
      if (cfg.minPremiumByPpt) {
        var minP = cfg.minPremiumByPpt[String(ppt)] || cfg.minPremiumByPpt[String(term)];
        if (minP && premium < minP) errors.push("Minimum premium for PPT " + ppt + " is " + inr(minP) + ".");
      }
      if (isBoth) {
        var minBoth = single ? cfg.minPremiumSingle : cfg.minPremiumRegular;
        if (minBoth && premium < minBoth) errors.push("Minimum " + (single ? "single" : "regular") + " premium is " + inr(minBoth) + ".");
        if (cfg.ageMin !== undefined && age < cfg.ageMin) errors.push("Minimum entry age is " + cfg.ageMin + ".");
        if (cfg.ageMax !== undefined && age > cfg.ageMax) errors.push("Maximum entry age is " + cfg.ageMax + ".");
      }
      if (cfg.ageMaxByPpt) {
        var maxAge = cfg.ageMaxByPpt[String(ppt)];
        if (maxAge && age > maxAge) errors.push("For PPT " + ppt + ", maximum entry age is " + maxAge + ".");
      }
      if (cfg.bsaOptions) {
        var chosen = cfg.bsaOptions.filter(function (o) { return String(o.multiple) === String(bsaOption); })[0];
        if (chosen && age > chosen.ageMax) errors.push("For " + chosen.label + ", maximum entry age is " + chosen.ageMax + ".");
      }
      if (cfg.pptOptions && ppt === 15 && term < 15) errors.push("PPT 15 requires a policy term of at least 15 years.");
      if (cfg.bsa && cfg.bsa.type === "multipleByAge") {
        var maxAge2 = cfg.bsa.ageThreshold + 11;
        if (age > maxAge2) errors.push("Entry age above " + maxAge2 + " is not supported by this plan.");
      }
      if (cfg.pension && age + term > 85) errors.push("Vesting age must not exceed 85 (age + term).");
      if (errors.length) {
        var err = el("div", "calc-error");
        errors.forEach(function (e) { err.appendChild(el("p", "", e)); });
        result.appendChild(err);
        return;
      }

      var fund = 0;
      var totalPremiums = 0;
      var totalMortality = 0;
      var rows = [];
      var netRate = (1 + ret / 100) / (1 + cfg.fmc) - 1;
      for (var y = 1; y <= term; y += 1) {
        var premiumPaid = 0;
        if ((single && y === 1) || (!single && y <= payYears)) {
          premiumPaid = premium;
          totalPremiums += premium;
          var alloc = allocationFor(cfg, y, premium, channel, single);
          fund += premium * (1 - alloc);
        }
        fund = Math.max(0, fund - adminFor(cfg, y, premium, single));
        var mortality = 0;
        if (cfg.mortality) {
          var rate = interpolateRate(cfg.mortality, age + y - 1);
          var floor = cfg.deathFloor105 ? 1.05 * totalPremiums : 0;
          var sumAtRisk = Math.max(bsa || 0, floor, fund) - fund;
          if (sumAtRisk > 0) {
            mortality = rate * sumAtRisk / 1000;
            fund = Math.max(0, fund - mortality);
            totalMortality += mortality;
          }
        }
        fund += gaFor(cfg, y, premium, single) * premium;
        fund *= 1 + netRate;
        var death;
        if (cfg.pension) death = Math.max(fund, 1.05 * totalPremiums);
        else death = Math.max(bsa || 0, fund, cfg.deathFloor105 ? 1.05 * totalPremiums : 0);
        var surrender;
        if (y < cfg.lockIn) {
          var dc = discontinuanceFor(cfg, y, premium, fund, single);
          surrender = (fund - dc) * Math.pow(1.04, cfg.lockIn - y);
        } else {
          surrender = fund;
        }
        rows.push({ year: y, premiumPaid: premiumPaid, fund: fund, surrender: surrender, death: death, mortality: mortality });
      }
      var maturityFund = fund;
      var refund = cfg.mortalityRefund ? totalMortality : 0;
      var maturity = maturityFund + refund;
      var svRow = rows[surrenderYear - 1] || rows[rows.length - 1];

      var headline = el("div", "calc-headline");
      headline.appendChild(el("span", "calc-headline-label", cfg.pension ? "Vesting fund value" : "Maturity fund value"));
      headline.appendChild(el("strong", "", inr(maturityFund)));
      result.appendChild(headline);

      var cards = el("div", "calc-cards");
      function card(label, value, small) {
        var box = el("div", "calc-card");
        box.appendChild(el("span", "calc-card-label", label));
        box.appendChild(el("strong", "", value));
        if (small) box.appendChild(el("span", "calc-card-small", small));
        cards.appendChild(box);
      }
      card("Total premiums paid", inr(totalPremiums));
      if (cfg.mortalityRefund) card("Maturity benefit", inr(maturity), "includes " + inr(refund) + " mortality-charge refund");
      else card(cfg.pension ? "Vesting benefit" : "Maturity benefit", inr(maturity), cfg.pension ? "must be used to buy an annuity" : "");
      card("Death benefit at maturity", inr(rows[rows.length - 1].death));
      card("Surrender value in year " + surrenderYear, inr(svRow.surrender), surrenderYear < cfg.lockIn ? "payable/usable after the 5-year lock-in" : "");
      if (cfg.pension) {
        var commutation = maturityFund * clamp(inputs.commutationPct || 0, 0, 60) / 100;
        card("Maximum commutation", inr(maturityFund * 0.60), "up to 60% of the vesting fund");
        card("Annuity purchase amount", inr(maturityFund - commutation), "after " + inr(commutation) + " commutation");
      }
      result.appendChild(cards);

      var table = el("table", "calc-table");
      var thead = el("thead");
      var hr = el("tr");
      ["Year", "Premium paid", "Fund value", "Surrender value", "Death benefit"].forEach(function (h) { hr.appendChild(el("th", "", h)); });
      thead.appendChild(hr);
      table.appendChild(thead);
      var tbody = el("tbody");
      rows.forEach(function (r) {
        var tr = el("tr");
        tr.appendChild(el("td", "", r.year));
        tr.appendChild(el("td", "", inr(r.premiumPaid)));
        tr.appendChild(el("td", "", inr(r.fund)));
        tr.appendChild(el("td", "", inr(r.surrender)));
        tr.appendChild(el("td", "", inr(r.death)));
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      var scroll = el("div", "calc-table-wrap");
      scroll.appendChild(table);
      result.appendChild(scroll);
      if (cfg.pension) {
        result.appendChild(el("p", "calc-note", "This is a pension ULIP: surrender and vesting proceeds must be used to buy an annuity, except for commutation of up to 60% at vesting. The annuity rate is not projected."));
      }
      result.appendChild(el("p", "calc-note", "Assumed gross return: " + ret + "% p.a.; fund management charge " + pct(cfg.fmc) + " p.a.; yearly mode; no riders, top-ups, partial withdrawals or taxes."));
      result.appendChild(el("p", "calc-warning", "Illustrative projection only. Actual fund value depends on NAV performance and actual charges; it is not guaranteed. LIC's Benefit Illustration and policy document prevail."));
    }

    wrap.appendChild(grid);
    wrap.appendChild(result);
    grid.addEventListener("input", compute);
    grid.addEventListener("change", compute);
    compute();
    return wrap;
  }

  /* ---------------- shell ---------------- */
  var tabs = CFG.tabs || [];
  if (!tabs.length) return;
  var nav = el("div", "calc-tabs");
  var panel = el("div", "calc-panel");
  var active = 0;

  function show(index) {
    active = index;
    Array.prototype.forEach.call(nav.children, function (btn, i) {
      btn.classList.toggle("active", i === index);
      btn.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    panel.replaceChildren();
    var tab = tabs[index];
    if (tab.type === "premium") panel.appendChild(renderPremium(tab));
    else if (tab.type === "gsv") panel.appendChild(renderGsv(tab));
    else if (tab.type === "ulip") panel.appendChild(renderUlip(tab));
  }

  tabs.forEach(function (tab, i) {
    var btn = el("button", "calc-tab", tab.title);
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.addEventListener("click", function () { show(i); });
    nav.appendChild(btn);
  });
  ROOT.appendChild(nav);
  ROOT.appendChild(panel);
  var note = el("p", "calc-disclaimer");
  note.innerHTML = "Estimates only — not a quotation. For an exact premium or surrender value, use " +
    "<a href=\"https://ebiz.licindia.in/D2CPM/\" target=\"_blank\" rel=\"noopener noreferrer\">LIC's official quote flow</a> " +
    "or contact LIC. Policy document prevails.";
  ROOT.appendChild(note);
  show(0);
})();
