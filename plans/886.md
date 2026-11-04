---
plan_number: 886
plan_name: "LIC's Protection Plus"
uin: "512L361V01"
insurer: "Life Insurance Corporation of India"
category: "ULIP"
product_type: "Non-Par, Linked, Life, Individual, Savings plan"
status: "Active"
launch_date: "2025-12"
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-protection-plus"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 65
  entry_age_notes: "Minimum 18 completed years. Maximum 50 for PPT 5; 65 for PPT 7/10/15 (age nearer birthday)."
  maturity_age_max: 90
  maturity_age_notes: "Maximum maturity age is 75/80/85/90 years for policy terms 10/15/20/25 years."
  policy_terms_years: [10, 15, 20, 25]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 25
  premium_paying_terms_years: [5, 7, 10, 15]
  ppt_min_years: 5
  ppt_max_years: 15
  ppt_term_pairs: "PPT 5/7/10 permits terms 10/15/20/25; PPT 15 permits terms 15/20/25."
  min_sum_assured: "7 × annualized premium if entry age is below 50; 5 × annualized premium if age 50 or above."
  max_sum_assured: "BSA multiple table by entry age, PPT and premium (brochure Para 2.viii); subject to underwriting."
  min_premium_by_mode:
    monthly: 5000
    quarterly: 15000
    half_yearly: 30000
    yearly: 60000
  min_premium_notes: "For PPT 15 the minimums are ₹3,000 monthly, ₹9,000 quarterly, ₹18,000 half-yearly and ₹36,000 yearly. Premium multiples: ₹1,000 yearly, ₹500 half-yearly, ₹250 quarterly/monthly."
  max_premium: "No limit, subject to underwriting."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Not specified in the brochure"
  single_premium: false
  top_up_allowed: true
  min_top_up: 1000
  max_top_up: null
  min_annualized_premium: 36000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums: []
  premium_formula: "The policyholder chooses the annualized premium and BSA multiple. Basic Sum Assured = annualized premium × BSA multiple, subject to the minimum and maximum multiples in the brochure."
  notes: "Minimum annualized premium is ₹60,000 for PPT 5/7/10 and ₹36,000 for PPT 15. Top-up premiums are allowed in multiples of ₹1,000 (minimum ₹1,000), except in the last 5 policy years."

benefits:
  death_benefit: "Highest of: Basic Sum Assured reduced by partial withdrawals made in the 2 years before death; Base Premium Fund Value; or 105% of total Base Premiums paid. If top-up premiums were paid, also the highest of Top-up Sum Assured, Top-up Premium Fund Value, or 105% of total Top-up Premiums paid."
  death_benefit_formula: "max(bsa - partial_withdrawals_last_2y, base_premium_fund_value, 1.05 * total_base_premiums_paid) + max(topup_sum_assured, topup_premium_fund_value, 1.05 * total_topup_premiums_paid)"
  maturity_benefit: "Unit Fund Value (Base Premium Fund Value + Top-up Premium Fund Value) plus a refund of all mortality charges deducted, provided all due premiums have been paid."
  maturity_benefit_formula: "base_premium_fund_value + topup_premium_fund_value + cumulative_mortality_charges_deducted"
  survival_benefits: []
  guaranteed_benefits: "No guaranteed maturity amount; the plan is market-linked. Mortality charges are refunded on maturity if all due premiums are paid."
  non_guaranteed_benefits: "Fund returns depend on the NAV of the chosen fund(s)."
  riders: ["LIC's Linked Accidental Death Benefit Rider (UIN: 512A211V02)"]
  other_benefits:
    - "Partial withdrawals after the 5-year lock-in, subject to annual limits"
    - "Switching among six funds; 4 free switches per policy year, then ₹100 per switch"
    - "Top-up premiums; each top-up has a Top-up Sum Assured of 1.25 × the top-up premium"
    - "Option to increase or decrease the Basic Sum Assured, subject to limits"
    - "Settlement option to receive the death benefit in instalments over up to 5 years"

policy_features:
  loan: false
  surrender: true
  surrender_terms: "Before 5 years: Unit Fund Value less discontinuance charge is moved to the Discontinued Policy Fund and is payable at the end of the 5-year lock-in. After 5 years: Unit Fund Value is payable."
  paid_up: true
  paid_up_terms: "After the 5-year lock-in, non-payment of premiums converts the policy to reduced paid-up; it may be revived or withdrawn."
  revival: true
  revival_period_years: 3
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: true
  partial_withdrawal_terms: "Allowed after the 5-year lock-in. Per policy year: 15% of unit fund (years 6-10), 20% (11-15), 25% (16-20), 30% (21-25). Minimum balance after withdrawal: 4 annualized premiums if annual premium < ₹60,000, otherwise 3. Charge: ₹100 per withdrawal."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement or revival: nominee receives the Unit Fund Value."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Applicable as per prevailing tax law; charges are subject to tax charge"
  notes: "Tax treatment depends on current law and policy conditions. Verify with the latest LIC/Income Tax guidance before relying on it."

decision:
  primary_goals: ["savings", "protection", "market_linked_growth"]
  risk_profile: "Market-linked"
  liquidity: "Low"
  time_horizon: "Long"
  minimum_age: 18
  maximum_age: 65
  suitable_for:
    - "Long-horizon savers who want life cover plus market-linked returns"
    - "Investors comfortable with ULIP charges and fund selection"
    - "Buyers who value the refund of mortality charges at maturity"
  not_suitable_for:
    - "Pure protection buyers; a term plan is cheaper for the same cover"
    - "Short-term investors or those needing guaranteed returns"
    - "Anyone who may need the money within the 5-year lock-in"
  key_tradeoffs:
    - "5-year lock-in and full market risk on the fund value"
    - "Premium allocation charges are higher on offline sales (8% in year 1) than online (3%)"
    - "Mortality charges are refunded only on maturity and only if all due premiums are paid"
  decision_flags: ["ulip", "market_risk", "5y_lock_in", "life_cover", "mortality_charge_refund"]

calculation_inputs:
  required_inputs: ["age", "annualized_premium", "premium_paying_term", "policy_term", "bsa_multiple", "fund_choice"]
  optional_inputs: ["top_up_premium", "partial_withdrawals", "accident_rider"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "annualized_premium * bsa_multiple"
    death_benefit: "max(bsa - partial_withdrawals_last_2y, base_premium_fund_value, 1.05 * total_base_premiums) + max(topup_sum_assured, topup_premium_fund_value, 1.05 * total_topup_premiums)"
    maturity_benefit: "base_premium_fund_value + topup_premium_fund_value + cumulative_mortality_charges"
    surrender_after_lockin: "unit_fund_value"
    surrender_before_lockin: "unit_fund_value - discontinuance_charge, held in Discontinued Policy Fund until end of 5 years"
  assumptions:
    - "Unit Fund Value = units held × NAV; NAV is net of the 1.35% p.a. fund management charge"
    - "Mortality charges are age-specific and deducted monthly from units"
    - "Illustrative calculations need an assumed gross return; the plan has no guaranteed rate"

sources:
  - name: "Customer Information Sheet (CIS), 10-12-2025"
    url: "https://licindia.in/documents/20121/1325029/CIS_LIC%27s+Protection+Plus_10122025_CC.pdf/6f539c9a-a449-e8a0-7121-9b2d49dc41e5?t=1765472045137"
  - name: "Sales Brochure, 05-12-2025"
    url: "https://licindia.in/documents/20121/1319704/LIC+Protection+plus+Sales+brochure+English_05122025.pdf/f69f076b-87fe-7362-54cc-1cebc7fd2511?t=1764919517315"
  - name: "Policy Document, 01-12-2025"
    url: "https://licindia.in/documents/20121/1385382/Policy+Document_LIC%27s++Protection+Plus+01122025_CC.pdf/6118f65c-f5c0-631a-65e2-0e41da67165e?t=1764741636221"
---
# LIC's Protection Plus — Plan 886

**One-line summary:** A market-linked ULIP that bundles life cover with savings, offers six funds and top-ups, and refunds all mortality charges if the policy is held to maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 886 |
| UIN | 512L361V01 |
| Product type | Non-par, linked, individual savings plan |
| Status | Active (launched December 2025) |
| Entry age | 18 to 65 (50 maximum for PPT 5) |
| Policy term | 10 / 15 / 20 / 25 years |
| Premium paying term | 5 / 7 / 10 / 15 years |
| Minimum premium | ₹60,000/year (PPT 5/7/10); ₹36,000/year (PPT 15) |
| Minimum sum assured | 7× annualized premium below age 50; 5× at age 50+ |
| Lock-in | 5 years |
| Official page | https://licindia.in/web/guest/lic-s-protection-plus |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 completed years |
| Maximum entry age | 50 years for PPT 5; 65 years for PPT 7/10/15 (nearer birthday) |
| Maximum maturity age | 75 / 80 / 85 / 90 years for terms 10 / 15 / 20 / 25 |
| PPT–term combinations | PPT 5/7/10: term 10/15/20/25; PPT 15: term 15/20/25 |
| Minimum Basic Sum Assured | 7 × annualized premium (entry age < 50); 5 × (age ≥ 50) |

The maximum Basic Sum Assured multiple depends on entry age, PPT and whether the annualized premium is at least ₹60,000. The brochure table runs from multiple 7 to 40, with younger ages and longer PPTs permitting the highest multiples. All maximums are subject to LIC's underwriting policy.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly, and monthly through NACH.
- **Minimum modal premiums (PPT 5/7/10):** ₹5,000 monthly, ₹15,000 quarterly, ₹30,000 half-yearly, ₹60,000 yearly.
- **Minimum modal premiums (PPT 15):** ₹3,000 monthly, ₹9,000 quarterly, ₹18,000 half-yearly, ₹36,000 yearly.
- **Multiples:** ₹1,000 for yearly, ₹500 for half-yearly, ₹250 for quarterly/monthly.
- **Maximum premium:** no limit, subject to underwriting.
- **Basic Sum Assured:** annualized premium × BSA multiple.
- **Top-ups:** minimum ₹1,000, in multiples of ₹1,000; Top-up Sum Assured = 1.25 × top-up premium.

Maximum Basic Sum Assured multiple (annualized premium ≥ ₹60,000):

| Entry age | PPT 5 | PPT 7 | PPT 10 | PPT 15 |
|---|---:|---:|---:|---:|
| 18–30 | 20 | 22 | 22 | 40 |
| 31–40 | 12 | 12 | 12 | 25 |
| 41–45 | 12 | 12 | 12 | 20 |
| 46–50 | 8 | 8 | 8 | 10 |
| 51–55 | NA | 7 | 7 | 10 |
| 56–65 | NA | 7 | 7 | 7 |

For annualized premium below ₹60,000, only PPT 15 is available; the maximum multiples are 30 (18–30), 20 (31–40), 15 (41–45), 10 (46–50) and 7 (51–65).

This is a ULIP: the policyholder chooses the premium, BSA multiple, PPT and term, so there is no single premium rate table. Premium illustrations must be built from the chosen premium and assumed fund return, net of the charges below.

## Benefits

### Death benefit
On death before maturity, the payable amount is the highest of:

1. Basic Sum Assured reduced by partial withdrawals made in the two years before death;
2. Base Premium Fund Value; or
3. 105% of total Base Premiums paid.

Where top-up premiums were paid, an additional amount equal to the highest of the Top-up Sum Assured, Top-up Premium Fund Value, or 105% of total Top-up Premiums paid also applies.

### Maturity benefit
Unit Fund Value on the maturity date, plus a refund of all mortality charges deducted from the Base and Top-up Premium Funds. The refund requires all due premiums to have been paid; it is not available on surrender or discontinuance.

### Other benefits and options
- Partial withdrawals after the 5-year lock-in.
- Four free fund switches per policy year; ₹100 per subsequent switch.
- Increase/decrease Basic Sum Assured, subject to underwriting and age limits.
- Settlement option: death benefit in instalments over up to 5 years.

## Charges

| Charge | Amount |
|---|---|
| Premium allocation — offline | 8.00% year 1; 5.50% years 2-5; 3.00% thereafter |
| Premium allocation — online | 3.00% year 1; 2.00% years 2-5; 1.00% thereafter |
| Premium allocation — top-up | 2.50% offline; 1.50% online |
| Mortality charge | Age-specific, monthly, per ₹1,000 sum at risk |
| Fund management charge | 1.35% p.a. for all six funds; 0.50% p.a. for Discontinued Policy Fund |
| Policy administration | Nil years 1-5; ₹85/month (premium < ₹60,000) or ₹100/month (premium ≥ ₹60,000) in year 6, escalating 5% p.a. |
| Switching | ₹100 after 4 free switches per year |
| Partial withdrawal | ₹100 per withdrawal |
| Discontinuance | Up to 20% of (annualized premium or fund value), capped by policy year |
| Miscellaneous alteration | ₹100 |

Sample annual mortality charges per ₹1,000 sum at risk: age 25 ₹1.17; age 35 ₹1.50; age 45 ₹3.22; age 50 ₹5.55; age 60 ₹13.95.

## Surrender, loan, paid-up and revival

- **Surrender:** allowed any time. Within the 5-year lock-in, the fund value less discontinuance charge goes to the Discontinued Policy Fund and is payable at the end of the lock-in. After 5 years, the Unit Fund Value is payable.
- **Loan:** not available.
- **Paid-up:** after the lock-in, non-payment converts the policy to reduced paid-up; it can be revived or withdrawn.
- **Revival:** within 3 years, before maturity, subject to conditions.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly/half-yearly/quarterly; 15 days for monthly NACH.

## Exclusions and conditions

The only stated exclusion is suicide within 12 months of commencement or revival; in that case the nominee receives the Unit Fund Value. Standard policy-document conditions on misstatement, fraud and revival apply.

## Tax treatment

The CIS and brochure do not state the tax treatment. ULIP taxation depends on the prevailing Income Tax Act provisions and the policy's premium/sum-assured relationship; confirm current treatment before using it in an adviser.

## Suitability and decision notes

**Best suited to:** long-horizon savers who want life cover plus market-linked growth and are comfortable with fund selection and ULIP charges.

**Poor fit for:** buyers whose main need is pure protection (term cover is cheaper), anyone needing guaranteed returns or liquidity within five years, and investors unwilling to bear market risk.

**Key trade-offs:** the 5-year lock-in, market risk, higher offline allocation charges, and the fact that the mortality-charge refund is contingent on holding to maturity with all premiums paid.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Determines maximum entry age and BSA multiple |
| Annualized premium | Yes | Must meet modal minimums |
| PPT | Yes | 5/7/10/15 |
| Policy term | Yes | 10/15/20/25, subject to PPT |
| BSA multiple | Yes | Within min/max for age and PPT |
| Fund choice | Yes | Six funds, different risk levels |
| Assumed gross return | For projections | No guaranteed rate |
| Top-ups | Optional | Each gets 1.25× sum assured |
| Partial withdrawals | Optional | Reduce death benefit for 2 years |

Core formulas:

```text
Basic Sum Assured      = annualized_premium × bsa_multiple
Death Benefit          = max(BSA − recent_partial_withdrawals,
                             base_premium_fund_value,
                             1.05 × total_base_premiums_paid)
                         + top-up component
Maturity Benefit       = base_premium_fund_value
                         + topup_premium_fund_value
                         + cumulative_mortality_charges_deducted
Surrender (after 5y)   = unit_fund_value
Surrender (before 5y)  = unit_fund_value − discontinuance_charge
                         (paid at end of the 5-year lock-in)
```

## Source documents

- [Customer Information Sheet (CIS)](https://licindia.in/documents/20121/1325029/CIS_LIC%27s+Protection+Plus_10122025_CC.pdf/6f539c9a-a449-e8a0-7121-9b2d49dc41e5?t=1765472045137)
- [Sales Brochure](https://licindia.in/documents/20121/1319704/LIC+Protection+plus+Sales+brochure+English_05122025.pdf/f69f076b-87fe-7362-54cc-1cebc7fd2511?t=1764919517315)
- [Policy Document](https://licindia.in/documents/20121/1385382/Policy+Document_LIC%27s++Protection+Plus_01122025_CC.pdf/6118f65c-f5c0-631a-65e2-0e41da67165e?t=1764741636221)
- [Official product page](https://licindia.in/web/guest/lic-s-protection-plus)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
