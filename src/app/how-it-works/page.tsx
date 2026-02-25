import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { HowItWorksSteps } from "@/components/sections/HowItWorksSteps";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Proses implementasi Aegis AI dari discovery hingga reporting dengan timeline 30-90 hari."
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksSteps />
      <CTASection
        title="Implementasi Terstruktur dari Hari Pertama"
        description="Setiap fase punya outcome jelas sehingga tim kamu bisa bergerak cepat tanpa kehilangan kontrol kualitas."
      />
    </>
  );
}
