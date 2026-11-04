---
plan_number: 752
plan_name: "LIC's SIIP"
uin: "512L334V02"
insurer: "Life Insurance Corporation of India"
category: "ULIP"
product_type: "Non-Par, Linked, Life, Individual, Savings plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-siip"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0.08
  entry_age_max: 65
  entry_age_notes: "Minimum 30 days completed. Maximum 54 years (nearer birthday) for the 10× Basic Sum Assured; maximum 65 years for the 7× Basic Sum Assured."
  maturity_age_max: 85
  maturity_age_notes: "Minimum maturity age 18 years completed; maximum 85 years (nearer birthday)."
  policy_terms_years: [10, 25]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 25
  premium_paying_terms_years: [10, 25]
  ppt_min_years: 10
  ppt_max_years: 25
  ppt_term_pairs: "Premium paying term equals the policy term; any whole term from 10 to 25 years."
  min_sum_assured: "10 × annualized premium for entry age up to 54 years; 7 × annualized premium for entry age 55-65 years"
  max_sum_assured: "Same as the applicable multiple (10× or 7× annualized premium); the multiple is determined by entry age."
  min_premium_by_mode:
    monthly: 3500
    quarterly: 10500
    half_yearly: 21000
    yearly: 42000
  min_premium_notes: "Annualized premium minimum ₹42,000. Premiums in multiples of ₹1,000 for yearly, half-yearly and quarterly modes; ₹250 for monthly NACH."
  max_premium: "No limit, subject to underwriting"

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)"]
  frequency_loadings: "Not specified in the official documents"
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: 42000
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Age 35, yearly premium ₹60,000, policy term and PPT 15 years, BSA ₹6,00,000 (10× annualized premium), offline purchase, Bond Fund, no rider"
      note: "Published sample illustration at 4% and 8% p.a. gross returns; returns are not guaranteed. Net yield at 8% is 6.01% p.a. The brochure labels the maturity figure 'Total Maturity Benefit (Fund Value)'; the contractual maturity benefit also includes a refund of mortality charges if all premiums are paid, which the table does not separately show."
      assumed_returns_pct: [4, 8]
      net_yield_at_8pct_pct: 6.01
      maturity_benefit_4pct: 1059263
      maturity_benefit_8pct: 1471897
      rows:
        - year: 6
          cumulative_premium: 360000
          guaranteed_addition: 3000
          fund_value_4pct: 368874
          death_benefit_4pct: 600000
          fund_value_8pct: 422761
          death_benefit_8pct: 600000
        - year: 10
          cumulative_premium: 600000
          guaranteed_addition: 6000
          fund_value_4pct: 653967
          death_benefit_4pct: 653967
          fund_value_8pct: 815018
          death_benefit_8pct: 815018
        - year: 15
          cumulative_premium: 900000
          guaranteed_addition: 9000
          fund_value_4pct: 1059263
          death_benefit_4pct: 1059263
          fund_value_8pct: 1471897
          death_benefit_8pct: 1471897
  premium_formula: "Basic Sum Assured = annualized premium × 10 if entry age is 54 or below, or × 7 if entry age is 55-65."
  notes: "No premium rate table exists for this ULIP; the annualized premium is chosen subject to the ₹42,000 minimum. Guaranteed additions are percentages of one annualized premium."

benefits:
  death_benefit: "On death before maturity while the policy is in force, the highest of: (1) Basic Sum Assured less partial withdrawals made in the two years before death; (2) Unit Fund Value; or (3) 105% of total premiums received to date less such partial withdrawals. Mortality, accident, policy administration and tax charges recovered after death are added back, and guaranteed additions credited after death are reversed."
  death_benefit_formula: "max(bsa - partial_withdrawals_last_2y, unit_fund_value, 1.05 * total_premiums_paid - partial_withdrawals_last_2y)"
  maturity_benefit: "Unit Fund Value plus a refund of all mortality charges deducted for the life cover, provided all due premiums have been paid. The refund excludes extra underwriting charges and tax levied on mortality charges, and is not paid on surrender or discontinuance."
  maturity_benefit_formula: "unit_fund_value + cumulative_mortality_charges_deducted_excluding_underwriting_extras_and_tax"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed Additions of 5%, 10%, 15%, 20% and 25% of one annualized premium at the end of policy years 6, 10, 15, 20 and 25. Payable only while the policy is in force; reduced pro rata after partial withdrawals and not payable in reduced paid-up status."
  non_guaranteed_benefits: "The Unit Fund Value depends on the NAV of the chosen fund and is not guaranteed."
  riders: ["LIC's Linked Accidental Death Benefit Rider (UIN: 512A211V02)"]
  other_benefits:
    - "Choice of four funds: Bond, Secured, Balanced and Growth"
    - "Refund of mortality charges at maturity if all premiums are paid"
    - "Partial withdrawals after the 5-year lock-in, within annual percentage limits"
    - "Four free fund switches per policy year; ₹100 per subsequent switch"
    - "Settlement option: death benefit in instalments over up to 5 years"

policy_features:
  loan: false
  surrender: true
  surrender_terms: "Before 5 years: Unit Fund Value less discontinuance charge is transferred to the Discontinued Policy Fund; proceeds (higher of DPF value or accumulation at the guaranteed rate, currently 4% p.a.) are payable at the end of the 5-year lock-in. After 5 years: Unit Fund Value is payable."
  paid_up: true
  paid_up_terms: "If premiums stop after the 5-year lock-in, the policy becomes reduced paid-up after the grace period. Paid-up Sum Assured = Basic Sum Assured × (premiums paid / premiums payable). Rider cover ceases and all charges except the accident benefit charge continue. The policy may be revived within 3 years or withdrawn."
  revival: true
  revival_period_years: 3
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: true
  partial_withdrawal_terms: "After the fifth policy anniversary and only if all due premiums have been paid. Maximum per policy year as % of Unit Fund: 20% (years 6-10), 25% (years 11-15), 30% (years 16-20), 35% (years 21-25). Minimum balance after withdrawal: 3 annualized premiums. Charge ₹100 per withdrawal. The BSA is reduced by the withdrawal amount for two years and guaranteed additions are reduced pro rata."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement of risk or revival: the nominee receives the Unit Fund Value. The clause does not apply where the age at entry or revival is below 8 years."
  waiting_period: "Not applicable"

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Tax charge applies to charges as per prevailing tax law"
  notes: "The brochure only says income-tax benefits and implications should be checked with a tax adviser. No Section 80C or 10(10D) confirmation is given."

decision:
  primary_goals: ["savings", "protection", "market_linked_growth"]
  risk_profile: "Market-linked"
  liquidity: "Low"
  time_horizon: "Long"
  minimum_age: 0.08
  maximum_age: 65
  suitable_for:
    - "Regular savers who want life cover plus market-linked growth"
    - "Buyers who value the refund of mortality charges at maturity"
    - "Investors who want guaranteed additions tied to annual premium"
    - "People who can commit to premiums for the full policy term"
  not_suitable_for:
    - "Pure protection buyers; a term plan gives more cover for less"
    - "Anyone needing the money within the 5-year lock-in"
    - "Investors seeking guaranteed returns or capital protection"
    - "Buyers who want top-ups or the ability to increase cover"
  key_tradeoffs:
    - "5-year lock-in and full market risk on the fund value"
    - "Offline allocation charge is 8% in year 1; the brochure's years 2-5 offline cell is blank, with only 2% printed in the online column"
    - "Policy administration charge starts at ₹150 per month in year 6 and rises 5% a year"
    - "Mortality-charge refund requires holding to maturity with all premiums paid"
  decision_flags: ["ulip", "regular-premium", "5y-lock-in", "market-risk", "life-cover", "mortality-charge-refund", "guaranteed-additions", "no-top-up"]

calculation_inputs:
  required_inputs: ["age_at_entry", "annualized_premium", "policy_term", "fund_choice"]
  optional_inputs: ["accident_rider", "partial_withdrawals", "settlement_option"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "annualized_premium * (10 if entry_age <= 54 else 7)"
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
  - name: "Customer Information Sheet (CIS), 16-01-2025"
    url: "https://licindia.in/documents/20121/1325029/Final+CIS_LICs+SIIP_website.pdf/012e5b1a-5d6f-7edf-fa7f-5ee73bd5a4cb?t=1737017715607"
  - name: "Sales Brochure, 08-11-2025"
    url: "https://licindia.in/documents/20121/104176/SIIP+Sales+Brochure+%283%29.pdf/9fd04fac-5bb5-2e6d-c014-da9c532c7598?t=1762609247072"
  - name: "Policy Document, 01-01-2025"
    url: "https://licindia.in/documents/20121/1307964/Final_Policydocument_LICs+SIIP_website.pdf/d4314ff4-8be0-631a-3f66-1d777502a449?t=1735734234853"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-siip"
---
# LIC's SIIP — Plan 752

**One-line summary:** A regular-premium ULIP savings plan with life cover, four funds, guaranteed additions and a refund of mortality charges if the policy is held to maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 752 |
| UIN | 512L334V02 |
| Product type | Non-par, linked, life, individual savings plan |
| Status | Active |
| Entry age | 30 days to 54 years (10× BSA); 55 to 65 years (7× BSA) |
| Policy term | 10 to 25 years |
| Premium paying term | Same as policy term |
| Minimum premium | ₹42,000/year; ₹21,000 half-yearly; ₹10,500 quarterly; ₹3,500 monthly |
| Basic Sum Assured | 10× annualized premium (age up to 54) or 7× (age 55-65) |
| Lock-in | 5 years |
| Official page | https://licindia.in/web/guest/lic-s-siip |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 30 days completed |
| Maximum entry age | 54 years (nearer birthday) for 10× BSA; 65 years for 7× BSA |
| Minimum maturity age | 18 years completed |
| Maximum maturity age | 85 years (nearer birthday) |
| Policy term | Any whole term from 10 to 25 years |
| Premium paying term | Same as policy term |
| Basic Sum Assured | 10× annualized premium up to age 54; 7× at ages 55-65 |

The BSA multiple is fixed by entry age. For a minor, the policy automatically vests at the policy anniversary coinciding with or immediately following age 18. Risk starts immediately at entry age 8 or above; below age 8 it starts on the earlier of two years from commencement or the anniversary nearest age 8.

## Premiums and sum assured

- **Modes:** yearly, half-yearly, quarterly and monthly through NACH.
- **Minimum premiums:** ₹42,000 yearly, ₹21,000 half-yearly, ₹10,500 quarterly, ₹3,500 monthly.
- **Multiples:** ₹1,000 for yearly/half-yearly/quarterly; ₹250 for monthly NACH.
- **Maximum premium:** no limit, subject to underwriting.
- **Basic Sum Assured:** 10× annualized premium for entry age up to 54; 7× for entry age 55-65.

There is no published premium rate table; the policyholder chooses the premium and term. The brochure publishes one sample benefit illustration at 4% and 8% p.a.

### Illustrative premiums

Age 35, yearly premium ₹60,000, term and PPT 15 years, BSA ₹6,00,000, offline purchase, Bond Fund, no rider. Maturity benefit is ₹10,59,263 at 4% and ₹14,71,897 at 8%; net yield at 8% is 6.01% p.a.

| Year | Cumulative premium | GA | Fund value at 4% | Death benefit at 4% | Fund value at 8% | Death benefit at 8% |
|---|---|---|---|---|---|---|
| 6 | 3,60,000 | 3,000 | 3,68,874 | 6,00,000 | 4,22,761 | 6,00,000 |
| 10 | 6,00,000 | 6,000 | 6,53,967 | 6,53,967 | 8,15,018 | 8,15,018 |
| 15 | 9,00,000 | 9,000 | 10,59,263 | 10,59,263 | 14,71,897 | 14,71,897 |

GA is the guaranteed addition made at that duration. The maturity figure is the published fund value; the additional mortality-charge refund is not separately quantified.

## Benefits

### Death benefit

On death before maturity while the policy is in force, the highest of:

1. Basic Sum Assured less partial withdrawals made in the two years before death;
2. Unit Fund Value; or
3. 105% of total premiums received to date, less partial withdrawals made in the two years before death.

Charges recovered after death are added back and post-death guaranteed additions are reversed. The benefit may be paid in lump sum or through the settlement option.

### Maturity benefit

Unit Fund Value plus a refund of all mortality charges deducted for the life cover, provided all due premiums have been paid. The refund excludes extra underwriting charges and tax on mortality charges. It is not paid if the policy is surrendered or discontinued.

### Guaranteed additions

| End of policy year | 6 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|
| Addition (% of one annualized premium) | 5% | 10% | 15% | 20% | 25% |

Additions are converted to units at the NAV on the allocation date and are payable only while the policy is in force. They are reduced pro rata after partial withdrawals and are not payable in reduced paid-up status.

### Other benefits and options

- Partial withdrawals after the fifth policy anniversary.
- Four free switches per policy year; ₹100 per later switch.
- Settlement option for the death benefit over up to five years.
- Optional accidental death rider.

## Charges and optional benefits

### Funds

| Fund | Debt / government securities | Money market | Listed equity | Risk | SFIN |
|---|---|---|---|---|---|
| Bond Fund | At least 60% | Up to 40% | Nil | Low | ULIF00124/12/18LICULIPBND512 |
| Secured Fund | 45%-85% | Up to 40% | 15%-55% | Lower to medium | ULIF00224/12/18LICULIPSEC512 |
| Balanced Fund | 30%-70% | Up to 40% | 30%-70% | Medium | ULIF00324/12/18LICULIPBAL512 |
| Growth Fund | 20%-60% | Up to 40% | 40%-80% | High | ULIF00424/12/18LICULIPGRW512 |

The Discontinued Policy Fund (SFIN ULIF001201114LICDPFNLIF512) invests 0%-40% in money market instruments and 60%-100% in government securities.

### Charges

| Charge | Amount |
|---|---|
| Premium allocation — year 1 | 8.00% offline; 3.00% online |
| Premium allocation — years 2-5 | 2% (printed only in the online column; the offline cell is blank in the brochure) |
| Premium allocation — year 6 onwards | 3.00% offline; 1.00% online |
| Policy administration | ₹150 per month from year 6, rising 5% p.a. from year 7, capped at ₹500 per month |
| Mortality | Age-specific, monthly, per ₹1,000 sum at risk; sample annual rates: age 25 ₹1.26, age 35 ₹1.62, age 45 ₹3.48, age 50 ₹5.99, age 60 ₹15.07 |
| Accident benefit | ₹0.40 per ₹1,000 Accident Benefit Sum Assured p.a.; ₹0.80 for police duty |
| Fund management | 1.35% p.a. for the four funds; 0.50% p.a. for the Discontinued Policy Fund |
| Switching | Four free per policy year; ₹100 per subsequent switch |
| Partial withdrawal | ₹100 per withdrawal |
| Discontinuance | See table below |
| Miscellaneous | ₹100 per alteration (for example, change of premium mode) |
| Tax | Tax charge as per prevailing tax law |

**Discontinuance charge:**

| Policy year | Annualized premium up to ₹50,000 | Annualized premium above ₹50,000 |
|---|---|---|
| 1 | Lower of 20% × (AP or FV), max ₹3,000 | Lower of 6% × (AP or FV), max ₹6,000 |
| 2 | Lower of 15% × (AP or FV), max ₹2,000 | Lower of 4% × (AP or FV), max ₹5,000 |
| 3 | Lower of 10% × (AP or FV), max ₹1,500 | Lower of 3% × (AP or FV), max ₹4,000 |
| 4 | Lower of 5% × (AP or FV), max ₹1,000 | Lower of 2% × (AP or FV), max ₹2,000 |
| 5 onwards | Nil | Nil |

There is no bid-offer spread. Mortality and accident benefit charges cannot be revised; other charges can be revised with three months' notice and within IRDAI caps.

### Optional benefits

- **Accidental Death Benefit Rider (UIN 512A211V02):** can be opted for at any policy anniversary while at least five years of term remain and before the anniversary at age 65; cover lasts to maturity or age 70, whichever is earlier. The Accident Benefit Sum Assured cannot exceed the BSA.
- **Partial withdrawals:** after the fifth policy anniversary, subject to the limits and minimum balance above.
- **Switching:** the entire fund value moves to the new fund; four free switches a year.
- **Settlement option:** instalments over up to five years; only the fund management charge applies during payout and the nominee bears investment risk.
- **Top-ups:** not allowed.

## Surrender, loan, paid-up and revival

- **Surrender:** allowed at any time. Within five years the Unit Fund Value less discontinuance charge goes to the Discontinued Policy Fund and is paid at the end of the lock-in, subject to the 4% p.a. guaranteed minimum accumulation. After five years the Unit Fund Value is paid. If the life assured dies after surrender but before the lock-in ends, the DPF proceeds are paid to the nominee immediately.
- **Loan:** not available.
- **Paid-up:** after five years, non-payment converts the policy to reduced paid-up after the grace period. Paid-up Sum Assured = BSA × (premiums paid / premiums payable); rider cover ceases, and the policy can be revived within three years or withdrawn.
- **Revival:** within three years from the first unpaid premium and before maturity, subject to underwriting and payment of due premiums without interest.
- **Free look:** 30 days.
- **Grace period:** 30 days for yearly, half-yearly and quarterly; 15 days for monthly NACH.
- **Compulsory termination:** if the policy has run five years with five full years' premiums paid and the fund cannot recover charges, it is terminated and any balance refunded.

## Exclusions and conditions

The stated exclusion is suicide within 12 months of commencement of risk or revival; the nominee receives the Unit Fund Value. The clause does not apply where the age at entry or revival is below 8 years.

The policy is void on fraudulent misstatement or withholding of material information, subject to Section 45 of the Insurance Act, 1938. There is no waiting period. Nomination and assignment are allowed under Sections 39 and 38 of the Act.

## Tax treatment

The CIS and brochure do not state Section 80C or Section 10(10D) eligibility. They say statutory taxes on charges apply as per prevailing law and that income-tax implications should be checked with a tax adviser. Confirm current treatment before relying on it.

## Suitability and decision notes

**Best suited to:** regular savers who want life cover plus market-linked growth, and who value the maturity refund of mortality charges and the guaranteed additions linked to annual premium.

**Poor fit for:** pure protection buyers, anyone needing money within five years, investors seeking guaranteed returns, and buyers who may want to top up or increase cover later.

**Key trade-offs:** the five-year lock-in and market risk; an 8% first-year offline allocation charge; a policy administration charge from year 6; and a mortality refund that is contingent on paying all premiums to maturity. The brochure's blank offline cell for years 2-5 makes the mid-term allocation cost uncertain without confirmation from LIC.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Sets the BSA multiple and maximum entry age |
| Annualized premium | Yes | At least ₹42,000; modal minimums apply |
| Policy term / PPT | Yes | Same value, 10-25 years |
| Fund choice | Yes | Bond, Secured, Balanced or Growth |
| Assumed gross return | For projections | 4% and 8% used in the brochure; not guaranteed |
| Accident rider | Optional | ₹0.40 per ₹1,000 ABSA p.a. |
| Partial withdrawals | Optional | Reduce BSA and guaranteed additions |

Core formulas:

```text
Basic Sum Assured      = annualized_premium × 10   (entry age ≤ 54)
                       = annualized_premium × 7    (entry age 55-65)
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

- [Customer Information Sheet (CIS), 16-01-2025](https://licindia.in/documents/20121/1325029/Final+CIS_LICs+SIIP_website.pdf/012e5b1a-5d6f-7edf-fa7f-5ee73bd5a4cb?t=1737017715607)
- [Sales Brochure, 08-11-2025](https://licindia.in/documents/20121/104176/SIIP+Sales+Brochure+%283%29.pdf/9fd04fac-5bb5-2e6d-c014-da9c532c7598?t=1762609247072)
- [Policy Document, 01-01-2025](https://licindia.in/documents/20121/1307964/Final_Policydocument_LICs+SIIP_website.pdf/d4314ff4-8be0-631a-3f66-1d777502a449?t=1735734234853)
- [Official product page](https://licindia.in/web/guest/lic-s-siip)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
