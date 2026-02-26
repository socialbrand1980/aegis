"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export function CTASection({
  title,
  description,
  buttonLabel
}: CTASectionProps) {
  const { language } = useLanguage();
  const defaults = {
    id: {
      title: "Stop Mengejar Klien. Bangun Sistem yang Datangkan Mereka.",
      description: "Sesi strategis 30 menit. Tanpa kewajiban.",
      buttonLabel: "Book Strategic Consultation"
    },
    en: {
      title: "Stop Chasing Clients. Build a System That Finds Them.",
      description: "30-minute executive session. No obligation.",
      buttonLabel: "Book a Strategic Consultation"
    },
    zh: {
      title: "停止被动找客户，建立能主动获客的系统。",
      description: "30 分钟高管咨询，无强制承诺。",
      buttonLabel: "预约战略咨询"
    }
  }[language];

  return (
    <section className="section-spacing">
      <Container>
        <Reveal>
          <div className="glass overflow-hidden p-8 text-center md:p-14">
            <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title ?? defaults.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">{description ?? defaults.description}</p>
            <div className="mt-8">
              <Button href="/book-demo" size="lg">
                {buttonLabel ?? defaults.buttonLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
