import { Counter } from "@/components/motion/counter";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  label: string;
  suffix?: string;
  format?: "plain" | "year";
};

/** Hairline-ruled counter grid (the gap IS the rule — docs/spacing-system.md). */
export function StatBlock({
  stats,
  tone = "paper",
  columns = 3,
  className,
}: {
  stats: Stat[];
  tone?: "paper" | "dark";
  columns?: 2 | 3;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <dl
      className={cn(
        "grid grid-cols-1 gap-px sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        dark ? "bg-line-dark" : "bg-border",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn("p-8 md:p-10", dark ? "bg-ink-deep" : "bg-background")}
        >
          <dd className="text-display tabular-nums">
            <Counter to={stat.value} suffix={stat.suffix} format={stat.format} />
          </dd>
          <dt
            className={cn(
              "text-eyebrow mt-4",
              dark ? "text-paper-dim" : "text-muted-foreground",
            )}
          >
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
