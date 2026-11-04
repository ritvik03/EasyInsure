# LIC Plans Knowledge Base

One structured markdown file per LIC plan, built from LIC's official Customer Information Sheets (CIS), sales brochures and policy documents. The files are intended as the data layer for premium calculations, benefit projections and a plan-selection decision engine.

**Data retrieved:** 2026-11-04
**Source:** [licindia.in](https://licindia.in) official product pages and linked PDFs
**Currency:** Indian rupees (₹). Premiums are annualized unless a modal figure is explicitly labelled.

> This knowledge base is a research aid, not financial or tax advice. LIC's policy document prevails over every summary here. Premiums, bonus rates, charges, tax treatment and product availability change; verify with LIC before relying on any figure.

## Files

```
plans/
├── README.md                      ← this file
├── 886-protection-plus.md         ← one file per plan
├── 749-nivesh-plus.md
└── ...
```

File naming: `<plan-number>-<kebab-case-plan-name>.md`. Plan numbers match the cards in `lic_plans.html`.

## Frontmatter schema

Every plan file starts with YAML frontmatter. Parsing it gives a normalized record for the decision engine; the markdown body gives the human-readable detail and source links.

| Key | Type | Meaning |
|---|---|---|
| `plan_number` | int | LIC plan number (e.g. 886) |
| `plan_name` | string | Official product name |
| `uin` | string | IRDAI Unique Identification Number |
| `insurer` | string | Always "Life Insurance Corporation of India" |
| `category` | enum | `Term`, `Endowment`, `WholeLife`, `Micro`, `Health`, `Annuity`, `ULIP` |
| `product_type` | string | LIC's own product classification |
| `status` | enum | `Active` or `Withdrawn` |
| `launch_date` / `withdrawal_date` | string/null | Where stated in official documents |
| `official_page` | URL | LIC product page |
| `last_verified` | date | Date the record was checked |
| `eligibility.*` | object | Entry age, maturity age, policy terms, PPTs, sum-assured limits, premium minimums |
| `eligibility.policy_term_kind` | enum | `range`, `fixed`, `whole_life`, `life_annuity`, `deferred_annuity` |
| `eligibility.policy_term_min_years` / `policy_term_max_years` | number/null | Machine-readable policy-term bounds; null for whole-life and annuity products |
| `eligibility.ppt_min_years` / `ppt_max_years` | number/null | Machine-readable premium-paying-term bounds; null where PPT is not applicable |
| `premium.*` | object | Modes, limits, rate-table availability, illustrative premiums/annuity rates, premium formula |
| `benefits.*` | object | Death, maturity, survival and guaranteed benefits; riders; optional benefits |
| `policy_features.*` | object | Loan, surrender, paid-up, revival, grace, free look, partial withdrawal, exclusions, waiting period |
| `tax.*` | object | What the official documents state about tax (often nothing) |
| `decision.*` | object | Normalized tags: goals, risk profile, liquidity, horizon, suitable/not suitable, trade-offs, flags |
| `calculation_inputs.*` | object | Required inputs and formulas for calculators, plus assumptions |
| `sources` | list | CIS, brochure, policy document and product-page URLs |

For filtering, prefer `policy_term_min_years`/`policy_term_max_years` and `ppt_min_years`/`ppt_max_years`. The original `policy_terms_years` and `premium_paying_terms_years` fields preserve LIC's exact presentation and may be either a list or a descriptive string (for example, regular/lifetime options or product-specific PPT rules).

### Decision tags

- `decision.primary_goals`: subset of `protection`, `savings`, `retirement`, `health`, `liquidity`, `market_linked_growth`, `tax_planning`.
- `decision.risk_profile`: free text, e.g. `Guaranteed`, `Participating`, `Market-linked`.
- `decision.liquidity`: `Low`, `Medium`, `High`.
- `decision.time_horizon`: `Short`, `Medium`, `Long`, `Whole life`.
- `decision.decision_flags`: kebab-case flags such as `ulip`, `market_risk`, `5y_lock_in`, `life_cover`, `joint_life`, `child_plan`, `withdrawn`, `health_waiting_period`.

## Using this for premium calculation

1. Start with `eligibility` to reject plans the person cannot buy (age, term, minimum premium).
2. Use `premium.illustrative_premiums` for published examples. If `rate_table_available` is `false`, the exact premium must come from LIC's official calculator or a branch quote — do not interpolate a rate table.
3. Use `calculation_inputs.formulas` for death/maturity/survival outcomes. For ULIPs, project the unit fund with an explicit gross-return assumption and subtract the charges documented in the file.
4. For participating plans, treat bonuses as illustrative, not guaranteed; state the assumption in the calculator.
5. For annuities, use the published annuity-rate tables where present and the purchase price/annuity option combination selected by the user.

## Using this for the decision engine

A simple ranking flow:

1. **Hard filters:** age, minimum premium/budget, policy term, status (`Withdrawn` plans excluded by default), and any product-specific eligibility (child/parent age, joint life, women-only where stated).
2. **Goal match:** intersect the person's goals with `decision.primary_goals`.
3. **Risk and horizon:** match `risk_profile`, `time_horizon` and `liquidity` to the person's constraints.
4. **Benefit comparison:** compare `benefits.death_benefit`, `maturity_benefit`, `survival_benefits`, riders and charges within the same category.
5. **Explain:** surface `decision.suitable_for`, `not_suitable_for`, `key_tradeoffs` and `decision_flags` so the recommendation is explainable.
6. **Human check:** confirm the selected plan's current terms and quote with LIC.

The tags are deliberately normalized, but they are still editorial judgements. Keep the source links in the loop when a recommendation matters.

## Plan index

| Plan | Name | Category | Status | Entry age | Policy term | PPT | Primary goals |
|---:|---|---|---|---|---|---|---|
| 859 | [LIC's Saral Jeevan Bima](859-saral-jeevan-bima.md) | Term | Active | 18–65 | 5–40y | 5–40y | protection |
| 876 | [LIC's Digi Term](876-digi-term.md) | Term | Active | 18–45 | 15–40y | 10–40y | protection |
| 878 | [LIC's Digi Credit Life](878-digi-credit-life.md) | Term | Active | 18–45 | 5–30y | 5–15y | protection |
| 887 | [LIC's Bima Kavach](887-bima-kavach.md) | Term | Active | 18–65 | 10–82y | 5–82y | protection |
| 894 | [LIC's Jeevan Raksha](894-jeevan-raksha.md) | Term | Active | 18–45 | 15–42y | 10–42y | protection |
| 954 | [LIC's New Tech-Term](954-new-tech-term.md) | Term | Active | 18–65 | 10–40y | 5–40y | protection |
| 760 | [LIC's Bima Jyoti](760-bima-jyoti.md) | Endowment | Withdrawn | 0.08–60 | 15–20y | 10–15y | savings, protection |
| 770 | [LIC's Bima Platinum](770-bima-platinum.md) | Endowment | Active | 0–55 | 17–40y | 7–18y | savings, protection, retirement |
| 774 | [LIC's Amritbaal](774-amritbaal.md) | Endowment | Active | 0–13 | 5–25y | 5–7y | savings, protection |
| 881 | [LIC's Bima Lakshmi](881-bima-lakshmi.md) | Endowment | Active | 18–50 | 25y | 7–15y | savings, protection |
| 888 | [LIC's New Jeevan Sathi - Single Premium](888-new-jeevan-sathi-single-premium.md) | Endowment | Active | 18–60 | 10/15/20/25y | — | savings, protection |
| 889 | [LIC's New Jeevan Sathi - Limited Premium](889-new-jeevan-sathi-limited-premium.md) | Endowment | Active | 18–50 | 10/15/20/25y | 5–15y | savings, protection |
| 912 | [LIC's Nav Jeevan Shree](912-nav-jeevan-shree.md) | Endowment | Active | 0–60 | 10–20y | 6–15y | savings, protection |
| 771 | [LIC's Jeevan Utsav](771-jeevan-utsav.md) | WholeLife | Active | 0–65 | Whole life | 5–16y | savings, retirement, protection |
| 883 | [LIC's Jeevan Utsav Single Premium](883-jeevan-utsav-single-premium.md) | WholeLife | Active | 0–65 | Whole life | — | savings, retirement, protection |
| 751 | [LIC's Micro Bachat](751-micro-bachat.md) | Micro | Active | 18–55 | 10–15y | 10–15y | savings, protection |
| 880 | [LIC's Jan Suraksha](880-jan-suraksha.md) | Micro | Active | 18–55 | 12–20y | 7–15y | savings, protection |
| 907 | [LIC's Health Shield](907-health-shield.md) | Health | Active | 18–65 | 15y | 15y | health, protection |
| 908 | [LIC's New Cancer Cover](908-new-cancer-cover.md) | Health | Active | 18–65 | 10–15y | 10–15y | health, protection |
| 758 | [LIC's New Jeevan Shanti](758-new-jeevan-shanti.md) | Annuity | Active | 30–79 | Deferred annuity | — | retirement, savings |
| 857 | [LIC's Jeevan Akshay-VII](857-jeevan-akshay-vii.md) | Annuity | Active | 25–100 | Life annuity | — | retirement |
| 862 | [LIC's Saral Pension](862-saral-pension.md) | Annuity | Active | 40–80 | Life annuity | — | retirement |
| 879 | [LIC's Smart Pension](879-smart-pension.md) | Annuity | Active | 18–100 | Life annuity | — | retirement |
| 892 | [LIC's New Jeevan Dhara II](892-new-jeevan-dhara-ii.md) | Annuity | Active | 18+ | Deferred annuity | — | retirement, savings |
| 749 | [LIC's Nivesh Plus](749-nivesh-plus.md) | ULIP | Active | 0.25–70 | 10–25y | — | savings, protection, market_linked_growth |
| 752 | [LIC's SIIP](752-siip.md) | ULIP | Active | 0.08–65 | 10–25y | 10–25y | savings, protection, market_linked_growth |
| 867 | [LIC's New Pension Plus](867-new-pension-plus.md) | ULIP | Active | 25–75 | 10–42y | 10–42y | retirement, savings, market_linked_growth |
| 873 | [LIC's Index Plus](873-index-plus.md) | ULIP | Active | 0.25–60 | 10–25y | 10–25y | savings, protection, market_linked_growth |
| 886 | [LIC's Protection Plus](886-protection-plus.md) | ULIP | Active | 18–65 | 10/15/20/25y | 5–15y | savings, protection, market_linked_growth |

## Caveats

- **Availability:** LIC may withdraw or modify plans. A `Withdrawn` status means the official LIC withdrawn-plans listing includes the plan; the D2C link may still exist for servicing.
- **Premiums:** published tables are illustrative. Actual premiums depend on age, term, sum assured, mode, underwriting and any loadings.
- **Bonuses/returns:** participating and ULIP benefits are not guaranteed unless the document explicitly says so.
- **Tax:** the CIS and brochures often do not state tax treatment. Tax law changes; confirm current treatment.
- **Conflicts:** where the CIS and brochure differ, use the policy document and the latest dated document. Each plan file lists its sources and any conflict found.
