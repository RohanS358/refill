# Component Map

Which route uses what. (site/* = design system, gfx/* = graphics, motion/* = animation)

## Global (all routes)
`site/Header` · `site/Footer` · `site/Logo` · `site/CtaBand` (all except /contact)

## `/` home
| Chapter | Component | Uses |
|---|---|---|
| 01 Hero | `sections/home/hero` | gfx/MoleculeField, site/Ticker, motion/Reveal |
| 02 Impact | `sections/home/impact` | hooks/use-scroll-progress (word reveal) |
| 03 Expertise | `sections/home/expertise` | site/SectionHeading, site/IndexRow |
| 04 Products | `sections/home/featured-products` | site/ProductCard, gfx/Molecule |
| 05 Solutions | `sections/home/solutions` | gfx/Pathway, sticky rail |
| 06 Timeline | `sections/home/timeline` | lib/timeline, draw line |
| 07 Research | `sections/home/research` | gfx/Helix (scroll draw), dark Section |
| 08 Manufacturing | `sections/home/manufacturing` | gfx/Blueprint |
| 09 Sports preview | `sections/home/sports-preview` | pulse tokens, gfx/DotLattice |
| 10 Stats | `sections/home/stats` | site/StatBlock, motion/Counter |
| 11 CTA | `site/CtaBand` | — |

## Sub-pages
- `/about` — PageHero, SectionHeading, gfx/HexRing, values hairline grid, StatBlock
- `/products` — PageHero, ProductCard grid + full compound matrix (hairline table)
- `/solutions` — PageHero, two-door split cards, Pathway
- `/solutions/critical-care-nutrition` — PageHero, Pathway (protocol steps), IndexRow
- `/solutions/medical-devices` — PageHero, capability hairline grid
- `/research` — PageHero (dark), Helix, principle blocks 01–04
- `/manufacturing` — PageHero, Blueprint, commitments ledger, StatBlock
- `/sports-nutrition` — dark PageHero variant + Pulse, DotLattice, roadmap rows
- `/careers` — PageHero, IndexRow (roles), principles grid
- `/contact` — PageHero, ContactForm (client island, ui/input+textarea+label), coordinates panel
- `not-found` — gfx/Molecule, oversized 404

## Client islands (everything else is RSC)
Header, Ticker, Reveal, Counter, StatBlock, ContactForm, hero scroll scene,
impact scroll scene, Helix draw wrapper.
