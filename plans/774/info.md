---
plan_number: 774
plan_name: "LIC's Amritbaal"
uin: "512N365V02"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Child Endowment, Single or Limited Premium)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-amritbaal-774%09512n365v02"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0
  entry_age_max: 13
  entry_age_notes: "Child life assured only: minimum 30 days completed, maximum 13 years last birthday. The proposer/parent's age is not stated in the brochure, except that the Premium Waiver Benefit Rider is not allowed if rider term plus proposer's age exceeds 70 years."
  maturity_age_max: 25
  maturity_age_notes: "Minimum maturity age 18 years last birthday; maximum 25 years last birthday. Policy term is the maturity age minus the age at entry."
  policy_terms_years: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  policy_term_kind: "range"
  policy_term_min_years: 5
  policy_term_max_years: 25
  premium_paying_terms_years: [5, 6, 7]
  ppt_min_years: 5
  ppt_max_years: 7
  ppt_term_pairs: "Limited premium: policy term 10-25 years with PPT 5/6/7. Single premium: policy term 5-25 years. Term = maturity age − entry age. POSP-LI/CPSC-SPV maximum term is 20 years."
  min_sum_assured: "₹2,00,000 Basic Sum Assured. Multiples of ₹25,000 from ₹2,00,000 to ₹24,00,000; ₹50,000 above ₹24,00,000."
  max_sum_assured: "No limit; subject to LIC's Board Approved Underwriting Policy. POSP-LI/CPSC-SPV maximum death sum assured is ₹25,00,000."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated. The minimum Basic Sum Assured of ₹2,00,000 and the BSA multiples determine the minimum premium."
  max_premium: "No limit; subject to underwriting."

premium:
  modes: ["Single Premium", "Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Limited premium modal conversion factors: half-yearly 0.5090, quarterly 0.2568, monthly 0.0861 of the yearly premium. Single premium has no modal factor."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Basic Sum Assured ₹5,00,000; age 5; policy term 20 years; limited premium; yearly premium; offline sale; standard life"
      note: "Sample annual premium in ₹ by PPT and death-benefit option. Figures exclude taxes and rider premiums."
      rows:
        - {ppt: 5, option_i: 99625, option_ii: 100100}
        - {ppt: 6, option_i: 84275, option_ii: 84625}
        - {ppt: 7, option_i: 73625, option_ii: 73900}
    - basis: "Basic Sum Assured ₹5,00,000; age 5; policy term 20 years; single premium; offline sale; standard life"
      note: "Sample single premium in ₹ by death-benefit option. Figures exclude taxes and rider premiums."
      rows:
        - {option_iii: 389225, option_iv: 412600}
  premium_formula: "Limited-premium yearly premium is read from LIC's tabular annual premium for the chosen option, age, PPT, policy term and Basic Sum Assured, after any high-BSA or online-sale rebate, plus taxes and rider premiums. Single premium is read from the tabular single premium for Option III or IV. Modal premium = yearly premium × modal conversion factor."
  notes: "The sample table is only for BSA ₹5,00,000, age 5, policy term 20 and offline sale. Other combinations must be quoted by LIC's calculator/underwriting. High-BSA rebate has four slabs (₹3.50-4.75 lakh, ₹5-9.75 lakh, ₹10-24.50 lakh, ₹25 lakh+) and depends on BSA, entry age and maturity age; no factor table is published. Online sale rebate is 10% of tabular annual premium for limited premium and 2% of tabular single premium. Option IV is not sold through POSP-LI/CPSC-SPV. GST is currently exempt."

benefits:
  death_benefit: "The death-benefit option is chosen at proposal and cannot be changed. Limited premium: Option I is the higher of 7 × Annualized Premium or BSA; Option II is the higher of 10 × Annualized Premium or BSA; death benefit is not less than 105% of Total Premiums Paid. Single premium: Option III is the higher of 1.25 × Single Premium or BSA; Option IV is 10 × Single Premium. Accrued guaranteed additions are added. If a minor aged below 8 dies before commencement of risk, premiums paid are refunded without interest."
  death_benefit_formula: "Limited Option I: max(7 × annualized_premium, bsa). Limited Option II: max(10 × annualized_premium, bsa). Single Option III: max(1.25 × single_premium, bsa). Single Option IV: 10 × single_premium. Death benefit = sum_assured_on_death + accrued_guaranteed_additions; limited premium death benefit >= 1.05 × total_premiums_paid."
  maturity_benefit: "On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable to the child or the policyholder as applicable."
  maturity_benefit_formula: "bsa + accrued_guaranteed_additions"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed additions accrue at ₹80 per ₹1,000 of Basic Sum Assured at the end of each policy year from inception to the end of the policy term. On death during the policy term, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating."
  non_guaranteed_benefits: "None; the plan does not share in surplus and pays no bonus or dividend."
  riders: ["LIC's Premium Waiver Benefit Rider (UIN: 512B204V04)"]
  other_benefits:
    - "Premium Waiver Benefit Rider on the proposer for limited-premium policies; base premiums are waived on the proposer's death during the rider term."
    - "Settlement Option for the maturity benefit in instalments over 5, 10 or 15 years."
    - "Option to receive the death benefit in instalments over 5, 10 or 15 years."
    - "Policy loan against surrender value."
    - "Automatic vesting in the child on the policy anniversary coinciding with or immediately following age 18."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Single premium: surrender at any time; GSV is 75% of the single premium in the first three policy years and 90% thereafter, plus the surrender value of accrued guaranteed additions. Limited premium: after the first policy year with one full year's premium paid; GSV after two full years' premiums; SSV after one full year. Limited-premium surrender value is the higher of (total premiums paid × GSV factor plus accrued GA × GA factor) and SSV."
  paid_up: true
  paid_up_terms: "Limited premium only: after one full year's premium, non-payment makes the policy paid-up. Death and maturity sum assured are reduced in the ratio of premiums paid to premiums originally payable; guaranteed additions accrue at the reduced rates in the brochure table; rider benefits cease. A single premium policy is paid-up from inception."
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
  exclusions_summary: "Limited premium: suicide within 12 months of commencement of risk - 80% of total premiums paid if in force; within 12 months of revival - 80% of total premiums paid or surrender value, whichever is higher. Single premium: suicide within 12 months of commencement - 80% of the single premium paid. Not applicable below age 8 at entry or revival; nothing payable under a policy that lapsed without paid-up value."
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
  maximum_age: 13
  suitable_for:
    - "Parents or guardians saving for a child's education or future needs with a guaranteed maturity amount"
    - "Families who want the policy to vest in the child at age 18"
    - "Buyers who want a proposer premium waiver on a limited-premium child policy"
  not_suitable_for:
    - "Buyers who need liquidity in the early years; surrender values are low or nil"
    - "Buyers seeking pure protection at the lowest cost"
    - "Buyers who want market-linked growth or participation in surplus"
  key_tradeoffs:
    - "The child is the life assured; the parent's age is not an eligibility input except for the premium waiver rider"
    - "Limited premium requires a policy term of at least 10 years, so an older child with a short term to maturity may only qualify for single premium"
    - "High-BSA rebate has no published factor table; the actual rebate depends on BSA, entry age and maturity age"
    - "No bonus or market upside; all benefits are fixed and guaranteed"
  decision_flags: ["child-plan", "premium-waiver-rider", "single-or-limited-premium", "guaranteed-additions", "maturity-age-18-25", "vesting-at-18"]

calculation_inputs:
  required_inputs: ["child_age", "maturity_age", "premium_type", "death_benefit_option", "basic_sum_assured"]
  optional_inputs: ["premium_paying_term", "premium_mode", "proposer_age_for_pwbr", "settlement_option", "death_benefit_instalments"]
  rate_table_available: false
  formulas:
    policy_term: "maturity_age - child_age"
    basic_sum_assured: "Minimum ₹2,00,000; multiples of ₹25,000 up to ₹24,00,000, then ₹50,000"
    sum_assured_on_death_limited_option_i: "max(7 × annualized_premium, bsa)"
    sum_assured_on_death_limited_option_ii: "max(10 × annualized_premium, bsa)"
    sum_assured_on_death_single_option_iii: "max(1.25 × single_premium, bsa)"
    sum_assured_on_death_single_option_iv: "10 × single_premium"
    death_benefit: "sum_assured_on_death + accrued_guaranteed_additions; limited premium death benefit >= 1.05 × total_premiums_paid"
    guaranteed_addition_per_year: "80 × bsa / 1000"
    maturity_benefit: "bsa + accrued_guaranteed_additions"
    modal_premium: "yearly_premium × modal_conversion_factor"
    surrender_value_single: "max((0.75 × single_premium in years 1-3 or 0.90 × single_premium thereafter) + surrender value of accrued GA, ssv)"
    surrender_value_limited: "max(total_premiums_paid × gsv_factor + accrued_ga × ga_factor, ssv)"
  assumptions:
    - "Annualized Premium and Single Premium exclude taxes, rider premiums, underwriting extras and modal loadings"
    - "Guaranteed additions accrue for every full policy year from inception to the end of the term"
    - "The sample table is for BSA ₹5,00,000, age 5, policy term 20 and offline sale"
    - "The premium waiver rider is available only with limited premium and only while the life assured is a minor"

sources:
  - name: "Customer Information Sheet (CIS), 01-10-2024"
    url: "https://licindia.in/documents/20121/1243952/CIS_Amritbaal01102024.pdf/6d5965d9-cc22-11f9-8e18-8af7673323dd?t=1728034848467"
  - name: "Sales Brochure, 14-10-2025"
    url: "https://licindia.in/documents/20121/1319704/774+Amritbaal+Sales+Brochure_141025.pdf/dacb7dcd-caf6-3a56-6b56-3cf216b85132?t=1760437559838"
  - name: "Policy Document, 30-09-2024"
    url: "https://licindia.in/documents/20121/1243952/Final_+Policy+Document+LIC%27s+Amritbaal+300924_cc_with_logo.pdf/e53e4a8b-26b0-ee4d-ed76-4659b9b49074?t=1728035625898"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-amritbaal-774%09512n365v02"
---
# LIC's Amritbaal — Plan 774

**One-line summary:** A non-participating child endowment that accepts single or limited premiums, guarantees ₹80 per ₹1,000 of Basic Sum Assured each year, and pays the Basic Sum Assured plus guaranteed additions when the child reaches the chosen maturity age of 18-25.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 774 |
| UIN | 512N365V02 |
| Product type | Non-par, non-linked child endowment; single or limited premium |
| Status | Active |
| Entry age (child) | 30 days to 13 years last birthday |
| Maturity age | 18 to 25 years last birthday |
| Policy term | 5-25 years (limited premium: 10-25; single premium: 5-25) |
| Premium paying term | 5 / 6 / 7 years, or single premium |
| Minimum sum assured | ₹2,00,000 |
| Guaranteed addition | ₹80 per ₹1,000 BSA per year |
| Official page | https://licindia.in/en/web/guest/lic-s-amritbaal-774%09512n365v02 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 30 days completed |
| Maximum entry age | 13 years last birthday |
| Minimum maturity age | 18 years last birthday |
| Maximum maturity age | 25 years last birthday |
| Policy term | Limited premium: 10-25 years; single premium: 5-25 years |
| Premium paying term | Limited premium: 5/6/7 years; single premium: single pay |
| Minimum Basic Sum Assured | ₹2,00,000 |
| BSA multiples | ₹25,000 from ₹2,00,000 to ₹24,00,000; ₹50,000 above ₹24,00,000 |

The child is the life assured and the policy vests in the child on the policy anniversary coinciding with or immediately following age 18. The proposer/parent's age is not an eligibility condition except for the Premium Waiver Benefit Rider, which is not allowed if rider term plus proposer's age exceeds 70 years. Because the policy term is maturity age minus entry age, a 13-year-old with a maturity age of 18 has a 5-year term; limited premium requires a term of at least 10 years, so only single premium is available for that combination.

## Premiums and sum assured

- **Premium types:** single premium, or limited premium with PPT 5/6/7 years.
- **Modes (limited premium):** yearly, half-yearly, quarterly, and monthly through NACH.
- **Modal conversion factors:** half-yearly 0.5090, quarterly 0.2568, monthly 0.0861 of the yearly premium.
- **Minimum Basic Sum Assured:** ₹2,00,000; multiples of ₹25,000 up to ₹24,00,000, then ₹50,000.
- **Maximum Basic Sum Assured:** no limit, subject to underwriting; POSP/CPSC maximum death sum assured ₹25,00,000.
- **Minimum premium:** no minimum premium is stated.
- **Rebates:** high-BSA rebate in four slabs (₹3.50-4.75 lakh, ₹5-9.75 lakh, ₹10-24.50 lakh, ₹25 lakh+) depending on BSA, entry age and maturity age; no factor table is published. Online sale rebate is 10% of tabular annual premium for limited premium and 2% of tabular single premium.

No published rate table; premiums are quoted by LIC's calculator/underwriting. The brochure publishes the following sample illustrative premiums for a standard life aged 5, Basic Sum Assured ₹5,00,000, policy term 20 years, offline sale. Figures exclude taxes and rider premiums.

### Illustrative premiums

**Limited premium — annual premium**

| PPT | Option I | Option II |
|---|---:|---:|
| 5 | 99,625 | 1,00,100 |
| 6 | 84,275 | 84,625 |
| 7 | 73,625 | 73,900 |

**Single premium**

| Option III | Option IV |
|---:|---:|
| 3,89,225 | 4,12,600 |

Premiums for other ages, terms and BSA amounts must be quoted by LIC.

## Benefits

### Death benefit

The death-benefit option is chosen at proposal and cannot be changed.

**Limited premium**

- **Option I:** higher of 7 × Annualized Premium or Basic Sum Assured.
- **Option II:** higher of 10 × Annualized Premium or Basic Sum Assured.
- The death benefit is not less than 105% of Total Premiums Paid.

**Single premium**

- **Option III:** higher of 1.25 × Single Premium or Basic Sum Assured.
- **Option IV:** 10 × Single Premium.

Accrued guaranteed additions are added to the sum assured on death. If a minor aged below 8 dies before commencement of risk, premiums paid are refunded without interest.

### Maturity benefit

On survival to maturity, the Basic Sum Assured plus accrued guaranteed additions is payable to the child, or to the policyholder during the child's minority.

### Guaranteed additions

Guaranteed additions accrue at ₹80 per ₹1,000 of Basic Sum Assured at the end of each policy year from inception to the end of the policy term. On death during the policy term, guaranteed additions for the year of death are paid for the full policy year. The plan is non-participating: there is no bonus, dividend or surplus participation.

### Other benefits and options

- **Premium Waiver Benefit Rider:** on the proposer's death during the rider term, base-plan premiums are waived. Available only with limited premium.
- **Settlement Option:** maturity benefit in instalments over 5, 10 or 15 years.
- **Death benefit instalments:** 5, 10 or 15 years.
- Policy loan against surrender value.
- Automatic vesting in the child at age 18.

## Optional benefits and riders

- **LIC's Premium Waiver Benefit Rider (UIN: 512B204V04):** available only with limited premium, on the proposer's life, while the life assured is a minor, with at least 5 years of base and rider PPT remaining. The rider term is the outstanding PPT or 25 minus the child's age, whichever is lower. It is not allowed if rider term plus proposer's age exceeds 70 years. On the proposer's death during the rider term, base-plan premiums are waived. The rider premium may not exceed 30% of the base-plan premium, and the rider sum assured may not exceed the sum assured on death. No rider is available under POSP-LI/CPSC-SPV policies.

No other riders are available under this plan.

## Surrender, loan, paid-up and revival

- **Surrender — single premium:** allowed at any time. GSV is 75% of the single premium in the first three policy years and 90% thereafter, plus the surrender value of accrued guaranteed additions.
- **Surrender — limited premium:** after the first policy year with one full year's premium paid. GSV is acquired after at least two full years' premiums; SSV after one full year. Surrender value is the higher of (total premiums paid × GSV factor plus accrued guaranteed additions × GA factor) and SSV. Factor tables are in the brochure.
- **Loan — limited premium:** after the first policy year with one full year's premium paid. Maximum loan is 90% of surrender value for an in-force policy and 80% for a paid-up policy.
- **Loan — single premium:** after three months from issue or expiry of the free-look period, whichever is later; maximum 75% of surrender value.
- **Loan interest:** 9.50% p.a. compounding half-yearly. A loan for the education of a female child bears 8.50% p.a. compounding half-yearly.
- **Paid-up:** limited premium only, after one full year's premium. Death and maturity sum assured are reduced in the ratio of premiums paid to premiums originally payable; guaranteed additions accrue at the reduced rates in the brochure table (per ₹1,000 BSA by PPT and completed years); rider benefits cease. A single premium policy is paid-up from inception.
- **Revival:** limited premium only, within 5 complete years from the first unpaid premium and before maturity, with arrears and interest at 9.50% p.a. compounding half-yearly, subject to continued insurability. The rider is revived only with the base plan.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly/half-yearly/quarterly; 15 days for monthly. Not applicable to single premium.

## Exclusions and conditions

**Limited premium:** suicide within 12 months of commencement of risk pays 80% of total premiums paid if the policy is in force; suicide within 12 months of revival pays the higher of 80% of total premiums paid and the surrender value. The clause does not apply below age 8 at entry or revival, and nothing is payable under a policy that lapsed without acquiring paid-up value.

**Single premium:** suicide within 12 months of commencement pays 80% of the single premium paid, excluding taxes, extra premium and rider premiums. The clause does not apply below age 8 at entry.

For policies purchased through POSP-LI/CPSC-SPV, a 90-day waiting period applies; on death within it, premiums are refunded unless death is by accident. Standard policy-document conditions on misstatement, fraud and the Insurance Act, 1938 apply.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Sections 80C or 10(10D). GST is stated in the benefit illustration as currently exempted. Confirm the prevailing tax treatment before relying on it.

## Suitability and decision notes

**Best suited to:** parents or guardians who want a guaranteed maturity amount for a child, automatic vesting at 18, and the option of a proposer premium waiver on a limited-premium policy.

**Poor fit for:** buyers who need liquidity in the early years, buyers seeking pure protection at low cost, and buyers who want market-linked growth or participation in surplus.

**Key trade-offs:** the child is the life assured and the parent's age is largely irrelevant except for the waiver rider; limited premium requires a term of at least 10 years, so older children with short terms may only qualify for single premium; high-BSA rebates are not published as a factor table; and there is no bonus or market upside.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Child's age at entry | Yes | 30 days to 13 years |
| Maturity age | Yes | 18-25; policy term = maturity age − entry age |
| Premium type | Yes | Single or limited |
| Death-benefit option | Yes | Limited: I/II; single: III/IV |
| Basic Sum Assured | Yes | ₹2,00,000 minimum; ₹25,000/₹50,000 multiples |
| PPT | For limited premium | 5/6/7 |
| Premium mode | For limited premium | Yearly/half-yearly/quarterly/monthly |
| Proposer age | For PWBR | Rider not allowed if rider term + proposer age > 70 |
| Settlement/death instalments | Optional | 5/10/15-year instalment periods |

Core formulas:

```text
Policy term                    = maturity_age − child_age
Sum Assured on Death (L-I)     = max(7 × annualized_premium, BSA)
Sum Assured on Death (L-II)    = max(10 × annualized_premium, BSA)
Sum Assured on Death (S-III)   = max(1.25 × single_premium, BSA)
Sum Assured on Death (S-IV)    = 10 × single_premium
Death Benefit                  = Sum Assured on Death + accrued GA
                                 (limited premium: >= 1.05 × total premiums paid)
Guaranteed Addition per year   = ₹80 × BSA / 1,000
Maturity Benefit               = BSA + accrued guaranteed additions
Modal premium                  = yearly premium × modal conversion factor
Surrender Value (single)       = 75% × single premium (years 1-3)
                                 90% × single premium (year 4 onwards)
                                 + surrender value of accrued GA
Surrender Value (limited)      = max(total premiums paid × GSV factor
                                     + accrued GA × GA factor, SSV)
```

## Source documents

- [Customer Information Sheet (CIS), 01-10-2024](https://licindia.in/documents/20121/1243952/CIS_Amritbaal01102024.pdf/6d5965d9-cc22-11f9-8e18-8af7673323dd?t=1728034848467)
- [Sales Brochure, 14-10-2025](https://licindia.in/documents/20121/1319704/774+Amritbaal+Sales+Brochure_141025.pdf/dacb7dcd-caf6-3a56-6b56-3cf216b85132?t=1760437559838)
- [Policy Document, 30-09-2024](https://licindia.in/documents/20121/1243952/Final_+Policy+Document+LIC%27s+Amritbaal+300924_cc_with_logo.pdf/e53e4a8b-26b0-ee4d-ed76-4659b9b49074?t=1728035625898)
- [Official product page](https://licindia.in/en/web/guest/lic-s-amritbaal-774%09512n365v02)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
