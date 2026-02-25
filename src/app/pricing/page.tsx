import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PricingTable } from "@/components/sections/PricingTable";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Setup gratis, subscription Rp50.000.000/tahun, dan maintenance Rp2.500.000/bulan."
};

export default function PricingPage() {
  return (
    <>
      <PricingTable />
      <CTASection
        title="Integrate your bussines with Aegis AI"
        description="With just one click. Aegis can run your bussines."
      />
    </>
  );
}
