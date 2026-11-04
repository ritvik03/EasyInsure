---
plan_number: 859
plan_name: "LIC's Saral Jeevan Bima"
uin: "512N341V01"
insurer: "Life Insurance Corporation of India"
category: "Term"
product_type: "Non-Linked, Non-Par, Individual Pure Risk Premium Life Insurance Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-saral-jeevan-bima"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 65
  entry_age_notes: "18 to 65 years (last birthday)."
  maturity_age_max: 70
  maturity_age_notes: "Maximum age at maturity 70 years (last birthday). No minimum maturity age is stated."
  policy_terms_years: "5 to 40 years for Single, Regular and Limited premium."
  policy_term_kind: "range"
  policy_term_min_years: 5
  policy_term_max_years: 40
  premium_paying_terms_years: [5, 10, "Regular (same as policy term)", "Single"]
  ppt_min_years: 5
  ppt_max_years: 40
  ppt_term_pairs: "Single: term 5-40. Limited 5-year PPT: term 5-40. Limited 10-year PPT: term 5-40. Regular: term 5-40. All subject to maturity age 70."
  min_sum_assured: "₹5,00,000"
  max_sum_assured: "₹25,00,000 per life"
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated in the brochure. Basic Sum Assured must be in multiples of ₹50,000."
  max_premium: "No explicit maximum; constrained by the ₹25 lakh BSA cap."

premium:
  modes: ["Yearly", "Half-yearly", "Monthly (ECS/NACH only)"]
  frequency_loadings: "Half-yearly 2% of tabular annual premium; monthly (ECS/NACH) 3% of tabular annual premium; yearly nil."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "BSA ₹5,00,000; age 30; policy term 20 years; standard lives; offline sale; premium in ₹, exclusive of taxes"
      rows:
        - age: 30
          regular_annual: 2095
          limited_ppt_10: 3010
          limited_ppt_5: 4955
          single: 20310
    - basis: "BSA ₹10,00,000; policy term 25 years; standard lives; offline channel; premium in ₹, exclusive of taxes"
      rows:
        - age: 25
          single: 41610
          regular_annual: 3850
          half_yearly: 1965
          monthly: 331
        - age: 30
          single: 52260
          regular_annual: 4670
          half_yearly: 2383
          monthly: 401
        - age: 35
          single: 70840
          regular_annual: 6110
          half_yearly: 3117
          monthly: 525
        - age: 40
          single: 98630
          regular_annual: 8340
          half_yearly: 4254
          monthly: 716
        - age: 45
          single: 138230
          regular_annual: 11660
          half_yearly: 5948
          monthly: 1001
    - basis: "BSA ₹10,00,000; policy term 25 years; standard lives; online channel; premium in ₹, exclusive of taxes"
      rows:
        - age: 25
          single: 40776
          regular_annual: 3574
          half_yearly: 1826
          monthly: 308
        - age: 30
          single: 51213
          regular_annual: 4336
          half_yearly: 2216
          monthly: 373
        - age: 35
          single: 69421
          regular_annual: 5675
          half_yearly: 2900
          monthly: 488
        - age: 40
          single: 96655
          regular_annual: 7749
          half_yearly: 3959
          monthly: 667
        - age: 45
          single: 135463
          regular_annual: 10837
          half_yearly: 5536
          monthly: 932
  premium_formula: "Premium depends on age at entry, policy term, PPT and sum assured, plus mode loadings and applicable rebates. LIC's calculator or branch quote gives the exact premium; the published figures are illustrative samples only."
  notes: "No smoker/non-smoker or gender rating is stated in the brochure; samples are for standard lives. High sum assured rebate and an online-sale rebate apply. The brochure states the high-sum-assured rebate as '0.10%o B.S.A.' etc.; the unit is ambiguous and is reproduced as published."

benefits:
  death_benefit: "On death during the policy term while the policy is in force, Sum Assured on Death is payable. During the first 45 days from commencement of risk, only accidental death is covered; non-accidental death returns 100% of premiums received, excluding taxes, and no Basic Sum Assured. After the waiting period, for Regular and Limited premium the Sum Assured on Death is the highest of 10 × annualized premium, 105% of all premiums paid, or the Basic Sum Assured; for Single premium it is the higher of 125% of the single premium or the Basic Sum Assured."
  death_benefit_formula: "regular/limited: max(10 * annualized_premium, 1.05 * total_premiums_paid, basic_sum_assured); single: max(1.25 * single_premium, basic_sum_assured); non-accidental death during waiting period: total_premiums_paid (excluding taxes)"
  maturity_benefit: "No maturity benefit is payable on survival to the end of the policy term."
  maturity_benefit_formula: "0"
  survival_benefits: []
  guaranteed_benefits: "The death benefit is fixed and guaranteed at issue. The plan is non-participating and receives no bonuses or surplus share."
  non_guaranteed_benefits: "None."
  riders: []
  other_benefits:
    - "Waiting-period protection: accidental death is covered from commencement of risk, including during the first 45 days."
    - "High sum assured rebate."
    - "Online-sale rebate."
    - "No maturity, surrender, loan or paid-up value; Single and Limited premium policies have a Policy Cancellation Value."
    - "No riders are offered under this plan."

policy_features:
  loan: false
  surrender: true
  surrender_terms: "Surrender value is not applicable. A Policy Cancellation Value is payable instead: for Single premium, 70% × single premium × unexpired term / original term, available immediately; for Limited premium, the same formula on total premiums paid, available after at least 2 consecutive full years' premiums; Regular premium pays nothing."
  paid_up: null
  paid_up_terms: "Not specified in the official documents; the plan describes no paid-up value."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: null
    monthly_nach: 15
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: 80% of total premiums paid for Regular/Limited premium, or 90% of the single premium for Single premium, excluding extra premiums and taxes. Nothing is payable under a lapsed policy. Non-accidental death during the 45-day waiting period returns premiums only."
  waiting_period: "45 days from commencement of risk. Only accidental death is covered during this period; non-accidental death returns 100% of premiums received, excluding taxes, without the Basic Sum Assured. The waiting period does not apply on revival."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Statutory taxes are collected separately over and above the premium and are not counted in benefit calculations."
  notes: "The brochure does not state income-tax benefits or implications; it advises consulting a tax adviser. Tax treatment depends on prevailing law and the policy's premium/sum-assured relationship."

decision:
  primary_goals: ["protection"]
  risk_profile: "Guaranteed"
  liquidity: "Low"
  time_horizon: "Long"
  minimum_age: 18
  maximum_age: 65
  suitable_for:
    - "Buyers aged 18-65 who need a small pure death cover of ₹5-25 lakh"
    - "Buyers who want a term of 5-40 years ending by age 70"
    - "Buyers who want Single, Regular or Limited (5 or 10 year) premium"
    - "Buyers who want monthly ECS/NACH premiums or an online discount"
    - "Budget-conscious buyers seeking a simple, standard-life term plan"
  not_suitable_for:
    - "Buyers who need cover above ₹25 lakh; the plan caps BSA per life"
    - "Anyone wanting cover beyond age 70"
    - "Buyers who need non-accidental death cover immediately; only accidental death is covered in the first 45 days"
    - "Buyers who want riders, maturity, savings or loan value"
    - "Buyers who want a surrender value; only a Policy Cancellation Value is available"
  key_tradeoffs:
    - "Pure protection only: no maturity benefit and no surrender value"
    - "45-day waiting period for non-accidental death"
    - "₹25 lakh per-life cap and a maximum maturity age of 70"
    - "No riders are offered"
    - "Exact premiums are not published as a rate table; published figures are samples only"
  decision_flags: ["pure_term", "waiting_period_45d", "sum_assured_cap_25l", "coverage_to_70", "no_riders", "policy_cancellation_value", "no_surrender_value", "suicide_exclusion_12m", "monthly_ecs_mode", "offline_and_online"]

calculation_inputs:
  required_inputs: ["age", "basic_sum_assured", "policy_term", "premium_paying_term", "mode", "distribution_channel"]
  optional_inputs: []
  rate_table_available: false
  formulas:
    sum_assured_on_death_regular: "max(10 * annualized_premium, 1.05 * total_premiums_paid, basic_sum_assured)"
    sum_assured_on_death_single: "max(1.25 * single_premium, basic_sum_assured)"
    death_during_waiting_non_accidental: "total_premiums_paid_excluding_taxes"
    maturity_benefit: "0"
    surrender_value: "0"
    policy_cancellation_value_single: "0.70 * single_premium * (unexpired_policy_term / original_policy_term)"
    policy_cancellation_value_limited: "0.70 * total_premiums_paid * (unexpired_policy_term / original_policy_term), after at least 2 consecutive full years' premiums"
    policy_cancellation_value_regular: "0"
  assumptions:
    - "The policy must be in force and the claim admissible for the death benefit to be payable."
    - "Annualized premium excludes taxes and any underwriting extra premium."
    - "Total premiums paid excludes extra premiums and taxes."
    - "The illustrative premiums are for standard lives; the brochure does not state gender or smoker/non-smoker rate classes."
    - "The Policy Cancellation Value formula uses the unexpired policy term divided by the original policy term."

sources:
  - name: "Sales Brochure, 30-03-2026 (latest)"
    url: "https://licindia.in/documents/20121/1639835/LIC+Saral+Jeevan+Bima_Sales+Brochure_30032026-ENG.pdf/a712554e-36b0-8059-d311-dcfeba3edb3d?t=1774892587613"
  - name: "Sales Brochure, February 2025 (superseded; used for comparison)"
    url: "https://licindia.in/documents/20121/1325029/Modified_Sales+Brochure+LIC%27s+Saral+Jeevan+Bima+%281%29.pdf/57990dd4-501b-4c99-529e-0535785a3dde?t=1741863748516"
  - name: "Policy Document, December 2024 (linked from the official product page)"
    url: "https://licindia.in/documents/20121/1307964/Policy+Document+Modified+LIC%27s+Saral+Jeevan+Bima.pdf/3662a2c9-3ee1-9997-b83a-a7c08592b860?t=1735734237927"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-saral-jeevan-bima"
---
# LIC's Saral Jeevan Bima — Plan 859

**One-line summary:** A simple non-participating pure term plan for ages 18-65 with ₹5-25 lakh of death cover, terms of 5-40 years, a 45-day waiting period for non-accidental death, and no riders.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 859 |
| UIN | 512N341V01 |
| Product type | Non-linked, non-par, individual pure risk premium life plan |
| Status | Active |
| Entry age | 18 to 65 years (last birthday) |
| Maturity age | Maximum 70 years (last birthday); no minimum stated |
| Policy term | 5 to 40 years |
| Premium paying term | Single, Regular, Limited 5 years, Limited 10 years |
| Minimum sum assured | ₹5,00,000 |
| Maximum sum assured | ₹25,00,000 per life |
| Minimum premium | Not stated in the brochure |
| Modes | Yearly, half-yearly, monthly (ECS/NACH) |
| Official page | https://licindia.in/web/guest/lic-s-saral-jeevan-bima |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 65 years (last birthday) |
| Maximum maturity age | 70 years (last birthday) |
| Minimum Basic Sum Assured | ₹5,00,000 |
| Maximum Basic Sum Assured | ₹25,00,000 per life |
| BSA multiples | ₹50,000 |
| Policy term | 5 to 40 years for Single, Regular and Limited premium |
| Premium paying term | Single; Limited 5 or 10 years; Regular (same as policy term) |

All terms are subject to maturity age 70. The brochure states no minimum premium and no minimum maturity age.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, or monthly through ECS/NACH for Regular and Limited premium; single premium is a lump sum.
- **Minimum premium:** not stated in the brochure.
- **Basic Sum Assured:** ₹5 lakh to ₹25 lakh per life, in ₹50,000 multiples.
- **Premium determinants:** age at entry, policy term, PPT and sum assured.
- **Mode loadings:** half-yearly 2% of tabular annual premium; monthly 3%; yearly nil.
- **Rating classes:** the brochure does not state separate smoker/non-smoker or gender rates; its samples are for standard lives.

There is no full published rate table. The brochure gives sample premiums only; LIC's calculator or branch quote produces the actual premium.

### Illustrative premiums

BSA ₹5,00,000, age 30, policy term 20 years, standard lives, offline sale, premium in ₹, exclusive of taxes:

| Regular annual | Limited PPT 10 | Limited PPT 5 | Single |
|---:|---:|---:|---:|
| 2,095 | 3,010 | 4,955 | 20,310 |

BSA ₹10,00,000, policy term 25 years, standard lives, **offline** channel, premium in ₹, exclusive of taxes:

| Age | Single | Regular annual | Half-yearly | Monthly |
|---:|---:|---:|---:|---:|
| 25 | 41,610 | 3,850 | 1,965 | 331 |
| 30 | 52,260 | 4,670 | 2,383 | 401 |
| 35 | 70,840 | 6,110 | 3,117 | 525 |
| 40 | 98,630 | 8,340 | 4,254 | 716 |
| 45 | 138,230 | 11,660 | 5,948 | 1,001 |

Same basis, **online** channel:

| Age | Single | Regular annual | Half-yearly | Monthly |
|---:|---:|---:|---:|---:|
| 25 | 40,776 | 3,574 | 1,826 | 308 |
| 30 | 51,213 | 4,336 | 2,216 | 373 |
| 35 | 69,421 | 5,675 | 2,900 | 488 |
| 40 | 96,655 | 7,749 | 3,959 | 667 |
| 45 | 135,463 | 10,837 | 5,536 | 932 |

### Rebates and loadings

| Item | Amount |
|---|---|
| High sum assured rebate, ₹5-9.5 lakh BSA | Nil |
| High sum assured rebate, ₹10-14.5 lakh BSA | 0.10%o B.S.A. (as published) |
| High sum assured rebate, ₹15-19.5 lakh BSA | 0.20%o B.S.A. (as published) |
| High sum assured rebate, ₹20 lakh and above | 0.25%o B.S.A. (as published) |
| Online-sale rebate, Single premium | 2.00% of tabular premium |
| Online-sale rebate, PPT 5-9 years | 5.00% of tabular premium |
| Online-sale rebate, PPT 10-14 years | 6.00% of tabular premium |
| Online-sale rebate, PPT 15 years and above | 7.00% of tabular premium |

The high-sum-assured rebate is reproduced exactly as printed. The brochure's unit ("%o B.S.A.") is ambiguous: it may be a typographical rendering of "% of B.S.A." or of a per-mille symbol. Do not compute a rupee rebate from it without confirming the interpretation with LIC.

## Benefits

### Death benefit

**During the 45-day waiting period from commencement of risk:**

- **Accidental death:** Sum Assured on Death is payable.
- **Non-accidental death:** 100% of all premiums received, excluding taxes, is payable; the Basic Sum Assured is not paid.

**After the waiting period**, on death before maturity while the policy is in force:

| Premium type | Sum Assured on Death |
|---|---|
| Regular or Limited | Highest of 10 × annualized premium, 105% of all premiums paid to date, or the Basic Sum Assured |
| Single | Higher of 125% of the single premium or the Basic Sum Assured |

The absolute amount assured to be paid on death equals the Basic Sum Assured. Premiums in the formula do not include any extra amount charged because of an underwriting decision.

### Maturity benefit

No maturity benefit is payable if the life assured survives to the end of the policy term.

### Riders and options

No riders are offered under this plan. The brochure describes no optional benefits, death-benefit instalment option or increasing cover.

## Charges and optional benefits

| Item | Amount |
|---|---|
| Premium allocation / fund management / policy administration | Not applicable; this is a non-linked pure risk plan with no fund |
| Half-yearly modal loading | 2% of tabular annual premium |
| Monthly (ECS/NACH) modal loading | 3% of tabular annual premium |
| Yearly modal loading | Nil |
| High sum assured rebate | Nil to 0.25%o of BSA, as published, by BSA band |
| Online-sale rebate | 2% to 7% of tabular premium, by PPT |
| Riders | None |
| Taxes | Extra, as applicable from time to time |

The premium is the risk premium; no separate allocation or administration charge is disclosed in the brochure.

## Surrender, loan, paid-up and revival

- **Surrender:** surrender value is not applicable. A **Policy Cancellation Value** is payable instead:
  - **Single premium:** 70% × single premium × unexpired policy term / original policy term, available immediately after receipt of the single premium.
  - **Limited premium (5 or 10 year PPT):** 70% × total premiums paid × unexpired policy term / original policy term, available after at least 2 consecutive full years' premiums have been paid.
  - **Regular premium:** no Policy Cancellation Value.
- **Loan:** not available.
- **Paid-up:** no paid-up value is described in the brochure.
- **Revival:** a lapsed policy may be revived within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and proof of continued insurability.
- **Revival interest:** the brochure's example rate for 1 May 2024 to 30 April 2025 is 9.50% p.a. compounding half-yearly. The 30-03-2026 brochure repeats this 2024-25 example rather than giving a current rate; the formula is the 10-year G-Sec base/par yield plus 300 basis points.
- **Lapse:** benefits cease after the grace period. If not revived within the revival period, Regular premium policies pay nothing; Limited premium policies receive the Policy Cancellation Value.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly and half-yearly premiums; 15 days for monthly premiums.

## Exclusions and conditions

- **Waiting period:** 45 days from commencement of risk. Only accidental death is covered during this period; non-accidental death returns 100% of premiums received, excluding taxes, without the Basic Sum Assured. The waiting period does not apply on revival.
- **Suicide, Regular/Limited premium:** if the life assured commits suicide within 12 months of commencement of risk or revival, the policy is void and the nominee receives 80% of total premiums paid, excluding extra premiums and taxes.
- **Suicide, Single premium:** if the life assured commits suicide within 12 months of commencement of risk, the policy is void and the nominee receives 90% of the single premium paid, excluding extra premiums and taxes.
- **Lapsed policy:** the suicide clause does not apply because nothing is payable under a lapsed policy.
- **Misstatement or suppression:** the policy may be voided under Section 45 of the Insurance Act, 1938; premiums may be refunded in the circumstances set out in that section.
- **Claim admissibility:** the death benefit requires the policy to be in force and the claim to be admissible.

## Tax treatment

The brochure does not state income-tax benefits under Section 80C or Section 10(10D); it advises consulting a tax adviser. Statutory taxes are collected separately over and above the premium and are not counted in benefit calculations. Confirm current tax treatment before relying on it; it depends on prevailing law and the policy's premium/sum-assured relationship.

## Suitability and decision notes

**Best suited to:** buyers aged 18-65 who need a small pure death cover of ₹5-25 lakh and want a simple term plan with terms of 5-40 years ending by age 70. It suits buyers who want Single, Regular or Limited (5 or 10 year) premium, monthly ECS/NACH payment, or the online discount.

**Poor fit for:** buyers who need more than ₹25 lakh of cover, anyone wanting cover beyond age 70, buyers who need riders, and buyers who want savings, maturity, surrender or loan value. It is also a poor fit for anyone who needs full non-accidental death cover immediately, because only accidental death is covered during the first 45 days.

**Key trade-offs:** the plan is protection-only with no maturity benefit and no surrender value; Single and Limited premium policies have a Policy Cancellation Value instead. The 45-day waiting period, ₹25 lakh per-life cap and absence of riders keep the product simple but narrow. Exact premiums must come from LIC's calculator or a branch quote.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-65 last birthday; drives rate and maximum term |
| Basic Sum Assured | Yes | ₹5-25 lakh; ₹50,000 multiples |
| Policy term | Yes | 5-40 years, subject to maturity 70 |
| Premium paying term | Yes | Single, Limited 5 or 10 years, or Regular |
| Mode | Yes | Yearly, half-yearly, or monthly ECS/NACH |
| Distribution channel | Yes | Offline or online; online sale rebate depends on PPT |
| Gender / smoking status | No | Not stated as rating factors in the brochure |

Core formulas:

```text
Sum Assured on Death (Regular/Limited)
  = max(10 × annualized_premium,
        1.05 × total_premiums_paid,
        basic_sum_assured)

Sum Assured on Death (Single)
  = max(1.25 × single_premium,
        basic_sum_assured)

Non-accidental death during 45-day waiting period
  = total_premiums_paid (excluding taxes)

Maturity benefit = 0
Surrender value  = 0

Policy Cancellation Value (Single)
  = 0.70 × single_premium × unexpired_policy_term / original_policy_term

Policy Cancellation Value (Limited)
  = 0.70 × total_premiums_paid × unexpired_policy_term / original_policy_term
    (after at least 2 consecutive full years' premiums)

Policy Cancellation Value (Regular) = 0
```

## Source documents

- [Sales Brochure, 30-03-2026 (latest)](https://licindia.in/documents/20121/1639835/LIC+Saral+Jeevan+Bima_Sales+Brochure_30032026-ENG.pdf/a712554e-36b0-8059-d311-dcfeba3edb3d?t=1774892587613)
- [Sales Brochure, February 2025 (superseded; used for comparison)](https://licindia.in/documents/20121/1325029/Modified_Sales+Brochure+LIC%27s+Saral+Jeevan+Bima+%281%29.pdf/57990dd4-501b-4c99-529e-0535785a3dde?t=1741863748516)
- [Policy Document, December 2024](https://licindia.in/documents/20121/1307964/Policy+Document+Modified+LIC%27s+Saral+Jeevan+Bima.pdf/3662a2c9-3ee1-9997-b83a-a7c08592b860?t=1735734237927)
- [Official product page](https://licindia.in/web/guest/lic-s-saral-jeevan-bima)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; the policy document prevails over this summary.*
