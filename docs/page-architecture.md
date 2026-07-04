# Page Architecture

## Route map

| Route | Purpose | Signature moment |
|---|---|---|
| `/` | the brand statement | scroll-choreographed molecular hero; 11 chapters |
| `/about` | who, vision, mission, values | vision/mission split ruled like a journal spread |
| `/products` | full catalogue by family | hairline product matrix with compound data |
| `/solutions` | index of solution areas | two-door split (nutrition / devices) |
| `/solutions/critical-care-nutrition` | flagship domain | metabolic pathway diagram, protocol steps |
| `/solutions/medical-devices` | devices & healthcare apps | device capability grid |
| `/research` | evidence philosophy | dark chapter, helix, principles 01–04 |
| `/manufacturing` | the facility vision | blueprint linework + impact ledger |
| `/sports-nutrition` | coming-soon future line | Deep Ink + Pulse Lime, roadmap, notify CTA |
| `/careers` | hiring | open-roles index rows + working principles |
| `/contact` | reach us | split: form (client island) / coordinates |
| `not-found` | 404 | "compound not found" molecule joke, in-system |

## Home page chapters (in order)

01 Hero — "Clinical nutrition, engineered." + molecule field + term ticker
02 Scientific Impact — scroll-blur manifesto (evolved from ecosystem philosophy section)
03 Core Expertise — 6 indexed expandable rows
04 Featured Products — 4 family cards with molecule marks + compound tables
05 Healthcare Solutions — sticky left rail, scrolling solution panels + pathway
06 Innovation Timeline — 2020→2027+ ruled timeline, drawn line
07 Research Philosophy — dark chapter, helix draw, pull-quote
08 Future Manufacturing — blueprint + commitments ledger
09 Sports Nutrition Preview — Deep Ink + Pulse teaser
10 Company Statistics — counter grid on hairlines
11 CTA — oversized closing band → contact

Rationale: trust arc = *statement → proof → catalogue → application → trajectory →
philosophy → ambition → future → numbers → ask*.

## Shared skeleton

Every page: `Header` + `main` (PageHero or Hero + sections) + `CtaBand` (except
contact) + `Footer`. All pages are server components; metadata per route via
`export const metadata`. `app/sitemap.ts` and `app/robots.ts` cover SEO surface.
