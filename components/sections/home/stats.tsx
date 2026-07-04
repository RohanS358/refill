import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { StatBlock } from "@/components/site/stat-block";
import { Reveal } from "@/components/motion/reveal";
import { statistics } from "@/lib/timeline";

/** Chapter 10 — honest numbers on hairlines. */
export function Stats() {
  return (
    <Section id="stats" density="dense">
      <SectionHeading
        index="10"
        eyebrow="Company statistics"
        title="Where we stand."
      />
      <Reveal delay={180} className="mt-16">
        <StatBlock
          stats={statistics.map((s) => ({
            value: s.value,
            label: s.label,
            suffix: "suffix" in s ? s.suffix : undefined,
            format: "format" in s ? s.format : "plain",
          }))}
          className="border border-border"
        />
      </Reveal>
    </Section>
  );
}
