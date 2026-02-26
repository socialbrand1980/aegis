"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ComingSoonPage() {
  const { t } = useLanguage();

  return (
    <section className="section-spacing pt-[calc(10.5rem+env(safe-area-inset-top))] sm:pt-32 md:pt-20">
      <Container className="flex flex-col items-center">
        <Reveal>
          <Badge className="border-blue-300/25 bg-blue-400/10 text-blue-100">{t("comingSoon.badge")}</Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {t("comingSoon.title1")}
            <span className="mt-2 block bg-gradient-to-r from-aegis-accent to-blue-400 bg-clip-text text-transparent">
              {t("comingSoon.title2")}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-300 md:text-lg">
            {t("comingSoon.description")}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="secondary" size="lg">
              {t("comingSoon.backHome")}
            </Button>
            <Button href="/book-demo" size="lg">
              {t("comingSoon.getNotified")}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            <div className="surface p-6 text-center">
              <div className="text-3xl font-semibold text-aegis-glow">{t("comingSoon.launch")}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">Launch</div>
            </div>
            <div className="surface p-6 text-center">
              <div className="text-3xl font-semibold text-aegis-glow">{t("comingSoon.features")}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">Features</div>
            </div>
            <div className="surface p-6 text-center">
              <div className="text-3xl font-semibold text-aegis-glow">{t("comingSoon.experience")}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">Experience</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-400">
              {t("comingSoon.ctaText")}{" "}
              <Link href="/book-demo" className="text-aegis-glow underline-offset-4 hover:underline">
                {t("comingSoon.ctaLink")}
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
