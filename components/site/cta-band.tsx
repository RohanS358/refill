import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "./eyebrow";

/**
 * Closing call-to-action — home chapter 11 and the tail of every page.
 */
export function CtaBand({
  eyebrow = "Work with us",
  title = "Let's engineer better outcomes.",
  body = "Hospitals, clinicians, and distribution partners — talk to us about clinical nutrition, devices, and what comes next.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[88rem] px-5 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h2 id="cta-heading" className="text-display-xl mt-8 max-w-5xl text-balance">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-lead mt-8 max-w-2xl text-muted-foreground">{body}</p>
        </Reveal>
        <Reveal delay={270}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground focus-visible:outline-2"
            >
              Contact us
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2"
            >
              View products
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
