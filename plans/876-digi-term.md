---
plan_number: 876
plan_name: "LIC's Digi Term"
uin: "512N356V02"
insurer: "Life Insurance Corporation of India"
category: "Term"
product_type: "Non-Par, Non-Linked, Life, Individual, Pure Risk Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-digi-term-876-512n356v01"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 45
  entry_age_notes: "18 to 45 years (last birthday)."
  maturity_age_max: 75
  maturity_age_notes: "Minimum age at maturity 33 years; maximum 75 years (last birthday)."
  policy_terms_years: "15-40 years under Regular, Single and Limited PPT 10; 20-40 years under Limited PPT 15. Maximum 40 years under Level Sum Assured (Option I), subject to maturity age 75. Under Increasing Sum Assured (Option II), the maximum term depends on entry age and BSA band."
  policy_term_kind: "range"
  policy_term_min_years: 15
  policy_term_max_years: 40
  premium_paying_terms_years: ["Regular (same as policy term)", "Limited 10", "Limited 15", "Single"]
  ppt_min_years: 10
  ppt_max_years: 40
  ppt_term_pairs: "Regular: term 15-40. Limited PPT 10: term 15-40. Limited PPT 15: term 20-40. Single: term 15-40. All subject to maximum maturity age 75."
  min_sum_assured: "₹50,00,000"
  max_sum_assured: "₹5,00,00,000; sums above ₹5 crore may be considered case by case under LIC's Board-approved underwriting policy and reinsurer acceptance."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: 3000
    yearly: 3000
  min_premium_notes: "Minimum instalment premium ₹3,000 for Regular/Limited premium policies; minimum single premium ₹30,000. Only yearly and half-yearly modes are offered."
  max_premium: "No explicit maximum; subject to the maximum sum assured and underwriting."

premium:
  modes: ["Yearly", "Half-yearly"]
  frequency_loadings: "Half-yearly modal premium is 2% above the annual equivalent; yearly nil."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: 3000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option I (Level Sum Assured); BSA ₹50 lakh; non-smoker male standard life; policy term 20 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular: 3600
          limited_ppt_15: 4100
          limited_ppt_10: 5200
          single: 37750
        - age: 30
          regular: 4700
          limited_ppt_15: 5400
          limited_ppt_10: 6950
          single: 50850
        - age: 40
          regular: 9400
          limited_ppt_15: 10850
          limited_ppt_10: 14050
          single: 104900
    - basis: "Option II (Increasing Sum Assured); BSA ₹50 lakh; non-smoker male standard life; policy term 20 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular: 4650
          limited_ppt_15: 5350
          limited_ppt_10: 6850
          single: 50100
        - age: 30
          regular: 6600
          limited_ppt_15: 7650
          limited_ppt_10: 9850
          single: 72950
        - age: 40
          regular: 14400
          limited_ppt_15: 16750
          limited_ppt_10: 21700
          single: 163250
  premium_formula: "Premium depends on entry age, gender, smoking status, policy term, PPT, death benefit option and mode. LIC's online premium calculator quotes the exact premium; the published figures are illustrative samples only."
  notes: "High sum assured rebate applies as a percentage of tabular premium. Women have special rates. Non-smoker rates require a urinary cotinine test; otherwise smoker rates apply. Single premium minimum is ₹30,000."

benefits:
  death_benefit: "On death during the policy term while the policy is in force, Sum Assured on Death is payable. For Regular and Limited premium: highest of 7 × annualized premium, 105% of total premiums paid to date, or the absolute amount assured to be paid on death. For Single premium: higher of 125% of single premium or the absolute amount assured. The absolute amount is the Basic Sum Assured under Option I (Level) and the stepped amount under Option II (Increasing)."
  death_benefit_formula: "regular/limited: max(7 * annualized_premium, 1.05 * total_premiums_paid, absolute_sum_assured); single: max(1.25 * single_premium, absolute_sum_assured); absolute_sum_assured = BSA for Option I, or BSA * min(2, 1 + 0.10 * max(0, min(policy_year - 5, 10))) for Option II"
  maturity_benefit: "No maturity benefit is payable on survival to the end of the policy term."
  maturity_benefit_formula: "0"
  survival_benefits: []
  guaranteed_benefits: "The death benefit is fixed and guaranteed at issue. The plan is non-participating and does not share in surplus or receive bonuses."
  non_guaranteed_benefits: "None."
  riders: []
  other_benefits:
    - "Death benefit instalment option: receive the claim over 5, 10 or 15 years, with minimum instalments of ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly or ₹50,000 yearly."
    - "Increasing Sum Assured option: cover rises by 10% of BSA each year from policy year 6 to year 15, reaching 2× BSA, then remains at 2× BSA."
    - "High sum assured rebate, special rates for women, and separate smoker/non-smoker rate categories."
    - "No maturity, surrender, loan or paid-up value."

policy_features:
  loan: false
  surrender: true
  surrender_terms: "No surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable only for Single premium (anytime during the term) and Limited premium (after at least 3 consecutive years of full premiums). Regular premium pays nothing. The URV formula is in Policy Document Part D Condition 4."
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
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: nominee receives 80% of total premiums paid (80% of single premium for a single-premium policy), excluding extra premiums, rider premiums and taxes. Lapsed policy: nothing payable."
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
  time_horizon: "Long"
  minimum_age: 18
  maximum_age: 45
  suitable_for:
    - "Young to mid-age buyers (18-45) who need a large pure death cover of ₹50 lakh to ₹5 crore at low cost"
    - "Online buyers who want a level or increasing sum assured and a choice of Regular, Limited or Single premium"
    - "Non-smokers and women, who may qualify for lower rates"
  not_suitable_for:
    - "Buyers who need cover below ₹50 lakh; the minimum sum assured is high"
    - "Anyone wanting maturity, savings, surrender or loan value"
    - "Buyers who need cover beyond age 75 or entry after age 45"
    - "Buyers who want face-to-face advice; this plan is online-only"
  key_tradeoffs:
    - "Pure protection only: no maturity benefit and no surrender value"
    - "Minimum BSA of ₹50 lakh and maximum entry age of 45 limit the buyer pool"
    - "Exact premiums are not published as a rate table; LIC's calculator and underwriting determine the quote"
    - "Smokers pay higher rates; non-smoker rates depend on a urinary cotinine test"
  decision_flags: ["pure_term", "online_only", "minimum_50l_sum_assured", "increasing_sum_assured", "no_maturity_benefit", "no_surrender_value", "suicide_exclusion_12m", "smoker_rates"]

calculation_inputs:
  required_inputs: ["age", "gender", "smoking_status", "basic_sum_assured", "policy_term", "premium_paying_term", "death_benefit_option", "mode"]
  optional_inputs: ["death_benefit_instalment_option", "women_rate"]
  rate_table_available: false
  formulas:
    sum_assured_on_death_regular: "max(7 * annualized_premium, 1.05 * total_premiums_paid, absolute_sum_assured)"
    sum_assured_on_death_single: "max(1.25 * single_premium, absolute_sum_assured)"
    absolute_sum_assured_option_i: "basic_sum_assured"
    absolute_sum_assured_option_ii: "basic_sum_assured * min(2, 1 + 0.10 * max(0, min(policy_year - 5, 10)))"
    maturity_benefit: "0"
    surrender_value: "0"
    unexpired_risk_premium_value: "Per Policy Document Part D Condition 4; not reproduced in the brochure"
  assumptions:
    - "The policy must be in force and the claim admissible for the death benefit to be payable."
    - "Annualized premium excludes taxes, rider premiums, underwriting extra premiums and modal loadings."
    - "Total premiums paid excludes extra premiums and taxes."
    - "Illustrative premiums are for a non-smoker male standard life with BSA ₹50 lakh and a 20-year term; they are not a rate table."

sources:
  - name: "Customer Information Sheet (CIS), 19-11-2024"
    url: "https://licindia.in/documents/20121/1243736/CIS+_LIC%27s+Digi+Term_V02.pdf/79767c5c-ef43-8235-3342-7198e872fb3c?t=1732265278643"
  - name: "Sales Brochure, April 2025"
    url: "https://licindia.in/documents/20121/1319704/Digi+Term+-+Sales+Brochure_April+25.pdf/31117c26-5e06-2f66-3c21-d92610e51051?t=1744863655602"
  - name: "Policy Document (linked from the official product page)"
    url: "https://licindia.in/documents/20121/1243736/Policy+Document_LIC%27s_Digi+Term_V02.pdf/0797393b-4ddf-ac11-6cf2-a0fdea86d82c?t=1732264538490"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-digi-term-876-512n356v01"
---
# LIC's Digi Term — Plan 876

**One-line summary:** An online-only, non-participating pure term plan that offers level or increasing death cover from ₹50 lakh to ₹5 crore, with Regular, Limited or Single premium and separate smoker/non-smoker rates.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 876 |
| UIN | 512N356V02 |
| Product type | Non-par, non-linked, individual pure risk term plan |
| Status | Active |
| Entry age | 18 to 45 years (last birthday) |
| Maturity age | 33 to 75 years (last birthday) |
| Policy term | 15-40 years (20-40 for Limited PPT 15) |
| Premium paying term | Regular, Limited 10/15, Single |
| Minimum sum assured | ₹50,00,000 |
| Maximum sum assured | ₹5,00,00,000 (higher case by case) |
| Minimum premium | ₹3,000 per instalment (Regular/Limited); ₹30,000 single |
| Modes | Yearly, half-yearly |
| Official page | https://licindia.in/web/guest/lic-s-digi-term-876-512n356v01 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 45 years (last birthday) |
| Minimum maturity age | 33 years (last birthday) |
| Maximum maturity age | 75 years (last birthday) |
| Minimum Basic Sum Assured | ₹50,00,000 |
| Maximum Basic Sum Assured | ₹5,00,00,000; higher on a case-by-case basis |
| BSA multiples | ₹1 lakh for ₹50-75 lakh; ₹25 lakh for above ₹75 lakh to ₹1.5 crore; ₹50 lakh for above ₹1.5-4 crore; ₹1 crore above ₹4 crore |
| Policy term — Regular / Single / Limited PPT 10 | 15 to 40 years |
| Policy term — Limited PPT 15 | 20 to 40 years |
| Maximum term — Option I (Level) | 40 years, subject to maturity age 75 |
| Maximum term — Option II (Increasing) | Age- and BSA-band-specific; 21 to 40 years under Regular/Limited, 25 to 40 years under Single |

Under Option II, the maximum policy term depends on entry age and BSA band. For Regular/Limited premium the brochure table runs from 21 years (age 40-45, BSA ₹1-2.5 crore) to 40 years (younger ages or BSA ₹5 crore and above). Under Single premium it runs from 25 years (age 34-45, BSA ₹1-2.5 crore) to 40 years. All maximums are subject to maturity age 75.

## Premiums and sum assured

- **Modes:** yearly and half-yearly only (plus single premium).
- **Minimum instalment premium:** ₹3,000 for Regular and Limited premium policies.
- **Minimum single premium:** ₹30,000.
- **Basic Sum Assured:** ₹50 lakh to ₹5 crore, in the band multiples above.
- **Premium determinants:** entry age, gender, smoking status, policy term, PPT, death benefit option and mode.
- **Smoker/non-smoker:** two rate categories. Non-smoker rates apply only if the urinary cotinine test supports it; otherwise smoker rates apply.
- **Women:** special rates are available.
- **Half-yearly loading:** 2% over the annual equivalent.

There is no full published rate table. The brochure gives only the sample premiums below; LIC's online calculator and underwriting produce the actual quote.

### Illustrative premiums

Option I (Level Sum Assured), BSA ₹50 lakh, non-smoker male standard life, policy term 20 years, annual premium in ₹, exclusive of taxes:

| Age | Regular | Limited PPT 15 | Limited PPT 10 | Single |
|---:|---:|---:|---:|---:|
| 20 | 3,600 | 4,100 | 5,200 | 37,750 |
| 30 | 4,700 | 5,400 | 6,950 | 50,850 |
| 40 | 9,400 | 10,850 | 14,050 | 1,04,900 |

Option II (Increasing Sum Assured), same basis:

| Age | Regular | Limited PPT 15 | Limited PPT 10 | Single |
|---:|---:|---:|---:|---:|
| 20 | 4,650 | 5,350 | 6,850 | 50,100 |
| 30 | 6,600 | 7,650 | 9,850 | 72,950 |
| 40 | 14,400 | 16,750 | 21,700 | 1,63,250 |

### High sum assured rebate

Rebate as a percentage of tabular annual or single premium:

| Option and age band | ₹50 lakh-<₹1 crore | ₹1-<₹2 crore | ₹2-<₹5 crore | ₹5 crore+ |
|---|---|---:|---:|---:|
| Option I, Regular/Limited, up to 30 | Nil | 18% | 30% | 37% |
| Option I, Regular/Limited, 31-45 | Nil | 16% | 28% | 33% |
| Option I, Single, up to 30 | Nil | 17% | 27% | 30% |
| Option I, Single, 31-45 | Nil | 15% | 25% | 27% |
| Option II, Regular/Limited, up to 30 | Nil | 16% | 26% | 33% |
| Option II, Regular/Limited, 31-50 | Nil | 14% | 24% | 29% |
| Option II, Single, up to 30 | Nil | 15% | 24% | 27% |
| Option II, Single, 31-45 | Nil | 14% | 23% | 25% |

## Benefits

### Death benefit

On death during the policy term while the policy is in force, the Sum Assured on Death is payable:

- **Regular and Limited premium:** highest of 7 × annualized premium, 105% of total premiums paid to date, or the absolute amount assured to be paid on death.
- **Single premium:** higher of 125% of the single premium or the absolute amount assured.

The absolute amount assured depends on the option chosen at inception and cannot be changed later:

- **Option I — Level Sum Assured:** equal to the Basic Sum Assured throughout the term.
- **Option II — Increasing Sum Assured:** equal to BSA for policy years 1-5; then rises by 10% of BSA each year from year 6 to year 15, reaching 2× BSA; remains at 2× BSA from year 16 onward.

| Policy year | Absolute amount assured |
|---|---|
| 1-5 | 1.00 × BSA |
| 6 | 1.10 × BSA |
| 7 | 1.20 × BSA |
| 8 | 1.30 × BSA |
| 9 | 1.40 × BSA |
| 10 | 1.50 × BSA |
| 11 | 1.60 × BSA |
| 12 | 1.70 × BSA |
| 13 | 1.80 × BSA |
| 14 | 1.90 × BSA |
| 15 and later | 2.00 × BSA |

### Maturity benefit

No maturity benefit is payable if the life assured survives to the end of the policy term.

### Riders and options

No riders are available under this plan; the CIS records riders as "Not Applicable".

The death benefit instalment option lets the life assured elect, during his or her lifetime, to receive all or part of the claim over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. If the net claim is too small to fund the minimum instalment, it is paid in lump sum. The brochure's illustrative interest rate for instalments commencing between 1 May 2024 and 30 April 2025 is 5.07% p.a. effective.

## Charges and optional benefits

| Item | Amount |
|---|---|
| Premium allocation / fund management / policy administration | Not applicable; this is a non-linked pure risk plan with no fund |
| Half-yearly modal loading | 2% of tabular annual premium (yearly nil) |
| High sum assured rebate | Nil to 37% of tabular premium, by option, age band and BSA band |
| Women's rates | Special rates, as published by LIC |
| Smoker rates | Higher than non-smoker rates; non-smoker status depends on urinary cotinine test |
| Rider premium | Not applicable; no riders |
| Taxes | Extra, as applicable from time to time |

The premium is the risk premium; no separate allocation or administration charge is disclosed in the brochure.

## Surrender, loan, paid-up and revival

- **Surrender:** no surrender value is available. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime during the term) and Limited premium (only after at least 3 consecutive years of full premiums). Regular premium policies pay nothing on surrender.
- **Loan:** not available.
- **Paid-up:** not available; there is no paid-up value.
- **Revival:** a lapsed policy may be revived within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and satisfaction of continued insurability.
- **Revival interest:** for 1 May 2024 to 30 April 2025 the rate is 9.50% p.a. compounding half-yearly. Future rates are capped at the 10-year G-Sec yield plus 3% or the non-linked non-par fund yield plus 1%, whichever is higher.
- **Lapse:** Regular premium policies pay nothing if not revived; Limited premium policies pay URV, if any, in the circumstances described above.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly and half-yearly premiums.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months of commencement of risk or revival, the nominee receives 80% of total premiums paid, excluding extra premiums, rider premiums and taxes. For a single-premium policy, the nominee receives 80% of the single premium.
- **Lapsed policy:** the suicide clause does not apply because nothing is payable under a lapsed policy.
- **Waiting/lien period:** not applicable.
- **Misstatement or suppression:** the policy may be voided under Section 45 of the Insurance Act, 1938; premiums may be refunded in the circumstances set out in that section.
- **Claim admissibility:** the death benefit requires the policy to be in force and the claim to be admissible.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Section 80C or Section 10(10D). Premiums are exclusive of statutory taxes, which are collected separately over and above the premium and are not counted in benefit calculations. Confirm current tax treatment with a tax adviser; it depends on prevailing law and the policy's premium/sum-assured relationship.

## Suitability and decision notes

**Best suited to:** buyers aged 18-45 who need a large pure death cover and want to buy online, especially non-smokers and women who may qualify for lower rates. The choice of level or increasing cover and of Regular, Limited or Single premium adds flexibility.

**Poor fit for:** anyone needing cover below ₹50 lakh, anyone wanting savings, maturity or surrender value, buyers who need cover past age 75, and buyers who want an adviser-led purchase.

**Key trade-offs:** the plan is protection-only, so there is no maturity or surrender value; the ₹50 lakh minimum and 45-year maximum entry age narrow the market; and the absence of a published rate table means the exact premium must come from LIC's calculator and underwriting.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-45 last birthday; drives rate and maximum term |
| Gender | Yes | Women have special rates |
| Smoking status | Yes | Non-smoker rates require urinary cotinine test |
| Basic Sum Assured | Yes | ₹50 lakh to ₹5 crore; band multiples apply |
| Policy term | Yes | 15-40 years, subject to PPT and option |
| Premium paying term | Yes | Regular, Limited 10/15, or Single |
| Death benefit option | Yes | Level (Option I) or Increasing (Option II); fixed at inception |
| Mode | Yes | Yearly or half-yearly |
| Death benefit instalment option | Optional | 5, 10 or 15 years; minimum instalments apply |
| Women's rate | Optional | Special rates where applicable |

Core formulas:

```text
Sum Assured on Death (Regular/Limited)
  = max(7 × annualized_premium,
        1.05 × total_premiums_paid,
        absolute_sum_assured)

Sum Assured on Death (Single)
  = max(1.25 × single_premium,
        absolute_sum_assured)

Absolute sum assured, Option I
  = BSA

Absolute sum assured, Option II
  = BSA × min(2, 1 + 0.10 × max(0, min(policy_year − 5, 10)))

Maturity benefit = 0
Surrender value  = 0
URV              = per Policy Document Part D Condition 4
```

## Source documents

- [Customer Information Sheet (CIS), 19-11-2024](https://licindia.in/documents/20121/1243736/CIS+_LIC%27s+Digi+Term_V02.pdf/79767c5c-ef43-8235-3342-7198e872fb3c?t=1732265278643)
- [Sales Brochure, April 2025](https://licindia.in/documents/20121/1319704/Digi+Term+-+Sales+Brochure_April+25.pdf/31117c26-5e06-2f66-3c21-d92610e51051?t=1744863655602)
- [Policy Document](https://licindia.in/documents/20121/1243736/Policy+Document_LIC%27s_Digi+Term_V02.pdf/0797393b-4ddf-ac11-6cf2-a0fdea86d82c?t=1732264538490)
- [Official product page](https://licindia.in/web/guest/lic-s-digi-term-876-512n356v01)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; the policy document prevails over this summary.*
