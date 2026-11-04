---
plan_number: 749
plan_name: "LIC's Nivesh Plus"
uin: "512L317V02"
insurer: "Life Insurance Corporation of India"
category: "ULIP"
product_type: "Non-Par, Single Premium, Linked, Life, Individual Savings plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-nivesh-plus"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0.25
  entry_age_max: 70
  entry_age_notes: "Minimum 90 days completed. Maximum 70 years (nearer birthday) under Option 1 (BSA 1.25× single premium); maximum 35 years under Option 2 (BSA 10× single premium)."
  maturity_age_max: 85
  maturity_age_notes: "Minimum maturity age 18 years completed. Maximum 85 years (nearer birthday) under Option 1; maximum 50 years under Option 2."
  policy_terms_years: [10, 25]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 25
  premium_paying_terms_years: []
  ppt_min_years: null
  ppt_max_years: null
  ppt_term_pairs: "Single premium only; no premium paying term. Option 1 allows any policy term from 10 to 25 years. Option 2 allows 10-25 years for entry age up to 25, 10-20 years for age 26-30 and 10 years for age 31-35."
  min_sum_assured: "1.25 × single premium (Option 1) or 10 × single premium (Option 2)"
  max_sum_assured: "Same as the chosen option (1.25× or 10× single premium); the option cannot be altered after inception."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "Single premium only: minimum ₹1,25,000, payable in multiples of ₹5,000. No maximum premium."
  max_premium: "No limit"

premium:
  modes: ["Single premium (offline or online)"]
  frequency_loadings: "Not applicable (single premium)"
  single_premium: true
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: false
  illustrative_premiums:
    - basis: "Option 1: age 30, single premium ₹1,25,000, policy term 20 years, BSA 1.25× single premium, offline purchase, no rider"
      note: "Published sample illustration. Fund values are after guaranteed additions; 4% and 8% p.a. are illustrative gross investment returns, not guaranteed. Net yield at 8% is 6.79% p.a."
      assumed_returns_pct: [4, 8]
      net_yield_at_8pct_pct: 6.79
      maturity_benefit_4pct: 228559
      maturity_benefit_8pct: 465044
      rows:
        - year: 6
          fund_value_before_ga_4pct: 140868
          guaranteed_addition_4pct: 3750
          fund_value_after_ga_4pct: 144618
          death_benefit_4pct: 156250
          fund_value_before_ga_8pct: 176829
          guaranteed_addition_8pct: 3750
          fund_value_after_ga_8pct: 180579
          death_benefit_8pct: 180579
        - year: 15
          fund_value_before_ga_4pct: 188059
          guaranteed_addition_4pct: 6250
          fund_value_after_ga_4pct: 194309
          death_benefit_4pct: 194309
          fund_value_before_ga_8pct: 326766
          guaranteed_addition_8pct: 6250
          fund_value_after_ga_8pct: 333016
          death_benefit_8pct: 333016
        - year: 20
          fund_value_before_ga_4pct: 221059
          guaranteed_addition_4pct: 7500
          fund_value_after_ga_4pct: 228559
          death_benefit_4pct: 228559
          fund_value_before_ga_8pct: 457544
          guaranteed_addition_8pct: 7500
          fund_value_after_ga_8pct: 465044
          death_benefit_8pct: 465044
    - basis: "Option 2: age 30, single premium ₹1,25,000, policy term 20 years, BSA 10× single premium, offline purchase, no rider"
      note: "Published sample illustration. Fund values are after guaranteed additions; returns are illustrative only. Net yield at 8% is 6.79% p.a."
      assumed_returns_pct: [4, 8]
      net_yield_at_8pct_pct: 6.79
      maturity_benefit_4pct: 158999
      maturity_benefit_8pct: 374442
      rows:
        - year: 6
          fund_value_before_ga_4pct: 130528
          guaranteed_addition_4pct: 3750
          fund_value_after_ga_4pct: 134278
          death_benefit_4pct: 1250000
          fund_value_before_ga_8pct: 165255
          guaranteed_addition_8pct: 3750
          fund_value_after_ga_8pct: 169005
          death_benefit_8pct: 1250000
        - year: 15
          fund_value_before_ga_4pct: 149142
          guaranteed_addition_4pct: 6250
          fund_value_after_ga_4pct: 155392
          death_benefit_4pct: 1250000
          fund_value_before_ga_8pct: 277853
          guaranteed_addition_8pct: 6250
          fund_value_after_ga_8pct: 284103
          death_benefit_8pct: 1250000
        - year: 20
          fund_value_before_ga_4pct: 151499
          guaranteed_addition_4pct: 7500
          fund_value_after_ga_4pct: 158999
          death_benefit_4pct: 1250000
          fund_value_before_ga_8pct: 366942
          guaranteed_addition_8pct: 7500
          fund_value_after_ga_8pct: 374442
          death_benefit_8pct: 1250000
  premium_formula: "Basic Sum Assured = single premium × 1.25 (Option 1) or single premium × 10 (Option 2)."
  notes: "No premium rate table exists for this ULIP; the policyholder chooses the single premium subject to the ₹1,25,000 minimum and ₹5,000 multiple. The brochure publishes sample benefit illustrations at 4% and 8% p.a."

benefits:
  death_benefit: "Before the Date of Commencement of Risk: Unit Fund Value. After risk commencement: the higher of (Basic Sum Assured less partial withdrawals made in the two years before death) and Unit Fund Value. Mortality, accident and tax charges recovered after death are added back, and guaranteed additions added after death are reversed."
  death_benefit_formula: "max(bsa - partial_withdrawals_last_2y, unit_fund_value)"
  maturity_benefit: "Unit Fund Value on the date of maturity. There is no refund of mortality charges under this plan."
  maturity_benefit_formula: "unit_fund_value"
  survival_benefits: []
  guaranteed_benefits: "Guaranteed Additions of 3%, 4%, 5%, 6% and 7% of the single premium at the end of policy years 6, 10, 15, 20 and 25 respectively, converted to units at the then NAV. Payable only while the policy is in force."
  non_guaranteed_benefits: "The Unit Fund Value depends on the NAV of the chosen fund and is not guaranteed."
  riders: ["LIC's Linked Accidental Death Benefit Rider (UIN: 512A211V02)"]
  other_benefits:
    - "Choice of four funds: Bond, Secured, Balanced and Growth"
    - "Partial withdrawals after the 5-year lock-in, within annual percentage limits"
    - "Four free fund switches per policy year; ₹100 per subsequent switch"
    - "Settlement option: death benefit in instalments over up to 5 years"
    - "Basic Sum Assured option (1.25× or 10× single premium) chosen at inception"

policy_features:
  loan: false
  surrender: true
  surrender_terms: "Before 5 years: Unit Fund Value less discontinuance charge is transferred to the Discontinued Policy Fund; the proceeds (higher of the DPF value or accumulation at the guaranteed rate, currently 4% p.a.) are payable at the end of the 5-year lock-in. After 5 years: Unit Fund Value is payable."
  paid_up: false
  paid_up_terms: "Not applicable; this is a single premium plan with no future premiums."
  revival: false
  revival_period_years: null
  free_look_days: 30
  grace_period_days:
    yearly: null
    half_yearly: null
    quarterly: null
    monthly_nach: null
  partial_withdrawal: true
  partial_withdrawal_terms: "Allowed after the fifth policy anniversary. Maximum per policy year as % of Unit Fund: 15% (years 6-10), 20% (years 11-15), 25% (years 16-20), 30% (years 21-25). Minimum balance after withdrawal equal to the single premium. Charge ₹100 per withdrawal. Not allowed for a minor before age 18."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement: the nominee receives the Unit Fund Value. The suicide clause does not apply where entry age is below 8 years."
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
  minimum_age: 0.25
  maximum_age: 70
  suitable_for:
    - "Investors with a lump sum who want life cover plus market-linked savings"
    - "Buyers who value guaranteed additions on top of fund performance"
    - "People who do not need regular premium payments or top-ups"
    - "Parents investing a lump sum for a child, subject to the minor vesting rules"
  not_suitable_for:
    - "Buyers who need liquidity within five years"
    - "Investors seeking guaranteed returns or capital protection"
    - "Pure protection buyers; the 1.25× cover option is small relative to premium"
    - "People who want to add top-ups or increase cover later; neither is allowed"
  key_tradeoffs:
    - "Single premium is locked in for five years and the fund value carries market risk"
    - "Option 2 gives 10× cover but caps entry at age 35 and maturity at age 50"
    - "No mortality-charge refund; no policy administration charge is stated in the brochure"
    - "Guaranteed additions are a fixed percentage of premium, not of fund value"
  decision_flags: ["ulip", "single-premium", "5y-lock-in", "market-risk", "life-cover", "guaranteed-additions", "no-mortality-refund", "no-top-up"]

calculation_inputs:
  required_inputs: ["age_at_entry", "single_premium", "policy_term", "bsa_option", "fund_choice"]
  optional_inputs: ["accident_rider", "partial_withdrawals", "settlement_option"]
  rate_table_available: false
  formulas:
    basic_sum_assured: "single_premium * 1.25 (Option 1) or single_premium * 10 (Option 2)"
    death_benefit: "max(bsa - partial_withdrawals_last_2y, unit_fund_value)"
    maturity_benefit: "unit_fund_value"
    guaranteed_addition: "single_premium * ga_rate(year), converted to units at the NAV on the allocation date"
    surrender_after_lockin: "unit_fund_value"
    surrender_before_lockin: "(unit_fund_value - discontinuance_charge) accumulated at the guaranteed rate (currently 4% p.a.) until the end of the 5-year lock-in"
  assumptions:
    - "Unit Fund Value = units held × NAV; NAV is net of the 1.35% p.a. fund management charge"
    - "Mortality charges are age-specific and deducted monthly from units"
    - "The 4% and 8% illustrations are gross investment returns before charges; they are not guaranteed"
    - "Guaranteed additions are converted to units at the prevailing NAV and are not a cash payout"

sources:
  - name: "Customer Information Sheet (CIS), 14-10-2024"
    url: "https://licindia.in/documents/20121/1244160/CIS_LICs+Nivesh+Plus_CC_14102024.pdf/4b2a17a7-861f-8605-5f30-700f179486e9?t=1728995928207"
  - name: "Sales Brochure (2025 revision, October 2025)"
    url: "https://licindia.in/documents/20121/103490/LIC_Nivesh+Plus+_Sales+Brochure+Eng..pdf/648a7ca6-8776-5cd4-a017-b2346dc8120a?t=1760361290296"
  - name: "Policy Document (October 2024)"
    url: "https://licindia.in/documents/20121/1244160/Policy+Document+LICs+Nivesh+Plus+CC+Uploading.pdf/2c592f4d-e064-bb69-0e14-937d52d376fc?t=1728995927439"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-nivesh-plus"
---
# LIC's Nivesh Plus — Plan 749

**One-line summary:** A single-premium ULIP that combines life cover with four market-linked funds, adds guaranteed additions at set durations, and pays the fund value on maturity.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 749 |
| UIN | 512L317V02 |
| Product type | Non-par, single premium, linked, individual savings plan |
| Status | Active |
| Entry age | 90 days to 70 years (Option 1); 90 days to 35 years (Option 2) |
| Policy term | 10 to 25 years (Option 1); 10 to 25 / 10 to 20 / 10 years by age (Option 2) |
| Premium paying term | Single premium |
| Minimum premium | ₹1,25,000 (multiples of ₹5,000) |
| Basic Sum Assured | 1.25× or 10× single premium |
| Lock-in | 5 years |
| Official page | https://licindia.in/web/guest/lic-s-nivesh-plus |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 90 days completed |
| Maximum entry age — Option 1 | 70 years (nearer birthday) |
| Maximum entry age — Option 2 | 35 years (nearer birthday) |
| Minimum maturity age | 18 years completed |
| Maximum maturity age — Option 1 | 85 years (nearer birthday) |
| Maximum maturity age — Option 2 | 50 years (nearer birthday) |
| Policy term — Option 1 | Any term from 10 to 25 years |
| Policy term — Option 2 | 10-25 years up to age 25; 10-20 years at 26-30; 10 years at 31-35 |
| Basic Sum Assured | 1.25× single premium (Option 1) or 10× single premium (Option 2) |

The Basic Sum Assured option is chosen at inception and cannot be changed. Where the life assured is a minor, the policy automatically vests at the policy anniversary coinciding with or immediately following age 18. Risk commences immediately for entry age 8 or above; below age 8 it commences on the earlier of two years from commencement or the anniversary nearest age 8.

## Premiums and sum assured

- **Premium mode:** single premium only, offline or online.
- **Minimum single premium:** ₹1,25,000, payable in multiples of ₹5,000.
- **Maximum single premium:** no limit.
- **Basic Sum Assured:** 1.25× the single premium under Option 1, or 10× under Option 2.

This is a ULIP, so there is no published premium rate table; the policyholder chooses the single premium, term and BSA option. The brochure publishes sample benefit illustrations at assumed gross returns of 4% and 8% p.a., which are shown below.

### Illustrative premiums

**Option 1 — BSA 1.25× single premium.** Age 30, single premium ₹1,25,000, term 20 years, offline, no rider. The maturity benefit is ₹2,28,559 at 4% and ₹4,65,044 at 8%; net yield at 8% is 6.79% p.a.

| Year | 4% fund value | 4% GA | 4% death benefit | 8% fund value | 8% GA | 8% death benefit |
|---|---|---|---|---|---|---|
| 6 | 1,44,618 | 3,750 | 1,56,250 | 1,80,579 | 3,750 | 1,80,579 |
| 15 | 1,94,309 | 6,250 | 1,94,309 | 3,33,016 | 6,250 | 3,33,016 |
| 20 | 2,28,559 | 7,500 | 2,28,559 | 4,65,044 | 7,500 | 4,65,044 |

**Option 2 — BSA 10× single premium.** Same age, premium and term. The maturity benefit is ₹1,58,999 at 4% and ₹3,74,442 at 8%; net yield at 8% is 6.79% p.a.

| Year | 4% fund value | 4% GA | 4% death benefit | 8% fund value | 8% GA | 8% death benefit |
|---|---|---|---|---|---|---|
| 6 | 1,34,278 | 3,750 | 12,50,000 | 1,69,005 | 3,750 | 12,50,000 |
| 15 | 1,55,392 | 6,250 | 12,50,000 | 2,84,103 | 6,250 | 12,50,000 |
| 20 | 1,58,999 | 7,500 | 12,50,000 | 3,74,442 | 7,500 | 12,50,000 |

Fund values are after guaranteed additions; GA is the addition made at that duration. The published illustration's "Sum Assured" column repeats the post-GA fund value rather than the Basic Sum Assured under both options, so only the death-benefit column is reproduced here.

## Benefits

### Death benefit

On death before the Date of Commencement of Risk, the Unit Fund Value is payable. After risk commencement, the payable amount is the higher of:

1. Basic Sum Assured less partial withdrawals made in the two years immediately before death; and
2. Unit Fund Value.

Mortality, accident and tax charges recovered after the date of death are added back, and guaranteed additions credited after death are reversed. The benefit may be taken in lump sum or through the settlement option.

### Maturity benefit

The Unit Fund Value on the date of maturity. Unlike some LIC ULIPs, Nivesh Plus does not refund mortality charges at maturity.

### Guaranteed additions

Guaranteed additions are a percentage of the single premium and are added to the Unit Fund at the end of these policy years:

| End of policy year | 6 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|
| Addition (% of single premium) | 3% | 4% | 5% | 6% | 7% |

They are converted to units at the NAV on the allocation date. A policy with a shorter term receives only the additions whose durations it reaches.

### Other benefits and options

- Partial withdrawals after the fifth policy anniversary.
- Four free switches per policy year; ₹100 per later switch.
- Settlement option for the death benefit in yearly, half-yearly, quarterly or monthly instalments over up to five years.
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
| Premium allocation — offline | 3.30% of the single premium |
| Premium allocation — online | 1.50% of the single premium |
| Mortality | Age-specific, monthly, per ₹1,000 sum at risk; sample annual rates: age 25 ₹1.26, age 35 ₹1.62, age 45 ₹3.48, age 50 ₹5.99 |
| Accident benefit | ₹0.40 per ₹1,000 Accident Benefit Sum Assured p.a.; ₹0.80 for police duty |
| Fund management | 1.35% p.a. for the four funds; 0.50% p.a. for the Discontinued Policy Fund |
| Policy administration | No policy administration charge is stated in the brochure |
| Switching | Four free per policy year; ₹100 per subsequent switch |
| Partial withdrawal | ₹100 per withdrawal |
| Discontinuance | See table below |
| Miscellaneous | ₹100 per alteration |
| Tax | Tax charge as per prevailing tax law |

**Discontinuance charge:**

| Policy year | Single premium up to ₹3,00,000 | Single premium above ₹3,00,000 |
|---|---|---|
| 1 | Lower of 2% × (SP or FV), max ₹3,000 | Lower of 1% × (SP or FV), max ₹6,000 |
| 2 | Lower of 1.5% × (SP or FV), max ₹2,000 | Lower of 0.70% × (SP or FV), max ₹5,000 |
| 3 | Lower of 1% × (SP or FV), max ₹1,500 | Lower of 0.50% × (SP or FV), max ₹4,000 |
| 4 | Lower of 0.5% × (SP or FV), max ₹1,000 | Lower of 0.35% × (SP or FV), max ₹2,000 |
| 5 onwards | Nil | Nil |

There is no bid-offer spread. Mortality and accident benefit charges cannot be revised; other charges can be revised with three months' notice and within IRDAI caps.

### Optional benefits

- **Accidental Death Benefit Rider (UIN 512A211V02):** can be opted for at any policy anniversary while at least five years of term remain and before the anniversary at age 65; cover lasts to maturity or age 70, whichever is earlier. The Accident Benefit Sum Assured cannot exceed the Basic Sum Assured.
- **Partial withdrawals:** after the fifth policy anniversary, subject to the annual limits and minimum balance described above.
- **Switching:** the entire fund value moves to the new fund.
- **Settlement option:** instalments over up to five years; only the fund management charge applies during the payout period and investment risk passes to the nominee.
- **Top-ups:** not allowed.

## Surrender, loan, paid-up and revival

- **Surrender:** allowed at any time. Within five years the Unit Fund Value less discontinuance charge is transferred to the Discontinued Policy Fund and paid at the end of the five-year lock-in; the payout is the higher of the DPF value and accumulation at the guaranteed rate (currently 4% p.a.). After five years the Unit Fund Value is paid. If the life assured dies after surrender but before the lock-in ends, the DPF proceeds are paid to the nominee immediately.
- **Loan:** not available.
- **Paid-up and revival:** not applicable; this is a single premium plan.
- **Reinstatement:** a surrendered policy cannot be reinstated.
- **Free look:** 30 days.
- **Grace period:** not applicable.
- **Compulsory termination:** if the policy has run at least five years and the fund balance cannot recover charges, it is terminated and any balance is refunded.

## Exclusions and conditions

The stated exclusion is suicide within 12 months of commencement of the policy; the nominee receives the Unit Fund Value as at the date of death intimation. The clause does not apply if the entry age is below 8 years.

The policy is void on fraudulent misstatement or withholding of material information, subject to Section 45 of the Insurance Act, 1938. There is no waiting period. Nomination and assignment are allowed under Sections 39 and 38 of the Act.

## Tax treatment

The CIS and brochure do not state Section 80C or Section 10(10D) eligibility. They say only that statutory taxes on charges apply as per prevailing law and that income-tax implications should be checked with a tax adviser. Confirm the current treatment before relying on it.

## Suitability and decision notes

**Best suited to:** lump-sum investors who want life cover plus market-linked savings, and who value the fixed guaranteed additions at years 6, 10, 15, 20 and 25. It also suits buyers who prefer a single payment and do not need future top-ups.

**Poor fit for:** anyone needing money within five years, investors seeking guaranteed or capital-protected returns, and pure protection buyers. Option 1's 1.25× cover is small relative to the premium, while Option 2's 10× cover is restricted to entry age 35 or below and maturity age 50 or below.

**Key trade-offs:** the five-year lock-in and full market risk; a single premium that cannot be topped up; no mortality-charge refund; and guaranteed additions that are percentages of premium rather than of the fund value. The absence of a policy administration charge is a relative cost advantage.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | Determines the available BSA option and maximum term |
| Single premium | Yes | At least ₹1,25,000, multiple of ₹5,000 |
| Policy term | Yes | 10-25 years, further restricted under Option 2 |
| BSA option | Yes | 1.25× or 10× single premium |
| Fund choice | Yes | Bond, Secured, Balanced or Growth |
| Assumed gross return | For projections | 4% and 8% used in the brochure; not guaranteed |
| Accident rider | Optional | Charge ₹0.40 per ₹1,000 ABSA p.a. |
| Partial withdrawals | Optional | Reduce the death benefit for two years |

Core formulas:

```text
Basic Sum Assured      = single_premium × 1.25       (Option 1)
                       = single_premium × 10         (Option 2)
Death Benefit          = max(BSA − partial_withdrawals_last_2y,
                             unit_fund_value)
Maturity Benefit       = unit_fund_value
Guaranteed Addition_t  = single_premium × ga_rate_t
                         (converted to units at NAV on the allocation date)
Surrender (after 5y)   = unit_fund_value
Surrender (before 5y)  = (unit_fund_value − discontinuance_charge)
                         accumulated at the guaranteed rate (currently 4% p.a.)
                         until the end of the 5-year lock-in
```

Key assumptions: Unit Fund Value = units × NAV, with NAV net of the 1.35% p.a. FMC; mortality charges are deducted monthly from units; the 4%/8% returns are illustrative gross returns and are not guaranteed.

## Source documents

- [Customer Information Sheet (CIS), 14-10-2024](https://licindia.in/documents/20121/1244160/CIS_LICs+Nivesh+Plus_CC_14102024.pdf/4b2a17a7-861f-8605-5f30-700f179486e9?t=1728995928207)
- [Sales Brochure, October 2025](https://licindia.in/documents/20121/103490/LIC_Nivesh+Plus+_Sales+Brochure+Eng..pdf/648a7ca6-8776-5cd4-a017-b2346dc8120a?t=1760361290296)
- [Policy Document, October 2024](https://licindia.in/documents/20121/1244160/Policy+Document+LICs+Nivesh+Plus+CC+Uploading.pdf/2c592f4d-e064-bb69-0e14-937d52d376fc?t=1728995927439)
- [Official product page](https://licindia.in/web/guest/lic-s-nivesh-plus)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
