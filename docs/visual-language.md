# Visual Language

## The metaphor

**A laboratory notebook typeset by a Swiss editorial designer.**

Warm paper. Ink. Hairlines. Numbered experiments. Molecular diagrams drawn in a single
line-weight. Nothing floats; everything sits on a grid and is ruled into place.

## Pillars

1. **Paper, not screens.** The base surface is warm paper (`#F7F6F2`), not pure white.
   Pure white (`#FFFFFF`) is reserved for cards/surfaces that need one step of lift —
   separation comes from hairlines, never shadows.
2. **Ink, not gray.** Text is deep green-black ink (`#122019`). Secondary text is a
   desaturated moss gray. Blue-gray corporate palettes are banned.
3. **The hairline is the system.** 1px rules (`--border`) structure every section:
   table rows, grid gutters, section boundaries, figure captions. If a layout feels
   loose, add a rule — not a card or a shadow.
4. **Science is the illustration.** No stock photography. All imagery is drawn SVG:
   molecular node-bond graphs, helix curves, dot lattices, hex rings, dashed metabolic
   pathways, blueprint linework. One stroke weight (1–1.5px), ink or green, on paper.
5. **Numbers are decoration.** Section indices (01–11), atomic masses (Ca 40.078),
   percentages (EPA 180 mg), coordinates (27.7172° N) — data is used as ornament,
   always truthful, always tabular-lined.
6. **Sharp edges.** Border radius is 0 everywhere (inherited from the design ecosystem).
   Interactive elements signal affordance through hairlines, color, and motion — not
   rounding or elevation.
7. **Dark sections are chapters.** The page is mostly paper; deep-ink (`#0B1712`)
   full-bleed sections mark chapter changes (research philosophy, sports future,
   footer). Maximum two consecutive dark sections.

## Composition rules

- Desktop grid: 12 columns, max-width 88rem, gutters expressed as hairlines where useful.
- Every section opens with the same header primitive: index number + uppercase eyebrow
  + display headline (see `ui-components.md` → `SectionHeading`).
- Asymmetry is intentional: headlines may occupy 7/12 columns with supporting data in
  the remaining 5. Centered layouts are reserved for manifesto moments.
- Edge-to-edge type is allowed for the wordmark and closing CTA only.

## Banned

Glassmorphism, neumorphism, drop shadows (except the fixed header's border-on-scroll),
generic diagonal gradients, floating rounded cards, emoji-as-icons, stock photos,
blue/white hospital clichés.
