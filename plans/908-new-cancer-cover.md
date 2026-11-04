---
plan_number: 908
plan_name: "LIC's New Cancer Cover"
uin: "512N370V01"
insurer: "Life Insurance Corporation of India"
category: "Health"
product_type: "Non-Par, Non-Linked, Health, Individual, Pure Risk Plan"
status: "Active"
launch_date: null
withdrawal_date: null
official_page: "https://licindia.in/web/guest/lic-s-new-cancer-cover"
last_verified: "2026-11-04"

eligibility:
  entry_age_min: 18
  entry_age_max: 65
  entry_age_notes: "18 to 65 years (last birthday)."
  maturity_age_max: 75
  maturity_age_notes: "Minimum age at maturity 28 years; maximum 75 years (last birthday). Policy term 10-15 years."
  policy_terms_years: [10, 11, 12, 13, 14, 15]
  policy_term_kind: "range"
  policy_term_min_years: 10
  policy_term_max_years: 15
  premium_paying_terms_years: [10, 11, 12, 13, 14, 15]
  ppt_min_years: 10
  ppt_max_years: 15
  ppt_term_pairs: "Premium paying term equals the policy term."
  min_sum_assured: "₹35,00,000 for entry age 18-34; ₹30,00,000 for 35-40; ₹20,00,000 for 41-50; ₹15,00,000 for 51-65."
  max_sum_assured: "₹50,00,000 per individual across all policies under this plan; multiples of ₹1,00,000."
  min_premium_by_mode:
    monthly: null
    quarterly: null
    half_yearly: null
    yearly: null
  min_premium_notes: "No minimum premium is stated. The age-banded minimum Basic Sum Assured drives the minimum premium; only yearly and half-yearly modes are allowed."
  max_premium: "Not specified; determined by the Basic Sum Assured, age, sex, option and term, subject to the ₹50,00,000 aggregate cap."

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
    - basis: "Option I - Level Sum Assured; Basic Sum Assured ₹50,00,000; yearly premium; offline sale"
      note: "Annual premiums in ₹ by age at entry and policy term, exclusive of taxes. A null value means the combination is not available."
      rows:
        - {age: 20, term_10_male: 4700, term_10_female: 5250, term_15_male: 4950, term_15_female: 6100}
        - {age: 35, term_10_male: 8050, term_10_female: 15200, term_15_male: 9100, term_15_female: 17600}
        - {age: 50, term_10_male: 25400, term_10_female: 37750, term_15_male: 32800, term_15_female: 41600}
        - {age: 60, term_10_male: 73050, term_10_female: 60500, term_15_male: 89150, term_15_female: 66750}
        - {age: 65, term_10_male: 114150, term_10_female: 75800, term_15_male: null, term_15_female: null}
    - basis: "Option II - Increasing Sum Assured; Basic Sum Assured ₹50,00,000; yearly premium; offline sale"
      note: "Annual premiums in ₹ by age at entry and policy term, exclusive of taxes. A null value means the combination is not available."
      rows:
        - {age: 20, term_10_male: 5300, term_10_female: 6100, term_15_male: 5700, term_15_female: 7400}
        - {age: 35, term_10_male: 9700, term_10_female: 19500, term_15_male: 11400, term_15_female: 23400}
        - {age: 50, term_10_male: 33100, term_10_female: 49050, term_15_male: 44750, term_15_female: 55950}
        - {age: 60, term_10_male: 97450, term_10_female: 78800, term_15_male: 123450, term_15_female: 90150}
        - {age: 65, term_10_male: 152700, term_10_female: 99550, term_15_male: null, term_15_female: null}
  premium_formula: "Annual premium is read from LIC's age/sex/option/term rate table for the chosen Basic Sum Assured. Half-yearly instalment = yearly premium × 0.5090. Online sale rebate is 7.5% for terms 10-14 years and 10% for a 15-year term."
  notes: "Premiums are guaranteed and payable for the full policy term, but cease after a Major Stage Cancer claim. A 15-year term is not available at age 65 because the maximum maturity age is 75. Sample rates are for ₹50 lakh Basic Sum Assured, offline, and exclude taxes."

benefits:
  death_benefit: "No death benefit is payable. On death during the 10-year income-benefit period, the remaining monthly income instalments are paid to the nominee."
  death_benefit_formula: "Not applicable"
  maturity_benefit: "No maturity benefit is payable."
  maturity_benefit_formula: "Not applicable"
  survival_benefits: []
  guaranteed_benefits: "The Early Stage and Major Stage lump sums, the monthly income benefit and the premium waiver are fixed and guaranteed as described in the policy."
  non_guaranteed_benefits: "None; the plan does not participate in profits and has no bonus."
  riders: []
  other_benefits:
    - "Early Stage Cancer benefit: 25% of the Applicable Sum Assured as a lump sum, plus waiver of premiums for the next 3 policy years or the balance policy term, whichever is shorter; payable once only."
    - "Major Stage Cancer benefit: 100% of the Applicable Sum Assured as a lump sum, irrespective of any earlier Early Stage claim."
    - "Income Benefit: after a Major Stage claim, 1% of the Applicable Sum Assured per month for 10 years (120 monthly instalments), payable regardless of survival and continuing beyond the policy term; remaining instalments go to the nominee on death."
    - "Option I keeps the Basic Sum Assured level throughout the policy term."
    - "Option II adds 10% of the Basic Sum Assured to the Applicable Sum Assured on each of the first five policy anniversaries, stopping after a cancer diagnosis. The option cannot be changed later."
    - "Premiums falling due between the date of diagnosis and the next policy anniversary are deducted from the claim."
    - "If Early Stage and Major Stage cancers are diagnosed simultaneously, both benefits are payable only if supported by separate histological evidence. If multiple cancers are diagnosed at the same time, only one benefit is paid, at the highest applicable stage."
    - "Total benefits across Early Stage, Major Stage and Income Benefit are capped at 245% of the Applicable Sum Assured, excluding the premium waiver."

policy_features:
  loan: false
  surrender: false
  surrender_terms: "No surrender value and no paid-up value."
  paid_up: false
  paid_up_terms: "No paid-up value; the policy lapses if premiums are unpaid beyond the grace period and is not revived."
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
  exclusions_summary: "No benefit for a pre-existing cancer, pre-cancerous condition or related condition diagnosed, medically advised or treated within 36 months before issue or revival; conditions caused by alcohol or drugs except when prescribed; or conditions arising from nuclear contamination or radioactive material. Early-stage cover excludes benign, borderline and low-malignant-potential tumours, dysplasia and intra-epithelial neoplasia (including CIN), carcinoma-in-situ of the skin and melanoma-in-situ. Major-stage cover excludes non-invasive cancers, breast carcinoma-in-situ, CIN 1/2/3, non-melanoma skin cancer without metastasis, melanoma confined to the epidermis, low-grade prostate cancer, early thyroid cancer, early chronic lymphocytic leukaemia, non-invasive papillary bladder cancer and low-risk GIST."
  waiting_period: "180 days from issue or revival for the first diagnosis of any stage of cancer. A cancer diagnosed during the waiting period means no benefit is payable and the policy terminates. A 7-day survival period applies from the date of diagnosis, including the diagnosis date."

tax:
  section_80c: "Not stated in the official documents"
  section_10_10d: "Not stated in the official documents"
  gst: "Statutory taxes, if any, are payable on premiums at the prevailing rate, over and above the premium."
  notes: "The CIS and brochure do not state income-tax benefits for premiums or claim proceeds. Consult a tax adviser and verify current law."

decision:
  primary_goals: ["health", "protection"]
  risk_profile: "Pure risk; fixed cancer benefits with no market or savings component"
  liquidity: "Low"
  time_horizon: "Medium"
  minimum_age: 18
  maximum_age: 65
  suitable_for:
    - "People who want a fixed lump sum plus a 10-year monthly income on a first major-cancer diagnosis"
    - "Buyers with a family history of cancer who want stand-alone cancer cover alongside a hospital indemnity plan"
    - "Those who value a premium waiver and continued income after the policy terminates on a major-stage claim"
  not_suitable_for:
    - "Buyers wanting comprehensive hospitalisation or surgical cover; this plan covers cancer only"
    - "Anyone who cannot meet the high age-banded minimum sum assured of ₹15-35 lakh"
    - "People who need surrender value, maturity returns or a death benefit"
  key_tradeoffs:
    - "High minimum Basic Sum Assured makes this a large-ticket health policy"
    - "180-day waiting period and a 7-day survival condition before any benefit"
    - "Early-stage benefit is paid once only; a major-stage payment ends the policy but the monthly income continues for 10 years"
    - "Pre-existing cancer and precursor conditions within 36 months are not covered"
  decision_flags: ["cancer_only", "fixed_benefit_health", "high_min_sum_assured", "waiting_period_180d", "survival_period_7d", "income_benefit_10y", "no_surrender_value", "no_death_benefit"]

calculation_inputs:
  required_inputs: ["age", "sex", "policy_term", "benefit_option", "basic_sum_assured", "mode"]
  optional_inputs: ["online_rebate"]
  rate_table_available: true
  formulas:
    applicable_sum_assured_option_1: "basic_sum_assured"
    applicable_sum_assured_option_2: "basic_sum_assured × (1 + 0.10 × min(policy_year - 1, 5))"
    early_stage_lump_sum: "0.25 × applicable_sum_assured"
    major_stage_lump_sum: "1.00 × applicable_sum_assured"
    monthly_income_benefit: "0.01 × applicable_sum_assured per month for 120 months"
    maximum_total_benefit: "2.45 × applicable_sum_assured (excluding premium waiver)"
    half_yearly_premium: "yearly_premium × 0.5090"
    online_rebate: "yearly_premium × 0.075 (term 10-14) or × 0.10 (term 15)"
  assumptions:
    - "The Applicable Sum Assured under Option II increases only on the first five policy anniversaries and stops increasing after a cancer diagnosis."
    - "The income benefit is paid for 10 years even after the policy term ends and regardless of survival; unpaid instalments go to the nominee."
    - "Sample premiums are for ₹50 lakh Basic Sum Assured, offline, and exclude taxes."

sources:
  - name: "Customer Information Sheet (CIS)"
    url: "https://licindia.in/documents/20121/1886644/CIS_+LIC%27s+New+Cancer+Cover.pdf/83051434-19dd-74a8-d653-9bcaff96e93a?t=1793350524712"
  - name: "Sales Brochure, 14-10-2026"
    url: "https://licindia.in/documents/20121/1886644/LIC_+New+Cancer+Cover_Sales+Brochure_Eng_14102026.pdf/f0c42754-2596-7aa7-1658-09b863f5a7ca?t=1791956661554"
  - name: "Policy Document"
    url: "https://licindia.in/documents/20121/1886644/Policy+Document_LIC%27s+New+Cancer+Cover.pdf/7c874a20-f633-2ce8-24e8-c3b4cf4db007?t=1793350525397"
  - name: "Official product page"
    url: "https://licindia.in/web/guest/lic-s-new-cancer-cover"
---
# LIC's New Cancer Cover — Plan 908

**One-line summary:** A stand-alone, fixed-benefit cancer plan that pays 25% of the sum assured for specified early-stage cancer and 100% plus a 10-year monthly income for major-stage cancer, with premiums waived after either claim and no maturity, surrender or death benefit.

## Snapshot

| Field | Value |
|---|---|
| Plan number | 908 |
| UIN | 512N370V01 |
| Product type | Non-par, non-linked, individual pure-risk health plan |
| Status | Active |
| Entry age | 18-65 years (last birthday) |
| Policy term | 10-15 years |
| Premium paying term | Same as policy term |
| Basic Sum Assured | ₹15-35 lakh minimum by age; maximum ₹50 lakh |
| Benefits | Early Stage 25%; Major Stage 100%; income 1% per month for 10 years |
| Maturity / surrender / death benefit | None |
| Official page | https://licindia.in/web/guest/lic-s-new-cancer-cover |

## Eligibility

| Condition | Requirement |
|---|---|
| Minimum entry age | 18 years (last birthday) |
| Maximum entry age | 65 years (last birthday) |
| Minimum age at maturity | 28 years |
| Maximum age at maturity | 75 years (last birthday) |
| Policy term | 10 to 15 years |
| Premium paying term | Equal to the policy term |
| Minimum Basic Sum Assured | Age 18-34: ₹35,00,000; 35-40: ₹30,00,000; 41-50: ₹20,00,000; 51-65: ₹15,00,000 |
| Maximum Basic Sum Assured | ₹50,00,000 per individual across all policies under this plan |
| Sum assured multiples | ₹1,00,000 |

Only one individual can be covered per policy. The minimum sum assured is set by age band, so younger entrants must buy at least ₹35 lakh of cover. A 15-year term is not available at age 65 because it would exceed the maximum maturity age of 75.

## Premiums and sum insured

- **Modes:** yearly and half-yearly only. Half-yearly instalment = yearly premium × 0.5090.
- **Basic Sum Assured:** ₹1,00,000 multiples, within the age-banded minimum and the ₹50,00,000 aggregate cap.
- **Option I:** level Applicable Sum Assured throughout the policy term.
- **Option II:** Applicable Sum Assured increases by 10% of the Basic Sum Assured on each of the first five policy anniversaries, reaching 150% of the Basic Sum Assured after the fifth anniversary. The increase stops after a cancer diagnosis. The option cannot be changed later.
- **Online rebate:** 7.5% of the tabular premium for terms of 10-14 years; 10% for a 15-year term.
- **No single premium, top-up or rider:** the plan has no rider options.

### Illustrative premiums

Published sample annual premiums for a Basic Sum Assured of ₹50,00,000, offline, exclusive of taxes. A dash means the age/term combination is not available.

**Option I — Level Sum Assured**

| Age | Term 10 male | Term 10 female | Term 15 male | Term 15 female |
|---|---|---|---|---|
| 20 | ₹4,700 | ₹5,250 | ₹4,950 | ₹6,100 |
| 35 | ₹8,050 | ₹15,200 | ₹9,100 | ₹17,600 |
| 50 | ₹25,400 | ₹37,750 | ₹32,800 | ₹41,600 |
| 60 | ₹73,050 | ₹60,500 | ₹89,150 | ₹66,750 |
| 65 | ₹1,14,150 | ₹75,800 | — | — |

**Option II — Increasing Sum Assured**

| Age | Term 10 male | Term 10 female | Term 15 male | Term 15 female |
|---|---|---|---|---|
| 20 | ₹5,300 | ₹6,100 | ₹5,700 | ₹7,400 |
| 35 | ₹9,700 | ₹19,500 | ₹11,400 | ₹23,400 |
| 50 | ₹33,100 | ₹49,050 | ₹44,750 | ₹55,950 |
| 60 | ₹97,450 | ₹78,800 | ₹1,23,450 | ₹90,150 |
| 65 | ₹1,52,700 | ₹99,550 | — | — |

Premiums vary sharply by sex and age; for example, at age 35 the Option I 10-year female premium is 89% higher than the male premium, while at age 60 the female premium is lower. Use the exact age/sex/term/option table for quotes rather than interpolating these sample points.

## Benefits

### Early Stage Cancer benefit

On first diagnosis of a specified Early Stage Cancer during the policy term, LIC pays **25% of the Applicable Sum Assured** as a lump sum. LIC also waives premiums for the next three policy years or the balance policy term, whichever is shorter, starting from the policy anniversary following diagnosis. Premiums falling due between diagnosis and that anniversary are deducted from the claim.

The Early Stage benefit is payable **once only**. Cover for Major Stage Cancer continues after an Early Stage claim. An Early Stage claim must precede a Major Stage claim.

**Specified Early Stage Cancers:**

- Carcinoma-in-situ (CIS): malignant cells confined to the epithelium, involving the full epithelial thickness, with no invasion through the basement membrane.
- Prostate cancer staged T1N0M0 with a Gleason score of 2-6.
- Thyroid cancer smaller than 2.0 cm, staged T1N0M0.
- Bladder cancer staged TaN0M0.
- Chronic lymphocytic leukaemia Rai stage 0-2.
- Cervical intraepithelial neoplasia grade 3 (CIN3) diagnosed on cone biopsy.

The Early Stage definition excludes benign, borderline and low-malignant-potential tumours; dysplasia, intra-epithelial neoplasia and squamous intra-epithelial lesions; carcinoma-in-situ of the skin; and melanoma-in-situ.

### Major Stage Cancer benefit

On first diagnosis of a specified Major Stage Cancer during the policy term, LIC pays **100% of the Applicable Sum Assured** as a lump sum, irrespective of any earlier Early Stage claim. In addition:

- **Income Benefit:** 1% of the Applicable Sum Assured is paid each policy month for 10 years (120 monthly instalments). It is paid regardless of survival, continues beyond the policy term, and any remaining instalments are paid to the nominee on death.
- **Premium waiver:** all future premiums cease from the policy anniversary following diagnosis. Premiums falling due between diagnosis and that anniversary are deducted from the claim.
- **Policy status:** the policy continues only for the Income Benefit; no further Early Stage or Major Stage claims are payable.

**Major Stage Cancer definition:** a malignant tumour characterised by uncontrolled growth and spread of malignant cells, with invasion and destruction of normal tissue, confirmed by histological evidence. It includes leukaemia, lymphoma and sarcoma.

**What the Major Stage definition excludes:**

- Carcinoma-in-situ, benign tumours, pre-malignant conditions, borderline tumours, tumours of low malignant potential, tumours of uncertain or unknown behaviour, and non-invasive cancers. This includes breast carcinoma-in-situ and CIN 1, 2 or 3.
- Non-melanoma skin cancer, unless it has metastasised.
- Melanoma that has not spread beyond the epidermis.
- Prostate cancer unless the Gleason score is greater than 6 or the stage is T2N0M0 or higher.
- Thyroid cancer staged T1N0M0 or below.
- Chronic lymphocytic leukaemia below Rai stage 3.
- Non-invasive papillary bladder cancer staged TaN0M0 or lower.
- Gastrointestinal stromal tumour (GIST) staged T1N0M0 or below with a mitotic count of 5 or fewer per 50 high-power fields.

### Claim conditions and limits

- **Waiting period:** 180 days from issue or revival. Any stage of cancer diagnosed during this period means no benefit is payable and the policy terminates.
- **Survival period:** no benefit is payable if the life assured dies within 7 days of diagnosis, including the diagnosis date.
- **Simultaneous claims:** if Early Stage and Major Stage cancers are diagnosed at the same time, both benefits are payable only with separate histological evidence for each. If several cancers are diagnosed together, only one benefit is paid, at the highest applicable stage.
- **Maximum payout:** all benefits together are capped at 245% of the Applicable Sum Assured, excluding the premium waiver. This equals 25% Early Stage + 100% Major Stage + 120% Income Benefit.
- **No maturity, surrender, loan, paid-up or death benefit.**

### Policy terms: maturity, surrender, loan and revival

- **Maturity:** not applicable; no maturity benefit.
- **Surrender:** not applicable; no surrender value.
- **Loan:** not available.
- **Paid-up:** not applicable; the policy does not acquire a paid-up value.
- **Revival:** within 5 consecutive complete years from the first unpaid premium and before maturity, on payment of arrears with interest and satisfactory continued insurability. Revival interest is 9.5% p.a. compounding half-yearly for the 12 months from 1 May 2026 to 30 April 2027; LIC resets it annually. The 180-day waiting period and exclusions apply again on revival.
- **Free look:** 30 days from receipt of the policy document. On cancellation, premium is refunded after deducting proportionate risk premium (not applicable during the waiting period) and stamp duty.
- **Grace period:** 30 days for yearly and half-yearly premiums.
- **Migration and portability:** not applicable.
- **Change in sum insured:** not applicable.
- **Moratorium period:** not applicable.

## Charges and optional benefits

The plan has no rider options, no single-premium or top-up facility, and no published policy charges beyond the risk premium. The only published price adjustments are the mode factor (half-yearly × 0.5090) and the online-sale rebate (7.5% for terms 10-14 years, 10% for a 15-year term). Statutory taxes are extra.

## Waiting periods, exclusions and conditions

### Waiting period

A **180-day** waiting period applies from the date of issue, or from the date of revival if later, to the first diagnosis of any stage of cancer. If any stage of cancer is diagnosed during the waiting period, nothing is payable and the policy terminates. The free-look refund does not deduct a proportionate risk premium during the waiting period.

### Survival period

No benefit is payable if the life assured dies within **7 days** from the date of diagnosis of an Early Stage or Major Stage Cancer. The 7-day period includes the date of diagnosis.

### General exclusions

No benefit is payable for a condition arising directly or indirectly from:

- A pre-existing cancer, pre-cancerous condition or related condition that was diagnosed, medically advised or treated within 36 months before issue or revival. On revival, an Early Stage condition already claimed is not treated as pre-existing for the revived cover.
- Alcohol or drug use, except under the direction of a registered medical practitioner.
- Nuclear contamination, radioactive or hazardous nuclear fuel materials, or property contaminated by them.

The policy-document conditions on disclosure, misrepresentation, fraud and Section 45 of the Insurance Act also apply. All pre-existing diseases and conditions must be disclosed; non-disclosure can lead to claim rejection.

## Tax treatment

The CIS and brochure do not state income-tax deductions or exemptions for premiums or benefits. Statutory taxes, if any, are payable on premiums at the prevailing rate and are collected over and above the premium. Confirm the current treatment with a tax adviser before relying on it.

## Suitability and decision notes

**Best suited to:** people who want a fixed, tax-efficient-in-their-own-right cancer payout that is independent of hospital bills, value a lump sum plus a 10-year monthly income after a major-stage diagnosis, and can commit to a large minimum sum assured. It works well alongside an indemnity health policy, not as a replacement for one.

**Poor fit for:** buyers wanting all-round hospitalisation cover, anyone who cannot meet the ₹15-35 lakh minimum sum assured, people who need surrender or maturity value, and those who may need cover for a pre-existing or precursor condition within 36 months.

**Key trade-offs:** the plan covers cancer only and has a high minimum sum assured; the 180-day waiting period and 7-day survival condition delay or defeat a claim; the Early Stage benefit is paid once; and a Major Stage payment ends the policy, although the income benefit continues for 10 years. There is no death, maturity or surrender benefit.

## Calculation inputs

| Input | Required | Notes |
|---|---|---|
| Age | Yes | 18-65; sets the minimum sum assured and rate |
| Sex | Yes | Male/female rates differ materially |
| Policy term | Yes | 10-15 years; 15-year term unavailable at 65 |
| Benefit option | Yes | Option I level or Option II increasing |
| Basic Sum Assured | Yes | ₹1 lakh multiples, within age-band minimum and ₹50 lakh cap |
| Mode | Yes | Yearly or half-yearly |
| Online purchase | For rebate | 7.5% (term 10-14) or 10% (term 15) |
| Diagnosis date and stage | For claim projection | Determines Early/Major benefit and waiting-period eligibility |

Core formulas:

```text
Applicable SA (Option I)  = Basic Sum Assured
Applicable SA (Option II) = BSA × (1 + 0.10 × min(policy_year − 1, 5))
Early Stage lump sum      = 0.25 × Applicable SA
Major Stage lump sum      = 1.00 × Applicable SA
Monthly income benefit    = 0.01 × Applicable SA × 120 months
Maximum total benefit     = 2.45 × Applicable SA (excluding premium waiver)
Half-yearly premium       = yearly premium × 0.5090
Online rebate             = yearly premium × 0.075 (term 10-14)
                            or yearly premium × 0.10 (term 15)
```

## Source documents

- [Customer Information Sheet (CIS)](https://licindia.in/documents/20121/1886644/CIS_+LIC%27s+New+Cancer+Cover.pdf/83051434-19dd-74a8-d653-9bcaff96e93a?t=1793350524712)
- [Sales Brochure, 14-10-2026](https://licindia.in/documents/20121/1886644/LIC_+New+Cancer+Cover_Sales+Brochure_Eng_14102026.pdf/f0c42754-2596-7aa7-1658-09b863f5a7ca?t=1791956661554)
- [Policy Document](https://licindia.in/documents/20121/1886644/Policy+Document_LIC%27s+New+Cancer+Cover.pdf/7c874a20-f633-2ce8-24e8-c3b4cf4db007?t=1793350525397)
- [Official product page](https://licindia.in/web/guest/lic-s-new-cancer-cover)

*Data extracted from LIC's official documents on 2026-11-04. Verify current terms and premiums with LIC before purchase; policy documents prevail over this summary.*
