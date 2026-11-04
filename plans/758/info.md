---
plan_number: 758
plan_name: "LIC's New Jeevan Shanti"
uin: "512N338V08"
insurer: "Life Insurance Corporation of India"
category: "Annuity"
product_type: "Non-Par, Non-Linked, Individual, Savings, Deferred Annuity Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/en/web/guest/lic-s-new-jeevan-shanti-plan-no.-758-uin-512n338v08-"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 30
  entry_age_max: 79
  entry_age_notes: "Minimum 30 years and maximum 79 years (last birthday) for the annuitant and, under joint life, for both the primary and secondary annuitants."
  maturity_age_max: null
  maturity_age_notes: "There is no maturity benefit. Minimum vesting age is 31 years and maximum vesting age is 80 years (last birthday). For QROPS purchases the minimum vesting age is 55 years."
  policy_terms_years: "Not applicable — deferred annuity; deferment period 1-5 years"
  policy_term_kind: "deferred_annuity"
  policy_term_min_years: null
  policy_term_max_years: null
  premium_paying_terms_years: "Single premium"
  ppt_min_years: null
  ppt_max_years: null
  ppt_term_pairs: "Not applicable"
  min_sum_assured: "Not applicable — annuity plan; see minimum purchase price"
  max_sum_assured: "Not applicable — no maximum purchase price"
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "Minimum purchase price is ₹1,50,000, increased where necessary to meet the minimum annuity for the chosen mode: ₹1,000 monthly, ₹3,000 quarterly, ₹6,000 half-yearly or ₹12,000 yearly. For the Divyangjan option the minimum purchase price is ₹50,000 and the minimum annuity limit does not apply."
  max_premium: "No limit, subject to underwriting"
  min_deferment_period_years: 1
  max_deferment_period_years: 5
  min_vesting_age: 31
  max_vesting_age: 80
  min_annuity_by_mode:
    monthly: 1000
    quarterly: 3000
    half_yearly: 6000
    yearly: 12000
  annuity_options:
    - "Option 1 — Deferred annuity for Single life"
    - "Option 2 — Deferred annuity for Joint life"
  joint_life_allowed_with: "Any two lineal descendants/ascendants of a family (grandparent, parent, children, grandchildren), spouse or siblings."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly"]
  frequency_loadings: "Reduction in the yearly annuity rate for other modes: half-yearly 2%, quarterly 3%, monthly 4%."
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  min_purchase_price: 150000
  max_purchase_price: "No limit, subject to underwriting"
  rate_table_available: false
  illustrative_premiums:
    - basis: "Purchase price ₹10,00,000, age 45, deferment period 5 years, secondary annuitant age 35 for Option 2, exclusive of taxes; published annuity illustration"
      figures:
        - {option: "1 — Deferred annuity for Single life", yearly: 86100, half_yearly: 42189, quarterly: 20879, monthly: 6888}
        - {option: "2 — Deferred annuity for Joint life", yearly: 82800, half_yearly: 40572, quarterly: 20079, monthly: 6624}
      note: "This is the only published annuity illustration. No age-wise annuity-rate table is published; rates are quoted by LIC's calculator/underwriting."
  rebates:
    high_purchase_price_incentive_per_thousand_purchase_price:
      - {deferment_period_years: 1, pp_5l_to_9_99l: 2.90, pp_10l_to_24_99l: 3.90, pp_25l_plus: 4.15}
      - {deferment_period_years: 2, pp_5l_to_9_99l: 3.30, pp_10l_to_24_99l: 4.30, pp_25l_plus: 4.55}
      - {deferment_period_years: 3, pp_5l_to_9_99l: 3.70, pp_10l_to_24_99l: 4.70, pp_25l_plus: 4.95}
      - {deferment_period_years: 4, pp_5l_to_9_99l: 4.10, pp_10l_to_24_99l: 5.10, pp_25l_plus: 5.35}
      - {deferment_period_years: 5, pp_5l_to_9_99l: 4.50, pp_10l_to_24_99l: 5.50, pp_25l_plus: 5.75}
    existing_policyholder_incentive: "0.15% increase in the tabular annuity rate for an existing policyholder with an in-force policy, a policy matured within one year before the proposal, or a nominee/beneficiary of a deceased policyholder who died within one year before the proposal."
    online_incentive: "New customer: 2.00% for purchase price below ₹10,00,000 and 2.50% for ₹10,00,000 and above. Existing policyholder/nominee: 2.15% below ₹10,00,000 and 2.50% for ₹10,00,000 and above."
  premium_formula: "Annuity = purchase price × tabular annuity rate for the option, age(s) and deferment period, increased by the high-purchase-price incentive (₹ per ₹1,000 purchase price) and the applicable online or existing-policyholder incentive, and reduced for non-yearly modes by 2% / 3% / 4% for half-yearly / quarterly / monthly."
  notes: "Annuity rates are guaranteed at inception and vary by option, age, deferment period and mode. The full age-wise rate table is not published. Only one illustration is published. The minimum purchase price may be increased where the resulting annuity would fall below the minimum for the chosen mode."

benefits:
  death_benefit: "Under both options the death benefit is the higher of (a) purchase price plus accrued Additional Benefit on Death minus total annuity paid to date, or (b) 105% of the purchase price. Under Option 2 it is payable on the death of the last survivor. During the deferment period nothing is paid on survival; the death benefit is payable on the death of the annuitant or last survivor."
  death_benefit_formula: "max(purchase_price + accrued_additional_benefit_on_death - total_annuity_paid, 1.05 * purchase_price)"
  maturity_benefit: "Not applicable — there is no maturity benefit. Annuity payments begin at the vesting date and continue for life."
  maturity_benefit_formula: "Not applicable"
  survival_benefits:
    - option: "Option 1 — Deferred annuity for Single life"
      description: "Nothing is payable during the deferment period. From the vesting date the annuity is paid in arrears for life at the chosen mode. On the annuitant's death the annuity ceases and the death benefit is paid."
    - option: "Option 2 — Deferred annuity for Joint life"
      description: "Nothing is payable during the deferment period. From the vesting date the annuity is paid in arrears for as long as the primary and/or secondary annuitant is alive. On the death of the last survivor the annuity ceases and the death benefit is paid."
  annuity_options:
    - option: "1"
      name: "Deferred annuity for Single life"
      payout: "Annuity for life after the deferment period"
      death_benefit: "Higher of (purchase price + accrued Additional Benefit on Death − annuities paid) or 105% of purchase price"
    - option: "2"
      name: "Deferred annuity for Joint life"
      payout: "Annuity for the joint lives and then the survivor after the deferment period"
      death_benefit: "Higher of (purchase price + accrued Additional Benefit on Death − annuities paid) or 105% of purchase price, on the death of the last survivor"
  guaranteed_benefits: "Annuity rates are guaranteed at inception. The annuity and the death benefit are fixed under the chosen option and are not affected by actual experience; the plan is non-par and pays no bonus or share of surplus."
  non_guaranteed_benefits: "None — the plan is non-par and all benefits are guaranteed."
  riders: "Not applicable — no riders are available."
  other_benefits:
    - "Additional Benefit on Death accrues monthly during the deferment period at (purchase price × monthly-mode annuity rate p.a. without incentives) / 12"
    - "Death benefit may be taken as a lump sum, annuitised, or paid in instalments over 5, 10 or 15 years"
    - "Option to purchase Option 1 for the benefit of a dependant person with disability (Divyangjan) with a minimum purchase price of ₹50,000"
    - "Policy loan available during and after the deferment period"
    - "Plan can be purchased as QROPS, with a minimum vesting age of 55"

policy_features:
  loan: true
  surrender: true
  surrender_terms: "The policy may be surrendered at any time. The surrender value is the higher of Guaranteed Surrender Value and Special Surrender Value. GSV = (GSV factor × purchase price) − total annuity paid to date. GSV factors are 75% in policy years 1-3, 90% in year 4 and 90% in year 5 and thereafter. Outstanding loan and interest are recovered from the surrender value."
  paid_up: false
  paid_up_terms: "Not applicable — single premium plan."
  revival: false
  revival_period_years: null
  free_look_days: 30
  grace_period_days:
    yearly: null
    half_yearly: null
    quarterly: null
    monthly_nach: null
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable — no partial withdrawals; capital access is through surrender or a policy loan."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months from the date of commencement of risk: the policy is void and the nominee receives the higher of 80% of the premium paid or the surrender value; no other claim is entertained. There is no waiting period."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Taxes, if any, are charged extra at the prevailing rates. No GST rate or exemption is stated in the documents."
  notes: "The CIS states that taxes, if any, as applicable from time to time are charged extra. The brochure states that statutory taxes are payable over and above the premium and are not considered when calculating benefits, and advises consulting a tax adviser on income-tax benefits. The specific income-tax treatment of premiums, annuities and death benefits is not stated."

decision:
  primary_goals: ["retirement", "savings"]
  risk_profile: "Guaranteed (non-par)"
  liquidity: "Low"
  time_horizon: "Whole life"
  minimum_age: 30
  maximum_age: 79
  suitable_for:
    - "People aged 30-79 who want to convert a lump sum into a guaranteed lifetime annuity starting after 1-5 years"
    - "Buyers who want a single-life or joint-life deferred annuity with a straightforward two-option structure"
    - "Couples and family members who want the annuity to continue to the survivor at the same rate"
    - "Conservative investors who value a death benefit floor of 105% of the purchase price"
    - "NRI or QROPS buyers who need a qualifying recognised overseas pension scheme arrangement"
  not_suitable_for:
    - "Anyone who needs income immediately; nothing is paid during the 1-5 year deferment period"
    - "Investors who may need capital access; surrender can return materially less than the purchase price"
    - "People seeking inflation-linked or market-linked returns; the annuity is fixed in nominal terms"
    - "Buyers who want a large legacy beyond the return of purchase price; the death benefit is capped at the higher of the purchase price plus accrued Additional Benefit less annuities paid, or 105% of purchase price"
    - "Anyone below age 30 or above age 79"
  key_tradeoffs:
    - "No income during the deferment period; the annuity starts only at vesting"
    - "Annuity is fixed in nominal terms and is not indexed to inflation"
    - "Only two annuity options and no top-up facility"
    - "Surrender in the first three years returns 75% of the purchase price less annuities paid"
    - "The full annuity rate table is not published; quotes depend on LIC's calculator and underwriting"
    - "Joint life is restricted to defined family relationships, including spouse, lineal descendants/ascendants and siblings"
  decision_flags: ["deferred_annuity", "single_premium", "two_annuity_options", "joint_life_family_relationships", "no_income_during_deferment", "death_benefit_105_percent_floor", "no_top_up", "no_inflation_indexation", "surrender_penalty_first_3_years", "qrops_available"]

calculation_inputs:
  required_inputs: ["annuity_option", "age_at_entry", "secondary_annuitant_age_for_joint_life", "deferment_period", "purchase_price", "annuity_mode"]
  optional_inputs: ["online_purchase", "existing_policyholder", "death_benefit_payment_option", "loan", "qrops"]
  rate_table_available: false
  formulas:
    vesting_age: "age_at_entry + deferment_period, subject to maximum vesting age 80"
    annuity: "purchase_price * tabular_annuity_rate(option, age, dp) + high_purchase_price_incentive + online_or_existing_incentive - mode_reduction"
    mode_reduction: "yearly 0%; half-yearly 2%; quarterly 3%; monthly 4%"
    additional_benefit_on_death_monthly: "(purchase_price * monthly_mode_annuity_rate_pa_without_incentives) / 12"
    accrued_additional_benefit: "monthly_additional_benefit * completed_policy_months_during_deferment"
    death_benefit: "max(purchase_price + accrued_additional_benefit - total_annuity_paid, 1.05 * purchase_price)"
    gsv: "gsv_factor * purchase_price - total_annuity_paid (factor 75% years 1-3; 90% year 4 and later)"
    surrender_value: "max(gsv, ssv) - outstanding_loan - loan_interest"
    maximum_loan: "min(0.50 * annual_annuity / loan_rate, 0.80 * surrender_value)"
    death_benefit_instalment_interest: "4.62% p.a. effective for instalments commencing 1 May 2025 to 30 April 2026"
  assumptions:
    - "Illustrations are exclusive of taxes."
    - "The only published illustration uses purchase price ₹10,00,000, age 45, deferment period 5 years and secondary age 35 for Option 2."
    - "Annuity rates are guaranteed at inception but the full age-wise table is not published; use LIC's calculator for a quote."
    - "Additional Benefit on Death accrues only during the deferment period and only for completed policy months."

sources:
  - name: "Customer Information Sheet (CIS), 29-07-2025"
    url: "https://licindia.in/documents/20121/1325029/Final+CIS_LIC%27s+New+Jeevan+Shanti.pdf/1ea9bb70-e0f5-271f-e322-1a7d1d69ad58?t=1754123871383"
  - name: "Sales Brochure, 21-08-2025"
    url: "https://licindia.in/documents/20121/102400/Lic+NEW+Jeevan+Shanti++2025+_Eng_Singal+page+21.08.2025.pdf/fc28fe4a-0416-e098-38fd-f17603b84ab9?t=1755870219109"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1385382/Final+Policy+Document_LIC%27s+New+Jeevan+Shanti.pdf/aaeb0614-2774-5beb-1a89-2936cda4417f?t=1754123839764"
  - name: "Official product page"
    url: "https://licindia.in/en/web/guest/lic-s-new-jeevan-shanti-plan-no.-758-uin-512n338v08-"
---
# LIC's New Jeevan Shanti — Plan 758

**One-line summary:** A non-par single-premium deferred annuity that pays a guaranteed lifetime income after a 1-5 year deferment period, with single-life or joint-life options and a death benefit of at least 105% of the purchase price.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 758 |
| UIN | 512N338V08 |
| Product type | Non-par, non-linked, individual savings deferred annuity |
| Status | Active |
| Entry age | 30 to 79 years (last birthday) |
| Vesting age | 31 to 80 years (last birthday); 55+ for QROPS |
| Deferment period | 1 to 5 years |
| Premium paying term | Single premium |
| Annuity options | Option 1 single life; Option 2 joint life |
| Minimum purchase price | ₹1,50,000 (₹50,000 for Divyangjan) |
| Maximum purchase price | No limit, subject to underwriting |
| Minimum annuity | ₹1,000/month, ₹3,000/quarter, ₹6,000/half-year, ₹12,000/year |
| Official page | https://licindia.in/en/web/guest/lic-s-new-jeevan-shanti-plan-no.-758-uin-512n338v08- |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 30 years (last birthday) |
| Maximum entry age | 79 years (last birthday) |
| Minimum vesting age | 31 years (last birthday) |
| Maximum vesting age | 80 years (last birthday) |
| Deferment period | 1-5 years, subject to the maximum vesting age |
| Premium paying term | Single premium |
| Minimum purchase price | ₹1,50,000, increased if needed to meet the minimum annuity |
| Divyangjan minimum | ₹50,000, with no minimum annuity limit |
| Joint life relationship | Lineal descendant/ascendant, spouse or sibling |
| QROPS minimum vesting age | 55 years |

The deferment period is short, so the product is aimed at buyers who are close to retirement or who want to stagger the start of income. The purchase price must be large enough to produce at least the minimum annuity for the chosen mode.

## Purchase price and annuity rates

- **Purchase price:** single lump sum of at least ₹1,50,000. The minimum rises where necessary to produce the minimum annuity.
- **Annuity modes:** yearly, half-yearly, quarterly and monthly, payable in arrears. Non-yearly modes reduce the yearly annuity rate by 2% (half-yearly), 3% (quarterly) or 4% (monthly).
- **Annuity rates:** guaranteed at inception but not published as a full age-wise table. The brochure publishes one illustration only; rates are quoted by LIC's calculator/underwriting.
- **Higher purchase price incentive:** an addition to the tabular annuity rate per ₹1,000 of purchase price, depending on the purchase-price slab and deferment period.
- **Online incentive:** 2.00% for new customers below ₹10,00,000 and 2.50% at ₹10,00,000 and above; 2.15% / 2.50% for existing policyholders and nominees.
- **Existing policyholder incentive:** 0.15% increase in the tabular annuity rate.

### Illustrative premiums

The brochure publishes one illustration: purchase price ₹10,00,000, age 45, deferment period 5 years, secondary annuitant age 35 for Option 2, exclusive of taxes.

| Annuity option | Yearly | Half-yearly | Quarterly | Monthly |
|---|---:|---:|---:|---:|
| Option 1 — Single life | ₹86,100 | ₹42,189 | ₹20,879 | ₹6,888 |
| Option 2 — Joint life | ₹82,800 | ₹40,572 | ₹20,079 | ₹6,624 |

No published rate table; rates are quoted by LIC's calculator/underwriting.

**High purchase price incentive (₹ addition per ₹1,000 purchase price per annum):**

| Deferment period | PP ₹5,00,000-9,99,999 | PP ₹10,00,000-24,99,999 | PP ₹25,00,000+ |
|---:|---:|---:|---:|
| 1 | 2.90 | 3.90 | 4.15 |
| 2 | 3.30 | 4.30 | 4.55 |
| 3 | 3.70 | 4.70 | 4.95 |
| 4 | 4.10 | 5.10 | 5.35 |
| 5 | 4.50 | 5.50 | 5.75 |

## Benefits

### Option 1 — Deferred annuity for Single life

Nothing is payable during the deferment period. From the vesting date the annuity is paid in arrears for life at the chosen mode. On the annuitant's death the annuity ceases and the death benefit is paid to the nominee.

### Option 2 — Deferred annuity for Joint life

Nothing is payable during the deferment period. From the vesting date the annuity is paid in arrears for as long as the primary annuitant and/or secondary annuitant is alive. On the death of the last survivor the annuity ceases and the death benefit is paid to the nominee. The joint annuitant must be a lineal descendant/ascendant, spouse or sibling.

### Death benefit

Under both options the death benefit is the higher of:

1. Purchase price plus accrued Additional Benefit on Death, minus total annuity paid to date; or
2. 105% of the purchase price.

The Additional Benefit on Death accrues at the end of each policy month during the deferment period only, at (purchase price × monthly-mode annuity rate p.a. without incentives) / 12. In the year of death it accrues up to the completed policy month.

### Maturity and survival benefit

There is no maturity benefit. The survival benefit is the annuity, which begins at vesting and continues for life under the chosen option.

## Optional benefits and riders

- **Riders:** none.
- **Death benefit payment options:** lump sum, annuitisation of the death benefit, or instalments over 5, 10 or 15 years. Minimum instalments are ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly and ₹50,000 yearly. The interest rate for instalments commencing between 1 May 2025 and 30 April 2026 is 4.62% p.a. effective.
- **Divyangjan option:** Option 1 may be purchased on the proposer's own life for the benefit of a dependant person with disability, with a minimum purchase price of ₹50,000. If the purchase price is below ₹1,50,000, the death benefit must be used to buy an immediate annuity for the Divyangjan nominee.
- **QROPS:** the plan may be purchased as a Qualifying Recognised Overseas Pension Scheme through transfer of UK tax-relieved assets, subject to HMRC terms, with a minimum vesting age of 55.

## Surrender, loan, paid-up and revival

### Surrender

The policy may be surrendered at any time. The surrender value is the higher of Guaranteed Surrender Value and Special Surrender Value. GSV is (GSV factor × purchase price) minus total annuity paid to date.

| Policy year | GSV factor |
|---:|---:|
| 1 | 75% |
| 2 | 75% |
| 3 | 75% |
| 4 | 90% |
| 5 and later | 90% |

Any outstanding loan and interest are recovered from the surrender value.

### Loan

A policy loan is available after 3 months from issue or after free-look expiry, whichever is later, during and after the deferment period. Under joint life the primary annuitant may avail it, and the secondary annuitant after the primary's death.

The effective annual interest may not exceed 50% of the annual annuity and the loan may not exceed 80% of the surrender value. The loan interest rate for loans commencing between 1 May 2025 and 30 April 2026 is 9.50% p.a. compounding half-yearly for the full term of the loan.

### Paid-up, revival, grace and free look

- **Paid-up:** not applicable — single premium plan.
- **Revival:** not applicable.
- **Grace period:** not applicable.
- **Free look:** 30 days. On cancellation the premium is returned after deducting stamp duty and any annuity paid.

## Exclusions and conditions

- **Suicide:** if the annuitant or last survivor commits suicide within 12 months from the commencement of risk, the policy is void and the nominee receives the higher of 80% of the premium paid or the surrender value; no other claim is entertained.
- **Waiting period:** not applicable.
- **Annuity option:** once chosen, it cannot be altered.
- **Joint life:** restricted to the relationships listed in the brochure.
- **Divyangjan:** the option is available only under Option 1, and the death benefit must be annuitised for the nominee where the purchase price is below ₹1,50,000.
- **Taxes:** statutory taxes are charged over and above the premium and are not counted when calculating benefits.

## Tax treatment

The CIS states that taxes, if any, as applicable from time to time are charged extra. The brochure states that statutory taxes are payable over and above the premium, that tax paid is not considered when calculating benefits, and that income-tax benefits or implications should be discussed with a tax adviser. The documents do not state the specific income-tax treatment of premiums, annuities or death benefits.

## Suitability and decision notes

**Best suited to:** people aged 30-79 who want to convert a lump sum into a guaranteed lifetime annuity starting after 1-5 years. It fits buyers who want a simple single-life or joint-life structure, couples and family members who want the annuity to continue to the survivor, and conservative investors who value the 105% purchase-price death benefit floor. It can also serve NRI or QROPS buyers.

**Poor fit for:** anyone who needs income immediately, investors who may need capital access, people seeking inflation-linked or market-linked returns, and buyers who want a large legacy beyond the return of purchase price. It is also unsuitable for anyone below 30 or above 79.

**Key trade-offs:** no income during the deferment period; a fixed nominal annuity; only two annuity options and no top-up facility; a 75% surrender factor in the first three years; an unpublished full rate table; and joint life restricted to defined family relationships.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Annuity option | Yes | Option 1 single life or Option 2 joint life; cannot be changed |
| Age at entry | Yes | 30-79 years (last birthday) |
| Secondary annuitant age | For Option 2 | 30-79 years; relationship must qualify |
| Deferment period | Yes | 1-5 years, subject to maximum vesting age 80 |
| Purchase price | Yes | Minimum ₹1,50,000, or more to meet the minimum annuity |
| Annuity mode | Yes | Yearly, half-yearly, quarterly or monthly |
| Online purchase | Optional | 2.00%-2.50% incentive |
| Existing policyholder | Optional | 0.15% incentive |
| Death benefit payment option | Optional | Lump sum, annuitisation or 5/10/15-year instalments |
| Loan | Optional | After 3 months or free-look expiry |
| QROPS | Optional | Minimum vesting age 55 |

```text
Vesting age                = age_at_entry + deferment_period (maximum 80)
Annuity                    = purchase_price × tabular_annuity_rate(option, age, DP)
                             + high_purchase_price_incentive + online/existing incentive
                             − mode_reduction (half-yearly 2%, quarterly 3%, monthly 4%)
Additional benefit/month   = (purchase_price × monthly_mode_annuity_rate_pa_without_incentives) / 12
Death benefit              = max(purchase_price + accrued_additional_benefit − total_annuity_paid,
                                 1.05 × purchase_price)
GSV                        = GSV_factor × purchase_price − total_annuity_paid
                             (factor 75% in years 1-3; 90% in year 4 and later)
Surrender value            = max(GSV, SSV) − outstanding_loan − loan_interest
Maximum loan               = min(50% × annual_annuity / loan_rate, 80% × surrender_value)
```

## Source documents

- [Customer Information Sheet (CIS), 29-07-2025](https://licindia.in/documents/20121/1325029/Final+CIS_LIC%27s+New+Jeevan+Shanti.pdf/1ea9bb70-e0f5-271f-e322-1a7d1d69ad58?t=1754123871383)
- [Sales Brochure, 21-08-2025](https://licindia.in/documents/20121/102400/Lic+NEW+Jeevan+Shanti++2025+_Eng_Singal+page+21.08.2025.pdf/fc28fe4a-0416-e098-38fd-f17603b84ab9?t=1755870219109)
- [Policy Document](https://licindia.in/documents/20121/1385382/Final+Policy+Document_LIC%27s+New+Jeevan+Shanti.pdf/aaeb0614-2774-5beb-1a89-2936cda4417f?t=1754123839764)
- [Official product page](https://licindia.in/en/web/guest/lic-s-new-jeevan-shanti-plan-no.-758-uin-512n338v08-)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
