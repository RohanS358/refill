import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type IndexRowProps = {
  index: string;
  title: string;
  children: React.ReactNode;
  /** Small trailing tag, e.g. a category or location. */
  tag?: string;
  defaultOpen?: boolean;
};

/**
 * Numbered expandable row (native details/summary — keyboard and
 * no-JS safe). Used for expertise domains, careers roles, FAQs.
 */
export function IndexRow({ index, title, children, tag, defaultOpen }: IndexRowProps) {
  return (
    <details
      open={defaultOpen}
      className="group border-t border-border last:border-b open:bg-card"
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-baseline gap-6 px-2 py-6 md:gap-10 md:py-8",
          "transition-colors hover:bg-card [&::-webkit-details-marker]:hidden",
        )}
      >
        <span aria-hidden="true" className="text-data text-primary">
          {index}
        </span>
        <h3 className="text-title flex-1 text-balance">{title}</h3>
        {tag ? (
          <span className="text-data hidden text-muted-foreground md:block">{tag}</span>
        ) : null}
        <Plus
          size={20}
          strokeWidth={1.5}
          aria-hidden="true"
          className="shrink-0 self-center text-muted-foreground transition-transform duration-300 group-open:rotate-45"
        />
      </summary>
      <div className="px-2 pb-8 md:pl-[4.5rem] lg:pr-24">
        <div className="max-w-2xl leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </details>
  );
}
