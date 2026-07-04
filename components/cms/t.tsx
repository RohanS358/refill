import type { JSX } from "react";
import { text } from "@/lib/cms/content";

/**
 * Editable text (server). Renders the admin override if one exists, else the
 * child string, and tags the element so the visual editor can edit it in place.
 */
export async function T({
  k,
  children,
  as = "span",
  className,
}: {
  /** Content key, e.g. "about.story.p1". */
  k: string;
  /** Default copy — the code-owned fallback. */
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const Tag = as as "span";
  return (
    <Tag data-cms={k} className={className}>
      {await text(k, children)}
    </Tag>
  );
}
