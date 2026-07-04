import { cn } from "@/lib/utils";

/**
 * Metabolic pathway: dashed route with junction nodes. Wrap in <Draw>
 * to animate; junctions fade in after the route arrives.
 */
export function Pathway({ className }: { className?: string }) {
  const junctions: [number, number][] = [
    [40, 300],
    [180, 180],
    [340, 260],
    [480, 120],
    [620, 200],
    [760, 80],
  ];
  return (
    <svg
      viewBox="0 0 800 360"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("w-full", className)}
    >
      <path
        className="draw-path"
        pathLength={1}
        d="M40 300 C 100 300 120 180 180 180 S 280 260 340 260 S 420 120 480 120 S 560 200 620 200 S 700 80 760 80"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g className="draw-node">
        {junctions.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="5"
              fill={i === junctions.length - 1 ? "currentColor" : "var(--background)"}
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y} r="11" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          </g>
        ))}
      </g>
    </svg>
  );
}
