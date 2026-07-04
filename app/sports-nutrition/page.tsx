import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/motion/reveal";
import { DotLattice } from "@/components/gfx/dot-lattice";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sports Nutrition — Coming Soon",
  description:
    "Refill's upcoming sports nutrition portfolio: performance, recovery, wellness, and active-lifestyle support, engineered on a critical-care foundation.",
};

const lines = [
  {
    index: "01",
    title: "Performance",
    body: "Substrates for output — engineered ratios, not proprietary-blend theatre.",
  },
  {
    index: "02",
    title: "Recovery",
    body: "The critical-care recovery playbook, translated for training loads.",
  },
  {
    index: "03",
    title: "Wellness",
    body: "Daily foundations — the same quality bar as the clinical catalogue.",
  },
  {
    index: "04",
    title: "Active lifestyle",
    body: "For people who move — honest doses, labelled like a lab report.",
  },
];

export default function SportsNutritionPage() {
  return (
    <div className="bg-ink-deep text-background">
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-pulse/15">
          <DotLattice />
        </div>
        <PageHero
          tone="dark"
          eyebrow="Sports nutrition"
          title="Clinical rigour is coming to the gym."
          lead="A performance, recovery, and active-lifestyle portfolio built on the same evidence discipline as our critical-care range. In development now."
          className="relative bg-transparent"
        >
          <Reveal delay={220}>
            <p className="text-eyebrow mt-8 inline-flex items-center gap-3 text-pulse">
              <span aria-hidden="true" className="h-2 w-2 animate-pulse bg-pulse" />
              Status: In development
            </p>
          </Reveal>
        </PageHero>
      </div>

      <Section tone="dark">
        <div className="grid gap-px bg-line-dark sm:grid-cols-2 xl:grid-cols-4">
          {lines.map((line, i) => (
            <Reveal key={line.index} delay={i * 90} className="flex">
              <div className="w-full bg-ink-deep p-8 md:p-10">
                <p aria-hidden="true" className="text-data text-pulse">
                  {line.index}
                </p>
                <h2 className="text-title mt-6">{line.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">{line.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-display text-balance">
                Why a clinical company belongs in sport<span className="text-pulse">.</span>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 max-w-2xl space-y-6 leading-relaxed text-paper-dim">
                <p>
                  Recovery is our core science. The metabolic logic that helps a
                  patient rebuild after critical illness — protein synthesis, substrate
                  timing, micronutrient sufficiency — is the same logic that governs
                  adaptation to training.
                </p>
                <p>
                  Most sports nutrition is marketing with a scoop. Ours will be
                  formulation with a reference list: exact doses, honest labels, and
                  claims that survive a clinician's reading.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="border border-line-dark p-8 md:p-10">
                <p className="text-eyebrow text-pulse">Launch updates</p>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                  Be first to know when the line launches — distributors, gyms, and
                  athletes welcome.
                </p>
                <a
                  href={`mailto:${site.email}?subject=Sports%20Nutrition%20updates`}
                  className="group mt-8 inline-flex items-center gap-3 bg-pulse px-7 py-4 text-sm font-bold text-ink-deep transition-colors hover:bg-background"
                >
                  Get notified
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
            <Reveal delay={270}>
              <Link
                href="/products"
                className="text-eyebrow mt-8 inline-flex items-center gap-2 text-paper-dim transition-colors hover:text-background"
              >
                Meanwhile — the clinical catalogue
                <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
