---
plan_number: 888
plan_name: "LIC's New Jeevan Sathi - Single Premium"
uin: "512N393V01"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Joint Life, Single Premium Endowment)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-single-premium-"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 60
  entry_age_notes: "18 completed years minimum for both lives. Maximum 60 years (nearer birthday) under Option I and 35 years (nearer birthday) under Option II. The plan is for a married individual (Primary Life Assured) and spouse (Secondary Life Assured)."
  maturity_age_max: 75
  maturity_age_notes: "Minimum maturity age 28 completed years under both options. Maximum 75 years (nearer birthday) under Option I and 50 years (nearer birthday) under Option II."
  policy_terms_years: [10, 15, 20, 25]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 25
  premium_paying_terms_years: [1]
  ppt_min_years: null
  ppt_max_years: null
  ppt_term_pairs: "Single premium. Option I permits policy terms 10/15/20/25 years; Option II permits 10/15 years."
  min_sum_assured: "₹3,00,000 Basic Sum Assured, in multiples of ₹25,000."
  max_sum_assured: "No limit; subject to LIC's Board Approved Underwriting Policy."
  min_premium_by_mode:
    monthly: "Not applicable"
    quarterly: "Not applicable"
    half_yearly: "Not applicable"
    yearly: "Not applicable"
  min_premium_notes: "Single premium only; no minimum premium is stated. The minimum Basic Sum Assured of ₹3,00,000 and the ₹25,000 BSA multiple determine the minimum single premium."
  max_premium: "No limit; subject to underwriting."

premium:
  modes: ["Single Premium"]
  frequency_loadings: "Not applicable; single premium only."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option I; Basic Sum Assured ₹3,00,000; single premium; offline sale; both lives at the same age"
      note: "Sample single premium in ₹ by age at entry (nearer birthday) and policy term. Standard lives; figures exclude taxes and rider premiums."
      rows:
        - {age: 20, term_10: 297195, term_15: 269940, term_20: 238635, term_25: 208740}
        - {age: 35, term_10: 302340, term_15: 279180, term_20: 252525, term_25: 227115}
        - {age: 50, term_10: 346560, term_15: 345495, term_20: 336510, term_25: 323940}
    - basis: "Option II; Basic Sum Assured ₹3,00,000; single premium; offline sale; both lives at the same age"
      note: "Sample single premium in ₹ by age at entry (nearer birthday) and policy term. Standard lives; figures exclude taxes and rider premiums."
      rows:
        - {age: 20, term_10: 356850, term_15: 348930}
        - {age: 25, term_10: 361095, term_15: 362790}
        - {age: 35, term_10: 427620, term_15: 536475}
  premium_formula: "Single premium is read from LIC's tabular single premium for the chosen death-benefit option, the ages of both lives, the policy term and the Basic Sum Assured, after any high-BSA, online-sale or existing-policyholder rebate, plus taxes and rider premiums. BSA is chosen in ₹25,000 multiples subject to a ₹3,00,000 minimum."
  notes: "The brochure publishes only sample illustrative single premiums for selected ages and terms; premiums for other combinations are quoted by LIC's calculator/underwriting. High-BSA rebate is up to ₹35 per ₹1,000 BSA depending on term; online sale without an intermediary gets 2% of tabular single premium; existing policyholders/nominees get ₹3.00-₹4.00 per ₹1,000 BSA depending on term. GST is currently exempt."

benefits:
  death_benefit: "The death-benefit option is chosen at proposal and cannot be changed. Option I: Sum Assured on Death is the higher of 1.25 × Tabular Single Premium or Basic Sum Assured. Option II: Sum Assured on Death is 10 × Tabular Single Premium. On the first death, the Sum Assured on Death is paid and the policy continues on the surviving life. On the second death, the Sum Assured on Death plus accrued guaranteed additions is paid and the policy terminates. On simultaneous death, the sum of the first-death and second-death benefits is paid."
  death_benefit_formula: "Option I: max(1.25 × tabular_single_premium, bsa). Option II: 10 × tabular_single_premium. First death: chosen_sum_assured. Second death: chosen_sum_assured + accrued_guaranteed_additions. Simultaneous: first_death_benefit + second_death_benefit."
  maturity_benefit: "On survival of at least one life assured to the maturity date, the Basic Sum Assured plus accrued guaranteed additions is payable."
  maturity_benefit_formula: "bsa + accrued_guaranteed_additions"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed additions accrue at ₹70 per ₹1,000 of Basic Sum Assured at the end of each policy year throughout the policy term. All death, maturity and surrender benefits are guaranteed; the plan is non-participating."
  non_guaranteed_benefits: "None; the plan does not share in surplus and pays no bonus or dividend."
  riders: ["LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)", "LIC's New Term Assurance Rider (UIN: 512B210V02)"]
  other_benefits:
    - "Option to receive the death benefit or maturity benefit in instalments over 5, 10 or 15 years instead of a lump sum, subject to minimum instalment amounts."
    - "Policy loan against surrender value after three months from issue or expiry of the free-look period, whichever is later."
    - "Accidental Death and Disability Benefit Rider and New Term Assurance Rider available for both lives at inception, subject to rider limits."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered at any time. The guaranteed surrender value before guaranteed additions is 75% of the single premium in the first three policy years and 90% thereafter; the surrender value of accrued guaranteed additions is added. The higher of this aggregate and the Special Surrender Value is paid."
  paid_up: false
  paid_up_terms: "Not applicable; this is a single premium policy."
  revival: false
  revival_period_years: null
  free_look_days: 30
  grace_period_days:
    yearly: "Not applicable"
    half_yearly: "Not applicable"
    quarterly: "Not applicable"
    monthly_nach: "Not applicable"
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable"
  assignment_allowed: null
  nomination_allowed: null
  exclusions_summary: "Suicide of either life assured, or both simultaneously, within 12 months of commencement of risk: 80% of the single premium paid or the surrender value on the date of death, whichever is higher. No other claim is payable."
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
  maximum_age: 60
  suitable_for:
    - "Married couples who want a single joint-life endowment covering both spouses"
    - "Buyers with a lump sum who want guaranteed savings and life cover without fund risk"
    - "Couples who want the policy to continue on the surviving spouse's life after the first death"
  not_suitable_for:
    - "Unmarried individuals or those who cannot satisfy the joint-life married-couple condition"
    - "Buyers who need liquidity in the first three years; surrender value is below the single premium"
    - "Buyers seeking high protection per rupee; a term plan is cheaper for pure cover"
  key_tradeoffs:
    - "Single premium locks up a large sum for 10-25 years"
    - "Surrender value is only 75% of the single premium in the first three years and 90% thereafter"
    - "The policy covers two lives but pays the death benefit on the first death while continuing for the survivor"
    - "No bonus or upside; all benefits are fixed and guaranteed"
  decision_flags: ["joint-life", "single-premium", "married-couple-only", "guaranteed-additions", "no-revival", "surrender-charge"]

calculation_inputs:
  required_inputs: ["primary_age", "secondary_age", "death_benefit_option", "policy_term", "basic_sum_assured"]
  optional_inputs: ["riders", "settlement_option", "death_benefit_instalments"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "Chosen in ₹25,000 multiples, minimum ₹3,00,000"
    death_benefit: "First death: max(1.25 × tabular_single_premium, bsa) under Option I or 10 × tabular_single_premium under Option II. Second death adds accrued guaranteed additions. Simultaneous death pays the sum of the first- and second-death benefits."
    sum_assured_on_death_option_i: "max(1.25 × tabular_single_premium, bsa)"
    sum_assured_on_death_option_ii: "10 × tabular_single_premium"
    first_death_benefit: "sum_assured_on_death"
    second_death_benefit: "sum_assured_on_death + accrued_guaranteed_additions"
    simultaneous_death_benefit: "first_death_benefit + second_death_benefit"
    guaranteed_addition_per_year: "70 × bsa / 1000"
    maturity_benefit: "bsa + accrued_guaranteed_additions"
    surrender_value: "max(gsv + surrender_value_of_accrued_guaranteed_additions, ssv)"
    gsv: "0.75 × single_premium in policy years 1-3; 0.90 × single_premium thereafter"
  assumptions:
    - "Tabular single premium is before rebates, loadings, underwriting extras, taxes and rider premiums"
    - "Guaranteed additions accrue for each full policy year; a proportionate addition applies in the year of surrender"
    - "Sample premiums are for standard lives, offline sale, with both lives at the same age"
    - "Rider premiums are payable separately for each life and are not included in the sample premiums"

sources:
  - name: "Customer Information Sheet (CIS), 22-05-2026"
    url: "https://licindia.in/documents/20121/1794834/Final++CIS+_LIC%27s+New+Jeevan+Sathi_SP_22052026.pdf/d2de5a37-c475-8da2-8f18-f2b231a1fc15?t=1779466523952"
  - name: "Sales Brochure (undated)"
    url: "https://licindia.in/documents/20121/1794834/LIC_New+Jeevan+Sathi+Single+Premium_Sales+Brochure_4+inch+x+9+inch_Eng+%285%29.pdf/7e61e3bd-b05f-37a5-c15a-5de289499d8e?t=1779466525418"
  - name: "Policy Document, 22-05-2026"
    url: "https://licindia.in/documents/20121/1794834/Final+Policy+Document-LIC%27s+New+Jeevan+Sathi_SP_22052026.pdf/8313e3eb-dea0-e381-ea0d-8e0d1d2f102c?t=1779466524628"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-single-premium-"
---
# LIC's New Jeevan Sathi - Single Premium — Plan 888

**One-line summary:** A single-premium joint-life endowment for a married couple that pays a guaranteed death benefit on the first death, continues for the surviving spouse, and returns the Basic Sum Assured plus guaranteed additions at maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 888 |
| UIN | 512N393V01 |
| Product type | Non-par, non-linked, joint-life, single-premium endowment |
| Status | Active |
| Entry age | 18 to 60 (Option I); 18 to 35 (Option II) |
| Policy term | 10 / 15 / 20 / 25 years (Option I); 10 / 15 years (Option II) |
| Premium paying term | Single premium |
| Minimum sum assured | ₹3,00,000 |
| Death-benefit options | Option I: 1.25 × tabular single premium or BSA; Option II: 10 × tabular single premium |
| Official page | https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-single-premium- |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 completed years for both lives |
| Maximum entry age | 60 years (nearer birthday) under Option I; 35 years under Option II |
| Minimum maturity age | 28 completed years under both options |
| Maximum maturity age | 75 years (nearer birthday) under Option I; 50 years under Option II |
| Policy term | Option I: 10 / 15 / 20 / 25 years; Option II: 10 / 15 years |
| Premium paying term | Single premium |
| Minimum Basic Sum Assured | ₹3,00,000 |
| Basic Sum Assured multiple | ₹25,000 |

This is a joint-life plan. A married individual is the Primary Life Assured and policyholder; the spouse is the Secondary Life Assured. On the Primary Life Assured's death, the Secondary Life Assured becomes the policyholder.

## Premiums and sum assured

- **Mode:** single premium only.
- **Minimum Basic Sum Assured:** ₹3,00,000, in multiples of ₹25,000.
- **Maximum Basic Sum Assured:** no limit, subject to LIC's Board Approved Underwriting Policy.
- **Minimum premium:** no minimum premium is stated; the minimum BSA drives the minimum single premium.
- **Rebates:** high-BSA rebate of up to ₹35 per ₹1,000 BSA depending on term; 2% of tabular single premium for online sale without an agent or intermediary; ₹3.00-₹4.00 per ₹1,000 BSA for an existing policyholder or a nominee/beneficiary of a deceased policyholder, depending on term.
- **Riders:** premiums are extra and are payable separately for each life.

No published rate table; premiums are quoted by LIC's calculator/underwriting. The brochure publishes the following sample illustrative single premiums for standard lives, offline sale, with both lives at the same age. Figures exclude taxes and rider premiums.

### Illustrative premiums

**Option I — Basic Sum Assured ₹3,00,000**

| Age at entry (nearer birthday) | Term 10 | Term 15 | Term 20 | Term 25 |
|---|---:|---:|---:|---:|
| 20 | 2,97,195 | 2,69,940 | 2,38,635 | 2,08,740 |
| 35 | 3,02,340 | 2,79,180 | 2,52,525 | 2,27,115 |
| 50 | 3,46,560 | 3,45,495 | 3,36,510 | 3,23,940 |

**Option II — Basic Sum Assured ₹3,00,000**

| Age at entry (nearer birthday) | Term 10 | Term 15 |
|---|---:|---:|
| 20 | 3,56,850 | 3,48,930 |
| 25 | 3,61,095 | 3,62,790 |
| 35 | 4,27,620 | 5,36,475 |

## Benefits

### Death benefit

The death-benefit option is chosen at proposal and cannot be changed later.

- **Option I:** Sum Assured on Death is the higher of 1.25 × Tabular Single Premium or the Basic Sum Assured.
- **Option II:** Sum Assured on Death is 10 × Tabular Single Premium.

On the first death during the policy term, the Sum Assured on Death is paid to the surviving life assured, and the policy continues on the survivor's life. On the second death, the Sum Assured on Death plus accrued guaranteed additions is paid to the beneficiary and the policy terminates. On simultaneous death of both lives, the sum of the first-death and second-death benefits is paid.

### Maturity benefit

On survival of at least one life assured to the maturity date, the Basic Sum Assured plus accrued guaranteed additions is payable.

### Guaranteed additions

Guaranteed additions accrue at ₹70 per ₹1,000 of Basic Sum Assured at the end of each policy year throughout the policy term. The plan is non-participating: there is no bonus, dividend or surplus participation.

### Other benefits and options

- Death benefit or maturity benefit may be taken in instalments over 5, 10 or 15 years, subject to minimum instalment amounts.
- Policy loan is available against surrender value after three months from issue or expiry of the free-look period, whichever is later.
- Accidental Death and Disability Benefit Rider and New Term Assurance Rider are available at inception for both lives, subject to rider limits.

## Optional benefits and riders

- **LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02):** accidental death benefit in lump sum; accidental disability benefit in equal monthly instalments over 10 years. Cover up to age 70 or the end of the policy term, whichever is earlier.
- **LIC's New Term Assurance Rider (UIN: 512B210V02):** term rider sum assured payable on death during the policy term. Available at inception only.

Rider premiums together may not exceed 30% of the base-plan premium. Each rider sum assured may not exceed the Basic Sum Assured; the Secondary Life Assured's rider sum assured may not exceed the Primary Life Assured's.

## Surrender, loan, paid-up and revival

- **Surrender:** allowed at any time. The guaranteed surrender value before guaranteed additions is 75% of the single premium in the first three policy years and 90% thereafter; the surrender value of accrued guaranteed additions is added. The higher of this aggregate and the Special Surrender Value is paid.
- **Loan:** available after three months from issue or expiry of the free-look period, whichever is later. Maximum loan is 50% of surrender value in policy years 1-2, 60% in years 3-5, 65% in years 6-9 and 70% from year 10. Loan interest is 9.50% p.a. compounding half-yearly for loans sanctioned between 1 May 2025 and 30 April 2026.
- **Paid-up:** not applicable; this is a single premium policy.
- **Revival:** not applicable; there are no subsequent premiums.
- **Free look:** 30 days.
- **Grace period:** not applicable.

## Exclusions and conditions

The stated exclusion is suicide of either life assured, or both simultaneously, within 12 months of commencement of risk. In that case the nominee or beneficiary receives 80% of the single premium paid or the surrender value on the date of death, whichever is higher, and the policy terminates. Standard policy-document conditions on misstatement, fraud and the Insurance Act, 1938 apply.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Sections 80C or 10(10D). GST is stated in the benefit illustration as currently exempted. Confirm the prevailing tax treatment before relying on it.

## Suitability and decision notes

**Best suited to:** married couples who have a lump sum and want a guaranteed joint-life endowment that continues for the surviving spouse, with no market risk.

**Poor fit for:** unmarried buyers, buyers who cannot lock up a large single premium for 10-25 years, and buyers whose main need is pure protection.

**Key trade-offs:** the large upfront outlay, a surrender value below the single premium in the first three years, no bonus or upside, and a joint-life structure that pays the first death benefit while the policy continues rather than terminating.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Primary Life Assured age | Yes | 18-60 (Option I) or 18-35 (Option II) |
| Secondary Life Assured age | Yes | Same age limits; both lives must be married to each other |
| Death-benefit option | Yes | Option I or Option II; cannot be changed |
| Policy term | Yes | Option I: 10/15/20/25; Option II: 10/15 |
| Basic Sum Assured | Yes | ₹3,00,000 minimum, ₹25,000 multiples |
| Riders | Optional | AD&D and New Term Assurance for either or both lives |
| Settlement/death instalments | Optional | 5/10/15-year instalment periods |

Core formulas:

```text
Sum Assured on Death (Option I)  = max(1.25 × tabular_single_premium, BSA)
Sum Assured on Death (Option II) = 10 × tabular_single_premium
Guaranteed Addition per year     = ₹70 × BSA / 1,000
First-death benefit              = Sum Assured on Death
Second-death benefit             = Sum Assured on Death + accrued guaranteed additions
Simultaneous-death benefit       = first-death benefit + second-death benefit
Maturity benefit                 = BSA + accrued guaranteed additions
GSV                              = 75% × single premium (years 1-3)
                                   90% × single premium (year 4 onwards)
                                    + surrender value of accrued guaranteed additions
Surrender value                  = max(GSV, SSV)
```

## Source documents

- [Customer Information Sheet (CIS), 22-05-2026](https://licindia.in/documents/20121/1794834/Final++CIS+_LIC%27s+New+Jeevan+Sathi_SP_22052026.pdf/d2de5a37-c475-8da2-8f18-f2b231a1fc15?t=1779466523952)
- [Sales Brochure](https://licindia.in/documents/20121/1794834/LIC_New+Jeevan+Sathi+Single+Premium_Sales+Brochure_4+inch+x+9+inch_Eng+%285%29.pdf/7e61e3bd-b05f-37a5-c15a-5de289499d8e?t=1779466525418)
- [Policy Document, 22-05-2026](https://licindia.in/documents/20121/1794834/Final+Policy+Document-LIC%27s+New+Jeevan+Sathi_SP_22052026.pdf/8313e3eb-dea0-e381-ea0d-8e0d1d2f102c?t=1779466524628)
- [Official product page](https://licindia.in/en/web/guest/lic-s-new-jeevan-sathi-single-premium-)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
