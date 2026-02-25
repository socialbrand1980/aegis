"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";

const metricsByLanguage: Record<Language, string[]> = {
  id: [
    "Total prospek masuk",
    "Outreach terkirim",
    "Rasio balasan",
    "Meeting terjadwal",
    "Rasio konversi",
    "Revenue dihasilkan",
    "Industri performa terbaik",
    "Analisis performa skrip"
  ],
  en: [
    "Total prospects added",
    "Outreach sent",
    "Response rate",
    "Meetings booked",
    "Conversion rate",
    "Revenue generated",
    "Top performing industries",
    "Script performance analysis"
  ],
  zh: [
    "新增线索总量",
    "已发送外呼",
    "回复率",
    "已预约会议",
    "转化率",
    "已产生营收",
    "高表现行业",
    "话术表现分析"
  ]
};

export function DashboardPreview() {
  const { t, language } = useLanguage();
  const metrics = metricsByLanguage[language];

  return (
    <section className="section-spacing">
      <Container>
        <Reveal>
          <div className="glass p-7 md:p-10">
            <h2 className="headline">{t("dashboard.title")}</h2>
            <p className="subcopy mt-4 max-w-2xl">{t("dashboard.description")}</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item, index) => (
                <Reveal key={item} delay={index * 50}>
                  <div className="surface h-full p-4">
                    <p className="text-sm text-slate-100">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
