# Design Principles

Ordered. When two principles conflict, the lower number wins.

## 1. Trust before delight
A critical-care nutrition company is judged like a pharmaceutical company. Anything
that reads as gimmick (spinning 3D, parallax overload, novelty cursors) erodes trust.
Motion may be impressive only if it is also calm.

## 2. Structure is visible
The reader should *feel* the grid. Sections are numbered, ruled, and indexed like a
journal. Ambiguity in layout implies ambiguity in science.

## 3. One idea per section
Every home-page section answers exactly one question (What do you do? What do you make?
Where are you going?). If a section needs two headlines, it is two sections.

## 4. Content is real
No lorem ipsum, no fake testimonials, no invented certifications. Statistics shown are
the company's actual profile (est. 2020, 4 product families, 2 solution areas, 1
planned facility). Placeholder claims are marked in code with `// TODO(content)`.

## 5. Motion explains, never performs
Every animation must reveal structure (a pathway drawing itself), establish hierarchy
(staggered reveals), or confirm interaction (hover states). Duration ≤ 0.8s, one easing
family, full `prefers-reduced-motion` support. See `animation-guidelines.md`.

## 6. Server-first
Pages are React Server Components. Client components exist only at the leaves that
need state: header, reveals, counters, scroll-driven scenes. See `decisions.md` (D-004).

## 7. The system outlives the page
Nothing is styled ad hoc. Every value maps to a token (`color-system.md`,
`spacing-system.md`, `typography.md`). A new page must be assemblable from existing
primitives in under a day.

## 8. Accessible by construction
Semantic landmarks, focus-visible states, 4.5:1 body contrast, keyboard-reachable
everything. Decoration (SVG science) is `aria-hidden`; information is text.
