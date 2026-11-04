---
plan_number: 887
plan_name: "LIC's Bima Kavach"
uin: "512N360V01"
insurer: "Life Insurance Corporation of India"
category: "Term"
product_type: "Non-Par, Non-linked, Life, Individual, Pure Risk Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-bima-kavach"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 65
  entry_age_notes: "18 to 65 years (last birthday). Proposals above age 60 are considered case by case under LIC's Board-approved underwriting policy and reinsurer acceptance."
  maturity_age_max: 100
  maturity_age_notes: "Minimum age at maturity 28 years; maximum 100 years (last birthday), i.e. cover ceasing age."
  policy_terms_years: "Single premium: 10-82 years. Limited PPT 5: minimum 10 years. Limited PPT 10: minimum 15 years. Limited PPT 15: minimum 20 years. Regular: minimum 10 years. All maximum terms are subject to maturity age 100."
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 82
  premium_paying_terms_years: [5, 10, 15, "Regular (same as policy term)", "Single"]
  ppt_min_years: 5
  ppt_max_years: 82
  ppt_term_pairs: "Single: term 10-82. Limited PPT 5: term 10 years to age 100. Limited PPT 10: term 15 years to age 100. Limited PPT 15: term 20 years to age 100. Regular: term 10 years to age 100."
  min_sum_assured: "₹2,00,00,000"
  max_sum_assured: "No limit, subject to LIC's Board-approved underwriting policy."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated in the brochure. The ₹2 crore minimum Basic Sum Assured effectively sets the premium floor. Only yearly and half-yearly modes are offered for Regular and Limited premium."
  max_premium: "No explicit maximum; subject to the maximum sum assured and underwriting."

premium:
  modes: ["Yearly", "Half-yearly"]
  frequency_loadings: "Half-yearly modal premium is 2% above the annual equivalent; yearly nil."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option I (Level Sum Assured); BSA ₹2 crore; non-smoker male standard life; policy term 20 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular: 12600
          limited_ppt_15: 14800
          limited_ppt_10: 19200
          limited_ppt_5: 33000
          single: 134600
        - age: 30
          regular: 19000
          limited_ppt_15: 22200
          limited_ppt_10: 28800
          limited_ppt_5: 50000
          single: 204800
        - age: 40
          regular: 43600
          limited_ppt_15: 50800
          limited_ppt_10: 66600
          limited_ppt_5: 115600
          single: 475800
    - basis: "Option II (Increasing Sum Assured); BSA ₹2 crore; non-smoker male standard life; policy term 20 years; annual premium in ₹, exclusive of taxes"
      rows:
        - age: 20
          regular: 17200
          limited_ppt_15: 20000
          limited_ppt_10: 26200
          limited_ppt_5: 45400
          single: 185600
        - age: 30
          regular: 28200
          limited_ppt_15: 33000
          limited_ppt_10: 43200
          limited_ppt_5: 75000
          single: 307800
        - age: 40
          regular: 68600
          limited_ppt_15: 80200
          limited_ppt_10: 105400
          limited_ppt_5: 183200
          single: 754800
  premium_formula: "Premium depends on entry age, gender, smoking status, policy term, PPT, death benefit option and mode. LIC's calculator and underwriting quote the exact premium; the published figures are illustrative samples only."
  notes: "High sum assured rebate applies as a percentage of tabular annual or single premium. An online-sale rebate of 7.50% applies to Regular/Limited premiums and 3.00% to Single premium when the proposal is completed online without an agent or intermediary. Women have special rates; non-smoker rates depend on a urinary cotinine test."

benefits:
  death_benefit: "On death during the policy term while the policy is in force, Sum Assured on Death is payable. For Regular and Limited premium: highest of 7 × annualized premium, 105% of total premiums paid to date, or the absolute amount assured to be paid on death. For Single premium: higher of 125% of single premium or the absolute amount assured. The absolute amount is the Basic Sum Assured under Option I (Level), or the stepped amount under Option II (Increasing); under Option I it is increased by any Life Stage Option additions."
  death_benefit_formula: "regular/limited: max(7 * annualized_premium, 1.05 * total_premiums_paid, absolute_sum_assured); single: max(1.25 * single_premium, absolute_sum_assured); absolute_sum_assured = BSA (Option I, plus life-stage additions) or BSA * min(2, 1 + 0.10 * max(0, min(policy_year - 5, 10))) (Option II)"
  maturity_benefit: "No maturity benefit is payable on survival to the end of the policy term."
  maturity_benefit_formula: "0"
  survival_benefits: []
  guaranteed_benefits: "The death benefit is fixed and guaranteed at issue. The plan is non-participating and does not share in surplus or receive bonuses."
  non_guaranteed_benefits: "None."
  riders: ["LIC's Accident Benefit Rider (UIN: 512B203V03)"]
  other_benefits:
    - "Life Stage Option: with Option I and Regular premium, increase BSA on marriage (+50%, max ₹2 crore) and on the first and second child (+25% each, max ₹1 crore each)."
    - "Death benefit instalment option: receive the claim over 5, 10 or 15 years, with minimum instalments of ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly or ₹50,000 yearly."
    - "Accident Benefit Rider: accidental-death cover during the premium paying term or to age 70, whichever is earlier, subject to a ₹100 lakh aggregate limit across LIC policies."
    - "Online-sale rebate of 7.50% on Regular/Limited premium and 3.00% on Single premium."
    - "No maturity, surrender, loan or paid-up value."

policy_features:
  loan: false
  surrender: true
  surrender_terms: "No surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime during the term) and Limited premium (PPT 5 after 2 consecutive years of full premiums; PPT 10/15 after 3 consecutive years). Regular premium pays nothing. The URV formula is in Policy Document Part D Condition 4."
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
  maximum_age: 65
  suitable_for:
    - "Buyers who need a large cover of ₹2 crore or more and can commit to a long policy term"
    - "Younger buyers (entry age up to 40) who expect marriage or children and want to increase cover at those life stages"
    - "Buyers who want cover running to age 100, with Regular, Limited or Single premium"
    - "Offline and online buyers who value an optional accident rider"
  not_suitable_for:
    - "Buyers who need cover below ₹2 crore; the minimum sum assured is high"
    - "Budget-constrained buyers who need a small, simple term plan"
    - "Anyone wanting maturity, savings, surrender or loan value"
    - "Buyers who cannot commit to premiums over a long term or who need entry after age 65"
  key_tradeoffs:
    - "The ₹2 crore minimum BSA makes this unsuitable for small-ticket protection"
    - "Cover to age 100 can mean a very long premium commitment, and premiums rise steeply with age"
    - "Life Stage Option is restricted to Option I with Regular premium and entry age up to 40"
    - "Pure protection only: no maturity or surrender value"
  decision_flags: ["pure_term", "minimum_2cr_sum_assured", "coverage_to_100", "life_stage_option", "accident_rider", "offline_and_online", "no_surrender_value", "suicide_exclusion_12m"]

calculation_inputs:
  required_inputs: ["age", "gender", "smoking_status", "basic_sum_assured", "policy_term", "premium_paying_term", "death_benefit_option", "mode"]
  optional_inputs: ["life_stage_events", "accident_rider", "death_benefit_instalment_option", "online_sale"]
  rate_table_available: false
  formulas:
    sum_assured_on_death_regular: "max(7 * annualized_premium, 1.05 * total_premiums_paid, absolute_sum_assured)"
    sum_assured_on_death_single: "max(1.25 * single_premium, absolute_sum_assured)"
    absolute_sum_assured_option_i: "basic_sum_assured + life_stage_additions"
    absolute_sum_assured_option_ii: "basic_sum_assured * min(2, 1 + 0.10 * max(0, min(policy_year - 5, 10)))"
    life_stage_marriage: "+50% of original BSA, capped at ₹2 crore"
    life_stage_first_child: "+25% of original BSA, capped at ₹1 crore"
    life_stage_second_child: "+25% of original BSA, capped at ₹1 crore"
    maturity_benefit: "0"
    surrender_value: "0"
    unexpired_risk_premium_value: "Per Policy Document Part D Condition 4; not reproduced in the brochure"
  assumptions:
    - "The policy must be in force and the claim admissible for the death benefit to be payable."
    - "Life Stage additions are available only with Option I and Regular premium, for entry age up to 40 and standard underwriting."
    - "Additional life-stage premiums are based on attained age and outstanding policy term, using the premium table in force at original issue and the rebates/loadings applicable at inception."
    - "Illustrative premiums are for a non-smoker male standard life with BSA ₹2 crore and a 20-year term; they are not a rate table."

sources:
  - name: "Customer Information Sheet (CIS), 28-11-2025"
    url: "https://licindia.in/documents/20121/1325029/CIS_LICs+Bima+Kavach_CC.pdf/6408d480-cf6e-6810-d6a5-fd78ac94ff3f?t=1764741696732"
  - name: "Sales Brochure, 03-12-2025"
    url: "https://licindia.in/documents/20121/1319704/LIC+Bima+Kavach+Sales+Brochure+Eng_03122025.pdf/a0ae7d5a-b525-a092-e144-4d126cea600f?t=1764759792848"
  - name: "Policy Document (linked from the official product page)"
    url: "https://licindia.in/documents/20121/1385382/Policy+Document_LIC%27s+Bima+Kavach_CC.pdf/35a6c872-3f62-7e37-c487-05e3102da336?t=1764741637024"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-bima-kavach"
---
# LIC's Bima Kavach — Plan 887

**One-line summary:** A non-participating pure term plan for large covers of ₹2 crore and above, with level or increasing death benefit, cover up to age 100, an optional life-stage increase and an optional accident rider.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 887 |
| UIN | 512N360V01 |
| Product type | Non-par, non-linked, individual pure risk term plan |
| Status | Active |
| Entry age | 18 to 65 years (last birthday; above 60 case by case) |
| Maturity age | 28 to 100 years (last birthday) |
| Policy term | Single 10-82 years; Limited/Regular minimum 10/15/20 years, up to age 100 |
| Premium paying term | Regular, Limited 5/10/15, Single |
| Minimum sum assured | ₹2,00,00,000 |
| Maximum sum assured | No limit, subject to underwriting |
| Minimum premium | Not specified; set by the ₹2 crore minimum BSA |
| Modes | Yearly, half-yearly |
| Official page | https://licindia.in/web/guest/lic-s-bima-kavach |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 65 years (last birthday); above 60 case by case |
| Minimum maturity age | 28 years (last birthday) |
| Maximum maturity age | 100 years (last birthday) |
| Minimum Basic Sum Assured | ₹2,00,00,000 |
| Maximum Basic Sum Assured | No limit, subject to LIC's underwriting policy |
| BSA multiples | ₹5 lakh for ₹2 crore to ₹2.75 crore; ₹25 lakh above ₹2.75 crore |
| Policy term — Single | 10 to 82 years |
| Policy term — Limited PPT 5 | 10 years to age 100 |
| Policy term — Limited PPT 10 | 15 years to age 100 |
| Policy term — Limited PPT 15 | 20 years to age 100 |
| Policy term — Regular | 10 years to age 100 |
| Death benefit options | Level Sum Assured (Option I) or Increasing Sum Assured (Option II) |

The plan can be bought offline through agents, corporate agents, brokers and insurance marketing firms, or online through LIC's website.

## Premiums and sum assured

- **Modes:** yearly and half-yearly for Regular and Limited premium; single premium is a lump sum.
- **Minimum premium:** not stated in the brochure. The ₹2 crore minimum BSA effectively sets the floor.
- **Basic Sum Assured:** ₹2 crore and above, in the band multiples above.
- **Premium determinants:** entry age, gender, smoking status, policy term, PPT, death benefit option and mode.
- **Half-yearly loading:** 2% over the annual equivalent.
- **Smoker/non-smoker:** two rate categories; non-smoker rates depend on a urinary cotinine test.
- **Women:** special rates are available.
- **Online sale:** 7.50% rebate on tabular Regular/Limited premium; 3.00% on Single premium.

There is no full published rate table. The brochure gives sample premiums only; LIC's calculator and underwriting produce the actual quote.

### Illustrative premiums

Option I (Level Sum Assured), BSA ₹2 crore, non-smoker male standard life, policy term 20 years, annual premium in ₹, exclusive of taxes:

| Age | Regular | Limited PPT 15 | Limited PPT 10 | Limited PPT 5 | Single |
|---:|---:|---:|---:|---:|---:|
| 20 | 12,600 | 14,800 | 19,200 | 33,000 | 1,34,600 |
| 30 | 19,000 | 22,200 | 28,800 | 50,000 | 2,04,800 |
| 40 | 43,600 | 50,800 | 66,600 | 1,15,600 | 4,75,800 |

Option II (Increasing Sum Assured), same basis:

| Age | Regular | Limited PPT 15 | Limited PPT 10 | Limited PPT 5 | Single |
|---:|---:|---:|---:|---:|---:|
| 20 | 17,200 | 20,000 | 26,200 | 45,400 | 1,85,600 |
| 30 | 28,200 | 33,000 | 43,200 | 75,000 | 3,07,800 |
| 40 | 68,600 | 80,200 | 1,05,400 | 1,83,200 | 7,54,800 |

### High sum assured rebate

Rebate as a percentage of tabular annual or single premium:

| Option and age band | ₹2-<₹3 crore | ₹3-<₹5 crore | ₹5-<₹10 crore | ₹10 crore+ |
|---|---|---:|---:|---:|
| Option I, 18-35 | Nil | 2.25% | 3.50% | 4.00% |
| Option I, 36-55 | Nil | 1.75% | 2.50% | 3.25% |
| Option I, 56 and above | Nil | 1.25% | 2.00% | 2.50% |
| Option II, 18-35 | Nil | 2.00% | 3.00% | 3.50% |
| Option II, 36-55 | Nil | 1.50% | 2.00% | 2.50% |
| Option II, 56 and above | Nil | 1.00% | 1.50% | 2.00% |

## Benefits

### Death benefit

On death during the policy term while the policy is in force, the Sum Assured on Death is payable:

- **Regular and Limited premium:** highest of 7 × annualized premium, 105% of total premiums paid to date, or the absolute amount assured to be paid on death.
- **Single premium:** higher of 125% of the single premium or the absolute amount assured.

The absolute amount assured is:

- **Option I — Level Sum Assured:** equal to BSA, plus any Life Stage Option additions.
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

### Life Stage Option

Available only with Option I (Level) and Regular premium, for entry age up to 40 and standard underwriting. The life assured can increase the BSA on:

| Life stage event | Increase | Maximum increase |
|---|---|---|
| Marriage (once) | 50% of BSA at inception | ₹2 crore |
| Live birth of first child | 25% of BSA at inception | ₹1 crore |
| Live birth of second child | 25% of BSA at inception | ₹1 crore |

Only two child increases are allowed in total, even for twins or triplets. The attained age must be 45 or below at the policy anniversary from which the increase takes effect, the request must be made within 6 months of the event, and the outstanding term must be at least the minimum term for Regular premium at original issue. No further medical underwriting is required, but supporting documents are. The additional premium is based on attained age and outstanding term, using the original premium table and the rebates/loadings applicable at inception. The increase cannot be withdrawn once made.

### Riders and options

**LIC's Accident Benefit Rider (UIN: 512B203V03)** is available with Regular and Limited premium, provided the outstanding PPT of the base plan and rider is at least 5 years and the policy anniversary has not reached age 65 (nearer birthday). Rider cover lasts during the PPT or to age 70, whichever is earlier. On accidental death, the rider sum assured is paid in lump sum with the base death benefit. The aggregate accident benefit sum assured across all LIC policies on the same life cannot exceed ₹100 lakh (excluding the additional ₹100 lakh available under LIC's Jeevan Shiromani). Rider premium cannot exceed 30% of the base premium.

The death benefit instalment option lets the life assured elect, during his or her lifetime, to receive all or part of the claim over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The brochure's illustrative interest rate for instalments commencing between 1 May 2025 and 30 April 2026 is 4.62% p.a. effective.

## Charges and optional benefits

| Item | Amount |
|---|---|
| Premium allocation / fund management / policy administration | Not applicable; this is a non-linked pure risk plan with no fund |
| Half-yearly modal loading | 2% of tabular annual premium (yearly nil) |
| High sum assured rebate | Nil to 4.00% of tabular premium, by option, age band and BSA band |
| Online-sale rebate | 7.50% for Regular/Limited premium; 3.00% for Single premium |
| Accident Benefit Rider premium | Additional; cannot exceed 30% of base premium |
| Life Stage Option premium | Additional, based on attained age and outstanding term |
| Taxes | Extra, as applicable from time to time |

The premium is the risk premium; no separate allocation or administration charge is disclosed in the brochure.

## Surrender, loan, paid-up and revival

- **Surrender:** no surrender value. On surrender, Unexpired Risk Premium Value (URV), if any, is payable for Single premium (anytime) and Limited premium (PPT 5 after 2 consecutive years of full premiums; PPT 10/15 after 3 consecutive years). Regular premium policies pay nothing.
- **Loan:** not available.
- **Paid-up:** not available; there is no paid-up value.
- **Revival:** a lapsed policy may be revived within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and satisfaction of continued insurability.
- **Revival interest:** for 1 May 2025 to 30 April 2026 the rate is 9.50% p.a. compounding half-yearly. Future rates are capped at the 10-year G-Sec yield plus 3% or the non-linked non-par fund yield plus 1%, whichever is higher.
- **Lapse:** if not revived within the revival period, the policy terminates. Regular premium pays nothing; Limited premium pays URV if full premiums were paid for at least 2 years (PPT below 10 years) or 3 years (PPT 10 years or more).
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly and half-yearly premiums.

## Exclusions and conditions

- **Suicide:** if the life assured commits suicide within 12 months of commencement of risk or revival, the nominee receives 80% of total premiums paid, excluding extra premiums, rider premiums and taxes. For a single-premium policy, the nominee receives 80% of the single premium.
- **Lapsed policy:** the suicide clause does not apply because nothing is payable under a lapsed policy.
- **Waiting/lien period:** not applicable.
- **Life Stage Option conditions:** only Option I with Regular premium, entry age up to 40, standard underwriting, attained age up to 45, request within 6 months, and the policy must be in force. LIC may decline an increase under its underwriting policy.
- **Misstatement or suppression:** the policy may be voided under Section 45 of the Insurance Act, 1938; premiums may be refunded in the circumstances set out in that section.
- **Claim admissibility:** the death benefit requires the policy to be in force and the claim to be admissible.

## Tax treatment

The CIS and brochure do not state income-tax benefits under Section 80C or Section 10(10D). Premiums are exclusive of statutory taxes, which are collected separately over and above the premium and are not counted in benefit calculations. Confirm current tax treatment with a tax adviser; it depends on prevailing law and the policy's premium/sum-assured relationship.

## Suitability and decision notes

**Best suited to:** buyers who need a large death cover of ₹2 crore or more and can commit to a long policy term, including cover running to age 100. It suits younger buyers who expect marriage or children and want to raise cover at those events, and buyers who value an optional accident rider and offline or online purchase.

**Poor fit for:** buyers who need less than ₹2 crore of cover, budget-constrained buyers, anyone wanting savings or maturity value, and buyers who cannot commit to a long premium-paying period or who need entry after age 65.

**Key trade-offs:** the ₹2 crore minimum BSA makes this a high-cover product rather than a mass-market term plan. Cover to age 100 can mean a very long commitment and steeply rising premiums with age. The Life Stage Option is narrowly restricted, and the plan has no maturity or surrender value.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 18-65 last birthday; above 60 case by case |
| Gender | Yes | Women have special rates |
| Smoking status | Yes | Non-smoker rates require urinary cotinine test |
| Basic Sum Assured | Yes | Minimum ₹2 crore; no upper limit subject to underwriting |
| Policy term | Yes | 10-82 years for Single; 10/15/20 years minimum for Limited/Regular, up to age 100 |
| Premium paying term | Yes | Regular, Limited 5/10/15, or Single |
| Death benefit option | Yes | Level (Option I) or Increasing (Option II); fixed at inception |
| Mode | Yes | Yearly or half-yearly |
| Life stage events | Optional | Marriage, first child, second child; Option I + Regular only |
| Accident Benefit Rider | Optional | Subject to age, PPT and ₹100 lakh aggregate limit |
| Online sale | Optional | 7.50% or 3.00% rebate depending on payment type |

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
  = BSA + life_stage_additions

Absolute sum assured, Option II
  = BSA × min(2, 1 + 0.10 × max(0, min(policy_year − 5, 10)))

Life-stage addition (marriage)     = min(0.50 × original BSA, ₹2 crore)
Life-stage addition (first child)  = min(0.25 × original BSA, ₹1 crore)
Life-stage addition (second child) = min(0.25 × original BSA, ₹1 crore)

Maturity benefit = 0
Surrender value  = 0
URV              = per Policy Document Part D Condition 4
```

## Source documents

- [Customer Information Sheet (CIS), 28-11-2025](https://licindia.in/documents/20121/1325029/CIS_LICs+Bima+Kavach_CC.pdf/6408d480-cf6e-6810-d6a5-fd78ac94ff3f?t=1764741696732)
- [Sales Brochure, 03-12-2025](https://licindia.in/documents/20121/1319704/LIC+Bima+Kavach+Sales+Brochure+Eng_03122025.pdf/a0ae7d5a-b525-a092-e144-4d126cea600f?t=1764759792848)
- [Policy Document](https://licindia.in/documents/20121/1385382/Policy+Document_LIC%27s+Bima+Kavach_CC.pdf/35a6c872-3f62-7e37-c487-05e3102da336?t=1764741637024)
- [Official product page](https://licindia.in/web/guest/lic-s-bima-kavach)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; the policy document prevails over this summary.*
