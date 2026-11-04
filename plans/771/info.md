---
plan_number: 771
plan_name: "LIC's Jeevan Utsav"
uin: "512N363V02"
insurer: "Life Insurance Corporation of India"
category: "WholeLife"
product_type: "Non-Par, Non-Linked, Individual, Savings, Whole Life Insurance Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav2"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0
  entry_age_max: 65
  entry_age_notes: "Minimum and maximum entry ages depend on the Premium Paying Term: PPT 5/6/7/8 — 8 years to 65 years; PPT 9 — 7 to 65; PPT 10 — 6 to 65; PPT 11 — 5 to 64; PPT 12 — 4 to 63; PPT 13 — 3 to 62; PPT 14 — 2 to 61; PPT 15 — 1 to 60; PPT 16 — 30 days to 59. Maximum premium ceasing age is 75 years (nearer birthday)."
  maturity_age_max: null
  maturity_age_notes: "No maturity benefit is available under this plan. It is a whole-life plan; the brochure illustrates benefits to age 100 but does not state a maturity age."
  policy_terms_years: "Whole life (no maturity benefit)"
  policy_term_kind: "whole_life"
  policy_term_min_years: null
  policy_term_max_years: null
  premium_paying_terms_years: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  ppt_min_years: 5
  ppt_max_years: 16
  ppt_term_pairs: "PPT 5-16 years; the income start year is determined by PPT (see benefits)."
  min_sum_assured: "₹5,00,000 Basic Sum Assured"
  max_sum_assured: "No limit, subject to underwriting"
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No separate minimum premium is stated; the minimum Basic Sum Assured of ₹5,00,000 determines the minimum premium. BSA multiples are ₹25,000 from ₹5,00,000 to ₹24,00,000 and ₹1,00,000 above ₹24,00,000."
  max_premium: "No limit, subject to underwriting"
  min_age_first_income: 18
  max_premium_ceasing_age: 75

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH or salary deduction)"]
  frequency_loadings: "Half-yearly 1.75%, quarterly 2.50%, monthly 3.25% of tabular annual premium; yearly nil"
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: true
  illustrative_premiums:
    - basis: "Yearly premium for Basic Sum Assured ₹5,00,000; standard life; offline purchase; exclusive of taxes"
      figures:
        - {premium_paying_term_years: 5, age_at_entry: 10, yearly_premium: 109575}
        - {premium_paying_term_years: 5, age_at_entry: 30, yearly_premium: 110150}
        - {premium_paying_term_years: 5, age_at_entry: 50, yearly_premium: 118625}
        - {premium_paying_term_years: 8, age_at_entry: 10, yearly_premium: 72600}
        - {premium_paying_term_years: 8, age_at_entry: 30, yearly_premium: 72600}
        - {premium_paying_term_years: 8, age_at_entry: 50, yearly_premium: 72600}
        - {premium_paying_term_years: 12, age_at_entry: 10, yearly_premium: 44250}
        - {premium_paying_term_years: 12, age_at_entry: 30, yearly_premium: 44275}
        - {premium_paying_term_years: 12, age_at_entry: 50, yearly_premium: 45225}
        - {premium_paying_term_years: 16, age_at_entry: 10, yearly_premium: 29900}
        - {premium_paying_term_years: 16, age_at_entry: 30, yearly_premium: 30025}
        - {premium_paying_term_years: 16, age_at_entry: 50, yearly_premium: 33475}
  rebates:
    high_bsa_slabs: ["₹10,00,000 to ₹24,00,000", "₹25,00,000 to ₹49,00,000", "₹50,00,000 and above"]
    high_bsa_notes: "The high-BSA rebate depends on the BSA slab and PPT; the brochure states the direction (higher for larger BSA and shorter PPT) but does not publish the rebate amounts."
    online_rebate: "10% of tabular annual premium"
  premium_formula: "Tabular annual premium is read from the LIC premium table by age at entry, Basic Sum Assured and PPT. Deduct the high-BSA rebate (amount not published) and the online rebate (10% of tabular annual premium). Add modal loadings, taxes, underwriting extra and rider premiums. Sum Assured on Death = max(BSA, 7 × annualized premium), with death benefit not less than 105% of total premiums paid."
  notes: "Illustrative premiums are yearly, offline and exclusive of taxes. Annualized premium excludes taxes, rider premiums, underwriting extras and modal loadings."

benefits:
  death_benefit: "Sum Assured on Death plus accrued Guaranteed Additions, provided the policy is in force. The death benefit is not less than 105% of total premiums paid up to the date of death. Sum Assured on Death is the higher of Basic Sum Assured or 7 times the annualized premium. For a minor life assured with entry age below 8 years, death before commencement of risk refunds premiums paid, excluding taxes, extra premium and rider premiums, without interest."
  death_benefit_formula: "max(max(bsa, 7 * annualized_premium) + accrued_guaranteed_additions, 1.05 * total_premiums_paid)"
  maturity_benefit: "Not applicable — maturity benefit is not available under this plan."
  maturity_benefit_formula: "Not applicable"
  survival_benefits:
    - option: "Option I — Regular Income Benefit"
      description: "Regular Income Benefit equal to 10% of Basic Sum Assured is payable at the end of each policy year from the income start year until death. The start year depends on PPT: 11th policy year for PPT 5-8; 12th for PPT 9; 13th for PPT 10; 14th for PPT 11; 15th for PPT 12; 16th for PPT 13; 17th for PPT 14; 18th for PPT 15; 19th for PPT 16."
    - option: "Option II — Flexi Income Benefit"
      description: "The 10% of Basic Sum Assured is deferred and accumulated at 5.5% per annum compounded yearly for completed months. The policyholder may withdraw once per policy year, up to 75% of the accumulated balance. The accumulated balance is payable on death or surrender, whichever is earlier. The option may be changed up to six months before the income start year."
  guaranteed_benefits: "Guaranteed Additions accrue at ₹40 per ₹1,000 Basic Sum Assured at the end of each policy year during the Premium Paying Term. The Regular/Flexi Income Benefit and the Sum Assured on Death are guaranteed."
  non_guaranteed_benefits: "None — the plan is non-par and all benefits are guaranteed."
  riders:
    - "LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)"
    - "LIC's Accident Benefit Rider (UIN: 512B203V03)"
    - "LIC's New Term Assurance Rider (UIN: 512B210V02)"
    - "LIC's Premium Waiver Benefit Rider (UIN: 512B204V04)"
  other_benefits:
    - "Option to take the death benefit in instalments over 5, 10 or 15 years"
    - "Option to switch between Regular Income Benefit and Flexi Income Benefit up to six months before the income start year"
    - "Policy loan after the first policy year, subject to one full year's premium having been paid"
  guaranteed_addition_rate: "₹40 per ₹1,000 Basic Sum Assured per policy year during the Premium Paying Term"
  sum_assured_on_death: "Higher of Basic Sum Assured or 7 × annualized premium"

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed after completion of the first policy year, provided one full year's premium has been paid. Guaranteed Surrender Value is acquired after at least two full years' premiums; Special Surrender Value is available after the first policy year. The payable amount is the higher of GSV and SSV. GSV = total premiums paid × premium GSV factor + accrued Guaranteed Additions × GA GSV factor − income benefits due and paid. The premium GSV factor is 0% in year 1, 30% in year 2, 35% in year 3, 50% in years 4-7, then rises to 90% at year 34 and later. The GA GSV factor is 0% in years 1-2, 2.00% in year 3, and rises to 35.00% at year 35 and later. Under Option II, accumulated Flexi Income Benefits due and not withdrawn are also paid."
  paid_up: true
  paid_up_terms: "If at least one full year's premium has been paid and later premiums are not paid, the policy becomes paid-up. Death Sum Assured and Basic Sum Assured are reduced in proportion to the premiums paid relative to the total premiums payable. Accrued Guaranteed Additions are retained but no further additions accrue. If paid-up Sum Assured is below ₹2,00,000, no income benefit is paid. If it is ₹2,00,000 or more, the income rate is 5% (₹2-3 lakh), 6% (₹3-4 lakh), 7% (₹4-5 lakh) or 10% (₹5 lakh and above) of paid-up Sum Assured. Death benefit is not less than 105% of total premiums paid."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: true
  partial_withdrawal_terms: "Under Option II only, one withdrawal per policy year of up to 75% of the accumulated Flexi Income Benefit balance including interest. This is a withdrawal of accumulated income, not a general partial withdrawal from the base policy."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months from commencement of risk or from revival: the nominee receives the higher of 80% of total premiums paid or the surrender value on the date of death, provided the policy is in force; nothing is payable under a policy lapsed without acquiring paid-up value. The suicide clause does not apply where the entry age is below 8 years. Death of a minor life assured before commencement of risk refunds premiums excluding taxes, extra and rider premiums, without interest."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "GST is currently exempt on premiums as stated in the brochure illustration; taxes, if any, are charged extra as per prevailing law."
  notes: "The CIS states that taxes, if any, are charged extra. The brochure illustration states that GST is currently exempted. Income-tax treatment of premiums, income and death benefit is not stated in the documents."

decision:
  primary_goals: ["savings", "retirement", "protection"]
  risk_profile: "Guaranteed (non-par)"
  liquidity: "Medium"
  time_horizon: "Whole life"
  minimum_age: 0
  maximum_age: 65
  suitable_for:
    - "Long-term savers who want a guaranteed whole-life income after a 5-16 year premium paying term"
    - "People building a guaranteed income layer for retirement with a death benefit for nominees"
    - "Buyers who prefer a limited premium paying term but want cover and income to continue for life"
    - "Policyholders who may need loan access after the first policy year"
  not_suitable_for:
    - "Anyone needing capital back in the first two years; surrender value is nil or heavily discounted"
    - "Investors seeking inflation-linked or market-linked returns; income is fixed at 10% of BSA"
    - "Buyers with less than ₹5,00,000 for the minimum Basic Sum Assured"
    - "People who need income immediately; the first income starts in policy year 11 at the earliest"
  key_tradeoffs:
    - "No maturity benefit; the plan pays income until death and a death benefit, not a lump sum at a maturity date"
    - "Income is fixed in nominal terms and is not indexed to inflation"
    - "Early surrender is heavily penalised: 0% GSV in year 1 and 30% in year 2"
    - "Guaranteed Additions accrue only during the PPT, not for the whole life"
    - "The Sum Assured on Death can be 7 × annualized premium, but the death benefit is still subject to the 105% premium floor"
  decision_flags: ["whole_life", "regular_premium", "guaranteed_income", "no_maturity_benefit", "minimum_bsa_5_lakh", "no_inflation_indexation", "early_surrender_penalty", "loan_available", "paid_up_supported"]

calculation_inputs:
  required_inputs: ["age_at_entry", "basic_sum_assured", "premium_paying_term", "survival_benefit_option", "tabular_annual_premium", "purchase_channel"]
  optional_inputs: ["modal_premium", "riders", "settlement_option", "flexi_withdrawals"]
  rate_table_available: true
  formulas:
    sum_assured_on_death: "max(bsa, 7 * annualized_premium)"
    guaranteed_additions_total: "40 * (bsa / 1000) * premium_paying_term_years"
    death_benefit: "max(sum_assured_on_death + accrued_guaranteed_additions, 1.05 * total_premiums_paid)"
    regular_income: "0.10 * bsa per policy year from income_start_year until death"
    flexi_accumulation: "flexi_balance = flexi_balance * (1 + 0.055)^(completed_months / 12) + 0.10 * bsa"
    income_start_year: "11 for PPT 5-8; 12 for PPT 9; 13 for PPT 10; 14 for PPT 11; 15 for PPT 12; 16 for PPT 13; 17 for PPT 14; 18 for PPT 15; 19 for PPT 16"
    guaranteed_surrender_value: "total_premiums_paid * premium_gsv_factor + accrued_guaranteed_additions * ga_gsv_factor - income_benefits_paid"
    surrender_value: "max(gsv, ssv) + (option_ii ? accumulated_flexi_balance : 0)"
    paid_up_sum_assured: "bsa * (premiums_paid_years / ppt)"
    paid_up_death_sum_assured: "sum_assured_on_death * (premiums_paid_years / ppt)"
    loan_before_income: "0.75 * surrender_value (in-force); 0.50 * surrender_value (paid-up)"
    loan_after_income: "min(0.75 * surrender_value, annual_income / 0.50) plus 50% of unpaid flexi balance under Option II"
  assumptions:
    - "All amounts are exclusive of taxes, underwriting extras and rider premiums."
    - "Illustrative premiums are yearly, offline and for standard lives; modal loadings and online rebate are not applied."
    - "Guaranteed Additions accrue in full in the year of death and proportionately in the year of surrender."
    - "Flexi Income Benefit accumulates at 5.5% p.a. compounded yearly for completed months."

sources:
  - name: "Customer Information Sheet (CIS), 12-11-2024"
    url: "https://licindia.in/documents/20121/1245605/CIS+_jeevan+utsav+-Website_+R.pdf/11fdd328-5dbb-cac2-8ced-342a7565456a?t=1731428824989"
  - name: "Sales Brochure, 14-10-2025"
    url: "https://licindia.in/documents/20121/1319704/Jeevan+Utsav+Sales+Brochure_141025.pdf/da84d78a-ef72-c80f-b8df-83bb7565f087?t=1760429620376"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1240315/PolicyDocument-Jeevan+Utsav-V02-withlogo.pdf/7dfd2d09-a2d2-247b-0aed-698c89ea56af?t=1727867403829"
  - name: "Official product page"
    url: "https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav2"
---
# LIC's Jeevan Utsav — Plan 771

**One-line summary:** A non-par whole-life savings plan with a 5-16 year premium paying term that pays a guaranteed 10% of Basic Sum Assured every year from policy year 11-19 until death, with no maturity benefit.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 771 |
| UIN | 512N363V02 |
| Product type | Non-par, non-linked, individual savings whole-life plan |
| Status | Active |
| Entry age | 30 days to 65 years, depending on PPT |
| Maturity | No maturity benefit; whole-life cover |
| Premium paying term | 5 to 16 years |
| Minimum Basic Sum Assured | ₹5,00,000 |
| Income start | Policy year 11 to 19, depending on PPT |
| Maximum premium ceasing age | 75 years (nearer birthday) |
| Official page | https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav2 |

## Eligibility

| PPT (years) | Minimum entry age | Maximum entry age |
|---:|---:|---:|
| 5 | 8 years | 65 years |
| 6 | 8 years | 65 years |
| 7 | 8 years | 65 years |
| 8 | 8 years | 65 years |
| 9 | 7 years | 65 years |
| 10 | 6 years | 65 years |
| 11 | 5 years | 64 years |
| 12 | 4 years | 63 years |
| 13 | 3 years | 62 years |
| 14 | 2 years | 61 years |
| 15 | 1 year | 60 years |
| 16 | 30 days | 59 years |

- **Maximum premium ceasing age:** 75 years (nearer birthday).
- **Minimum age at the beginning of the policy year in which the first income is due:** 18 completed years.
- **Minimum Basic Sum Assured:** ₹5,00,000.
- **Maximum Basic Sum Assured:** no limit, subject to underwriting.
- **BSA multiples:** ₹25,000 from ₹5,00,000 to ₹24,00,000; ₹1,00,000 above ₹24,00,000.
- **Risk commencement:** for entry age below 8 years, risk starts 2 years after commencement or on the policy anniversary at or after age 8, whichever is earlier.

There is no maturity benefit and the brochure does not state a maturity age. The plan is whole life and the illustration runs to age 100.

## Premiums and sum assured

- **Premium paying term:** 5 to 16 years.
- **Modes:** yearly, half-yearly, quarterly and monthly (NACH or salary deduction).
- **Modal loadings:** half-yearly 1.75%, quarterly 2.50%, monthly 3.25% of tabular annual premium; yearly nil.
- **High-BSA rebate:** available for BSA of ₹10-24 lakh, ₹25-49 lakh and ₹50 lakh and above. The amount depends on the BSA slab and PPT; the brochure does not publish the amounts.
- **Online rebate:** 10% of tabular annual premium.
- **Sum Assured on Death:** higher of Basic Sum Assured or 7 × annualized premium.
- **Death benefit floor:** not less than 105% of total premiums paid.
- **Minimum BSA:** ₹5,00,000; **maximum:** no limit, subject to underwriting.

### Illustrative premiums

Yearly premiums for a Basic Sum Assured of ₹5,00,000, standard lives, offline purchase and exclusive of taxes:

| PPT (years) | Age 10 | Age 30 | Age 50 |
|---:|---:|---:|---:|
| 5 | ₹1,09,575 | ₹1,10,150 | ₹1,18,625 |
| 8 | ₹72,600 | ₹72,600 | ₹72,600 |
| 12 | ₹44,250 | ₹44,275 | ₹45,225 |
| 16 | ₹29,900 | ₹30,025 | ₹33,475 |

The brochure does not publish the high-BSA rebate amounts. The online rebate is 10% of the tabular annual premium.

## Benefits

### Death benefit

On death after commencement of risk, the nominee receives the Sum Assured on Death plus accrued Guaranteed Additions. The death benefit is not less than 105% of total premiums paid up to the date of death.

Sum Assured on Death = higher of Basic Sum Assured or 7 × annualized premium. Annualized premium excludes taxes, rider premiums, underwriting extras and modal loadings.

For a minor life assured with entry age below 8 years, death before commencement of risk refunds premiums paid, excluding taxes, extra premium and rider premiums, without interest.

### Survival benefit — Option I (Regular Income Benefit)

Regular Income Benefit equals 10% of Basic Sum Assured and is payable at the end of each policy year from the income start year until death.

| PPT (years) | First income policy year |
|---:|---:|
| 5 | 11 |
| 6 | 11 |
| 7 | 11 |
| 8 | 11 |
| 9 | 12 |
| 10 | 13 |
| 11 | 14 |
| 12 | 15 |
| 13 | 16 |
| 14 | 17 |
| 15 | 18 |
| 16 | 19 |

### Survival benefit — Option II (Flexi Income Benefit)

The 10% of BSA is deferred and accumulated at 5.5% per annum compounded yearly for completed months. The policyholder may withdraw once per policy year, up to 75% of the accumulated balance. The accumulated balance is payable on death or surrender, whichever is earlier. The option may be changed up to six months before the income start year.

### Maturity benefit

Not available. The plan has no maturity benefit; benefits continue as income until death, with the death benefit payable to the nominee.

### Guaranteed Additions

Guaranteed Additions accrue at ₹40 per ₹1,000 Basic Sum Assured at the end of each policy year during the PPT. There is no accrual after the PPT ends. In the year of death during the PPT, the addition is paid for the full policy year; on surrender during the PPT, it is added proportionately for completed months.

## Optional benefits and riders

- **LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02):** cover to age 70; can be opted during the PPT if at least 5 years of PPT remain and before age 65. Pays a lump sum on accidental death within 180 days and monthly disability instalments over 10 years, with premium waiver.
- **LIC's Accident Benefit Rider (UIN: 512B203V03):** cover during the PPT or to age 70, whichever is earlier; can be opted before age 65 with at least 5 years of PPT remaining. Pays a lump sum on accidental death.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** available at inception only; cover for 35 years or to age 75, whichever is earlier.
- **LIC's Premium Waiver Benefit Rider (UIN: 512B204V04):** on the proposer's life; available at a policy anniversary during the PPT with at least 5 years of PPT remaining. Rider term is the outstanding PPT or 25 minus the minor life assured's age, whichever is lower; rider term plus proposer's age must not exceed 70. Waives base premiums on the proposer's death during the rider term.
- Rider premiums together may not exceed 30% of base premiums. Accident Benefit Rider sum assured may not exceed 3 × Sum Assured on Death; other riders may not exceed Sum Assured on Death.
- **Death benefit instalment option:** 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The applicable interest rate is 5.07% per annum for 1 May 2024 to 30 April 2025.

## Surrender, loan, paid-up and revival

### Surrender

The policy can be surrendered after completion of the first policy year, provided one full year's premium has been paid. Guaranteed Surrender Value is acquired after at least two full years' premiums; Special Surrender Value is available after the first policy year. The payable amount is the higher of GSV and SSV.

GSV = total premiums paid × premium GSV factor + accrued Guaranteed Additions × GA GSV factor − income benefits due and paid. Premiums exclude taxes, underwriting extras and rider premiums.

**Premium GSV factors:**

| Policy year | Factor | Policy year | Factor | Policy year | Factor | Policy year | Factor |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0.00% | 10 | 54.44% | 19 | 67.78% | 28 | 81.11% |
| 2 | 30.00% | 11 | 55.93% | 20 | 69.26% | 29 | 82.59% |
| 3 | 35.00% | 12 | 57.41% | 21 | 70.74% | 30 | 84.07% |
| 4 | 50.00% | 13 | 58.89% | 22 | 72.22% | 31 | 85.56% |
| 5 | 50.00% | 14 | 60.37% | 23 | 73.70% | 32 | 87.04% |
| 6 | 50.00% | 15 | 61.85% | 24 | 75.19% | 33 | 88.52% |
| 7 | 50.00% | 16 | 63.33% | 25 | 76.67% | 34 | 90.00% |
| 8 | 51.48% | 17 | 64.81% | 26 | 78.15% | 35+ | 90.00% |
| 9 | 52.96% | 18 | 66.30% | 27 | 79.63% | | |

**GA GSV factors:**

| Policy year | Factor | Policy year | Factor | Policy year | Factor | Policy year | Factor |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0.00% | 10 | 9.22% | 19 | 18.50% | 28 | 27.78% |
| 2 | 0.00% | 11 | 10.25% | 20 | 19.53% | 29 | 28.81% |
| 3 | 2.00% | 12 | 11.28% | 21 | 20.56% | 30 | 29.84% |
| 4 | 3.03% | 13 | 12.31% | 22 | 21.59% | 31 | 30.88% |
| 5 | 4.06% | 14 | 13.34% | 23 | 22.63% | 32 | 31.91% |
| 6 | 5.09% | 15 | 14.38% | 24 | 23.66% | 33 | 32.94% |
| 7 | 6.13% | 16 | 15.41% | 25 | 24.69% | 34 | 33.97% |
| 8 | 7.16% | 17 | 16.44% | 26 | 25.72% | 35+ | 35.00% |
| 9 | 8.19% | 18 | 17.47% | 27 | 26.75% | | |

Under Option II, accumulated Flexi Income Benefits due and not withdrawn, including interest, are also paid on surrender.

### Paid-up

If at least one full year's premium has been paid and later premiums are not paid, the policy becomes paid-up. The Death Sum Assured and Basic Sum Assured are reduced in proportion to the premiums paid relative to the total premiums payable. Accrued Guaranteed Additions are retained, but no further additions accrue.

| Paid-up Sum Assured | Income benefit |
|---|---|
| Less than ₹2,00,000 | No income benefit |
| ₹2,00,000 to less than ₹3,00,000 | 5% of paid-up Sum Assured |
| ₹3,00,000 to less than ₹4,00,000 | 6% of paid-up Sum Assured |
| ₹4,00,000 to less than ₹5,00,000 | 7% of paid-up Sum Assured |
| ₹5,00,000 and above | 10% of paid-up Sum Assured |

The death benefit under a paid-up policy is not less than 105% of total premiums paid.

### Loan

A loan is available after completion of the first policy year, provided one full year's premium has been paid.

| Loan timing | Maximum loan |
|---|---|
| Before the income start year, in-force | Up to 75% of surrender value |
| Before the income start year, paid-up | Up to 50% of surrender value |
| From the income start year, Option I | Annual interest up to 50% of annual Regular Income; maximum 75% of surrender value (in-force) or 50% (paid-up) |
| From the income start year, Option II | Annual interest up to 50% of annual Flexi Income; maximum 75% of surrender value (in-force) or 50% (paid-up), plus up to 50% of unpaid Flexi Income Benefits |

The loan interest rate is 9.5% per annum compounding half-yearly for 1 May 2024 to 30 April 2025. Outstanding loan and interest are recovered from claim proceeds.

### Revival, grace and free look

- **Revival:** within 5 consecutive complete years from the first unpaid premium, on payment of arrears with interest. Revival interest is 9.5% per annum compounding half-yearly for 1 May 2024 to 30 April 2025.
- **Grace period:** 30 days for yearly, half-yearly and quarterly; 15 days for monthly.
- **Free look:** 30 days.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months from commencement of risk or from revival, the nominee receives the higher of 80% of total premiums paid or the surrender value on the date of death, provided the policy is in force. Nothing is payable under a policy lapsed without acquiring paid-up value. The clause does not apply where the entry age is below 8 years.
- **Minor pre-risk death:** if entry age is below 8 years and death occurs before commencement of risk, premiums paid are refunded, excluding taxes, extra and rider premiums, without interest.
- **Risk commencement:** for entry age below 8 years, risk starts 2 years after commencement or on the policy anniversary at or after age 8, whichever is earlier.
- **Policy termination:** the policy terminates on death or surrender. There is no maturity benefit.
- **Assignment and nomination:** allowed, subject to the policy document.

## Tax treatment

The CIS states that taxes, if any, are charged extra. The brochure illustration states that GST is currently exempted. The documents do not state the income-tax treatment of premiums, the regular income, the death benefit or any surrender proceeds. Confirm the current tax position with LIC or a tax adviser before relying on it.

## Suitability and decision notes

**Best suited to:** long-term savers who want a guaranteed whole-life income after a limited 5–16 year premium paying term, with a death benefit for nominees. It fits buyers building a guaranteed income layer for retirement and those who may need loan access after the first policy year.

**Poor fit for:** anyone needing capital back in the first two years (surrender value is nil or heavily discounted), investors seeking inflation-linked or market-linked returns, buyers with less than ₹5,00,000 for the minimum BSA, and people who need income immediately.

**Key trade-offs:** no maturity benefit; fixed nominal income with no inflation indexation; heavy early-surrender penalties; Guaranteed Additions only during the PPT; and a death benefit that is subject to the 105% premium floor.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Must fall within the PPT-specific entry-age range |
| Basic Sum Assured | Yes | Minimum ₹5,00,000; multiples ₹25,000 / ₹1,00,000 |
| Premium paying term | Yes | 5–16 years; sets income start year |
| Survival Benefit Option | Yes | Option I regular income or Option II flexi accumulation |
| Tabular annual premium | Yes | From LIC's premium table for age, BSA and PPT |
| Modal premium | Optional | Apply half-yearly 1.75%, quarterly 2.50% or monthly 3.25% loading |
| Purchase channel | Yes | Online rebate 10% of tabular annual premium |
| Riders | Optional | Four riders; combined rider premium ≤30% of base |
| Settlement option | Optional | 5, 10 or 15 yearly instalments for death benefit |
| Flexi withdrawals | Optional | Option II; once per year, up to 75% of accumulated balance |

```text
Sum assured on death      = max(BSA, 7 × annualized premium)
Death benefit             = max(sum_assured_on_death + accrued_GA, 1.05 × total_premiums_paid)
Guaranteed additions      = ₹40 × (BSA / 1,000) × PPT
Regular income            = 10% × BSA per year from income start year until death
Flexi balance             = previous_balance × (1.055)^(completed_months / 12) + 10% × BSA
Income start year         = 11 for PPT 5-8; 12 for PPT 9; 13 for PPT 10; 14 for PPT 11;
                            15 for PPT 12; 16 for PPT 13; 17 for PPT 14; 18 for PPT 15; 19 for PPT 16
GSV                       = total_premiums_paid × premium_GSV_factor
                            + accrued_GA × GA_GSV_factor − income_benefits_paid
Surrender value           = max(GSV, SSV) + (Option II ? accumulated_flexi_balance : 0)
Paid-up sum assured       = BSA × (premiums_paid_years / PPT)
Paid-up death sum assured = sum_assured_on_death × (premiums_paid_years / PPT)
Loan before income        = 75% × surrender value (in-force); 50% (paid-up)
Loan after income         = min(75% × surrender value, annual_income / 0.50)
                            plus 50% of unpaid flexi balance under Option II
```

## Source documents

- [Customer Information Sheet (CIS), 12-11-2024](https://licindia.in/documents/20121/1245605/CIS+_jeevan+utsav+-Website_+R.pdf/11fdd328-5dbb-cac2-8ced-342a7565456a?t=1731428824989)
- [Sales Brochure, 14-10-2025](https://licindia.in/documents/20121/1319704/Jeevan+Utsav+Sales+Brochure_141025.pdf/da84d78a-ef72-c80f-b8df-83bb7565f087?t=1760429620376)
- [Policy Document](https://licindia.in/documents/20121/1240315/PolicyDocument-Jeevan+Utsav-V02-withlogo.pdf/7dfd2d09-a2d2-247b-0aed-698c89ea56af?t=1727867403829)
- [Official product page](https://www.licindia.in/en/web/guest/lic-s-jeevan-utsav2)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
