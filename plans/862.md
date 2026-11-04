---
plan_number: 862
plan_name: "LIC's Saral Pension"
uin: "512N342V05"
insurer: "Life Insurance Corporation of India"
category: "Annuity"
product_type: "Non-Par, Non-Linked, Single Premium, Individual Immediate Annuity Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-saral-pension"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 40
  entry_age_max: 80
  entry_age_notes: "Minimum 40 years completed; maximum 80 years completed. For joint life (Option II), the spouse is subject to the same minimum and maximum entry ages."
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
  min_premium_notes: "Minimum annuity is ₹1,000 per month, ₹3,000 per quarter, ₹6,000 per half-year or ₹12,000 per year. The minimum purchase price depends on the minimum annuity, the option chosen and the annuitant's age; no fixed minimum purchase price is published."
  max_premium: "No limit on purchase price"
  min_purchase_price: null
  max_purchase_price: "No limit"
  min_annuity_by_mode:
    monthly: 1000
    quarterly: 3000
    half_yearly: 6000
    yearly: 12000
  annuity_options: ["Option I — Life Annuity with Return of 100% of Purchase Price", "Option II — Joint Life Last Survivor Annuity with Return of 100% of Purchase Price on death of the last survivor"]
  joint_life_allowed_with: "Spouse only"

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly"]
  frequency_loadings: "Not specified in the brochure; annuity rates vary by mode, and the higher-purchase-price incentive increases as the payment frequency decreases."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  min_purchase_price: null
  max_purchase_price: "No limit"
  rate_table_available: false
  illustrative_premiums:
    - basis: "Purchase price ₹10,00,000; yearly mode; annuitant age 60; spouse age 55 for Option II; exclusive of taxes"
      figures:
        - {option: "I — Life Annuity with Return of 100% of Purchase Price", annual_annuity: 62300}
        - {option: "II — Joint Life Last Survivor with Return of 100% of Purchase Price", annual_annuity: 61600}
      note: "This is the only published annuity illustration. No age-wise annuity-rate table is published; rates are quoted by LIC's calculator/underwriting."
  premium_formula: "Annuity = purchase price × applicable annuity rate for age, option, mode and purchase-price slab, plus the online-sale increase where applicable. The annuity rate is guaranteed at inception. Minimum purchase price is derived from the minimum annuity for the chosen mode, option and age."
  notes: "Incentives for higher purchase price apply to purchase price slabs of ₹5,00,000-₹9,99,999, ₹10,00,000-₹24,99,999 and ₹25,00,000 and above; the brochure does not publish the incentive amounts. Online purchase gives a 2% increase in annuity."

benefits:
  death_benefit: "Option I: 100% of the purchase price is payable to the nominee/legal heirs on the death of the annuitant, and the annuity ceases. Option II: the annuity continues to the surviving spouse, and 100% of the purchase price is payable to the nominee/legal heirs on the death of the last survivor."
  death_benefit_formula: "Option I: 1.00 * purchase_price on annuitant death. Option II: 1.00 * purchase_price on death of the last survivor."
  maturity_benefit: "Not applicable — there is no maturity benefit under an immediate annuity."
  maturity_benefit_formula: "Not applicable"
  survival_benefits:
    - option: "Option I — Life Annuity with Return of 100% of Purchase Price"
      description: "Annuity is payable in arrears for as long as the annuitant is alive. On death, the annuity ceases and 100% of the purchase price is returned."
    - option: "Option II — Joint Life Last Survivor Annuity with Return of 100% of Purchase Price"
      description: "Annuity is payable in arrears for as long as the annuitant and/or spouse are alive. On the death of the last survivor, the annuity ceases and 100% of the purchase price is returned."
  annuity_options:
    - option: "Option I"
      name: "Life Annuity with Return of 100% of Purchase Price"
      payout: "Annuity for life; purchase price returned on death"
      death_benefit: "100% of purchase price"
    - option: "Option II"
      name: "Joint Life Last Survivor Annuity with Return of 100% of Purchase Price"
      payout: "Annuity for the joint lives and then the survivor; purchase price returned on the last death"
      death_benefit: "100% of purchase price on death of last survivor"
  guaranteed_benefits: "Annuity rates are guaranteed at inception for the life of the policy. The return of 100% of purchase price is guaranteed."
  non_guaranteed_benefits: "None — the plan is non-par and all benefits are guaranteed."
  riders: "Not applicable — no riders are available."
  other_benefits:
    - "Online purchase gives a 2% increase in annuity"
    - "Higher purchase price may increase the annuity rate under the published slab structure"
    - "Loan available after six months"
    - "Surrender available only on diagnosis of a specified critical illness"

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed only after six months from commencement and only if the annuitant, spouse or any child of the annuitant is diagnosed with one of the 20 specified critical illnesses listed in the brochure annexure, supported by documents satisfactory to LIC's medical examiner. On approval, 95% of the purchase price is paid, less any outstanding loan and loan interest. All other benefits cease."
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
  partial_withdrawal_terms: "Not applicable — no partial withdrawals; the only capital access is a loan or the critical-illness surrender."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "There are no exclusions under this policy."
  waiting_period: "Not applicable"
  critical_illnesses_for_surrender: ["Cancer of specified severity", "Myocardial infarction (first heart attack of specified severity)", "Open chest CABG", "Open heart replacement or repair of heart valves", "Coma of specified severity", "Kidney failure requiring regular dialysis", "Stroke resulting in permanent symptoms", "Major organ/bone marrow transplant", "Permanent paralysis of limbs", "Motor neuron disease with permanent symptoms", "Multiple sclerosis with persisting symptoms", "Benign brain tumor", "Blindness", "End-stage lung failure", "End-stage liver failure", "Loss of speech", "Loss of limbs", "Major head trauma", "Primary (idiopathic) pulmonary hypertension", "Third-degree burns"]

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Applicable taxes, including GST, are payable by the policyholder in addition to the purchase price at prevailing rates."
  notes: "The brochure states that statutory taxes are as per tax law and that tax paid is not considered in calculating benefits. It advises consulting a tax adviser for income-tax benefits or implications; no specific treatment is stated."

decision:
  primary_goals: ["retirement"]
  risk_profile: "Guaranteed (non-par)"
  liquidity: "Low"
  time_horizon: "Whole life"
  minimum_age: 40
  maximum_age: 80
  suitable_for:
    - "Retirees aged 40-80 who want a guaranteed lifelong annuity and return of the purchase price on death"
    - "Couples who want a joint-life last-survivor income with the spouse as the only permitted joint annuitant"
    - "Conservative investors who want to convert a lump sum into a predictable income without market risk"
    - "Buyers who value a simple standardised IRDAI product with no riders or exclusions"
  not_suitable_for:
    - "Anyone below age 40 or above age 80"
    - "Investors who may need access to their capital; surrender is allowed only on a specified critical illness"
    - "People seeking inflation-linked income; the annuity is fixed in nominal terms"
    - "Buyers who want market-linked growth or a large legacy beyond the return of purchase price"
  key_tradeoffs:
    - "Capital is effectively locked in for life; the only voluntary exit is a critical-illness surrender at 95% of purchase price"
    - "Annuity is fixed in nominal terms and loses purchasing power over time"
    - "The return of purchase price is nominal, not inflation-adjusted"
    - "Joint life is restricted to the spouse, and the annuity option cannot be changed after purchase"
    - "No riders, no partial withdrawals, no maturity benefit"
  decision_flags: ["immediate_annuity", "single_premium", "return_of_purchase_price", "joint_life_spouse_only", "surrender_only_on_critical_illness", "no_inflation_indexation", "no_riders", "guaranteed"]

calculation_inputs:
  required_inputs: ["age_at_entry", "spouse_age_for_option_ii", "purchase_price", "annuity_option", "annuity_mode"]
  optional_inputs: ["online_purchase", "higher_purchase_price_incentive", "loan"]
  rate_table_available: false
  formulas:
    annuity: "purchase_price × annuity_rate(age, option, mode, purchase_price_slab) × (1 + online_incentive)"
    minimum_purchase_price: "minimum_annuity(mode) / annuity_rate_per_rupee(age, option, mode)"
    death_benefit_option_i: "purchase_price on annuitant death"
    death_benefit_option_ii: "purchase_price on death of last survivor"
    surrender_value: "0.95 × purchase_price − outstanding_loan − loan_interest"
    maximum_loan: "annual_annuity × 0.50 / loan_interest_rate"
  assumptions:
    - "Annuity rates are guaranteed at inception and are not published as an age-wise table in the brochure."
    - "The only published illustration is ₹10,00,000 at age 60, yearly mode: ₹62,300 under Option I and ₹61,600 under Option II with a spouse aged 55."
    - "Taxes are excluded from all illustrations."

sources:
  - name: "Customer Information Sheet (CIS), 10-03-2025"
    url: "https://licindia.in/documents/20121/102491/Revised+CIS+_Saral+Pension-10032025+%281%29.pdf/47b48daf-fffd-e32b-0eb2-f0d1b2059c55?t=1741664753897"
  - name: "Sales Brochure, 19-03-2025"
    url: "https://licindia.in/documents/20121/102491/LIC_Saral+Pension_Sales+Brochure_4+inch+x+9+inch_Eng+%281%29+%281%29.pdf/ee859a6f-d36c-0558-2f8c-87578912c650?t=1742370446353"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1307964/Policy+Document_+LIC%27s++Saral+Pension_CC+%281%29.pdf/c706f844-fdc3-6536-4a27-9788d2c29609?t=1737972151843"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-saral-pension"
---
# LIC's Saral Pension — Plan 862

**One-line summary:** A standard immediate annuity that pays a guaranteed lifelong income and returns 100% of the purchase price on death, with a joint-life last-survivor option for spouses.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 862 |
| UIN | 512N342V05 |
| Product type | Non-par, non-linked, single premium, individual immediate annuity |
| Status | Active |
| Entry age | 40 to 80 years completed (both annuitants for joint life) |
| Annuity options | Life annuity with return of 100% purchase price; joint life last survivor with return of 100% purchase price |
| Mode | Yearly, half-yearly, quarterly or monthly, in arrears |
| Minimum annuity | ₹1,000/month, ₹3,000/quarter, ₹6,000/half-year, ₹12,000/year |
| Minimum purchase price | Depends on minimum annuity, option and age; no fixed amount published |
| Maximum purchase price | No limit |
| Surrender | Only after 6 months on a specified critical illness, at 95% of purchase price |
| Official page | https://licindia.in/en/web/guest/lic-s-saral-pension |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 40 years completed |
| Maximum entry age | 80 years completed |
| Joint life | Spouse only; spouse must also satisfy 40-80 |
| Minimum annuity | ₹1,000 monthly; ₹3,000 quarterly; ₹6,000 half-yearly; ₹12,000 yearly |
| Minimum purchase price | Derived from the minimum annuity, option and age |
| Maximum purchase price | No limit |
| Annuity option change | Not allowed after purchase |

This is a standard immediate annuity under IRDAI guidelines, so its core terms are the same across life insurers. The annuity option is chosen once and cannot be altered.

## Purchase price and annuity rates

- **Purchase price:** single lump sum. The minimum depends on the minimum annuity, the option chosen and the annuitant's age. There is no maximum.
- **Annuity modes:** yearly, half-yearly, quarterly and monthly, all payable in arrears.
- **Annuity rates:** guaranteed at inception. The brochure does not publish an age-wise rate table; rates are quoted by LIC's calculator/underwriting.
- **Higher purchase price incentive:** three purchase-price slabs — ₹5,00,000 to ₹9,99,999; ₹10,00,000 to ₹24,99,999; ₹25,00,000 and above. The incentive depends on the slab and mode and increases as frequency falls, but the amounts are not published.
- **Online incentive:** 2% increase in annuity for policies purchased online.

### Illustrative premiums

The brochure publishes one illustration only: purchase price ₹10,00,000, yearly mode, annuitant age 60, spouse age 55 for Option II, exclusive of taxes.

| Option | Annual annuity |
|---|---:|
| Option I — Life Annuity with Return of 100% of Purchase Price | ₹62,300 |
| Option II — Joint Life Last Survivor with Return of 100% of Purchase Price | ₹61,600 |

No published rate table; rates are quoted by LIC's calculator/underwriting.

## Benefits

### Option I — Life annuity with return of 100% of purchase price

The annuity is paid in arrears for as long as the annuitant is alive. On death, the annuity ceases immediately and 100% of the purchase price is paid to the nominee or legal heirs.

### Option II — Joint life last survivor with return of 100% of purchase price

The annuity is paid in arrears for as long as the annuitant and/or spouse are alive. On the death of the last survivor, the annuity ceases immediately and 100% of the purchase price is paid to the nominee or legal heirs. The joint annuitant must be the spouse.

### Death benefit

| Option | Death benefit |
|---|---|
| Option I | 100% of purchase price on the annuitant's death |
| Option II | 100% of purchase price on the death of the last survivor |

### Maturity benefit

Not applicable. An immediate annuity has no maturity benefit; payments continue for life and the purchase price is returned only on the applicable death.

## Optional benefits and riders

- **Riders:** none.
- **Online purchase:** 2% increase in annuity.
- **Higher purchase price:** may qualify for a higher annuity rate under the published slab structure, but the incentive amounts are not published.
- **Loan:** available after six months, secured against the annuity.
- **Critical-illness surrender:** the only surrender route, described below.

## Surrender, loan, paid-up and revival

### Surrender

The policy can be surrendered only after six months from commencement and only if the annuitant, spouse or any child of the annuitant is diagnosed with one of the 20 specified critical illnesses:

1. Cancer of specified severity
2. Myocardial infarction (first heart attack of specified severity)
3. Open chest CABG
4. Open heart replacement or repair of heart valves
5. Coma of specified severity
6. Kidney failure requiring regular dialysis
7. Stroke resulting in permanent symptoms
8. Major organ/bone marrow transplant
9. Permanent paralysis of limbs
10. Motor neuron disease with permanent symptoms
11. Multiple sclerosis with persisting symptoms
12. Benign brain tumor
13. Blindness
14. End-stage lung failure
15. End-stage liver failure
16. Loss of speech
17. Loss of limbs
18. Major head trauma
19. Primary (idiopathic) pulmonary hypertension
20. Third-degree burns

On approval, 95% of the purchase price is paid, less any outstanding loan and loan interest. All other benefits cease and the policy terminates. The diagnosis must be supported by documents satisfactory to LIC's medical examiner.

### Loan

A policy loan is available after six months from commencement. Under joint life, the annuitant may avail it, and after the annuitant's death the spouse may avail it. The loan is limited so that the effective annual interest payable does not exceed 50% of the annual annuity. Interest is recovered from annuity payments and accrues at the annuity payment frequency. The principal may be repaid at any time.

The loan interest rate for loans commencing between 1 May 2024 and 30 April 2025 is 9.24% per annum effective for the full loan term, based on the 10-year G-Sec rate plus 200 basis points.

### Paid-up, revival, grace and free look

- **Paid-up:** not applicable — single premium immediate annuity.
- **Revival:** not applicable.
- **Grace period:** not applicable.
- **Free look:** 30 days. On cancellation, the premium is returned after deducting stamp duty and any annuity already paid.

## Exclusions and conditions

- **Exclusions:** there are no exclusions under this policy.
- **Waiting period:** not applicable.
- **Annuity option:** once chosen, it cannot be altered.
- **Joint life:** only the spouse may be the joint annuitant, and the spouse must satisfy the entry-age limits.
- **Surrender:** restricted to the critical-illness route; there is no ordinary surrender or partial withdrawal.
- **Taxes:** statutory taxes on the purchase price are collected separately and do not count towards benefits.

## Tax treatment

The brochure states that statutory taxes, including GST, are payable by the policyholder at prevailing rates in addition to the purchase price, and that tax paid is not considered when calculating benefits. It advises consulting a tax adviser for income-tax benefits or implications. The documents do not state the specific income-tax treatment of the purchase price, annuity or death benefit.

## Suitability and decision notes

**Best suited to:** retirees aged 40–80 who want a guaranteed lifelong annuity and return of the purchase price on death. It fits couples who want a joint-life last-survivor income with the spouse as the only permitted joint annuitant, and conservative investors who want to convert a lump sum into predictable income without market risk.

**Poor fit for:** anyone below 40 or above 80, investors who may need access to capital (surrender is allowed only on a specified critical illness), people seeking inflation-linked income, and buyers who want market-linked growth or a legacy larger than the return of purchase price.

**Key trade-offs:** capital is effectively locked in for life; the annuity is fixed in nominal terms; the return of purchase price is nominal, not inflation-adjusted; joint life is restricted to the spouse; and there are no riders, partial withdrawals or maturity benefit.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 40–80 completed |
| Spouse age | For Option II | 40–80 completed |
| Purchase price | Yes | Must produce at least the minimum annuity |
| Annuity option | Yes | Option I or Option II; cannot be changed |
| Annuity mode | Yes | Yearly, half-yearly, quarterly or monthly |
| Online purchase | Optional | 2% increase in annuity |
| Higher purchase price | Optional | Slab-based incentive; amounts not published |
| Loan | Optional | After 6 months; interest capped at 50% of annual annuity |

```text
Annuity                    = purchase_price × annuity_rate(age, option, mode, purchase_price_slab)
                             × (1 + online_incentive)
Minimum purchase price     = minimum_annuity(mode) / annuity_rate_per_rupee(age, option, mode)
Death benefit (Option I)   = 100% × purchase_price on annuitant death
Death benefit (Option II)  = 100% × purchase_price on last-survivor death
Surrender value            = 95% × purchase_price − outstanding_loan − loan_interest
Maximum loan               = (50% × annual_annuity) / loan_interest_rate
```

## Source documents

- [Customer Information Sheet (CIS), 10-03-2025](https://licindia.in/documents/20121/102491/Revised+CIS+_Saral+Pension-10032025+%281%29.pdf/47b48daf-fffd-e32b-0eb2-f0d1b2059c55?t=1741664753897)
- [Sales Brochure, 19-03-2025](https://licindia.in/documents/20121/102491/LIC_Saral+Pension_Sales+Brochure_4+inch+x+9+inch_Eng+%281%29+%281%29.pdf/ee859a6f-d36c-0558-2f8c-87578912c650?t=1742370446353)
- [Policy Document](https://licindia.in/documents/20121/1307964/Policy+Document_+LIC%27s++Saral+Pension_CC+%281%29.pdf/c706f844-fdc3-6536-4a27-9788d2c29609?t=1737972151843)
- [Official product page](https://licindia.in/en/web/guest/lic-s-saral-pension)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
