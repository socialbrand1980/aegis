"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HowItWorksSteps() {
  const { t } = useLanguage();

  const steps = [
    { title: t("howItWorksSteps.step1Title"), detail: t("howItWorksSteps.step1Detail") },
    { title: t("howItWorksSteps.step2Title"), detail: t("howItWorksSteps.step2Detail") },
    { title: t("howItWorksSteps.step3Title"), detail: t("howItWorksSteps.step3Detail") },
    { title: t("howItWorksSteps.step4Title"), detail: t("howItWorksSteps.step4Detail") },
    { title: t("howItWorksSteps.step5Title"), detail: t("howItWorksSteps.step5Detail") }
  ];

  return (
    <section className="section-spacing pt-16">
      <Container>
        <h1 className="text-4xl font-bold text-white">{t("howItWorksSteps.title")}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{t("howItWorksSteps.description")}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-aegis-glow">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-2 text-slate-300">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
