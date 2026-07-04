import { collection } from "@/lib/cms/content";
import { productFamilies } from "@/lib/products";
import { ProductsEditor } from "@/components/cms/products-editor";

export default async function AdminProductsPage() {
  const families = await collection("products", productFamilies);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12 lg:px-12">
      <p className="text-eyebrow text-primary">Products</p>
      <h1 className="text-display mt-4">Product catalogue.</h1>
      <p className="text-lead mt-4 max-w-2xl text-muted-foreground">
        These families drive the home grid and the products page. Reorder with
        the arrows; publishing replaces the live catalogue immediately.
      </p>
      <ProductsEditor initial={families} />
    </div>
  );
}
