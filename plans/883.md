---
plan_number: 883
plan_name: "LIC's Jeevan Utsav Single Premium"
uin: "512N392V01"
insurer: "Life Insurance Corporation of India"
category: "WholeLife"
product_type: "Non-Par, Non-Linked, Individual, Savings, Whole Life Insurance Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav-single-premium"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0
  entry_age_max: 65
  entry_age_notes: "Minimum entry age depends on the chosen Guaranteed Addition Period: GA 7 years — 10 years; GA 8 — 9 years; GA 9 — 8 years; GA 10 — 7 years; GA 11 — 6 years; GA 12 — 5 years; GA 13 — 4 years; GA 14 — 3 years; GA 15 — 2 years; GA 16 — 1 year; GA 17 — 30 days. Maximum 65 years (age nearer birthday). The life assured must be at least 18 completed years on the due date of the first income benefit."
  maturity_age_max: 100
  maturity_age_notes: "Maturity age is 100 years (age nearer birthday). Policy term = 100 − age at entry."
  policy_terms_years: "Whole life; term = 100 − age at entry (maturity at age 100)"
  policy_term_kind: "whole_life"
  policy_term_min_years: null
  policy_term_max_years: null
  premium_paying_terms_years: "Single premium"
  ppt_min_years: null
  ppt_max_years: null
  ppt_term_pairs: "Not applicable"
  min_sum_assured: "₹5,00,000 Basic Sum Assured"
  max_sum_assured: "No limit, subject to underwriting"
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No separate minimum premium is stated; the minimum Basic Sum Assured of ₹5,00,000 determines the minimum single premium. BSA multiples are ₹25,000 from ₹5,00,000 to ₹24,50,000 and ₹50,000 above ₹24,50,000."
  max_premium: "No limit, subject to underwriting"
  guaranteed_addition_period_years: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  survival_benefit_options: ["Option I — Regular Income Benefit", "Option II — Flexi Income Benefit"]

premium:
  modes: ["Single premium"]
  frequency_loadings: "Not applicable (single premium)"
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: true
  illustrative_premiums:
    - basis: "Single premium for Basic Sum Assured ₹5,00,000; standard life; offline purchase; exclusive of taxes; applicable to both Survival Benefit Options"
      figures:
        - {age_at_entry: 10, guaranteed_addition_period_years: 8, single_premium: 464150}
        - {age_at_entry: 30, guaranteed_addition_period_years: 8, single_premium: 464150}
        - {age_at_entry: 50, guaranteed_addition_period_years: 8, single_premium: 464150}
        - {age_at_entry: 10, guaranteed_addition_period_years: 12, single_premium: 361875}
        - {age_at_entry: 30, guaranteed_addition_period_years: 12, single_premium: 361875}
        - {age_at_entry: 50, guaranteed_addition_period_years: 12, single_premium: 361875}
        - {age_at_entry: 10, guaranteed_addition_period_years: 16, single_premium: 285725}
        - {age_at_entry: 30, guaranteed_addition_period_years: 16, single_premium: 286725}
        - {age_at_entry: 50, guaranteed_addition_period_years: 16, single_premium: 300800}
  rebates:
    high_bsa_per_thousand_bsa:
      - {age_band: "0-20", bsa_5l_to_9_75l: 0, bsa_10l_to_24_5l: 11, bsa_25l_to_49_5l: 19, bsa_50l_plus: 21}
      - {age_band: "21-40", bsa_5l_to_9_75l: 0, bsa_10l_to_24_5l: 9, bsa_25l_to_49_5l: 15, bsa_50l_plus: 18}
      - {age_band: "41-55", bsa_5l_to_9_75l: 0, bsa_10l_to_24_5l: 6.5, bsa_25l_to_49_5l: 12, bsa_50l_plus: 13}
      - {age_band: "56-65", bsa_5l_to_9_75l: 0, bsa_10l_to_24_5l: 5, bsa_25l_to_49_5l: 9, bsa_50l_plus: 10}
    online_rebate: "2% of tabular single premium"
    existing_policyholder_per_thousand_bsa:
      - {guaranteed_addition_period_years: "7-9", rebate: 0.80}
      - {guaranteed_addition_period_years: "10-14", rebate: 0.90}
      - {guaranteed_addition_period_years: "15-17", rebate: 1.00}
  premium_formula: "Tabular single premium is read from the LIC premium table by age at entry, Basic Sum Assured and Guaranteed Addition Period. Deduct the high-BSA rebate (per ₹1,000 BSA), the online rebate (2% of tabular single premium) and the existing-policyholder/nominee rebate (per ₹1,000 BSA). Add taxes, underwriting extra and rider premiums. Sum Assured on Death and on Maturity = max(BSA, 1.25 × tabular single premium)."
  notes: "Illustrative premiums are exclusive of taxes. Rebates reduce the amount paid but do not reduce the tabular single premium used in the Sum Assured on Death/Maturity formula. The brochure illustration at age 35, BSA ₹10,00,000 and GA 10 shows a tabular single premium of ₹8,17,650, a high-BSA rebate of ₹9,000 and a premium payable of ₹8,08,650."

benefits:
  death_benefit: "Sum Assured on Death plus accrued Guaranteed Additions. Under Option II, the accumulated Flexi Income Benefit balance is also payable. Sum Assured on Death is the higher of Basic Sum Assured or 1.25 times the tabular single premium. For a minor life assured whose age at entry is below 8 years, death before commencement of risk returns the single premium paid, excluding taxes, extra premium and rider premiums, without interest."
  death_benefit_formula: "max(bsa, 1.25 * tabular_single_premium) + accrued_guaranteed_additions + (option_ii ? accumulated_flexi_income_balance : 0)"
  maturity_benefit: "Sum Assured on Maturity plus accrued Guaranteed Additions on survival to age 100. Under Option II, the accumulated Flexi Income Benefit balance is also payable."
  maturity_benefit_formula: "max(bsa, 1.25 * tabular_single_premium) + accrued_guaranteed_additions + (option_ii ? accumulated_flexi_income_balance : 0)"
  survival_benefits:
    - option: "Option I — Regular Income Benefit"
      description: "Regular Income Benefit equal to 10% of Basic Sum Assured is payable each policy year from the income start year until the policy anniversary immediately before maturity or until death, if earlier. The income start year is the policy year following the end of the Guaranteed Addition Period: GA 7 starts in policy year 8, GA 8 in year 9, and so on up to GA 17 starting in policy year 18."
    - option: "Option II — Flexi Income Benefit"
      description: "The same 10% of Basic Sum Assured is not paid immediately but is deferred and accumulated at 5.5% per annum compounded yearly for completed months. The policyholder may withdraw once in a policy year, up to 75% of the accumulated Flexi Income Benefit balance. The balance is payable on death, maturity or surrender. The option may be switched during the Guaranteed Addition Period."
  guaranteed_benefits: "Guaranteed Additions accrue at ₹40 per ₹1,000 Basic Sum Assured at the end of each policy year during the Guaranteed Addition Period. Survival benefits, maturity benefit and death benefit are guaranteed at inception."
  non_guaranteed_benefits: "None — the plan is non-par and all benefits are guaranteed."
  riders:
    - "LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)"
    - "LIC's New Term Assurance Rider (UIN: 512B210V02)"
  other_benefits:
    - "Option to take the maturity benefit or death benefit in instalments over 5, 10 or 15 years (settlement option)"
    - "Option to switch between Regular Income Benefit and Flexi Income Benefit during the Guaranteed Addition Period"
    - "Policy loan after three months from issue or free-look expiry, whichever is later"
  guaranteed_addition_rate: "₹40 per ₹1,000 Basic Sum Assured per policy year during the Guaranteed Addition Period"
  sum_assured_on_death: "Higher of Basic Sum Assured or 1.25 × tabular single premium"
  sum_assured_on_maturity: "Higher of Basic Sum Assured or 1.25 × tabular single premium"

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered at any time. The payable amount is the higher of (a) Guaranteed Surrender Value plus the surrender value of accrued Guaranteed Additions or (b) Special Surrender Value. Guaranteed Surrender Value is 75% of the single premium in policy years 1-3 and 90% of the single premium reduced by Regular Income Benefits due and paid thereafter. Accrued Guaranteed Additions are valued using the brochure's GA surrender-factor table (0% in years 1-2, 2.00% in year 3, rising to 35.00% at year 35 and later). Under Option II the accumulated Flexi Income Benefit balance is also paid."
  paid_up: false
  paid_up_terms: "Not applicable — single premium plan."
  revival: false
  revival_period_years: null
  free_look_days: 30
  grace_period_days:
    yearly: null
    half_yearly: null
    quarterly: null
    monthly_nach: null
  partial_withdrawal: true
  partial_withdrawal_terms: "Under Option II only, one withdrawal per policy year of up to 75% of the accumulated Flexi Income Benefit balance. This is a withdrawal of accumulated income, not a general partial withdrawal from the base policy."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months from commencement of risk: nominee receives the higher of 80% of the single premium paid (excluding taxes, extra premium and rider premiums other than Term Assurance Rider premium) or the surrender value on the date of death, and no other claim is payable. This clause does not apply if the age at entry is below 8 years. Death of a minor life assured before commencement of risk returns the single premium excluding taxes, extra and rider premiums, without interest."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "GST is currently exempt on premiums as stated in the brochure illustration; taxes, if any, are charged extra as per prevailing law."
  notes: "The CIS states that taxes, if any, are charged extra. The brochure illustration states that GST is currently exempted. Income-tax treatment of premiums, income and maturity proceeds is not stated in the documents."

decision:
  primary_goals: ["savings", "retirement", "protection"]
  risk_profile: "Guaranteed (non-par)"
  liquidity: "Medium"
  time_horizon: "Whole life"
  minimum_age: 0
  maximum_age: 65
  suitable_for:
    - "Investors who want a guaranteed lifelong income starting after a chosen 7-17 year accumulation period"
    - "People deploying a lump sum who value a guaranteed maturity value at age 100 and a death benefit"
    - "Buyers who may want to defer and accumulate income rather than receive it immediately (Option II)"
    - "Policyholders who want loan access against a whole-life policy"
  not_suitable_for:
    - "Anyone who needs capital liquidity in the first three years; surrender returns only 75% of the single premium"
    - "Investors seeking inflation-linked or market-linked returns; income is a fixed 10% of BSA"
    - "Buyers with less than ₹5,00,000 to commit as Basic Sum Assured"
    - "People needing income immediately; the first income starts only after the 7-17 year GA period"
  key_tradeoffs:
    - "Long accumulation period before income starts; the income is fixed in nominal terms and is not indexed to inflation"
    - "Early surrender returns 75% of the single premium in years 1-3 and 90% less income already paid thereafter, plus a separately valued GA component"
    - "Guaranteed Additions accrue only during the selected GA period, not for the whole policy term"
    - "The death/maturity sum assured is floored at 1.25 × the tabular single premium, which can exceed the BSA for older ages"
  decision_flags: ["whole_life", "single_premium", "guaranteed_income", "maturity_at_100", "minimum_bsa_5_lakh", "no_inflation_indexation", "early_surrender_penalty", "loan_available", "flexi_income_option"]

calculation_inputs:
  required_inputs: ["age_at_entry", "basic_sum_assured", "guaranteed_addition_period", "survival_benefit_option", "tabular_single_premium", "purchase_channel"]
  optional_inputs: ["existing_policyholder_rebate", "riders", "settlement_option", "flexi_withdrawals"]
  rate_table_available: true
  formulas:
    policy_term: "100 - age_at_entry"
    guaranteed_additions_total: "40 * (bsa / 1000) * guaranteed_addition_period_years"
    sum_assured_on_death: "max(bsa, 1.25 * tabular_single_premium)"
    sum_assured_on_maturity: "max(bsa, 1.25 * tabular_single_premium)"
    regular_income: "0.10 * bsa per policy year from income_start_year to the year before maturity"
    flexi_accumulation: "flexi_balance = flexi_balance * (1 + 0.055)^(completed_months / 12) + 0.10 * bsa"
    death_benefit_option_i: "sum_assured_on_death + accrued_guaranteed_additions"
    death_benefit_option_ii: "sum_assured_on_death + accrued_guaranteed_additions + accumulated_flexi_balance"
    maturity_benefit: "sum_assured_on_maturity + accrued_guaranteed_additions + (option_ii ? accumulated_flexi_balance : 0)"
    guaranteed_surrender_value: "years_1_to_3 ? 0.75 * single_premium : 0.90 * single_premium - regular_income_paid"
    total_surrender_value: "max(gsv + ga_surrender_value, special_surrender_value) + (option_ii ? accumulated_flexi_balance : 0)"
    loan_limit_during_ga: "surrender_value * (0.60 for GA 7-10; 0.50 for GA 11-14; 0.40 for GA 15-17)"
    loan_limit_after_ga: "min(0.75 * surrender_value, annual_income / 0.50)"
  assumptions:
    - "All amounts are exclusive of taxes, underwriting extras and rider premiums."
    - "Illustrative premiums use standard lives and offline purchase; online and existing-policyholder rebates are not applied."
    - "Guaranteed Additions are ₹40 per ₹1,000 BSA per policy year during the GA period and accrue in full in the year of death."
    - "Option II accumulation is at 5.5% p.a. compounded yearly for completed months; withdrawals are assumed at the start of the policy year."

sources:
  - name: "Customer Information Sheet (CIS), 13-01-2026"
    url: "https://licindia.in/documents/20121/1639841/CIS_Jeevan+Utsav+Single+Premium_13012026.pdf/452fefc3-79d1-76e1-80eb-d27005f9aa00?t=1768289247449"
  - name: "Sales Brochure, 19-12-2025"
    url: "https://licindia.in/documents/20121/1639835/LIC_Jeevan+Utsav++Single+Premium_Sales+Brochure_English.pdf/4f48bd54-fab2-1b97-cc38-fb19dc663399?t=1768116819230"
  - name: "Policy Document, 13-01-2026"
    url: "https://licindia.in/documents/20121/1639838/Policy+Document_Jeevan+Utsav+Single+Premium_13012026.pdf/7f1b27d0-734a-f571-bfb7-cf208663897f?t=1768289226196"
  - name: "Official product page"
    url: "https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav-single-premium"
---
# LIC's Jeevan Utsav Single Premium — Plan 883

**One-line summary:** A non-par whole-life savings plan bought with one premium, which pays a guaranteed 10% of Basic Sum Assured every year from a chosen 7-17 year accumulation period and a maturity benefit at age 100.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 883 |
| UIN | 512N392V01 |
| Product type | Non-par, non-linked, individual savings whole-life plan |
| Status | Active |
| Entry age | 30 days to 65 years, depending on the Guaranteed Addition Period |
| Maturity age | 100 years (nearer birthday) |
| Policy term | 100 − age at entry |
| Premium paying term | Single premium |
| Minimum Basic Sum Assured | ₹5,00,000 |
| Guaranteed Addition Period | 7 to 17 years |
| Income start | Policy year after the GA period (year 8 to year 18) |
| Official page | https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav-single-premium |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | GA 7: 10 years; GA 8: 9; GA 9: 8; GA 10: 7; GA 11: 6; GA 12: 5; GA 13: 4; GA 14: 3; GA 15: 2; GA 16: 1; GA 17: 30 days |
| Maximum entry age | 65 years (nearer birthday) |
| Minimum age at first income | 18 completed years |
| Maturity age | 100 years (nearer birthday) |
| Policy term | 100 − age at entry |
| Minimum Basic Sum Assured | ₹5,00,000 |
| Maximum Basic Sum Assured | No limit, subject to underwriting |
| BSA multiples | ₹25,000 from ₹5,00,000 to ₹24,50,000; ₹50,000 above ₹24,50,000 |
| Premium paying term | Single premium |
| Risk commencement | For entry age below 8 years, risk starts 2 years after commencement or on the policy anniversary at or after age 8, whichever is earlier |

The Guaranteed Addition Period is chosen at inception and determines both the entry-age floor and when income begins. The policy matures at age 100, so the policy term is simply 100 minus the entry age.

## Premiums and sum assured

- **Premium:** single premium only. No modal loadings or frequency loadings apply.
- **Sum Assured on Death:** higher of Basic Sum Assured or 1.25 × tabular single premium.
- **Sum Assured on Maturity:** higher of Basic Sum Assured or 1.25 × tabular single premium.
- **Guaranteed Additions:** ₹40 per ₹1,000 Basic Sum Assured at the end of each policy year during the Guaranteed Addition Period.
- **Minimum BSA:** ₹5,00,000. **Maximum:** no limit, subject to underwriting.
- **BSA multiples:** ₹25,000 between ₹5,00,000 and ₹24,50,000; ₹50,000 above ₹24,50,000.

### Illustrative premiums

The brochure publishes single premiums for a Basic Sum Assured of ₹5,00,000, standard lives, offline purchase and exclusive of taxes. The same table applies to both Survival Benefit Options.

| GA period (years) | Age 10 | Age 30 | Age 50 |
|---:|---:|---:|---:|
| 8 | ₹4,64,150 | ₹4,64,150 | ₹4,64,150 |
| 12 | ₹3,61,875 | ₹3,61,875 | ₹3,61,875 |
| 16 | ₹2,85,725 | ₹2,86,725 | ₹3,00,800 |

**High-BSA rebate (₹ per ₹1,000 Basic Sum Assured):**

| Age band | BSA ₹5–9.75 lakh | BSA ₹10–24.5 lakh | BSA ₹25–49.5 lakh | BSA ₹50 lakh+ |
|---|---:|---:|---:|---:|
| 0–20 | 0 | 11 | 19 | 21 |
| 21–40 | 0 | 9 | 15 | 18 |
| 41–55 | 0 | 6.5 | 12 | 13 |
| 56–65 | 0 | 5 | 9 | 10 |

**Other rebates:**

- Online purchase: 2% of the tabular single premium.
- Existing policyholder or nominee: ₹0.80 per ₹1,000 BSA for GA 7–9; ₹0.90 for GA 10–14; ₹1.00 for GA 15–17.

The tabular single premium used for the death and maturity sum assured is the premium before these rebates. For example, the brochure illustration at age 35, BSA ₹10,00,000 and GA 10 shows a tabular single premium of ₹8,17,650, a high-BSA rebate of ₹9,000, and a premium payable of ₹8,08,650; the Sum Assured on Death is 1.25 × ₹8,17,650 = ₹10,22,063.

## Benefits

### Death benefit

On death after commencement of risk, the nominee receives the Sum Assured on Death plus accrued Guaranteed Additions. Under Option II, the accumulated Flexi Income Benefit balance is added.

For a minor life assured with entry age below 8 years, death before commencement of risk returns the single premium paid, excluding taxes, extra premium and rider premiums, without interest.

### Survival benefit — Option I (Regular Income Benefit)

Regular Income Benefit equals 10% of Basic Sum Assured and is paid every policy year from the income start year until the policy anniversary immediately before maturity or until death, if earlier.

| GA period | First income policy year | Annual income |
|---:|---:|---:|
| 7 | 8 | 10% of BSA |
| 8 | 9 | 10% of BSA |
| 9 | 10 | 10% of BSA |
| 10 | 11 | 10% of BSA |
| 11 | 12 | 10% of BSA |
| 12 | 13 | 10% of BSA |
| 13 | 14 | 10% of BSA |
| 14 | 15 | 10% of BSA |
| 15 | 16 | 10% of BSA |
| 16 | 17 | 10% of BSA |
| 17 | 18 | 10% of BSA |

### Survival benefit — Option II (Flexi Income Benefit)

The same 10% of BSA is deferred and accumulated at 5.5% per annum compounded yearly for completed months. The policyholder may withdraw once per policy year, up to 75% of the accumulated balance. The balance is payable on death, maturity or surrender. The policyholder may switch between Option I and Option II during the Guaranteed Addition Period.

### Maturity benefit

On survival to age 100, the policy pays the Sum Assured on Maturity plus accrued Guaranteed Additions. Under Option II, the accumulated Flexi Income Benefit balance is also paid. There is no maturity benefit on surrender or death.

## Optional benefits and riders

- **LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02):** available up to age 70. It pays a lump sum on accidental death within 180 days and a monthly disability benefit over 10 years for covered accidental disabilities, with premium waiver.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** available for a term of 35 years or to age 75, whichever is earlier.
- Rider premiums together may not exceed 30% of the base premium; each rider's sum assured may not exceed the Basic Sum Assured.
- **Settlement option:** maturity or death benefit may be received in instalments over 5, 10 or 15 years instead of a lump sum. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The applicable interest rate is 4.62% per annum for 1 May 2025 to 30 April 2026. Commutation of instalments is discounted at a maximum of 6.62% per annum.
- **Option switch:** Regular Income Benefit and Flexi Income Benefit may be switched during the Guaranteed Addition Period.

## Surrender, loan, paid-up and revival

### Surrender

The policy can be surrendered at any time. The surrender value is the higher of:

1. Guaranteed Surrender Value plus the surrender value of accrued Guaranteed Additions; or
2. Special Surrender Value.

Guaranteed Surrender Value is 75% of the single premium in policy years 1–3. From year 4 it is 90% of the single premium reduced by Regular Income Benefits due and paid. Under Option II, the accumulated Flexi Income Benefit balance is paid in addition.

Accrued Guaranteed Additions are valued with the following factors:

| Policy year | GA factor | Policy year | GA factor | Policy year | GA factor |
|---:|---:|---:|---:|---:|---:|
| 1 | 0.00% | 13 | 12.31% | 25 | 24.69% |
| 2 | 0.00% | 14 | 13.34% | 26 | 25.72% |
| 3 | 2.00% | 15 | 14.38% | 27 | 26.75% |
| 4 | 3.03% | 16 | 15.41% | 28 | 27.78% |
| 5 | 4.06% | 17 | 16.44% | 29 | 28.81% |
| 6 | 5.09% | 18 | 17.47% | 30 | 29.84% |
| 7 | 6.13% | 19 | 18.50% | 31 | 30.88% |
| 8 | 7.16% | 20 | 19.53% | 32 | 31.91% |
| 9 | 8.19% | 21 | 20.56% | 33 | 32.94% |
| 10 | 9.22% | 22 | 21.59% | 34 | 33.97% |
| 11 | 10.25% | 23 | 22.63% | 35+ | 35.00% |
| 12 | 11.28% | 24 | 23.66% | | |

### Loan

A policy loan is available after three months from issue or after free-look expiry, whichever is later, within the surrender value.

| Period | Maximum loan |
|---|---|
| During GA period, GA 7–10 | 60% of surrender value |
| During GA period, GA 11–14 | 50% of surrender value |
| During GA period, GA 15–17 | 40% of surrender value |
| After GA period, Option I | Annual interest up to 50% of annual Regular Income; maximum 75% of surrender value |
| After GA period, Option II | As Option I, plus up to 50% of the accumulated Flexi Income Benefit balance |

The loan interest rate is 9.5% per annum compounding half-yearly for 1 May 2025 to 30 April 2026. If interest is unpaid and the loan plus interest exceeds the available surrender value (plus the Flexi balance under Option II), LIC may foreclose the policy and pay any excess.

### Paid-up, revival and grace

- **Paid-up:** not applicable — the plan is single premium.
- **Revival:** not applicable.
- **Grace period:** not applicable.
- **Free look:** 30 days.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months from commencement of risk, the nominee receives the higher of 80% of the single premium paid (excluding taxes, extra premium and rider premiums other than Term Assurance Rider premium) or the surrender value on the date of death. No other claim is payable. The clause does not apply if the entry age is below 8 years.
- **Minor pre-risk death:** if entry age is below 8 years and death occurs before commencement of risk, only the single premium excluding taxes, extra and rider premiums is returned, without interest.
- **Risk commencement:** for entry age below 8 years, risk starts 2 years after commencement or on the policy anniversary at or after age 8, whichever is earlier.
- **Policy termination:** the policy terminates on death, maturity or surrender. There is no waiting period.
- **Assignment and nomination:** allowed, subject to the policy document.

## Tax treatment

The CIS states that taxes, if any, are charged extra. The brochure illustration states that GST is currently exempted. The documents do not state the income-tax treatment of premiums, the regular income, the maturity benefit or the death benefit. Confirm the current tax position with LIC or a tax adviser before relying on it.

## Suitability and decision notes

**Best suited to:** investors who want to convert a lump sum into a guaranteed lifelong income after a chosen 7–17 year accumulation period, with a guaranteed maturity value at age 100 and a death benefit. It also suits buyers who want the option to defer and accumulate income rather than receive it immediately, and those who value loan access against a whole-life policy.

**Poor fit for:** anyone who may need the capital within three years (surrender returns only 75% of the single premium), investors seeking inflation-linked or market-linked returns, buyers with less than ₹5,00,000 for the minimum BSA, and people who need income immediately.

**Key trade-offs:** the long accumulation period and fixed nominal income; early-surrender penalties; Guaranteed Additions accruing only during the selected GA period; and a death/maturity floor of 1.25 × tabular single premium that can exceed the BSA at older ages.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Determines available GA periods, term (100 − age) and premium rate |
| Basic Sum Assured | Yes | Minimum ₹5,00,000; multiples ₹25,000 / ₹50,000 |
| Guaranteed Addition Period | Yes | 7–17 years; sets income start year and GA accrual period |
| Survival Benefit Option | Yes | Option I regular income or Option II flexi accumulation |
| Tabular single premium | Yes | From LIC's premium table for age, BSA and GA period |
| Purchase channel | Yes | Online 2% rebate; existing-policyholder rebate by GA period |
| Riders | Optional | Accidental Death and Disability; New Term Assurance |
| Settlement option | Optional | 5, 10 or 15 yearly instalments for maturity or death benefit |
| Flexi withdrawals | Optional | Option II; once per year, up to 75% of accumulated balance |

```text
Policy term                = 100 − age_at_entry
Guaranteed additions       = ₹40 × (BSA / 1,000) × GA_period_years
Sum assured on death       = max(BSA, 1.25 × tabular_single_premium)
Sum assured on maturity    = max(BSA, 1.25 × tabular_single_premium)
Regular income             = 10% × BSA per year from income start year to the year before maturity
Flexi balance              = previous_balance × (1.055)^(completed_months / 12) + 10% × BSA
Death benefit (Option I)   = sum_assured_on_death + accrued_GA
Death benefit (Option II)  = sum_assured_on_death + accrued_GA + accumulated_flexi_balance
Maturity benefit           = sum_assured_on_maturity + accrued_GA + (Option II ? flexi_balance : 0)
GSV (years 1-3)            = 75% × single_premium
GSV (year 4 onwards)       = 90% × single_premium − regular_income_paid
Surrender value            = max(GSV + GA_surrender_value, SSV) + (Option II ? flexi_balance : 0)
Loan during GA             = 60% / 50% / 40% of surrender value for GA 7-10 / 11-14 / 15-17
Loan after GA              = min(75% × surrender_value, annual_income / 0.50)
```

## Source documents

- [Customer Information Sheet (CIS), 13-01-2026](https://licindia.in/documents/20121/1639841/CIS_Jeevan+Utsav+Single+Premium_13012026.pdf/452fefc3-79d1-76e1-80eb-d27005f9aa00?t=1768289247449)
- [Sales Brochure, 19-12-2025](https://licindia.in/documents/20121/1639835/LIC_Jeevan+Utsav++Single+Premium_Sales+Brochure_English.pdf/4f48bd54-fab2-1b97-cc38-fb19dc663399?t=1768116819230)
- [Policy Document, 13-01-2026](https://licindia.in/documents/20121/1639838/Policy+Document_Jeevan+Utsav+Single+Premium_13012026.pdf/7f1b27d0-734a-f571-bfb7-cf208663897f?t=1768289226196)
- [Official product page](https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav-single-premium)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
