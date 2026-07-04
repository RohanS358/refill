# Typography

## Typeface

**Plus Jakarta Sans** (variable, wght 200–800) — the only typeface on the site.
Loaded via `next/font/local` in `app/fonts.ts` from
`public/fonts/PlusJakartaSans-VariableFont_wght.ttf`, exposed as `--font-sans`,
`display: swap`, preloaded. No Google Fonts request, no Outfit, no serif.

One family forces hierarchy to come from **weight, size, case, and tracking** — which
is exactly the Swiss discipline the brand needs.

## Scale (role-based, fluid)

| Role | Class recipe | Size | Weight | Tracking | Leading |
|---|---|---|---|---|---|
| Display XL (hero) | `text-display-xl` | clamp(3.5rem, 10vw, 9rem) | 800 | −0.045em | 0.92 |
| Display (section H2) | `text-display` | clamp(2.25rem, 5vw, 4.5rem) | 700 | −0.035em | 1.02 |
| Title (H3 / card) | `text-title` | clamp(1.35rem, 2vw, 1.75rem) | 600 | −0.02em | 1.2 |
| Lead (intro para) | `text-lead` | clamp(1.15rem, 1.6vw, 1.5rem) | 500 | −0.01em | 1.5 |
| Body | default | 1rem–1.0625rem | 400 | 0 | 1.7 |
| Eyebrow / label | `text-eyebrow` | 0.6875rem | 600 | +0.24em, uppercase | 1 |
| Data / figures | `text-data` | 0.8125rem | 500 | +0.02em, tabular-nums | 1.4 |

These are defined once as utilities in `app/globals.css` (`@utility`), never re-derived
inline. Pages may only use the roles above.

## Rules

- Display type is always ink (or paper on dark). Never green — green is for accents,
  underlines, indices, and interactive color.
- Max measure for body text: 65ch (`max-w-prose` or `max-w-2xl`).
- Numbers in stats/tables always `tabular-nums`.
- Uppercase only at eyebrow/label size. Never uppercase a headline.
- Weight 200–300 is banned below 2rem (legibility on paper background).
- Hierarchy check: any viewport screenshot should show at most 3 type roles.
