import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PricingTable } from "@/components/sections/PricingTable";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pilih paket yang sesuai untuk bisnis Anda. Dari free tier hingga enterprise solution dengan fitur lengkap."
};

export default function PricingPage() {
  return (
    <>
      <PricingTable />
      <CTASection
        title="Siap Membangun Sistem Akuisisi Klien yang Predictable?"
        description="Konsultasikan kebutuhan bisnis Anda. Kami akan bantu rancang infrastruktur yang tepat."
      />
    </>
  );
}
