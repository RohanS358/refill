# Responsive Guidelines

Designed desktop-first (the editorial drama lives there), engineered mobile-safe.

## Breakpoints (Tailwind defaults)

| Range | Intent |
|---|---|
| < 640 | single column; indices shrink; rules remain; type via clamp() floor |
| 640–1023 (`sm/md`) | 2-col grids; sticky rails disabled where cramped |
| 1024–1279 (`lg`) | full editorial grid, sticky scenes on |
| 1280–1535 (`xl`) | canonical design width |
| ≥ 1536 (`2xl`) | content capped at 88rem, gutters grow; full-bleed rules/dark chapters continue edge-to-edge so ultra-wide never shows "letterboxing" |

## Rules

1. **Fluid type first.** All display roles use `clamp()` (see `typography.md`);
   breakpoints adjust layout, not font sizes.
2. **Grids collapse along hairlines.** A 4-col `gap-px` hairline grid becomes 2×2 then
   1-col — the `bg-border` technique keeps rules correct at every count.
3. **Scroll-scenes degrade.** Hero and manifesto scenes are scroll-driven on all
   sizes but shorten their scroll runway on mobile (less `vh` budget); sticky side
   rails (`solutions`) become stacked headers below `lg`.
4. **Touch targets** ≥ 44px; index rows expand on tap (details/summary semantics or
   button-driven), hover-only affordances always have a visible default state.
5. **Ultra-wide:** `max-w-[88rem]` content, but backgrounds (Deep Ink chapters,
   lattices, tickers, hairline section borders) run full viewport width.
6. Test matrix: 360, 390, 768, 1024, 1440, 1920, 2560 px.
