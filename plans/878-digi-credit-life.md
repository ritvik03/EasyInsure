---
plan_number: 878
plan_name: "LIC's Digi Credit Life"
uin: "512N358V01"
insurer: "Life Insurance Corporation of India"
category: "Term"
product_type: "Non-Par, Non-Linked, Life, Individual, Pure Risk Plan (decreasing term assurance)"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-digi-credit-life-878-512n358v01"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 45
  entry_age_notes: "18 to 45 years (last birthday)."
  maturity_age_max: 75
  maturity_age_notes: "Minimum age at maturity 23 years; maximum 75 years (last birthday)."
  policy_terms_years: "5-30 years under Single premium; 10-30 years under Limited PPT 5; 15-30 years under Limited PPT 10; 25-30 years under Limited PPT 15."
  policy_term_kind: "range"
  policy_term_min_years: 5
  policy_term_max_years: 30
  premium_paying_terms_years: [5, 10, 15, "Single"]
  ppt_min_years: 5
  ppt_max_years: 15
  ppt_term_pairs: "Single: term 5-30. Limited PPT 5: term 10-30. Limited PPT 10: term 15-30. Limited PPT 15: term 25-30. No Regular premium option."
  min_sum_assured: "₹50,00,000"
  max_sum_assured: "₹5,00,00,000; higher sums may be considered case by case under LIC's Board-approved underwriting policy and reinsurer acceptance."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: 3000
    yearly: 3000
  min_premium_notes: "Minimum instalment premium ₹3,000 for Limited premium policies; minimum single premium ₹11,000. Only yearly and half-yearly modes are offered for Limited premium."
  max_premium: "No explicit maximum; subject to the maximum sum assured and underwriting."

premium:
  modes: ["Yearly", "Half-yearly"]
  frequency_loadings: "Half-yearly premium is 0.51 × the annual premium (equivalent to a 2% loading); yearly factor 1.0."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: 3000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "BSA ₹50 lakh; loan interest rate 8%; non-smoker male standard life; policy term 25 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          single: 34550
          limited_ppt_15: 3800
          limited_ppt_10: 4800
          limited_ppt_5: 8050
        - age: 30
          single: 45500
          limited_ppt_15: 4900
          limited_ppt_10: 6250
          limited_ppt_5: 10500
        - age: 40
          single: 88750
          limited_ppt_15: 9250
          limited_ppt_10: 11900
          limited_ppt_5: 20300
  premium_formula: "Premium depends on entry age, gender, smoking status, policy term, PPT, BSA, chosen loan interest rate and mode. LIC's online calculator quotes the exact premium; the published figures are illustrative samples only."
  notes: "The chosen interest rate (6%, 7%, 8%, 9%, 10%, 11% or 12%) only determines the Risk Cover Schedule; it need not equal the loan provider's actual interest rate. High sum assured rebate applies. Women get special rates; non-smoker rates depend on a urinary cotinine test."

benefits:
  death_benefit: "On death during the policy term while the policy is in force, Sum Assured on Death is payable as shown in the Risk Cover Schedule. At inception it equals the Basic Sum Assured and it reduces each policy year on an equated yearly repayment basis at the chosen interest rate. For Limited premium, the payable amount is the higher of 105% of total premiums paid or the scheduled absolute amount; for Single premium it is the scheduled absolute amount. The scheduled benefit may be higher or lower than the actual outstanding loan."
  death_benefit_formula: "limited: max(1.05 * total_premiums_paid, risk_cover_schedule[policy_year]); single: risk_cover_schedule[policy_year]"
  maturity_benefit: "No maturity benefit is payable on survival to the end of the policy term."
  maturity_benefit_formula: "0"
  survival_benefits: []
  guaranteed_benefits: "The death benefit schedule is fixed and guaranteed at issue. The plan is non-participating and does not share in surplus."
  non_guaranteed_benefits: "None."
  riders: []
  other_benefits:
    - "Choice of loan interest rate at inception from 6%, 7%, 8%, 9%, 10%, 11% or 12%, used to build the Risk Cover Schedule."
    - "If the loan is repaid early, the life assured may either surrender the insurance cover (receiving any Unexpired Risk Premium Value) or continue the policy to the end of the term."
    - "The death benefit follows the scheduled reducing balance, not the actual loan repayment; it may be higher or lower than the outstanding loan."
    - "No maturity, loan, paid-up or top-up benefit."

policy_features:
  loan: false
  surrender: true
  surrender_terms: "No surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime during the term) and Limited premium (PPT 5 after 2 consecutive years of full premiums; PPT 10/15 after 3 consecutive years). The URV formula is in Policy Document Part D Condition 4."
  paid_up: false
  paid_up_terms: "No paid-up value is available."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: null
    monthly_nach: null
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: nominee receives 80% of total premiums paid (80% of single premium for a single-premium policy), excluding extra premiums and taxes. Lapsed policy: nothing payable."
  waiting_period: "Not applicable."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Premiums are exclusive of taxes; applicable statutory taxes are collected separately over and above the premium."
  notes: "The CIS and brochure do not state income-tax benefits or implications. Tax treatment depends on prevailing law and the policy's premium/sum-assured relationship; confirm with a tax adviser before relying on it."

decision:
  primary_goals: ["protection"]
  risk_profile: "Guaranteed"
  liquidity: "Low"
  time_horizon: "Medium"
  minimum_age: 18
  maximum_age: 45
  suitable_for:
    - "Borrowers with a loan whose outstanding balance declines over time and who want cover that broadly tracks that balance"
    - "Online buyers with loan tenors of 5-30 years who can choose Single or Limited premium"
    - "Borrowers who want to align the cover schedule to an expected loan interest rate between 6% and 12%"
  not_suitable_for:
    - "Buyers who need level life cover; this plan's cover decreases every year"
    - "Anyone whose loan is already covered by another credit-life policy"
    - "Buyers wanting savings, maturity, surrender or loan value"
    - "Buyers needing cover below ₹50 lakh, entry after age 45, or cover beyond age 75"
  key_tradeoffs:
    - "Cover reduces each year and may not match the actual outstanding loan, because the schedule assumes equated yearly repayment at the chosen rate irrespective of actual repayments"
    - "Minimum BSA is ₹50 lakh and there is no Regular premium option"
    - "No maturity or surrender value; only Unexpired Risk Premium Value in specified cases"
    - "The loan interest rate chosen for the schedule is not necessarily the rate charged by the lender"
  decision_flags: ["credit_life", "decreasing_sum_assured", "loan_linked", "online_only", "no_regular_premium", "minimum_50l_sum_assured", "no_maturity_benefit", "no_surrender_value", "smoker_rates"]

calculation_inputs:
  required_inputs: ["age", "gender", "smoking_status", "basic_sum_assured", "policy_term", "premium_paying_term", "loan_interest_rate", "mode"]
  optional_inputs: ["early_loan_repayment"]
  rate_table_available: false
  formulas:
    sum_assured_on_death_limited: "max(1.05 * total_premiums_paid, risk_cover_schedule[policy_year])"
    sum_assured_on_death_single: "risk_cover_schedule[policy_year]"
    risk_cover_schedule: "BSA * ((1 + r)^n - (1 + r)^(y - 1)) / ((1 + r)^n - 1), where r is the chosen annual interest rate, n is the policy term and y is the policy year"
    maturity_benefit: "0"
    surrender_value: "0"
    unexpired_risk_premium_value: "Per Policy Document Part D Condition 4; not reproduced in the brochure"
  assumptions:
    - "At inception the scheduled Sum Assured on Death equals the Basic Sum Assured."
    - "The schedule is based on an equated yearly repayment basis at the chosen rate, regardless of the actual loan repayment schedule."
    - "The derived amortisation formula reproduces the brochure's sample schedule at 8% for a 25-year term; verify each quote against LIC's official Risk Cover Schedule."
    - "Annualized premium excludes taxes, extra premiums and modal loadings; total premiums paid excludes extra premiums and taxes."

sources:
  - name: "Customer Information Sheet (CIS), 01-10-2024"
    url: "https://licindia.in/documents/20121/1243736/CIS_Digi+Credit+Life.pdf/59316e1b-bd7a-1324-b8d8-41c85766c9fc?t=1728124364508"
  - name: "Sales Brochure, October 2024"
    url: "https://licindia.in/documents/20121/1243736/LIC_Digi+Credit_Sales+Brochure_4+inch+x+9+inch_Eng.pdf/57715740-ba0f-8e2d-6188-0b5bfee6d873?t=1729742472911"
  - name: "Policy Document (linked from the official product page)"
    url: "https://licindia.in/documents/20121/1243736/Policy+Document_Digi+Credit+Life_CC.pdf/e41289c6-019a-c17f-081e-469d0f93394e?t=1728050234197"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-digi-credit-life-878-512n358v01"
---
# LIC's Digi Credit Life — Plan 878

**One-line summary:** An online-only, non-participating credit-life term plan whose death cover starts at the Basic Sum Assured and reduces each year on a schedule tied to a chosen loan interest rate, designed to protect a borrower's family against loan repayment.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 878 |
| UIN | 512N358V01 |
| Product type | Non-par, non-linked, individual pure risk decreasing term plan |
| Status | Active |
| Entry age | 18 to 45 years (last birthday) |
| Maturity age | 23 to 75 years (last birthday) |
| Policy term | 5-30 years (varies by PPT) |
| Premium paying term | Limited 5/10/15 or Single |
| Minimum sum assured | ₹50,00,000 |
| Maximum sum assured | ₹5,00,00,000 (higher case by case) |
| Minimum premium | ₹3,000 per instalment (Limited); ₹11,000 single |
| Modes | Yearly, half-yearly |
| Official page | https://licindia.in/web/guest/lic-s-digi-credit-life-878-512n358v01 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 45 years (last birthday) |
| Minimum maturity age | 23 years (last birthday) |
| Maximum maturity age | 75 years (last birthday) |
| Minimum Basic Sum Assured | ₹50,00,000 |
| Maximum Basic Sum Assured | ₹5,00,00,000; higher on a case-by-case basis |
| BSA multiples | ₹1 lakh for ₹50-75 lakh; ₹25 lakh for above ₹75 lakh to ₹1.5 crore; ₹50 lakh for above ₹1.5-4 crore; ₹1 crore above ₹4 crore |
| Policy term — Single | 5 to 30 years |
| Policy term — Limited PPT 5 | 10 to 30 years |
| Policy term — Limited PPT 10 | 15 to 30 years |
| Policy term — Limited PPT 15 | 25 to 30 years |
| Premium paying term | 5, 10 or 15 years, or single premium; no Regular premium |

The plan is a pure decreasing term assurance. The policyholder chooses the BSA, policy term and a loan interest rate of 6%, 7%, 8%, 9%, 10%, 11% or 12%. LIC builds a Risk Cover Schedule showing the Sum Assured on Death for each policy year.

## Premiums and sum assured

- **Modes:** yearly and half-yearly for Limited premium; single premium is a lump sum.
- **Minimum instalment premium:** ₹3,000 for Limited premium policies.
- **Minimum single premium:** ₹11,000.
- **Basic Sum Assured:** ₹50 lakh to ₹5 crore, in the band multiples above.
- **Premium determinants:** entry age, gender, smoking status, policy term, PPT, BSA, chosen loan interest rate and mode.
- **Half-yearly factor:** 0.51 × annual premium.
- **Smoker/non-smoker:** two rate categories; non-smoker rates depend on a urinary cotinine test.
- **Women:** special rates are available.

There is no full published rate table. The brochure gives sample premiums and a sample Risk Cover Schedule; LIC's online calculator and underwriting produce the actual quote.

### Illustrative premiums

BSA ₹50 lakh, loan interest rate 8%, non-smoker male standard life, policy term 25 years, annual premium in ₹, exclusive of taxes:

| Age | Single | Limited PPT 15 | Limited PPT 10 | Limited PPT 5 |
|---:|---:|---:|---:|---:|
| 20 | 34,550 | 3,800 | 4,800 | 8,050 |
| 30 | 45,500 | 4,900 | 6,250 | 10,500 |
| 40 | 88,750 | 9,250 | 11,900 | 20,300 |

### High sum assured rebate

Rebate as a percentage of tabular annual or single premium:

| Age band and payment type | ₹50 lakh-<₹1 crore | ₹1-<₹2 crore | ₹2-<₹5 crore | ₹5 crore+ |
|---|---|---:|---:|---:|
| Limited premium, up to 30 | Nil | 15% | 26% | 33% |
| Limited premium, 31-45 | Nil | 14% | 25% | 32% |
| Single premium, up to 30 | Nil | 15% | 27% | 34% |
| Single premium, 31-45 | Nil | 14% | 25% | 33% |

## Benefits

### Death benefit

On death during the policy term while the policy is in force, the Sum Assured on Death is payable:

- **Limited premium:** higher of 105% of total premiums paid to date or the absolute amount in the Risk Cover Schedule.
- **Single premium:** the absolute amount in the Risk Cover Schedule.

At inception the scheduled amount equals the Basic Sum Assured. It then reduces each policy year on an equated yearly repayment basis at the chosen interest rate, regardless of the actual loan repayment. The scheduled death benefit may therefore be higher or lower than the actual outstanding loan.

The brochure's sample Risk Cover Schedule (policy term 25 years, loan interest rate 8%) is shown below as ₹ per ₹1,000 of Basic Sum Assured:

| Policy year | Sum assured | Policy year | Sum assured | Policy year | Sum assured |
|---:|---:|---:|---:|---:|---:|
| 1 | 1,000.00 | 11 | 801.84 | 21 | 374.03 |
| 2 | 986.32 | 12 | 772.31 | 22 | 310.28 |
| 3 | 971.55 | 13 | 740.42 | 23 | 241.42 |
| 4 | 955.59 | 14 | 705.97 | 24 | 167.05 |
| 5 | 938.36 | 15 | 668.77 | 25 | 86.74 |
| 6 | 919.75 | 16 | 628.59 | | |
| 7 | 899.65 | 17 | 585.20 | | |
| 8 | 877.95 | 18 | 538.34 | | |
| 9 | 854.50 | 19 | 487.73 | | |
| 10 | 829.19 | 20 | 433.07 | | |

### Maturity benefit

No maturity benefit is payable if the life assured survives to the end of the policy term.

### Riders and options

No riders are available. If the loan is repaid early, the life assured may surrender the insurance cover (receiving any Unexpired Risk Premium Value) or continue the policy until the end of the term. If death occurs during the remaining term, the death benefit is paid to the nominee as per the Risk Cover Schedule.

## Charges and optional benefits

| Item | Amount |
|---|---|
| Premium allocation / fund management / policy administration | Not applicable; this is a non-linked pure risk plan with no fund |
| Half-yearly modal factor | 0.51 × annual premium (about 2% loading) |
| High sum assured rebate | Nil to 34% of tabular premium, by age band, BSA band and payment type |
| Women's rates | Special rates, as published by LIC |
| Smoker rates | Higher than non-smoker rates; non-smoker status depends on urinary cotinine test |
| Rider premium | Not applicable; no riders |
| Taxes | Extra, as applicable from time to time |

The premium is the risk premium; no separate allocation or administration charge is disclosed in the brochure.

## Surrender, loan, paid-up and revival

- **Surrender:** no surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime) and Limited premium (PPT 5 after 2 consecutive years of full premiums; PPT 10/15 after 3 consecutive years).
- **Loan:** not available.
- **Paid-up:** not available; there is no paid-up value.
- **Revival:** a lapsed policy may be revived within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and satisfaction of continued insurability.
- **Revival interest:** for 1 May 2024 to 30 April 2025 the rate is 9.50% p.a. compounding half-yearly. Future rates are capped at the 10-year G-Sec yield plus 3% or the non-linked non-par fund yield plus 1%, whichever is higher.
- **Lapse:** if not revived within the revival period, the policy terminates and any URV is paid.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly and half-yearly premiums.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months of commencement of risk or revival, the nominee receives 80% of total premiums paid, excluding extra premiums and taxes. For a single-premium policy, the nominee receives 80% of the single premium.
- **Lapsed policy:** the suicide clause does not apply because nothing is payable under a lapsed policy.
- **Waiting/lien period:** not applicable.
- **Schedule versus loan:** the death benefit follows the Risk Cover Schedule, not the actual outstanding loan. It can be higher or lower than the loan balance.
- **Misstatement or suppression:** the policy may be voided under Section 45 of the Insurance Act, 1938; premiums may be refunded in the circumstances set out in that section.
- **Claim admissibility:** the death benefit requires the policy to be in force and the claim to be admissible.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Section 80C or Section 10(10D). Premiums are exclusive of statutory taxes, which are collected separately over and above the premium and are not counted in benefit calculations. Confirm current tax treatment with a tax adviser; it depends on prevailing law and the policy's premium/sum-assured relationship.

## Suitability and decision notes

**Best suited to:** borrowers who have taken a loan and want a life cover that starts at the loan amount and reduces over the loan tenor. It is particularly relevant where the lender or borrower wants the cover to broadly follow an equated yearly repayment schedule, and for online buyers comfortable with a Single or Limited premium structure.

**Poor fit for:** anyone who needs level cover, whose loan is already insured, who wants savings or maturity value, or who needs a sum assured below ₹50 lakh. It is also unsuitable for entry after age 45 or cover beyond age 75.

**Key trade-offs:** the cover decreases each year and may not match the actual outstanding loan, because the schedule assumes equated yearly repayments at the chosen rate irrespective of the real repayment pattern. The plan has no Regular premium option and no maturity or surrender value, and the chosen schedule rate need not equal the lender's rate.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-45 last birthday; drives rate and maximum term |
| Gender | Yes | Women have special rates |
| Smoking status | Yes | Non-smoker rates require urinary cotinine test |
| Basic Sum Assured | Yes | ₹50 lakh to ₹5 crore; band multiples apply |
| Policy term | Yes | 5-30 years, subject to PPT |
| Premium paying term | Yes | Limited 5/10/15 or Single; no Regular |
| Loan interest rate | Yes | 6%, 7%, 8%, 9%, 10%, 11% or 12%; builds the Risk Cover Schedule |
| Mode | Yes | Yearly or half-yearly for Limited premium |
| Early loan repayment | Optional | Surrender the cover or continue the policy |

Core formulas:

```text
Risk Cover Schedule (year y)
  = BSA × ((1 + r)^n − (1 + r)^(y − 1)) / ((1 + r)^n − 1)
    r = chosen annual interest rate (0.06 to 0.12)
    n = policy term in years
    y = policy year (1 to n)

Death benefit, Limited premium
  = max(1.05 × total_premiums_paid, schedule[y])

Death benefit, Single premium
  = schedule[y]

Maturity benefit = 0
Surrender value  = 0
URV              = per Policy Document Part D Condition 4
```

The schedule formula reproduces the brochure's sample values at 8% for a 25-year term (year 1 = 1,000.00; year 25 = 86.74 per ₹1,000 of BSA).

## Source documents

- [Customer Information Sheet (CIS), 01-10-2024](https://licindia.in/documents/20121/1243736/CIS_Digi+Credit+Life.pdf/59316e1b-bd7a-1324-b8d8-41c85766c9fc?t=1728124364508)
- [Sales Brochure, October 2024](https://licindia.in/documents/20121/1243736/LIC_Digi+Credit_Sales+Brochure_4+inch+x+9+inch_Eng.pdf/57715740-ba0f-8e2d-6188-0b5bfee6d873?t=1729742472911)
- [Policy Document](https://licindia.in/documents/20121/1243736/Policy+Document_Digi+Credit+Life_CC.pdf/e41289c6-019a-c17f-081e-469d0f93394e?t=1728050234197)
- [Official product page](https://licindia.in/web/guest/lic-s-digi-credit-life-878-512n358v01)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; the policy document prevails over this summary.*
