---
plan_number: 907
plan_name: "LIC's Health Shield"
uin: "512N369V01"
insurer: "Life Insurance Corporation of India"
category: "Health"
product_type: "Non-Par, Non-Linked, Health, Individual, Pure Risk Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/lic-s-health-shield"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 65
  entry_age_notes: "Principal insured, spouse and parents: 18-65 years (last birthday). Children: 90 days completed to 20 years (last birthday)."
  maturity_age_max: 80
  maturity_age_notes: "Cover ceasing age: principal insured and parents 80, spouse 80 (subject to at least 5 years' cover), children 35 (last birthday). Policy term is 15 years."
  policy_terms_years: [15]
  policy_term_kind: "fixed"
  policy_term_min_years: 15
  policy_term_max_years: 15
  premium_paying_terms_years: [15]
  ppt_min_years: 15
  ppt_max_years: 15
  ppt_term_pairs: "Policy term 15 years; premium paying term 15 years."
  min_sum_assured: "Initial Daily Benefit of ₹2,500 per insured (multiples of ₹500)."
  max_sum_assured: "Initial Daily Benefit of ₹10,000 per life; aggregate ₹10,000 per individual across all policies under this plan."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated. The minimum Initial Daily Benefit of ₹2,500 drives the premium; only yearly and half-yearly modes are allowed."
  max_premium: "Not specified; determined by the Initial Daily Benefit (maximum ₹10,000 per life), age, sex and insured type."

premium:
  modes: ["Yearly", "Half-yearly"]
  frequency_loadings: "Half-yearly instalment = yearly premium × 0.5090. No other loading is stated."
  single_premium: false
  top_up_allowed: false
  min_top_up: null
  max_top_up: null
  min_annualized_premium: null
  max_annualized_premium: null
  rate_table_available: true
  illustrative_premiums:
    - basis: "Initial Daily Benefit ₹5,000; Principal Insured; yearly premium; offline sale"
      note: "Sample annual premiums in ₹ by age at entry and sex. Figures exclude taxes and riders."
      rows:
        - {age: 20, male: 6555, female: 5556}
        - {age: 30, male: 7195, female: 6883}
        - {age: 40, male: 9446, female: 9509}
        - {age: 50, male: 14895, female: 13209}
        - {age: 60, male: 22350, female: 17341}
    - basis: "Initial Daily Benefit ₹5,000; Other Insured; yearly premium; offline sale"
      note: "Premium for the Other Insured only, exclusive of the Principal Insured premium. Age of PI and age at entry of the other insured are shown."
      rows:
        - {pi_age: 25, other_age: 0, male: 3161, female: 3161}
        - {pi_age: 30, other_age: 18, male: 4471, female: 3631}
        - {pi_age: 35, other_age: 25, male: 5147, female: 4360}
        - {pi_age: 40, other_age: 35, male: 6326, female: 6357}
        - {pi_age: 50, other_age: 45, male: 10563, female: 9941}
        - {pi_age: 60, other_age: 50, male: 14586, female: 12737}
  premium_formula: "Annual premium for each insured is read from LIC's age/sex/Initial Daily Benefit rate table, reduced by any Initial Daily Benefit rebate and the 10% online-sale rebate. Total policy premium is the sum for all insured members. Half-yearly instalment = yearly premium × 0.5090."
  notes: "Premiums are guaranteed throughout the 15-year policy term. Initial Daily Benefit rebate applies at ₹4,000 and above: ₹400/₹200 (PI/other insured) at ₹4,000-4,500, rising to ₹2,800/₹1,400 at ₹10,000. Online sale rebate is 10% of the tabular premium if no agent or intermediary is involved. Rider premiums are extra."

benefits:
  death_benefit: "No conventional death benefit. On death of the Original Principal Insured, Auto Health Cover waives all future base-policy premiums for the surviving insureds from the policy anniversary coinciding with or next following the death; the policy continues with a new successive Principal Insured. On death of any other insured, no death benefit is payable and that insured's premium ceases."
  death_benefit_formula: "Not applicable; Auto Health Cover premium waiver = future base premiums of all surviving insureds"
  maturity_benefit: "No maturity benefit is payable."
  maturity_benefit_formula: "Not applicable"
  survival_benefits: []
  guaranteed_benefits: "All hospital, surgical and other health benefits are fixed and guaranteed; premiums are guaranteed throughout the policy term."
  non_guaranteed_benefits: "No bonus or surplus participation. No Claim Benefit increases the Applicable Daily Benefit by 10% of the Initial Daily Benefit for every three consecutive claim-free policy years, with no maximum."
  riders: ["LIC's New Term Assurance Rider (UIN: 512B210V02)", "LIC's Accident Benefit Rider (UIN: 512B203V03)"]
  other_benefits:
    - "Hospital Cash Benefit: Applicable Daily Benefit (ADB) per 24 hours in a non-ICU ward; 2 × ADB per 24 hours in ICU; a part-day stay is paid if it exceeds 4 continuous hours."
    - "Major Surgical Benefit: a percentage of the MSB Sum Assured (100 × ADB) for 263 listed surgeries. Category 1 pays 100%, Category 2 60%, Category 3 40% and Category 4 20% of MSB Sum Assured."
    - "Ambulance Benefit: ₹1,000 lump sum when a Major Surgical Benefit is payable and ambulance transport is used."
    - "Premium Waiver Benefit: one year's base-policy instalment premiums waived after a Category 1 or 2 Major Surgical Benefit, once per policy year."
    - "MSB Restoration: after the annual MSB Sum Assured is exhausted, one further MSB claim in the same policy year for a different category and procedure; maximum 10 restorations over the cover period."
    - "Day Care Procedure Benefit: 5 × ADB for each listed day-care procedure; 3 procedures per policy year and 30 over the cover period."
    - "Other Surgical Benefit: 2.5 × ADB per day for surgery not listed under MSB or DCPB; 15 days in year 1, 45 days in later years and 450 days lifetime."
    - "Medical Management Benefit: 2.5 × ADB for inpatient treatment of dengue, malaria, pneumonia, pulmonary tuberculosis or viral hepatitis A; 2 claims per year and 20 lifetime."
    - "Extended Hospitalisation Benefit: 10 × ADB for a single continuous hospitalisation exceeding 30 days; once per year and 10 times lifetime."
    - "No Claim Benefit: 10% of Initial Daily Benefit added to ADB at the end of every three consecutive claim-free policy years; no maximum."
    - "Health Check-up Benefit: actual cost up to one-half of ADB, once every three years after the first three policy years."
    - "Quick Cash facility: 50% of the eligible Major Surgical Benefit may be advanced during hospitalisation for a Category 1 or 2 surgery at a network hospital, subject to LIC approval."
    - "Cover can be extended to a new spouse within 12 months of marriage and to new children within 12 months of birth or legal adoption, subject to underwriting and at least 5 years' outstanding term."

policy_features:
  loan: false
  surrender: false
  surrender_terms: "No surrender value. The policy also has no paid-up value and no maturity benefit."
  paid_up: false
  paid_up_terms: "No paid-up value; cover lapses if premiums are not paid within the grace period and the policy is not revived."
  revival: true
  revival_period_years: 5
  free_look_days: 30
  grace_period_days:
    yearly: 30
    half_yearly: 30
    quarterly: null
    monthly_nach: null
  partial_withdrawal: false
  partial_withdrawal_terms: "Not applicable"
  assignment_allowed: true
  nomination_allowed: true
  exclusions_summary: "The CIS exclusion list has 32 items, including pre-existing conditions (36-month lookback) unless disclosed and accepted, non-medical or experimental treatment, treatment outside India, cosmetic surgery, dental treatment (except accident), restricted AYUSH cover, pregnancy and childbirth (except ectopic pregnancy), suicide or self-inflicted injury, alcohol or drug use, war and terrorism, hazardous sports, criminal acts and hospitalisation under 24 hours (except day care, haemodialysis and radiotherapy). Items 31 and 32 are the general and specific waiting periods."
  waiting_period: "90-day general waiting period for sickness; accidents are covered from day one. On revival within 90 days a 45-day general waiting period applies; on later revival, 90 days. A 24-month specific waiting period applies to 23 listed conditions and procedures."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Statutory taxes, if any, are payable by the policyholder on premiums at the prevailing rate, over and above the premium."
  notes: "The CIS and brochure do not state income-tax benefits for premiums or claim proceeds. Consult a tax adviser and verify current law."

decision:
  primary_goals: ["health", "protection"]
  risk_profile: "Pure risk; fixed health benefits with no market or savings component"
  liquidity: "Low"
  time_horizon: "Medium"
  minimum_age: 18
  maximum_age: 65
  suitable_for:
    - "Families wanting fixed hospital-cash and surgery payouts that do not depend on actual bills"
    - "Buyers who want to cover spouse, children and parents under one policy"
    - "People seeking guaranteed premiums and a no-claim benefit that increases daily cover"
  not_suitable_for:
    - "Buyers wanting indemnity health cover that reimburses actual hospital bills; this plan pays fixed amounts"
    - "Anyone needing immediate cover for a pre-existing condition"
    - "People who need surrender value, maturity returns or liquidity"
  key_tradeoffs:
    - "Fixed benefits can fall well short of actual hospital costs, especially in metro hospitals"
    - "No surrender, paid-up or maturity value; lapsing forfeits cover"
    - "90-day general and 24-month specific waiting periods, plus 30/90-day annual hospital-cash limits"
    - "Cover is a 15-year contract but hospital-cash days are capped each year and over the lifetime"
  decision_flags: ["fixed_benefit_health", "hospital_cash", "surgical_benefit", "family_floater", "no_surrender_value", "waiting_period_90d", "specific_waiting_24m", "no_claim_benefit"]

calculation_inputs:
  required_inputs: ["principal_insured_age", "principal_insured_gender", "initial_daily_benefit", "other_insured_ages_and_genders", "mode"]
  optional_inputs: ["initial_daily_benefit_rebate", "online_rebate", "riders", "claim_history"]
  rate_table_available: true
  formulas:
    applicable_daily_benefit: "initial_daily_benefit + (0.10 × initial_daily_benefit × completed_claim_free_blocks_of_3_years)"
    hcb_non_icu: "applicable_daily_benefit per 24 hours (part-day paid if stay exceeds 4 continuous hours)"
    hcb_icu: "2 × applicable_daily_benefit per 24 hours"
    msb_sum_assured: "100 × applicable_daily_benefit"
    msb_payout: "msb_sum_assured × surgery_percentage (100% / 60% / 40% / 20% by Category 1-4)"
    dcpb: "5 × applicable_daily_benefit per procedure"
    osb: "2.5 × applicable_daily_benefit per day"
    mmb: "2.5 × applicable_daily_benefit per event"
    ehb: "10 × applicable_daily_benefit per qualifying hospitalisation"
    half_yearly_premium: "yearly_premium × 0.5090"
    total_policy_premium: "sum of member premiums − initial_daily_benefit_rebates − online_rebate (10%) + rider premiums"
  assumptions:
    - "The Applicable Daily Benefit is per insured and is not transferable between insureds."
    - "MSB Sum Assured and all percentage limits are recalculated using the ADB applicable in that policy year."
    - "No Claim Benefit is policy-wide: any claim under HCB, MSB, OSB, DCPB or MMB in a policy year breaks the three-year claim-free block for all insureds."
    - "Sample premiums are for ₹5,000 Initial Daily Benefit, offline, and exclude taxes and rider premiums."

sources:
  - name: "Customer Information Sheet (CIS)"
    url: "https://licindia.in/documents/20121/1886603/CIS_+LIC%27s+Health+Shield.pdf/c27ba4bc-9a7a-15c7-006e-a3d7d28ba4f1?t=1793350134661"
  - name: "Sales Brochure, 14-10-2026"
    url: "https://licindia.in/documents/20121/1886603/Lic+Health+Shield_English_Sales+Brochure_14102026.pdf/445c61b1-e6a6-c5e5-fc25-f2bbd5f5078d?t=1791956456979"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1886603/Policy+Document_LIC%27s+Health+Shield.pdf/a6e87672-f73b-f16a-2c6f-56c4c41dc3fe?t=1793350133757"
  - name: "Official product page"
    url: "https://licindia.in/lic-s-health-shield"
---
# LIC's Health Shield — Plan 907

**One-line summary:** A 15-year fixed-benefit health plan that pays a chosen daily hospital cash amount, a multiple of that amount for surgery and day-care procedures, and extra lump sums for ICU stays, long hospitalisations and five named infections, with no maturity or surrender value.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 907 |
| UIN | 512N369V01 |
| Product type | Non-par, non-linked, individual pure-risk health plan |
| Status | Active |
| Entry age | 18-65 for PI, spouse and parents; 90 days-20 years for children |
| Policy term | 15 years |
| Premium paying term | 15 years |
| Initial Daily Benefit | ₹2,500 to ₹10,000 per life, in ₹500 multiples |
| Major Surgical Benefit Sum Assured | 100 × Applicable Daily Benefit |
| Maturity / surrender value | None |
| Official page | https://licindia.in/lic-s-health-shield |

## Eligibility

| Condition | Requirement |
|---|---|
| Principal Insured (PI) | 18-65 years (last birthday) |
| Spouse / parents | 18-65 years (last birthday); spouse's IDB cannot exceed PI's |
| Children | 90 days completed to 20 years (last birthday); IDB cannot exceed the spouse's (or PI's if no spouse) |
| Policy term | 15 years |
| Premium paying term | 15 years |
| Maximum cover ceasing age | PI and parents 80; spouse 80 (minimum 5-year cover); children 35 |
| Family composition | If both parents are alive and eligible, either both must be covered or neither. All eligible children must be covered at inception or none can be added later. |
| Aggregate IDB cap | ₹10,000 per individual across all policies under this plan |

Cover can be extended to a new spouse within 12 months of marriage or remarriage, and to a child born or legally adopted after issue within 12 months, provided at least five years of the policy term remain and LIC accepts the risk. Existing members can be removed on death or divorce on written request; other removals are at LIC's discretion.

## Premiums and sum insured

- **Modes:** yearly and half-yearly only. Half-yearly instalment = yearly premium × 0.5090.
- **Initial Daily Benefit (IDB):** ₹2,500 to ₹10,000 per insured, in multiples of ₹500. The total IDB for one individual across all policies under this plan cannot exceed ₹10,000.
- **Major Surgical Benefit Sum Assured:** 100 × Applicable Daily Benefit for that policy year.
- **Premium basis:** age, sex, IDB, insured type (PI or other insured) and mode. Premiums are guaranteed for the 15-year term.
- **IDB rebate:** for IDB of ₹4,000 or more, the premium for that member is reduced by the amounts below.
- **Online rebate:** 10% of the tabular premium (base and riders) if the proposal is completed online without an agent, corporate agent, broker or insurance marketing firm.

### Illustrative premiums

The brochure publishes sample annual premiums for an IDB of ₹5,000, offline, exclusive of taxes and riders.

**Principal Insured**

| Age at entry | Male (₹) | Female (₹) |
|---|---|---|
| 20 | 6,555 | 5,556 |
| 30 | 7,195 | 6,883 |
| 40 | 9,446 | 9,509 |
| 50 | 14,895 | 13,209 |
| 60 | 22,350 | 17,341 |

**Other Insured (premium for that member only)**

| PI age | Other insured age | Male (₹) | Female (₹) |
|---|---|---|---|
| 25 | 0 | 3,161 | 3,161 |
| 30 | 18 | 4,471 | 3,631 |
| 35 | 25 | 5,147 | 4,360 |
| 40 | 35 | 6,326 | 6,357 |
| 50 | 45 | 10,563 | 9,941 |
| 60 | 50 | 14,586 | 12,737 |

**IDB rebate (annual, ₹)**

| IDB (₹) | PI | Each other insured |
|---|---|---|
| 4,000 and 4,500 | 400 | 200 |
| 5,000 and 5,500 | 700 | 350 |
| 6,000 and 6,500 | 1,000 | 500 |
| 7,000 and 7,500 | 1,400 | 700 |
| 8,000 and 8,500 | 1,800 | 900 |
| 9,000 and 9,500 | 2,300 | 1,150 |
| 10,000 | 2,800 | 1,400 |

## Benefits

### Hospital Cash Benefit (HCB)

If an insured is hospitalised for more than 24 continuous hours due to an accident or sickness, HCB pays the Applicable Daily Benefit for each 24-hour period, and for any part-day stay exceeding 4 continuous hours:

- **Non-ICU ward:** 1 × ADB per day.
- **ICU:** 2 × ADB per day.
- **Combined ICU and non-ICU stay in one 24-hour period:** treated as ICU if the ICU stay was at least 4 continuous hours.

HCB is paid over and above Major Surgical Benefit and Other Surgical Benefit. It is not paid for a listed day-care procedure, except maintenance haemodialysis and radiotherapy, for which HCB is payable even if the stay is under 24 hours.

### Major Surgical Benefit (MSB)

For a listed surgery performed in India due to accident or sickness, MSB pays a percentage of the MSB Sum Assured (100 × ADB):

- **Category 1:** 100% of MSB Sum Assured.
- **Category 2:** 60%.
- **Category 3:** 40%.
- **Category 4:** 20%.

The annexure lists 263 surgeries across cardiovascular, nervous, respiratory, digestive, musculoskeletal, oro-maxillofacial, endocrine, renal/genitourinary, organ transplant, ENT, eye, gynaecology, stereotactic radiosurgery and other groups. If multiple surgeries are performed in one session, the most severe surgery is paid at 100% of its eligible amount and each additional surgery at 25%, subject to annual and lifetime limits. The same surgery cannot be claimed twice, and multiple-sitting PTCA is paid only once.

**Linked MSB benefits:**

- **Ambulance Benefit:** ₹1,000 lump sum when MSB is payable and ambulance transport is medically necessary.
- **Premium Waiver Benefit:** one year's base-policy instalment premiums for all insureds are waived after a Category 1 or 2 MSB, once per policy year. Rider premiums are not waived.
- **MSB Restoration:** if the annual MSB Sum Assured is exhausted, one further MSB claim in the same policy year is covered, provided it arises from a different category and a different procedure. Restoration is available once per policy year and up to 10 times over the cover period.

### Day Care Procedure Benefit (DCPB)

A lump sum of 5 × ADB for each listed day-care procedure performed in India. The annexure lists 243 procedures. Limits: 3 procedures per policy year and 30 over the cover period. Only one procedure is paid when several are performed in the same session. DCPB is not paid together with Medical Management Benefit for the same hospitalisation.

### Other Surgical Benefit (OSB)

For a surgery not listed in the MSB or DCPB annexures, OSB pays 2.5 × ADB per day of hospitalisation in India, for each 24-hour period or part thereof exceeding 4 continuous hours. Limits: 15 days in the first policy year, 45 days in each later policy year and 450 days over the cover period. Only one procedure is paid per surgical session. HCB is paid in addition.

### Medical Management Benefit (MMB)

A lump sum of 2.5 × ADB for inpatient hospitalisation in India due to dengue, malaria, pneumonia, pulmonary tuberculosis or viral hepatitis A. Limits: 2 claims per policy year and 20 over the cover period. MMB is not paid if MSB, OSB or DCPB is payable for the same hospitalisation. HCB is paid in addition.

### Extended Hospitalisation Benefit (EHB)

A lump sum of 10 × ADB for a single continuous inpatient hospitalisation exceeding 30 days in India. Limits: once per policy year and 10 times over the cover period. EHB is paid in addition to HCB, MSB, OSB, DCPB or MMB for the same hospitalisation.

### No Claim Benefit

At the end of every three consecutive claim-free policy years, 10% of the Initial Daily Benefit is added to the Applicable Daily Benefit. There is no maximum. A policy year is claim-free only if no claim is made under HCB, MSB, OSB, DCPB or MMB by any insured in that year. The increase applies to all insureds on the PI's three-year cycle, including members who joined later.

### Health Check-up Benefit

After the first three policy years, and then once every three years, LIC reimburses the actual cost of a health check-up in India up to one-half of ADB, on submission of the medical report and bills.

### Death benefit and Auto Health Cover

There is no conventional death benefit. On death of the Original Principal Insured, Auto Health Cover waives all future base-policy premiums for the surviving insureds from the policy anniversary coinciding with or next following the death. The policy continues with the surviving spouse as successive PI, or the eldest surviving major insured if there is no spouse, and all cover limits continue to increase through No Claim Benefit. Auto Health Cover is not available if the Original PI commits suicide within 12 months of cover commencement or revival. On death of any other insured, no benefit is payable; that insured's premium ceases and the policy continues for the others.

### Benefit limits at a glance

| Benefit | Amount | Annual limit | Lifetime limit |
|---|---|---|---|
| Hospital Cash Benefit | 1 × ADB/day non-ICU; 2 × ADB/day ICU | 30 days in year 1; 90 days in later years | 900 days |
| Major Surgical Benefit | % of 100 × ADB by category | 1 × MSB Sum Assured | 10 × MSB Sum Assured |
| MSB Restoration | Up to 1 × MSB Sum Assured | Once per policy year | 10 times |
| Day Care Procedure Benefit | 5 × ADB | 3 procedures | 30 procedures |
| Other Surgical Benefit | 2.5 × ADB/day | 15 days in year 1; 45 days later | 450 days |
| Medical Management Benefit | 2.5 × ADB | 2 claims | 20 claims |
| Extended Hospitalisation Benefit | 10 × ADB | Once | 10 times |
| Health Check-up | Actual up to 0.5 × ADB | Once every 3 years after year 3 | — |

### Policy terms: maturity, surrender, loan and revival

- **Maturity:** not applicable; there is no maturity benefit.
- **Surrender:** not applicable; there is no surrender value.
- **Loan:** not available.
- **Paid-up:** not applicable; the policy does not acquire a paid-up value.
- **Revival:** within 5 years from the due date of the first unpaid premium and before the end of the policy term, on payment of arrears with interest and satisfactory continued insurability. Revival interest is 9.5% p.a. compounding half-yearly for the 12 months from 1 May 2026 to 30 April 2027; LIC resets it annually. Waiting periods and exclusions apply again on revival.
- **Free look:** 30 days from receipt of the policy document.
- **Grace period:** 30 days for yearly and half-yearly premiums.
- **Migration and portability:** not applicable.
- **Change in sum insured:** not applicable.
- **Moratorium period:** not applicable.

## Charges and optional benefits

No separate premium allocation, administration, fund-management or surrender charges are stated. The policyholder pays the risk premium plus statutory taxes; rider premiums are additional.

### Optional riders

| Rider | UIN | Key limits |
|---|---|---|
| LIC's New Term Assurance Rider | 512B210V02 | Original PI and/or insured spouse only; available at inception or inclusion, before age 60; sum assured up to the MSB Sum Assured; outstanding base and rider term at least 5 years |
| LIC's Accident Benefit Rider | 512B203V03 | Original PI and/or insured spouse only; available during the cover period before age 65; sum assured up to the MSB Sum Assured; cover during the premium paying term or (70 − entry age) years, whichever is lower |

The premium for both riders together cannot exceed 30% of the base-plan premium for that insured. The spouse's rider sum assured cannot exceed the PI's.

### Other options

- **Quick Cash:** 50% of the eligible MSB amount can be advanced during hospitalisation for a Category 1 or 2 surgery at a listed network hospital, subject to LIC approval; the advance is adjusted against the final MSB claim.
- **Addition/removal of members:** as described under Eligibility.

## Waiting periods, exclusions and conditions

### Waiting periods

- **General waiting period:** 90 days from the Effective Date of Cover for sickness. There is no general waiting period for hospitalisation or surgery due to an accident occurring on or after cover commencement.
- **On revival:** if revival is requested within 90 days of the first unpaid premium, a 45-day general waiting period applies from revival; if later, 90 days apply.
- **Specific waiting period:** 24 months from the Effective Date of Cover for 23 listed conditions and procedures, and for complications arising from them. On revival within 90 days, the original 24-month period continues; on later revival, a fresh 24-month period applies.

The 23 specific-waiting conditions are: adenoid or tonsillar disorders; anal fistula or fissure; benign enlargement of prostate; benign uterine disorders (fibroids, uterine prolapse, dysfunctional uterine bleeding); cataract; gall stones; slip disc; piles; benign thyroid disorders; hernia; hydrocele; degenerative joint conditions; sinus disorders; kidney or urinary tract stones; varicose veins; carpal tunnel syndrome; benign breast disorders (fibroadenoma, fibrocystic disease); benign ovarian disorders; gastric or duodenal ulcer; retinal disorders; knee or joint replacement (other than accident); osteoporosis or osteoarthritis; and chronic or end-stage renal failure.

### Key exclusions

No benefit is payable for hospitalisation or surgery directly or indirectly caused by:

- A pre-existing condition, unless disclosed to and accepted by LIC before cover commencement or revival. Pre-existing means diagnosed, or medically advised or treated, within 36 months before cover or revival.
- Treatment not performed by a physician or surgeon, or treatment of a purely experimental nature; experimental or unproven drugs, regimens or devices.
- Admission, diagnosis or treatment outside India; routine examinations, preventive check-ups, vaccinations or out-patient examinations.
- Surgery purely for diagnosis, screening or investigation (for example GI endoscopy or true-cut needle biopsy, unless specified).
- Cosmetic or plastic surgery, unless medically necessary for illness or injury and performed within 6 months of the event.
- Organ donation by the donor; dental treatment except accident-related.
- AYUSH treatment, except in a government or government-recognised hospital with at least 24 hours' inpatient care; preventive, rejuvenating or beauty AYUSH treatment, nature-cure clinics, spas and similar establishments are excluded.
- Acupressure, acupuncture, magnetic and other therapies.
- Convalescence, general debility, rest cure, congenital external disease or defect, sterilization or infertility treatment, sanatorium or spa care, long-term care, preventive or recuperative hospitalisation, or physiotherapy alone.
- Admission primarily for enforced bed rest, custodial care or terminal-illness support services.
- Attempted suicide or intentional self-inflicted injury; being under the influence of alcohol, drugs or narcotics not prescribed by a registered medical practitioner.
- Removal, correction or replacement of a prosthesis or device implanted before cover commencement or revival.
- Pregnancy and childbirth (except ectopic pregnancy), caesarean section, medical termination of pregnancy and pre/post-natal care.
- War, invasion, hostilities, civil war, riots, terrorism or warlike operations.
- Service in the military, paramilitary, naval, air or police forces in operations involving arms.
- Professional or competitive sports and hazardous pursuits such as diving, racing, martial arts, hunting, mountaineering, parachuting, bungee-jumping, scuba diving and aerial sports.
- Nuclear contamination or radioactive/explosive hazardous materials.
- Criminal or unlawful acts; flying other than as a bona fide passenger in a licensed aircraft.
- Eyeglasses, hearing aids, LASIK/PRK/phakic IOL and refractive-error correction.
- Sterility, fertility, assisted conception, contraception or sexually transmitted disease treatment; sex-change operations.
- Stem-cell therapy except bone-marrow transplant as a recipient; hormone replacement therapy.
- Sleep disorders, sleep apnoea, obesity and weight-control programmes.
- Pre- and post-hospitalisation treatment.
- Hospitalisation under 24 hours, except day-care procedures, haemodialysis and radiotherapy.

The general 90/45-day waiting period and the 24-month specific waiting period also operate as exclusions, as described above. Standard policy-document conditions on misrepresentation, fraud, non-disclosure and Section 45 of the Insurance Act apply.

## Tax treatment

The CIS and brochure do not state income-tax deductions or exemptions for premiums or benefits. Statutory taxes, if any, are payable on premiums at the prevailing rate and are collected over and above the premium. Confirm the current treatment with a tax adviser before relying on it.

## Suitability and decision notes

**Best suited to:** families who want a fixed, predictable cash payout during hospitalisation and surgery, want to cover spouse, children and parents under one 15-year contract, and value guaranteed premiums plus a no-claim benefit that raises daily cover over time.

**Poor fit for:** buyers who want indemnity cover for actual hospital bills, anyone who needs immediate cover for a pre-existing condition, and people who need surrender value, maturity returns or liquidity. The fixed daily and surgical amounts may be far below actual costs in high-cost hospitals.

**Key trade-offs:** the plan pays fixed amounts rather than reimbursing bills; there is no surrender, paid-up or maturity value; the 90-day general and 24-month specific waiting periods delay full cover; and hospital-cash days are capped annually and over the lifetime. The no-claim increase is attractive but requires the whole policy to be claim-free for three years.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Principal insured age and sex | Yes | Selects the PI rate |
| Initial Daily Benefit | Yes | ₹2,500-₹10,000 per life, ₹500 multiples |
| Other insured ages and sexes | If covered | Each member has a separate rate; spouse/parent/child IDB caps apply |
| Mode | Yes | Yearly or half-yearly |
| IDB rebate | Yes, if IDB ≥ ₹4,000 | Table above |
| Online rebate | If direct online sale | 10% of tabular premium |
| Riders | Optional | Term and/or accident rider, subject to limits |
| Claim history | For projections | Determines No Claim Benefit |

Core formulas:

```text
Applicable Daily Benefit = IDB + 0.10 × IDB × completed 3-year claim-free blocks
HCB (non-ICU)            = ADB per 24 hours (part-day if > 4 continuous hours)
HCB (ICU)                = 2 × ADB per 24 hours
MSB Sum Assured          = 100 × ADB
MSB payout               = MSB Sum Assured × surgery category % (100/60/40/20)
DCPB                     = 5 × ADB per procedure
OSB                      = 2.5 × ADB per day
MMB                      = 2.5 × ADB per event
EHB                      = 10 × ADB per qualifying hospitalisation
Half-yearly premium      = yearly premium × 0.5090
Total policy premium     = Σ member premiums − IDB rebates − 10% online rebate
                           + rider premiums
```

## Source documents

- [Customer Information Sheet (CIS)](https://licindia.in/documents/20121/1886603/CIS_+LIC%27s+Health+Shield.pdf/c27ba4bc-9a7a-15c7-006e-a3d7d28ba4f1?t=1793350134661)
- [Sales Brochure, 14-10-2026](https://licindia.in/documents/20121/1886603/Lic+Health+Shield_English_Sales+Brochure_14102026.pdf/445c61b1-e6a6-c5e5-fc25-f2bbd5f5078d?t=1791956456979)
- [Policy Document](https://licindia.in/documents/20121/1886603/Policy+Document_LIC%27s+Health+Shield.pdf/a6e87672-f73b-f16a-2c6f-56c4c41dc3fe?t=1793350133757)
- [Official product page](https://licindia.in/lic-s-health-shield)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
