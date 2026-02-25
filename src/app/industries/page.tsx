import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";

export const metadata: Metadata = {
  title: "Industries",
  description: "Aegis AI dirancang untuk agency, consultant, legal, clinic, interior, dan software house."
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesGrid />
      <CTASection title="Need an Industry-Specific Flow?" description="Kami bantu rancang alur conversation dan pipeline yang sesuai karakter pasar kamu." />
    </>
  );
}
