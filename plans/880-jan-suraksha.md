---
plan_number: 880
plan_name: "LIC's Jan Suraksha"
uin: "512N388V01"
insurer: "Life Insurance Corporation of India"
category: "Micro"
product_type: "Non-Par, Non-Linked, Individual, Savings, Life Micro Insurance Plan (Endowment)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-jan-suraksha-880-512n388v01"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 55
  entry_age_notes: "18 completed to 55 years (nearer birthday). Maximum entry age is 53 years for policies sold through POSP-LI or CPSC-SPV."
  maturity_age_max: 70
  maturity_age_notes: "Maximum 70 years (nearer birthday); 65 years for POSP-LI/CPSC-SPV. Minimum age at maturity is not stated."
  policy_terms_years: [12, 13, 14, 15, 16, 17, 18, 19, 20]
  policy_term_kind: "range"
  policy_term_min_years: 12
  policy_term_max_years: 20
  premium_paying_terms_years: [7, 8, 9, 10, 11, 12, 13, 14, 15]
  ppt_min_years: 7
  ppt_max_years: 15
  ppt_term_pairs: "Premium paying term = policy term − 5 years (term 12-20, PPT 7-15)."
  min_sum_assured: "₹1,00,000"
  max_sum_assured: "₹2,00,000 per life across all policies under this plan; multiples of ₹5,000."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum modal premium is stated. The minimum Basic Sum Assured of ₹1,00,000 drives the minimum premium. Yearly, half-yearly, quarterly, monthly NACH and salary-deduction modes are available."
  max_premium: "Not specified; determined by the maximum Basic Sum Assured of ₹2,00,000, age and term."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)", "Salary deduction"]
  frequency_loadings: "Modal conversion factors applied to the yearly premium: half-yearly 0.5090, quarterly 0.2568, monthly 0.0861. No separate salary-deduction factor is stated."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: true
  illustrative_premiums:
    - basis: "Yearly premium per ₹1,00,000 Basic Sum Assured; standard lives; purchased through agents/intermediaries"
      note: "Annual premiums in ₹ by age at entry and policy term (PPT in brackets), exclusive of taxes. NA means the combination is not available because it would exceed the maximum maturity age."
      rows:
        - {age: 25, term_12_ppt_7: 13270, term_15_ppt_10: 9015, term_20_ppt_15: 5800}
        - {age: 35, term_12_ppt_7: 13325, term_15_ppt_10: 9080, term_20_ppt_15: 5900}
        - {age: 45, term_12_ppt_7: 13530, term_15_ppt_10: 9340, term_20_ppt_15: 6250}
        - {age: 55, term_12_ppt_7: 14150, term_15_ppt_10: 10035, term_20_ppt_15: null}
    - basis: "Benefit illustration: age 35, policy term 15, PPT 10, Basic Sum Assured ₹2,00,000, yearly mode"
      note: "Annual premium is ₹18,160, exclusive of taxes. Guaranteed Additions accrue at 4.25% of total annualized premiums (4.00% base rate plus 0.25% high-BSA incentive). At the end of year 15, both the maturity benefit and the death benefit are ₹2,81,039, comprising ₹2,00,000 Basic Sum Assured and ₹81,039 accrued Guaranteed Additions."
      rows:
        - {policy_year: 15, annual_premium: 18160, total_premiums_paid: 181600, basic_sum_assured: 200000, accrued_guaranteed_additions: 81039, maturity_benefit: 281039, death_benefit: 281039}
  premium_formula: "Yearly premium = rate per ₹1,00,000 Basic Sum Assured for the age and term × (Basic Sum Assured / 1,00,000). Modal premium = yearly premium × modal factor (0.5090 half-yearly, 0.2568 quarterly, 0.0861 monthly)."
  notes: "Premiums are level and payable for the PPT. The sample rate table has no separate male/female rates. It excludes taxes, underwriting extras and rider premiums."

benefits:
  death_benefit: "Sum Assured on Death plus accrued Guaranteed Additions. Sum Assured on Death is the higher of 7 × annualized premium or the Basic Sum Assured, subject to a minimum of 105% of total premiums paid."
  death_benefit_formula: "max(7 × annualized_premium, basic_sum_assured) + accrued_guaranteed_additions; floored at 1.05 × total_premiums_paid"
  maturity_benefit: "Basic Sum Assured plus accrued Guaranteed Additions, provided all due premiums have been paid."
  maturity_benefit_formula: "basic_sum_assured + accrued_guaranteed_additions"
  survival_benefits: []
  guaranteed_benefits: "The Sum Assured on Death, the Basic Sum Assured on maturity and the Guaranteed Additions are guaranteed. Guaranteed Additions accrue at 4.00% of total annualized premiums each policy year, increased by 0.25% if the Basic Sum Assured is ₹2,00,000 and by 1.00% for online sales."
  non_guaranteed_benefits: "None; the plan is non-participating and does not share in surplus or declare bonuses."
  riders: ["LIC's Accidental Death & Disability Benefit Rider (UIN: 512B209V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)"]
  other_benefits:
    - "Only one of the two accident riders may be opted for, within the premium paying term with at least 5 years outstanding; rider premiums cannot exceed 30% of the base premium."
    - "Accidental Death & Disability Benefit Rider sum assured cannot exceed the Basic Sum Assured."
    - "Accident Benefit Rider sum assured cannot exceed 3 × the Basic Sum Assured."
    - "No riders are available on policies sold through POSP-LI or CPSC-SPV."
    - "Policy loan after the first policy year, up to 80% of the surrender value for an in-force policy and 70% for a paid-up policy."
    - "Auto cover of 6 months if 3 to less than 5 full years' premiums have been paid, and 2 years if at least 5 full years' premiums have been paid."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed after completion of the first policy year if one full year's premium has been paid. Guaranteed Surrender Value is available after at least two full years' premiums; Special Surrender Value after one full year. Payable = higher of (GSV on total premiums + surrender value of accrued Guaranteed Additions) and SSV. GSV factors: 0% in year 1, 30% in year 2, 35% in year 3, 50% in years 4-7, then rising by term to 90% in the final years."
  paid_up: true
  paid_up_terms: "After one full year's premiums, non-payment converts the policy to paid-up. Death Paid-Up Sum Assured = Sum Assured on Death × (premium paying period already paid / original PPT); Maturity Paid-Up Sum Assured = Basic Sum Assured × the same ratio. Accrued Guaranteed Additions remain, and future Guaranteed Additions accrue at the reduced paid-up rate. Auto cover applies if at least 3 full years' premiums were paid."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable; a policy loan is available instead."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement: 80% of total premiums paid (excluding taxes, extra premiums and rider premiums) is payable. Suicide within 12 months of revival: the higher of 80% of total premiums paid or the surrender value. Standard Section 45 misstatement and fraud provisions apply. Riders do not acquire paid-up value."
  waiting_period: "A 90-day waiting period applies only to policies purchased through POSP-LI or CPSC-SPV. On non-accidental death within 90 days, total premiums paid are refunded; accidental death receives the normal death benefit. No waiting period applies to other distribution channels."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Statutory taxes, if any, are payable at the prevailing rate on the base premium, rider premiums and any extra premium, and are collected separately over and above the premium."
  notes: "The brochure states that income-tax benefits and implications depend on prevailing tax law and asks policyholders to consult a tax adviser. No section 80C or 10(10D) position is stated."

decision:
  primary_goals: ["savings", "protection"]
  risk_profile: "Guaranteed non-par savings; no market risk"
  liquidity: "Medium"
  time_horizon: "Medium"
  minimum_age: 18
  maximum_age: 55
  suitable_for:
    - "Low-income and first-time savers who want small-ticket life cover plus guaranteed savings"
    - "Rural and micro-insurance customers who prefer a simple, non-linked product"
    - "Buyers who may need a policy loan after the first year"
  not_suitable_for:
    - "Buyers needing more than ₹2 lakh of life cover; the sum assured is capped"
    - "Short-term savers; surrender values are zero or low in the early years"
    - "Investors seeking market-linked growth or high inflation-beating returns"
  key_tradeoffs:
    - "The ₹2 lakh sum assured cap limits protection"
    - "Guaranteed additions are modest and fixed at 4.00% of annualized premium, plus limited incentives"
    - "Surrender before two full years' premiums yields no guaranteed surrender value"
    - "Loan interest accrues and is recovered from claim proceeds"
  decision_flags: ["micro_insurance", "small_ticket", "guaranteed_additions", "loan_available", "low_sum_assured_cap", "early_surrender_penalty", "pos_restrictions"]

calculation_inputs:
  required_inputs: ["age", "policy_term", "basic_sum_assured", "mode"]
  optional_inputs: ["online_purchase", "high_bsa_incentive", "loan", "riders"]
  rate_table_available: true
  formulas:
    annual_premium: "rate_per_lakh(age, policy_term) × (basic_sum_assured / 100000)"
    modal_premium: "annual_premium × modal_factor (0.5090 half-yearly, 0.2568 quarterly, 0.0861 monthly)"
    guaranteed_addition_rate: "0.0400 + 0.0025 if BSA = 200000 + 0.0100 if purchased online"
    annual_guaranteed_addition: "guaranteed_addition_rate × total_annualized_premium"
    death_benefit: "max(7 × annualized_premium, basic_sum_assured) + accrued_guaranteed_additions; minimum 1.05 × total_premiums_paid"
    maturity_benefit: "basic_sum_assured + accrued_guaranteed_additions"
    surrender_value: "max(gsv_on_total_premiums + gsv_on_accrued_ga, ssv)"
    maximum_loan: "0.80 × surrender_value (in-force) or 0.70 × surrender_value (paid-up)"
  assumptions:
    - "Guaranteed Additions accrue at the end of each policy year on total annualized premiums in respect of premiums paid; the full year's addition is payable in the year of death."
    - "The 0.25% high-BSA incentive applies only at a Basic Sum Assured of ₹2,00,000; the 1.00% online incentive applies only to direct online sales."
    - "Sample rates are per ₹1,00,000 Basic Sum Assured and exclude taxes, rider premiums and underwriting extras."
    - "The sample rate table does not differentiate by sex."

sources:
  - name: "Sales Brochure"
    url: "https://licindia.in/documents/20121/1319704/LICs+Jan+Suraksha++Eng+Single.pdf/9c282a0e-1d21-bb01-53f7-4a69732a199e?t=1760545069572"
  - name: "Customer Information Sheet (CIS), 28-07-2025"
    url: "https://licindia.in/documents/20121/1325029/LICs_Jan_Suraksha_CIS_with_logo_CC_28072025.pdf/32a48226-e892-6df3-3a01-3ea7ad8ea528?t=1760526844593"
  - name: "Policy Document, 28-07-2025"
    url: "https://licindia.in/documents/20121/1385382/LICs_Jan_Suraksha_Policy_Document_with_logo_CC_28072025.pdf/5afa86f1-fcf5-c907-dd7e-676d3704470c?t=1760526797253"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-jan-suraksha-880-512n388v01"
---
# LIC's Jan Suraksha — Plan 880

**One-line summary:** A small-ticket, non-par endowment for micro-insurance customers that combines a capped life cover with guaranteed additions, a guaranteed maturity benefit and a loan facility after the first policy year.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 880 |
| UIN | 512N388V01 |
| Product type | Non-par, non-linked, individual savings life micro-insurance plan |
| Status | Active |
| Entry age | 18-55 (53 for POSP-LI/CPSC-SPV) |
| Policy term | 12-20 years |
| Premium paying term | Policy term − 5 years (7-15 years) |
| Basic Sum Assured | ₹1,00,000-₹2,00,000, in ₹5,000 multiples |
| Death benefit | Higher of 7 × annualized premium or BSA, plus guaranteed additions |
| Maturity benefit | BSA plus guaranteed additions |
| Official page | https://licindia.in/web/guest/lic-s-jan-suraksha-880-512n388v01 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 completed years |
| Maximum entry age | 55 years (nearer birthday); 53 for POSP-LI/CPSC-SPV |
| Maximum maturity age | 70 years (nearer birthday); 65 for POSP-LI/CPSC-SPV |
| Policy term | 12-20 years |
| Premium paying term | Policy term minus 5 years |
| Basic Sum Assured | ₹1,00,000-₹2,00,000, in multiples of ₹5,000 |
| Aggregate BSA cap | ₹2,00,000 per individual across all policies under this plan |
| Underwriting | Standard healthy lives; no medical examination |

This is a life micro-insurance product. The sum assured is deliberately small, and the maximum entry and maturity ages are lower when the policy is sold through a Point of Sales Person-Life Insurance (POSP-LI) or a Common Public Service Centre-SPV (CPSC-SPV).

## Premiums and sum insured

- **Modes:** yearly, half-yearly, quarterly, monthly NACH and salary deduction.
- **Modal factors:** half-yearly 0.5090, quarterly 0.2568, monthly 0.0861 of the yearly premium.
- **Basic Sum Assured:** ₹1,00,000 to ₹2,00,000, in ₹5,000 multiples. The total BSA for one individual across all policies under this plan cannot exceed ₹2,00,000.
- **Premium basis:** age at entry, policy term and BSA. The published rate table does not differentiate by sex.
- **Premium paying term:** five years shorter than the policy term, so a 12-year policy pays for 7 years, a 15-year policy for 10 years and a 20-year policy for 15 years.

### Illustrative premiums

Published sample yearly premiums per ₹1,00,000 Basic Sum Assured for standard lives bought through agents or intermediaries, exclusive of taxes. PPT is shown in brackets.

| Age | Term 12 (PPT 7) | Term 15 (PPT 10) | Term 20 (PPT 15) |
|---|---|---|---|
| 25 | ₹13,270 | ₹9,015 | ₹5,800 |
| 35 | ₹13,325 | ₹9,080 | ₹5,900 |
| 45 | ₹13,530 | ₹9,340 | ₹6,250 |
| 55 | ₹14,150 | ₹10,035 | NA |

The premium is almost flat across ages because the product is a small-ticket micro-insurance plan; term length changes the premium much more than age does.

**Benefit illustration:** age 35, term 15, PPT 10, BSA ₹2,00,000, yearly mode. The annual premium is ₹18,160 (twice the ₹9,080 per-lakh rate). At the end of year 15:

| Item | Amount |
|---|---|
| Total premiums paid (10 years) | ₹1,81,600 |
| Basic Sum Assured | ₹2,00,000 |
| Accrued Guaranteed Additions (4.25% p.a.) | ₹81,039 |
| Maturity benefit | ₹2,81,039 |
| Death benefit in year 15 | ₹2,81,039 |

The 4.25% addition rate is the 4.00% base rate plus the 0.25% high-BSA incentive for a ₹2,00,000 sum assured. The illustration excludes taxes.

## Benefits

### Death benefit

On death before maturity, the nominee receives the Sum Assured on Death plus accrued Guaranteed Additions:

```text
Sum Assured on Death = max(7 × annualized premium, Basic Sum Assured)
Death Benefit        = Sum Assured on Death + accrued Guaranteed Additions
                       subject to a minimum of 105% of total premiums paid
```

"Annualized premium" excludes taxes, rider premiums, underwriting extra premiums and modal loadings. "Total premiums paid" excludes extra premiums and taxes. Guaranteed Additions for the policy year of death are paid for the full year.

### Maturity benefit

On survival to the end of the policy term, with all due premiums paid, LIC pays the Basic Sum Assured plus accrued Guaranteed Additions.

### Guaranteed Additions

Guaranteed Additions accrue at the end of each policy year on the Total Annualized Premium in respect of premiums paid:

- **Base rate:** 4.00% of Total Annualized Premium each policy year.
- **High-BSA incentive:** an extra 0.25% if the Basic Sum Assured is ₹2,00,000.
- **Online incentive:** an extra 1.00% for policies purchased online.

The additions are guaranteed, not discretionary. On death, the addition for the year of death is paid for the full year. On a fully paid-up policy, additions continue to accrue at the in-force rate. On a reduced paid-up policy, the future addition rate is scaled by the ratio of the premium-paying period already paid to the original PPT.

### Riders

Two accident riders are available, but only one may be chosen:

| Rider | UIN | Sum assured limit | Other limits |
|---|---|---|---|
| LIC's Accidental Death & Disability Benefit Rider | 512B209V02 | Up to the Basic Sum Assured | Rider premium up to 30% of base premium |
| LIC's Accident Benefit Rider | 512B203V03 | Up to 3 × the Basic Sum Assured | Rider premium up to 30% of base premium |

No riders are available on policies sold through POSP-LI or CPSC-SPV. Rider benefits do not acquire paid-up value and do not continue after the grace period in a lapsed policy.

## Charges and optional benefits

No explicit premium allocation, administration, fund-management or surrender charge is stated. The policyholder pays the base premium, any rider premium, any underwriting extra and statutory taxes. The main optional items are:

- **Riders:** one accident rider, as above.
- **Loan:** after the first policy year, as described below.
- **Auto cover:** on a paid-up policy, 6 months if 3 to less than 5 full years' premiums were paid, and 2 years if at least 5 full years' premiums were paid. During auto cover, the full in-force death benefit is paid after deducting unpaid premiums with interest and any premiums falling due before the next anniversary. Auto cover does not apply to suicide.

## Surrender, loan, paid-up and revival

### Surrender

- The policy can be surrendered after completion of the first policy year if one full year's premium has been paid.
- **Guaranteed Surrender Value (GSV)** is available after at least two full years' premiums have been paid.
- **Special Surrender Value (SSV)** is available after one full year's premium has been paid.
- On surrender, LIC pays the higher of:
  1. GSV on total premiums paid plus the surrender value of accrued Guaranteed Additions; or
  2. SSV.

GSV on total premiums = total premiums paid × GSV factor. Premiums for this purpose exclude taxes, underwriting extras and rider premiums. The surrender value of accrued Guaranteed Additions = accrued GA × the GA surrender factor. Both factor tables depend on the policy term and the policy year of surrender.

Selected GSV factors for total premiums paid:

| Policy year | Term 12 | Term 15 | Term 20 |
|---|---|---|---|
| 1 | 0.00% | 0.00% | 0.00% |
| 2 | 30.00% | 30.00% | 30.00% |
| 3 | 35.00% | 35.00% | 35.00% |
| 5 | 50.00% | 50.00% | 50.00% |
| 8 | 57.50% | 54.29% | 52.50% |
| 10 | 72.50% | 62.86% | 57.50% |
| 12 | 90.00% | 71.43% | 62.50% |
| 15 | — | 90.00% | 70.00% |
| 20 | — | — | 90.00% |

The full factor tables for terms 12-20, including the separate GA surrender factors, are in the sales brochure. SSV is determined and reviewed under IRDAI's Master Circular on Life Insurance Products.

### Loan

- Available after completion of the first policy year, if at least one full year's premium has been paid.
- Maximum loan: **80% of the surrender value** for an in-force policy; **70%** for a paid-up policy.
- Interest compounds half-yearly. For loans sanctioned between 1 May 2025 and 30 April 2026, the rate is **9.50% p.a.** compounding half-yearly for the entire loan term.
- If loan interest is not paid or the outstanding loan plus interest exceeds the surrender value, LIC may foreclose the policy and pay any excess surrender value.
- Outstanding loan and interest are recovered from claim proceeds.

### Paid-up

- If at least one full year's premiums have been paid and later premiums are not paid, the policy becomes paid-up after the first policy year and continues to the end of the term.
- **Death Paid-Up Sum Assured** = Sum Assured on Death × (total period for which premiums were paid / original premium paying term).
- **Maturity Paid-Up Sum Assured** = Basic Sum Assured × the same ratio.
- Accrued Guaranteed Additions remain attached; future additions accrue at the reduced paid-up rate.
- The death benefit under a paid-up policy is not less than 105% of total premiums paid to the date of death.

### Revival

A lapsed policy can be revived within 5 consecutive complete years from the date of the first unpaid premium and before maturity, on payment of arrears with interest and satisfactory evidence of continued insurability. The revival interest rate is set by LIC from time to time.

### Grace period and free look

- **Grace period:** 30 days for yearly, half-yearly and quarterly premiums; 15 days for monthly NACH.
- **Free look:** 30 days from receipt of the policy document.

## Waiting periods, exclusions and conditions

### Waiting period

A **90-day** waiting period applies only to policies purchased through POSP-LI or CPSC-SPV. If the life assured dies within the first 90 days from commencement of risk:

- **Non-accidental death:** total premiums paid are refunded, provided the policy is in force.
- **Accidental death:** the normal death benefit is payable.

No waiting period applies to policies sold through other channels.

### Suicide exclusion

- If the life assured commits suicide within 12 months of commencement of risk, the nominee receives 80% of total premiums paid (excluding taxes, extra premiums and rider premiums), provided the policy is in force.
- If suicide occurs within 12 months of revival, the nominee receives the higher of 80% of total premiums paid or the surrender value available on the date of death.
- No other claim is payable in either case.
- The auto-cover relaxation does not apply to suicide.

### Other conditions

- Only standard healthy lives are accepted; there is no medical examination.
- All material facts and pre-existing conditions must be disclosed. Non-disclosure can make the policy void under Section 45 of the Insurance Act, 1938.
- Riders do not acquire paid-up value and cease if the policy lapses.
- The policy terminates on maturity, death, surrender, free-look cancellation, forfeiture or expiry of the revival period without revival.

## Tax treatment

The brochure states that statutory taxes, if any, are payable at the prevailing rate on the base premium, rider premiums and any extra premium, and are collected separately over and above the premium. Tax paid is not considered when calculating benefits. The brochure does not state section 80C or section 10(10D) treatment and asks policyholders to consult a tax adviser on income-tax benefits and implications. No tax position is asserted here.

## Suitability and decision notes

**Best suited to:** low-income and first-time savers who want a simple, guaranteed, non-linked product that combines a small life cover with a maturity benefit, and who value a loan facility after the first year. It is designed for the micro-insurance market and for distribution through agents, POSP-LI and CPSC-SPV channels.

**Poor fit for:** buyers who need more than ₹2 lakh of cover, short-term savers who may need the money back within a few years, and investors seeking market-linked or high-return products. The sum assured cap and modest guaranteed additions make it unsuitable as a primary protection or wealth-creation solution.

**Key trade-offs:** the protection cover is capped at ₹2 lakh; guaranteed additions are only 4.00% of annualized premium (plus limited incentives); surrender before two full years' premiums yields no GSV; and the loan must be serviced or it is deducted from the claim. The product is simple and guaranteed, but the returns are modest.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-55; 53 for POSP-LI/CPSC-SPV |
| Policy term | Yes | 12-20 years |
| Basic Sum Assured | Yes | ₹1-2 lakh, ₹5,000 multiples |
| Mode | Yes | Yearly, half-yearly, quarterly, monthly NACH or salary deduction |
| Online purchase | For GA incentive | Adds 1.00% to the GA rate |
| BSA ₹2,00,000 | For GA incentive | Adds 0.25% to the GA rate |
| Loan | Optional | Up to 80% of surrender value in-force; 70% paid-up |
| Riders | Optional | One accident rider only; no riders for POSP/CPSC |

Core formulas:

```text
Annual premium       = rate_per_lakh(age, term) × (BSA / 100000)
Modal premium        = annual premium × factor
                       (0.5090 half-yearly, 0.2568 quarterly, 0.0861 monthly)
GA rate              = 4.00% + 0.25% (BSA = ₹2,00,000) + 1.00% (online)
Annual GA            = GA rate × total annualized premium
Death benefit        = max(7 × annualized premium, BSA) + accrued GA
                       subject to a minimum of 1.05 × total premiums paid
Maturity benefit     = BSA + accrued GA
Surrender value      = max(GSV on premiums + GSV on accrued GA, SSV)
Maximum loan         = 80% × surrender value (in-force)
                       70% × surrender value (paid-up)
```

## Source documents

- [Sales Brochure](https://licindia.in/documents/20121/1319704/LICs+Jan+Suraksha++Eng+Single.pdf/9c282a0e-1d21-bb01-53f7-4a69732a199e?t=1760545069572)
- [Customer Information Sheet (CIS), 28-07-2025](https://licindia.in/documents/20121/1325029/LICs_Jan_Suraksha_CIS_with_logo_CC_28072025.pdf/32a48226-e892-6df3-3a01-3ea7ad8ea528?t=1760526844593)
- [Policy Document, 28-07-2025](https://licindia.in/documents/20121/1385382/LICs_Jan_Suraksha_Policy_Document_with_logo_CC_28072025.pdf/5afa86f1-fcf5-c907-dd7e-676d3704470c?t=1760526797253)
- [Official product page](https://licindia.in/web/guest/lic-s-jan-suraksha-880-512n388v01)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
