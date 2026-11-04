---
plan_number: 881
plan_name: "LIC's Bima Lakshmi"
uin: "512N389V01"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Female-only Limited Premium Endowment)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-bima-lakshmi-881-512n389v01"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 50
  entry_age_notes: "Designed exclusively for females. Minimum 18 years last birthday; maximum 50 years nearer birthday. Not sold through POSP-LI or CPSC-SPV."
  maturity_age_max: null
  maturity_age_notes: "The brochure does not state a maximum maturity age. The policy term is 25 years and entry is capped at age 50, which implies maturity by age 75, but no explicit maturity-age limit is published."
  policy_terms_years: [25]
  policy_term_kind: "fixed"
  policy_term_min_years: 25
  policy_term_max_years: 25
  premium_paying_terms_years: [7, 8, 9, 10, 11, 12, 13, 14, 15]
  ppt_min_years: 7
  ppt_max_years: 15
  ppt_term_pairs: "Policy term 25 years; PPT may be chosen from 7 to 15 years."
  min_sum_assured: "₹2,00,000 Basic Sum Assured, in multiples of ₹10,000."
  max_sum_assured: "No limit; subject to LIC's Board Approved Underwriting Policy."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated. The minimum Basic Sum Assured of ₹2,00,000, the ₹10,000 BSA multiple and the chosen PPT determine the minimum premium."
  max_premium: "No limit; subject to underwriting."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Premium conversion factors applied to the yearly premium: half-yearly 0.5090, quarterly 0.2568, monthly 0.0861. Salary deduction is also permitted."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Basic Sum Assured ₹2,00,000; age 35; policy term 25 years; yearly premium; offline sale; standard female life"
      note: "Sample yearly premium in ₹ by PPT and survival-benefit option. Figures exclude taxes and rider premiums."
      rows:
        - {ppt: 7, option_a: 47840, option_b: 56700, option_c: 54470}
        - {ppt: 8, option_a: 40990, option_b: 50190, option_c: 48230}
        - {ppt: 9, option_a: 35880, option_b: 45350, option_c: 43580}
        - {ppt: 10, option_a: 34480, option_b: 44940, option_c: 43190}
        - {ppt: 11, option_a: 30890, option_b: 41470, option_c: 39860}
        - {ppt: 12, option_a: 27990, option_b: 38660, option_c: 37160}
        - {ppt: 13, option_a: 25600, option_b: 36340, option_c: 34940}
        - {ppt: 14, option_a: 23590, option_b: 34390, option_c: 33060}
        - {ppt: 15, option_a: 22590, option_b: 33780, option_c: 32480}
  premium_formula: "Yearly premium is read from LIC's tabular annual premium for the chosen survival-benefit option, age, PPT, 25-year term and Basic Sum Assured, after any high-BSA, online-sale or existing-policyholder incentive, plus taxes and rider premiums. Modal premium = yearly premium × premium conversion factor. BSA is chosen in ₹10,000 multiples subject to a ₹2,00,000 minimum."
  notes: "The sample table is only for BSA ₹2,00,000, age 35 and offline sale. Other ages, PPTs and BSA amounts must be quoted by LIC's calculator/underwriting. Guaranteed-addition incentives: high BSA up to 0.50%; online sale up to 1.50%; existing policyholder 0.05-0.10%. GST is currently exempt."

benefits:
  death_benefit: "Sum Assured on Death is the higher of the Basic Sum Assured or 10 × (Tabular Annual Premium × modal adjustment factor), plus accrued guaranteed additions. The death benefit is not less than 105% of total premiums paid."
  death_benefit_formula: "max(bsa, 10 × tabular_annual_premium × modal_adjustment_factor) + accrued_guaranteed_additions; death_benefit >= 1.05 × total_premiums_paid"
  maturity_benefit: "On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable. Survival benefits already paid do not reduce the maturity sum assured."
  maturity_benefit_formula: "bsa + accrued_guaranteed_additions"
  survival_benefits:
    - "Option A: 50% of Basic Sum Assured at the end of the PPT."
    - "Option B: 7.5% of Basic Sum Assured at the end of policy years 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22 and 24 (12 payments, 90% in total)."
    - "Option C: 15% of Basic Sum Assured at the end of policy years 4, 8, 12, 16, 20 and 24 (6 payments, 90% in total)."
  guaranteed_benefits: "Guaranteed additions accrue at 7.00% of Total Tabular Annual Premium in respect of premiums paid, at the end of each policy year throughout the 25-year term. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On death during the policy term, guaranteed additions for the year of death are paid for the full policy year. Survival benefits are guaranteed; the plan is non-participating."
  non_guaranteed_benefits: "None; the plan does not share in surplus and pays no bonus or dividend."
  riders: ["LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)", "LIC's New Term Assurance Rider (UIN: 512B210V02)", "LIC's Female Critical Illness Benefit Rider (UIN: 512B226V01)"]
  other_benefits:
    - "Survival Benefit Deferment Option: any survival benefit may be deferred for 5 years, subject to limits; deferred amounts accumulate at 6.09% p.a. for benefits due between 1 May 2025 and 30 April 2026."
    - "Settlement Option for the maturity benefit in instalments over 5, 10 or 15 years."
    - "Option to receive the death benefit in instalments over 5, 10 or 15 years."
    - "Auto cover after three full years' premiums, for 6 months (3 to less than 5 years paid) or 2 years (5 or more years paid)."
    - "Policy loan against surrender value after the first policy year."
    - "Female Critical Illness Benefit Rider with three modules: early-stage/major cancer, common surgeries/illnesses in women, and pregnancy complications/congenital anomalies."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered after the first policy year with one full year's premium paid. GSV is acquired after at least two full years' premiums; SSV after one full year. GSV = total premiums paid × GSV factor, reduced by survival benefits already paid or due but unpaid under deferment, plus accrued guaranteed additions × GA factor; the higher of GSV and SSV is paid. The factor tables are in the brochure."
  paid_up: true
  paid_up_terms: "After at least one full year's premium, non-payment makes the policy paid-up. With 1 to less than 3 full years paid, death and maturity pay the reduced paid-up sum assured plus accrued guaranteed additions. With at least 3 full years paid, an auto cover of 6 months (3 to less than 5 years paid) or 2 years (5 or more years paid) applies; during auto cover, death pays the in-force death benefit less unpaid premiums with interest and balance premiums to the next anniversary, and maturity pays the paid-up sum assured plus guaranteed additions. After auto cover, death and maturity pay the paid-up sum assured plus guaranteed additions. Survival benefits and guaranteed additions are reduced proportionally."
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
  exclusions_summary: "Suicide within 12 months of commencement of risk: 80% of total premiums paid if the policy is in force. Suicide within 12 months of revival: 80% of total premiums paid or the surrender value, whichever is higher. No relaxation under auto cover; nothing payable under a policy that lapsed without paid-up value."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Applicable as per prevailing tax law. The brochure's benefit illustration states that GST is currently exempted."
  notes: "The documents do not state income-tax benefits or implications; consult a tax adviser."

decision:
  primary_goals: ["savings", "protection"]
  risk_profile: "Conservative; guaranteed non-participating benefits"
  liquidity: "Low"
  time_horizon: "Long"
  minimum_age: 18
  maximum_age: 50
  suitable_for:
    - "Women who want a guaranteed 25-year savings and protection plan with periodic survival benefits"
    - "Buyers who want a choice between a lump sum at the end of the PPT and staggered survival payouts"
    - "Women who want optional female-specific critical illness cover"
  not_suitable_for:
    - "Male lives; the plan is designed exclusively for females"
    - "Buyers who need liquidity in the first two years; surrender value is limited or nil"
    - "Buyers seeking pure protection at the lowest cost"
  key_tradeoffs:
    - "25-year term with low early surrender values and survival benefits that reduce the effective return of capital before maturity"
    - "Survival-benefit option must be chosen at proposal and cannot be changed"
    - "A maximum maturity age is not explicitly stated in the brochure"
    - "The plan is non-participating, so there is no bonus or market upside"
  decision_flags: ["female-only", "survival-benefits", "auto-cover", "guaranteed-additions", "female-critical-illness-rider", "not-posp"]

calculation_inputs:
  required_inputs: ["age", "premium_paying_term", "survival_benefit_option", "basic_sum_assured"]
  optional_inputs: ["premium_mode", "riders", "survival_benefit_deferment", "settlement_option", "death_benefit_instalments"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "Chosen in ₹10,000 multiples, minimum ₹2,00,000"
    sum_assured_on_death: "max(bsa, 10 × tabular_annual_premium × modal_adjustment_factor)"
    death_benefit: "max(sum_assured_on_death + accrued_guaranteed_additions, 1.05 × total_premiums_paid)"
    survival_benefit_option_a: "0.50 × bsa at the end of the PPT"
    survival_benefit_option_b: "0.075 × bsa at the end of policy years 2, 4, ..., 24"
    survival_benefit_option_c: "0.15 × bsa at the end of policy years 4, 8, ..., 24"
    guaranteed_addition_per_year: "(0.07 + high_bsa_incentive + online_incentive + existing_policyholder_incentive) × total_tabular_annual_premium_paid"
    maturity_benefit: "bsa + accrued_guaranteed_additions"
    modal_premium: "yearly_premium × premium_conversion_factor"
    surrender_value: "max(total_premiums_paid × gsv_factor - survival_benefits_paid_or_due + accrued_ga × ga_factor, ssv)"
  assumptions:
    - "Tabular Annual Premium is before rebates, loadings, underwriting extras, taxes and rider premiums"
    - "Modal adjustment factors for the death benefit are annual 1.0000, half-yearly 1.0180, quarterly 1.0272 and monthly 1.0332"
    - "Premium conversion factors for payment are annual 1.0000, half-yearly 0.5090, quarterly 0.2568 and monthly 0.0861"
    - "The sample table is for BSA ₹2,00,000, age 35 and offline sale"

sources:
  - name: "Customer Information Sheet (CIS), 14-10-2025"
    url: "https://licindia.in/documents/20121/1325029/CIS_LIC%27s+Bima+Lakshmi.pdf/7dd1f1a7-7e9e-924d-fe16-d2da4907dfa1?t=1760526843337"
  - name: "Sales Brochure, October 2025"
    url: "https://licindia.in/documents/20121/1319704/LIC_Bima+Lakshmi_Sales+Brochure_Eng.pdf/cee11780-e0d1-764e-2995-4a1f324a2744?t=1760544623288"
  - name: "Policy Document, 14-10-2025"
    url: "https://licindia.in/documents/20121/1385382/Policy+Document_LIC%27s+Bima+Lakshmi.pdf/82e18b47-8b8b-544f-326d-5fe61243173c?t=1760526795170"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-bima-lakshmi-881-512n389v01"
---
# LIC's Bima Lakshmi — Plan 881

**One-line summary:** A 25-year limited-premium endowment designed exclusively for women, with a choice of three guaranteed survival-benefit schedules, guaranteed additions, optional female critical-illness cover, and the Basic Sum Assured plus guaranteed additions at maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 881 |
| UIN | 512N389V01 |
| Product type | Non-par, non-linked, female-only limited-premium endowment |
| Status | Active |
| Entry age | 18 to 50 years |
| Policy term | 25 years |
| Premium paying term | 7 to 15 years |
| Minimum sum assured | ₹2,00,000 |
| Survival-benefit options | A: 50% at end of PPT; B: 7.5% every 2 years; C: 15% every 4 years |
| Official page | https://licindia.in/en/web/guest/lic-s-bima-lakshmi-881-512n389v01 |

## Eligibility

| Condition | Requirement |
|---|---|
| Gender | Female lives only |
| Minimum entry age | 18 years last birthday |
| Maximum entry age | 50 years nearer birthday |
| Policy term | 25 years |
| Premium paying term | 7 to 15 years |
| Minimum Basic Sum Assured | ₹2,00,000 |
| Basic Sum Assured multiple | ₹10,000 |
| Maximum maturity age | Not stated in the brochure; entry 50 plus a 25-year term implies a maximum of 75, but no explicit limit is published |

The plan is not sold through POSP-LI or CPSC-SPV.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly, monthly through NACH, or salary deduction.
- **Premium conversion factors:** half-yearly 0.5090, quarterly 0.2568, monthly 0.0861 of the yearly premium.
- **Minimum Basic Sum Assured:** ₹2,00,000, in multiples of ₹10,000.
- **Maximum Basic Sum Assured:** no limit, subject to underwriting.
- **Minimum premium:** no minimum premium is stated; the minimum BSA and chosen PPT determine it.
- **Guaranteed-addition incentives:** high BSA up to 0.50%; online sale up to 1.50%; existing policyholder 0.05-0.10%, depending on PPT and BSA slab.

No published rate table; premiums are quoted by LIC's calculator/underwriting. The brochure publishes the following sample illustrative yearly premiums for a standard female life aged 35, Basic Sum Assured ₹2,00,000, offline sale. Figures exclude taxes and rider premiums.

### Illustrative premiums

| PPT | Option A | Option B | Option C |
|---|---:|---:|---:|
| 7 | 47,840 | 56,700 | 54,470 |
| 8 | 40,990 | 50,190 | 48,230 |
| 9 | 35,880 | 45,350 | 43,580 |
| 10 | 34,480 | 44,940 | 43,190 |
| 11 | 30,890 | 41,470 | 39,860 |
| 12 | 27,990 | 38,660 | 37,160 |
| 13 | 25,600 | 36,340 | 34,940 |
| 14 | 23,590 | 34,390 | 33,060 |
| 15 | 22,590 | 33,780 | 32,480 |

Premiums for other ages, PPTs and BSA amounts must be quoted by LIC.

## Benefits

### Death benefit

The Sum Assured on Death is the higher of the Basic Sum Assured or 10 × (Tabular Annual Premium × modal adjustment factor), plus accrued guaranteed additions. The death benefit is not less than 105% of total premiums paid.

The modal adjustment factors used in the death-benefit formula are annual 1.0000, half-yearly 1.0180, quarterly 1.0272 and monthly 1.0332.

### Maturity benefit

On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable. Survival benefits already paid do not reduce the maturity sum assured.

### Survival benefits

One option is chosen at proposal and cannot be changed.

**Option A:** 50% of the Basic Sum Assured at the end of the PPT.

**Option B:** 7.5% of the Basic Sum Assured at the end of policy years 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22 and 24 (12 payments, 90% in total).

**Option C:** 15% of the Basic Sum Assured at the end of policy years 4, 8, 12, 16, 20 and 24 (6 payments, 90% in total).

### Guaranteed additions

Guaranteed additions accrue at 7.00% of Total Tabular Annual Premium in respect of premiums paid, at the end of each policy year throughout the 25-year term. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On death during the policy term, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating: there is no bonus, dividend or surplus participation.

### Other benefits and options

- **Survival Benefit Deferment Option:** a survival benefit may be deferred for 5 years. It may be used once under Option A and for up to two survival benefits under Options B and C, provided at least 5 years of the policy term remain and no loan is outstanding. Deferred amounts accumulate at 6.09% p.a. for benefits due between 1 May 2025 and 30 April 2026; on surrender or cancellation, accumulated values are recalculated at 5.09% p.a.
- **Settlement Option:** maturity benefit in instalments over 5, 10 or 15 years.
- **Death benefit instalments:** 5, 10 or 15 years.
- **Auto cover:** after three full years' premiums, 6 months if 3 to less than 5 years have been paid, or 2 years if 5 or more years have been paid.
- Policy loan against surrender value after the first policy year.

## Optional benefits and riders

- **LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02):** accidental death benefit in lump sum; accidental disability benefit in equal monthly instalments over 10 years. Cover during the policy term or to age 70, whichever is earlier.
- **LIC's Accident Benefit Rider (UIN: 512B203V03):** accidental death and disability cover during the premium paying term.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** term cover payable on death during the rider term; available at inception only.
- **LIC's Female Critical Illness Benefit Rider (UIN: 512B226V01):** three modules - Module 1 early-stage cancer/carcinoma-in-situ/major cancer; Module 2 common surgeries/illnesses in women; Module 3 pregnancy complications and congenital anomalies. Available at inception; the policyholder may choose any or all modules.

Only one of the Accidental Death and Disability Benefit Rider or the Accident Benefit Rider may be chosen, along with the other riders. The Female Critical Illness rider premium may not exceed 100% of the base-plan premium; all life-rider premiums together may not exceed 30% of the base-plan premium. The Accident Benefit Rider sum assured may not exceed 3 × BSA; the Female Critical Illness rider sum assured may not exceed the lower of 50% of the sum assured on death or ₹5,00,000; other rider sum assureds may not exceed BSA.

## Surrender, loan, paid-up and revival

- **Surrender:** after the first policy year with one full year's premium paid. GSV is acquired after at least two full years' premiums; SSV after one full year. GSV = total premiums paid × GSV factor, reduced by survival benefits already paid or due but unpaid under deferment, plus accrued guaranteed additions × GA factor; the higher of GSV and SSV is paid. The 25-year GSV factors are 0% in year 1, 30% in year 2, 35% in year 3, 50% in years 4-7, 51.60% in year 8, rising to 74.12% in year 23 and 90% in years 24-25. GA surrender factors are 0% in years 1-2, 15.28% in year 3, rising to 35% in year 25.
- **Loan:** after the first policy year with one full year's premium paid. Maximum loan is 50% of surrender value before two full years' premiums and 75% after for in-force policies; 40% and 65% for paid-up policies. Interest is 9.50% p.a. compounding half-yearly for loans sanctioned between 1 May 2025 and 30 April 2026.
- **Paid-up:** after at least one full year's premium. With 1 to less than 3 full years paid, death and maturity pay the reduced paid-up sum assured plus accrued guaranteed additions. With at least 3 full years paid, an auto cover of 6 months (3 to less than 5 years paid) or 2 years (5 or more years paid) applies; during auto cover, death pays the in-force death benefit less unpaid premiums with interest and balance premiums to the next anniversary, and maturity pays the paid-up sum assured plus guaranteed additions. After auto cover, death and maturity pay the paid-up sum assured plus guaranteed additions. Survival benefits and guaranteed additions are reduced proportionally.
- **Revival:** within 5 complete years from the first unpaid premium, before maturity, with arrears and interest at 9.50% p.a. compounding half-yearly, subject to continued insurability. Riders are revived only with the base plan.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly/half-yearly/quarterly; 15 days for monthly.

## Exclusions and conditions

The stated exclusion is suicide within 12 months of commencement of risk: 80% of total premiums paid if the policy is in force. For suicide within 12 months of revival, the higher of 80% of total premiums paid and the surrender value is payable. The suicide relaxation under auto cover does not apply, and nothing is payable under a policy that lapsed without acquiring paid-up value. Standard policy-document conditions on misstatement, fraud and the Insurance Act, 1938 apply.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Sections 80C or 10(10D). GST is stated in the benefit illustration as currently exempted. Confirm the prevailing tax treatment before relying on it.

## Suitability and decision notes

**Best suited to:** women who want a guaranteed 25-year savings and protection plan with periodic survival payouts and optional female-specific critical-illness cover.

**Poor fit for:** male lives, buyers who need liquidity in the first two years, and buyers seeking pure protection at low cost.

**Key trade-offs:** the 25-year lock-in, survival benefits that return part of the capital before maturity, an irrevocable choice of survival-benefit option, no explicit maximum maturity age in the brochure, and no bonus or market upside.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Female lives, 18-50 |
| Premium paying term | Yes | 7-15 years |
| Survival-benefit option | Yes | A, B or C; cannot be changed |
| Basic Sum Assured | Yes | ₹2,00,000 minimum, ₹10,000 multiples |
| Premium mode | Optional | Yearly/half-yearly/quarterly/monthly |
| Riders | Optional | AD&D or Accident Benefit, New Term Assurance, Female Critical Illness |
| Survival-benefit deferment | Optional | 5-year deferment, subject to limits |
| Settlement/death instalments | Optional | 5/10/15-year instalment periods |

Core formulas:

```text
Sum Assured on Death       = max(BSA, 10 × tabular_annual_premium
                                  × modal_adjustment_factor)
Death Benefit              = max(Sum Assured on Death + accrued GA,
                                 1.05 × total premiums paid)
Survival Benefit Option A  = 50% × BSA at end of PPT
Survival Benefit Option B  = 7.5% × BSA at end of policy years 2, 4, ..., 24
Survival Benefit Option C  = 15% × BSA at end of policy years 4, 8, ..., 24
Guaranteed Addition/year   = (7.00% + applicable incentives)
                             × Total Tabular Annual Premium paid
Maturity Benefit           = BSA + accrued guaranteed additions
Modal premium              = yearly premium × premium conversion factor
Surrender Value            = max(total premiums paid × GSV factor
                                 − survival benefits paid or due
                                 + accrued GA × GA factor, SSV)
```

## Source documents

- [Customer Information Sheet (CIS), 14-10-2025](https://licindia.in/documents/20121/1325029/CIS_LIC%27s+Bima+Lakshmi.pdf/7dd1f1a7-7e9e-924d-fe16-d2da4907dfa1?t=1760526843337)
- [Sales Brochure, October 2025](https://licindia.in/documents/20121/1319704/LIC_Bima+Lakshmi_Sales+Brochure_Eng.pdf/cee11780-e0d1-764e-2995-4a1f324a2744?t=1760544623288)
- [Policy Document, 14-10-2025](https://licindia.in/documents/20121/1385382/Policy+Document_LIC%27s+Bima+Lakshmi.pdf/82e18b47-8b8b-544f-326d-5fe61243173c?t=1760526795170)
- [Official product page](https://licindia.in/en/web/guest/lic-s-bima-lakshmi-881-512n389v01)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
