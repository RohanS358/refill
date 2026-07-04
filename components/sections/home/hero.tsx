"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { usePrefersReducedMotion } from "@/components/motion/use-in-view";
import { MoleculeField } from "@/components/gfx/molecule-field";
import { Ticker } from "@/components/site/ticker";
import { site } from "@/lib/site";

const tickerItems = [
  "Critical Care Nutrition",
  "Ca 40.078 u",
  "Amino Acid Formulations",
  "Omega-3 · EPA / DHA",
  "Disease-Specific Metabolic Nutrition",
  "Medical Devices",
  `Est. ${site.founded} — ${site.city}`,
  "Evidence-Based",
] as const;

const line1 = ["Clinical", "nutrition,"];
const line2 = ["engineered"];

/**
 * Chapter 01 — scroll scene. The molecular field drifts and the
 * statement holds the screen, then hands over to the ticker.
 */
export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();

  const p = reduced ? 0 : progress;
  const textOpacity = Math.max(0, 1 - p * 1.6);
  const textShift = p * -40;
  const fieldShift = p * -80;
  const fieldScale = 1 + p * 0.06;

  return (
    <section aria-label="Introduction">
      <div ref={ref} className="relative h-[175vh]">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-background">
          {/* Molecular field */}
          <div
            aria-hidden="true"
            className="absolute inset-0 text-primary/25 will-change-transform"
            style={{ transform: `translateY(${fieldShift}px) scale(${fieldScale})` }}
          >
            <div className="animate-drift-slow h-full w-full">
              <MoleculeField />
            </div>
          </div>

          {/* Statement */}
          <div
            className="relative mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-center px-5 pt-16 will-change-transform md:px-12 md:pt-20 lg:px-20"
            style={{ opacity: textOpacity, transform: `translateY(${textShift}px)` }}
          >
            <p className="text-eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-foreground">
              <span className="text-primary">{site.legalName}</span>
              <span aria-hidden="true">·</span>
              <span>Est. {site.founded}</span>
              <span aria-hidden="true">·</span>
              <span>{site.country}</span>
            </p>

            <h1 className="text-display-xl mt-8 max-w-6xl">
              <span className="block overflow-hidden">
                <span className="flex flex-wrap gap-x-[0.22em]">
                  {line1.map((word, i) => (
                    <span
                      key={word}
                      className="animate-rise-in inline-block"
                      style={{ animationDelay: `${120 + i * 90}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="flex flex-wrap gap-x-[0.22em]">
                  {line2.map((word, i) => (
                    <span
                      key={word}
                      className="animate-rise-in inline-block"
                      style={{ animationDelay: `${300 + i * 90}ms` }}
                    >
                      {word}
                      <span className="text-primary">.</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="text-lead mt-8 max-w-xl text-muted-foreground">
              Evidence-based critical care nutrition, disease-specific metabolic
              formulations, and the medical technology to deliver them — from Nepal,
              for better patient outcomes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
              >
                Explore the portfolio
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/solutions/critical-care-nutrition"
                className="inline-flex items-center gap-3 border border-foreground px-7 py-4 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
              >
                Critical care nutrition
              </Link>
            </div>
          </div>

          {/* Data strip */}
          <div
            className="relative mx-auto w-full max-w-[88rem] px-5 pb-8 md:px-12 lg:px-20"
            style={{ opacity: textOpacity }}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 md:grid-cols-4">
              {[
                ["Specialty", "Clinical & critical care nutrition"],
                ["Portfolio", "4 product families"],
                ["Technology", "Devices & healthcare apps"],
                ["Next", "Sports nutrition · Manufacturing"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-eyebrow text-muted-foreground">{label}</p>
                  <p className="text-data mt-2">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-eyebrow mt-6 flex items-center gap-2 text-muted-foreground">
              <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
              Scroll
            </p>
          </div>
        </div>
      </div>

      <Ticker items={tickerItems} />
    </section>
  );
}
