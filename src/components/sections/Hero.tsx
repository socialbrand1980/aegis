"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const trustIndicators = [t("hero.trust1"), t("hero.trust2"), t("hero.trust3")];
  const stats = [
    { label: t("hero.stat1"), value: "500-1,000" },
    { label: t("hero.stat2"), value: "+11-14%" },
    { label: t("hero.stat3"), value: "Real-time" }
  ];

  return (
    <section className="section-spacing pt-20 md:pt-28">
      <Container className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Badge className="border-blue-300/25 bg-blue-400/10 text-blue-100">{t("hero.badge")}</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {t("hero.title1")}
            <span className="mt-2 block bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>
          <p className="subcopy mt-6 max-w-2xl">{t("hero.description")}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/book-demo" size="lg">
              {t("hero.ctaPrimary")}
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              {t("hero.ctaSecondary")}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aegis-glow">{t("hero.trustTitle")}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200 md:text-base">
              {trustIndicators.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-aegis-glow" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="surface p-4">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
