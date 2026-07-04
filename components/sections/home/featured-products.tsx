import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { Reveal } from "@/components/motion/reveal";
import { productFamilies } from "@/lib/products";

/** Chapter 04 — the four clinical families in a hairline grid. */
export function FeaturedProducts() {
  return (
    <Section id="products">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          index="04"
          eyebrow="Featured products"
          title="Four families of clinical formulation."
          className="flex-1 basis-full lg:basis-auto"
        />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:mt-24 md:grid-cols-2 xl:grid-cols-4">
        {productFamilies.map((family, i) => (
          <Reveal key={family.id} delay={i * 90} className="flex">
            <ProductCard family={family} className="w-full" />
          </Reveal>
        ))}
      </div>
      <Reveal delay={180}>
        <Link
          href="/products"
          className="group text-eyebrow mt-10 inline-flex items-center gap-2 text-primary"
        >
          Full product overview
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>
    </Section>
  );
}
