import { cn } from "@/lib/utils";

/**
 * Facility blueprint linework: floor plan with dimension ticks.
 * Wrap in <Draw> — walls draw first, annotations fade in after.
 */
export function Blueprint({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("w-full", className)}
    >
      {/* Outer shell */}
      <path
        className="draw-path"
        pathLength={1}
        d="M60 60 H580 V360 H60 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Internal walls: production / QC lab / warehouse */}
      <path
        className="draw-path"
        pathLength={1}
        d="M300 60 V220 M300 220 H580 M300 220 V360 M170 220 V360 M300 140 H420 M420 60 V140"
        stroke="currentColor"
        strokeWidth="1"
        style={{ transitionDelay: "calc(var(--draw-delay, 0ms) + 300ms)" }}
      />
      {/* Door arcs */}
      <path
        className="draw-path"
        pathLength={1}
        d="M320 220 A20 20 0 0 1 300 240 M190 360 A20 20 0 0 1 170 340"
        stroke="currentColor"
        strokeWidth="0.75"
        style={{ transitionDelay: "calc(var(--draw-delay, 0ms) + 600ms)" }}
      />
      {/* Dimension lines + ticks */}
      <g className="draw-node" stroke="currentColor" strokeWidth="0.75" opacity="0.6">
        <line x1="60" y1="34" x2="580" y2="34" />
        <line x1="60" y1="28" x2="60" y2="40" />
        <line x1="580" y1="28" x2="580" y2="40" />
        <line x1="606" y1="60" x2="606" y2="360" />
        <line x1="600" y1="60" x2="612" y2="60" />
        <line x1="600" y1="360" x2="612" y2="360" />
      </g>
      {/* Room labels */}
      <g
        className="draw-node"
        fill="currentColor"
        fontSize="11"
        fontFamily="inherit"
        letterSpacing="0.18em"
      >
        <text x="86" y="130">PRODUCTION</text>
        <text x="330" y="100">QC LAB</text>
        <text x="326" y="290">WAREHOUSE</text>
        <text x="86" y="290">R&amp;D</text>
        <text x="196" y="290">PACK</text>
      </g>
      {/* Survey crosses */}
      <g className="draw-node" stroke="currentColor" strokeWidth="0.75" opacity="0.5">
        <path d="M470 300 h12 M476 294 v12" />
        <path d="M120 170 h12 M126 164 v12" />
        <path d="M520 120 h12 M526 114 v12" />
      </g>
    </svg>
  );
}
