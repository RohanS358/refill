import { cn } from "@/lib/utils";

/**
 * Hero background: a molecular constellation drawn in one stroke weight.
 * Purely decorative (aria-hidden), inherits currentColor.
 */

type Node = { x: number; y: number; r: number; filled?: boolean };

const nodes: Node[] = [
  { x: 140, y: 120, r: 5, filled: true },
  { x: 260, y: 70, r: 3 },
  { x: 330, y: 190, r: 7, filled: true },
  { x: 180, y: 280, r: 3 },
  { x: 420, y: 90, r: 3 },
  { x: 470, y: 260, r: 4, filled: true },
  { x: 90, y: 420, r: 4 },
  { x: 240, y: 470, r: 6, filled: true },
  { x: 400, y: 420, r: 3 },
  { x: 900, y: 130, r: 4, filled: true },
  { x: 1020, y: 220, r: 6 },
  { x: 1110, y: 90, r: 3 },
  { x: 960, y: 350, r: 3 },
  { x: 1080, y: 430, r: 5, filled: true },
  { x: 820, y: 480, r: 3 },
  { x: 700, y: 560, r: 4, filled: true },
  { x: 560, y: 620, r: 3 },
  { x: 880, y: 620, r: 3 },
];

const bonds: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [6, 7],
  [7, 8],
  [5, 8],
  [9, 10],
  [10, 11],
  [10, 12],
  [12, 13],
  [12, 14],
  [14, 15],
  [15, 16],
  [15, 17],
  [13, 17],
];

export function MoleculeField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="currentColor" strokeWidth="1">
        {bonds.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            opacity={0.55}
          />
        ))}
      </g>
      <g>
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.filled ? "currentColor" : "var(--background)"}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
}
