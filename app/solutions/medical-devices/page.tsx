import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { deviceCapabilities } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Medical Devices & Applications",
  description:
    "Advanced medical devices and healthcare applications used exclusively in critical care nutrition and patient management, introduced through strategic partnerships.",
};

export default function MedicalDevicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · 02"
        title="Devices that keep nutrition honest."
        lead="Formulation is only half the therapy. Our devices and healthcare applications make delivery precise and outcomes measurable — technology in service of the feeding protocol, nothing else."
        meta={[
          { label: "Scope", value: "Critical-care nutrition" },
          { label: "Model", value: "Strategic partnerships" },
          { label: "Type", value: "Devices & digital apps" },
          { label: "Support", value: "Local, clinical-grade" },
        ]}
      />

      <Section>
        <SectionHeading
          index="01"
          eyebrow="Capabilities"
          title="Four jobs, done precisely."
          lead="Every device or application we introduce must earn its place at the bedside by making nutritional therapy more controlled, more visible, or more accountable."
        />
        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:mt-24 md:grid-cols-2">
          {deviceCapabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={i * 90} className="flex">
              <div className="w-full bg-background p-8 md:p-14">
                <p aria-hidden="true" className="text-data text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-title mt-6">{capability.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {capability.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="02"
              eyebrow="The partnership model"
              title="Global technology, introduced responsibly."
            />
            <Reveal delay={180}>
              <div className="mt-10 max-w-2xl space-y-6 leading-relaxed text-muted-foreground">
                <p>
                  We select devices and applications through strategic partnerships
                  with established manufacturers — then take responsibility for what
                  matters locally: clinical onboarding, training, protocol fit, and
                  ongoing support.
                </p>
                <p>
                  The result is that hospitals in Nepal get access to modern
                  critical-care nutrition technology without gambling on unsupported
                  imports.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={270}>
              <ul className="border-t border-border">
                {[
                  ["Selection", "Evidence and bedside utility, not novelty"],
                  ["Introduction", "Clinical onboarding and training included"],
                  ["Integration", "Fits existing feeding protocols"],
                  ["Support", "Local accountability for uptime"],
                ].map(([title, body]) => (
                  <li
                    key={title}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-4"
                  >
                    <span className="text-data font-semibold">{title}</span>
                    <span className="text-data text-muted-foreground">{body}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="For hospitals"
        title="Evaluate a device with us."
        body="Talk to us about pilots, protocol fit, and training for your unit."
      />
    </>
  );
}
