"use client";

import { constantsByLanguage } from "@/lib/i18n-constants";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CaseStudiesPage() {
  const { language, t } = useLanguage();
  const constants = constantsByLanguage[language];

  return (
    <>
      <section className="section-spacing pt-16">
        <Container>
          <h1 className="text-4xl font-bold text-white">{t("caseStudiesPage.title")}</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            {t("caseStudiesPage.description")}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {constants.caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
