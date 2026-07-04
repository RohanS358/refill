import { cn } from "@/lib/utils";

/** Uppercase micro-label with a leading rule. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("text-eyebrow inline-flex items-center gap-3 text-primary", className)}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </span>
  );
}
