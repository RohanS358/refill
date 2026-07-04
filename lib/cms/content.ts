import "server-only";
import { cache } from "react";
import { readOverrides } from "./store";

/** One read per request; server actions revalidate after writing. */
export const getOverrides = cache(readOverrides);

/** Resolve an editable text: admin override if present, else the code default. */
export async function text(key: string, fallback: string): Promise<string> {
  const overrides = await getOverrides();
  return overrides.texts[key] ?? fallback;
}

/** Resolve an editable collection (products, …) the same way. */
export async function collection<T>(name: string, fallback: T): Promise<T> {
  const overrides = await getOverrides();
  return (overrides.collections[name] as T) ?? fallback;
}
