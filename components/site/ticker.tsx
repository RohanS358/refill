import { cn } from "@/lib/utils";

/**
 * Marquee of scientific terms. Pure CSS animation (pauses on hover,
 * static under reduced motion). The moving copy is aria-hidden; a
 * visually-hidden list carries the content for assistive tech.
 */
export function Ticker({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const row = (
    <span className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="text-eyebrow whitespace-nowrap px-6 text-muted-foreground">
            {item}
          </span>
          <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-primary" />
        </span>
      ))}
    </span>
  );

  return (
    <div className={cn("marquee-mask overflow-hidden border-y border-border py-4", className)}>
      <div aria-hidden="true" className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
