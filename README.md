# EasyInsure

A searchable, offline-friendly catalogue of **29 LIC plans**, built from LIC's official Customer Information Sheets, sales brochures and policy documents. It combines a fast search UI with a structured markdown knowledge base that can drive premium calculators and a plan-selection decision engine.

**Open [`index.html`](index.html) in any modern browser.** No server or build step is required — the plan data and search logic are embedded in the page. The only remote asset is the LIC logo in the header.

## What is in this repository

```
EasyInsure/
├── index.html          ← self-contained search UI and plan data
├── plans/              ← everything about the plans
│   ├── README.md       ← frontmatter schema, plan index, calculator/decision guidance
│   ├── 886/            ← one directory per plan, named by plan number
│   │   ├── index.html  ← themed plan page
│   │   └── info.md     ← source knowledge file
│   ├── 857/
│   │   ├── index.html
│   │   └── info.md
│   └── ... (29 plan directories)
├── assets/
│   ├── plan.css        ← shared plan-page theme
│   └── calculator.js   ← Phase 1 calculators
├── LICENSE
└── README.md           ← this file
```

- **`index.html`** — search 29 plans by name, plan number, UIN, category, goal, age, policy term, premium, risk type, feature or flag. Cards link to the themed plan page and, where the plan is still sold, to LIC's online purchase page.
- **`plans/<plan-number>/`** — one directory per plan: `index.html` is the themed HTML page and `info.md` is the source markdown. The route is `/plans/<plan-number>/` (for example `/plans/886/`).
- **`plans/<plan-number>/info.md`** — a dedicated markdown file per plan. YAML frontmatter is machine-readable; the body documents eligibility, premiums, benefits, charges, exclusions, surrender/loan/revival rules, tax notes, decision tags and calculation formulas.
- **`plans/README.md`** — schema reference, full plan index, and guidance for using the records in premium/outcome calculations and the decision engine.

### Routes

- `/` or `index.html` — the search page.
- `/plans/<plan-number>/` — the themed plan page, for example `/plans/886/`. On a static server this resolves to `plans/<plan-number>/index.html`.
- When opened from `file://`, the page links automatically fall back to `plans/<plan-number>/index.html` so the site still works without a server.

### Coverage at a glance

| Category | Plans |
|---|---:|
| Term | 6 |
| Endowment | 7 |
| WholeLife | 2 |
| Micro | 2 |
| Health | 2 |
| Annuity | 5 |
| ULIP | 5 |
| **Total** | **29** (28 active, 1 withdrawn) |

## Search examples

The search box understands plain keywords plus a few structured filters. Every query is an **AND** of the recognized filters; unrecognized words are ignored and reported in a small note.

| Try this | What it filters |
|---|---|
| `term plan age 30` | All six pure-protection term plans that accept a 30-year-old (859, 876, 878, 887, 894, 954) |
| `retirement income` | Nine retirement-oriented plans, including annuities and pension ULIPs |
| `health cover family` | LIC's Health Shield (907), the family hospital-cash/surgical plan |
| `savings plan with loan` | Plans tagged with the savings goal that offer a policy loan |
| `guaranteed returns 15 years` | Guaranteed savings plans whose policy term includes 15 years |
| `ULIP under 50000` | Market-linked plans with a published minimum premium of ₹50,000 or less (752, 867, 873, 886) |
| `single premium under 2 lakh` | Single-premium plans whose published minimum is ₹2 lakh or less |
| `child education` | LIC's Amritbaal (774), the child endowment plan |
| `joint life couple` | Joint-life plans covering a couple/spouse (888, 889, 758, 862, 892) |
| `women` | LIC's Bima Lakshmi (881), the women-focused plan |
| `immediate annuity` | Immediate annuities (857, 862, 879) |
| `deferred annuity` | Deferred annuities (758, 892) |
| `cancer cover` | LIC's New Cancer Cover (908) |
| `micro insurance` | Micro-insurance plans (751, 880) |
| `withdrawn` | Plans marked withdrawn (currently Bima Jyoti, 760) |
| `policy term 20` | Every plan whose policy term includes 20 years |
| `premium under 50000` | Plans with a published minimum premium at or below ₹50,000 |
| `age 60` | Plans whose entry-age range includes 60 |
| `no loan` | Plans without a policy loan |
| `surrender` / `no surrender` | Plans with / without a surrender value |

These examples are also available as clickable chips under the search box. You can link directly to a search with the `q` parameter, for example `index.html?q=term%20plan%20age%2030`. Keep `index.html` next to the `plans/` directory so the "Plan details" links resolve.

### Search syntax details

- **Age:** `age 30`, `aged 30`, `30 years old`
- **Policy term:** `policy term 20`, `term 20`, `20 years`
- **Budget:** `under 50000`, `below 1 lakh`, `up to 2 crore`. Budget matching uses the published minimum premium/purchase price. Plans with no published minimum are excluded from a budget search and the UI says how many were omitted.
- **Single premium:** `single premium`, `lump sum`, `one-time premium`; combine with a budget, e.g. `single premium under 2 lakh`.
- **Category:** `term plan`, `endowment`, `whole life`, `micro insurance`, `health plan`, `annuity`, `ULIP`.
- **Goal:** `protection`, `savings`, `retirement`, `pension`, `income`, `health`.
- **Features:** `loan`, `no loan`, `surrender`, `no surrender`, `riders`, `guaranteed`, `participating`.
- **Product traits:** `joint life`, `couple`, `child`, `education`, `women`, `cancer`, `hospital cash`, `immediate annuity`, `deferred annuity`.
- **Status:** `withdrawn`, `discontinued`.

## Calculators (Phase 1 + Phase 2)

Every plan page now has at least one **illustrative calculator**. These are estimates, not quotations.

| Calculator | Plans | What it does |
|---|---|---|
| **ULIP projection** | 749, 752, 867, 873, 886 | Projects fund value, maturity/death benefit and surrender value from premium, term/PPT, channel and an assumed gross return, using published allocation, mortality, administration, FMC, guaranteed-addition and discontinuance charges. |
| **Published premium lookup** | 751, 760, 770, 771, 774, 859, 876, 878, 880, 881, 883, 887, 888, 889, 894, 907, 908, 912, 954 | Looks up the published sample premium for the ages, terms, payment types and options printed in LIC's brochure, scales it for the chosen sum assured/IDB, and interpolates **between published ages** when needed. Interpolated results are explicitly labelled. |
| **GSV estimate** | 751, 758, 760, 771, 862, 879, 880, 883, 888, 892 | Computes the Guaranteed Surrender Value (GSV) from LIC's published factor tables or formulas. Actual payout is `max(GSV, SSV)`; SSV is not computable from public data. |
| **Annuity illustration** | 857 | Scales the published sample annual annuity for the selected annuity option and purchase price. The published illustration is at age 60, yearly mode; actual rates vary. |

The ULIP model is annual rather than monthly; in checks against LIC's published sample illustrations (749, 752, 867, 873) it was within roughly 1% of the stated fund values. Premium lookup shows the base sample premium only — mode/high-BSA rebates, taxes, underwriting loadings and rider premiums are excluded. Interpolation is a convenience, not an actuarial rate. All calculators link to LIC's official quote flow for an exact figure.

Limitations: SSV is not computed anywhere. GSV calculators cover only plans whose complete factor tables could be extracted; plans 770, 774, 881, 889 and 912 currently have premium lookups but no GSV tab. Plan 859 and 774 use the published sample tables only, and 857's annuity illustration is a single published age/option sample.

## Plan data and provenance

All plan facts were extracted from documents published on [licindia.in](https://licindia.in):

- Customer Information Sheets (CIS)
- Sales brochures
- Policy documents
- Official product pages

**Snapshot date:** 4 November 2026.

Key caveats:

- **Plan 760 (Bima Jyoti) is withdrawn** per LIC's withdrawn-plans listing. It is included for reference and is marked `Withdrawn`; its file is distinct from the successor New Bima Jyoti (Plan 890), which is not part of this catalogue.
- **Premiums and annuity rates are often illustrative.** LIC does not publish complete rate tables for every product. Where only sample tables exist, the plan file says `rate_table_available: false`; exact quotes must come from LIC's calculator or a branch.
- **Bonuses and ULIP returns are not guaranteed** unless a document explicitly says so. Participating-plan bonuses and fund NAVs depend on future experience/markets.
- **Tax treatment is mostly not stated** in the CIS/brochures. Do not assume Section 80C or 10(10D) eligibility; verify current tax law.
- **Policy documents prevail.** These files are a research aid, not financial, tax or legal advice. Verify current terms, charges and availability with LIC before purchase.

## Using the data

The markdown frontmatter is designed to be parsed with any YAML library. See [`plans/README.md`](plans/README.md) for:

- the complete frontmatter schema and category/tag definitions;
- the full 29-plan index with entry ages, terms, PPTs and primary goals;
- a suggested filtering/ranking flow for the decision engine;
- guidance on premium and maturity/death-benefit calculations, including which fields are exact versus illustrative.

The search page in `index.html` embeds a snapshot of that frontmatter, and the `plans/<plan-number>/index.html` pages are rendered from the markdown bodies. If you edit `plans/<plan-number>/info.md`, regenerate both the embedded search data and the affected plan page so everything stays in sync.

## Deploying to GitHub Pages

The site is ready to publish as a static GitHub Pages site. All internal links are relative, so it works under the project-site subpath (`/EasyInsure/`). Plan pages resolve as `https://<user>.github.io/EasyInsure/plans/<plan-number>/` (for example `/plans/886/`).

1. Commit and push the repository.
2. In GitHub: **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select the default branch and the **root** folder.
3. Wait for the Pages build to finish.

The included `.nojekyll` file disables Jekyll processing so the plan directories and the raw `plans/<plan-number>/info.md` files are served unchanged.

## License

See [LICENSE](LICENSE).
