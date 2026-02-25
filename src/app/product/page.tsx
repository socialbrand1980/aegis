import type { Metadata } from "next";
import { ModelEcosystem } from "@/components/sections/ModelEcosystem";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Controlled product showcase of Aegis AI dashboard prototype, featuring setup engine, conversation intelligence, analytics, and enterprise control."
};

export default function ProductPage() {
  return (
    <>
      <ProductShowcase />
      <ModelEcosystem />
    </>
  );
}
