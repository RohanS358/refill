"use client";

import { useEffect, useState } from "react";
import { useInViewOnce, usePrefersReducedMotion } from "./use-in-view";

type CounterProps = {
  to: number;
  /** "year" renders 2020 (no grouping); "plain" renders 1,234. */
  format?: "plain" | "year";
  suffix?: string;
  duration?: number;
};

/** Number that counts up once in view. tabular-nums prevents layout shift. */
export function Counter({ to, format = "plain", suffix = "", duration = 1200 }: CounterProps) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>(0.5);
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf: number;
    const start = performance.now();
    const from = format === "year" ? Math.max(0, to - 60) : 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration, format]);

  const text =
    format === "year" ? String(value) : new Intl.NumberFormat("en-US").format(value);

  return (
    <span ref={ref} className="tabular-nums">
      {text}
      {suffix}
    </span>
  );
}
