import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * CMS override store. The site's default copy lives in code; anything the
 * admin edits is written here as an override and deep-resolved at render.
 * Deleting data/content.json (or "Reset") returns the site to its defaults.
 *
 * TODO(infra): the JSON file lives on local disk — fine for dev and
 * self-hosting, ephemeral on serverless. Swap for a database or KV there.
 */
export type Overrides = {
  /** Flat map of content key → edited text, e.g. "home.hero.lead". */
  texts: Record<string, string>;
  /** Whole structured collections, e.g. "products" → ProductFamily[]. */
  collections: Record<string, unknown>;
  updatedAt?: string;
};

const FILE = path.join(process.cwd(), "data", "content.json");

export async function readOverrides(): Promise<Overrides> {
  try {
    const raw = JSON.parse(await fs.readFile(FILE, "utf8"));
    return {
      texts: raw.texts ?? {},
      collections: raw.collections ?? {},
      updatedAt: raw.updatedAt,
    };
  } catch {
    return { texts: {}, collections: {} };
  }
}

export async function writeOverrides(overrides: Overrides): Promise<void> {
  overrides.updatedAt = new Date().toISOString();
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(overrides, null, 2), "utf8");
}

export async function resetOverrides(): Promise<void> {
  await writeOverrides({ texts: {}, collections: {} });
}

/** Set a dot-path inside an object/array, e.g. ["0","compounds","1","value"]. */
export function setPath(target: unknown, segments: string[], value: string): void {
  let cursor = target as Record<string, unknown>;
  for (const seg of segments.slice(0, -1)) {
    cursor = cursor[seg] as Record<string, unknown>;
    if (cursor == null) return;
  }
  cursor[segments[segments.length - 1]] = value;
}
