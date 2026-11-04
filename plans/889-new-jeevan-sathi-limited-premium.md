---
plan_number: 889
plan_name: "LIC's New Jeevan Sathi - Limited Premium"
uin: "512N394V01"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Joint Life, Limited Premium Endowment)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-limited-premium-"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 50
  entry_age_notes: "18 completed years minimum for both lives. Maximum entry age depends on PPT, term and option: PPT 5 - 45 (Option I) or 40 (Option II), but 35 for term 25 under Option II; PPT 10 - 50 (Option I) or 40 (Option II), but 35 for term 25 under Option II; PPT 15 - 50 (Option I) or 40 (Option II), but 35 for term 25 under Option II. The plan is for a married individual (Primary Life Assured) and spouse (Secondary Life Assured). Not sold through POSP-LI or CPSC-SPV."
  maturity_age_max: 75
  maturity_age_notes: "Minimum maturity age 28 completed years. Maximum 75 years (nearer birthday) under Option I and 60 years (nearer birthday) under Option II."
  policy_terms_years: [10, 15, 20, 25]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 25
  premium_paying_terms_years: [5, 10, 15]
  ppt_min_years: 5
  ppt_max_years: 15
  ppt_term_pairs: "PPT 5 permits terms 10/15/20/25; PPT 10 permits terms 15/20/25; PPT 15 permits terms 20/25."
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
  frequency_loadings: "Modal conversion factors applied to the yearly premium: half-yearly 0.5090, quarterly 0.2568, monthly 0.0861. Salary deduction is also permitted."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option I; Basic Sum Assured ₹3,00,000; yearly premium; offline sale; both lives at the same age"
      note: "Sample yearly premium in ₹ by age at entry (nearer birthday) and policy term (PPT). Standard lives; figures exclude taxes and rider premiums."
      rows:
        - {age: 20, term_15_ppt_5: 68505, term_20_ppt_10: 33045, term_25_ppt_15: 20715}
        - {age: 35, term_15_ppt_5: 75705, term_20_ppt_10: 37035, term_25_ppt_15: 25095}
        - {age: 45, term_15_ppt_5: 112470, term_20_ppt_10: 50265, term_25_ppt_15: 35055}
    - basis: "Option II; Basic Sum Assured ₹3,00,000; yearly premium; offline sale; both lives at the same age"
      note: "Sample yearly premium in ₹ by age at entry (nearer birthday) and policy term (PPT). Standard lives; figures exclude taxes and rider premiums."
      rows:
        - {age: 20, term_15_ppt_5: 71670, term_20_ppt_10: 33510, term_25_ppt_15: 20715}
        - {age: 25, term_15_ppt_5: 72825, term_20_ppt_10: 34140, term_25_ppt_15: 21330}
        - {age: 35, term_15_ppt_5: 84135, term_20_ppt_10: 39525, term_25_ppt_15: 25095}
  premium_formula: "Yearly premium is read from LIC's tabular annual premium for the chosen death-benefit option, the ages of both lives, the policy term, the PPT and the Basic Sum Assured, after any high-BSA, online-sale or existing-policyholder rebate, plus taxes and rider premiums. Modal premium = yearly premium × modal conversion factor. BSA is chosen in ₹10,000 multiples subject to a ₹3,00,000 minimum."
  notes: "The sample table covers only the 15(5), 20(10) and 25(15) term/PPT combinations. The other eligible combinations - 10(5), 15(10), 20(15) and 25(10) - are not shown and must be quoted by LIC's calculator/underwriting. High-BSA incentive increases the guaranteed-addition rate by up to 1.00%; online sale by up to 1.25%; existing policyholder by up to 0.10%. GST is currently exempt."

benefits:
  death_benefit: "Two options chosen at proposal and not changeable. Option I: Sum Assured on Death is the higher of 7 × Tabular Annual Premium or Basic Sum Assured. Option II: higher of 10.5 × Tabular Annual Premium or Basic Sum Assured. On the first death, the Sum Assured on Death is paid to the surviving life assured and the policy continues; all further base-plan premiums from the policy anniversary following the first death are waived, but rider premiums continue. On the second death, the Sum Assured on Death plus accrued guaranteed additions is paid and the policy terminates. On simultaneous death, the sum of the first-death and second-death benefits is paid. The death benefit is not less than 105% of total premiums paid."
  death_benefit_formula: "Option I: max(7 × tabular_annual_premium, bsa). Option II: max(10.5 × tabular_annual_premium, bsa). Death benefit >= 1.05 × total_premiums_paid. First death: sum_assured_on_death. Second death: sum_assured_on_death + accrued_guaranteed_additions. Simultaneous: first_death_benefit + second_death_benefit."
  maturity_benefit: "On survival of at least one life assured to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable."
  maturity_benefit_formula: "bsa + accrued_guaranteed_additions"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed additions accrue at 7.00% of Total Tabular Annual Premium paid in respect of premiums paid during the policy term, at the end of each policy year. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On the second death, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating."
  non_guaranteed_benefits: "None; the plan does not share in surplus and pays no bonus or dividend."
  riders: ["LIC's Accident Benefit Rider (UIN: 512B203V03)", "LIC's New Term Assurance Rider (UIN: 512B210V02)", "LIC's Critical Illness Health Rider (UIN: 512B227V01)"]
  other_benefits:
    - "Premium waiver on the first death during the premium paying term; base-plan premiums from the following policy anniversary are waived, but rider premiums are not."
    - "Option to receive the death benefit or maturity benefit in instalments over 5, 10 or 15 years."
    - "Policy loan against surrender value after the first policy year."
    - "Critical Illness Health Rider with Option 1 (15 critical illnesses) or Option 2 (40 critical illnesses including additional living benefit)."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered after completion of the first policy year provided one full year's premium has been paid. Guaranteed Surrender Value is acquired after at least two full years' premiums; Special Surrender Value is available after one full year. Surrender value is the higher of (total premiums paid × GSV factor from the brochure table plus the surrender value of accrued guaranteed additions) and SSV."
  paid_up: true
  paid_up_terms: "After at least one full year's premium, non-payment of subsequent premiums makes the policy paid-up until the end of the term or the earlier death of a life assured. Death and maturity sum assured are reduced proportionally; guaranteed additions continue at a reduced rate; rider benefits cease."
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
  exclusions_summary: "Suicide of either or both lives assured within 12 months of commencement of risk or within 12 months of revival: 80% of total premiums paid or the surrender value, whichever is higher. No other claim is payable."
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
    - "Married couples who want joint-life savings and protection with a limited premium paying term"
    - "Couples who want base-plan premiums waived after the first death"
    - "Buyers who want guaranteed benefits without fund or bonus uncertainty"
  not_suitable_for:
    - "Unmarried individuals or buyers who cannot satisfy the joint-life married-couple condition"
    - "Buyers who need liquidity in the first two years; surrender value is limited or nil"
    - "Buyers seeking pure protection at the lowest cost"
  key_tradeoffs:
    - "Long lock-in of 10-25 years with surrender value below total premiums in the early years"
    - "The premium waiver applies only to base-plan premiums, not rider premiums"
    - "Joint-life cover pays on the first death but continues for the survivor, so the policy does not terminate early"
    - "No bonus or market upside; all benefits are fixed and guaranteed"
  decision_flags: ["joint-life", "limited-premium", "premium-waiver-on-first-death", "married-couple-only", "guaranteed-additions", "not-posp"]

calculation_inputs:
  required_inputs: ["primary_age", "secondary_age", "death_benefit_option", "policy_term", "premium_paying_term", "basic_sum_assured"]
  optional_inputs: ["premium_mode", "riders", "settlement_option", "death_benefit_instalments"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "Chosen in ₹10,000 multiples, minimum ₹3,00,000"
    death_benefit: "First death: max(7 × tabular_annual_premium, bsa) under Option I or max(10.5 × tabular_annual_premium, bsa) under Option II. Second death adds accrued guaranteed additions. Simultaneous death pays the sum of the first- and second-death benefits. Death benefit is not less than 105% of total premiums paid."
    sum_assured_on_death_option_i: "max(7 × tabular_annual_premium, bsa)"
    sum_assured_on_death_option_ii: "max(10.5 × tabular_annual_premium, bsa)"
    death_benefit_floor: "max(death_benefit, 1.05 × total_premiums_paid)"
    first_death_benefit: "sum_assured_on_death"
    second_death_benefit: "sum_assured_on_death + accrued_guaranteed_additions"
    simultaneous_death_benefit: "first_death_benefit + second_death_benefit"
    guaranteed_addition_per_year: "(0.07 + high_bsa_incentive + online_incentive + existing_policyholder_incentive) × total_tabular_annual_premium_paid"
    maturity_benefit: "bsa + accrued_guaranteed_additions"
    modal_premium: "yearly_premium × modal_conversion_factor"
    surrender_value: "max(total_premiums_paid × gsv_factor + surrender_value_of_accrued_guaranteed_additions, ssv)"
  assumptions:
    - "Tabular annual premium is before rebates, loadings, underwriting extras, taxes and rider premiums"
    - "Guaranteed additions accrue at the end of each policy year for the full policy term"
    - "Sample premiums are for standard lives, offline sale, with both lives at the same age"
    - "Rider premiums are not waived on the first death"

sources:
  - name: "Customer Information Sheet (CIS), 22-05-2026"
    url: "https://licindia.in/documents/20121/1795076/Final+CIS+_LIC%27s+New+Jeevan+sathi_LP_22052026.pdf/2b6d3e89-42f4-0132-4d2a-557e7452f050?t=1779472138428"
  - name: "Sales Brochure, 14-04-2026"
    url: "https://licindia.in/documents/20121/1795076/102905+-+LIC%27s+New+Jeevan+Sathi+Limited+Premium+Sales+Brochure_14-April-2026.pdf/1928bab1-3b80-aecb-6b70-b381418f7e30?t=1779472135982"
  - name: "Policy Document, 22-05-2026"
    url: "https://licindia.in/documents/20121/1795076/Final+Policy+Document-LIC%27s+New+Jeevan+Sathi_LP_22052026.pdf/49916f9f-398e-88eb-b1de-d14b4896e028?t=1779472137673"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-limited-premium-"
---
# LIC's New Jeevan Sathi - Limited Premium — Plan 889

**One-line summary:** A limited-premium joint-life endowment for a married couple that pays a guaranteed death benefit on the first death, waives further base premiums, continues for the surviving spouse, and pays the Basic Sum Assured plus guaranteed additions at maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 889 |
| UIN | 512N394V01 |
| Product type | Non-par, non-linked, joint-life, limited-premium endowment |
| Status | Active |
| Entry age | 18 to 50 (limits vary by PPT, term and option) |
| Policy term | 10 / 15 / 20 / 25 years |
| Premium paying term | 5 / 10 / 15 years |
| Minimum sum assured | ₹3,00,000 |
| Death-benefit options | Option I: 7 × TAP or BSA; Option II: 10.5 × TAP or BSA |
| Official page | https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-limited-premium- |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 completed years for both lives |
| Maximum entry age — PPT 5 | 45 (Option I); 40 (Option II); 35 for term 25 under Option II |
| Maximum entry age — PPT 10 | 50 (Option I); 40 (Option II); 35 for term 25 under Option II |
| Maximum entry age — PPT 15 | 50 (Option I); 40 (Option II); 35 for term 25 under Option II |
| Minimum maturity age | 28 completed years |
| Maximum maturity age | 75 (Option I); 60 (Option II) |
| Policy term | 10 / 15 / 20 / 25 years |
| Premium paying term | 5 / 10 / 15 years |
| PPT–term combinations | PPT 5: 10/15/20/25; PPT 10: 15/20/25; PPT 15: 20/25 |
| Minimum Basic Sum Assured | ₹3,00,000 |
| Basic Sum Assured multiple | ₹10,000 |

This is a joint-life plan for a married individual (Primary Life Assured) and spouse (Secondary Life Assured). The Primary Life Assured is the policyholder; on the Primary's death, the Secondary becomes the policyholder. The plan is not sold through POSP-LI or CPSC-SPV.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly, monthly through NACH, or salary deduction.
- **Modal conversion factors:** half-yearly 0.5090, quarterly 0.2568, monthly 0.0861 of the yearly premium.
- **Minimum Basic Sum Assured:** ₹3,00,000, in multiples of ₹10,000.
- **Maximum Basic Sum Assured:** no limit, subject to LIC's Board Approved Underwriting Policy.
- **Minimum premium:** no minimum premium is stated; the minimum BSA and the chosen PPT/term determine it.
- **Rebates/incentives:** high BSA increases the guaranteed-addition rate by up to 1.00%; online sale by up to 1.25%; existing policyholder by up to 0.10%. These are additive to the 7.00% base rate.

No published rate table; premiums are quoted by LIC's calculator/underwriting. The brochure publishes the following sample illustrative yearly premiums for standard lives, offline sale, with both lives at the same age. Figures exclude taxes and rider premiums.

### Illustrative premiums

**Option I — Basic Sum Assured ₹3,00,000**

| Age at entry (nearer birthday) | Term 15 (PPT 5) | Term 20 (PPT 10) | Term 25 (PPT 15) |
|---|---:|---:|---:|
| 20 | 68,505 | 33,045 | 20,715 |
| 35 | 75,705 | 37,035 | 25,095 |
| 45 | 1,12,470 | 50,265 | 35,055 |

**Option II — Basic Sum Assured ₹3,00,000**

| Age at entry (nearer birthday) | Term 15 (PPT 5) | Term 20 (PPT 10) | Term 25 (PPT 15) |
|---|---:|---:|---:|
| 20 | 71,670 | 33,510 | 20,715 |
| 25 | 72,825 | 34,140 | 21,330 |
| 35 | 84,135 | 39,525 | 25,095 |

The sample table does not cover the eligible 10(5), 15(10), 20(15) or 25(10) term/PPT combinations; those premiums must be quoted by LIC.

## Benefits

### Death benefit

The death-benefit option is chosen at proposal and cannot be changed.

- **Option I:** Sum Assured on Death is the higher of 7 × Tabular Annual Premium or the Basic Sum Assured.
- **Option II:** Sum Assured on Death is the higher of 10.5 × Tabular Annual Premium or the Basic Sum Assured.
- The death benefit is not less than 105% of total premiums paid.

On the first death during the policy term, the Sum Assured on Death is paid to the surviving life assured and the policy continues. All further base-plan premiums from the policy anniversary following the first death are waived; rider premiums continue. On the second death, the Sum Assured on Death plus accrued guaranteed additions is paid and the policy terminates. On simultaneous death, the sum of the first-death and second-death benefits is paid.

### Maturity benefit

On survival of at least one life assured to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable.

### Guaranteed additions

Guaranteed additions accrue at 7.00% of Total Tabular Annual Premium paid in respect of premiums paid during the policy term, at the end of each policy year. The rate is increased by any high-BSA, online-sale or existing-policyholder incentive. On the second death, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating: there is no bonus, dividend or surplus participation.

### Other benefits and options

- Premium waiver on the first death during the premium paying term.
- Death benefit or maturity benefit may be taken in instalments over 5, 10 or 15 years.
- Policy loan against surrender value after the first policy year.
- Critical Illness Health Rider with Option 1 (15 critical illnesses) or Option 2 (40 critical illnesses including additional living benefit).

## Optional benefits and riders

- **LIC's Accident Benefit Rider (UIN: 512B203V03):** accidental death benefit; accidental disability benefit in instalments. Available during the premium paying term, with at least 5 years of base and rider PPT remaining.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** term cover payable on death during the rider term. Available at inception.
- **LIC's Critical Illness Health Rider (UIN: 512B227V01):** Option 1 covers 15 critical illnesses; Option 2 covers 40 critical illnesses including additional living benefit. Available at inception.

The Critical Illness Health Rider premium may not exceed 100% of the base-plan premium. All life-rider premiums together may not exceed 30% of the base-plan premium. The Accident Benefit Rider sum assured may not exceed 3 × BSA; other rider sum assureds may not exceed BSA. The Secondary Life Assured's rider sum assured may not exceed the Primary's.

## Surrender, loan, paid-up and revival

- **Surrender:** after the first policy year with one full year's premium paid. GSV is acquired after at least two full years' premiums; SSV after one full year. Surrender value is the higher of (total premiums paid × GSV factor from the brochure table plus the surrender value of accrued guaranteed additions) and SSV.
- **Loan:** after the first policy year with one full year's premium paid. Maximum loan is 75% of surrender value for an in-force policy and 50% for a paid-up policy. Interest is 9.50% p.a. compounding half-yearly for loans sanctioned between 1 May 2025 and 30 April 2026.
- **Paid-up:** after one full year's premium. Death and maturity sum assured are reduced proportionally; guaranteed additions continue at a reduced rate; rider benefits cease.
- **Revival:** within 5 consecutive years from the first unpaid premium, before maturity, with arrears and interest at 9.50% p.a. compounding half-yearly, subject to continued insurability of both lives. Riders are revived only with the base plan.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly/half-yearly/quarterly; 15 days for monthly.

## Exclusions and conditions

The stated exclusion is suicide of either or both lives assured within 12 months of commencement of risk, or within 12 months of revival. The nominee or beneficiary receives 80% of total premiums paid or the surrender value on the date of death, whichever is higher, and no other claim is payable. The suicide clause does not apply where the life assured's age at entry is below 8 years, and nothing is payable under a policy that lapsed without acquiring paid-up value. Standard policy-document conditions on misstatement, fraud and the Insurance Act, 1938 apply.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Sections 80C or 10(10D). GST is stated in the benefit illustration as currently exempted. Confirm the prevailing tax treatment before relying on it.

## Suitability and decision notes

**Best suited to:** married couples who want a joint-life endowment with a limited premium paying term and automatic waiver of base premiums after the first death.

**Poor fit for:** unmarried buyers, buyers who need money back within the first two years, and buyers whose main need is pure protection.

**Key trade-offs:** the long lock-in, early-year surrender values below total premiums, the fact that only base-plan premiums are waived, and the absence of any bonus or market upside.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Primary Life Assured age | Yes | 18 to 50, subject to PPT/term/option |
| Secondary Life Assured age | Yes | Same limits; both lives must be married to each other |
| Death-benefit option | Yes | Option I or Option II; cannot be changed |
| Policy term | Yes | 10/15/20/25, subject to PPT |
| Premium paying term | Yes | 5/10/15 |
| Basic Sum Assured | Yes | ₹3,00,000 minimum, ₹10,000 multiples |
| Premium mode | Optional | Yearly/half-yearly/quarterly/monthly |
| Riders | Optional | Accident Benefit, New Term Assurance, Critical Illness Health |
| Settlement/death instalments | Optional | 5/10/15-year instalment periods |

Core formulas:

```text
Sum Assured on Death (Option I)  = max(7 × tabular_annual_premium, BSA)
Sum Assured on Death (Option II) = max(10.5 × tabular_annual_premium, BSA)
Death benefit floor              = max(death benefit, 1.05 × total premiums paid)
First-death benefit              = Sum Assured on Death
Second-death benefit             = Sum Assured on Death + accrued guaranteed additions
Simultaneous-death benefit       = first-death benefit + second-death benefit
Guaranteed addition per year     = (7.00% + applicable incentives)
                                   × Total Tabular Annual Premium paid
Maturity benefit                 = BSA + accrued guaranteed additions
Modal premium                    = yearly premium × modal conversion factor
Surrender value                  = max(total premiums paid × GSV factor
                                       + surrender value of accrued GA, SSV)
```

## Source documents

- [Customer Information Sheet (CIS), 22-05-2026](https://licindia.in/documents/20121/1795076/Final+CIS+_LIC%27s+New+Jeevan+sathi_LP_22052026.pdf/2b6d3e89-42f4-0132-4d2a-557e7452f050?t=1779472138428)
- [Sales Brochure, 14-04-2026](https://licindia.in/documents/20121/1795076/102905+-+LIC%27s+New+Jeevan+Sathi+Limited+Premium+Sales+Brochure_14-April-2026.pdf/1928bab1-3b80-aecb-6b70-b381418f7e30?t=1779472135982)
- [Policy Document, 22-05-2026](https://licindia.in/documents/20121/1795076/Final+Policy+Document-LIC%27s+New+Jeevan+Sathi_LP_22052026.pdf/49916f9f-398e-88eb-b1de-d14b4896e028?t=1779472137673)
- [Official product page](https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-limited-premium-)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
