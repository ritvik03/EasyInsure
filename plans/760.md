---
plan_number: 760
plan_name: "LIC's Bima Jyoti"
uin: "512N339V03"
insurer: "Life Insurance Corporation of India"
category: "Endowment"
product_type: "Non-Par, Non-Linked, Life, Individual, Savings Plan (Endowment)"
status: "Withdrawn"
launch_date: null
withdrawal_date: null
official_page: "https://www.licindia.in/web/guest/lic-s-bima-jyoti-new"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 0.08
  entry_age_max: 60
  entry_age_notes: "Minimum 30 days completed (0.08 years). Maximum 60 years (nearer birthday). For POSP-LI/CPSC-SPV, maximum entry age is 65 years minus the policy term."
  maturity_age_max: 75
  maturity_age_notes: "Minimum age at maturity 18 completed years; maximum 75 years (nearer birthday); 65 years for POSP-LI/CPSC-SPV. The term must be chosen so that the age at maturity is at least 18."
  policy_terms_years: [15, 16, 17, 18, 19, 20]
  policy_term_kind: "range"
  policy_term_min_years: 15
  policy_term_max_years: 20
  premium_paying_terms_years: [10, 11, 12, 13, 14, 15]
  ppt_min_years: 10
  ppt_max_years: 15
  ppt_term_pairs: "Premium paying term = policy term − 5 years (term 15-20, PPT 10-15)."
  min_sum_assured: "₹1,25,000"
  max_sum_assured: "No limit, subject to underwriting. For POSP-LI/CPSC-SPV, maximum Sum Assured on Death is ₹25,00,000 per life across all non-linked non-par endowment POS products."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum modal premium is stated. The minimum Basic Sum Assured of ₹1,25,000 drives the minimum premium. BSA below ₹1,50,000: yearly and half-yearly only. BSA ₹1,50,000 and above: yearly, half-yearly, quarterly, monthly NACH or salary deduction."
  max_premium: "Not specified; determined by the Basic Sum Assured, age and term, subject to underwriting."

premium:
  modes: ["Yearly", "Half-yearly", "Quarterly", "Monthly (NACH)", "Salary deduction"]
  frequency_loadings: "No modal conversion factors are published. Mode rebate: 2% of the tabular premium for yearly, 1% for half-yearly, nil for quarterly, monthly and salary deduction."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: true
  illustrative_premiums:
    - basis: "Yearly premium for Basic Sum Assured ₹10,00,000; standard lives; offline sale"
      note: "Annual premiums in ₹ by age at entry and policy term (PPT in brackets), exclusive of taxes."
      rows:
        - {age: 20, term_15_ppt_10: 115128, term_18_ppt_13: 88423, term_20_ppt_15: 77643}
        - {age: 30, term_15_ppt_10: 115520, term_18_ppt_13: 88962, term_20_ppt_15: 78280}
        - {age: 40, term_15_ppt_10: 117578, term_18_ppt_13: 91412, term_20_ppt_15: 81122}
        - {age: 50, term_15_ppt_10: 124095, term_18_ppt_13: 98566, term_20_ppt_15: 88913}
    - basis: "Benefit illustration: age 35, policy term 20, PPT 15, Basic Sum Assured ₹10,00,000, yearly mode"
      note: "Annual premium is ₹79,309, exclusive of taxes. Guaranteed Additions are ₹50 per ₹1,000 BSA each year, i.e. ₹50,000 per year and ₹10,00,000 over 20 years. Maturity benefit is ₹20,00,000 (BSA plus accrued GA). Death benefit is ₹12,50,000 at inception and ₹22,50,000 in the final policy year. GST is currently exempted."
      rows:
        - {policy_year: 1, annual_premium: 79309, basic_sum_assured: 1000000, sum_assured_on_death: 1250000, accrued_guaranteed_additions: 50000, death_benefit: 1300000}
        - {policy_year: 20, annual_premium: 79309, total_premiums_paid: 1189635, basic_sum_assured: 1000000, accrued_guaranteed_additions: 1000000, maturity_benefit: 2000000, death_benefit: 2250000}
    - basis: "Rebates"
      note: "Mode rebate: 2% yearly, 1% half-yearly, nil quarterly/monthly/salary. High-BSA rebate per ₹1,000 BSA: nil for ₹1,25,000 to below ₹3,00,000; ₹4.00 for ₹3,00,000 to below ₹5,00,000; ₹5.00 for ₹5,00,000 to below ₹10,00,000; ₹6.00 at ₹10,00,000 and above. Online rebate: 7.5% for PPT 10-14, 10% for PPT 15."
      rows:
        - {bsa_min: 125000, bsa_max: 299999, rebate_per_1000: 0.0, online_rebate_ppt_10_to_14_pct: 7.5, online_rebate_ppt_15_pct: 10.0}
        - {bsa_min: 300000, bsa_max: 499999, rebate_per_1000: 4.0, online_rebate_ppt_10_to_14_pct: 7.5, online_rebate_ppt_15_pct: 10.0}
        - {bsa_min: 500000, bsa_max: 999999, rebate_per_1000: 5.0, online_rebate_ppt_10_to_14_pct: 7.5, online_rebate_ppt_15_pct: 10.0}
        - {bsa_min: 1000000, bsa_max: null, rebate_per_1000: 6.0, online_rebate_ppt_10_to_14_pct: 7.5, online_rebate_ppt_15_pct: 10.0}
  premium_formula: "Annual premium = rate per ₹10,00,000 Basic Sum Assured for the age and term × (Basic Sum Assured / 10,00,000), less the high-BSA rebate. The mode rebate is applied to the tabular premium. Online rebate is 7.5% for PPT 10-14 and 10% for PPT 15."
  notes: "Premiums are payable for the PPT and exclude taxes, underwriting extras and rider premiums. GST is currently exempted according to the benefit illustration. The plan is withdrawn and no longer sold."

benefits:
  death_benefit: "Sum Assured on Death plus accrued Guaranteed Additions. Sum Assured on Death is the higher of 125% of Basic Sum Assured or 7 × annualized premium, subject to a minimum of 105% of total premiums paid. For a minor life aged below 8 at entry, death before commencement of risk returns total premiums paid without interest."
  death_benefit_formula: "max(1.25 × basic_sum_assured, 7 × annualized_premium) + accrued_guaranteed_additions; floored at 1.05 × total_premiums_paid"
  maturity_benefit: "Basic Sum Assured plus accrued Guaranteed Additions, provided the policy is in force."
  maturity_benefit_formula: "basic_sum_assured + accrued_guaranteed_additions"
  survival_benefits: []
  guaranteed_benefits: "The death benefit, maturity benefit and Guaranteed Additions are guaranteed. Guaranteed Additions accrue at ₹50 per ₹1,000 Basic Sum Assured at the end of each policy year while the policy is in force, i.e. 5% of BSA per year."
  non_guaranteed_benefits: "None; the plan is non-participating and does not share in surplus or declare bonuses."
  riders: ["LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)", "LIC's New Term Assurance Rider (UIN: 512B210V02)", "LIC's Premium Waiver Benefit Rider (UIN: 512B204V04)"]
  other_benefits:
    - "One of the Accidental Death and Disability Benefit Rider or the Accident Benefit Rider may be chosen, and/or the New Term Assurance Rider and/or the Premium Waiver Benefit Rider, subject to eligibility."
    - "Premiums for all life insurance riders together cannot exceed 30% of the base-plan premium."
    - "Accident Benefit Rider sum assured cannot exceed 3 × Basic Sum Assured; every other rider's benefit cannot exceed the Basic Sum Assured."
    - "No riders are available on policies procured through POSP-LI or CPSC-SPV."
    - "Settlement Option: maturity benefit may be taken in instalments over 5, 10 or 15 years instead of a lump sum, for an in-force or paid-up policy."
    - "Death benefit instalment option: death benefit may be taken in instalments over 5, 10 or 15 years."
    - "Minimum instalment: ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly or ₹50,000 yearly. If the net claim is too small, it is paid in lump sum."
    - "For settlement options commencing between 1 May 2024 and 30 April 2025, the instalment interest rate is 5.07% p.a. effective. The maturity settlement option must be exercised at least 3 months before maturity."
    - "Policy loan after the first policy year, within the surrender value."

policy_features:
  loan: true
  surrender: true
  surrender_terms: "Surrender is allowed after completion of the first policy year if one full year's premium has been paid. Guaranteed Surrender Value is available after at least two full years' premiums; Special Surrender Value after one full year. Payable = higher of GSV and SSV. GSV = total premiums paid × GSV factor + accrued Guaranteed Additions × GA GSV factor. GSV factors: 0% in year 1, 30% in year 2, 35% in year 3, 50% in years 4-7, then rising by term to 90% in the final years."
  paid_up: true
  paid_up_terms: "After one full year's premiums, non-payment converts the policy to paid-up. Death Paid-Up Sum Assured = Sum Assured on Death × (premium paying period already paid / original PPT); Maturity Paid-Up Sum Assured = Basic Sum Assured × the same ratio. Accrued Guaranteed Additions up to the first unpaid premium remain payable, and the GA for the year of the last premium is added proportionately. Death benefit is subject to a minimum of 105% of total premiums paid."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: 30
    monthly_nach: 15
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable; a policy loan is available instead."
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "Suicide within 12 months of commencement: 80% of total premiums paid (excluding taxes, extra premiums and rider premiums other than the Term Assurance Rider) is payable. Suicide within 12 months of revival: the higher of 80% of total premiums paid or the surrender value. Not applicable where the life assured was below 8 at entry. Standard Section 45 misstatement and fraud provisions apply. Riders do not acquire paid-up value."
  waiting_period: "A 90-day waiting period applies only to policies purchased through POSP-LI or CPSC-SPV. On non-accidental death within 90 days, total premiums paid are refunded; accidental death receives the normal death benefit. Not applicable where the age at entry is below 8 years."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "GST is currently exempted according to the benefit illustration. Statutory taxes, if any, will apply at the prevailing rate when the exemption changes."
  notes: "The brochure does not state section 80C or section 10(10D) treatment and asks policyholders to consult a tax adviser on income-tax benefits and implications. No tax position is asserted here."

decision:
  primary_goals: ["savings", "protection"]
  risk_profile: "Guaranteed non-par endowment; no market risk"
  liquidity: "Medium"
  time_horizon: "Long"
  minimum_age: 0.08
  maximum_age: 60
  suitable_for:
    - "Long-horizon savers who want a guaranteed maturity amount plus life cover"
    - "Buyers who want a large sum assured with guaranteed additions of 5% of BSA per year"
    - "Policyholders who may want the maturity or death benefit paid in instalments"
  not_suitable_for:
    - "New buyers: the plan is withdrawn and no longer sold"
    - "Buyers seeking market-linked or inflation-beating returns"
    - "Short-term savers; early surrender values are zero or low"
  key_tradeoffs:
    - "Withdrawn plan; new purchases are not possible"
    - "Returns are guaranteed but modest: the guaranteed addition is 5% of BSA per year and there is no bonus"
    - "Surrender in year 1 has no GSV; year 2 GSV is only 30% of premiums paid"
    - "The premium paying term is five years shorter than the policy term"
  decision_flags: ["withdrawn_plan", "non_par", "guaranteed_additions", "endowment", "loan_available", "settlement_option", "successor_plan_890"]

calculation_inputs:
  required_inputs: ["age", "policy_term", "basic_sum_assured", "mode"]
  optional_inputs: ["online_rebate", "high_bsa_rebate", "riders", "settlement_option", "loan"]
  rate_table_available: true
  formulas:
    annual_premium: "rate(age, policy_term) × (basic_sum_assured / 1000000) - high_bsa_rebate"
    high_bsa_rebate: "rebate_per_1000 × (basic_sum_assured / 1000), by BSA band"
    mode_rebate: "2% yearly, 1% half-yearly, 0% quarterly/monthly/salary"
    guaranteed_addition: "50 × (basic_sum_assured / 1000) per policy year in force"
    death_benefit: "max(1.25 × basic_sum_assured, 7 × annualized_premium) + accrued_guaranteed_additions; minimum 1.05 × total_premiums_paid"
    maturity_benefit: "basic_sum_assured + accrued_guaranteed_additions"
    surrender_value: "max(GSV, SSV); GSV = total_premiums_paid × GSV_factor + accrued_GA × GA_GSV_factor"
    maximum_loan: "50% / 80% of surrender value for in-force policies before / after two full years' premiums; 40% / 75% for paid-up policies"
    settlement_instalment: "net claim amount discounted/annuitised at the applicable settlement interest rate over 5, 10 or 15 years"
  assumptions:
    - "Guaranteed Additions accrue only while the policy is in force; the GA for the year of death is paid for the full year, and the GA for the year of the last premium is proportional on paid-up or surrender."
    - "The 5.07% settlement interest rate applies to options commencing between 1 May 2024 and 30 April 2025; LIC resets it annually."
    - "Sample premiums are for ₹10,00,000 Basic Sum Assured, offline, and exclude taxes."
    - "This file documents Plan 760 / UIN 512N339V03 only. No figures from the successor Plan 890 / UIN 512N395V01 are used."

sources:
  - name: "Customer Information Sheet (CIS)"
    url: "https://licindia.in/documents/20121/1325029/CIS+_Bima+Jyoti_with+UIN.pdf/78a6bd9a-f750-6eb9-ee35-da0c5f4f1e50?t=1738739915082"
  - name: "Sales Brochure, 06-11-2025 (latest)"
    url: "https://licindia.in/documents/20121/1319704/LIC%27s+BIMA+JYOTI+Plan_Sales+Brochure+Eng_06112025.pdf/4d0a70a9-e052-98aa-f424-535532e47382?t=1762449287369"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1243952/Final+Policy+Document+LIC%27s+Bima+Jyoti+V03_website.pdf/71f29bd6-2a74-b999-5e83-9dceda49c8a6?t=1728995228661"
  - name: "Official product page"
    url: "https://www.licindia.in/web/guest/lic-s-bima-jyoti-new"
  - name: "LIC withdrawn plans listing"
    url: "https://licindia.in/en/web/guest/withdrawn-plans"
---
# LIC's Bima Jyoti — Plan 760

**One-line summary:** A non-par endowment that pays a guaranteed maturity amount of the basic sum assured plus guaranteed additions, and a death benefit of at least 125% of the sum assured, with the option to take benefits in instalments. The plan is withdrawn.

> **Withdrawn plan — read this first.** LIC's withdrawn-plans listing places **Plan 760 / UIN 512N339V03** in the table of "Plans Withdrawn during the Financial Year 2026-27." Plan 760 is **not** the same product as LIC's New Bima Jyoti (Plan 890, UIN 512N395V01), which is a separate successor plan. This file documents Plan 760 only and does not use or merge any Plan 890 figures. The exact withdrawal date is not stated in the listing.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 760 |
| UIN | 512N339V03 |
| Product type | Non-par, non-linked, individual savings endowment |
| Status | Withdrawn during FY 2026-27; no longer sold |
| Entry age | 30 days completed to 60 years (65 minus term for POSP-LI/CPSC-SPV) |
| Policy term | 15-20 years |
| Premium paying term | Policy term minus 5 years |
| Basic Sum Assured | Minimum ₹1,25,000; no maximum subject to underwriting |
| Death benefit | Higher of 125% of BSA or 7 × annualized premium, plus GA |
| Maturity benefit | BSA plus guaranteed additions |
| Official page | https://www.licindia.in/web/guest/lic-s-bima-jyoti-new |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 30 days completed |
| Maximum entry age | 60 years (nearer birthday); for POSP-LI/CPSC-SPV, 65 minus the policy term |
| Minimum age at maturity | 18 completed years |
| Maximum age at maturity | 75 years (nearer birthday); 65 for POSP-LI/CPSC-SPV |
| Policy term | 15-20 years |
| Premium paying term | Policy term minus 5 years |
| Basic Sum Assured | Minimum ₹1,25,000; multiples of ₹5,000 from ₹1,25,000 to ₹2,75,000, and ₹25,000 above ₹2,75,000 |
| Maximum Basic Sum Assured | No limit, subject to underwriting |
| POS sum assured cap | ₹25,00,000 Sum Assured on Death per life across all non-linked non-par endowment POS products |

The term must be chosen so that the age at maturity is at least 18. For a very young life assured this rules out the shorter terms. Risk commences immediately for entrants aged 8 or more; for entrants below 8, risk commences two years after policy commencement or on the policy anniversary at age 8, whichever is earlier. A policy on a minor's life vests automatically on the policy anniversary at or after age 18.

## Premiums and sum insured

- **Modes:** yearly, half-yearly, quarterly, monthly NACH and salary deduction. BSA below ₹1,50,000 is restricted to yearly and half-yearly; BSA of ₹1,50,000 and above allows all modes.
- **Mode rebate:** 2% of the tabular premium for yearly, 1% for half-yearly, nil for quarterly, monthly and salary deduction.
- **High-BSA rebate:** per ₹1,000 of BSA, nil from ₹1,25,000 to below ₹3,00,000; ₹4.00 from ₹3,00,000 to below ₹5,00,000; ₹5.00 from ₹5,00,000 to below ₹10,00,000; ₹6.00 at ₹10,00,000 and above.
- **Online rebate:** 7.5% of the tabular premium for PPT 10-14 years; 10% for PPT 15 years.
- **Premium paying term:** policy term minus five years, so a 15-year policy pays for 10 years and a 20-year policy for 15 years.
- **No modal conversion factors are published.**

### Illustrative premiums

Published sample annual premiums for a Basic Sum Assured of ₹10,00,000, standard lives, offline sale, exclusive of taxes. PPT is shown in brackets.

| Age | Term 15 (PPT 10) | Term 18 (PPT 13) | Term 20 (PPT 15) |
|---|---|---|---|
| 20 | ₹1,15,128 | ₹88,423 | ₹77,643 |
| 30 | ₹1,15,520 | ₹88,962 | ₹78,280 |
| 40 | ₹1,17,578 | ₹91,412 | ₹81,122 |
| 50 | ₹1,24,095 | ₹98,566 | ₹88,913 |

**Benefit illustration:** age 35, term 20, PPT 15, BSA ₹10,00,000, yearly mode. The annual premium is ₹79,309.

| Item | Amount |
|---|---|
| Annual premium | ₹79,309 |
| Total premiums paid (15 years) | ₹11,89,635 |
| Sum Assured on Death at inception | ₹12,50,000 |
| Guaranteed Addition per year | ₹50,000 (₹50 per ₹1,000 BSA) |
| Accrued Guaranteed Additions over 20 years | ₹10,00,000 |
| Maturity benefit at year 20 | ₹20,00,000 |
| Death benefit in year 20 | ₹22,50,000 |

GST is currently exempted in the illustration. The guaranteed addition is 5% of the basic sum assured each year, so a 20-year policy accumulates guaranteed additions equal to the sum assured.

## Benefits

### Death benefit

On death before maturity, after risk commencement, the nominee receives the Sum Assured on Death plus accrued Guaranteed Additions:

```text
Sum Assured on Death = max(125% × Basic Sum Assured, 7 × annualized premium)
Death Benefit        = Sum Assured on Death + accrued Guaranteed Additions
                       subject to a minimum of 105% of total premiums paid
```

"Annualized premium" excludes taxes, rider premiums, underwriting extras and modal loadings. "Total premiums paid" excludes extra premiums and taxes; premiums waived under the Premium Waiver Benefit Rider are deemed paid.

For a minor life assured aged below 8 at entry, death before commencement of risk returns total premiums paid, excluding taxes, extra premiums and rider premiums, without interest.

### Maturity benefit

On survival to the end of the policy term, with the policy in force, LIC pays the Basic Sum Assured plus accrued Guaranteed Additions. At a 20-year term, the guaranteed additions equal the basic sum assured, so the maturity benefit is twice the BSA.

### Guaranteed Additions

Guaranteed Additions accrue at **₹50 per ₹1,000 of Basic Sum Assured** at the end of each policy year while the policy is in force. This is 5% of BSA per year. The addition for the year of death is paid for the full year. Additions cease if premiums are not paid; on paid-up or surrender, the addition for the year of the last premium is proportional to the premium received for that year.

### Riders

Four riders are available, subject to eligibility. The policyholder may choose either the Accidental Death and Disability Benefit Rider or the Accident Benefit Rider, and/or the New Term Assurance Rider and/or the Premium Waiver Benefit Rider.

| Rider | UIN | Key limits |
|---|---|---|
| LIC's Accidental Death and Disability Benefit Rider | 512B209V02 | Opted within PPT with at least 5 years outstanding; before age 65; cover to the earlier of policy term end or age 70; accidental disability paid monthly over 10 years with premium waiver |
| LIC's Accident Benefit Rider | 512B203V03 | Opted within PPT with at least 5 years outstanding; before age 65; cover during PPT only |
| LIC's New Term Assurance Rider | 512B210V02 | Inception only; cover during the policy term |
| LIC's Premium Waiver Benefit Rider | 512B204V04 | On the proposer's life, for a minor life assured; at a policy anniversary within PPT with at least 5 years outstanding; rider term plus proposer's age cannot exceed 70 |

Premiums for all life insurance riders together cannot exceed 30% of the base-plan premium. The Accident Benefit Rider sum assured cannot exceed 3 × BSA; every other rider's benefit cannot exceed BSA. No riders are available on POSP-LI/CPSC-SPV policies. Riders do not acquire paid-up value.

### Settlement and instalment options

- **Maturity benefit in instalments:** the maturity benefit can be taken over 5, 10 or 15 years instead of a lump sum, for an in-force or paid-up policy. The option must be exercised at least 3 months before maturity.
- **Death benefit in instalments:** the death benefit can be taken over 5, 10 or 15 years.
- **Minimum instalment:** ₹5,000 monthly, ₹15,000 quarterly, ₹25,000 half-yearly or ₹50,000 yearly. If the net claim is too small to meet the minimum, it is paid in lump sum.
- **Interest rate:** for options commencing between 1 May 2024 and 30 April 2025, the annual effective rate used to calculate instalments is 5.07% p.a.
- **Commutation:** after maturity instalments begin, the life assured may commute the outstanding instalments. The lump sum is the higher of the discounted value of future instalments or the original settlement amount less instalments already paid. The discount rate cap for 1 May 2024 to 30 April 2025 is 7.07% p.a. effective.
- **Death after maturity:** if the life assured dies after exercising the maturity settlement option, the remaining instalments continue to the nominee.

## Charges and optional benefits

No explicit premium allocation, administration, fund-management or surrender charge is stated. The policyholder pays the base premium, any rider premium, any underwriting extra and statutory taxes (currently GST-exempt per the illustration). The main optional items are the riders, the loan, and the maturity/death benefit instalment options described above.

## Surrender, loan, paid-up and revival

### Surrender

- The policy can be surrendered after completion of the first policy year if one full year's premium has been paid.
- **Guaranteed Surrender Value (GSV)** is available after at least two full years' premiums; **Special Surrender Value (SSV)** after one full year.
- On surrender, LIC pays the higher of GSV and SSV.
- GSV = total premiums paid × GSV factor + accrued Guaranteed Additions × GA GSV factor. Premiums exclude extra premiums, rider premiums and taxes.
- Selected GSV factors for total premiums paid:

| Policy year | Term 15 | Term 18 | Term 20 |
|---|---|---|---|
| 1 | 0.00% | 0.00% | 0.00% |
| 2 | 30.00% | 30.00% | 30.00% |
| 3 | 35.00% | 35.00% | 35.00% |
| 5 | 50.00% | 50.00% | 50.00% |
| 8 | 54.29% | 53.00% | 52.50% |
| 10 | 62.86% | 59.00% | 57.50% |
| 15 | 90.00% | 74.00% | 70.00% |
| 20 | — | — | 90.00% |

The full GSV and GA GSV factor tables for terms 15-20 are in the sales brochure. SSV is reviewed under IRDAI's Master Circular on Life Insurance Products. No surrender value is available on riders.

### Loan

- Available after completion of the first policy year, if at least one full year's premium has been paid.
- Maximum loan as a percentage of surrender value:

| Policy status | Before two full years' premiums | After two full years' premiums |
|---|---|---|
| In-force | 50% | 80% |
| Paid-up | 40% | 75% |

- Interest compounds half-yearly. For loans sanctioned between 1 May 2024 and 30 April 2025, the rate is **9.5% p.a.** compounding half-yearly for the entire loan term.
- If loan interest is not paid or the outstanding loan plus interest exceeds the surrender value, LIC may foreclose the policy and pay any excess surrender value.
- Outstanding loan and interest are recovered from claim proceeds.

### Paid-up

- If at least one full year's premiums have been paid and later premiums are not paid, the policy becomes paid-up after the first policy year and continues to the end of the term.
- **Death Paid-Up Sum Assured** = Sum Assured on Death × (premium paying period already paid / original PPT).
- **Maturity Paid-Up Sum Assured** = Basic Sum Assured × the same ratio.
- Accrued Guaranteed Additions up to the first unpaid premium remain payable; the GA for the year of the last premium is added proportionately.
- Death benefit is subject to a minimum of 105% of total premiums paid.
- For a minor life whose policy becomes paid-up before risk commencement, total premiums paid are returned without interest.

### Revival

A lapsed policy can be revived within 5 consecutive complete years from the date of the first unpaid premium and before maturity, on payment of arrears with interest and satisfactory evidence of continued insurability. For the 12 months from 1 May 2024 to 30 April 2025, the revival interest rate is 9.5% p.a. compounding half-yearly. The revival of riders is considered with the base policy, not in isolation.

### Grace period and free look

- **Grace period:** 30 days for yearly, half-yearly and quarterly premiums; 15 days for monthly premiums.
- **Free look:** 30 days from receipt of the policy document. On cancellation, LIC refunds the premium after deducting proportionate risk premium, medical-examination expenses and stamp duty.

## Waiting periods, exclusions and conditions

### Waiting period

A **90-day** waiting period applies only to policies purchased through POSP-LI or CPSC-SPV. If the life assured dies within the first 90 days from commencement of risk:

- **Non-accidental death:** total premiums paid are refunded, provided the policy is in force.
- **Accidental death:** the normal death benefit is payable.

The clause does not apply where the age at entry is below 8 years. No waiting period applies to policies sold through other channels.

### Suicide exclusion

- If the life assured commits suicide within 12 months of commencement of risk, the nominee receives 80% of total premiums paid (excluding taxes, extra premiums and rider premiums other than the Term Assurance Rider), provided the policy is in force.
- If suicide occurs within 12 months of revival, the nominee receives the higher of 80% of total premiums paid or the surrender value on the date of death.
- No other claim is payable.
- The clause does not apply where the life assured was below 8 at entry, or where the policy lapsed without acquiring paid-up value.

### Other conditions

- All material facts and pre-existing conditions must be disclosed. Non-disclosure can make the policy void under Section 45 of the Insurance Act, 1938.
- The policy terminates on the earliest of payment of the lump-sum death benefit or final death instalment, settlement of surrender benefit, maturity without a settlement option, payment of the final maturity instalment, foreclosure for loan default, free-look cancellation, forfeiture, or expiry of the revival period without revival.
- Riders do not acquire paid-up value and cease if the policy lapses.

## Tax treatment

The benefit illustration states that GST is currently exempted and that the GST rate will be as applicable from time to time. The brochure does not state section 80C or section 10(10D) treatment and asks policyholders to consult a tax adviser on income-tax benefits and implications. Confirm the current tax position on premiums and maturity proceeds before relying on it.

## Suitability and decision notes

**Best suited to:** long-horizon savers who want a guaranteed maturity amount and life cover, value guaranteed additions of 5% of the sum assured per year, and may want the maturity or death benefit paid in instalments. The plan was designed for customers who prefer a simple, non-linked endowment with a large sum assured.

**Poor fit for:** new buyers, because the plan is withdrawn and no longer sold; anyone seeking market-linked or inflation-beating returns; short-term savers who may need the money within a few years; and buyers who need the successor New Bima Jyoti (Plan 890), which is a different product.

**Key trade-offs:** the plan is withdrawn; returns are guaranteed but modest; the guaranteed addition is 5% of BSA per year with no bonus; early surrender is expensive, with 0% GSV in year 1 and 30% in year 2; and the premium paying term is five years shorter than the policy term, so premiums are concentrated in the first 10-15 years.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age at entry | Yes | 30 days to 60 years; POS maximum is 65 minus term |
| Policy term | Yes | 15-20 years; must mature at age 18 or later |
| Basic Sum Assured | Yes | Minimum ₹1,25,000; ₹5,000/₹25,000 multiples by band |
| Mode | Yes | Yearly/half-yearly below ₹1.5 lakh BSA; all modes at ₹1.5 lakh+ |
| High-BSA rebate | Yes | ₹0/₹4/₹5/₹6 per ₹1,000 BSA by band |
| Mode rebate | Yes | 2% yearly, 1% half-yearly, 0% other |
| Online rebate | If direct online | 7.5% (PPT 10-14) or 10% (PPT 15) |
| Riders | Optional | Four riders; one of AD&DB or AB plus others |
| Settlement option | Optional | 5/10/15-year instalments; 5.07% for 2024-25 |
| Loan | Optional | 50%/80% in-force; 40%/75% paid-up |

Core formulas:

```text
Annual premium       = rate(age, term) × (BSA / 1,000,000)
                       − high-BSA rebate
High-BSA rebate      = rebate_per_1000 × (BSA / 1000)
Mode rebate          = 2% yearly, 1% half-yearly, 0% other
Guaranteed Addition  = ₹50 × (BSA / 1000) per policy year in force
Death benefit        = max(1.25 × BSA, 7 × annualized premium)
                       + accrued GA
                       subject to a minimum of 1.05 × total premiums paid
Maturity benefit     = BSA + accrued GA
Surrender value      = max(GSV, SSV)
GSV                  = total premiums paid × GSV factor
                       + accrued GA × GA GSV factor
Maximum loan         = 50% / 80% of surrender value (in-force,
                       before / after two full years' premiums)
                       40% / 75% of surrender value (paid-up)
```

## Source documents

- [Customer Information Sheet (CIS)](https://licindia.in/documents/20121/1325029/CIS+_Bima+Jyoti_with+UIN.pdf/78a6bd9a-f750-6eb9-ee35-da0c5f4f1e50?t=1738739915082)
- [Sales Brochure, 06-11-2025 (latest)](https://licindia.in/documents/20121/1319704/LIC%27s+BIMA+JYOTI+Plan_Sales+Brochure+Eng_06112025.pdf/4d0a70a9-e052-98aa-f424-535532e47382?t=1762449287369)
- [Policy Document](https://licindia.in/documents/20121/1243952/Final+Policy+Document+LIC%27s+Bima+Jyoti+V03_website.pdf/71f29bd6-2a74-b999-5e83-9dceda49c8a6?t=1728995228661)
- [Official product page](https://www.licindia.in/web/guest/lic-s-bima-jyoti-new)
- [LIC withdrawn plans listing](https://licindia.in/en/web/guest/withdrawn-plans)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary. Plan 760 is withdrawn and is distinct from Plan 890 (LIC's New Bima Jyoti).*
