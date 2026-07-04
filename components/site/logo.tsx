import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wordmark lockup — the single place a real logo asset will land
 * (docs/brand-guidelines.md §5).
 */
export function Logo({ className, link = true }: { className?: string; link?: boolean }) {
  const mark = (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span className="text-lg font-extrabold tracking-[-0.04em]">REFILL</span>
      <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.28em] opacity-70">
        Enterprises
      </span>
    </span>
  );
  if (!link) return mark;
  return (
    <Link href="/" aria-label="Refill Enterprises — home" className="focus-visible:outline-2">
      {mark}
    </Link>
  );
}
