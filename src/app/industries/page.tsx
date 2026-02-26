"use client";

import { constantsByLanguage } from "@/lib/i18n-constants";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function IndustriesPage() {
  const { language, t } = useLanguage();
  const constants = constantsByLanguage[language];

  return (
    <>
      <IndustriesGrid />
      <CTASection
        title={t("industries.ctaTitle")}
        description={t("industries.ctaDescription")}
      />
    </>
  );
}

function IndustriesGrid() {
  const { language, t } = useLanguage();
  const constants = constantsByLanguage[language];

  return (
    <section className="section-spacing">
      <Container>
        <h2 className="text-3xl font-bold text-white md:text-4xl">{t("industriesGrid.title")}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {constants.industries.map((industry) => (
            <a key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="h-full hover:border-aegis-glow/50 hover:bg-white/15">
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{industry.problem}</p>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
