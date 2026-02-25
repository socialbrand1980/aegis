"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";

type ProductContent = {
  featureCards: { title: string; description: string; visual: "form" | "chat" | "chart" }[];
  workflowSteps: { title: string; description: string }[];
  pipelineColumns: string[];
  screenLabel: string;
  dashboardTitle: string;
  kpis: { label: string; value: string }[];
  weeklyTitle: string;
  weeklyDetail: string;
  topIndustryLabel: string;
  topIndustryValue: string;
  dealProbLabel: string;
  dealProbValue: string;
  setupIndustry: string;
  setupIcp: string;
  setupTone: string;
  setupButton: string;
  chat1: string;
  chat2: string;
  chat3: string;
  chat4: string;
  convTitle: string;
  convDetail: string;
  metricChips: string[];
  pipelineHint1: string;
  pipelineHint2: string;
};

const contentByLanguage: Record<Language, ProductContent> = {
  id: {
    featureCards: [
      {
        title: "AI Setup Engine",
        description:
          "Pilih industri, profil target pelanggan, gaya komunikasi, dan penawaran. Aegis lalu menyusun alur outreach dan automasi secara otomatis.",
        visual: "form"
      },
      {
        title: "Live Conversation Intelligence",
        description:
          "Aegis merespons secara real-time, mengkualifikasi intent lead, dan meneruskan prospek ber-intent tinggi ke tim Anda dengan aturan yang jelas.",
        visual: "chat"
      },
      {
        title: "Performance Analytics",
        description: "Pantau volume lead, reply rate, meeting terjadwal, dan performa konversi dalam satu dashboard.",
        visual: "chart"
      }
    ],
    workflowSteps: [
      { title: "Step 1: Configure Business Profile", description: "Atur industri, lokasi target, dan nilai deal rata-rata." },
      { title: "Step 2: Generate AI Workflow", description: "Aegis membuat skrip outreach, urutan follow-up, dan logika kualifikasi." },
      { title: "Step 3: Monitor & Optimize", description: "Tinjau metrik performa dan optimalkan pesan berdasarkan data langsung." }
    ],
    pipelineColumns: ["New Lead", "Contacted", "Qualified", "Meeting Scheduled", "Closed Won"],
    screenLabel: "Layar Prototype",
    dashboardTitle: "Preview Dashboard Aegis",
    kpis: [
      { label: "Outreach Terkirim", value: "1.284" },
      { label: "Rasio Balasan", value: "13,8%" },
      { label: "Lead Terkualifikasi", value: "96" }
    ],
    weeklyTitle: "Tren Performa Mingguan",
    weeklyDetail: "Rasio balasan: Minggu 1 (9,2%), Minggu 2 (11,4%), Minggu 3 (13,8%)",
    topIndustryLabel: "Industri Teratas",
    topIndustryValue: "Agensi Digital",
    dealProbLabel: "Probabilitas Deal",
    dealProbValue: "Rata-rata 72%",
    setupIndustry: "Industri: Firma Hukum",
    setupIcp: "ICP: Pemilik UKM, 10-50 staf",
    setupTone: "Gaya Bahasa: Profesional, konsultatif",
    setupButton: "Buat Workflow",
    chat1: "Halo, kami membantu klinik meningkatkan booking berkualitas.",
    chat2: "Bagaimana sistem Anda mengatur jadwal follow-up?",
    chat3: "Follow-up berjalan di hari 3, 7, 14, lalu nurture 60 hari.",
    chat4: "Baik. Bisa lihat contoh workflow besok?",
    convTitle: "Snapshot Konversi",
    convDetail: "Lead → Balasan: 13,8% • Balasan → Meeting: 24,1%",
    metricChips: ["Lead 1.284", "Meeting 118", "Deal Menang 23"],
    pipelineHint1: "2 lead baru hari ini",
    pipelineHint2: "1 lead prioritas tinggi"
  },
  en: {
    featureCards: [
      {
        title: "AI Setup Engine",
        description:
          "Choose industry, target customer profile, communication tone, and offer. Aegis then builds your outreach and automation flow automatically.",
        visual: "form"
      },
      {
        title: "Live Conversation Intelligence",
        description:
          "Aegis responds in real time, qualifies lead intent, and escalates high-intent prospects to your team using clear rules.",
        visual: "chat"
      },
      {
        title: "Performance Analytics",
        description: "Track lead volume, response rate, booked meetings, and conversion performance in one dashboard.",
        visual: "chart"
      }
    ],
    workflowSteps: [
      { title: "Step 1: Configure Business Profile", description: "Set your industry, target region, and average deal value." },
      { title: "Step 2: Generate AI Workflow", description: "Aegis generates outreach scripts, follow-up sequence, and qualification logic." },
      { title: "Step 3: Monitor & Optimize", description: "Review performance metrics and optimize messaging with live data." }
    ],
    pipelineColumns: ["New Lead", "Contacted", "Qualified", "Meeting Scheduled", "Closed Won"],
    screenLabel: "Prototype Screen",
    dashboardTitle: "Aegis Dashboard Preview",
    kpis: [
      { label: "Outreach Sent", value: "1,284" },
      { label: "Response Rate", value: "13.8%" },
      { label: "Qualified Leads", value: "96" }
    ],
    weeklyTitle: "Weekly Performance Trend",
    weeklyDetail: "Response rate: Week 1 (9.2%), Week 2 (11.4%), Week 3 (13.8%)",
    topIndustryLabel: "Top Industry",
    topIndustryValue: "Digital Agency",
    dealProbLabel: "Deal Probability",
    dealProbValue: "Average 72%",
    setupIndustry: "Industry: Legal Firm",
    setupIcp: "ICP: SME owners, 10-50 staff",
    setupTone: "Tone: Professional, consultative",
    setupButton: "Generate Workflow",
    chat1: "Hi, we help clinics improve qualified bookings.",
    chat2: "How does your system handle follow-up timing?",
    chat3: "Follow-up runs on day 3, 7, 14, plus 60-day nurture.",
    chat4: "Great. Can we review a sample workflow tomorrow?",
    convTitle: "Conversion Snapshot",
    convDetail: "Lead → Response: 13.8% • Response → Meeting: 24.1%",
    metricChips: ["Leads 1,284", "Meetings 118", "Won Deals 23"],
    pipelineHint1: "2 new leads today",
    pipelineHint2: "1 high-priority lead"
  },
  zh: {
    featureCards: [
      {
        title: "AI 设置引擎",
        description: "选择行业、目标客户画像、沟通语气和报价，Aegis 将自动生成外呼与自动化流程。",
        visual: "form"
      },
      {
        title: "实时会话智能",
        description: "Aegis 实时回复并判断线索意向，再按规则把高意向客户升级给您的团队。",
        visual: "chat"
      },
      {
        title: "绩效分析",
        description: "在同一仪表盘中跟踪线索数量、回复率、会议预约和转化表现。",
        visual: "chart"
      }
    ],
    workflowSteps: [
      { title: "步骤 1：配置业务画像", description: "设置行业、目标区域和平均客单值。" },
      { title: "步骤 2：生成 AI 工作流", description: "Aegis 自动生成外呼脚本、跟进序列与分级逻辑。" },
      { title: "步骤 3：监控与优化", description: "基于实时数据查看绩效并优化沟通内容。" }
    ],
    pipelineColumns: ["新线索", "已联系", "已筛选", "已约会议", "已成交"],
    screenLabel: "原型界面",
    dashboardTitle: "Aegis 仪表盘预览",
    kpis: [
      { label: "已发送外呼", value: "1,284" },
      { label: "回复率", value: "13.8%" },
      { label: "已筛选线索", value: "96" }
    ],
    weeklyTitle: "周度表现趋势",
    weeklyDetail: "回复率：第 1 周 9.2% • 第 2 周 11.4% • 第 3 周 13.8%",
    topIndustryLabel: "最佳行业",
    topIndustryValue: "数字营销机构",
    dealProbLabel: "成交概率",
    dealProbValue: "平均 72%",
    setupIndustry: "行业：法律服务",
    setupIcp: "ICP：中小企业主，10-50 人团队",
    setupTone: "语气：专业、咨询型",
    setupButton: "生成工作流",
    chat1: "你好，我们帮助诊所提升高质量预约。",
    chat2: "你们如何安排跟进节奏？",
    chat3: "跟进在第 3、7、14 天执行，并在第 60 天继续培育。",
    chat4: "很好。明天可以看一版流程示例吗？",
    convTitle: "转化快照",
    convDetail: "线索 → 回复：13.8% • 回复 → 会议：24.1%",
    metricChips: ["线索 1,284", "会议 118", "成交 23"],
    pipelineHint1: "今日新增 2 条线索",
    pipelineHint2: "1 条高优先级线索"
  }
};

function PrototypeScreen({ variant = "dashboard" }: { variant?: "dashboard" | "setup" | "conversation" | "analytics" }) {
  const { language } = useLanguage();
  const c = contentByLanguage[language];

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a173a] p-2.5 sm:p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_88%_10%,rgba(99,102,241,0.22),transparent_30%)]" />
      <div className="relative space-y-3">
        <div className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-2 sm:px-3">
          <p className="min-w-0 truncate text-[10px] uppercase tracking-wide text-slate-200 sm:text-[11px]">{c.dashboardTitle}</p>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-blue-400/70" />
          </div>
        </div>

        {variant === "dashboard" && (
          <>
            <div className="grid grid-cols-1 gap-2 min-[440px]:grid-cols-3">
              {c.kpis.map((item) => (
                <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.04] p-2">
                  <p className="text-[11px] text-slate-200">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-md border border-white/10 bg-gradient-to-t from-blue-500/20 via-blue-400/8 to-transparent p-2">
              <p className="text-[11px] text-slate-200">{c.weeklyTitle}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-100">{c.weeklyDetail}</p>
            </div>
            <div className="grid grid-cols-1 gap-2 min-[440px]:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-2">
                <p className="text-[11px] text-slate-200">{c.topIndustryLabel}</p>
                <p className="text-xs text-white">{c.topIndustryValue}</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-2">
                <p className="text-[11px] text-slate-200">{c.dealProbLabel}</p>
                <p className="text-xs text-white">{c.dealProbValue}</p>
              </div>
            </div>
          </>
        )}

        {variant === "setup" && (
          <div className="space-y-2">
            <div className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-2 text-xs text-slate-100">{c.setupIndustry}</div>
            <div className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-2 text-xs text-slate-100">{c.setupIcp}</div>
            <div className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-2 text-xs text-slate-100">{c.setupTone}</div>
            <div className="rounded-md bg-blue-500/30 px-2 py-2 text-xs font-semibold text-white">{c.setupButton}</div>
          </div>
        )}

        {variant === "conversation" && (
          <div className="space-y-2">
            <div className="ml-auto w-2/3 rounded-lg bg-blue-500/30 px-2 py-1.5 text-xs text-white break-words">{c.chat1}</div>
            <div className="w-3/4 rounded-lg bg-white/12 px-2 py-1.5 text-xs text-slate-100 break-words">{c.chat2}</div>
            <div className="ml-auto w-1/2 rounded-lg bg-blue-500/30 px-2 py-1.5 text-xs text-white break-words">{c.chat3}</div>
            <div className="w-4/5 rounded-lg bg-white/12 px-2 py-1.5 text-xs text-slate-100 break-words">{c.chat4}</div>
          </div>
        )}

        {variant === "analytics" && (
          <>
            <div className="rounded-md border border-white/10 bg-gradient-to-r from-blue-500/15 via-indigo-400/15 to-blue-500/15 p-2">
              <p className="text-[11px] text-slate-200">{c.convTitle}</p>
              <p className="mt-1 text-xs text-white">{c.convDetail}</p>
            </div>
            <div className="grid grid-cols-1 gap-2 min-[440px]:grid-cols-3">
              {c.metricChips.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-1.5 text-[11px] text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#09122f]/50 to-transparent" />
    </div>
  );
}

function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(120deg,rgba(59,130,246,0.5),rgba(46,78,255,0.25),rgba(147,197,253,0.45),rgba(59,130,246,0.5))] bg-[length:200%_200%] blur-[0.5px]"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08122e] p-3 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
        <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <div className="ml-1 min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
            <span className="block truncate">app.aegis-ai.io/dashboard</span>
          </div>
        </div>

        <PrototypeScreen variant="dashboard" />
      </div>
    </motion.div>
  );
}

function FeatureVisual({ type }: { type: "form" | "chat" | "chart" }) {
  if (type === "form") return <PrototypeScreen variant="setup" />;
  if (type === "chat") return <PrototypeScreen variant="conversation" />;
  return <PrototypeScreen variant="analytics" />;
}

function SectionCta() {
  const { t } = useLanguage();

  return (
    <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{t("product.sectionCtaTitle")}</p>
      <p className="mt-2 text-slate-200">{t("product.sectionCtaDesc")}</p>
      <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
        <Button href="/book-demo" className="w-full sm:w-auto">{t("product.ctaPrimary")}</Button>
        <Button href="/how-it-works" variant="secondary" className="w-full sm:w-auto">{t("product.ctaSecondary")}</Button>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const { t, language } = useLanguage();
  const c = contentByLanguage[language];

  return (
    <div className="overflow-x-clip">
      <section className="section-spacing pt-20">
        <Container className="max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{t("product.sectionCtaTitle")}</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">{t("product.heroTitle")}</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{t("product.heroDesc")}</p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Button href="/book-demo" size="lg" className="w-full sm:w-auto">{t("product.ctaPrimary")}</Button>
                <Button href="/how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto">{t("product.ctaSecondary")}</Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl lg:max-w-none">
              <BrowserMockup />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-spacing pt-0">
        <Container className="max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {c.featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-6"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
                <div className="mt-4"><FeatureVisual type={card.visual} /></div>
              </motion.div>
            ))}
          </div>

          <SectionCta />
        </Container>
      </section>

      <section className="section-spacing pt-2">
        <Container className="max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">{t("product.interactiveTitle")}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">{t("product.interactiveDesc")}</p>
            </div>

            <div className="lg:hidden">
              <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
                {c.workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0.6, scale: 0.97 }}
                    className="min-w-[88%] snap-center rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:min-w-[82%]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{c.screenLabel} {index + 1}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                    <div className="mt-4">
                      <motion.div initial={{ opacity: 0.7, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                        <PrototypeScreen variant={index === 0 ? "setup" : index === 1 ? "conversation" : "analytics"} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden space-y-5 lg:block">
              {c.workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0.4, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:p-7"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{c.screenLabel} {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-slate-300">{step.description}</p>
                  <div className="mt-5">
                    <PrototypeScreen variant={index === 0 ? "setup" : index === 1 ? "conversation" : "analytics"} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-spacing pt-2">
        <Container className="max-w-7xl">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">{t("product.salesOsTitle")}</h2>
            <p className="mt-3 max-w-3xl text-slate-300">{t("product.salesOsDesc")}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {c.pipelineColumns.map((column) => (
                <div key={column} className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-blue-300/40 hover:shadow-[0_0_22px_rgba(59,130,246,0.2)]">
                  <p className="text-sm font-semibold text-white">{column}</p>
                  <div className="mt-3 space-y-2">
                    <div className="rounded-md bg-white/10 px-2 py-1.5 text-[11px] text-slate-100">{c.pipelineHint1}</div>
                    <div className="rounded-md bg-white/10 px-2 py-1.5 text-[11px] text-slate-100">{c.pipelineHint2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SectionCta />
        </Container>
      </section>

      <section className="section-spacing pt-2">
        <Container className="max-w-7xl">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">{t("product.controlTitle")}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{t("product.controlDesc")}</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
