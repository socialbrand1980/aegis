"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";

type Layer = { title: string; description: string; output: string };

const layersByLanguage: Record<Language, Layer[]> = {
  id: [
    {
      title: "Layer 1 - Strategic Targeting Engine",
      description: "Menentukan niche ideal, ICP, segmentasi industri/ukuran/lokasi/aktivitas digital, serta scoring potensi lead.",
      output: "Output: database prospek terkurasi setiap bulan."
    },
    {
      title: "Layer 2 - AI Lead Hunter",
      description: "Mengumpulkan prospek sesuai parameter, menganalisis profil digital, identifikasi kebutuhan, dan sinkron ke CRM.",
      output: "Target rata-rata: 500-1.000 prospek per bulan."
    },
    {
      title: "Layer 3 - AI Outreach & Conversation Engine",
      description: "AI memulai percakapan dengan observasi spesifik, insight ringan, dan pertanyaan terbuka untuk dialog natural.",
      output: "Decision logic berbasis intent untuk setiap balasan prospect."
    },
    {
      title: "Layer 4 - AI Follow Up Automation",
      description: "Follow up terjadwal di hari ke-3, ke-7, ke-14, lalu reminder pasif 60-90 hari dengan konten bernilai.",
      output: "Setiap follow up berisi insight, studi kasus, atau update relevan."
    },
    {
      title: "Layer 5 - Qualification & Escalation System",
      description: "Klasifikasi hot/warm/cold lead berdasarkan sinyal intent dan eskalasi otomatis ke tim closing.",
      output: "Hot lead langsung diteruskan ke tim Anda."
    }
  ],
  en: [
    {
      title: "Layer 1 - Strategic Targeting Engine",
      description: "Defines ideal niche, ICP, and segment clusters by industry, company size, location, and digital activity.",
      output: "Output: curated prospect database every month."
    },
    {
      title: "Layer 2 - AI Lead Hunter",
      description: "Collects prospects by parameters, analyzes digital profiles, identifies need signals, and syncs data into CRM.",
      output: "Typical volume: 500-1,000 prospects per month."
    },
    {
      title: "Layer 3 - AI Outreach & Conversation Engine",
      description: "Starts natural conversations using specific observations, light insight, and open-ended questions.",
      output: "Intent-based decision logic for each response."
    },
    {
      title: "Layer 4 - AI Follow-Up Automation",
      description: "Runs follow-up sequences on day 3, 7, 14, then passive reminders at day 60-90 with value-first content.",
      output: "Every follow-up carries insight, case evidence, or relevant updates."
    },
    {
      title: "Layer 5 - Qualification & Escalation System",
      description: "Classifies leads into hot, warm, and cold tiers and escalates high-intent leads to closing teams.",
      output: "Hot leads are routed directly to your sales team."
    }
  ],
  zh: [
    {
      title: "第 1 层 - 战略定向引擎",
      description: "定义理想细分市场、ICP，并按行业、规模、地区和数字行为进行分层筛选。",
      output: "输出：每月高质量线索库。"
    },
    {
      title: "第 2 层 - AI 线索猎取",
      description: "按参数采集线索，分析数字画像，识别需求信号，并同步到 CRM。",
      output: "典型规模：每月 500-1,000 条线索。"
    },
    {
      title: "第 3 层 - AI 外呼与会话引擎",
      description: "通过具体观察、轻量洞察和开放问题启动自然对话。",
      output: "对每条回复执行意图决策逻辑。"
    },
    {
      title: "第 4 层 - AI 跟进自动化",
      description: "在第 3/7/14 天执行跟进，并在第 60-90 天进行被动唤醒，内容以价值为先。",
      output: "每次跟进都提供新价值：洞察、案例或相关更新。"
    },
    {
      title: "第 5 层 - 线索分级与升级",
      description: "将线索划分为热/温/冷，并将高意向线索自动升级给成交团队。",
      output: "高意向线索直接流转到销售团队。"
    }
  ]
};

export function SolutionOverview() {
  const { t, language } = useLanguage();
  const layers = layersByLanguage[language];

  return (
    <section className="section-spacing">
      <Container>
        <Reveal>
          <h2 className="headline">{t("solution.title")}</h2>
          <p className="subcopy mt-4 max-w-3xl">{t("solution.description")}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((layer, index) => (
            <Reveal key={layer.title} delay={index * 70}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{layer.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-aegis-glow">{layer.output}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
