# Iconography & Scientific Graphics

## Two tiers

### 1. Functional icons — Lucide
UI-level icons (menu, close, arrows, external link, mail, phone) come from
`lucide-react`, always: `size={16|20}`, `strokeWidth={1.5}`, `currentColor`,
`aria-hidden` with adjacent text or an `aria-label` on the control.
Never use Lucide for decoration or to "illustrate" a concept (no brain icons, no
heart-pulse clichés).

### 2. Scientific graphics — bespoke SVG (`components/gfx/`)
The brand's illustration system. Hand-authored, single stroke weight (1–1.5px),
`currentColor` driven so they inherit ink/green/pulse from context, all `aria-hidden`.

| Component | Motif | Used in |
|---|---|---|
| `MoleculeField` | node-bond constellation | hero background |
| `Molecule` | small node-bond mark per product family | product cards |
| `Helix` | double-helix path pair, scroll-drawn | research philosophy |
| `DotLattice` | dot-grid field | section backdrops, dark chapters |
| `HexRing` | hexagon ring (chemistry) | favicon, stats, about |
| `Pathway` | dashed line with junction nodes, draws on view | solutions, timeline |
| `Blueprint` | facility floor-plan linework with dimension ticks | manufacturing |

Rules:
- One stroke weight per graphic; no fills except node dots (≤3px radius).
- Graphics never carry information alone — they decorate content that is text.
- Animate only via `stroke-dashoffset`, `opacity`, `transform` (GPU-safe).
- New motifs must be approved against the "lab notebook" metaphor (`visual-language.md`).

## Favicon

`public/icon.svg` — hexagonal molecule with an R-node accent, ink-on-transparent,
green node. Raster fallbacks (`icon-light/dark-32x32.png`, `apple-icon.png`) are
legacy v0 assets; regenerate when a real logo lands (`future-roadmap.md`).
