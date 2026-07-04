# Implementation Plan

## Phases

1. **Blueprint** — this `docs/` set. Defines system before pixels. ✅
2. **Foundation** — `app/fonts.ts` (Plus Jakarta Sans local variable),
   `globals.css` token rewrite (paper/ink/green + type utilities + motion CSS),
   `app/layout.tsx` (metadata, JSON-LD, skip link), brand `icon.svg`.
3. **Primitives** — `lib/` data modules; `motion/Reveal`, `motion/Counter`,
   `hooks/use-scroll-progress`; `gfx/` graphic set; `site/` system components.
4. **Shell** — Header + Footer + CtaBand.
5. **Home** — chapters 01–11, each an isolated file under `components/sections/home/`.
6. **Sub-pages** — about → products → solutions×3 → research → manufacturing →
   sports → careers → contact → 404; sitemap/robots.
7. **Polish** — reduced-motion audit, keyboard walkthrough, responsive matrix
   (360→2560), `next build` clean, Lighthouse sanity.

## Performance budget

- LCP < 1.8s (hero is text + inline SVG; single preloaded variable font; zero raster)
- CLS < 0.02 (reveals reserve space; counters tabular; fonts `swap` with metric-safe
  fallback stack)
- JS: client islands only — target < 90KB gzipped route JS on home
- Fonts: 1 file, `woff2`-preferred (ttf acceptable for now — single request, cached)

## Definition of done (per section/page)

- Composed from system primitives; zero ad-hoc hex/spacing
- Works 360→2560px; keyboard accessible; reduced-motion clean
- Server component unless it owns state
- Copy follows `content-strategy.md`; placeholder claims tagged `TODO(content)`

## Verification

`npm run build` must pass with zero TS errors (despite `ignoreBuildErrors`, we treat
TS as blocking), manual viewport sweep, axe spot checks.
