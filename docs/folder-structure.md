# Folder Structure

```
refill/
├── app/
│   ├── fonts.ts                  # next/font/local — Plus Jakarta Sans variable
│   ├── globals.css               # tokens (@theme), type utilities, motion CSS
│   ├── layout.tsx                # html/body, font var, metadata, JSON-LD, skip link
│   ├── page.tsx                  # home — composes sections/home/*
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── solutions/
│   │   ├── page.tsx
│   │   ├── critical-care-nutrition/page.tsx
│   │   └── medical-devices/page.tsx
│   ├── research/page.tsx
│   ├── manufacturing/page.tsx
│   ├── sports-nutrition/page.tsx
│   ├── careers/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── site/                     # Refill design system (see ui-components.md)
│   ├── sections/home/            # one file per home chapter (01–11)
│   ├── gfx/                      # scientific SVG graphics
│   ├── motion/                   # Reveal, Counter
│   ├── ui/                       # shadcn reserve library (pre-existing)
│   └── theme-provider.tsx        # pre-existing (unused; kept for future)
├── hooks/
│   ├── use-scroll-progress.ts    # rAF scroll scenes
│   ├── use-mobile.ts, use-toast.ts  # pre-existing
├── lib/
│   ├── utils.ts                  # cn()
│   ├── site.ts                   # company constants, nav, routes, contact
│   ├── products.ts               # product families + compounds
│   ├── solutions.ts              # solution areas, devices
│   └── timeline.ts               # milestones 2020 → future
├── docs/                         # this blueprint
└── public/
    ├── fonts/PlusJakartaSans-VariableFont_wght.ttf
    ├── icon.svg (+ legacy raster icons)
    └── images/                   # legacy v0 placeholder photography (unused —
                                  #   the brand is photography-free; safe to delete
                                  #   once the repo has an initial commit)
```

## Conventions

- Kebab-case filenames; named exports; one component per file for sections/site.
- Path alias `@/*` (tsconfig).
- Data in `lib/`, presentation in `components/`, composition in `app/`.
- Legacy note: the previous EVASION/MONO sections were replaced by
  `components/sections/home/` (see `decisions.md` D-002).
```
