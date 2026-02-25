"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProblemSection() {
  const { t } = useLanguage();
  const coreProblems = [t("problem.p1"), t("problem.p2"), t("problem.p3"), t("problem.p4")];
  const coreImpacts = [t("problem.i1"), t("problem.i2"), t("problem.i3"), t("problem.i4")];

  return (
    <section className="section-spacing">
      <Container>
        <Reveal>
          <h2 className="headline max-w-4xl">{t("problem.title")}</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal delay={80}>
            <Card>
              <h3 className="text-xl font-semibold text-white">{t("problem.currentReality")}</h3>
              <ul className="mt-5 space-y-2.5 text-slate-200">
                {coreProblems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={160}>
            <Card>
              <h3 className="text-xl font-semibold text-white">{t("problem.businessImpact")}</h3>
              <ul className="mt-5 space-y-2.5 text-slate-200">
                {coreImpacts.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-aegis-glow">{t("problem.note")}</p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
