import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ProductFamily } from "@/lib/products";
import { Molecule } from "@/components/gfx/molecule";
import { cn } from "@/lib/utils";

/**
 * Product-family card: molecule mark, name, category, compound ledger.
 * Lives inside hairline grids (bg-border gap-px parents).
 */
export function ProductCard({
  family,
  className,
  ci,
}: {
  family: ProductFamily;
  className?: string;
  /** Position in the products collection — enables visual editing. */
  ci?: number;
}) {
  const key = (field: string) => (ci == null ? undefined : `col:products.${ci}.${field}`);
  return (
    <article className={cn("group relative flex flex-col bg-card p-8 md:p-10", className)}>
      <div className="flex items-start justify-between">
        <span aria-hidden="true" className="text-data text-muted-foreground">
          {family.index}
        </span>
        <Molecule
          variant={family.molecule}
          className="h-20 w-20 text-primary transition-transform duration-500 group-hover:-translate-y-1"
        />
      </div>
      <h3 className="text-title mt-8">
        <Link
          href={`/products#${family.id}`}
          className="after:absolute after:inset-0 focus-visible:outline-2"
        >
          <span data-cms={key("name")}>{family.name}</span>
        </Link>
      </h3>
      <p className="text-eyebrow mt-3 text-muted-foreground" data-cms={key("category")}>
        {family.category}
      </p>
      <p className="mt-5 leading-relaxed text-muted-foreground" data-cms={key("summary")}>
        {family.summary}
      </p>
      <dl className="mt-8 flex-1 border-t border-border">
        {family.compounds.slice(0, 3).map((c, j) => (
          <div
            key={c.label}
            className="text-data flex items-baseline justify-between gap-4 border-b border-border py-2.5"
          >
            <dt className="text-foreground" data-cms={key(`compounds.${j}.label`)}>
              {c.label}
            </dt>
            <dd className="text-right text-muted-foreground" data-cms={key(`compounds.${j}.value`)}>
              {c.value}
            </dd>
          </div>
        ))}
      </dl>
      <span className="text-eyebrow mt-8 inline-flex items-center gap-2 text-primary">
        Explore family
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </article>
  );
}
