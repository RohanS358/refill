# Future Roadmap (site)

## Near term (pre-launch)
- [ ] Replace representative product data in `lib/products.ts` with confirmed SKUs,
      doses, registration numbers (all marked `TODO(content)`).
- [ ] Real logo asset → swap into `components/site/Logo`; regenerate raster icons.
- [ ] Production domain → `metadataBase`, sitemap URLs, JSON-LD `url`.
- [ ] Contact form backend (server action → email service) — currently client-side
      validation + mailto fallback.
- [ ] `opengraph-image.tsx` generated OG cards per route.
- [ ] Nepali (ne) locale evaluation.

## Mid term
- [ ] Products CMS or MDX collection (per-SKU detail pages with `Product` JSON-LD).
- [ ] News/insights section (clinical education content — strongest SEO lever).
- [ ] Careers: applications via form + JobPosting schema when roles are real.
- [ ] Distributor/partner portal entry point.
- [ ] Re-enable `next/image` optimization if photography enters the brand
      (facility renders, team) — see decisions.md D-007.

## Long term
- [ ] Sports nutrition sub-brand launch: `/sports-nutrition` grows into its own
      Pulse-accented consumer area (the color system already reserves this).
- [ ] Manufacturing facility live pages: progress log, quality certifications
      (ISO/GMP) once obtained — certification marks get a dedicated trust band.
- [ ] Clinical resources library for healthcare professionals (gated PDFs).

## Engineering hygiene
- [ ] Remove `typescript.ignoreBuildErrors` from next.config.mjs (we build clean;
      flag kept only to match v0 baseline — flip when CI exists).
- [ ] Delete legacy `public/images/*` v0 placeholders after initial commit.
- [ ] Add Playwright smoke tests (nav, reveals disabled under reduced motion, form).
