import type { Metadata } from "next";
import { caseStudies } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Empat studi kasus implementasi Aegis AI pada agency, konsultan, interior, dan klinik estetika."
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-spacing pt-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">Industry Case Studies</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Setiap studi kasus mencakup problem, implementasi, hasil, dan insight agar bisa direplikasi pada konteks bisnis Anda.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
