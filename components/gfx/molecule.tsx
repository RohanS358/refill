import { cn } from "@/lib/utils";

/**
 * Product-family molecule marks. One stroke weight, currentColor,
 * decorative only. Variants map to lib/products.ts `molecule`.
 */

type Variant = "calcium" | "amino" | "omega" | "metabolic";

function Calcium() {
  // Central ion with coordinated satellites
  return (
    <>
      <circle cx="48" cy="48" r="9" fill="currentColor" />
      {[
        [48, 14],
        [82, 48],
        [48, 82],
        [14, 48],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="48" y1="48" x2={x} y2={y} stroke="currentColor" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
    </>
  );
}

function Amino() {
  // N–Cα–C backbone with side chain
  return (
    <>
      <polyline
        points="12,64 30,48 48,60 66,44 84,56"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="48" y1="60" x2="48" y2="28" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="24" r="5" fill="currentColor" />
      <circle cx="12" cy="64" r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="48" r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="60" r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="66" cy="44" r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="84" cy="56" r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
    </>
  );
}

function Omega() {
  // Long unsaturated chain — the omega-3 tail with double-bond marks
  return (
    <>
      <polyline
        points="8,60 22,44 36,60 50,44 64,60 78,44 90,56"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="24" y1="50" x2="34" y2="62" stroke="currentColor" strokeWidth="1.5" />
      <line x1="52" y1="50" x2="62" y2="62" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="60" r="5" fill="currentColor" />
      <circle cx="90" cy="56" r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="66"
        y="30"
        fill="currentColor"
        fontSize="11"
        fontWeight="600"
        fontFamily="inherit"
      >
        ω-3
      </text>
    </>
  );
}

function Metabolic() {
  // Branched network — many states, one system
  return (
    <>
      <line x1="48" y1="48" x2="24" y2="26" stroke="currentColor" strokeWidth="1.5" />
      <line x1="48" y1="48" x2="74" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="48" y1="48" x2="20" y2="66" stroke="currentColor" strokeWidth="1.5" />
      <line x1="48" y1="48" x2="66" y2="74" stroke="currentColor" strokeWidth="1.5" />
      <line x1="74" y1="30" x2="86" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="26" x2="46" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="7" fill="currentColor" />
      {[
        [24, 26],
        [74, 30],
        [20, 66],
        [66, 74],
        [86, 52],
        [46, 16],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="var(--card)" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </>
  );
}

const variants: Record<Variant, () => React.ReactNode> = {
  calcium: Calcium,
  amino: Amino,
  omega: Omega,
  metabolic: Metabolic,
};

export function Molecule({ variant, className }: { variant: Variant; className?: string }) {
  const Mark = variants[variant];
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
      className={cn("h-16 w-16", className)}
    >
      <Mark />
    </svg>
  );
}
