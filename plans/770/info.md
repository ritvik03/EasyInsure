---
plan_number: 770
plan_name: "LIC's Bima Platinum"
uin: "512N397V01"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Limited Premium Endowment with income benefits)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-bima-platinum2"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0
  entry_age_max: 55
  entry_age_notes: "Minimum entry age depends on PPT: PPT 7 - 11 years last birthday; PPT 10 - 8 years; PPT 12 - 6 years; PPT 15 - 3 years; PPT 18 - 30 days completed. Maximum entry age: PPT 7/10 - 55 years nearer birthday; PPT 12 - 53; PPT 15 - 50; PPT 18 - 47. For POSP-LI/CPSC-SPV, maximum entry age is 65 minus the policy term."
  maturity_age_max: 75
  maturity_age_notes: "Minimum maturity age 28 completed years. Maximum 75 years (nearer birthday); 65 years for policies procured through POSP-LI/CPSC-SPV."
  policy_terms_years: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  policy_term_kind: "range"
  policy_term_min_years: 17
  policy_term_max_years: 40
  premium_paying_terms_years: [7, 10, 12, 15, 18]
  ppt_min_years: 7
  ppt_max_years: 18
  ppt_term_pairs: "PPT 7: term 17-40; PPT 10: 20-40; PPT 12: 22-40; PPT 15: 25-40; PPT 18: 28-40. Maximum term is also subject to maturity age 75. POSP-LI/CPSC-SPV maximum term is 20 years."
  min_sum_assured: "₹3,00,000 Basic Sum Assured, in multiples of ₹10,000."
  max_sum_assured: "No limit; subject to LIC's Board Approved Underwriting Policy."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated. The minimum Basic Sum Assured of ₹3,00,000, the ₹10,000 BSA multiple and the chosen PPT/term determine the minimum premium."
  max_premium: "No limit; subject to underwriting."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Modal conversion factors applied to the yearly premium: half-yearly 0.5090, quarterly 0.2568, monthly 0.0861."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Basic Sum Assured ₹3,00,000; policy term 30 years; yearly premium; offline sale; standard lives"
      note: "Sample yearly premium in ₹ by age at entry (nearer birthday) and premium paying term. Figures exclude taxes and rider premiums."
      rows:
        - {age: 15, ppt_7: 81810, ppt_10: 54735, ppt_12: 43020, ppt_15: 32145, ppt_18: 24990}
        - {age: 25, ppt_7: 83145, ppt_10: 55275, ppt_12: 43290, ppt_15: 32220, ppt_18: 25005}
        - {age: 35, ppt_7: 87495, ppt_10: 57015, ppt_12: 44160, ppt_15: 32445, ppt_18: 25005}
        - {age: 45, ppt_7: 100365, ppt_10: 62025, ppt_12: 46770, ppt_15: 33465, ppt_18: 25425}
  premium_formula: "Yearly premium is read from LIC's tabular annual premium for the chosen age at entry, PPT, policy term and Basic Sum Assured, after any high-BSA, online-sale or existing-policyholder incentive, plus taxes and rider premiums. Modal premium = yearly premium × modal conversion factor. BSA is chosen in ₹10,000 multiples subject to a ₹3,00,000 minimum."
  notes: "The sample table is only for policy term 30, BSA ₹3,00,000, offline sale. Other ages, terms and BSA amounts must be quoted by LIC's calculator/underwriting. Guaranteed-addition incentives: high BSA up to ₹15 per ₹1,000 Total Annualized Premium; online sale up to ₹30 per ₹1,000; existing policyholder ₹1.00-₹2.00 per ₹1,000. GST is currently exempt."

benefits:
  death_benefit: "Sum Assured on Death is the higher of 11 × Annualized Premium or Basic Sum Assured, plus accrued guaranteed additions. The death benefit is not less than 105% of Total Premiums Paid and not less than the surrender value on the date of death. If a minor life assured aged below 8 dies before commencement of risk, Total Premiums Paid is returned without interest."
  death_benefit_formula: "max(11 × annualized_premium, bsa) + accrued_guaranteed_additions; death_benefit >= max(1.05 × total_premiums_paid, surrender_value)"
  maturity_benefit: "On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable."
  maturity_benefit_formula: "bsa + accrued_guaranteed_additions"
  survival_benefits:
    - "Regular Income Benefit: 10% of Basic Sum Assured at the end of the PPT and at the end of each subsequent policy year until the policy anniversary before maturity."
    - "Booster Income Benefit: 70% of Basic Sum Assured on the specified policy anniversary - 12th for PPT 7, 15th for PPT 10, 17th for PPT 12, 20th for PPT 15 and 23rd for PPT 18."
  guaranteed_benefits: "Guaranteed additions accrue at ₹70 per ₹1,000 of Total Annualized Premium in respect of premiums paid at the end of each policy year during the PPT only; there is no accrual after the PPT. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On death during the PPT, guaranteed additions for the year of death are paid for the full policy year. Regular Income, Booster Income and maturity benefits are guaranteed; the plan is non-participating."
  non_guaranteed_benefits: "None; the plan does not share in surplus and pays no bonus or dividend."
  riders: ["LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)", "LIC's New Term Assurance Rider (UIN: 512B210V02)", "LIC's Premium Waiver Benefit Rider (UIN: 512B204V04)", "LIC's Critical Illness Health Rider (UIN: 512B227V01)"]
  other_benefits:
    - "Option to defer Regular Income Benefit and/or Booster Income Benefit up to maturity; deferred amounts accumulate at 5.78% p.a. effective for benefits due between 1 May 2026 and 30 April 2027."
    - "Settlement Option for the maturity benefit in instalments over 5, 10 or 15 years, at 5.11% p.a. effective for settlements commencing between 1 May 2026 and 30 April 2027; maximum discount rate 7.11% p.a."
    - "Option to receive the death benefit in instalments over 5, 10 or 15 years."
    - "Policy loan against surrender value."
    - "Premium Waiver Benefit Rider on the proposer where the life assured is a minor."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered after the first policy year with one full year's premium paid. GSV is acquired after at least two consecutive years' premiums. Surrender value is the higher of (total premiums paid × GSV factor from the brochure table, less any Income Benefit already paid, plus the surrender value of accrued guaranteed additions) and SSV."
  paid_up: true
  paid_up_terms: "After at least one full year's premium, non-payment makes the policy paid-up to the end of the term. Death sum assured, maturity sum assured, Regular Income Benefit and Booster Income Benefit are reduced in the ratio of premiums paid to premiums originally payable; guaranteed additions accrue at a reduced rate during the PPT; rider benefits cease."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable"
  assignment_allowed: null
  nomination_allowed: null
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: 80% of total premiums paid or the surrender value, whichever is higher. The clause also applies to paid-up policies; nothing is payable under a policy that lapsed without acquiring paid-up value."
  waiting_period: "90 days from commencement of risk for policies purchased through POSP-LI/CPSC-SPV; death by accident during the waiting period gets the full death benefit."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Applicable as per prevailing tax law. The brochure's benefit illustration states that GST is currently exempted."
  notes: "The documents do not state income-tax benefits or implications; consult a tax adviser."

decision:
  primary_goals: ["savings", "protection", "retirement"]
  risk_profile: "Conservative; guaranteed non-participating benefits"
  liquidity: "Medium"
  time_horizon: "Long"
  minimum_age: 0
  maximum_age: 55
  suitable_for:
    - "Buyers who want guaranteed regular income after a limited premium paying term"
    - "Parents or guardians saving for a child, with the Premium Waiver Benefit Rider on the proposer"
    - "Long-horizon savers who want a booster payout and a maturity lump sum in addition to income"
  not_suitable_for:
    - "Buyers who need liquidity during the premium paying term"
    - "Buyers seeking pure protection at the lowest cost"
    - "Buyers who want market-linked growth or participation in surplus"
  key_tradeoffs:
    - "Premiums are locked in for 7-18 years and income starts only at the end of the PPT"
    - "Surrender value is low in the early years and GSV is acquired only after two consecutive years"
    - "Guaranteed additions accrue only during the PPT, not for the full policy term"
    - "The plan is non-participating, so there is no bonus or market upside"
  decision_flags: ["income-benefit", "booster-benefit", "limited-premium", "guaranteed-additions", "long-term", "deferment-option"]

calculation_inputs:
  required_inputs: ["age", "premium_paying_term", "policy_term", "basic_sum_assured"]
  optional_inputs: ["premium_mode", "riders", "deferment_option", "settlement_option", "death_benefit_instalments"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "Chosen in ₹10,000 multiples, minimum ₹3,00,000"
    sum_assured_on_death: "max(11 × annualized_premium, bsa)"
    death_benefit: "max(sum_assured_on_death + accrued_guaranteed_additions, 1.05 × total_premiums_paid, surrender_value)"
    regular_income_benefit: "0.10 × bsa, from the end of the PPT until the policy anniversary before maturity"
    booster_income_benefit: "0.70 × bsa on the specified anniversary (PPT + 5 years)"
    guaranteed_addition_per_year: "(70 + high_bsa_incentive + online_incentive + existing_policyholder_incentive) × total_annualized_premium_paid / 1000"
    maturity_benefit: "bsa + accrued_guaranteed_additions"
    modal_premium: "yearly_premium × modal_conversion_factor"
    surrender_value: "max(total_premiums_paid × gsv_factor - income_benefit_already_paid + surrender_value_of_accrued_guaranteed_additions, ssv)"
  assumptions:
    - "Annualized Premium excludes taxes, rider premiums, underwriting extras and modal loadings"
    - "Guaranteed additions accrue only during the PPT"
    - "The sample table is for policy term 30, BSA ₹3,00,000, offline sale"
    - "Deferment and settlement rates are the rates stated for the specified 12-month periods and may change"

sources:
  - name: "Customer Information Sheet (CIS), 25-08-2026"
    url: "https://licindia.in/documents/20121/1860176/CIS_LICs+Bima+Platinum.pdf/7840334c-26e3-ba8a-2a4c-f807b4954ef7?t=1788330334383"
  - name: "Sales Brochure, July 2026"
    url: "https://licindia.in/documents/20121/1860176/LIC+Bima+platinum+Sales+brochure.pdf/ae9590c9-2c2d-6dca-c180-5bbb3f956dab?t=1788330413553"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1860176/Final_Policy+Document+LIC%27s+Bima+Platinum.pdf/9235a4a2-d3c7-0c4c-72e2-6c6f05c22603?t=1788330356571"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-bima-platinum2"
---
# LIC's Bima Platinum — Plan 770

**One-line summary:** A limited-premium endowment that pays a guaranteed regular income from the end of the premium paying term, a booster payout at a fixed anniversary, and the Basic Sum Assured plus guaranteed additions at maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 770 |
| UIN | 512N397V01 |
| Product type | Non-par, non-linked, limited-premium endowment with income benefits |
| Status | Active |
| Entry age | 30 days to 55 years (limits vary by PPT) |
| Policy term | 17 to 40 years (limits vary by PPT) |
| Premium paying term | 7 / 10 / 12 / 15 / 18 years |
| Minimum sum assured | ₹3,00,000 |
| Regular income | 10% of BSA from the end of the PPT |
| Booster income | 70% of BSA at a fixed anniversary |
| Official page | https://licindia.in/en/web/guest/lic-s-bima-platinum2 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | PPT 7: 11 years; PPT 10: 8; PPT 12: 6; PPT 15: 3; PPT 18: 30 days |
| Maximum entry age | PPT 7/10: 55; PPT 12: 53; PPT 15: 50; PPT 18: 47 (nearer birthday) |
| POSP/CPSC maximum entry | 65 minus the policy term |
| Minimum maturity age | 28 completed years |
| Maximum maturity age | 75 (65 for POSP/CPSC) |
| Policy term | PPT 7: 17-40; PPT 10: 20-40; PPT 12: 22-40; PPT 15: 25-40; PPT 18: 28-40 |
| Premium paying term | 7 / 10 / 12 / 15 / 18 years |
| Minimum Basic Sum Assured | ₹3,00,000 |
| Basic Sum Assured multiple | ₹10,000 |

The policy vests in the life assured on the policy anniversary coinciding with or immediately following age 18 if the policy is issued on a minor's life.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly, and monthly through NACH.
- **Modal conversion factors:** half-yearly 0.5090, quarterly 0.2568, monthly 0.0861 of the yearly premium.
- **Minimum Basic Sum Assured:** ₹3,00,000, in multiples of ₹10,000.
- **Maximum Basic Sum Assured:** no limit, subject to underwriting.
- **Minimum premium:** no minimum premium is stated; the minimum BSA and chosen PPT/term determine it.
- **Guaranteed-addition incentives:** high BSA up to ₹15 per ₹1,000 Total Annualized Premium; online sale up to ₹30 per ₹1,000; existing policyholder ₹1.00-₹2.00 per ₹1,000, depending on PPT.

No published rate table; premiums are quoted by LIC's calculator/underwriting. The brochure publishes the following sample illustrative yearly premiums for standard lives, offline sale, with Basic Sum Assured ₹3,00,000 and policy term 30 years. Figures exclude taxes and rider premiums.

### Illustrative premiums

| Age at entry (nearer birthday) | PPT 7 | PPT 10 | PPT 12 | PPT 15 | PPT 18 |
|---|---:|---:|---:|---:|---:|
| 15 | 81,810 | 54,735 | 43,020 | 32,145 | 24,990 |
| 25 | 83,145 | 55,275 | 43,290 | 32,220 | 25,005 |
| 35 | 87,495 | 57,015 | 44,160 | 32,445 | 25,005 |
| 45 | 1,00,365 | 62,025 | 46,770 | 33,465 | 25,425 |

Premiums for other terms, ages and BSA amounts must be quoted by LIC.

## Benefits

### Death benefit

The Sum Assured on Death is the higher of 11 × Annualized Premium or the Basic Sum Assured, plus accrued guaranteed additions. The death benefit is not less than 105% of Total Premiums Paid and not less than the surrender value on the date of death. If a minor life assured aged below 8 dies before commencement of risk, Total Premiums Paid is returned without interest.

### Maturity benefit

On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable.

### Regular Income Benefit

A Regular Income Benefit equal to 10% of the Basic Sum Assured is payable at the end of the PPT and at the end of each subsequent policy year until the policy anniversary before maturity.

### Booster Income Benefit

A Booster Income Benefit equal to 70% of the Basic Sum Assured is payable on the specified policy anniversary:

| PPT | Booster anniversary |
|---|---|
| 7 years | 12th |
| 10 years | 15th |
| 12 years | 17th |
| 15 years | 20th |
| 18 years | 23rd |

### Guaranteed additions

Guaranteed additions accrue at ₹70 per ₹1,000 of Total Annualized Premium in respect of premiums paid at the end of each policy year during the PPT only; there is no accrual after the PPT. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On death during the PPT, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating: there is no bonus, dividend or surplus participation.

### Other benefits and options

- **Deferment option:** Regular Income Benefit and/or Booster Income Benefit may be deferred up to maturity. Deferred amounts accumulate at 5.78% p.a. effective for benefits due between 1 May 2026 and 30 April 2027. The policyholder may withdraw the accumulated amount, cancel the deferral, or receive it on death, maturity or surrender.
- **Settlement option:** maturity benefit may be received in instalments over 5, 10 or 15 years, at 5.11% p.a. effective for settlements commencing between 1 May 2026 and 30 April 2027; maximum discount rate 7.11% p.a.
- **Death benefit instalments:** 5, 10 or 15 years.
- Policy loan against surrender value.

## Optional benefits and riders

- **LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02):** accidental death benefit in lump sum and accidental disability benefit in instalments. Available during the policy term or to age 70, whichever is earlier.
- **LIC's Accident Benefit Rider (UIN: 512B203V03):** accidental death and disability cover during the premium paying term.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** term cover payable on death during the rider term.
- **LIC's Premium Waiver Benefit Rider (UIN: 512B204V04):** waives future premiums on the proposer's death where the life assured is a minor. The rider term is the outstanding PPT or the period to the child's age 25, whichever is lower, and is not allowed if rider term plus proposer's age exceeds 70.
- **LIC's Critical Illness Health Rider (UIN: 512B227V01):** Option 1 covers 15 critical illnesses; Option 2 covers 40 critical illnesses including additional living benefit.

Only one of the Accidental Death and Disability Benefit Rider or the Accident Benefit Rider may be chosen, along with any of the other riders. The Critical Illness Health Rider premium may not exceed 100% of the base-plan premium; all life-rider premiums together may not exceed 30% of the base-plan premium. The Accident Benefit Rider sum assured may not exceed 3 × BSA; other rider sum assureds may not exceed BSA. Riders are not available under POSP-LI/CPSC-SPV policies.

## Surrender, loan, paid-up and revival

- **Surrender:** after the first policy year with one full year's premium paid. GSV is acquired after at least two consecutive years' premiums. Surrender value is the higher of (total premiums paid × GSV factor from the brochure table, less any Income Benefit already paid, plus the surrender value of accrued guaranteed additions) and SSV.
- **Loan:** after the first policy year with one full year's premium paid. During the PPT, maximum loan is 50% of surrender value before two full years' premiums and 75% after; for paid-up policies, 40% and 65%. After the PPT, the loan is limited so that annual interest does not exceed 50% of the Regular Income Benefit, capped at 65% of surrender value. Interest is 9.50% p.a. compounding half-yearly for loans sanctioned between 1 May 2026 and 30 April 2027.
- **Paid-up:** after one full year's premium. Death sum assured, maturity sum assured, Regular Income Benefit and Booster Income Benefit are reduced in the ratio of premiums paid to premiums originally payable; guaranteed additions accrue at a reduced rate during the PPT; rider benefits cease.
- **Revival:** within 5 complete years from the first unpaid premium, before maturity, with arrears and interest at 9.50% p.a. compounding half-yearly, subject to continued insurability. Riders are revived only with the base plan.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly/half-yearly/quarterly; 15 days for monthly.

## Exclusions and conditions

The stated exclusion is suicide within 12 months of commencement of risk or revival: 80% of total premiums paid or the surrender value, whichever is higher. The clause also applies to paid-up policies, and nothing is payable under a policy that lapsed without acquiring paid-up value. For policies purchased through POSP-LI/CPSC-SPV, a 90-day waiting period applies; on death within it, premiums are refunded unless death is by accident, in which case the full death benefit is paid. Standard policy-document conditions on misstatement, fraud and the Insurance Act, 1938 apply.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Sections 80C or 10(10D). GST is stated in the benefit illustration as currently exempted. Confirm the prevailing tax treatment before relying on it.

## Suitability and decision notes

**Best suited to:** buyers who want a guaranteed income stream after a limited premium paying term, plus a booster payout and a maturity lump sum, and parents saving for a child with proposer premium waiver.

**Poor fit for:** buyers who need liquidity during the premium paying term, buyers seeking pure protection at low cost, and buyers who want market-linked growth or participation in surplus.

**Key trade-offs:** the long premium paying term, income starting only after the PPT, low early surrender values, guaranteed additions accruing only during the PPT, and no bonus or market upside.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Limits vary by PPT; 30 days to 55 years |
| Premium paying term | Yes | 7/10/12/15/18 |
| Policy term | Yes | Within the PPT-specific range, subject to maturity age 75 |
| Basic Sum Assured | Yes | ₹3,00,000 minimum, ₹10,000 multiples |
| Premium mode | Optional | Yearly/half-yearly/quarterly/monthly |
| Riders | Optional | AD&D or Accident Benefit, New Term Assurance, Premium Waiver, Critical Illness Health |
| Deferment option | Optional | Regular and/or Booster Income up to maturity |
| Settlement/death instalments | Optional | 5/10/15-year instalment periods |

Core formulas:

```text
Sum Assured on Death       = max(11 × annualized_premium, BSA)
Death Benefit              = max(Sum Assured on Death + accrued GA,
                                 1.05 × total premiums paid,
                                 surrender value)
Regular Income Benefit     = 10% × BSA, from end of PPT to the
                             anniversary before maturity
Booster Income Benefit     = 70% × BSA at the specified anniversary
                             (PPT + 5 years)
Guaranteed Addition/year   = (₹70 + applicable incentives)
                             × Total Annualized Premium paid / 1,000
Maturity Benefit           = BSA + accrued guaranteed additions
Modal premium              = yearly premium × modal conversion factor
Surrender Value            = max(total premiums paid × GSV factor
                                  − Income Benefit already paid
                                  + surrender value of accrued GA, SSV)
```

## Source documents

- [Customer Information Sheet (CIS), 25-08-2026](https://licindia.in/documents/20121/1860176/CIS_LICs+Bima+Platinum.pdf/7840334c-26e3-ba8a-2a4c-f807b4954ef7?t=1788330334383)
- [Sales Brochure, July 2026](https://licindia.in/documents/20121/1860176/LIC+Bima+platinum+Sales+brochure.pdf/ae9590c9-2c2d-6dca-c180-5bbb3f956dab?t=1788330413553)
- [Policy Document](https://licindia.in/documents/20121/1860176/Final_Policy+Document+LIC%27s+Bima+Platinum.pdf/9235a4a2-d3c7-0c4c-72e2-6c6f05c22603?t=1788330356571)
- [Official product page](https://licindia.in/en/web/guest/lic-s-bima-platinum2)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
