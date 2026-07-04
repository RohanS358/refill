# UI Components

## Layers

1. **`components/ui/`** — shadcn/ui primitives (pre-existing, kept as-is). Used for
   forms (input, textarea, label, button base, accordion). Most of the 50+ files are
   currently unused; they are the reserve library, not the design system.
2. **`components/site/`** — Refill's design system. All pages compose from these.
3. **`components/gfx/`** — scientific SVG graphics (see `iconography.md`).
4. **`components/motion/`** — animation primitives.
5. **`components/sections/home/`** — one file per home-page section.

## `components/site/` inventory

| Component | Type | Contract |
|---|---|---|
| `Header` | client | fixed hairline bar; transparent → paper/blur+border on scroll; full-screen indexed mobile menu; `aria-current` nav |
| `Footer` | server | Deep Ink mega-footer: giant wordmark, sitemap columns, coordinates/est. line |
| `Logo` | server | wordmark lockup; single place to swap a real logo |
| `Section` | server | `<section>` with rhythm roles (`tone: paper/dark`, `density`), id for anchors |
| `SectionHeading` | server | index number + eyebrow + display headline + optional lead; enforces the section-opening pattern |
| `Eyebrow` | server | uppercase micro-label with leading rule |
| `PageHero` | server | sub-page opener: breadcrumb eyebrow, display-xl title, lead, hairline base |
| `StatBlock` | client | `Counter` + label + unit in hairline grid cells |
| `IndexRow` | server/CSS | numbered expandable row (expertise, careers roles) |
| `ProductCard` | server | family molecule mark, name, category, key compounds table |
| `Ticker` | client | marquee of scientific terms; pause on hover; reduced-motion static |
| `CtaBand` | server | closing call-to-action band with oversized type |

## `components/motion/`

- `Reveal` — IO entrance wrapper. Props: `delay`, `as`, `className`. Fires once.
- `Counter` — tweened number, props `to`, `suffix`, `duration`.
- `useScrollProgress` (`hooks/use-scroll-progress.ts`) — rAF-throttled 0..1 progress
  of a ref'd element; powers hero + manifesto scroll-scenes.

## Rules

- Server component by default; `"use client"` only where state/observers live.
- Every component's className surface accepts `cn()` merging (`lib/utils.ts`).
- No component imports page-level data; data flows in from `lib/*.ts` via props.
- New sections must be assembled from `Section` + `SectionHeading` + primitives;
  a bespoke layout inside is fine, a bespoke *system* is not.
