---
plan_number: 751
plan_name: "LIC's Micro Bachat"
uin: "512N329V03"
insurer: "Life Insurance Corporation of India"
category: "Micro"
product_type: "Par, Non-Linked, Individual, Savings, Life Micro Insurance Plan (Endowment)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-smicro-bachat-751-512n329v03"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 55
  entry_age_notes: "18 completed to 55 years (nearer birthday)."
  maturity_age_max: 70
  maturity_age_notes: "Maximum 70 years (nearer birthday). Minimum age at maturity is not stated."
  policy_terms_years: [10, 11, 12, 13, 14, 15]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 15
  premium_paying_terms_years: [10, 11, 12, 13, 14, 15]
  ppt_min_years: 10
  ppt_max_years: 15
  ppt_term_pairs: "Premium paying term equals the policy term (10-15 years)."
  min_sum_assured: "₹1,00,000"
  max_sum_assured: "₹2,00,000 per life across all versions of this plan. BSA ₹1,00,000-₹1,80,000 in ₹10,000 multiples; above ₹1,80,000 in ₹20,000 multiples, so the only value above ₹1,80,000 is ₹2,00,000."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum modal premium is stated. The minimum Basic Sum Assured of ₹1,00,000 drives the minimum premium. Yearly, half-yearly, quarterly, monthly NACH and salary-deduction modes are available."
  max_premium: "Not specified; determined by the maximum Basic Sum Assured of ₹2,00,000, age and term."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)", "Salary deduction"]
  frequency_loadings: "No modal conversion factors are published. Mode rebate: 2% of the tabular premium for yearly, 1% for half-yearly, nil for quarterly (and for monthly/salary deduction)."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: true
  illustrative_premiums:
    - basis: "Yearly premium per ₹1,00,000 Basic Sum Assured; standard lives; exclusive of taxes"
      note: "Annual premiums in ₹ by age at entry and policy term. The premium paying term equals the policy term."
      rows:
        - {age: 18, term_10: 8722, term_12: 7012, term_15: 5380}
        - {age: 25, term_10: 8727, term_12: 7017, term_15: 5385}
        - {age: 35, term_10: 8761, term_12: 7061, term_15: 5439}
        - {age: 45, term_10: 8923, term_12: 7247, term_15: 5664}
        - {age: 55, term_10: 9388, term_12: 7752, term_15: 6233}
    - basis: "Benefit illustration: age 25, policy term 15, PPT 15, Basic Sum Assured ₹1,00,000, yearly mode"
      note: "Annual premium is ₹5,385, exclusive of taxes. At 4% p.a. the illustrated maturity benefit is ₹1,00,000 (Basic Sum Assured, no loyalty addition). At 8% p.a. the illustration shows a ₹500 loyalty addition and a maturity benefit of ₹1,00,500. Loyalty additions are not guaranteed."
      rows:
        - {policy_year: 15, annual_premium: 5385, total_premiums_paid: 80775, basic_sum_assured: 100000, loyalty_addition_at_4pct: 0, loyalty_addition_at_8pct: 500, maturity_at_4pct: 100000, maturity_at_8pct: 100500}
    - basis: "Rebates"
      note: "High Basic Sum Assured rebate is nil for BSA ₹1,00,000-₹1,80,000 and ₹3.00 per ₹1,000 BSA for BSA ₹2,00,000, i.e. ₹600. Mode rebate is 2% of the tabular premium for yearly, 1% for half-yearly and nil for quarterly."
      rows:
        - {bsa: 100000, high_bsa_rebate: 0, yearly_mode_rebate_pct: 2.0, half_yearly_mode_rebate_pct: 1.0, quarterly_mode_rebate_pct: 0.0}
        - {bsa: 200000, high_bsa_rebate: 600, yearly_mode_rebate_pct: 2.0, half_yearly_mode_rebate_pct: 1.0, quarterly_mode_rebate_pct: 0.0}
  premium_formula: "Annual premium = rate per ₹1,00,000 Basic Sum Assured for the age and term × (Basic Sum Assured / 1,00,000), less any high-BSA rebate. The mode rebate is applied to the tabular premium. No modal conversion factors are published."
  notes: "Premiums are level and payable for the full policy term. The sample rate table has no separate male/female rates. GST is currently exempted according to the benefit illustration; taxes may change."

benefits:
  death_benefit: "Sum Assured on Death plus any Loyalty Addition. Sum Assured on Death is the higher of 7 × annualized premium or the Basic Sum Assured, subject to a minimum of 105% of total premiums paid. For the first five policy years the death benefit is the Sum Assured on Death without Loyalty Addition."
  death_benefit_formula: "max(7 × annualized_premium, basic_sum_assured) + loyalty_addition (if eligible); floored at 1.05 × total_premiums_paid"
  maturity_benefit: "Basic Sum Assured plus any Loyalty Addition, provided all due premiums have been paid."
  maturity_benefit_formula: "basic_sum_assured + loyalty_addition"
  survival_benefits: []
  guaranteed_benefits: "The Sum Assured on Death and the Basic Sum Assured on maturity are guaranteed. Loyalty Additions are not guaranteed; they are declared by LIC based on the experience of the participating fund."
  non_guaranteed_benefits: "Loyalty Additions, if declared. They are payable on death or maturity after at least five full years' premiums and five completed policy years, and on a paid-up policy only if the Maturity Paid-up Sum Assured is at least ₹1,00,000. On surrender, Loyalty Addition is considered only in the Special Surrender Value."
  riders: ["LIC's Accidental Death & Disability Benefit Rider (UIN: 512B209V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)"]
  other_benefits:
    - "Only one of the two accident riders may be opted for; the rider premium cannot exceed 30% of the base premium."
    - "Accidental Death & Disability Benefit Rider sum assured cannot exceed the Basic Sum Assured."
    - "Accident Benefit Rider sum assured cannot exceed 3 × the Basic Sum Assured."
    - "The outstanding policy term and rider term must be at least 5 years when a rider is opted for."
    - "Policy loan after the first policy year, up to 70% of the surrender value for an in-force policy and 60% for a paid-up policy."
    - "Auto cover of 6 months if 3 to less than 5 full years' premiums have been paid, and 2 years if at least 5 full years' premiums have been paid."
    - "High-BSA rebate of ₹600 at the ₹2,00,000 sum assured; yearly mode rebate 2% and half-yearly 1%."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed after completion of the first policy year if one full year's premium has been paid. Guaranteed Surrender Value is available after at least two full years' premiums; Special Surrender Value after one full year. Payable = higher of GSV and SSV. GSV = total premiums paid × GSV factor; factors are 0% in year 1, 30% in year 2, 35% in year 3, 50% in years 4-7, then rising by term to 90% in the final year. Loyalty Addition is considered only in the SSV."
  paid_up: true
  paid_up_terms: "After one full year's premiums, non-payment converts the policy to paid-up. Death Paid-Up Sum Assured = Sum Assured on Death × (premium paying period already paid / original PPT); Maturity Paid-Up Sum Assured = Basic Sum Assured × the same ratio. Both are subject to a minimum of 105% of total premiums paid. Auto cover applies if at least 3 full years' premiums were paid."
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
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "GST is currently exempted according to the benefit illustration. Statutory taxes, if any, will apply at the prevailing rate when the exemption changes."
  notes: "The brochure does not state section 80C or section 10(10D) treatment. Consult a tax adviser and verify current law."

decision:
  primary_goals: ["savings", "protection"]
  risk_profile: "Guaranteed savings with non-guaranteed loyalty additions; no market risk"
  liquidity: "Medium"
  time_horizon: "Medium"
  minimum_age: 18
  maximum_age: 55
  suitable_for:
    - "Small-ticket savers who want a guaranteed maturity amount plus life cover"
    - "Micro-insurance customers who value a simple participating endowment"
    - "Policyholders who may need a loan or surrender option after the first year"
  not_suitable_for:
    - "Buyers needing more than ₹2 lakh of life cover; the sum assured is capped"
    - "Short-term savers; surrender values are zero or low in the early years"
    - "Investors seeking fully guaranteed high returns or market-linked growth"
  key_tradeoffs:
    - "Loyalty Additions are not guaranteed and may be zero"
    - "The ₹2 lakh sum assured cap limits protection"
    - "The premium paying term equals the policy term; there is no limited-pay option"
    - "Surrender in year 1 has no GSV; year 2 GSV is only 30% of premiums paid"
  decision_flags: ["micro_insurance", "par_product", "loyalty_additions", "small_ticket", "loan_available", "low_sum_assured_cap", "early_surrender_penalty"]

calculation_inputs:
  required_inputs: ["age", "policy_term", "basic_sum_assured", "mode"]
  optional_inputs: ["high_bsa_rebate", "mode_rebate", "riders", "loan"]
  rate_table_available: true
  formulas:
    annual_premium: "rate_per_lakh(age, policy_term) × (basic_sum_assured / 100000) - high_bsa_rebate"
    high_bsa_rebate: "3 × (basic_sum_assured / 1000) if BSA = 200000, otherwise 0"
    mode_rebate: "2% yearly, 1% half-yearly, 0% quarterly"
    death_benefit: "max(7 × annualized_premium, basic_sum_assured) + loyalty_addition (if eligible); minimum 1.05 × total_premiums_paid"
    maturity_benefit: "basic_sum_assured + loyalty_addition (if eligible)"
    surrender_value: "max(GSV, SSV); GSV = total_premiums_paid × GSV_factor"
    maximum_loan: "0.70 × surrender_value (in-force) or 0.60 × surrender_value (paid-up)"
  assumptions:
    - "Loyalty Addition rates are not published; model them as zero unless LIC declares a rate for the relevant year."
    - "The high-BSA rebate applies only at a Basic Sum Assured of ₹2,00,000."
    - "Sample rates are per ₹1,00,000 Basic Sum Assured, exclude taxes and rider premiums, and do not differentiate by sex."
    - "The premium paying term equals the policy term."

sources:
  - name: "Customer Information Sheet (CIS), 30-09-2024"
    url: "https://licindia.in/documents/20121/1244034/LICs_Micro_Bachat_CIS_30092024+%281%29.pdf/c48fca2d-a506-7a6b-b795-c243f1a5390e?t=1728034601925"
  - name: "Sales Brochure, 14-10-2025 (latest)"
    url: "https://licindia.in/documents/20121/1319704/751+Micro+Bachat+Plan+Sales+Brochure_141025.pdf/3b0d9dc9-ef4f-dad4-c4ba-d94b3357a99c?t=1760437558992"
  - name: "Policy Document, 30-09-2024"
    url: "https://licindia.in/documents/20121/1244034/Final_Policy_Doc_Micro_Bachat_30092024_cc_with_logo.pdf/27b4f3d2-b4b9-e893-973b-3a7abc8d895f?t=1728035472457"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-smicro-bachat-751-512n329v03"
---
# LIC's Micro Bachat — Plan 751

**One-line summary:** A small-ticket participating endowment for micro-insurance customers that guarantees the sum assured at maturity, adds non-guaranteed loyalty additions after five years, and provides a loan facility after the first policy year.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 751 |
| UIN | 512N329V03 |
| Product type | Par, non-linked, individual savings life micro-insurance plan |
| Status | Active |
| Entry age | 18-55 years |
| Policy term | 10-15 years |
| Premium paying term | Same as policy term |
| Basic Sum Assured | ₹1,00,000-₹2,00,000 |
| Death benefit | Higher of 7 × annualized premium or BSA, plus loyalty addition if eligible |
| Maturity benefit | BSA plus loyalty addition if eligible |
| Official page | https://licindia.in/web/guest/lic-smicro-bachat-751-512n329v03 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 completed years |
| Maximum entry age | 55 years (nearer birthday) |
| Maximum maturity age | 70 years (nearer birthday) |
| Policy term | 10-15 years |
| Premium paying term | Equal to the policy term |
| Basic Sum Assured | ₹1,00,000-₹1,80,000 in ₹10,000 multiples; ₹2,00,000 only above ₹1,80,000, in ₹20,000 multiples |
| Aggregate BSA cap | ₹2,00,000 per individual across all versions of this plan |
| Underwriting | Standard healthy lives; no medical examination |

The sum assured values are ₹1,00,000, ₹1,10,000, ₹1,20,000 up to ₹1,80,000, and then ₹2,00,000. A sum assured of ₹1,90,000 is not available because the next multiple step above ₹1,80,000 is ₹20,000.

## Premiums and sum insured

- **Modes:** yearly, half-yearly, quarterly, monthly NACH and salary deduction.
- **Mode rebate:** 2% of the tabular premium for yearly, 1% for half-yearly, nil for quarterly (and monthly/salary deduction).
- **No modal conversion factors are published.**
- **High BSA rebate:** nil for BSA ₹1,00,000-₹1,80,000; ₹3.00 per ₹1,000 BSA for BSA ₹2,00,000, i.e. ₹600.
- **Premium paying term:** equal to the policy term, so a 15-year policy pays for 15 years.
- **Premium basis:** age at entry, policy term and BSA. The published rate table does not differentiate by sex.

### Illustrative premiums

Published sample yearly premiums per ₹1,00,000 Basic Sum Assured, exclusive of taxes.

| Age | Term 10 | Term 12 | Term 15 |
|---|---|---|---|
| 18 | ₹8,722 | ₹7,012 | ₹5,380 |
| 25 | ₹8,727 | ₹7,017 | ₹5,385 |
| 35 | ₹8,761 | ₹7,061 | ₹5,439 |
| 45 | ₹8,923 | ₹7,247 | ₹5,664 |
| 55 | ₹9,388 | ₹7,752 | ₹6,233 |

The premium is almost flat across ages; term length is the main driver. For a ₹2,00,000 sum assured, double the per-lakh rate and subtract the ₹600 high-BSA rebate.

**Benefit illustration:** age 25, term 15, PPT 15, BSA ₹1,00,000, yearly mode. The annual premium is ₹5,385.

| Scenario | Loyalty Addition | Maturity Benefit |
|---|---|---|
| 4% p.a. | ₹0 | ₹1,00,000 |
| 8% p.a. | ₹500 | ₹1,00,500 |

The loyalty addition is not guaranteed. The illustration assumes GST is currently exempted.

## Benefits

### Death benefit

On death before maturity, the nominee receives the Sum Assured on Death plus any Loyalty Addition:

```text
Sum Assured on Death = max(7 × annualized premium, Basic Sum Assured)
Death Benefit        = Sum Assured on Death + Loyalty Addition (if eligible)
                       subject to a minimum of 105% of total premiums paid
```

For the first five policy years, the death benefit is the Sum Assured on Death without any Loyalty Addition. From the sixth policy year, a Loyalty Addition is payable if at least five full years' premiums have been paid and five policy years have been completed.

"Annualized premium" excludes taxes, rider premiums, underwriting extras and modal loadings. "Total premiums paid" excludes extra premiums and taxes.

### Maturity benefit

On survival to the end of the policy term, with all due premiums paid, LIC pays the Basic Sum Assured plus any Loyalty Addition. The Basic Sum Assured is guaranteed; the Loyalty Addition is not.

### Loyalty Addition

LIC declares Loyalty Additions from the experience of the participating fund. They are payable:

- On death or maturity if at least five full years' premiums have been paid and five policy years have been completed.
- On a paid-up policy only if the Maturity Paid-up Sum Assured is at least ₹1,00,000.
- On surrender only through the Special Surrender Value.

The benefit illustration shows a ₹500 Loyalty Addition at an assumed 8% return, giving a maturity benefit of ₹1,00,500 on a ₹1,00,000 sum assured. At the assumed 4% return, the addition is zero and maturity is ₹1,00,000. These are illustrations, not guarantees.

### Riders

Two accident riders are available, but only one may be chosen:

| Rider | UIN | Sum assured limit | Other limits |
|---|---|---|---|
| LIC's Accidental Death & Disability Benefit Rider | 512B209V02 | Up to the Basic Sum Assured | Rider premium up to 30% of base premium; outstanding term at least 5 years |
| LIC's Accident Benefit Rider | 512B203V03 | Up to 3 × the Basic Sum Assured | Rider premium up to 30% of base premium; outstanding term at least 5 years |

Rider benefits do not acquire paid-up value and do not continue after the grace period in a lapsed policy.

## Charges and optional benefits

No explicit premium allocation, administration, fund-management or surrender charge is stated. The policyholder pays the base premium, any rider premium, any underwriting extra and statutory taxes (currently GST-exempt per the illustration). The main optional items are:

- **Riders:** one accident rider, as above.
- **Loan:** after the first policy year, as described below.
- **Auto cover:** on a paid-up policy, 6 months if 3 to less than 5 full years' premiums were paid, and 2 years if at least 5 full years' premiums were paid. During auto cover, the full in-force death benefit is paid after deducting unpaid premiums with interest and any premiums falling due before the next anniversary. Auto cover does not apply to suicide.

## Surrender, loan, paid-up and revival

### Surrender

- The policy can be surrendered after completion of the first policy year if one full year's premium has been paid.
- **Guaranteed Surrender Value (GSV)** is available after at least two full years' premiums have been paid.
- **Special Surrender Value (SSV)** is available after one full year's premium has been paid.
- On surrender, LIC pays the higher of GSV and SSV.
- GSV = total premiums paid × GSV factor. Premiums exclude taxes, underwriting extras and rider premiums.
- Loyalty Addition is considered only in the calculation of SSV.

Selected GSV factors for total premiums paid:

| Policy year | Term 10 | Term 12 | Term 15 |
|---|---|---|---|
| 1 | 0.00% | 0.00% | 0.00% |
| 2 | 30.00% | 30.00% | 30.00% |
| 3 | 35.00% | 35.00% | 35.00% |
| 5 | 50.00% | 50.00% | 50.00% |
| 8 | 65.00% | 57.50% | 54.29% |
| 10 | 90.00% | 72.50% | 62.86% |
| 12 | — | 90.00% | 71.43% |
| 15 | — | — | 90.00% |

The full factor table for terms 10-15 is in the sales brochure. SSV is determined and reviewed under IRDAI's Master Circular on Life Insurance Products.

### Loan

- Available after completion of the first policy year, if at least one full year's premium has been paid.
- Maximum loan: **70% of the surrender value** for an in-force policy; **60%** for a paid-up policy.
- The policy is assigned absolutely to LIC as security for the loan.
- Interest compounds half-yearly. For loans sanctioned between 1 May 2024 and 30 April 2025, the rate is **9.50% p.a.** compounding half-yearly for the entire loan term.
- If loan interest is not paid or the outstanding loan plus interest exceeds the surrender value, LIC may foreclose the policy and pay any excess surrender value.
- Outstanding loan and interest are deducted from maturity, surrender or death claim proceeds.

### Paid-up

- If at least one full year's premiums have been paid and later premiums are not paid, the policy becomes paid-up after the first policy year and continues to the end of the term.
- **Death Paid-Up Sum Assured** = Sum Assured on Death × (total period for which premiums were paid / original premium paying term).
- **Maturity Paid-Up Sum Assured** = Basic Sum Assured × the same ratio.
- Both are subject to a minimum of 105% of total premiums paid.
- Loyalty Addition is payable on a paid-up policy only if at least five full years' premiums were paid and the Maturity Paid-Up Sum Assured is at least ₹1,00,000.
- Auto cover applies if at least 3 full years' premiums were paid.

### Revival

A lapsed policy can be revived within 5 consecutive complete years from the date of the first unpaid premium and before maturity, on payment of arrears with interest and satisfactory evidence of continued insurability. The revival interest rate is set by LIC from time to time.

### Grace period and free look

- **Grace period:** 30 days for yearly, half-yearly and quarterly premiums; 15 days for monthly NACH.
- **Free look:** 30 days from receipt of the policy document.

## Waiting periods, exclusions and conditions

### Waiting period

**Not applicable.** The plan has no health waiting period. The only time-based benefit condition is the five-year qualification for Loyalty Additions.

### Suicide exclusion

- If the life assured commits suicide within 12 months of commencement, the nominee receives 80% of total premiums paid (excluding taxes, extra premiums and rider premiums).
- If suicide occurs within 12 months of revival, the nominee receives the higher of 80% of total premiums paid or the surrender value available on the date of death.
- No other claim is payable in either case.
- The auto-cover provision does not apply to suicide.

### Other conditions

- Only standard healthy lives are accepted; there is no medical examination.
- All material facts and pre-existing conditions must be disclosed. Non-disclosure can make the policy void under Section 45 of the Insurance Act, 1938.
- Riders do not acquire paid-up value and cease if the policy lapses.
- The policy terminates on maturity, death, surrender, free-look cancellation, forfeiture or expiry of the revival period without revival.

## Tax treatment

The benefit illustration states that GST is currently exempted, and that the GST rate will be as applicable from time to time. The brochure does not state section 80C or section 10(10D) treatment. Confirm the current tax position on premiums and maturity proceeds with a tax adviser before relying on it.

## Suitability and decision notes

**Best suited to:** small-ticket savers who want a guaranteed maturity amount, some life cover and the possibility of a declared loyalty addition, and who value a loan or surrender option after the first year. It is designed for the micro-insurance market and for customers who prefer a simple, non-linked participating product.

**Poor fit for:** buyers who need more than ₹2 lakh of cover, short-term savers who may need the money within a few years, and investors seeking fully guaranteed high returns or market-linked growth. The loyalty addition can be zero, so the maturity outcome is not fully guaranteed above the basic sum assured.

**Key trade-offs:** the protection cover is capped at ₹2 lakh; loyalty additions are non-guaranteed; the premium paying term equals the policy term, so there is no limited-pay option; and early surrender is expensive, with 0% GSV in year 1 and 30% in year 2. The product is simple and participating, but the returns are modest.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-55 years |
| Policy term | Yes | 10-15 years |
| Basic Sum Assured | Yes | ₹1-1.8 lakh in ₹10,000 steps; ₹2 lakh only above ₹1.8 lakh |
| Mode | Yes | Yearly, half-yearly, quarterly, monthly NACH or salary deduction |
| High BSA rebate | If BSA = ₹2,00,000 | ₹600 |
| Mode rebate | Yes | 2% yearly, 1% half-yearly, 0% quarterly |
| Riders | Optional | One accident rider only |
| Loan | Optional | Up to 70% of surrender value in-force; 60% paid-up |

Core formulas:

```text
Annual premium       = rate_per_lakh(age, term) × (BSA / 100000)
                       − high-BSA rebate
High-BSA rebate      = ₹3 × (BSA / 1000) if BSA = ₹2,00,000, else 0
Mode rebate          = 2% yearly, 1% half-yearly, 0% quarterly
Death benefit        = max(7 × annualized premium, BSA) + loyalty addition
                       subject to a minimum of 1.05 × total premiums paid
Maturity benefit     = BSA + loyalty addition (if eligible)
Surrender value      = max(GSV, SSV)
GSV                  = total premiums paid × GSV factor
Maximum loan         = 70% × surrender value (in-force)
                       60% × surrender value (paid-up)
```

## Source documents

- [Customer Information Sheet (CIS), 30-09-2024](https://licindia.in/documents/20121/1244034/LICs_Micro_Bachat_CIS_30092024+%281%29.pdf/c48fca2d-a506-7a6b-b795-c243f1a5390e?t=1728034601925)
- [Sales Brochure, 14-10-2025 (latest)](https://licindia.in/documents/20121/1319704/751+Micro+Bachat+Plan+Sales+Brochure_141025.pdf/3b0d9dc9-ef4f-dad4-c4ba-d94b3357a99c?t=1760437558992)
- [Policy Document, 30-09-2024](https://licindia.in/documents/20121/1244034/Final_Policy_Doc_Micro_Bachat_30092024_cc_with_logo.pdf/27b4f3d2-b4b9-e893-973b-3a7abc8d895f?t=1728035472457)
- [Official product page](https://licindia.in/web/guest/lic-smicro-bachat-751-512n329v03)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
