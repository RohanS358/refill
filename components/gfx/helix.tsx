import { cn } from "@/lib/utils";

/**
 * Double helix, drawn on scroll via .draw-path (wrap in <Draw>).
 * Strands are normalized (pathLength=1); rungs fade in as nodes.
 */

const rungs: { y: number; half: number }[] = [
  { y: 16, half: 95 },
  { y: 48, half: 59 },
  { y: 176, half: 59 },
  { y: 208, half: 95 },
  { y: 272, half: 95 },
  { y: 304, half: 59 },
  { y: 432, half: 59 },
  { y: 464, half: 95 },
  { y: 528, half: 95 },
  { y: 560, half: 59 },
];

export function Helix({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 640"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-full w-auto", className)}
    >
      <path
        className="draw-path"
        pathLength={1}
        d="M60 0 C60 80 260 80 260 160 S60 240 60 320 S260 400 260 480 S60 560 60 640"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        className="draw-path"
        pathLength={1}
        d="M260 0 C260 80 60 80 60 160 S260 240 260 320 S60 400 60 480 S260 560 260 640"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{ transitionDelay: "calc(var(--draw-delay, 0ms) + 150ms)" }}
      />
      <g className="draw-node" stroke="currentColor" strokeWidth="1" opacity="0.7">
        {rungs.map((r, i) => (
          <line key={i} x1={160 - r.half} y1={r.y} x2={160 + r.half} y2={r.y} />
        ))}
      </g>
      <g className="draw-node">
        {rungs.map((r, i) => (
          <g key={i} fill="currentColor">
            <circle cx={160 - r.half} cy={r.y} r="3" />
            <circle cx={160 + r.half} cy={r.y} r="3" />
          </g>
        ))}
      </g>
    </svg>
  );
}
