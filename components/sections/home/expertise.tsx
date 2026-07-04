import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { IndexRow } from "@/components/site/index-row";
import { Reveal } from "@/components/motion/reveal";
import { expertiseDomains } from "@/lib/products";

/** Chapter 03 — six domains as an editorial index. */
export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeading
        index="03"
        eyebrow="Core expertise"
        title="Six domains. One discipline."
        lead="Everything we make sits on the same foundation: clinical evidence, metabolic precision, and respect for the people who prescribe and depend on it."
      />
      <Reveal delay={180} className="mt-16 md:mt-24">
        <div>
          {expertiseDomains.map((domain) => (
            <IndexRow
              key={domain.index}
              index={domain.index}
              title={domain.title}
              defaultOpen={domain.index === "01"}
            >
              <p>{domain.body}</p>
            </IndexRow>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
