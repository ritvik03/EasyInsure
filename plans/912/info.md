---
plan_number: 912
plan_name: "LIC's Nav Jeevan Shree"
uin: "512N387V02"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Limited Premium Endowment)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-nav-jeevan-shree-plan-no.912-1"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0
  entry_age_max: 60
  entry_age_notes: "Minimum 30 days completed. Maximum 60 years (nearer birthday) for PPT 6/8/10, 59 years for PPT 12 and 57 years for PPT 15. For POSP-LI/CPSC-SPV, maximum entry age is 65 minus the policy term."
  maturity_age_max: 75
  maturity_age_notes: "Minimum maturity age 18 completed years. Maximum 75 years (nearer birthday); 65 years for policies procured through POSP-LI/CPSC-SPV."
  policy_terms_years: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 20
  premium_paying_terms_years: [6, 8, 10, 12, 15]
  ppt_min_years: 6
  ppt_max_years: 15
  ppt_term_pairs: "PPT 6: term 10-20; PPT 8: 15-20; PPT 10: 15-20; PPT 12: 16-20; PPT 15: 18-20."
  min_sum_assured: "₹5,00,000 Basic Sum Assured, in multiples of ₹10,000."
  max_sum_assured: "No limit; subject to LIC's Board Approved Underwriting Policy."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated. The minimum Basic Sum Assured of ₹5,00,000, the ₹10,000 BSA multiple and the chosen PPT/term determine the minimum premium."
  max_premium: "No limit; subject to underwriting."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Modal conversion factors applied to the yearly premium: half-yearly 0.5093, quarterly 0.2570, monthly 0.0862."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option I; Basic Sum Assured ₹5,00,000; age 35; yearly premium; offline sale; standard life"
      note: "Sample yearly premium in ₹ by PPT and policy term. Figures exclude taxes and rider premiums."
      rows:
        - {ppt: 6, term_10: 101350, term_15: 93425, term_20: 76750}
        - {ppt: 8, term_10: null, term_15: 70925, term_20: 60350}
        - {ppt: 10, term_10: null, term_15: 62825, term_20: 55600}
        - {ppt: 12, term_10: null, term_15: null, term_20: 48075}
        - {ppt: 15, term_10: null, term_15: null, term_20: 41875}
    - basis: "Option II; Basic Sum Assured ₹5,00,000; age 35; yearly premium; offline sale; standard life"
      note: "Sample yearly premium in ₹ by PPT and policy term. Figures exclude taxes and rider premiums."
      rows:
        - {ppt: 6, term_10: 103025, term_15: 96625, term_20: 81150}
        - {ppt: 8, term_10: null, term_15: 72700, term_20: 61850}
        - {ppt: 10, term_10: null, term_15: 63775, term_20: 56325}
        - {ppt: 12, term_10: null, term_15: null, term_20: 48075}
        - {ppt: 15, term_10: null, term_15: null, term_20: 41875}
  premium_formula: "Yearly premium is read from LIC's tabular annual premium for the chosen death-benefit option, age, PPT, policy term and Basic Sum Assured, after any high-BSA, online-sale or existing-policyholder incentive, plus taxes and rider premiums. Modal premium = yearly premium × modal conversion factor. BSA is chosen in ₹10,000 multiples subject to a ₹5,00,000 minimum."
  notes: "The sample table is for age 35, BSA ₹5,00,000 and offline sale only; other ages and BSA amounts must be quoted by LIC's calculator/underwriting. Guaranteed-addition incentives: high BSA up to 0.40%; online sale up to 1.35%; existing policyholder up to 0.15%. GST is currently exempt."

benefits:
  death_benefit: "Two options chosen at proposal and not changeable. Option I: Sum Assured on Death is the higher of 7 × (Tabular Annual Premium × modal adjustment factor) or Basic Sum Assured. Option II: higher of 10 × (Tabular Annual Premium × modal adjustment factor) or Basic Sum Assured. The death benefit includes accrued guaranteed additions and is not less than 105% of Total Premiums Paid. If a minor life assured aged below 8 dies before commencement of risk, Total Premiums Paid is returned without interest."
  death_benefit_formula: "Option I: max(7 × tabular_annual_premium × modal_adjustment_factor, bsa). Option II: max(10 × tabular_annual_premium × modal_adjustment_factor, bsa). Death benefit = max(sum_assured_on_death + accrued_guaranteed_additions, 1.05 × total_premiums_paid)."
  maturity_benefit: "On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable."
  maturity_benefit_formula: "bsa + accrued_guaranteed_additions"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed additions accrue at 8.50% of Total Tabular Annual Premium for policy terms 10-13 years, 9.00% for terms 14-17 years and 9.50% for terms 18-20 years, at the end of each policy year. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On death during the policy term, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating."
  non_guaranteed_benefits: "None; the plan does not share in surplus and pays no bonus or dividend."
  riders: ["LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)", "LIC's New Term Assurance Rider (UIN: 512B210V02)", "LIC's Premium Waiver Benefit Rider (UIN: 512B204V04)"]
  other_benefits:
    - "Settlement Option for the maturity benefit in instalments over 5, 10 or 15 years."
    - "Option to receive the death benefit in instalments over 5, 10 or 15 years."
    - "Policy loan against surrender value after the first policy year."
    - "Premium Waiver Benefit Rider on the proposer where the life assured is a minor."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered after the first policy year with one full year's premium paid. GSV is acquired after at least two full years' premiums; SSV after one full year. Surrender value is the higher of (total premiums paid × GSV factor plus accrued guaranteed additions × GA surrender factor) and SSV. The GSV and GA factor tables are printed in the brochure and policy document and are not reproduced here."
  paid_up: true
  paid_up_terms: "After at least one full year's premium, non-payment makes the policy paid-up to the end of the term. Death and maturity sum assured are reduced in the ratio of premiums paid to premiums originally payable; guaranteed additions accrue at a reduced rate; rider benefits cease."
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
  exclusions_summary: "Suicide within 12 months of commencement of risk: 80% of total premiums paid if the policy is in force. Suicide within 12 months of revival: 80% of total premiums paid or the surrender value, whichever is higher. Not applicable below age 8 at entry or revival; nothing is payable under a policy that lapsed without acquiring paid-up value."
  waiting_period: "90 days from commencement of risk for policies purchased through POSP-LI/CPSC-SPV."

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
  minimum_age: 0
  maximum_age: 60
  suitable_for:
    - "Buyers who want a guaranteed endowment with a limited premium paying term of 6-15 years"
    - "Parents saving for a child, with vesting at age 18 and the option of a proposer premium waiver"
    - "Buyers who want a choice between two death-benefit definitions"
  not_suitable_for:
    - "Buyers who need liquidity in the first two years; surrender value is limited or nil"
    - "Buyers seeking pure protection at the lowest cost"
    - "Buyers who want participation in surplus or market-linked growth"
  key_tradeoffs:
    - "Lock-in of 10-20 years with surrender values below total premiums in the early years"
    - "Death-benefit option must be chosen at proposal and cannot be changed"
    - "GSV factor tables are essential for surrender calculations; they are not reproduced in this summary"
    - "No bonus or market upside; all benefits are fixed and guaranteed"
  decision_flags: ["limited-premium", "guaranteed-additions", "two-death-benefit-options", "long-term", "gsv-factor-table", "not-posp-rider"]

calculation_inputs:
  required_inputs: ["age", "death_benefit_option", "premium_paying_term", "policy_term", "basic_sum_assured"]
  optional_inputs: ["premium_mode", "riders", "settlement_option", "death_benefit_instalments"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "Chosen in ₹10,000 multiples, minimum ₹5,00,000"
    sum_assured_on_death_option_i: "max(7 × tabular_annual_premium × modal_adjustment_factor, bsa)"
    sum_assured_on_death_option_ii: "max(10 × tabular_annual_premium × modal_adjustment_factor, bsa)"
    death_benefit: "max(sum_assured_on_death + accrued_guaranteed_additions, 1.05 × total_premiums_paid)"
    guaranteed_addition_rate: "8.50% for term 10-13; 9.00% for term 14-17; 9.50% for term 18-20; plus applicable incentives"
    guaranteed_addition_per_year: "guaranteed_addition_rate × total_tabular_annual_premium_paid"
    maturity_benefit: "bsa + accrued_guaranteed_additions"
    modal_premium: "yearly_premium × modal_conversion_factor"
    surrender_value: "max(total_premiums_paid × gsv_factor + accrued_guaranteed_additions × ga_surrender_factor, ssv)"
  assumptions:
    - "Tabular Annual Premium is before rebates, loadings, underwriting extras, taxes and rider premiums"
    - "Modal adjustment factors for the death benefit are annual 1.0000, half-yearly 1.0186, quarterly 1.0280 and monthly 1.0344"
    - "GSV and GA surrender factor tables are in the brochure and policy document but were not available as text in the extracted document"
    - "The sample table is for age 35, BSA ₹5,00,000 and offline sale"

sources:
  - name: "Customer Information Sheet (CIS), 18-09-2025"
    url: "https://licindia.in/documents/20121/1325029/CIS+_Nav+Jeevan+Shree_512N387V02.pdf/0b74bab3-4867-2b39-d643-d5deb4d3d79f?t=1760526843946"
  - name: "Sales Brochure, 15-10-2025"
    url: "https://licindia.in/documents/20121/1319704/LIC_Nav+Jeevan+Shree_Sales+Brochure_Eng_912_151025.pdf/f6661e4c-3dac-aa25-7349-ae6bdbb70f16?t=1760513752483"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1385382/Policy+Document_Nav+Jeevan+Shree_512N387V02.pdf/c683ceee-9b21-6cb2-839c-fd51ebfe8479?t=1760526796137"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-nav-jeevan-shree-plan-no.912-1"
---
# LIC's Nav Jeevan Shree — Plan 912

**One-line summary:** A non-participating limited-premium endowment with a 6-15 year premium paying term, two death-benefit options, guaranteed additions and a Basic Sum Assured plus guaranteed additions at maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 912 |
| UIN | 512N387V02 |
| Product type | Non-par, non-linked, limited-premium endowment |
| Status | Active |
| Entry age | 30 days to 60 years (limits vary by PPT) |
| Policy term | 10 to 20 years (limits vary by PPT) |
| Premium paying term | 6 / 8 / 10 / 12 / 15 years |
| Minimum sum assured | ₹5,00,000 |
| Death-benefit options | Option I: 7 × TAP or BSA; Option II: 10 × TAP or BSA |
| Official page | https://licindia.in/en/web/guest/lic-s-nav-jeevan-shree-plan-no.912-1 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 30 days completed |
| Maximum entry age | 60 (PPT 6/8/10); 59 (PPT 12); 57 (PPT 15) |
| POSP/CPSC maximum entry | 65 minus the policy term |
| Minimum maturity age | 18 completed years |
| Maximum maturity age | 75 (65 for POSP/CPSC) |
| PPT–term combinations | PPT 6: 10-20; PPT 8: 15-20; PPT 10: 15-20; PPT 12: 16-20; PPT 15: 18-20 |
| Minimum Basic Sum Assured | ₹5,00,000 |
| Basic Sum Assured multiple | ₹10,000 |

The policy vests in the life assured on the policy anniversary coinciding with or immediately following age 18 if the policy is issued on a minor's life.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly, and monthly through NACH.
- **Modal conversion factors:** half-yearly 0.5093, quarterly 0.2570, monthly 0.0862 of the yearly premium.
- **Minimum Basic Sum Assured:** ₹5,00,000, in multiples of ₹10,000.
- **Maximum Basic Sum Assured:** no limit, subject to underwriting.
- **Minimum premium:** no minimum premium is stated; the minimum BSA and chosen PPT/term determine it.
- **Guaranteed-addition incentives:** high BSA up to 0.40%, online sale up to 1.35%, existing policyholder up to 0.15%, depending on PPT and BSA slab.

No published rate table; premiums are quoted by LIC's calculator/underwriting. The brochure publishes the following sample illustrative yearly premiums for a standard life aged 35, Basic Sum Assured ₹5,00,000, offline sale. Figures exclude taxes and rider premiums.

### Illustrative premiums

**Option I — Basic Sum Assured ₹5,00,000, age 35**

| PPT | Term 10 | Term 15 | Term 20 |
|---|---:|---:|---:|
| 6 | 1,01,350 | 93,425 | 76,750 |
| 8 | - | 70,925 | 60,350 |
| 10 | - | 62,825 | 55,600 |
| 12 | - | - | 48,075 |
| 15 | - | - | 41,875 |

**Option II — Basic Sum Assured ₹5,00,000, age 35**

| PPT | Term 10 | Term 15 | Term 20 |
|---|---:|---:|---:|
| 6 | 1,03,025 | 96,625 | 81,150 |
| 8 | - | 72,700 | 61,850 |
| 10 | - | 63,775 | 56,325 |
| 12 | - | - | 48,075 |
| 15 | - | - | 41,875 |

Premiums for other ages and BSA amounts must be quoted by LIC.

## Benefits

### Death benefit

The death-benefit option is chosen at proposal and cannot be changed.

- **Option I:** Sum Assured on Death is the higher of 7 × (Tabular Annual Premium × modal adjustment factor) or the Basic Sum Assured.
- **Option II:** Sum Assured on Death is the higher of 10 × (Tabular Annual Premium × modal adjustment factor) or the Basic Sum Assured.
- The death benefit includes accrued guaranteed additions and is not less than 105% of Total Premiums Paid.

The modal adjustment factors used in the death-benefit formula are annual 1.0000, half-yearly 1.0186, quarterly 1.0280 and monthly 1.0344. If a minor life assured aged below 8 dies before commencement of risk, Total Premiums Paid is returned without interest.

### Maturity benefit

On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable.

### Guaranteed additions

Guaranteed additions accrue at the end of each policy year at:

| Policy term | Rate (of Total Tabular Annual Premium paid) |
|---|---:|
| 10-13 years | 8.50% |
| 14-17 years | 9.00% |
| 18-20 years | 9.50% |

The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On death during the policy term, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating: there is no bonus, dividend or surplus participation.

### Other benefits and options

- **Settlement Option:** maturity benefit in instalments over 5, 10 or 15 years.
- **Death benefit instalments:** 5, 10 or 15 years.
- Policy loan against surrender value after the first policy year.
- Premium Waiver Benefit Rider on the proposer where the life assured is a minor.

## Optional benefits and riders

- **LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02):** accidental death benefit in lump sum; accidental disability benefit in equal monthly instalments over 10 years. Available during the policy term or to age 70, whichever is earlier; for minors, from the policy anniversary after age 18.
- **LIC's Accident Benefit Rider (UIN: 512B203V03):** accidental death and disability cover during the premium paying term; for minors, from the policy anniversary after age 18.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** term cover payable on death during the policy term; available at inception only.
- **LIC's Premium Waiver Benefit Rider (UIN: 512B204V04):** waives base-plan premiums on the proposer's death during the rider term where the life assured is a minor. The rider term is the outstanding PPT or 25 minus the minor's age, whichever is lower, and is not allowed if rider term plus proposer's age exceeds 70.

Only one of the Accidental Death and Disability Benefit Rider or the Accident Benefit Rider may be chosen, along with the other riders. All life-rider premiums together may not exceed 30% of the base-plan premium. The Accident Benefit Rider sum assured may not exceed 3 × BSA; other rider sum assureds may not exceed BSA. No rider is available under POSP-LI/CPSC-SPV policies.

## Surrender, loan, paid-up and revival

- **Surrender:** after the first policy year with one full year's premium paid. GSV is acquired after at least two full years' premiums; SSV after one full year. Surrender value is the higher of (total premiums paid × GSV factor plus accrued guaranteed additions × GA surrender factor) and SSV. The GSV and GA factor tables are printed in the brochure on pages 18-20 and in the policy document; they are not reproduced here because the extracted text does not contain the table values.
- **Loan:** after the first policy year with one full year's premium paid. Maximum loan is 50% of surrender value before two full years' premiums and 80% after for in-force policies; 40% and 70% for paid-up policies. Interest is 9.50% p.a. compounding half-yearly for loans sanctioned between 1 May 2025 and 30 April 2026.
- **Paid-up:** after one full year's premium. Death and maturity sum assured are reduced in the ratio of premiums paid to premiums originally payable; guaranteed additions accrue at a reduced rate; rider benefits cease.
- **Revival:** within 5 complete years from the first unpaid premium, before maturity, with arrears and interest at 9.50% p.a. compounding half-yearly, subject to continued insurability. Riders are revived only with the base plan.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly/half-yearly/quarterly; 15 days for monthly.

## Exclusions and conditions

The stated exclusion is suicide within 12 months of commencement of risk: 80% of total premiums paid if the policy is in force. For suicide within 12 months of revival, the higher of 80% of total premiums paid and the surrender value is payable. The clause does not apply where the life assured's age at entry or revival is below 8 years, and nothing is payable under a policy that lapsed without acquiring paid-up value. For policies purchased through POSP-LI/CPSC-SPV, a 90-day waiting period applies. Standard policy-document conditions on misstatement, fraud and the Insurance Act, 1938 apply.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Sections 80C or 10(10D). GST is stated in the benefit illustration as currently exempted. Confirm the prevailing tax treatment before relying on it.

## Suitability and decision notes

**Best suited to:** buyers who want a guaranteed endowment with a shorter premium paying term, a choice of two death-benefit definitions, and optional child-proposer premium waiver.

**Poor fit for:** buyers who need money back within two years, buyers seeking pure protection at low cost, and buyers who want market-linked growth or participation in surplus.

**Key trade-offs:** the 10-20 year lock-in, low early surrender values, an irrevocable choice between death-benefit options, and no bonus or market upside. The GSV factor tables are needed for any surrender calculation and are not reproduced in this summary.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 30 days to 60 years, subject to PPT |
| Death-benefit option | Yes | Option I or Option II; cannot be changed |
| Premium paying term | Yes | 6/8/10/12/15 |
| Policy term | Yes | Within the PPT-specific range |
| Basic Sum Assured | Yes | ₹5,00,000 minimum, ₹10,000 multiples |
| Premium mode | Optional | Yearly/half-yearly/quarterly/monthly |
| Riders | Optional | AD&D or Accident Benefit, New Term Assurance, Premium Waiver |
| Settlement/death instalments | Optional | 5/10/15-year instalment periods |

Core formulas:

```text
Sum Assured on Death (Option I)  = max(7 × tabular_annual_premium
                                        × modal_adjustment_factor, BSA)
Sum Assured on Death (Option II) = max(10 × tabular_annual_premium
                                        × modal_adjustment_factor, BSA)
Death Benefit                    = max(Sum Assured on Death + accrued GA,
                                       1.05 × total premiums paid)
Guaranteed Addition rate         = 8.50% (term 10-13)
                                   9.00% (term 14-17)
                                   9.50% (term 18-20)
                                   + applicable incentives
Guaranteed Addition per year     = rate × Total Tabular Annual Premium paid
Maturity Benefit                 = BSA + accrued guaranteed additions
Modal premium                    = yearly premium × modal conversion factor
Surrender Value                  = max(total premiums paid × GSV factor
                                       + accrued GA × GA surrender factor, SSV)
```

## Source documents

- [Customer Information Sheet (CIS), 18-09-2025](https://licindia.in/documents/20121/1325029/CIS+_Nav+Jeevan+Shree_512N387V02.pdf/0b74bab3-4867-2b39-d643-d5deb4d3d79f?t=1760526843946)
- [Sales Brochure, 15-10-2025](https://licindia.in/documents/20121/1319704/LIC_Nav+Jeevan+Shree_Sales+Brochure_Eng_912_151025.pdf/f6661e4c-3dac-aa25-7349-ae6bdbb70f16?t=1760513752483)
- [Policy Document](https://licindia.in/documents/20121/1385382/Policy+Document_Nav+Jeevan+Shree_512N387V02.pdf/c683ceee-9b21-6cb2-839c-fd51ebfe8479?t=1760526796137)
- [Official product page](https://licindia.in/en/web/guest/lic-s-nav-jeevan-shree-plan-no.912-1)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
