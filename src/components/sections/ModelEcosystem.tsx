"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

const modelLogos = [
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Claude", src: "/logos/claude.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "Qwen", src: "/logos/qwen.svg" },
  { name: "DeepSeek", src: "/logos/deepseek.svg" }
] as const;

export function ModelEcosystem() {
  const { t } = useLanguage();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="section-spacing">
      <Container>
        <div className="glass p-6 sm:p-8 lg:p-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{t("model.kicker")}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("model.title")}</h2>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">{t("model.description")}</p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <li className="surface p-4">{t("model.b1")}</li>
              <li className="surface p-4">{t("model.b2")}</li>
              <li className="surface p-4">{t("model.b3")}</li>
              <li className="surface p-4">{t("model.b4")}</li>
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {modelLogos.map((logo) => (
                <div key={logo.name} className="surface flex min-h-20 items-center justify-center gap-2 p-4">
                  <Image
                    src={`${basePath}${logo.src}`}
                    alt={`${logo.name} logo`}
                    width={28}
                    height={28}
                    className="h-7 w-7 text-white"
                  />
                  <span className="text-sm font-medium text-slate-200">{logo.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
