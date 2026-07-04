"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * rAF-throttled 0..1 progress of scrolling through a tall section
 * (section height − viewport). Powers the two scroll-scenes
 * (hero, impact manifesto) — docs/animation-guidelines.md verb 4.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const runway = el.offsetHeight - window.innerHeight;
    if (runway <= 0) {
      setProgress(1);
      return;
    }
    setProgress(Math.max(0, Math.min(1, -rect.top / runway)));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [update]);

  return { ref, progress };
}
