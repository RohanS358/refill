"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "./use-in-view";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (≤ 5 × 90ms per group — docs/animation-guidelines.md). */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/** Entrance reveal: opacity + 24px rise, fires once. CSS lives in globals.css. */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: RevealProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Adds the drawing trigger to a block containing .draw-path / .draw-node SVG. */
export function Draw({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      data-draw=""
      className={cn(inView && "is-drawn", className)}
      style={{ "--draw-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
