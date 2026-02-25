"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";

type TimelineItem = { phase: string; detail: string[] };

const timelineByLanguage: Record<Language, TimelineItem[]> = {
  id: [
    {
      phase: "Phase 01 - Strategic Targeting Engine",
      detail: [
        "AI memetakan niche ideal dan menyusun ICP (Ideal Client Profile).",
        "Segmentasi dilakukan berdasarkan industri, ukuran bisnis, lokasi, dan aktivitas digital.",
        "Setiap akun diberi scoring potensi agar prioritas outreach tidak acak."
      ]
    },
    {
      phase: "Phase 02 - AI Lead Hunter",
      detail: [
        "Sistem mengumpulkan prospek sesuai parameter dari fase targeting.",
        "AI menganalisis profil digital dan sinyal kebutuhan bisnis.",
        "Seluruh data prospek disimpan otomatis ke CRM.",
        "Target volume standar: 500-1.000 prospek per bulan."
      ]
    },
    {
      phase: "Phase 03 - AI Outreach & Conversation Engine",
      detail: [
        "AI membuka dialog natural: observasi spesifik, insight ringan, lalu pertanyaan terbuka.",
        "Jika prospect bertanya harga: AI menggali kebutuhan sebelum framing penawaran.",
        "Jika prospect tertarik: AI mengirim studi kasus relevan.",
        "Jika prospect diam: AI memindahkan ke jalur follow up otomatis."
      ]
    },
    {
      phase: "Phase 04 - Follow Up Automation (Day 3, 7, 14, 60-90)",
      detail: [
        "Follow up terjadwal berjalan di hari ke-3, ke-7, dan ke-14.",
        "Reminder pasif dilanjutkan di hari ke-60 sampai ke-90.",
        "Setiap follow up membawa nilai baru: insight, studi kasus, informasi industri, atau update relevan."
      ]
    },
    {
      phase: "Phase 05 - Qualification & Escalation",
      detail: [
        "AI mengklasifikasikan prospect menjadi Hot, Warm, atau Cold.",
        "Sinyal Hot Lead meliputi pertanyaan timeline, proposal, atau budget.",
        "Hot lead otomatis dieskalasi ke tim closing agar momentum tidak hilang."
      ]
    },
    {
      phase: "Phase 06 - Performance Dashboard",
      detail: [
        "Dashboard menampilkan total prospect added dan outreach sent.",
        "Dashboard melacak response rate, meeting booked, conversion rate, dan revenue generated.",
        "Dashboard menampilkan top performing industries dan script performance analysis."
      ]
    }
  ],
  en: [
    {
      phase: "Phase 01 - Strategic Targeting Engine",
      detail: [
        "AI maps your ideal niche and builds an Ideal Client Profile (ICP).",
        "Segmentation is built by industry, company size, location, and digital activity.",
        "Each account receives a potential score so outreach priorities stay focused."
      ]
    },
    {
      phase: "Phase 02 - AI Lead Hunter",
      detail: [
        "The system gathers prospects based on targeting parameters.",
        "AI analyzes digital profiles and identifies demand signals.",
        "Prospect data is automatically synced into CRM.",
        "Typical monthly volume: 500-1,000 prospects."
      ]
    },
    {
      phase: "Phase 03 - AI Outreach & Conversation Engine",
      detail: [
        "AI starts natural conversations with specific observations, light insights, and open questions.",
        "If pricing is asked: AI clarifies context before framing offer.",
        "If intent is high: AI sends relevant case evidence.",
        "If no response: AI moves lead into automated follow-up."
      ]
    },
    {
      phase: "Phase 04 - Follow-Up Automation (Day 3, 7, 14, 60-90)",
      detail: [
        "Follow-ups run on day 3, day 7, and day 14.",
        "Passive reminders continue at day 60 to day 90.",
        "Each follow-up delivers value: insights, case proof, or relevant updates."
      ]
    },
    {
      phase: "Phase 05 - Qualification & Escalation",
      detail: [
        "AI classifies leads into Hot, Warm, and Cold.",
        "Hot lead signals include timeline, proposal, and budget questions.",
        "Hot leads are automatically escalated to your closing team."
      ]
    },
    {
      phase: "Phase 06 - Performance Dashboard",
      detail: [
        "Dashboard tracks prospect volume and outreach output.",
        "It reports response rate, booked meetings, conversion rate, and revenue impact.",
        "It highlights top-performing industries and script performance."
      ]
    }
  ],
  zh: [
    {
      phase: "阶段 01 - 战略定向引擎",
      detail: [
        "AI 识别理想细分市场并构建 ICP（理想客户画像）。",
        "系统按行业、规模、地区和数字行为进行分层。",
        "每个账户都会获得潜力评分，以便优先触达。"
      ]
    },
    {
      phase: "阶段 02 - AI 线索猎取",
      detail: [
        "系统按定向参数持续采集潜在线索。",
        "AI 分析数字画像并识别需求信号。",
        "线索数据自动同步至 CRM。",
        "典型月规模：500-1,000 条线索。"
      ]
    },
    {
      phase: "阶段 03 - AI 外呼与会话引擎",
      detail: [
        "AI 通过具体观察、轻量洞察和开放问题发起自然对话。",
        "当客户询价时，先澄清需求再给出方案框架。",
        "当意向提升时，自动发送相关案例证明。",
        "若无回复，则自动进入跟进流程。"
      ]
    },
    {
      phase: "阶段 04 - 自动跟进（第 3/7/14/60-90 天）",
      detail: [
        "系统在第 3、7、14 天执行主动跟进。",
        "第 60-90 天执行被动唤醒提醒。",
        "每次跟进都提供新价值：洞察、案例或行业更新。"
      ]
    },
    {
      phase: "阶段 05 - 线索分级与升级",
      detail: [
        "AI 将线索分为热、温、冷三类。",
        "热线索信号包含时间节点、方案和预算问题。",
        "热线索会自动升级到成交团队。"
      ]
    },
    {
      phase: "阶段 06 - 绩效仪表盘",
      detail: [
        "仪表盘跟踪线索总量与外呼执行量。",
        "展示回复率、预约会议、转化率与营收贡献。",
        "标记高表现行业与话术表现结果。"
      ]
    }
  ]
};

export function AIWorkflowTimeline() {
  const { t, language } = useLanguage();
  const items = timelineByLanguage[language];

  return (
    <section className="section-spacing">
      <Container>
        <Reveal>
          <h2 className="headline">{t("timeline.title")}</h2>
          <p className="subcopy mt-4 max-w-4xl">{t("timeline.description")}</p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <Reveal key={item.phase} delay={index * 70}>
              <div className="glass relative grid gap-4 p-5 md:grid-cols-[72px_1fr] md:p-6">
                <div className="relative flex items-start justify-center">
                  <span className="z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/20 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  {index !== items.length - 1 ? (
                    <span className="absolute left-1/2 top-10 h-[calc(100%+22px)] w-px -translate-x-1/2 bg-gradient-to-b from-blue-300/40 to-transparent" />
                  ) : null}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.phase}</h3>
                  <ul className="mt-3 space-y-2 text-slate-200">
                    {item.detail.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aegis-glow" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
