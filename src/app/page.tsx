import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionOverview } from "@/components/sections/SolutionOverview";
import { AIWorkflowTimeline } from "@/components/sections/AIWorkflowTimeline";
import { CaseStudiesShowcase } from "@/components/sections/CaseStudiesShowcase";
import { HomeCaseStudiesHeader } from "@/components/sections/HomeCaseStudiesHeader";
import { ModelEcosystem } from "@/components/sections/ModelEcosystem";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Aegis AI adalah client acquisition infrastructure untuk service businesses yang ingin growth secara terukur dan predictable."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionOverview />
      <ModelEcosystem />
      <AIWorkflowTimeline />
      <DashboardPreview />

      <section className="section-spacing">
        <Container>
          <HomeCaseStudiesHeader />
          <CaseStudiesShowcase />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
