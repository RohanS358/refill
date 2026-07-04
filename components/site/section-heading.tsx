import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  /** Chapter index, e.g. "03" — rendered as decoration. */
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "paper" | "dark";
  className?: string;
};

/**
 * The section-opening pattern every chapter uses:
 * index number · eyebrow · display headline · optional lead.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  tone = "paper",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12", className)}>
      <div className="lg:col-span-2">
        <Reveal>
          <div className="flex items-baseline gap-4">
            {index ? (
              <span
                aria-hidden="true"
                className={cn(
                  "text-data",
                  tone === "dark" ? "text-paper-dim" : "text-muted-foreground",
                )}
              >
                {index}
              </span>
            ) : null}
            <Eyebrow className={tone === "dark" ? "text-green-soft" : undefined}>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-10">
        <Reveal delay={90}>
          <h2 className="text-display max-w-4xl text-balance">{title}</h2>
        </Reveal>
        {lead ? (
          <Reveal delay={180}>
            <p
              className={cn(
                "text-lead mt-6 max-w-2xl md:mt-8",
                tone === "dark" ? "text-paper-dim" : "text-muted-foreground",
              )}
            >
              {lead}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
