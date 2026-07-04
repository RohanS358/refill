# Architectural & Design Decisions

Format: ID — decision — why — consequences.

## D-001 · Evolve the MONO/EVASION ecosystem, don't restart
The repo shipped a v0 monochrome architecture site with a strong editorial skeleton:
zero radius, scroll-driven sticky scenes, word-blur reveals, oversized display type,
floating header. We keep the *skeleton* (sharp edges, scroll choreography patterns,
hairline discipline) and replace the *identity* (monochrome→paper/ink/green,
photography→drawn science, Inter→Plus Jakarta Sans). This satisfies "same design
ecosystem, its own product".

## D-002 · Replace EVASION sections instead of mutating them
`components/sections/*.tsx` were brand-specific (architecture imagery, MONO copy).
New home sections live in `components/sections/home/`; old files are removed rather
than left as dead code. Their interaction patterns were ported: philosophy word-blur
→ Impact manifesto; scroll-progress hero → molecular hero; sticky scenes → solutions.

## D-003 · Photography-free visual system
No brand photography exists, and stock would violate the quality bar. All imagery is
bespoke inline SVG (`components/gfx/`). Consequences: near-zero image weight, perfect
theming via currentColor, and a distinctive scientific identity. Photography can be
reintroduced later without breaking the system (D-007).

## D-004 · RSC-first with leaf client islands
Next 16 App Router; pages and layout are server components. Only stateful leaves are
`"use client"`. Consequence: small hydration surface, but scroll-scenes must be
self-contained client components receiving serializable props.

## D-005 · No animation library
Existing code used raw rAF/scroll listeners successfully. We standardize that:
IntersectionObserver reveals + CSS keyframes + two rAF scroll scenes. Framer Motion
(~30KB+) rejected for bundle cost and because our motion vocabulary is small and CSS-
expressible. Revisit only if a page needs orchestrated exit animations.

## D-006 · Light-first, no theme toggle
Paper IS the brand (lab-notebook metaphor). A `.dark` variable block exists for
completeness, but no toggle ships; dark surfaces are *chapters*, an editorial device,
not a preference. Consequence: `next-themes`/theme-provider stays unused.

## D-007 · Keep `images.unoptimized: true` for now
The site ships zero raster content images, so the optimizer buys nothing. Flag stays
(v0 baseline, also permits static export). Flip when photography lands.

## D-008 · Plus Jakarta Sans as the sole typeface via next/font/local
Client mandate; variable file already in repo (moved to `public/fonts/`). Single-font
discipline pushes hierarchy into weight/size/tracking (Swiss). `--font-sans` feeds
Tailwind; JetBrains Mono reference removed — data styling uses Jakarta + tabular-nums.

## D-009 · Pulse Lime quarantine
The sports-nutrition accent (`#D7F94E`) may only appear on Deep Ink surfaces inside
sports contexts. Enforced socially via this doc + `color-system.md`. Why: it encodes
"the future" in color; letting it leak would dilute the clinical palette's trust.

## D-010 · Zero-radius retained
`--radius: 0` inherited from the ecosystem and kept: sharp edges photograph the brand
as precise/technical, differentiate from rounded consumer-wellness sites, and pair
with hairline rules. shadcn components inherit it automatically.
