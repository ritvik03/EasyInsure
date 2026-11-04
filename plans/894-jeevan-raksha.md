---
plan_number: 894
plan_name: "LIC's Jeevan Raksha"
uin: "512N368V01"
insurer: "Life Insurance Corporation of India"
category: "Term"
product_type: "Non-Par, Non-Linked, Life, Individual, Pure Risk Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-jeevan-raksha"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 45
  entry_age_notes: "18 to 45 years (last birthday)."
  maturity_age_max: 60
  maturity_age_notes: "Minimum age at maturity 33 years and maximum 60 years (last birthday)."
  policy_terms_years: "15-42 years for Single, Regular and Limited 10-year PPT; 20-42 years for Limited 15-year PPT; all subject to maturity age 60."
  policy_term_kind: "range"
  policy_term_min_years: 15
  policy_term_max_years: 42
  premium_paying_terms_years: [10, 15, "Regular (same as policy term)", "Single"]
  ppt_min_years: 10
  ppt_max_years: 42
  ppt_term_pairs: "Single: term 15-42. Limited 10-year PPT: term 15-42. Limited 15-year PPT: term 20-42. Regular: term 15-42. All subject to maturity age 60."
  min_sum_assured: "₹5,00,000"
  max_sum_assured: "₹24,00,000 per life, subject to Board-approved underwriting policy. Aggregate BSA across all policies issued to one individual under this plan cannot exceed ₹24,00,000."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: 2000
    yearly: 2000
  min_premium_notes: "Minimum instalment premium ₹2,000 for Regular and Limited premium policies (excluding rider and underwriting extra premium). No minimum single premium is stated."
  max_premium: "No explicit maximum; constrained by the ₹24 lakh BSA cap and underwriting."

premium:
  modes: ["Yearly", "Half-yearly"]
  frequency_loadings: "Half-yearly premium conversion rate is 2% of the annual equivalent premium; yearly nil."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: 2000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Non-smoker male standard life; BSA ₹5,00,000; policy term 20 years; premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular_annual: 2290
          limited_ppt_15: 2555
          limited_ppt_10: 3150
          single: 19035
        - age: 30
          regular_annual: 2730
          limited_ppt_15: 3070
          limited_ppt_10: 3825
          single: 23805
        - age: 40
          regular_annual: 4435
          limited_ppt_15: 5035
          limited_ppt_10: 6390
          single: 41770
  premium_formula: "Premium depends on entry age, gender, smoking status, BSA, policy term and PPT. LIC's calculator or branch quote gives the exact premium; the published figures are illustrative samples only."
  notes: "Two rate categories: non-smoker and smoker. Women have special rates. High sum assured rebate and an online-sale rebate apply as percentages of the tabular premium."

benefits:
  death_benefit: "On death during the policy term after commencement of risk and before maturity, while the policy is in force and the claim is admissible, Sum Assured on Death is payable. For Regular and Limited premium, it is the higher of 7 × annualized premium or the Basic Sum Assured, subject to a floor of 105% of total premiums paid to date. For Single premium, it is the higher of 125% of the single premium or the Basic Sum Assured."
  death_benefit_formula: "regular/limited: max(7 * annualized_premium, basic_sum_assured, 1.05 * total_premiums_paid); single: max(1.25 * single_premium, basic_sum_assured)"
  maturity_benefit: "No maturity benefit is payable on survival to the end of the policy term."
  maturity_benefit_formula: "0"
  survival_benefits: []
  guaranteed_benefits: "The death benefit is fixed and guaranteed at issue. The plan is non-participating and receives no bonuses or surplus share."
  non_guaranteed_benefits: "None."
  riders: ["LIC's Accident Benefit Rider (UIN: 512B203V03)"]
  other_benefits:
    - "Accident Benefit Rider: available with Regular and Limited premium; accidental-death rider sum assured paid in lump sum with the base death benefit."
    - "Death benefit instalment option: receive all or part of the claim over 5, 10 or 15 years, with minimum instalments of ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly or ₹50,000 yearly."
    - "High sum assured rebate and online-sale rebate."
    - "Special premium rates for women."
    - "No maturity, surrender, loan or paid-up value."

policy_features:
  loan: false
  surrender: true
  surrender_terms: "No surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable: Single premium at any time during the term; Limited premium only if full premiums have been paid for at least 3 consecutive years. Regular premium pays nothing. The URV formula is in Policy Document Part D Condition 4."
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
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: 80% of total premiums paid is payable (80% of single premium for a single-premium policy), excluding taxes, extra premiums and rider premiums. Nothing is payable under a lapsed policy."
  waiting_period: "Not applicable."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Statutory taxes are collected separately over and above the premium and are not counted in benefit calculations."
  notes: "The CIS and brochure do not state income-tax benefits or implications; they advise consulting a tax adviser. Tax treatment depends on prevailing law and the policy's premium/sum-assured relationship."

decision:
  primary_goals: ["protection"]
  risk_profile: "Guaranteed"
  liquidity: "Low"
  time_horizon: "Long"
  minimum_age: 18
  maximum_age: 45
  suitable_for:
    - "Buyers aged 18-45 who need a modest pure death cover of ₹5-24 lakh"
    - "Buyers who want a term of 15-42 years ending by age 60"
    - "Buyers who want Single, Regular or Limited (10 or 15 year) premium"
    - "Buyers who want an accident rider and special women's rates"
    - "Buyers who want to purchase either online or through an agent"
  not_suitable_for:
    - "Buyers who need cover above ₹24 lakh; the plan caps aggregate BSA per life"
    - "Anyone wanting cover beyond age 60"
    - "Buyers who want maturity, savings, surrender or loan value"
    - "Buyers who need monthly or quarterly premium modes"
  key_tradeoffs:
    - "Pure protection only: no maturity benefit and no surrender value"
    - "The ₹24 lakh per-life cap makes it unsuitable for high-cover needs"
    - "Maximum maturity age of 60 limits the term for older entrants"
    - "Exact premiums are not published as a rate table; LIC's calculator and underwriting determine the quote"
    - "Only yearly and half-yearly modes are available"
  decision_flags: ["pure_term", "sum_assured_cap_24l", "coverage_to_60", "accident_rider", "no_surrender_value", "suicide_exclusion_12m", "smoker_rates", "offline_and_online"]

calculation_inputs:
  required_inputs: ["age", "gender", "smoking_status", "basic_sum_assured", "policy_term", "premium_paying_term", "mode"]
  optional_inputs: ["accident_rider", "death_benefit_instalment_option", "women_rate"]
  rate_table_available: false
  formulas:
    sum_assured_on_death_regular: "max(7 * annualized_premium, basic_sum_assured, 1.05 * total_premiums_paid)"
    sum_assured_on_death_single: "max(1.25 * single_premium, basic_sum_assured)"
    maturity_benefit: "0"
    surrender_value: "0"
    unexpired_risk_premium_value: "Per Policy Document Part D Condition 4; not reproduced in the brochure"
  assumptions:
    - "The policy must be in force and the claim admissible for the death benefit to be payable."
    - "Annualized premium excludes taxes, rider premiums, underwriting extra premiums and modal loadings."
    - "Total premiums paid excludes extra premiums and taxes."
    - "Illustrative premiums are for a non-smoker male standard life with BSA ₹5 lakh and a 20-year term; they are not a rate table."

sources:
  - name: "Customer Information Sheet (CIS), August 2026"
    url: "https://licindia.in/documents/20121/1860074/Final_CIS_LICs+Jeevan+Raksha.pdf/0499ff64-7b88-34f9-335b-d100931f294d?t=1788330058425"
  - name: "Sales Brochure, October 2026"
    url: "https://licindia.in/documents/20121/1860074/LIC_Jeevan+Raksha_Sales+Brochure_4+inch+x+9+inch_Eng_Single.pdf/2b6234bc-6589-1d57-edc8-ce089c3cdc93?t=1791979449409"
  - name: "Policy Document (linked from the official product page)"
    url: "https://licindia.in/documents/20121/1860074/Final_Policy+Document_LIC%27s+Jeevan+Raksha.pdf/493354b8-4cf9-70e2-0c9a-c953e296c0ce?t=1788330117225"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-jeevan-raksha"
---
# LIC's Jeevan Raksha — Plan 894

**One-line summary:** A non-participating pure term plan for ages 18-45 with ₹5-24 lakh of death cover, terms of 15-42 years ending by age 60, and Single, Regular or Limited premium options.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 894 |
| UIN | 512N368V01 |
| Product type | Non-par, non-linked, individual pure risk term plan |
| Status | Active |
| Entry age | 18 to 45 years (last birthday) |
| Maturity age | 33 to 60 years (last birthday) |
| Policy term | 15-42 years (20-42 for Limited 15-year PPT) |
| Premium paying term | Single, Regular, Limited 10 years, Limited 15 years |
| Minimum sum assured | ₹5,00,000 |
| Maximum sum assured | ₹24,00,000 per life (aggregate cap) |
| Minimum premium | ₹2,000 per instalment (Regular/Limited); single minimum not stated |
| Modes | Yearly, half-yearly |
| Official page | https://licindia.in/web/guest/lic-s-jeevan-raksha |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 45 years (last birthday) |
| Minimum maturity age | 33 years (last birthday) |
| Maximum maturity age | 60 years (last birthday) |
| Minimum Basic Sum Assured | ₹5,00,000 |
| Maximum Basic Sum Assured | ₹24,00,000 per life, subject to underwriting |
| Aggregate BSA cap | ₹24,00,000 across all policies under this plan on one life |
| BSA multiples | ₹50,000 for ₹5-7 lakh; ₹1,00,000 above ₹7 lakh |
| Policy term — Single | 15 to 42 years |
| Policy term — Limited 10-year PPT | 15 to 42 years |
| Policy term — Limited 15-year PPT | 20 to 42 years |
| Policy term — Regular | 15 to 42 years |
| Premium paying term | Single; Limited 10 or 15 years; Regular (same as policy term) |

All maximum terms are subject to the maturity age of 60. There is no separate minimum premium for Single premium policies stated in the official documents.

## Premiums and sum assured

- **Modes:** yearly and half-yearly for Regular and Limited premium; single premium is a lump sum.
- **Minimum instalment premium:** ₹2,000 for Regular and Limited premium policies, excluding rider and underwriting extra premium.
- **Minimum single premium:** not stated in the CIS or brochure.
- **Basic Sum Assured:** ₹5 lakh to ₹24 lakh per life; ₹50,000 multiples from ₹5-7 lakh, ₹1 lakh multiples above ₹7 lakh.
- **Premium determinants:** entry age, gender, smoking status, BSA, policy term and PPT.
- **Half-yearly loading:** 2% of the annual equivalent premium.
- **Smoker/non-smoker:** two rate categories.
- **Women:** special rates are available.

There is no full published rate table. The brochure gives sample premiums only; LIC's calculator or branch quote produces the actual premium.

### Illustrative premiums

Non-smoker male standard life, BSA ₹5,00,000, policy term 20 years, premium in ₹, exclusive of taxes:

| Age | Regular annual | Limited PPT 15 | Limited PPT 10 | Single |
|---:|---:|---:|---:|---:|
| 20 | 2,290 | 2,555 | 3,150 | 19,035 |
| 30 | 2,730 | 3,070 | 3,825 | 23,805 |
| 40 | 4,435 | 5,035 | 6,390 | 41,770 |

### High sum assured rebate

Rebate as a percentage of tabular premium:

| Age band | ₹5-<₹7 lakh | ₹7-<₹10 lakh | ₹10-<₹15 lakh | ₹15-<₹20 lakh | ₹20 lakh+ |
|---|---:|---:|---:|---:|---:|
| Regular/Limited, 18-30 | Nil | 5% | 10% | 15% | 18% |
| Regular/Limited, 31-45 | Nil | 3% | 6% | 10% | 14% |
| Single, 18-30 | Nil | 4% | 9% | 14% | 17% |
| Single, 31-45 | Nil | 2% | 5% | 8% | 11% |

An online-sale rebate of 7.50% of tabular premium applies to Regular/Limited PPTs of 10 years or more, and 3.00% to Single premium, when the proposal is completed online without an agent or intermediary.

## Benefits

### Death benefit

On death during the policy term after commencement of risk and before maturity, while the policy is in force and the claim is admissible, the Sum Assured on Death is payable:

- **Regular and Limited premium:** higher of 7 × annualized premium or the Basic Sum Assured, and not less than 105% of total premiums paid to date.
- **Single premium:** higher of 125% of the single premium or the Basic Sum Assured.

| Component | Regular/Limited | Single |
|---|---|---|
| Multiple of premium | 7 × annualized premium | 125% of single premium |
| Absolute floor | Basic Sum Assured | Basic Sum Assured |
| Statutory floor | 105% of total premiums paid | Not stated |

### Maturity benefit

No maturity benefit is payable if the life assured survives to the end of the policy term.

### Riders and options

**LIC's Accident Benefit Rider (UIN: 512B203V03)** is available with Regular and Limited premium, provided the outstanding PPT of both the base plan and the rider is at least 5 years and the rider is taken before the policy anniversary at which the life assured's age nearer birthday is 55. Cover lasts during the base plan's PPT. On accidental death, the rider sum assured is paid in lump sum with the base death benefit. The rider premium cannot exceed 30% of the base premium, and the rider sum assured cannot exceed 3× the base BSA. The aggregate accident benefit sum assured across all LIC individual and group policies on the same life cannot exceed ₹100 lakh (excluding the additional ₹100 lakh limit under LIC's Jeevan Shiromani).

The death benefit instalment option lets the life assured elect, during his or her lifetime, to receive all or part of the claim over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. If the net claim is too small to provide the minimum instalment, it is paid in lump sum. The brochure's illustrative interest rate for instalments commencing between 1 May 2026 and 30 April 2027 is 5.11% p.a. effective.

## Charges and optional benefits

| Item | Amount |
|---|---|
| Premium allocation / fund management / policy administration | Not applicable; this is a non-linked pure risk plan with no fund |
| Half-yearly modal loading | 2% of annual equivalent premium (yearly nil) |
| High sum assured rebate | Nil to 18%, by age band, BSA band and premium type |
| Online-sale rebate | 7.50% for Regular/Limited PPT of 10-42 years; 3.00% for Single |
| Accident Benefit Rider premium | Additional; cannot exceed 30% of base premium |
| Taxes | Extra, as applicable from time to time |

The premium is the risk premium; no separate allocation or administration charge is disclosed in the brochure.

## Surrender, loan, paid-up and revival

- **Surrender:** no surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable: Single premium at any time during the term; Limited premium only after full premiums have been paid for at least 3 consecutive years; Regular premium pays nothing.
- **Surrender wording difference:** the CIS describes URV for Limited premium after 2 consecutive years where PPT is below 10 years, or 3 years where PPT is 10 years or more. The brochure states 3 consecutive years. Since the only Limited PPTs are 10 and 15 years, the 3-year rule applies in practice and there is no practical conflict.
- **Loan:** not available.
- **Paid-up:** not available; there is no paid-up value.
- **Revival:** a lapsed policy may be revived within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and satisfaction of continued insurability.
- **Revival interest:** for 1 May 2026 to 30 April 2027 the rate is 9.50% p.a. compounding half-yearly. Future rates are capped at the 10-year G-Sec yield plus 3% or the non-linked non-par fund yield plus 1%, whichever is higher.
- **Lapse:** benefits cease after the grace period. If not revived within the revival period, Regular premium policies pay nothing; Limited premium policies that have paid full premiums for at least 3 consecutive years receive URV, if any.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly and half-yearly premiums.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months of commencement of risk or revival, the nominee receives 80% of total premiums paid, excluding taxes, extra premiums and rider premiums. For a single-premium policy, the nominee receives 80% of the single premium.
- **Lapsed policy:** the suicide clause does not apply because nothing is payable under a lapsed policy.
- **Waiting/lien period:** not applicable.
- **Misstatement or suppression:** the policy may be voided under Section 45 of the Insurance Act, 1938; premiums may be refunded in the circumstances set out in that section.
- **Claim admissibility:** the death benefit requires the policy to be in force and the claim to be admissible.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Section 80C or Section 10(10D); they advise consulting a tax adviser. Statutory taxes are collected separately over and above the premium and are not counted in benefit calculations. Confirm current tax treatment before relying on it; it depends on prevailing law and the policy's premium/sum-assured relationship.

## Suitability and decision notes

**Best suited to:** buyers aged 18-45 who need a modest pure death cover of ₹5-24 lakh and want a term ending by age 60, with a choice of Single, Regular or Limited premium and an optional accident rider. It also suits buyers who want the flexibility to buy online or through an agent and may qualify for women's or non-smoker rates.

**Poor fit for:** buyers who need more than ₹24 lakh of cover, anyone wanting cover beyond age 60, buyers who need monthly or quarterly premium modes, and buyers who want savings, maturity or surrender value.

**Key trade-offs:** the plan is protection-only with no maturity or surrender value. The ₹24 lakh per-life cap and the age-60 maturity limit constrain high-cover or late-age needs. Exact premiums must come from LIC's calculator or a branch quote.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-45 last birthday; drives rate and maximum term |
| Gender | Yes | Women have special rates |
| Smoking status | Yes | Non-smoker and smoker rate categories |
| Basic Sum Assured | Yes | ₹5-24 lakh; ₹50,000/₹1 lakh multiples |
| Policy term | Yes | 15-42 years (20-42 for Limited 15-year PPT), subject to maturity 60 |
| Premium paying term | Yes | Single, Limited 10 or 15 years, or Regular |
| Mode | Yes | Yearly or half-yearly |
| Accident Benefit Rider | Optional | Outstanding PPT at least 5 years; before age 55; rider SA up to 3× BSA |
| Death benefit instalment option | Optional | 5, 10 or 15 years; minimum instalments apply |

Core formulas:

```text
Sum Assured on Death (Regular/Limited)
  = max(7 × annualized_premium,
        basic_sum_assured,
        1.05 × total_premiums_paid)

Sum Assured on Death (Single)
  = max(1.25 × single_premium,
        basic_sum_assured)

Maturity benefit = 0
Surrender value  = 0
URV              = per Policy Document Part D Condition 4
```

## Source documents

- [Customer Information Sheet (CIS), August 2026](https://licindia.in/documents/20121/1860074/Final_CIS_LICs+Jeevan+Raksha.pdf/0499ff64-7b88-34f9-335b-d100931f294d?t=1788330058425)
- [Sales Brochure, October 2026](https://licindia.in/documents/20121/1860074/LIC_Jeevan+Raksha_Sales+Brochure_4+inch+x+9+inch_Eng_Single.pdf/2b6234bc-6589-1d57-edc8-ce089c3cdc93?t=1791979449409)
- [Policy Document](https://licindia.in/documents/20121/1860074/Final_Policy+Document_LIC%27s+Jeevan+Raksha.pdf/493354b8-4cf9-70e2-0c9a-c953e296c0ce?t=1788330117225)
- [Official product page](https://licindia.in/web/guest/lic-s-jeevan-raksha)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; the policy document prevails over this summary.*
