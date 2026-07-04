import { cn } from "@/lib/utils";

/** Fused hexagon rings (chemistry motif) with vertex nodes. */
export function HexRing({ className }: { className?: string }) {
  // Two fused hexagons, flat-top, r=40
  const hexA = "M120 40 L154.6 60 L154.6 100 L120 120 L85.4 100 L85.4 60 Z";
  const hexB = "M189.2 40 L223.8 60 L223.8 100 L189.2 120 L154.6 100 L154.6 60 Z";
  const nodes: [number, number][] = [
    [120, 40],
    [154.6, 60],
    [154.6, 100],
    [120, 120],
    [85.4, 100],
    [85.4, 60],
    [189.2, 40],
    [223.8, 60],
    [223.8, 100],
    [189.2, 120],
  ];
  return (
    <svg
      viewBox="60 20 190 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("w-full", className)}
    >
      <path d={hexA} stroke="currentColor" strokeWidth="1.5" />
      <path d={hexB} stroke="currentColor" strokeWidth="1.5" />
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3.5"
          fill={i === 1 || i === 9 ? "currentColor" : "var(--background)"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
