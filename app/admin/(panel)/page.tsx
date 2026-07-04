import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getOverrides, collection } from "@/lib/cms/content";
import { productFamilies } from "@/lib/products";
import { resetAllContent } from "@/app/admin/actions";

export default async function AdminDashboard() {
  const overrides = await getOverrides();
  const products = await collection("products", productFamilies);
  const textEdits = Object.keys(overrides.texts).length;
  const collectionEdits = Object.keys(overrides.collections).length;
  const updated = overrides.updatedAt
    ? new Date(overrides.updatedAt).toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Never — site is running on code defaults";

  const cards = [
    { label: "Text overrides", value: String(textEdits) },
    { label: "Collections edited", value: String(collectionEdits) },
    { label: "Product families", value: String(products.length) },
  ];

  const shortcuts = [
    {
      href: "/admin/editor",
      title: "Visual editor",
      body: "Click any text on the live site and rewrite it in place — headlines, leads, product copy.",
    },
    {
      href: "/admin/products",
      title: "Products",
      body: "Add, remove, and reorder product families; edit compounds and applications.",
    },
    {
      href: "/admin/settings",
      title: "Site settings",
      body: "Contact details, coordinates, and footer copy used across the site.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-8 py-12 lg:px-12">
      <p className="text-eyebrow text-primary">Dashboard</p>
      <h1 className="text-display mt-4">Content studio.</h1>
      <p className="text-lead mt-4 max-w-2xl text-muted-foreground">
        Everything the site says is editable from here. Edits are stored as
        overrides on top of the code defaults and publish instantly.
      </p>

      <dl className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className="bg-card p-6">
            <dd className="text-display font-extrabold">{c.value}</dd>
            <dt className="text-eyebrow mt-2 text-muted-foreground">{c.label}</dt>
          </div>
        ))}
      </dl>
      <p className="text-data mt-4 text-muted-foreground">Last published: {updated}</p>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
        {shortcuts.map((s) => (
          <Link key={s.href} href={s.href} className="group bg-card p-6 transition-colors hover:bg-secondary">
            <div className="flex items-start justify-between">
              <h2 className="text-title font-semibold">{s.title}</h2>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Link>
        ))}
      </div>

      <details className="mt-16 border border-border">
        <summary className="text-eyebrow cursor-pointer px-6 py-4 text-muted-foreground">
          Danger zone
        </summary>
        <div className="border-t border-border px-6 py-6">
          <p className="text-sm text-muted-foreground">
            Discard every override — text edits, product changes, settings — and
            return the site to its code defaults. This cannot be undone.
          </p>
          <form action={resetAllContent} className="mt-4">
            <button
              type="submit"
              className="border border-red-700 px-5 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-700 hover:text-background"
            >
              Reset all content
            </button>
          </form>
        </div>
      </details>
    </div>
  );
}
