# Animation Guidelines

## Philosophy

Motion is **evidence of quality, not entertainment**. Every animation must do one of:
reveal structure, establish reading order, or acknowledge input. If removing an
animation loses no meaning, remove it. (`design-principles.md` #5)

## The system

One easing family, three durations, five verbs.

- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint feel) for entrances;
  plain `ease` for hovers. Nothing bounces. Nothing overshoots.
- **Durations**: 200ms (hover/press) · 700ms (reveals) · 1200ms (SVG line draws).
- **Verbs**:
  1. **Reveal** — opacity 0→1 + translateY 24px→0, staggered ≤ 5 items × 90ms.
     Implemented by `<Reveal>` (IntersectionObserver, `once: true`, threshold 0.2).
  2. **Draw** — SVG `stroke-dashoffset` to 0 when in view (pathways, helix, blueprint).
  3. **Count** — number counters tween over 1.2s when in view, `tabular-nums` so
     layout never shifts.
  4. **Scroll-scene** — scroll-progress-driven transforms for the hero and the impact
     manifesto (word-by-word blur/opacity), evolved from the ecosystem's philosophy
     section. Max two scroll-scenes per page; rAF-throttled; passive listeners.
  5. **Hover** — color/underline/translate ≤ 4px; the expertise index rows expand
     via CSS grid-template-rows, no JS.

## Hard rules

- `prefers-reduced-motion: reduce` disables all five verbs globally (CSS overrides in
  `globals.css`): content appears in final state; scroll-scenes render static.
- Animate only `transform`, `opacity`, `stroke-dashoffset`, `color`/`background-color`.
  Never `top/left/width/height/filter` in continuous animation (the manifesto blur is
  scroll-sampled, not time-animated, and is skipped under reduced motion).
- Nothing animates infinitely except the marquee ticker (30s linear, pausable, and
  reduced-motion-disabled).
- Reveals fire once; scrolling back up never replays entrances.
- No layout shift: reserved space for counters, `once` reveals, no entrance on
  above-the-fold LCP text beyond the hero's initial choreography.
