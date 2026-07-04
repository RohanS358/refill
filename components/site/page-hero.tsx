import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "paper" | "dark";
  /** Optional data strip rendered under the hairline, e.g. facts/meta. */
  meta?: { label: string; value: string }[];
  children?: React.ReactNode;
  className?: string;
};

/** Sub-page opener: eyebrow · display-xl title · lead · hairline · meta row. */
export function PageHero({
  eyebrow,
  title,
  lead,
  tone = "paper",
  meta,
  children,
  className,
}: PageHeroProps) {
  const dark = tone === "dark";
  return (
    <header
      className={cn(
        dark ? "bg-ink-deep text-background" : "bg-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44 lg:px-20">
        <Reveal>
          <Eyebrow className={dark ? "text-green-soft" : undefined}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="text-display-xl mt-6 max-w-5xl text-balance md:mt-8">{title}</h1>
        </Reveal>
        {lead ? (
          <Reveal delay={180}>
            <p
              className={cn(
                "text-lead mt-8 max-w-2xl",
                dark ? "text-paper-dim" : "text-muted-foreground",
              )}
            >
              {lead}
            </p>
          </Reveal>
        ) : null}
        {children}
        {meta?.length ? (
          <Reveal delay={270}>
            <dl
              className={cn(
                "mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t pt-6 md:grid-cols-4",
                dark ? "border-line-dark" : "border-border",
              )}
            >
              {meta.map((m) => (
                <div key={m.label}>
                  <dt
                    className={cn(
                      "text-eyebrow",
                      dark ? "text-paper-dim" : "text-muted-foreground",
                    )}
                  >
                    {m.label}
                  </dt>
                  <dd className="text-data mt-2">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
