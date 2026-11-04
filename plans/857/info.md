---
plan_number: 857
plan_name: "LIC's Jeevan Akshay-VII"
uin: "512N337V07"
insurer: "Life Insurance Corporation of India"
category: "Annuity"
product_type: "Non-Par, Non-Linked, Single Premium, Individual Immediate Annuity Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-jeevan-akshay-vii-plan-no.-857-uin-512n337v07-"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 25
  entry_age_max: 100
  entry_age_notes: "Minimum 25 years completed. Maximum 85 years completed, except Option F, which allows up to 100 years completed. For joint life, both annuitants must satisfy the applicable age limits."
  maturity_age_max: null
  maturity_age_notes: "Not applicable — immediate annuity has no maturity benefit."
  policy_terms_years: "Not applicable — immediate annuity for life"
  policy_term_kind: "life_annuity"
  policy_term_min_years: null
  policy_term_max_years: null
  premium_paying_terms_years: "Single premium"
  ppt_min_years: null
  ppt_max_years: null
  ppt_term_pairs: "Not applicable"
  min_sum_assured: "Not applicable — annuity plan; see minimum purchase price"
  max_sum_assured: "Not applicable — annuity plan; maximum purchase price is no limit"
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "Minimum purchase price is ₹10,00,000 for entry age 25-29 and ₹1,00,000 for age 30 and above, subject to the minimum annuity. Minimum annuity is ₹1,000 monthly, ₹3,000 quarterly, ₹6,000 half-yearly or ₹12,000 yearly. For Divyangjan the minimum purchase price is ₹50,000 with no minimum annuity and no reduction factor; for NPS subscribers PFRDA rules apply."
  max_premium: "No limit, subject to underwriting"
  min_purchase_price: 100000
  max_purchase_price: "No limit, subject to underwriting"
  min_purchase_price_age_25_to_29: 1000000
  min_purchase_price_divyangjan: 50000
  min_annuity_by_mode:
    monthly: 1000
    quarterly: 3000
    half_yearly: 6000
    yearly: 12000
  annuity_options_count: 10
  joint_life_allowed_with: "Lineal descendant/ascendant of a family (grandparent, parent, children, grandchildren), spouse, or siblings"

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly"]
  frequency_loadings: "No modal conversion factor table is published; annuity amounts vary by mode and the high-purchase-price incentive is mode-specific."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  min_purchase_price: 100000
  max_purchase_price: "No limit, subject to underwriting"
  rate_table_available: false
  illustrative_premiums:
    - basis: "Purchase price ₹10,00,000; yearly mode; annuitant age 60, secondary annuitant age 55 for joint life; exclusive of taxes"
      figures:
        - {option: "A", annual_annuity: 86100}
        - {option: "B", annual_annuity: 85500}
        - {option: "C", annual_annuity: 84000}
        - {option: "D", annual_annuity: 81800}
        - {option: "E", annual_annuity: 79200}
        - {option: "F", annual_annuity: 64000}
        - {option: "G", annual_annuity: 68700}
        - {option: "H", annual_annuity: 79600}
        - {option: "I", annual_annuity: 74000}
        - {option: "J", annual_annuity: 63300}
    - basis: "High purchase price incentive: absolute addition to the annual annuity rate per ₹1,000 of purchase price (₹)"
      figures:
        - {mode: "Yearly", band_5l_to_9_99l: 2.40, band_10l_to_24_99l: 3.40, band_25l_to_99_99l: 3.90, band_1cr_plus: 4.15}
        - {mode: "Half-yearly", band_5l_to_9_99l: 2.30, band_10l_to_24_99l: 3.30, band_25l_to_99_99l: 3.80, band_1cr_plus: 4.05}
        - {mode: "Quarterly", band_5l_to_9_99l: 2.25, band_10l_to_24_99l: 3.25, band_25l_to_99_99l: 3.75, band_1cr_plus: 4.00}
        - {mode: "Monthly", band_5l_to_9_99l: 2.20, band_10l_to_24_99l: 3.20, band_25l_to_99_99l: 3.70, band_1cr_plus: 3.95}
    - basis: "Reduction factor applied to the annuity rate for purchase prices below ₹1,50,000 (₹ per ₹1,000 purchase price); not applicable to Divyangjan"
      figures:
        - {purchase_price: "Less than ₹1,00,000", reduction_factor: 5.40}
        - {purchase_price: "₹1,00,000 to ₹1,49,999", reduction_factor: 2.40}
  incentives:
    existing_policyholder: "0.15% increase in tabular annuity rate"
    online_new_customer: "2.00% below ₹10,00,000; 2.50% at ₹10,00,000 and above"
    online_existing_policyholder: "2.15% below ₹10,00,000; 2.50% at ₹10,00,000 and above"
    nps_subscriber: "3.00%"
    incentive_notes: "Only one of online new-customer, online existing-policyholder or NPS incentive may be chosen."
  premium_formula: "Annuity = purchase price × (tabular annuity rate for option, age and mode + high-purchase-price incentive per ₹1,000 purchase price) × (1 + applicable percentage incentive), less any reduction factor where the purchase price is below ₹1,50,000. Annuity rates are guaranteed at inception."
  notes: "The sample table is for a purchase price of ₹10,00,000, age 60, yearly mode and does not include incentives. Taxes are excluded."

benefits:
  death_benefit: "Option A: none. Options B-E: if death occurs during the 5/10/15/20-year guaranteed period, the annuity continues to the nominee to the end of that period; nothing after. Option F: 100% of purchase price. Option G: none. Option H: 50% of the annuity to the surviving secondary annuitant; nothing on the last death. Option I: 100% of the annuity to the survivor; nothing on the last death. Option J: 100% of the purchase price on the death of the last survivor."
  death_benefit_formula: "Option A/G: 0. Options B-E: remaining guaranteed annuity instalments to the nominee. Option F: purchase_price. Option H: 50% of annuity to secondary; 0 on last death. Option I: 100% of annuity to survivor; 0 on last death. Option J: purchase_price on last death."
  maturity_benefit: "Not applicable — there is no maturity benefit under this plan."
  maturity_benefit_formula: "Not applicable"
  survival_benefits:
    - "Options A-G are single-life annuities payable for life, with guaranteed-period, return-of-purchase-price or 3% simple increasing variants as selected."
    - "Options H-J are joint-life annuities: 50% or 100% of the annuity continues to the secondary annuitant, and Option J returns the purchase price on the last death."
  annuity_options:
    - {option: "A", name: "Immediate annuity for life", death_benefit: "None; annuity ceases on death"}
    - {option: "B", name: "Immediate annuity with guaranteed period of 5 years and life thereafter", death_benefit: "Annuity to nominee to end of 5-year guaranteed period"}
    - {option: "C", name: "Immediate annuity with guaranteed period of 10 years and life thereafter", death_benefit: "Annuity to nominee to end of 10-year guaranteed period"}
    - {option: "D", name: "Immediate annuity with guaranteed period of 15 years and life thereafter", death_benefit: "Annuity to nominee to end of 15-year guaranteed period"}
    - {option: "E", name: "Immediate annuity with guaranteed period of 20 years and life thereafter", death_benefit: "Annuity to nominee to end of 20-year guaranteed period"}
    - {option: "F", name: "Immediate annuity for life with return of purchase price", death_benefit: "100% of purchase price"}
    - {option: "G", name: "Immediate annuity for life increasing at 3% simple p.a.", death_benefit: "None; annuity ceases on death"}
    - {option: "H", name: "Joint life immediate annuity, 50% to secondary annuitant", death_benefit: "None; annuity ceases on last death"}
    - {option: "I", name: "Joint life immediate annuity, 100% to survivor", death_benefit: "None; annuity ceases on last death"}
    - {option: "J", name: "Joint life immediate annuity, 100% to survivor, with return of purchase price on last death", death_benefit: "100% of purchase price on death of last survivor"}
  guaranteed_benefits: "Annuity rates are guaranteed at inception. The guaranteed-period, increasing-annuity and return-of-purchase-price features are guaranteed."
  non_guaranteed_benefits: "None — the plan is non-par and all benefits are guaranteed."
  riders: "Not applicable — no riders are available."
  other_benefits:
    - "Death benefit under Options F and J may be taken as lump sum, annuitisation or instalments over 5/10/15 years"
    - "Online, NPS and existing-policyholder incentives"
    - "Special minimum purchase price for Divyangjan and NPS subscribers"
    - "Loan under Options F and J"

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed only under Options F and J, after three months from issue or after free-look expiry, whichever is later. The surrender value depends on the annuitant's age (last birthday) at the time of surrender; no factor table is published. The surrender value is reviewable by LIC. On payment, the policy terminates."
  paid_up: false
  paid_up_terms: "Not applicable — single premium immediate annuity."
  revival: false
  revival_period_years: null
  free_look_days: 30
  grace_period_days:
    yearly: null
    half_yearly: null
    quarterly: null
    monthly_nach: null
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable — no partial withdrawals."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "There are no exclusions under this policy. Standard Section 45 provisions apply to untrue or incorrect statements or withheld material information."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Applicable taxes, including GST, are payable in addition to the purchase price at prevailing rates."
  notes: "The brochure states that statutory taxes are as per tax law and that tax paid is not considered in calculating benefits. It advises consulting a tax adviser for income-tax benefits or implications; no specific treatment is stated."

decision:
  primary_goals: ["retirement"]
  risk_profile: "Guaranteed (non-par)"
  liquidity: "Low"
  time_horizon: "Whole life"
  minimum_age: 25
  maximum_age: 100
  suitable_for:
    - "Retirees who want a guaranteed lifelong annuity with a choice of 10 payout structures"
    - "Couples wanting a joint-life annuity with 50% or 100% continuation to a spouse, sibling or lineal relative"
    - "Buyers who want a guaranteed period, a 3% simple increasing annuity, or return of purchase price on death"
    - "NPS subscribers and families of Divyangjan who need the special purchase-price rules"
  not_suitable_for:
    - "Anyone who may need capital access; surrender is allowed only under Options F and J and depends on age"
    - "Investors seeking inflation protection; only Option G increases, at 3% simple"
    - "Buyers below age 25, or age 25-29 with less than ₹10,00,000 to invest"
    - "People who have not yet accumulated a retirement corpus; this is an immediate annuity"
  key_tradeoffs:
    - "The annuity option cannot be changed after purchase"
    - "Surrender is restricted to Options F and J and has no published factor table"
    - "Level annuities lose purchasing power; the 3% simple increase is below typical inflation"
    - "Return-of-purchase-price and guaranteed-period features reduce the annual annuity compared with life-only options"
    - "Age 25-29 buyers need a minimum purchase price of ₹10,00,000; buyers aged 30+ need ₹1,00,000"
  decision_flags: ["immediate_annuity", "single_premium", "10_annuity_options", "return_of_purchase_price_options", "surrender_option_limited", "loan_limited_options", "no_inflation_indexation", "nps_supported", "divyangjan_supported", "guaranteed"]

calculation_inputs:
  required_inputs: ["age_at_entry", "secondary_age_for_joint_life", "purchase_price", "annuity_option", "annuity_mode"]
  optional_inputs: ["online_purchase", "nps_subscriber", "existing_policyholder", "high_purchase_price_incentive", "reduction_factor"]
  rate_table_available: false
  formulas:
    annuity: "purchase_price × (tabular_annuity_rate(option, age, mode) + high_purchase_price_incentive_per_1000 × purchase_price / 1000) × (1 + percentage_incentive) − reduction_factor_applicable"
    death_benefit_option_b_to_e: "remaining guaranteed annuity instalments to nominee"
    death_benefit_option_f: "purchase_price"
    death_benefit_option_j: "purchase_price on death of last survivor"
    surrender_value: "age-dependent value determined by LIC under Options F and J only"
    maximum_loan: "min(0.80 × surrender_value, 0.50 × annual_annuity / loan_interest_rate)"
  assumptions:
    - "The sample annuity table is for a purchase price of ₹10,00,000, age 60, yearly mode and a secondary annuitant aged 55 for joint life."
    - "The high-purchase-price incentive is an absolute addition per ₹1,000 of purchase price, applied before percentage incentives."
    - "The reduction factor applies only to purchase prices below ₹1,50,000 and not to Divyangjan policies."
    - "Taxes are excluded from all illustrations."

sources:
  - name: "Customer Information Sheet (CIS), 29-07-2025"
    url: "https://licindia.in/documents/20121/1325029/Final+CIS_LIC%27s+Jeevan+Akshay-VII.pdf/74c9b4d7-1f61-bc0e-5339-a6dbd3b02154?t=1754123870790"
  - name: "Sales Brochure, 20-08-2025"
    url: "https://licindia.in/documents/20121/1319704/LIC_Jeevan+Akshay+VII_Sales+Brochure_4+inch+x+9+inch_Eng+_20082025.pdf/a60cff7b-f584-69bb-0b6e-0e5fe4b351a0?t=1755707362869"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1385382/Final+Policy+Document_LIC%27s+Jeevan+Akshay-VII.pdf/9202e87f-7692-d97c-d16b-b11e8cc6baf5?t=1754123838991"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-jeevan-akshay-vii-plan-no.-857-uin-512n337v07-"
---
# LIC's Jeevan Akshay-VII — Plan 857

**One-line summary:** A single-premium immediate annuity with 10 payout options covering life-only, guaranteed-period, return-of-purchase-price, 3% increasing and joint-life annuities.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 857 |
| UIN | 512N337V07 |
| Product type | Non-par, non-linked, single premium, individual immediate annuity |
| Status | Active |
| Entry age | 25 to 85 years (Option F up to 100) |
| Annuity options | 10 options: A-J |
| Mode | Yearly, half-yearly, quarterly or monthly, in arrears |
| Minimum purchase price | ₹10,00,000 for age 25-29; ₹1,00,000 for age 30+, subject to minimum annuity |
| Minimum annuity | ₹1,000/month, ₹3,000/quarter, ₹6,000/half-year, ₹12,000/year |
| Maximum purchase price | No limit, subject to underwriting |
| Surrender | Only under Options F and J |
| Loan | Only under Options F and J |
| Official page | https://licindia.in/en/web/guest/lic-s-jeevan-akshay-vii-plan-no.-857-uin-512n337v07- |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 25 years completed |
| Maximum entry age | 85 years completed; Option F up to 100 years completed |
| Minimum purchase price | ₹10,00,000 for age 25-29; ₹1,00,000 for age 30+, increased to meet minimum annuity |
| Minimum annuity | ₹1,000 monthly; ₹3,000 quarterly; ₹6,000 half-yearly; ₹12,000 yearly |
| Maximum purchase price | No limit, subject to underwriting |
| Joint life | Both lives must satisfy the applicable age limits |
| Joint life relationships | Lineal descendant/ascendant, spouse or siblings |
| POSP-LI/CPSC-SPV | Only Options F and J, entry age 40-70 |
| Divyangjan | Minimum purchase price ₹50,000, no minimum annuity, no reduction factor |
| QROPS | Minimum age 55 |

The annuity option, once chosen, cannot be altered.

## Purchase price and annuity rates

- **Purchase price:** single premium, excluding taxes.
- **Modes:** yearly, half-yearly, quarterly and monthly, in arrears.
- **Annuity rates:** guaranteed at inception. No full age-wise table is published; the sample illustration and the incentive tables below are the published rate data.
- **High purchase price incentive:** an absolute addition to the annual annuity rate per ₹1,000 of purchase price, varying by mode and purchase-price slab.
- **Existing policyholder/nominee:** 0.15% increase in tabular annuity rate.
- **Direct sale:** online new customer 2.00% below ₹10,00,000 and 2.50% at ₹10,00,000+; online existing policyholder 2.15% below ₹10,00,000 and 2.50% at ₹10,00,000+; NPS subscriber 3.00%. Only one incentive may be chosen.
- **Reduction factor:** for purchase prices below ₹1,50,000, the annuity rate is reduced by ₹5.40 per ₹1,000 for purchase prices below ₹1,00,000 and by ₹2.40 per ₹1,000 for ₹1,00,000-₹1,49,999. Not applicable to Divyangjan.

### Illustrative premiums

Sample annual annuities for a purchase price of ₹10,00,000, yearly mode, annuitant age 60 and secondary annuitant age 55, exclusive of taxes:

| Option | Annual annuity |
|---|---:|
| A — Immediate annuity for life | ₹86,100 |
| B — Guaranteed 5 years and life | ₹85,500 |
| C — Guaranteed 10 years and life | ₹84,000 |
| D — Guaranteed 15 years and life | ₹81,800 |
| E — Guaranteed 20 years and life | ₹79,200 |
| F — Life with return of purchase price | ₹64,000 |
| G — Life increasing at 3% simple | ₹68,700 |
| H — Joint life, 50% to secondary | ₹79,600 |
| I — Joint life, 100% to survivor | ₹74,000 |
| J — Joint life, 100% to survivor, return of purchase price | ₹63,300 |

**High purchase price incentive (₹ per ₹1,000 purchase price):**

| Mode | ₹5-9.99 lakh | ₹10-24.99 lakh | ₹25-99.99 lakh | ₹1 crore+ |
|---|---:|---:|---:|---:|
| Yearly | 2.40 | 3.40 | 3.90 | 4.15 |
| Half-yearly | 2.30 | 3.30 | 3.80 | 4.05 |
| Quarterly | 2.25 | 3.25 | 3.75 | 4.00 |
| Monthly | 2.20 | 3.20 | 3.70 | 3.95 |

**Reduction factors for purchase price below ₹1,50,000:**

| Purchase price | Reduction factor (₹ per ₹1,000) |
|---|---:|
| Less than ₹1,00,000 | 5.40 |
| ₹1,00,000 to ₹1,49,999 | 2.40 |

No published rate table; rates are quoted by LIC's calculator/underwriting.

## Benefits

### Annuity options and death benefits

| Option | Annuity description | Death benefit |
|---|---|---|
| A | Immediate annuity for life | None; annuity ceases on death |
| B | Guaranteed 5 years, then life | Annuity to nominee to end of 5-year guaranteed period |
| C | Guaranteed 10 years, then life | Annuity to nominee to end of 10-year guaranteed period |
| D | Guaranteed 15 years, then life | Annuity to nominee to end of 15-year guaranteed period |
| E | Guaranteed 20 years, then life | Annuity to nominee to end of 20-year guaranteed period |
| F | Life with return of purchase price | 100% of purchase price |
| G | Life increasing at 3% simple p.a. | None; annuity ceases on death |
| H | Joint life, 50% to secondary annuitant | None; annuity ceases on last death |
| I | Joint life, 100% to survivor | None; annuity ceases on last death |
| J | Joint life, 100% to survivor, return of purchase price on last death | 100% of purchase price on death of last survivor |

Under Options B-E, if the annuitant dies during the guaranteed period, the annuity is paid to the nominee until the end of that period. After the guaranteed period, nothing is payable on death.

### Maturity benefit

Not applicable. There is no maturity benefit under this plan.

## Optional benefits and riders

- **Riders:** none.
- **Death benefit payment options (Options F and J):** lump sum, annuitisation of the death benefit, or instalments over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The instalment interest rate is 4.62% per annum effective for 1 May 2025 to 30 April 2026.
- **NPS subscribers:** annuity options allowed by PFRDA. A Government Sector NPS subscriber buying the default option gets Option J if a spouse survives, otherwise Option F, with the purchase price later used to buy an annuity for a living dependent parent.
- **Divyangjan:** the plan may be bought for a dependent person with disability, either as Option F on the proposer's life with the death benefit used to buy an annuity for the Divyangjan nominee (where the purchase price is below ₹1,50,000), or as Option I/J with the Divyangjan as secondary annuitant. Minimum purchase price is ₹50,000 with no minimum annuity and no reduction factor.
- **QROPS:** available subject to HMRC rules, with a minimum age of 55.

## Surrender, loan, paid-up and revival

### Surrender

Surrender is allowed only under Options F and J, after three months from issue or after free-look expiry, whichever is later. The surrender value depends on the annuitant's age (last birthday) at the time of surrender. No factor table or formula is published; the value is reviewable by LIC. On payment, the policy terminates and all benefits cease.

### Loan

A loan is available after three months from issue or after free-look expiry, whichever is later, only under Options F and J. The loan must satisfy both: annual interest not exceeding 50% of the annual annuity, and the loan not exceeding 80% of the surrender value. Interest is recovered from annuity payments and the loan is recovered from claim proceeds.

The interest rate for loans commencing between 1 May 2025 and 30 April 2026 is 9.50% per annum compounding half-yearly for the full loan term, based on the 10-year G-Sec rate plus 300 basis points.

### Paid-up, revival, grace and free look

- **Paid-up:** not applicable — single premium immediate annuity.
- **Revival:** not applicable.
- **Grace period:** not applicable.
- **Free look:** 30 days. On cancellation, the purchase price is returned after deducting stamp duty and any annuity paid.

## Exclusions and conditions

- **Exclusions:** there are no exclusions under this policy.
- **Waiting period:** not applicable.
- **Option change:** the annuity option cannot be changed after purchase.
- **Joint life:** only lineal descendant/ascendant, spouse or siblings; both lives must satisfy the age limits.
- **Surrender and loan:** restricted to Options F and J.
- **Forfeiture:** if an untrue or incorrect statement is found, or material information is withheld, the policy is void subject to Section 45 of the Insurance Act, 1938.
- **Taxes:** purchase price excludes taxes, which are payable separately.

## Tax treatment

The brochure states that statutory taxes, including GST, are payable by the policyholder at prevailing rates in addition to the purchase price, and that tax paid is not considered when calculating benefits. It advises consulting a tax adviser for income-tax benefits or implications. The documents do not state the specific income-tax treatment of the purchase price, annuity or death benefit.

## Suitability and decision notes

**Best suited to:** retirees who want a guaranteed lifelong annuity with a choice of 10 payout structures. It fits couples wanting a joint-life annuity with 50% or 100% continuation to a spouse, sibling or lineal relative, and buyers who want a guaranteed period, a 3% simple increasing annuity, or return of purchase price on death. It also accommodates NPS subscribers and families of Divyangjan.

**Poor fit for:** anyone who may need capital access (surrender is allowed only under Options F and J and depends on age), investors seeking inflation protection (only Option G increases, at 3% simple), buyers below age 25 or age 25-29 with less than ₹10,00,000, and people who have not yet accumulated a retirement corpus.

**Key trade-offs:** the annuity option cannot be changed; surrender is restricted and has no published factor table; level annuities lose purchasing power; return-of-purchase-price and guaranteed-period features reduce the annual annuity; and younger buyers face a much higher minimum purchase price.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 25-85; Option F up to 100 |
| Secondary age | For joint life | Both lives must satisfy age limits |
| Purchase price | Yes | ₹10,00,000 for age 25-29; ₹1,00,000 for age 30+ |
| Annuity option | Yes | Options A-J; cannot be changed |
| Annuity mode | Yes | Yearly, half-yearly, quarterly or monthly |
| Online/NPS/existing incentive | Optional | Only one incentive may be chosen |
| High purchase price | Automatic by slab | Absolute addition per ₹1,000 purchase price |
| Reduction factor | If purchase price < ₹1,50,000 | Not applicable to Divyangjan |
| Loan | Optional | Options F and J only |

```text
Annuity                  = purchase_price × (tabular_annuity_rate(option, age, mode)
                           + high_purchase_price_incentive_per_1000 × purchase_price / 1000)
                           × (1 + percentage_incentive) − reduction_factor
Death benefit (B-E)      = remaining guaranteed annuity instalments to nominee
Death benefit (F)        = purchase_price
Death benefit (J)        = purchase_price on last death
Surrender value          = age-dependent value determined by LIC under Options F and J only
Maximum loan             = min(0.80 × surrender_value, 0.50 × annual_annuity / loan_interest_rate)
```

## Source documents

- [Customer Information Sheet (CIS), 29-07-2025](https://licindia.in/documents/20121/1325029/Final+CIS_LIC%27s+Jeevan+Akshay-VII.pdf/74c9b4d7-1f61-bc0e-5339-a6dbd3b02154?t=1754123870790)
- [Sales Brochure, 20-08-2025](https://licindia.in/documents/20121/1319704/LIC_Jeevan+Akshay+VII_Sales+Brochure_4+inch+x+9+inch_Eng+_20082025.pdf/a60cff7b-f584-69bb-0b6e-0e5fe4b351a0?t=1755707362869)
- [Policy Document](https://licindia.in/documents/20121/1385382/Final+Policy+Document_LIC%27s+Jeevan+Akshay-VII.pdf/9202e87f-7692-d97c-d16b-b11e8cc6baf5?t=1754123838991)
- [Official product page](https://licindia.in/en/web/guest/lic-s-jeevan-akshay-vii-plan-no.-857-uin-512n337v07-)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
