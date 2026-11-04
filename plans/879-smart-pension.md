---
plan_number: 879
plan_name: "LIC's Smart Pension"
uin: "512N386V01"
insurer: "Life Insurance Corporation of India"
category: "Annuity"
product_type: "Non-Par, Non-Linked, Single Premium, Individual Immediate Annuity Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-smart-pension"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 100
  entry_age_notes: "Minimum age 18 (last birthday). Maximum depends on the option: Option F — 100; Options E1 and E2 — 65; Options E3, E4 and E5 — 70; all other options (A, B1-B4, C1, C2, D, G1, G2, H1, H2, I1, I2, J) — 85. For joint life, both lives must satisfy the applicable limits. For Divyangjan under Option G2 or J, the minimum age restriction does not apply."
  maturity_age_max: null
  maturity_age_notes: "Not applicable — immediate annuity has no maturity benefit."
  policy_terms_years: "Not applicable — immediate annuity for life"
  policy_term_kind: "life_annuity"
  policy_term_min_years: null
  policy_term_max_years: null
  premium_paying_terms_years: "Single premium"
  ppt_min_years: null
  ppt_max_years: null
  ppt_term_pairs: "Not applicable"
  min_sum_assured: "Not applicable — annuity plan; see minimum purchase price"
  max_sum_assured: "Not applicable — annuity plan; maximum purchase price is no limit"
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "Minimum purchase price is ₹1,00,000, increased where needed to meet the minimum annuity. Minimum annuity is ₹1,000 monthly, ₹3,000 quarterly, ₹6,000 half-yearly or ₹12,000 yearly. For Divyangjan the minimum purchase price is ₹50,000 with no minimum annuity; for NPS subscribers the minimum purchase price is ₹50,000 and PFRDA rules apply."
  max_premium: "No limit, subject to underwriting"
  min_purchase_price: 100000
  max_purchase_price: "No limit, subject to underwriting"
  min_purchase_price_divyangjan: 50000
  min_purchase_price_nps: 50000
  min_annuity_by_mode:
    monthly: 1000
    quarterly: 3000
    half_yearly: 6000
    yearly: 12000
  annuity_options_count: 21
  joint_life_allowed_with: "Lineal descendant/ascendant of a family (grandparent, parent, children, grandchildren), spouse, siblings, or parent-in-law"

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly"]
  frequency_loadings: "Modal annuity conversion factors: yearly 1.00, half-yearly 0.98, quarterly 0.97, monthly 0.96"
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  min_purchase_price: 100000
  max_purchase_price: "No limit, subject to underwriting"
  rate_table_available: false
  illustrative_premiums:
    - basis: "Purchase price ₹10,00,000; yearly mode; primary annuitant age 60, secondary annuitant age 55; new customer through agents/intermediary; exclusive of taxes"
      figures:
        - {option: "A", annual_annuity: 85000}
        - {option: "B1", annual_annuity: 84500}
        - {option: "B2", annual_annuity: 83200}
        - {option: "B3", annual_annuity: 81400}
        - {option: "B4", annual_annuity: 79200}
        - {option: "C1", annual_annuity: 66200}
        - {option: "C2", annual_annuity: 54800}
        - {option: "D", annual_annuity: 81700}
        - {option: "E1", annual_annuity: 57900}
        - {option: "E2", annual_annuity: 51000}
        - {option: "E3", annual_annuity: 61400}
        - {option: "E4", annual_annuity: 57900}
        - {option: "E5", annual_annuity: 60900}
        - {option: "F", annual_annuity: 64900}
        - {option: "G1", annual_annuity: 78900}
        - {option: "G2", annual_annuity: 74000}
        - {option: "H1", annual_annuity: 60200}
        - {option: "H2", annual_annuity: 49400}
        - {option: "I1", annual_annuity: 55600}
        - {option: "I2", annual_annuity: 45100}
        - {option: "J", annual_annuity: 64300}
    - basis: "High purchase price incentive: absolute addition to the annual annuity rate per ₹1,000 of purchase price (₹)"
      figures:
        - {option_group: "C1, C2, H1, H2, I1, I2", below_5l: 0, band_5l_to_9_99l: 1.40, band_10l_to_24_99l: 1.80, band_25l_to_99_99l: 2.10, band_1cr_plus: 2.30}
        - {option_group: "A, B1, B2, B3, B4, D, E1, E2, E3, E4, E5, F, G1, G2, J", below_5l: 0, band_5l_to_9_99l: 2.30, band_10l_to_24_99l: 3.10, band_25l_to_99_99l: 3.60, band_1cr_plus: 3.80}
  incentives:
    existing_policyholder: "0.15% increase in tabular annuity rate"
    online_sale: "2.50%"
    nps_subscriber: "3.00%"
    incentive_notes: "Only one of the online-sale or NPS incentives may be chosen. The existing-policyholder incentive is available with online sale but not with NPS."
  premium_formula: "Annuity = purchase price × (tabular annuity rate for option, age and mode + high-purchase-price incentive per ₹1,000 purchase price) × (1 + applicable percentage incentive). Modal factors reduce non-yearly annuities: half-yearly 0.98, quarterly 0.97, monthly 0.96. Annuity rates are guaranteed at inception."
  notes: "Purchase price excludes taxes. The sample table is for a new customer buying through an agent/intermediary and does not include online, NPS or existing-policyholder incentives."

benefits:
  death_benefit: "Depends on the annuity option. A, C1, C2, G1, G2, H1, H2, I1, I2: no death benefit. B1-B4: annuity continues to the nominee to the end of the 5/10/15/20-year certain period. D: balance of purchase price (purchase price less annuities paid); nil if annuities paid exceed purchase price. E1/E2: purchase price less 50%/100% early return paid at age 75. E3/E4: purchase price less 50%/100% early return paid at age 80. E5: purchase price less 5% early returns paid each year from age 76 to 95. F: 100% of purchase price. J: 100% of purchase price on death of the last survivor."
  death_benefit_formula: "Option A/C/G/H/I: 0. Option B1-B4: remaining annuity instalments to end of certain period. Option D: max(0, purchase_price - total_annuities_paid). Option E1/E3: max(0, purchase_price - 0.50 * purchase_price_paid_as_early_return). Option E2/E4/E5: max(0, purchase_price - early_returns_paid). Option F: purchase_price. Option J: purchase_price on last death."
  maturity_benefit: "Not applicable — there is no maturity benefit under this plan."
  maturity_benefit_formula: "Not applicable"
  survival_benefits:
    - "Single-life options A-F pay the chosen annuity for life, with increasing or early-return-of-purchase-price variants as selected."
    - "Joint-life options G1-J pay the chosen annuity while the primary annuitant is alive and then the specified percentage (50% or 100%) or the same 100% annuity to the secondary annuitant, as applicable."
  annuity_options:
    - {option: "A", name: "Life annuity", death_benefit: "None; annuity ceases on death"}
    - {option: "B1", name: "Annuity certain for 5 years and life thereafter", death_benefit: "Annuity to nominee to end of 5-year certain period"}
    - {option: "B2", name: "Annuity certain for 10 years and life thereafter", death_benefit: "Annuity to nominee to end of 10-year certain period"}
    - {option: "B3", name: "Annuity certain for 15 years and life thereafter", death_benefit: "Annuity to nominee to end of 15-year certain period"}
    - {option: "B4", name: "Annuity certain for 20 years and life thereafter", death_benefit: "Annuity to nominee to end of 20-year certain period"}
    - {option: "C1", name: "Life annuity increasing at 3% simple p.a.", death_benefit: "None; annuity ceases on death"}
    - {option: "C2", name: "Life annuity increasing at 6% simple p.a.", death_benefit: "None; annuity ceases on death"}
    - {option: "D", name: "Life annuity with return of balance purchase price", death_benefit: "Balance of purchase price after annuities paid"}
    - {option: "E1", name: "Life annuity with 50% return of purchase price at age 75", death_benefit: "Purchase price less early return paid"}
    - {option: "E2", name: "Life annuity with 100% return of purchase price at age 75", death_benefit: "Purchase price less early return paid; nil if 100% already returned"}
    - {option: "E3", name: "Life annuity with 50% return of purchase price at age 80", death_benefit: "Purchase price less early return paid"}
    - {option: "E4", name: "Life annuity with 100% return of purchase price at age 80", death_benefit: "Purchase price less early return paid; nil if 100% already returned"}
    - {option: "E5", name: "Life annuity with 5% return of purchase price each year from age 76 to 95", death_benefit: "Purchase price less early returns paid; nil if 100% already returned"}
    - {option: "F", name: "Life annuity with return of purchase price", death_benefit: "100% of purchase price"}
    - {option: "G1", name: "Joint life annuity, 50% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "G2", name: "Joint life annuity, 100% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "H1", name: "Joint life annuity increasing at 3% simple p.a., 50% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "H2", name: "Joint life annuity increasing at 6% simple p.a., 50% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "I1", name: "Joint life annuity increasing at 3% simple p.a., 100% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "I2", name: "Joint life annuity increasing at 6% simple p.a., 100% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "J", name: "Joint life annuity, 100% to survivor, with return of purchase price on last death", death_benefit: "100% of purchase price on death of last survivor"}
  guaranteed_benefits: "Annuity rates are guaranteed at inception. The chosen payout pattern, certain periods, increasing annuities and return-of-purchase-price features are guaranteed."
  non_guaranteed_benefits: "None — the plan is non-par and all benefits are guaranteed."
  riders: "Not applicable — no riders are available."
  other_benefits:
    - "Death benefit may be taken as lump sum, annuitisation or instalments over 5/10/15 years"
    - "Liquidity option under Options F and J"
    - "Advanced annuity option under Option J"
    - "Annuity accumulation option under all annuity options"
    - "Online, NPS and existing-policyholder incentives"
    - "Special minimum purchase price for Divyangjan and NPS subscribers"

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed under Options D, E1, E2, E3, E4, E5, F and J only; no surrender is allowed under the other options. Option D: surrender value = (purchase price − annuities paid) × SV factor. Options E1-E5: (purchase price − early returns paid) × SV factor. Options F and J: purchase price × SV factor. The SV factor is 80.00% in policy year 1 and rises by 0.50% each year to 90.00% in year 21 and later; it is 92.50% after 35 policy years or after age 100. If annuities or early returns already paid exceed the purchase price, no surrender value is payable."
  paid_up: false
  paid_up_terms: "Not applicable — single premium immediate annuity."
  revival: false
  revival_period_years: null
  free_look_days: 30
  grace_period_days:
    yearly: null
    half_yearly: null
    quarterly: null
    monthly_nach: null
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable as a regular partial withdrawal. The Liquidity Option under Options F and J allows a lump sum after 5 years, up to 3 times and up to 60% of purchase price, with a pro-rata reduction in annuity and benefits."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "No exclusions are stated in the brochure. Death due to any cause is covered as per the chosen annuity option."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Applicable taxes, including GST, are payable in addition to the purchase price at prevailing rates."
  notes: "The brochure states that the purchase price excludes taxes, which are payable separately. Income-tax treatment of the purchase price, annuity and death benefit is not stated; consult a tax adviser."

decision:
  primary_goals: ["retirement"]
  risk_profile: "Guaranteed (non-par)"
  liquidity: "Medium"
  time_horizon: "Whole life"
  minimum_age: 18
  maximum_age: 100
  suitable_for:
    - "Retirees who want a guaranteed lifelong annuity with a choice of 21 payout and death-benefit structures"
    - "Couples wanting a joint-life annuity with 50% or 100% continuation to a spouse, sibling, lineal relative or parent-in-law"
    - "Buyers who want return of purchase price at a chosen age, at death, or gradually from age 76"
    - "NPS subscribers and families of Divyangjan who need the special purchase-price and option rules"
  not_suitable_for:
    - "Anyone needing capital liquidity; surrender is allowed only under 8 of the 21 options and at a discount"
    - "Investors seeking inflation protection; only Options C1/C2/H1/H2/I1/I2 increase, and only at 3% or 6% simple"
    - "Buyers who may need a loan; loans are restricted to Options E1-E5, F and J"
    - "People who have not yet accumulated a retirement corpus; this is an immediate annuity, not an accumulation product"
  key_tradeoffs:
    - "The annuity option cannot be changed after purchase"
    - "Surrender and loan access are restricted to specific options; early surrender starts at 80% of purchase price"
    - "Level annuities lose purchasing power; the increasing options start from a much lower initial annuity"
    - "Return-of-purchase-price features reduce the annual annuity compared with life-only options"
    - "Joint-life relationships are limited to family, spouse, siblings and parent-in-law"
  decision_flags: ["immediate_annuity", "single_premium", "21_annuity_options", "return_of_purchase_price_options", "surrender_option_limited", "loan_limited_options", "no_inflation_indexation", "nps_supported", "divyangjan_supported", "guaranteed"]

calculation_inputs:
  required_inputs: ["age_at_entry", "secondary_age_for_joint_life", "purchase_price", "annuity_option", "annuity_mode", "relationship_for_joint_life"]
  optional_inputs: ["online_purchase", "nps_subscriber", "existing_policyholder", "high_purchase_price_incentive", "liquidity_option", "advanced_annuity_option", "annuity_accumulation_option"]
  rate_table_available: false
  formulas:
    annuity: "purchase_price × (tabular_annuity_rate(option, age, mode) + high_purchase_price_incentive_per_1000 × purchase_price / 1000) × (1 + percentage_incentive)"
    modal_annuity: "yearly_annuity × modal_factor (half-yearly 0.98, quarterly 0.97, monthly 0.96)"
    death_benefit_option_d: "max(0, purchase_price - total_annuities_paid)"
    death_benefit_option_e: "max(0, purchase_price - early_returns_paid)"
    death_benefit_option_f: "purchase_price"
    death_benefit_option_j: "purchase_price on death of last survivor"
    surrender_value_option_d: "max(0, purchase_price - total_annuities_paid) × sv_factor"
    surrender_value_option_e: "max(0, purchase_price - early_returns_paid) × sv_factor"
    surrender_value_option_f_j: "purchase_price × sv_factor"
    sv_factor: "0.80 in year 1, +0.005 per policy year to 0.90 at year 21+; 0.925 after 35 years or age 100"
    maximum_loan: "min(0.80 × surrender_value, 0.50 × annual_annuity / loan_interest_rate)"
  assumptions:
    - "The sample annuity table is for a new customer through an agent/intermediary, yearly mode, purchase price ₹10,00,000, age 60 and secondary age 55."
    - "The high-purchase-price incentive is an absolute addition per ₹1,000 of purchase price, applied before percentage incentives."
    - "Taxes are excluded from all illustrations."

sources:
  - name: "Customer Information Sheet (CIS), 10-01-2025"
    url: "https://licindia.in/documents/20121/1350069/CIS_Smart+Pension_10012025+-withlogo.pdf/61999606-1bd6-0fcd-c18c-6f2ef47611fb?t=1739879171577"
  - name: "Sales Brochure, 17-02-2025"
    url: "https://licindia.in/documents/20121/1350069/Smart+Pension+Individual_Sales+Brochure+Eng+.pdf/c4a8df82-70f2-ada0-ed09-6c2a0e803b3c?t=1739879169312"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1350069/Policy+Doc-Smart+Pension_with+logo.pdf/a2326484-e9e5-8ff9-e2cb-66eea01e7fff?t=1739879170750"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-smart-pension"
---
# LIC's Smart Pension — Plan 879

**One-line summary:** A single-premium immediate annuity with 21 payout options, including joint-life, increasing, annuity-certain and several return-of-purchase-price structures.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 879 |
| UIN | 512N386V01 |
| Product type | Non-par, non-linked, single premium, individual immediate annuity |
| Status | Active |
| Entry age | 18 to 100, depending on the option |
| Annuity options | 21 options covering single life, joint life, certain periods, increasing annuities and return of purchase price |
| Mode | Yearly, half-yearly, quarterly or monthly, in arrears |
| Minimum purchase price | ₹1,00,000 (₹50,000 for Divyangjan or NPS, subject to rules) |
| Minimum annuity | ₹1,000/month, ₹3,000/quarter, ₹6,000/half-year, ₹12,000/year |
| Maximum purchase price | No limit, subject to underwriting |
| Surrender | Only under Options D, E1-E5, F and J |
| Loan | Only under Options E1-E5, F and J |
| Official page | https://licindia.in/en/web/guest/lic-s-smart-pension |

## Eligibility

| Annuity option | Minimum age | Maximum age |
|---|---:|---:|
| Option F | 18 | 100 |
| Options E1 and E2 | 18 | 65 |
| Options E3, E4 and E5 | 18 | 70 |
| Options A, B1-B4, C1, C2, D, G1, G2, H1, H2, I1, I2, J | 18 | 85 |

- **Joint life:** both lives must satisfy the applicable age limits. The joint annuitant may be a lineal descendant/ascendant (grandparent, parent, children, grandchildren), spouse, sibling, or parent-in-law.
- **Minimum purchase price:** ₹1,00,000, increased where needed to meet the minimum annuity. For Divyangjan the minimum is ₹50,000 with no minimum annuity; for NPS subscribers the minimum is ₹50,000 and PFRDA rules apply.
- **Minimum annuity:** ₹1,000 monthly, ₹3,000 quarterly, ₹6,000 half-yearly, ₹12,000 yearly. No maximum annuity.
- **Maximum purchase price:** no limit, subject to underwriting.
- **POSP-LI/CPSC-SPV:** only Options F and J, with entry age 40-70.
- **QROPS:** minimum age 55.

The annuity option, once chosen, cannot be altered.

## Purchase price and annuity rates

- **Purchase price:** single premium, excluding taxes.
- **Modes:** yearly, half-yearly, quarterly and monthly, in arrears.
- **Modal annuity conversion factors:** yearly 1.00, half-yearly 0.98, quarterly 0.97, monthly 0.96.
- **High purchase price incentive:** an absolute addition to the annual annuity rate per ₹1,000 of purchase price. For options C1, C2, H1, H2, I1 and I2: nil below ₹5 lakh; ₹1.40 (₹5-9.99 lakh); ₹1.80 (₹10-24.99 lakh); ₹2.10 (₹25-99.99 lakh); ₹2.30 (₹1 crore+). For all other options: nil; ₹2.30; ₹3.10; ₹3.60; ₹3.80 respectively.
- **Existing policyholder/nominee:** 0.15% increase in tabular annuity rate.
- **Direct sale:** online 2.50%; NPS subscribers 3.00%. Only one of these may be chosen. The existing-policyholder incentive is available with online sale but not with NPS.

### Illustrative premiums

Sample annual annuities for a purchase price of ₹10,00,000, yearly mode, primary annuitant age 60 and secondary annuitant age 55, new customer through an agent/intermediary, exclusive of taxes:

| Option | Annual annuity | Option | Annual annuity |
|---|---:|---|---:|
| A | ₹85,000 | C1 | ₹66,200 |
| B1 | ₹84,500 | C2 | ₹54,800 |
| B2 | ₹83,200 | D | ₹81,700 |
| B3 | ₹81,400 | E1 | ₹57,900 |
| B4 | ₹79,200 | E2 | ₹51,000 |
| E3 | ₹61,400 | E4 | ₹57,900 |
| E5 | ₹60,900 | F | ₹64,900 |
| G1 | ₹78,900 | G2 | ₹74,000 |
| H1 | ₹60,200 | H2 | ₹49,400 |
| I1 | ₹55,600 | I2 | ₹45,100 |
| J | ₹64,300 | | |

No published rate table; rates are quoted by LIC's calculator/underwriting.

## Benefits

### Annuity options and death benefits

| Option | Annuity description | Death benefit |
|---|---|---|
| A | Life annuity | None; annuity ceases on death |
| B1 | Annuity certain for 5 years, then life | Annuity to nominee to end of 5-year certain period |
| B2 | Annuity certain for 10 years, then life | Annuity to nominee to end of 10-year certain period |
| B3 | Annuity certain for 15 years, then life | Annuity to nominee to end of 15-year certain period |
| B4 | Annuity certain for 20 years, then life | Annuity to nominee to end of 20-year certain period |
| C1 | Life annuity increasing at 3% simple p.a. | None; annuity ceases on death |
| C2 | Life annuity increasing at 6% simple p.a. | None; annuity ceases on death |
| D | Life annuity with return of balance purchase price | Balance of purchase price after annuities paid; nil if annuities exceed purchase price |
| E1 | Life annuity with 50% return of purchase price at age 75 | Purchase price less early return paid |
| E2 | Life annuity with 100% return of purchase price at age 75 | Purchase price less early return paid; nil if 100% already returned |
| E3 | Life annuity with 50% return of purchase price at age 80 | Purchase price less early return paid |
| E4 | Life annuity with 100% return of purchase price at age 80 | Purchase price less early return paid; nil if 100% already returned |
| E5 | Life annuity with 5% return of purchase price each year from age 76 to 95 | Purchase price less early returns paid; nil if 100% already returned |
| F | Life annuity with return of purchase price | 100% of purchase price |
| G1 | Joint life, 50% to secondary annuitant | None; annuity ceases on last death |
| G2 | Joint life, 100% to secondary annuitant | None; annuity ceases on last death |
| H1 | Joint life increasing at 3% simple p.a., 50% to secondary annuitant | None; annuity ceases on last death |
| H2 | Joint life increasing at 6% simple p.a., 50% to secondary annuitant | None; annuity ceases on last death |
| I1 | Joint life increasing at 3% simple p.a., 100% to secondary annuitant | None; annuity ceases on last death |
| I2 | Joint life increasing at 6% simple p.a., 100% to secondary annuitant | None; annuity ceases on last death |
| J | Joint life, 100% to survivor, with return of purchase price on last death | 100% of purchase price on death of last survivor |

For quarterly and monthly modes, no proportionate annuity is paid from the last instalment date to death. For half-yearly mode, 50% of the half-yearly instalment is paid if death occurs more than three months after the last instalment; for yearly mode, 50% of the yearly instalment is paid if death occurs more than six months after the last instalment.

### Maturity benefit

Not applicable. There is no maturity benefit under this plan.

## Optional benefits and riders

- **Riders:** none.
- **Death benefit payment options:** lump sum, annuitisation of the death benefit, or instalments over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The instalment interest rate is 5.07% per annum effective for 1 May 2024 to 30 April 2025.
- **Liquidity Option:** available under Options F and J only, after completion of 5 policy years, up to 3 times, with total liquidity not exceeding 60% of the purchase price. The annuity and other benefits are reduced pro rata.
- **Advanced Annuity Option:** available under Option J only, on the first death, within one year. The survivor may take up to 5 years of annuities in advance as a discounted lump sum. The discount rate is 7.05% per annum compounding half-yearly for 2024-25. No loan may be outstanding and no new loan may be taken during the advance period.
- **Annuity Accumulation Option:** available under all annuity options. Annuities may be deferred in blocks of 5 consecutive years, up to 3 blocks. The accumulation rate is 6.67% per annum for 2024-25; on surrender or cancellation of the option, accumulated values are recalculated at 5.67% per annum. No loan may be outstanding during a block.
- **NPS subscribers:** annuity options allowed by PFRDA; a Government Sector NPS subscriber buying the default option gets Option J if a spouse survives, otherwise Option F, with purchase price later used to buy an annuity for a living dependent parent.
- **Divyangjan:** the plan may be bought for a dependent person with disability, either as Option F on the proposer's life with the death benefit used to buy an annuity for the Divyangjan nominee, or as Option G2/J with the Divyangjan as secondary annuitant. Minimum purchase price is ₹50,000 and the minimum age restriction does not apply.
- **QROPS:** available subject to HMRC rules, with a minimum age of 55.
- **Mode change:** allowed from a policy anniversary with 90 days' notice; changes from lower to higher frequency are limited to two.

## Surrender, loan, paid-up and revival

### Surrender

Surrender is allowed only under Options D, E1, E2, E3, E4, E5, F and J. No surrender is allowed under the other options.

| Option | Surrender value formula |
|---|---|
| D | (Purchase price − annuities paid) × SV factor |
| E1-E5 | (Purchase price − early returns paid) × SV factor |
| F and J | Purchase price × SV factor |

The SV factor is 80.00% in policy year 1 and rises by 0.50% each year to 90.00% in year 21 and later. It is 92.50% after completion of 35 policy years or after age 100. If annuities or early returns already paid exceed the purchase price, no surrender value is payable. The surrender value is reviewable by LIC.

### Loan

A loan is available after three months from issue or after free-look expiry, whichever is later, under Options E1, E2, E3, E4, E5, F and J only. Under joint life, the primary annuitant may avail it and, after the primary's death, the secondary annuitant may avail it.

The loan must satisfy both: annual interest not exceeding 50% of the annual annuity, and the loan not exceeding 80% of the surrender value. Interest is recovered from annuity payments and accrues at the annuity frequency. The loan is recovered from claim proceeds or from any early return of purchase price. The interest rate for loans commencing between 1 May 2024 and 30 April 2025 is 9.50% per annum compounding half-yearly for the full loan term.

### Paid-up, revival, grace and free look

- **Paid-up:** not applicable — single premium immediate annuity.
- **Revival:** not applicable.
- **Grace period:** not applicable.
- **Free look:** 30 days.

## Exclusions and conditions

- **Exclusions:** no exclusions are stated in the brochure. Death from any cause is covered as per the chosen annuity option.
- **Option change:** the annuity option cannot be changed after purchase.
- **Joint life:** only the permitted relationships; both lives must satisfy the age limits.
- **Surrender and loan:** restricted to the options listed above.
- **Death benefit:** must be paid as per the option chosen by the annuitant; the nominee cannot alter it.
- **Taxes:** purchase price excludes taxes, which are payable separately.

## Tax treatment

The brochure states that the purchase price excludes taxes and that taxes, including GST, are payable separately at prevailing rates. It does not state the income-tax treatment of the purchase price, annuity or death benefit. Consult a tax adviser.

## Suitability and decision notes

**Best suited to:** retirees who want a guaranteed lifelong annuity with a choice of 21 payout and death-benefit structures. It fits couples wanting a joint-life annuity with 50% or 100% continuation to a spouse, sibling, lineal relative or parent-in-law, and buyers who want return of purchase price at a chosen age, at death, or gradually from age 76. It also accommodates NPS subscribers and families of Divyangjan.

**Poor fit for:** anyone needing capital liquidity (surrender is allowed only under 8 of the 21 options and at a discount), investors seeking inflation protection (only six options increase, at 3% or 6% simple), buyers who may need a loan (restricted to Options E1-E5, F and J), and people who have not yet accumulated a retirement corpus.

**Key trade-offs:** the annuity option cannot be changed; surrender and loan access are restricted; level annuities lose purchasing power; return-of-purchase-price features reduce the annual annuity compared with life-only options; and joint-life relationships are limited.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Option-specific maximum age |
| Secondary age | For joint life | Both lives must satisfy age limits |
| Purchase price | Yes | Minimum ₹1,00,000; ₹50,000 for Divyangjan/NPS |
| Annuity option | Yes | 21 options; cannot be changed |
| Annuity mode | Yes | Modal factors 1.00 / 0.98 / 0.97 / 0.96 |
| Relationship | For joint life | Spouse, sibling, lineal relative or parent-in-law |
| Online/NPS/existing incentive | Optional | Only one of online or NPS; existing can combine with online |
| High purchase price | Automatic by slab | Absolute addition per ₹1,000 purchase price |
| Liquidity option | Optional | Options F and J; after 5 years; max 3 times; ≤60% of purchase price |
| Advanced annuity | Optional | Option J only; after first death; max 5 years |
| Annuity accumulation | Optional | All options; 5-year blocks; max 3 blocks |

```text
Annuity                  = purchase_price × (tabular_annuity_rate(option, age, mode)
                           + high_purchase_price_incentive_per_1000 × purchase_price / 1000)
                           × (1 + percentage_incentive)
Modal annuity            = yearly_annuity × factor (half-yearly 0.98, quarterly 0.97, monthly 0.96)
Death benefit (D)        = max(0, purchase_price − annuities_paid)
Death benefit (E1-E5)    = max(0, purchase_price − early_returns_paid)
Death benefit (F)        = purchase_price
Death benefit (J)        = purchase_price on last death
Surrender value (D)      = max(0, purchase_price − annuities_paid) × SV_factor
Surrender value (E1-E5)  = max(0, purchase_price − early_returns_paid) × SV_factor
Surrender value (F, J)   = purchase_price × SV_factor
SV factor                = 0.80 in year 1, +0.005 per year to 0.90 at year 21+; 0.925 after 35 years or age 100
Maximum loan             = min(0.80 × surrender_value, 0.50 × annual_annuity / loan_interest_rate)
```

## Source documents

- [Customer Information Sheet (CIS), 10-01-2025](https://licindia.in/documents/20121/1350069/CIS_Smart+Pension_10012025+-withlogo.pdf/61999606-1bd6-0fcd-c18c-6f2ef47611fb?t=1739879171577)
- [Sales Brochure, 17-02-2025](https://licindia.in/documents/20121/1350069/Smart+Pension+Individual_Sales+Brochure+Eng+.pdf/c4a8df82-70f2-ada0-ed09-6c2a0e803b3c?t=1739879169312)
- [Policy Document](https://licindia.in/documents/20121/1350069/Policy+Doc-Smart+Pension_with+logo.pdf/a2326484-e9e5-8ff9-e2cb-66eea01e7fff?t=1739879170750)
- [Official product page](https://licindia.in/en/web/guest/lic-s-smart-pension)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
