import { useId } from "react";
import { cn } from "@/lib/utils";

/** Dot-grid field. Decorative backdrop; inherits currentColor. */
export function DotLattice({
  className,
  gap = 28,
  radius = 1.1,
}: {
  className?: string;
  gap?: number;
  radius?: number;
}) {
  const id = useId();
  return (
    <svg aria-hidden="true" focusable="false" className={cn("h-full w-full", className)}>
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap / 2} cy={gap / 2} r={radius} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
