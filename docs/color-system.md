# Color System

## Palette

| Token | Hex | Name | Use |
|---|---|---|---|
| `--background` | `#F7F6F2` | Paper | page background |
| `--card` / surface | `#FFFFFF` | Surface | cards, inputs — lifted one step from paper |
| `--foreground` | `#122019` | Ink | all primary text; a green-cast near-black |
| `--muted-foreground` | `#5C685F` | Moss | secondary text (4.6:1 on Paper) |
| `--muted` | `#ECEAE2` | Paper-2 | subtle fills, table stripes |
| `--border` | `#E1DFD6` | Hairline | 1px rules everywhere |
| `--primary` | `#0E5F49` | Refill Green | the brand accent: links, indices, CTAs, strokes |
| `--primary-foreground` | `#F7F6F2` | — | text on green |
| `--ink-deep` | `#0B1712` | Deep Ink | dark chapter sections, footer |
| `--line-dark` | `#233830` | Hairline-dark | rules on dark sections |
| `--paper-dim` | `#A8B4AA` | — | secondary text on dark (4.5:1+ on Deep Ink) |
| `--pulse` | `#D7F94E` | Pulse Lime | sports-nutrition context ONLY |
| `--destructive` | `#B3261E` | — | forms/errors only |

Defined as raw values in `:root` in `app/globals.css` and mapped into Tailwind v4 via
`@theme inline` (`--color-*`). Components use semantic classes (`bg-background`,
`text-primary`, `border-border`, `bg-ink-deep`, `text-pulse`), never hex.

## Why this palette

- **Paper + Ink** kills the "blue-and-white Bootstrap hospital" instantly while staying
  clinical. Warmth = care; ink = rigor.
- **One green** reads as pharma/nutrition heritage without being a leafy wellness
  cliché — it is deep, desaturated, and used sparingly (≤10% of any viewport).
- **Pulse Lime** is deliberately out-of-system: it belongs to the *future* brand
  (sports nutrition) and is quarantined to that context, always on Deep Ink, never on
  Paper. This makes the roadmap legible in color alone.

## Ratios

A typical clinical page viewport: ~85% Paper, ~10% Ink (type + rules), ~5% Green.
Dark chapters invert: Deep Ink field, Paper type, Green→Pulse accents per context.

## Contrast (WCAG AA verified)

- Ink on Paper 15.6:1 · Moss on Paper 4.6:1 · Green on Paper 6.0:1 (links/labels ok)
- Paper on Green 5.7:1 (CTA text) · Paper on Deep Ink 15.9:1 · Pulse on Deep Ink 13.5:1
- Never: Green text on Muted fills below 18px; Pulse on Paper (2.0:1 — banned).

## Dark mode

The site is light-first by design (paper is the brand). The `.dark` block exists and
maps Paper↔Deep Ink for OS-level forced dark contexts, but no toggle is shipped.
See `decisions.md` (D-006).
