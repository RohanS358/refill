import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/motion/reveal";
import { DotLattice } from "@/components/gfx/dot-lattice";

const pillars = ["Performance", "Recovery", "Wellness", "Active lifestyle"] as const;

/**
 * Chapter 09 — the future line. The one place on the home page where
 * Pulse Lime is allowed (docs/decisions.md D-009).
 */
export function SportsPreview() {
  return (
    <Section id="sports" tone="dark" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-pulse/20">
        <DotLattice />
      </div>
      <div className="relative">
        <Reveal>
          <p className="text-eyebrow inline-flex items-center gap-3 text-pulse">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            09 · Next — Sports nutrition
            <span className="border border-pulse px-2 py-1 text-[0.5625rem]">Coming soon</span>
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="text-display-xl mt-8 max-w-5xl text-balance">
            The same science.
            <br />
            Built for performance<span className="text-pulse">.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-lead mt-8 max-w-2xl text-paper-dim">
            A sports nutrition portfolio engineered on our clinical foundation — for
            athletes, fitness enthusiasts, and everyone whose recovery deserves
            critical-care rigour.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="text-eyebrow border border-line-dark px-4 py-3 text-paper-dim"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={360}>
          <Link
            href="/sports-nutrition"
            className="group mt-12 inline-flex items-center gap-3 bg-pulse px-8 py-4 text-sm font-bold text-ink-deep transition-colors hover:bg-background"
          >
            Preview the line
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
