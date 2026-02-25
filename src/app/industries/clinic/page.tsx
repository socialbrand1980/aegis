import type { Metadata } from "next";
import { industries } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industry: Clinic",
  description: "Optimasi inquiry-to-booking untuk klinik dengan AI conversation flow yang konsisten."
};

export default function ClinicPage() {
  const industry = industries.find((item) => item.slug === "clinic");
  if (!industry) return null;

  return (
    <>
      <section className="section-spacing">
        <Container className="grid gap-4 md:grid-cols-3">
          <Card>
            <h1 className="text-2xl font-bold text-white">{industry.title}: Problem</h1>
            <p className="mt-3 text-slate-300">{industry.problem}</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-white">How Aegis Solves</h2>
            <p className="mt-3 text-slate-300">{industry.solution}</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-white">Expected Outcomes</h2>
            <ul className="mt-3 space-y-2 text-slate-300">
              {industry.outcomes.map((outcome) => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
