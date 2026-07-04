import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Molecule } from "@/components/gfx/molecule";
import { collection } from "@/lib/cms/content";
import { T } from "@/components/cms/t";
import { productFamilies } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Four families of clinical formulation: calcium & bone health, amino acid formulations, Omega-3 fatty acids, and disease-specific metabolic nutrition.",
};

export default async function ProductsPage() {
  const families = await collection("products", productFamilies);

  return (
    <>
      <PageHero
        ck="products.hero"
        eyebrow="Products"
        title="The clinical catalogue."
        lead="Four families of formulation, each built for a specific physiological job. Every product is designed for healthcare professionals first — dosing clarity, honest labels, clinical language."
        meta={[
          { label: "Families", value: String(families.length) },
          { label: "Audience", value: "Healthcare professionals" },
          { label: "Standard", value: "Evidence-based" },
          { label: "Delivery", value: "Oral & enteral" },
        ]}
      />

      {families.map((family, index) => (
        <Section key={family.id} id={family.id}>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Identity column */}
            <div className="lg:col-span-4">
              <Reveal>
                <span aria-hidden="true" className="text-data text-muted-foreground">
                  {family.index} / {String(families.length).padStart(2, "0")}
                </span>
                <Molecule
                  variant={family.molecule}
                  className="mt-8 h-28 w-28 text-primary"
                />
                <h2
                  className="text-display mt-8 text-[clamp(1.9rem,3.2vw,3rem)]"
                  data-cms={`col:products.${index}.name`}
                >
                  {family.name}
                </h2>
                <p
                  className="text-eyebrow mt-4 text-primary"
                  data-cms={`col:products.${index}.category`}
                >
                  {family.category}
                </p>
              </Reveal>
            </div>

            {/* Detail column */}
            <div className="lg:col-span-8">
              <Reveal delay={90}>
                <p
                  className="text-lead max-w-2xl text-muted-foreground"
                  data-cms={`col:products.${index}.detail`}
                >
                  {family.detail}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <h3 className="text-eyebrow mt-14 text-muted-foreground">
                  Composition & characteristics
                </h3>
                <dl className="mt-4 border-t border-border">
                  {family.compounds.map((compound, ci) => (
                    <div
                      key={compound.label}
                      className="grid grid-cols-2 gap-6 border-b border-border py-4"
                    >
                      <dt
                        className="text-data font-semibold"
                        data-cms={`col:products.${index}.compounds.${ci}.label`}
                      >
                        {compound.label}
                      </dt>
                      <dd
                        className="text-data text-right text-muted-foreground"
                        data-cms={`col:products.${index}.compounds.${ci}.value`}
                      >
                        {compound.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={270}>
                <h3 className="text-eyebrow mt-12 text-muted-foreground">
                  Clinical applications
                </h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {family.applications.map((application, ai) => (
                    <li
                      key={application}
                      className="text-data border border-border bg-card px-4 py-2.5"
                      data-cms={`col:products.${index}.applications.${ai}`}
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {index === 0 ? (
                <Reveal delay={360}>
                  <T
                    k="products.disclaimer"
                    as="p"
                    className="text-data mt-12 max-w-xl border-l-2 border-primary bg-card p-5 text-muted-foreground"
                  >
                    Product specifications shown are representative of each family. For SKU-level dosing, registration, and availability, contact our team.
                  </T>
                </Reveal>
              ) : null}
            </div>
          </div>
        </Section>
      ))}

      <CtaBand
        ck="products.cta"
        eyebrow="Availability"
        title="Ask about SKUs and supply."
        body="For hospital procurement, distribution, and detailed product specifications, our team responds quickly."
      />
    </>
  );
}
