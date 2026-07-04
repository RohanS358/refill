# Spacing System

Tailwind's 4px base scale is the raw material; these are the *roles* we allow.

## Section rhythm

| Role | Value | Class |
|---|---|---|
| Section padding (vertical) | 96px mobile → 160px desktop | `py-24 md:py-32 lg:py-40` |
| Section padding, dense (stats, tickers) | 64px → 96px | `py-16 md:py-24` |
| Page gutter (horizontal) | 20px → 48px → 80px | `px-5 md:px-12 lg:px-20` |
| Content max width | 88rem | `max-w-[88rem] mx-auto` |
| Prose max width | 65ch | `max-w-2xl` |

The `Section` primitive (`components/site/section.tsx`) encodes these; pages never
hand-roll section padding.

## Intra-section rhythm

- Eyebrow → headline: 16–24px (`mt-4 md:mt-6`)
- Headline → lead: 24–32px (`mt-6 md:mt-8`)
- Header block → content: 64–96px (`mt-16 md:mt-24`)
- Grid gaps: hairline-separated grids use `gap-px` on a `bg-border` parent
  (the gap IS the rule); open grids use `gap-8 md:gap-12`.
- List rows (expertise index, product tables): padding `py-6 md:py-8`, separated by
  `border-t border-border`, last row closed with `border-b`.

## Rules

1. Vertical space between sections comes from section padding only — no margin stacking.
2. Any spacing ≥ 48px must come from the roles above, not arbitrary values.
3. Hairline grids (`gap-px`) are the preferred way to divide dense content;
   whitespace grids are for breathing content.
4. On mobile, halve editorial drama, never remove structure: rules and indices remain.
