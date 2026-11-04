---
plan_number: 873
plan_name: "LIC's Index Plus"
uin: "512L354V01"
insurer: "Life Insurance Corporation of India"
category: "ULIP"
product_type: "Non-Par, Linked, Life, Individual Savings plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-index-plus-873-512l354v01"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0.25
  entry_age_max: 60
  entry_age_notes: "Minimum 90 days completed. Maximum 50 years (nearer birthday) for the 10× Basic Sum Assured; maximum 60 years (nearer birthday) for the 7× Basic Sum Assured."
  maturity_age_max: 85
  maturity_age_notes: "Minimum maturity age 18 years completed. Maximum 85 years (nearer birthday) for the 7× BSA; 75 years (nearer birthday) for the 10× BSA."
  policy_terms_years: [10, 25]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 25
  premium_paying_terms_years: [10, 25]
  ppt_min_years: 10
  ppt_max_years: 25
  ppt_term_pairs: "Premium paying term equals the policy term. For annualized premium below ₹48,000 the term is 15-25 years; for ₹48,000 and above it is 10-25 years."
  min_sum_assured: "7 × annualized premium, or 10 × annualized premium where entry age is 50 or below"
  max_sum_assured: "10 × annualized premium for entry age up to 50; 7 × annualized premium for entry age 51-60"
  min_premium_by_mode:
    monthly: 2500
    quarterly: 7500
    half_yearly: 15000
    yearly: 30000
  min_premium_notes: "Annualized premium minimum ₹30,000. Multiples: ₹1,000 yearly, ₹500 half-yearly, ₹250 quarterly and monthly NACH."
  max_premium: "No limit, subject to underwriting"

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Not specified in the official documents"
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: 30000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Age 30, policy term and PPT 25 years, half-yearly premium ₹50,000 (annualized ₹1,00,000), BSA ₹10,00,000 (10× annualized premium), offline purchase, Flexi Growth Fund, no accident rider"
      note: "Published sample illustration at 4% and 8% p.a. gross returns; returns are not guaranteed. Net yield at 8% is 6.30% p.a. The maturity figure is labelled 'Total Maturity Benefit (Fund Value)' and does not add the separate refund of mortality charges, which is payable if all premiums are paid."
      assumed_returns_pct: [4, 8]
      net_yield_at_8pct_pct: 6.30
      maturity_benefit_4pct: 3414179
      maturity_benefit_8pct: 5971827
      rows:
        - year: 6
          cumulative_premium: 600000
          guaranteed_addition: 5000
          fund_value_4pct: 612928
          death_benefit_4pct: 1000000
          fund_value_8pct: 695658
          death_benefit_8pct: 1000000
        - year: 10
          cumulative_premium: 1000000
          guaranteed_addition: 10000
          fund_value_4pct: 1088404
          death_benefit_4pct: 1088404
          fund_value_8pct: 1342830
          death_benefit_8pct: 1342830
        - year: 15
          cumulative_premium: 1500000
          guaranteed_addition: 20000
          fund_value_4pct: 1762609
          death_benefit_4pct: 1762609
          fund_value_8pct: 2426583
          death_benefit_8pct: 2426583
        - year: 20
          cumulative_premium: 2000000
          guaranteed_addition: 25000
          fund_value_4pct: 2531514
          death_benefit_4pct: 2531514
          fund_value_8pct: 3917165
          death_benefit_8pct: 3917165
        - year: 25
          cumulative_premium: 2500000
          guaranteed_addition: 30000
          fund_value_4pct: 3414179
          death_benefit_4pct: 3414179
          fund_value_8pct: 5971827
          death_benefit_8pct: 5971827
  premium_formula: "Basic Sum Assured = annualized premium × 10 if entry age is 50 or below and the 10× option is chosen, otherwise 7 × annualized premium."
  notes: "No premium rate table exists for this ULIP; the policyholder chooses the annualized premium subject to the ₹30,000 minimum. Annualized premium below ₹48,000 requires a term of at least 15 years."

benefits:
  death_benefit: "On death before maturity while the policy is in force, the highest of: (1) Basic Sum Assured less partial withdrawals made in the two years before death; (2) Unit Fund Value on the date of intimation of death; or (3) 105% of total premiums received to date less such partial withdrawals. Mortality, accident, policy administration and tax charges recovered after death are added back, and guaranteed additions credited after death are reversed."
  death_benefit_formula: "max(bsa - partial_withdrawals_last_2y, unit_fund_value, 1.05 * total_premiums_paid - partial_withdrawals_last_2y)"
  maturity_benefit: "Unit Fund Value on the maturity date plus a refund of all mortality charges deducted for the life cover, provided all due premiums have been paid. The refund excludes extra underwriting charges and tax on mortality charges, and is not paid on surrender or discontinuance."
  maturity_benefit_formula: "unit_fund_value + cumulative_mortality_charges_deducted_excluding_underwriting_extras_and_tax"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed Additions as a percentage of one annualized premium at the end of policy years 6, 10, 15, 20 and 25. For annualized premium below ₹48,000: 3%, 6%, 12%, 15% and 18%. For annualized premium of ₹48,000 and above: 5%, 10%, 20%, 25% and 30%. Payable only while in force; not payable in reduced paid-up status; reduced pro rata after partial withdrawals."
  non_guaranteed_benefits: "The Unit Fund Value depends on the NAV of the chosen index fund and is not guaranteed."
  riders: ["LIC's Linked Accidental Death Benefit Rider (UIN: 512A211V02)"]
  other_benefits:
    - "Two NIFTY-based funds: Flexi Growth Fund (invests in select NIFTY100 stocks) and Flexi Smart Growth Fund (invests in select NIFTY50 stocks)"
    - "Partial withdrawals after the 5-year lock-in, within annual percentage limits"
    - "Four free fund switches per policy year; ₹100 per subsequent switch"
    - "Settlement option: death benefit in instalments over up to 5 years"
    - "Refund of mortality charges at maturity if all premiums are paid"

policy_features:
  loan: false
  surrender: true
  surrender_terms: "Before 5 years: Unit Fund Value less discontinuance charge is transferred to the Discontinued Policy Fund; proceeds (higher of DPF value or accumulation at the guaranteed rate, currently 4% p.a.) are payable at the end of the 5-year lock-in. After 5 years: Unit Fund Value is payable with no discontinuance charge."
  paid_up: true
  paid_up_terms: "If premiums stop after the 5-year lock-in, the policy becomes reduced paid-up after the grace period. Paid-up Sum Assured = Basic Sum Assured × (premiums paid / premiums payable); rider cover ceases and all charges except the accident benefit charge continue. The policy may be revived within 3 years or withdrawn."
  revival: true
  revival_period_years: 3
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: true
  partial_withdrawal_terms: "After the fifth policy anniversary while the policy is in force. Maximum per policy year as % of Unit Fund: 20% (years 6-10), 25% (years 11-15), 30% (years 16-20), 35% (years 21-25). Minimum balance after withdrawal: 4 annualized premiums if AP is below ₹48,000, otherwise 3 annualized premiums. Charge ₹100 per withdrawal. BSA is reduced by the withdrawal amount for two years, then restored; future guaranteed additions are reduced pro rata. For a minor, withdrawals are allowed only from age 18."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement or revival: the nominee receives the Unit Fund Value. The clause does not apply where the age at entry or revival is below 8 years."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Tax charge applies to charges at the prevailing rate; the benefit illustration notes that GST is currently exempted"
  notes: "The brochure only says income-tax benefits and implications on premiums and benefits should be checked with a tax adviser. No Section 80C or 10(10D) confirmation is given."

decision:
  primary_goals: ["savings", "protection", "market_linked_growth"]
  risk_profile: "Market-linked"
  liquidity: "Low"
  time_horizon: "Long"
  minimum_age: 0.25
  maximum_age: 60
  suitable_for:
    - "Regular savers who want life cover plus index-linked equity growth"
    - "Investors who want equity exposure drawn from the NIFTY50 or NIFTY100 universe"
    - "Buyers who value the refund of mortality charges at maturity"
    - "People who can commit to premiums for at least 10-15 years"
  not_suitable_for:
    - "Pure protection buyers; a term plan gives more cover for less"
    - "Anyone needing the money within the 5-year lock-in"
    - "Investors seeking guaranteed returns or capital protection"
    - "Buyers who want a wide choice of funds, top-ups or changes to the sum assured"
  key_tradeoffs:
    - "5-year lock-in and full equity-market risk; both funds carry a very high risk rating"
    - "Only two index funds, both tracking large-cap indices"
    - "Offline allocation charge is 8% in year 1; policy administration charge starts in year 6"
    - "Mortality-charge refund requires holding to maturity with all premiums paid"
    - "No top-ups and no increase or decrease of the Basic Sum Assured"
  decision_flags: ["ulip", "nifty-based-fund", "regular-premium", "5y-lock-in", "market-risk", "life-cover", "mortality-charge-refund", "no-top-up", "no-loan"]

calculation_inputs:
  required_inputs: ["age_at_entry", "annualized_premium", "bsa_multiple", "policy_term", "fund_choice"]
  optional_inputs: ["accident_rider", "partial_withdrawals", "settlement_option"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "annualized_premium * (10 if entry_age <= 50 and 10x chosen else 7)"
    death_benefit: "max(bsa - partial_withdrawals_last_2y, unit_fund_value, 1.05 * total_premiums_paid - partial_withdrawals_last_2y)"
    maturity_benefit: "unit_fund_value + cumulative_mortality_charges_deducted (excluding underwriting extras and tax)"
    guaranteed_addition: "annualized_premium * ga_rate(year), converted to units at NAV on the allocation date"
    paid_up_sum_assured: "bsa * premiums_paid / premiums_payable"
    surrender_after_lockin: "unit_fund_value"
    surrender_before_lockin: "(unit_fund_value - discontinuance_charge) accumulated at the guaranteed rate (currently 4% p.a.) until the end of the 5-year lock-in"
  assumptions:
    - "Unit Fund Value = units held × NAV; NAV is net of the 1.35% p.a. fund management charge"
    - "Mortality charges are age-specific and deducted monthly from units"
    - "The 4% and 8% illustrations are gross investment returns before charges and are not guaranteed"
    - "The maturity illustration is labelled as fund value; the separate mortality-charge refund is not added to it"

sources:
  - name: "Customer Information Sheet (CIS), 04-10-2024"
    url: "https://licindia.in/documents/20121/1244160/CIS_Index+Plus_PDF+File.pdf/0d819c1c-a846-db4a-3d8d-205c8e46b53d?t=1728037262334"
  - name: "Sales Brochure, 14-10-2025"
    url: "https://licindia.in/documents/20121/1319704/LIC++Index+Plus+Sales+Brochure_141025.pdf/94818313-c077-a709-fde7-58833a5874a3?t=1760429342629"
  - name: "Policy Document, 01-10-2024"
    url: "https://licindia.in/documents/20121/1244160/Final+Policy+document_LICs+Index+Plus_CC01102024.pdf/8ba7ff08-df02-6cc7-b063-8429e64eeb57?t=1728036002181"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-index-plus-873-512l354v01"
---
# LIC's Index Plus — Plan 873

**One-line summary:** A regular-premium ULIP savings plan with life cover that invests in one of two NIFTY-based funds, pays guaranteed additions and refunds mortality charges if held to maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 873 |
| UIN | 512L354V01 |
| Product type | Non-par, linked, life, individual savings plan |
| Status | Active |
| Entry age | 90 days to 50 years (10× BSA); 51 to 60 years (7× BSA) |
| Policy term | 10-25 years (AP ₹48,000+); 15-25 years (AP below ₹48,000) |
| Premium paying term | Same as policy term |
| Minimum premium | ₹30,000/year; ₹15,000 half-yearly; ₹7,500 quarterly; ₹2,500 monthly |
| Basic Sum Assured | 7× or 10× annualized premium, depending on entry age |
| Lock-in | 5 years |
| Official page | https://licindia.in/web/guest/lic-s-index-plus-873-512l354v01 |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 90 days completed |
| Maximum entry age | 50 years (nearer birthday) for 10× BSA; 60 years for 7× BSA |
| Minimum maturity age | 18 years completed |
| Maximum maturity age | 85 years for 7× BSA; 75 years for 10× BSA |
| Policy term | 10-25 years if AP is ₹48,000 or more; 15-25 years if AP is below ₹48,000 |
| Premium paying term | Same as policy term |
| Basic Sum Assured | 7× annualized premium, or 10× where entry age is 50 or below |

Risk starts immediately at entry age 8 or above; below age 8 it starts on the earlier of two years from commencement or the anniversary nearest age 8. A policy on a minor vests automatically at the anniversary coinciding with or immediately following age 18.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly and monthly NACH.
- **Minimum premiums:** ₹30,000 yearly, ₹15,000 half-yearly, ₹7,500 quarterly, ₹2,500 monthly.
- **Multiples:** ₹1,000 yearly, ₹500 half-yearly, ₹250 quarterly and monthly.
- **Maximum premium:** no limit, subject to underwriting.
- **Basic Sum Assured:** 7× annualized premium; 10× is available at entry age 50 or below.
- **Term restriction:** annualized premium below ₹48,000 requires a term of at least 15 years.

There is no published premium rate table. The policyholder chooses the premium, BSA multiple, term and fund. The brochure publishes one sample benefit illustration at 4% and 8% p.a.

### Illustrative premiums

Age 30, term and PPT 25 years, half-yearly premium ₹50,000 (annualized ₹1,00,000), BSA ₹10,00,000, offline purchase, Flexi Growth Fund, no accident rider. Maturity benefit is ₹34,14,179 at 4% and ₹59,71,827 at 8%; net yield at 8% is 6.30% p.a.

| Year | Cumulative premium | GA | Fund value at 4% | Death benefit at 4% | Fund value at 8% | Death benefit at 8% |
|---|---|---|---|---|---|---|
| 6 | 6,00,000 | 5,000 | 6,12,928 | 10,00,000 | 6,95,658 | 10,00,000 |
| 10 | 10,00,000 | 10,000 | 10,88,404 | 10,88,404 | 13,42,830 | 13,42,830 |
| 15 | 15,00,000 | 20,000 | 17,62,609 | 17,62,609 | 24,26,583 | 24,26,583 |
| 20 | 20,00,000 | 25,000 | 25,31,514 | 25,31,514 | 39,17,165 | 39,17,165 |
| 25 | 25,00,000 | 30,000 | 34,14,179 | 34,14,179 | 59,71,827 | 59,71,827 |

The maturity figure is the published fund value; the additional mortality-charge refund is not separately quantified.

## Benefits

### Death benefit

On death before maturity while the policy is in force, the highest of:

1. Basic Sum Assured less partial withdrawals made in the two years before death;
2. Unit Fund Value on the date of intimation of death; or
3. 105% of total premiums received to date, less partial withdrawals made in the two years before death.

Charges recovered after death are added back and post-death guaranteed additions are reversed. The benefit may be paid in lump sum or through the settlement option.

### Maturity benefit

Unit Fund Value plus a refund of all mortality charges deducted for the life cover, provided all due premiums have been paid. The refund excludes extra underwriting charges and tax on mortality charges. It is not paid if the policy is surrendered or discontinued.

### Guaranteed additions

| End of policy year | 6 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|
| AP below ₹48,000 (% of one AP) | 3% | 6% | 12% | 15% | 18% |
| AP ₹48,000 and above (% of one AP) | 5% | 10% | 20% | 25% | 30% |

Additions are converted to units at the fund NAV and credited only while the policy is in force. They are not payable in reduced paid-up status and are reduced pro rata after partial withdrawals.

### Other benefits and options

- Partial withdrawals after the fifth policy anniversary.
- Four free switches per policy year; ₹100 per later switch.
- Settlement option for the death benefit over up to five years.
- Optional accidental death rider.

## Charges and optional benefits

### Funds

| Fund | Government / government-guaranteed securities | Money market | Listed equity | Stock universe | Risk | SFIN |
|---|---|---|---|---|---|---|
| Flexi Growth Fund | 0%-20% | 0%-40% | 40%-100% | NSE NIFTY100 | Very high | ULIF00510/11/23LICULIPFLX512 |
| Flexi Smart Growth Fund | 0%-20% | 0%-40% | 40%-100% | NSE NIFTY50 | Very high | ULIF00610/11/23LICULIPFSG512 |

The Discontinued Policy Fund (SFIN ULIF001201114LICDPFNLIF512) invests 0%-40% in money market instruments and 60%-100% in government securities.

### Charges

| Charge | Amount |
|---|---|
| Premium allocation — year 1 | 8.00% offline; 3.00% online |
| Premium allocation — years 2-5 | 5.50% offline; 2.00% online |
| Premium allocation — year 6 onwards | 4.00% offline; 1.50% online |
| Mortality | Age-specific, monthly, per ₹1,000 sum at risk; sample annual rates: age 25 ₹1.26, age 35 ₹1.62, age 45 ₹3.48, age 50 ₹5.99, age 60 ₹15.07 |
| Accident benefit | ₹0.40 per ₹1,000 Accident Benefit Sum Assured p.a.; ₹0.80 for police duty |
| Fund management | 1.35% p.a. for both index funds; 0.50% p.a. for the Discontinued Policy Fund |
| Policy administration | Nil for years 1-5; from year 6, monthly charge of the lower of (3.25%/12 × annualized premium) or ₹125, escalating 5% p.a. from year 7, capped at ₹500 per month |
| Switching | Four free per policy year; ₹100 per subsequent switch |
| Partial withdrawal | ₹100 per withdrawal |
| Discontinuance | See table below |
| Bid-offer spread | Nil |
| Miscellaneous | ₹100 per alteration, such as a change of premium mode or grant of the accident rider |
| Tax | Tax charge at the prevailing rate on applicable charges |

**Discontinuance charge:**

| Policy year | Annualized premium up to ₹50,000 | Annualized premium above ₹50,000 |
|---|---|---|
| 1 | Lower of 20% × (AP or FV), max ₹3,000 | Lower of 6% × (AP or FV), max ₹6,000 |
| 2 | Lower of 15% × (AP or FV), max ₹2,000 | Lower of 4% × (AP or FV), max ₹5,000 |
| 3 | Lower of 10% × (AP or FV), max ₹1,500 | Lower of 3% × (AP or FV), max ₹4,000 |
| 4 | Lower of 5% × (AP or FV), max ₹1,000 | Lower of 2% × (AP or FV), max ₹2,000 |
| 5 onwards | Nil | Nil |

Mortality and accident benefit charges cannot be revised; other charges can be revised with three months' notice and within IRDAI caps.

### Optional benefits

- **Accidental Death Benefit Rider (UIN 512A211V02):** may be opted for at any policy anniversary while at least five years of term remain and before the anniversary at age 65; cover lasts to maturity or age 70, whichever is earlier. The Accident Benefit Sum Assured cannot exceed the BSA and the rider is not available on a minor's life during minority.
- **Partial withdrawals:** after the fifth policy anniversary while the policy is in force, subject to the limits and minimum balance above.
- **Switching:** the entire fund value moves to the other index fund; four free switches a year.
- **Settlement option:** instalments over up to five years.
- **Top-ups:** not allowed.
- **Increase/decrease BSA:** not allowed.

## Surrender, loan, paid-up and revival

- **Surrender:** allowed at any time. Within five years the Unit Fund Value less discontinuance charge goes to the Discontinued Policy Fund and is paid at the end of the lock-in, subject to the 4% p.a. guaranteed minimum accumulation. After five years the Unit Fund Value is paid with no discontinuance charge. If the life assured dies after surrender but before the lock-in ends, the DPF proceeds are paid to the nominee immediately. A surrendered policy cannot be reinstated.
- **Loan:** not available.
- **Paid-up:** after five years, non-payment converts the policy to reduced paid-up after the grace period. Paid-up Sum Assured = BSA × (premiums paid / premiums payable); rider cover ceases, all charges except the accident benefit charge continue, and the policy can be revived within three years or withdrawn.
- **Revival:** within three years from the first unpaid premium and before maturity, subject to underwriting and payment of due premiums without interest.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly, half-yearly and quarterly; 15 days for monthly NACH.
- **Compulsory termination:** if the policy has run five years with five full years' premiums paid and the fund cannot recover the relevant charges, it is terminated and any balance is refunded.

## Exclusions and conditions

The stated exclusion is suicide within 12 months of commencement or revival; the nominee receives the Unit Fund Value. The clause does not apply where the age at entry or revival is below 8 years. There is no waiting or lien period.

The policy is subject to the standard conditions on misstatement, fraud and revival in the policy document. Nomination and assignment are allowed under Sections 39 and 38 of the Insurance Act, 1938.

## Tax treatment

The CIS and brochure do not state Section 80C or Section 10(10D) eligibility. They say statutory taxes on charges apply at the prevailing rate and that income-tax benefits and implications should be checked with a tax adviser. The benefit illustration states that the prevailing tax charge (GST) is currently exempted. Confirm the current treatment before relying on it.

## Suitability and decision notes

**Best suited to:** regular savers who want life cover plus equity growth from stocks in the NIFTY50 or NIFTY100 universe, and who value the maturity refund of mortality charges.

**Poor fit for:** pure protection buyers, anyone needing money within five years, investors seeking guaranteed returns, and buyers who want a broad fund menu, top-ups or changes to the sum assured.

**Key trade-offs:** the five-year lock-in and full equity-market risk; only two NIFTY-based funds, both rated very high risk; an 8% first-year offline allocation charge and policy administration charges from year 6; and a mortality refund contingent on paying all premiums to maturity. No top-ups, no BSA changes and no loan facility.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 90 days to 60; sets available BSA multiple and maximum maturity age |
| Annualized premium | Yes | At least ₹30,000; modal minimums apply |
| BSA multiple | Yes | 7×, or 10× if entry age is 50 or below |
| Policy term / PPT | Yes | Same value; 10-25 years if AP ≥ ₹48,000, else 15-25 |
| Fund choice | Yes | Flexi Growth (NIFTY100) or Flexi Smart Growth (NIFTY50) |
| Assumed gross return | For projections | 4% and 8% used in the brochure; not guaranteed |
| Accident rider | Optional | ₹0.40 per ₹1,000 ABSA p.a. |
| Partial withdrawals | Optional | Reduce BSA for two years and guaranteed additions pro rata |

Core formulas:

```text
Basic Sum Assured      = annualized_premium × 10   (entry age ≤ 50, 10× option)
                       = annualized_premium × 7    (otherwise)
Death Benefit          = max(BSA − partial_withdrawals_last_2y,
                             unit_fund_value,
                             1.05 × total_premiums_paid
                               − partial_withdrawals_last_2y)
Maturity Benefit       = unit_fund_value
                         + cumulative_mortality_charges_deducted
                           (excluding underwriting extras and tax)
Guaranteed Addition_t  = annualized_premium × ga_rate_t
Paid-up Sum Assured    = BSA × premiums_paid / premiums_payable
Surrender (after 5y)   = unit_fund_value
Surrender (before 5y)  = (unit_fund_value − discontinuance_charge)
                         accumulated at the guaranteed rate (currently 4% p.a.)
                         until the end of the 5-year lock-in
```

Key assumptions: Unit Fund Value = units × NAV, with NAV net of the 1.35% p.a. FMC; mortality charges are age-specific and deducted monthly; the 4%/8% returns are illustrative and not guaranteed.

## Source documents

- [Customer Information Sheet (CIS), 04-10-2024](https://licindia.in/documents/20121/1244160/CIS_Index+Plus_PDF+File.pdf/0d819c1c-a846-db4a-3d8d-205c8e46b53d?t=1728037262334)
- [Sales Brochure, 14-10-2025](https://licindia.in/documents/20121/1319704/LIC++Index+Plus+Sales+Brochure_141025.pdf/94818313-c077-a709-fde7-58833a5874a3?t=1760429342629)
- [Policy Document, 01-10-2024](https://licindia.in/documents/20121/1244160/Final+Policy+document_LICs+Index+Plus_CC01102024.pdf/8ba7ff08-df02-6cc7-b063-8429e64eeb57?t=1728036002181)
- [Official product page](https://licindia.in/web/guest/lic-s-index-plus-873-512l354v01)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
