---
plan_number: 954
plan_name: "LIC's New Tech-Term"
uin: "512N351V02"
insurer: "Life Insurance Corporation of India"
category: "Term"
product_type: "Non-Par, Non-Linked, Life, Individual, Pure Risk Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-new-tech-term-954-512n351v01"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 65
  entry_age_notes: "18 to 65 years (last birthday)."
  maturity_age_max: 80
  maturity_age_notes: "Maximum age at maturity 80 years (last birthday). No minimum maturity age is stated."
  policy_terms_years: "10-40 years under Level Sum Assured (Option I), subject to maturity age 80. Under Increasing Sum Assured (Option II), the maximum term is 31-40 years depending on entry age and BSA band."
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 40
  premium_paying_terms_years: "Regular (same as policy term); Limited = policy term minus 5 years (term 10-40); Limited = policy term minus 10 years (term 15-40); Single"
  ppt_min_years: 5
  ppt_max_years: 40
  ppt_term_pairs: "Regular: PPT equals term. Limited term-minus-5: term 10-40. Limited term-minus-10: term 15-40. Single: lump sum. All terms are subject to maturity age 80."
  min_sum_assured: "₹50,00,000"
  max_sum_assured: "No limit, subject to LIC's Board-approved underwriting policy."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: 3000
    yearly: 3000
  min_premium_notes: "Minimum instalment premium ₹3,000 for Regular/Limited premium policies; minimum single premium ₹30,000. Only yearly and half-yearly modes are offered."
  max_premium: "No explicit maximum; subject to the maximum sum assured and underwriting."

premium:
  modes: ["Yearly", "Half-yearly"]
  frequency_loadings: "Half-yearly modal loading is 2% of the tabular annual premium; yearly nil."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: 3000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option I (Level Sum Assured); BSA ₹1 crore; non-smoker male standard life; policy term 20 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular: 7047
          limited_ppt_term_minus_5: 8091
          limited_ppt_term_minus_10: 10266
          single: 75603
        - age: 30
          regular: 9135
          limited_ppt_term_minus_5: 10527
          limited_ppt_term_minus_10: 13572
          single: 100833
        - age: 40
          regular: 17889
          limited_ppt_term_minus_5: 20737
          limited_ppt_term_minus_10: 26878
          single: 203187
    - basis: "Option II (Increasing Sum Assured); BSA ₹1 crore; non-smoker male standard life; policy term 20 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular: 9345
          limited_ppt_term_minus_5: 10769
          limited_ppt_term_minus_10: 13795
          single: 102617
        - age: 30
          regular: 13083
          limited_ppt_term_minus_5: 15219
          limited_ppt_term_minus_10: 19669
          single: 147562
        - age: 40
          regular: 27846
          limited_ppt_term_minus_5: 32396
          limited_ppt_term_minus_10: 42224
          single: 320684
  premium_formula: "Premium depends on entry age, gender, smoking status, policy term, PPT, death benefit option and mode. LIC's online calculator quotes the exact premium; the published figures are illustrative samples only."
  notes: "High sum assured rebate applies as a percentage of tabular annual or single premium. Women have special rates; non-smoker rates depend on a urinary cotinine test. Single premium minimum is ₹30,000."

benefits:
  death_benefit: "On death during the policy term while the policy is in force, Sum Assured on Death is payable. For Regular and Limited premium: highest of 7 × annualized premium, 105% of total premiums paid to date, or the absolute amount assured to be paid on death. For Single premium: higher of 125% of single premium or the absolute amount assured. The absolute amount is the Basic Sum Assured under Option I (Level) and the stepped amount under Option II (Increasing)."
  death_benefit_formula: "regular/limited: max(7 * annualized_premium, 1.05 * total_premiums_paid, absolute_sum_assured); single: max(1.25 * single_premium, absolute_sum_assured); absolute_sum_assured = BSA for Option I, or BSA * min(2, 1 + 0.10 * max(0, min(policy_year - 5, 10))) for Option II"
  maturity_benefit: "No maturity benefit is payable on survival to the end of the policy term."
  maturity_benefit_formula: "0"
  survival_benefits: []
  guaranteed_benefits: "The death benefit is fixed and guaranteed at issue. The plan is non-participating and does not share in surplus or receive bonuses."
  non_guaranteed_benefits: "None."
  riders: ["LIC's Accident Benefit Rider (UIN: 512B203V03)"]
  other_benefits:
    - "Accident Benefit Rider: accidental-death cover during the premium paying term or to age 70, whichever is earlier; rider sum assured cannot exceed 3× the base BSA."
    - "Death benefit instalment option: receive the claim over 5, 10 or 15 years, with minimum instalments of ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly or ₹50,000 yearly."
    - "Increasing Sum Assured option: cover rises by 10% of BSA each year from policy year 6 to year 15, reaching 2× BSA, then remains at 2× BSA."
    - "High sum assured rebate and special rates for women."
    - "No maturity, surrender, loan or paid-up value."

policy_features:
  loan: false
  surrender: true
  surrender_terms: "No surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime during the term) and Limited premium (after 2 consecutive years if PPT is below 10 years, or 3 consecutive years if PPT is 10 years or more). Regular premium pays nothing. The URV formula is in Policy Document Part D Condition 4."
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
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: nominee receives 80% of total premiums paid (80% of single premium for a single-premium policy), excluding taxes, extra premiums and rider premiums. Lapsed policy: nothing payable."
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
  maximum_age: 65
  suitable_for:
    - "Online buyers aged 18-65 who need a large pure death cover of ₹50 lakh or more"
    - "Buyers who want a level or increasing sum assured with a term of up to 40 years"
    - "Buyers who want Regular, Limited or Single premium and an optional accident rider"
    - "Non-smokers and women, who may qualify for lower rates"
  not_suitable_for:
    - "Buyers who need cover below ₹50 lakh; the minimum sum assured is high"
    - "Anyone wanting maturity, savings, surrender or loan value"
    - "Buyers who need cover beyond age 80"
    - "Buyers who want face-to-face advice; this plan is online-only"
  key_tradeoffs:
    - "Pure protection only: no maturity benefit and no surrender value"
    - "Minimum BSA of ₹50 lakh and a 40-year maximum term with maturity capped at 80"
    - "Exact premiums are not published as a rate table; LIC's calculator and underwriting determine the quote"
    - "Under the Increasing option, the maximum term is reduced for some age and BSA combinations"
  decision_flags: ["pure_term", "online_only", "minimum_50l_sum_assured", "increasing_sum_assured", "accident_rider", "no_surrender_value", "suicide_exclusion_12m", "smoker_rates"]

calculation_inputs:
  required_inputs: ["age", "gender", "smoking_status", "basic_sum_assured", "policy_term", "premium_paying_term", "death_benefit_option", "mode"]
  optional_inputs: ["accident_rider", "death_benefit_instalment_option", "women_rate"]
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
    - "Illustrative premiums are for a non-smoker male standard life with BSA ₹1 crore and a 20-year term; they are not a rate table."

sources:
  - name: "Customer Information Sheet (CIS), 19-11-2024"
    url: "https://licindia.in/documents/20121/1243736/CIS+_New+Tech+Term_V02.pdf/d9dca1e6-c360-8a1d-2aa3-284126e855ae?t=1732265279868"
  - name: "Sales Brochure, March 2025"
    url: "https://licindia.in/documents/20121/290753/LIC_New+Tech+Term_Sales+Brochure_4+inch+x+9+inch_Eng+%282%29.pdf/d75b9948-b9e3-2ba1-9886-066a1bee6909?t=1741085687365"
  - name: "Policy Document (linked from the official product page)"
    url: "https://licindia.in/documents/20121/1243736/Policy+document_LIC%27s_New+Tech-Term_V02.pdf/0880e486-f66a-4d65-6c4b-9bc45253de0e?t=1732264536744"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-new-tech-term-954-512n351v01"
---
# LIC's New Tech-Term — Plan 954

**One-line summary:** An online-only, non-participating pure term plan with level or increasing death cover, a ₹50 lakh minimum sum assured, terms up to 40 years and maturity capped at age 80.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 954 |
| UIN | 512N351V02 |
| Product type | Non-par, non-linked, individual pure risk term plan |
| Status | Active |
| Entry age | 18 to 65 years (last birthday) |
| Maturity age | Maximum 80 years (last birthday) |
| Policy term | 10-40 years (Level); 31-40 years (Increasing, age/BSA dependent) |
| Premium paying term | Regular, Limited (term minus 5 or term minus 10), Single |
| Minimum sum assured | ₹50,00,000 |
| Maximum sum assured | No limit, subject to underwriting |
| Minimum premium | ₹3,000 per instalment (Regular/Limited); ₹30,000 single |
| Modes | Yearly, half-yearly |
| Official page | https://licindia.in/web/guest/lic-s-new-tech-term-954-512n351v01 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 65 years (last birthday) |
| Maximum maturity age | 80 years (last birthday) |
| Minimum Basic Sum Assured | ₹50,00,000 |
| Maximum Basic Sum Assured | No limit, subject to underwriting |
| BSA multiples | ₹5 lakh for ₹50-75 lakh; ₹25 lakh above ₹75 lakh |
| Policy term — Level (Option I) | 10 to 40 years, subject to maturity age 80 |
| Policy term — Increasing (Option II) | 31 to 40 years, depending on entry age and BSA band |
| Premium paying term | Regular (same as term); Limited (term minus 5 or term minus 10); Single |

Under Option II, the maximum term table is age- and BSA-band-specific. For Regular/Limited premium with BSA ₹50 lakh to below ₹1 crore, the maximum is 40 years at ages 18-27, 35 years at ages 28-36, 33 years at ages 37-42, and 40 years at ages 43-65, all subject to maturity age 80. With BSA ₹1 crore and above, the maximum is 40 years, subject to maturity age 80. Under Single premium with BSA ₹50 lakh to below ₹1 crore, the maximum is 40 years at ages 18-24, 35 years at ages 25-27, 31 years at ages 28-46, and 40 years at ages 47-65. With BSA ₹1 crore to below ₹2 crore, it is 40 years at ages 18-28, 38 years at ages 29-30, and 40 years at ages 31-65. With BSA ₹2 crore and above, it is 40 years, all subject to maturity age 80.

## Premiums and sum assured

- **Modes:** yearly and half-yearly for Regular and Limited premium; single premium is a lump sum.
- **Minimum instalment premium:** ₹3,000 for Regular and Limited premium policies.
- **Minimum single premium:** ₹30,000.
- **Basic Sum Assured:** ₹50 lakh and above; ₹5 lakh multiples up to ₹75 lakh, then ₹25 lakh multiples.
- **Premium determinants:** entry age, gender, smoking status, policy term, PPT, death benefit option and mode.
- **Half-yearly loading:** 2% of tabular annual premium.
- **Smoker/non-smoker:** two rate categories; non-smoker rates depend on a urinary cotinine test.
- **Women:** special rates are available.

There is no full published rate table. The brochure gives sample premiums only; LIC's online calculator and underwriting produce the actual quote.

### Illustrative premiums

Option I (Level Sum Assured), BSA ₹1 crore, non-smoker male standard life, policy term 20 years, annual premium in ₹, exclusive of taxes:

| Age | Regular | Limited PPT 15 (term minus 5) | Limited PPT 10 (term minus 10) | Single |
|---:|---:|---:|---:|---:|
| 20 | 7,047 | 8,091 | 10,266 | 75,603 |
| 30 | 9,135 | 10,527 | 13,572 | 1,00,833 |
| 40 | 17,889 | 20,737 | 26,878 | 2,03,187 |

Option II (Increasing Sum Assured), same basis:

| Age | Regular | Limited PPT 15 (term minus 5) | Limited PPT 10 (term minus 10) | Single |
|---:|---:|---:|---:|---:|
| 20 | 9,345 | 10,769 | 13,795 | 1,02,617 |
| 30 | 13,083 | 15,219 | 19,669 | 1,47,562 |
| 40 | 27,846 | 32,396 | 42,224 | 3,20,684 |

### High sum assured rebate

Rebate as a percentage of tabular annual or single premium:

| Option and age band | Below ₹1 crore | ₹1-<₹2 crore | ₹2 crore and above |
|---|---|---:|---:|
| Option I, up to 30 | Nil | 13% | 22% |
| Option I, 31-50 | Nil | 11% | 17% |
| Option I, 51 and above | Nil | 6% | 9% |
| Option II, up to 30 | Nil | 11% | 20% |
| Option II, 31-50 | Nil | 9% | 15% |
| Option II, 51 and above | Nil | 5% | 8% |

## Benefits

### Death benefit

On death during the policy term while the policy is in force, the Sum Assured on Death is payable:

- **Regular and Limited premium:** highest of 7 × annualized premium, 105% of total premiums paid to date, or the absolute amount assured to be paid on death.
- **Single premium:** higher of 125% of the single premium or the absolute amount assured.

The absolute amount assured is:

- **Option I — Level Sum Assured:** equal to the Basic Sum Assured throughout the term.
- **Option II — Increasing Sum Assured:** BSA for years 1-5; 10% of BSA added each year from year 6 to year 15, reaching 2× BSA; then level at 2× BSA from year 16.

| Policy year | Absolute amount assured (Option II) |
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

**LIC's Accident Benefit Rider (UIN: 512B203V03)** is available with Regular and Limited premium, provided the outstanding PPT is at least 5 years. Rider cover lasts during the PPT or to the policy anniversary at age 70 (nearest birthday), whichever is earlier. On accidental death, the rider sum assured is paid in lump sum with the base death benefit. Rider premium cannot exceed 30% of the base premium, and the accident benefit sum assured cannot exceed 3× the base BSA.

The death benefit instalment option lets the life assured elect, during his or her lifetime, to receive all or part of the claim over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The brochure's illustrative interest rate for instalments commencing between 1 May 2024 and 30 April 2025 is 5.07% p.a. effective.

## Charges and optional benefits

| Item | Amount |
|---|---|
| Premium allocation / fund management / policy administration | Not applicable; this is a non-linked pure risk plan with no fund |
| Half-yearly modal loading | 2% of tabular annual premium (yearly nil) |
| High sum assured rebate | Nil to 22% of tabular premium, by option, age band and BSA band |
| Accident Benefit Rider premium | Additional; cannot exceed 30% of base premium |
| Taxes | Extra, as applicable from time to time |

The premium is the risk premium; no separate allocation or administration charge is disclosed in the brochure.

## Surrender, loan, paid-up and revival

- **Surrender:** no surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime) and Limited premium (after 2 consecutive years if PPT is below 10 years, or 3 consecutive years if PPT is 10 years or more). Regular premium policies pay nothing.
- **Loan:** not available.
- **Paid-up:** not available; there is no paid-up value.
- **Revival:** a lapsed policy may be revived within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and satisfaction of continued insurability.
- **Revival interest:** for 1 May 2024 to 30 April 2025 the rate is 9.50% p.a. compounding half-yearly. Future rates are capped at the 10-year G-Sec yield plus 3% or the non-linked non-par fund yield plus 1%, whichever is higher.
- **Lapse:** if not revived within the revival period, the policy terminates. Regular premium pays nothing; Limited premium receives the surrender amount described in the brochure.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly and half-yearly premiums.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months of commencement of risk or revival, the nominee receives 80% of total premiums paid, excluding taxes, extra premiums and rider premiums. For a single-premium policy, the nominee receives 80% of the single premium.
- **Lapsed policy:** the suicide clause does not apply because nothing is payable under a lapsed policy.
- **Waiting/lien period:** not applicable.
- **Misstatement or suppression:** the policy may be voided under Section 45 of the Insurance Act, 1938; premiums may be refunded in the circumstances set out in that section.
- **Claim admissibility:** the death benefit requires the policy to be in force and the claim to be admissible.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Section 80C or Section 10(10D). Premiums are exclusive of statutory taxes, which are collected separately over and above the premium and are not counted in benefit calculations. Confirm current tax treatment with a tax adviser; it depends on prevailing law and the policy's premium/sum-assured relationship.

## Suitability and decision notes

**Best suited to:** online buyers aged 18-65 who need a large pure death cover and want a term of up to 40 years, with a choice of level or increasing cover and Regular, Limited or Single premium. It also suits buyers who want an optional accident rider and may qualify for women's or non-smoker rates.

**Poor fit for:** buyers who need less than ₹50 lakh of cover, anyone wanting savings or maturity value, buyers who need cover beyond age 80, and buyers who want an adviser-led purchase.

**Key trade-offs:** the plan is protection-only with no maturity or surrender value. The ₹50 lakh minimum BSA narrows the market, and the Increasing option reduces the maximum term for some age and BSA combinations. Exact premiums must come from LIC's calculator, and the plan is online-only.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-65 last birthday; drives rate and maximum term |
| Gender | Yes | Women have special rates |
| Smoking status | Yes | Non-smoker rates require urinary cotinine test |
| Basic Sum Assured | Yes | Minimum ₹50 lakh; no upper limit subject to underwriting |
| Policy term | Yes | 10-40 years for Level; 31-40 years for Increasing |
| Premium paying term | Yes | Regular, Limited (term minus 5 or term minus 10), or Single |
| Death benefit option | Yes | Level (Option I) or Increasing (Option II); fixed at inception |
| Mode | Yes | Yearly or half-yearly |
| Accident Benefit Rider | Optional | Outstanding PPT at least 5 years; rider SA up to 3× BSA |
| Death benefit instalment option | Optional | 5, 10 or 15 years; minimum instalments apply |

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

- [Customer Information Sheet (CIS), 19-11-2024](https://licindia.in/documents/20121/1243736/CIS+_New+Tech+Term_V02.pdf/d9dca1e6-c360-8a1d-2aa3-284126e855ae?t=1732265279868)
- [Sales Brochure, March 2025](https://licindia.in/documents/20121/290753/LIC_New+Tech+Term_Sales+Brochure_4+inch+x+9+inch_Eng+%282%29.pdf/d75b9948-b9e3-2ba1-9886-066a1bee6909?t=1741085687365)
- [Policy Document](https://licindia.in/documents/20121/1243736/Policy+document_LIC%27s_New+Tech-Term_V02.pdf/0880e486-f66a-4d65-6c4b-9bc45253de0e?t=1732264536744)
- [Official product page](https://licindia.in/web/guest/lic-s-new-tech-term-954-512n351v01)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; the policy document prevails over this summary.*
