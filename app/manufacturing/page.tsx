import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { StatBlock } from "@/components/site/stat-block";
import { Reveal, Draw } from "@/components/motion/reveal";
import { Blueprint } from "@/components/gfx/blueprint";

export const metadata: Metadata = {
  title: "Manufacturing Vision",
  description:
    "Refill Enterprises' long-term commitment: a state-of-the-art nutraceutical manufacturing facility in Nepal — quality assurance, self-reliance, employment, and industry growth.",
};

const pillars = [
  {
    index: "01",
    title: "Quality assurance",
    body: "Production under internationally recognized quality systems — the standard is global even when the address is local. Certification targets (GMP, ISO) are part of the facility plan, not an afterthought.",
  },
  {
    index: "02",
    title: "Self-reliance",
    body: "Critical nutrition should not depend entirely on imports. Domestic production shortens supply chains for the hospitals that can least afford disruption.",
  },
  {
    index: "03",
    title: "Employment & skills",
    body: "A facility is a school: production, quality control, regulatory affairs, and R&D roles that build Nepal's pharmaceutical-grade workforce.",
  },
  {
    index: "04",
    title: "Industry growth",
    body: "One credible domestic manufacturer raises the ceiling for the whole nutraceutical and healthcare sector — suppliers, logistics, and standards mature together.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing vision"
        title="The facility we are building toward."
        lead="As part of its long-term strategic vision, Refill Enterprises aspires to establish a state-of-the-art manufacturing facility within Nepal. This page is that commitment, in public."
        meta={[
          { label: "Status", value: "Planned" },
          { label: "Location", value: "Nepal" },
          { label: "Scope", value: "Nutraceutical production" },
          { label: "Standard", value: "International QA" },
        ]}
      />

      <Section>
        <SectionHeading
          index="01"
          eyebrow="The concept"
          title="Drawn first. Then built."
        />
        <div className="mt-16 md:mt-24">
          <Draw>
            <Blueprint className="mx-auto max-w-4xl text-primary" />
          </Draw>
          <p className="text-data mt-6 text-center text-muted-foreground">
            Fig. 01 — Concept plan, future Refill production facility. Illustrative.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          index="02"
          eyebrow="Why it matters"
          title="Four returns on one facility."
        />
        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 90} className="flex">
              <div className="w-full bg-background p-8 md:p-14">
                <p aria-hidden="true" className="text-data text-primary">
                  {pillar.index}
                </p>
                <h3 className="text-title mt-6">{pillar.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section density="dense">
        <Reveal>
          <StatBlock
            stats={[
              { value: 1, label: "Facility planned" },
              { value: 4, label: "Strategic returns" },
              { value: 100, label: "Commitment", suffix: "%" },
            ]}
            className="border border-border"
          />
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Partners & investors"
        title="Build it with us."
        body="We welcome conversations with partners who share the vision of domestic healthcare manufacturing in Nepal."
      />
    </>
  );
}
