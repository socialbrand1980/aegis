"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";

type SectionKey = "timeline" | "problem" | "implementation" | "results" | "insight";

type CaseData = {
  id: string;
  client: string;
  industry: string;
  timeline: string;
  workflowTimeline: { phase: string; detail: string[] }[];
  problem: string[];
  implementation: string[];
  metrics: string[];
  insight: string;
};

const caseStudiesByLanguage: Record<Language, CaseData[]> = {
  id: [
    {
      id: "agency",
      client: "Digital Marketing Agency",
      industry: "Agency",
      timeline: "Hasil 90 Hari",
      workflowTimeline: [
        { phase: "Minggu 1-2: Targeting Setup", detail: ["Menentukan target brand e-commerce & SME lokal", "Menyusun ICP untuk outreach berbasis niche"] },
        { phase: "Minggu 3-4: Lead Hunting", detail: ["Target 800 prospek per bulan", "Prioritasi akun dengan scoring"] },
        { phase: "Minggu 5-8: Outreach Personal", detail: ["Outreach personal berbasis konteks niche", "Bukan template massal"] },
        { phase: "Minggu 9-12: Follow Up + Qualification", detail: ["Follow-up otomatis day 3/7/14", "Hot lead diarahkan ke booking meeting"] }
      ],
      problem: ["Bergantung pada inbound", "Klien tidak stabil", "Sales cycle panjang"],
      implementation: ["Target e-commerce & SME", "AI hunting 800 prospek/bulan", "Outreach personal berbasis niche"],
      metrics: ["2.400 prospek", "14% reply rate", "32 meeting", "8 klien baru", "Revenue tambahan ± 180 juta"],
      insight: "Niche targeting dan studi kasus spesifik meningkatkan kualitas respon secara signifikan."
    },
    {
      id: "tax",
      client: "Konsultan Pajak",
      industry: "Consultant",
      timeline: "Hasil 4 Bulan",
      workflowTimeline: [
        { phase: "Bulan 1: Segmentasi", detail: ["Menargetkan PT/CV usia 0-2 tahun", "Segmentasi berdasarkan sektor usaha"] },
        { phase: "Bulan 2: Edukasi Outreach", detail: ["Pesan awal edukatif", "Tanpa hard selling"] },
        { phase: "Bulan 3: Follow-up", detail: ["Follow-up bertahap dengan konteks regulasi", "Meningkatkan percakapan berkualitas"] },
        { phase: "Bulan 4: Qualification", detail: ["Memprioritaskan intent tinggi", "Mengarahkan ke retainer tahunan"] }
      ],
      problem: ["Sulit menjangkau pemilik usaha", "Kompetitor banyak", "Outreach manual tidak efektif"],
      implementation: ["Segmentasi sektor usaha", "Outreach edukatif", "Workflow qualification terstruktur"],
      metrics: ["3.000 prospek", "11% reply rate", "19 klien retainer baru"],
      insight: "Pendekatan edukatif lebih efektif dibanding pendekatan penawaran langsung."
    },
    {
      id: "interior",
      client: "Interior Designer",
      industry: "Interior",
      timeline: "Hasil 6 Bulan",
      workflowTimeline: [
        { phase: "Bulan 1-2: Mapping", detail: ["Target developer dan cafe baru", "Fokus demand high-ticket"] },
        { phase: "Bulan 3-4: Contextual Outreach", detail: ["Mengangkat kebutuhan proyek baru", "Membangun trust lewat konteks visual"] },
        { phase: "Bulan 5: Follow-up 3 Tahap", detail: ["Studi visual sebagai bahan follow-up", "Meningkatkan kesiapan diskusi proposal"] },
        { phase: "Bulan 6: Escalation", detail: ["Hot lead dieskalasi ke diskusi komersial", "Prioritas ke peluang bernilai tinggi"] }
      ],
      problem: ["Bergantung pada Instagram inbound", "Tidak ada sistem follow-up", "Banyak lead hilang"],
      implementation: ["Target bisnis baru launching", "Follow-up visual", "Escalation berdasarkan intent"],
      metrics: ["4 proyek high-ticket", "Nilai proyek 250-400 juta", "ROI sistem > 8x"],
      insight: "Layanan high-ticket memerlukan nurturing yang konsisten, bukan hard selling."
    },
    {
      id: "clinic",
      client: "Klinik Estetika",
      industry: "Clinic",
      timeline: "Hasil Implementasi",
      workflowTimeline: [
        { phase: "Tahap 1: Targeting", detail: ["Memetakan beauty brand & influencer", "Fokus kolaborasi B2B"] },
        { phase: "Tahap 2: Conversation", detail: ["Membuka diskusi kolaborasi", "Bukan promosi treatment langsung"] },
        { phase: "Tahap 3: Classification", detail: ["Memilah respons berdasarkan potensi", "Fokus ke partner berpeluang tinggi"] },
        { phase: "Tahap 4: Escalation", detail: ["Mengarahkan ke pembahasan campaign", "Akselerasi eksekusi partnership"] }
      ],
      problem: ["Bergantung pada ads", "Tidak punya sistem partnership B2B", "Peluang kolaborasi terlewat"],
      implementation: ["Target partner potensial", "Workflow klasifikasi intent", "Handoff cepat ke tim"] ,
      metrics: ["12 partnership aktif", "Brand exposure meningkat", "Channel referral baru"],
      insight: "Partnership outreach yang sistematis membuka channel growth non-ads yang berkelanjutan."
    }
  ],
  en: [
    {
      id: "agency",
      client: "Digital Marketing Agency",
      industry: "Agency",
      timeline: "90-Day Results",
      workflowTimeline: [
        { phase: "Week 1-2: Targeting Setup", detail: ["Targeted e-commerce brands and local SMEs", "Built niche-specific ICP"] },
        { phase: "Week 3-4: Lead Hunting", detail: ["Targeted 800 prospects per month", "Prioritized accounts with scoring"] },
        { phase: "Week 5-8: Personalized Outreach", detail: ["Sent niche-context outreach", "Avoided mass templates"] },
        { phase: "Week 9-12: Follow-Up + Qualification", detail: ["Automated follow-up on day 3/7/14", "Escalated hot leads to booked calls"] }
      ],
      problem: ["Heavy inbound dependency", "Unstable client flow", "Long sales cycle"],
      implementation: ["E-commerce + SME targeting", "AI hunting 800 prospects/month", "Niche-based outreach playbook"],
      metrics: ["2,400 prospects", "14% reply rate", "32 meetings", "8 new clients", "~IDR 180M additional revenue"],
      insight: "Niche targeting plus relevant case proof increased response quality significantly."
    },
    {
      id: "tax",
      client: "Tax Consultant",
      industry: "Consultant",
      timeline: "4-Month Results",
      workflowTimeline: [
        { phase: "Month 1: Segmentation", detail: ["Targeted newly formed PT/CV businesses", "Segmented by business sector"] },
        { phase: "Month 2: Educational Outreach", detail: ["Used educational opening messages", "Avoided hard-selling approach"] },
        { phase: "Month 3: Follow-Up", detail: ["Rolled out staged follow-up", "Added regulation context to increase relevance"] },
        { phase: "Month 4: Qualification", detail: ["Prioritized high-intent leads", "Moved qualified leads to annual retainer pipeline"] }
      ],
      problem: ["Hard to reach owners", "Intense competition", "Manual outreach was inefficient"],
      implementation: ["Sector-based segmentation", "Educational outreach sequence", "Structured qualification workflow"],
      metrics: ["3,000 prospects", "11% reply rate", "19 new retainer clients"],
      insight: "Educational conversation strategy performed better than direct selling."
    },
    {
      id: "interior",
      client: "Interior Designer",
      industry: "Interior",
      timeline: "6-Month Results",
      workflowTimeline: [
        { phase: "Month 1-2: Mapping", detail: ["Targeted developers and newly launched cafes", "Focused on high-ticket demand"] },
        { phase: "Month 3-4: Contextual Outreach", detail: ["Positioned around new project needs", "Built trust through visual context"] },
        { phase: "Month 5: 3-Stage Follow-Up", detail: ["Used visual case materials in follow-up", "Improved proposal-readiness"] },
        { phase: "Month 6: Escalation", detail: ["Escalated hot leads to commercial discussion", "Prioritized high-value opportunities"] }
      ],
      problem: ["Relied on Instagram inbound", "No follow-up system", "Many leads were lost"],
      implementation: ["Launch-based targeting", "Visual-led nurturing", "Intent-based escalation"],
      metrics: ["4 high-ticket projects", "Project value IDR 250-400M", "System ROI > 8x"],
      insight: "High-ticket services require consistent nurturing, not hard selling."
    },
    {
      id: "clinic",
      client: "Aesthetic Clinic",
      industry: "Clinic",
      timeline: "Implementation Results",
      workflowTimeline: [
        { phase: "Stage 1: Targeting", detail: ["Mapped beauty brands and business influencers", "Focused on B2B partnership opportunities"] },
        { phase: "Stage 2: Conversation", detail: ["Opened collaboration-driven conversations", "Avoided direct treatment promotion"] },
        { phase: "Stage 3: Classification", detail: ["Classified responses by partnership potential", "Focused only on high-value partners"] },
        { phase: "Stage 4: Escalation", detail: ["Moved qualified partners to campaign planning", "Accelerated partnership activation"] }
      ],
      problem: ["Ad-dependent growth", "No structured B2B partnership system", "Missed collaboration opportunities"],
      implementation: ["Partnership-target workflow", "Intent classification logic", "Fast team handoff"],
      metrics: ["12 active partnerships", "Higher brand exposure", "New referral channel"],
      insight: "Systematic partnership outreach created a sustainable non-ads growth channel."
    }
  ],
  zh: [
    {
      id: "agency",
      client: "数字营销机构",
      industry: "Agency",
      timeline: "90 天成果",
      workflowTimeline: [
        { phase: "第 1-2 周：定向设置", detail: ["锁定电商品牌与本地中小企业", "建立细分 ICP"] },
        { phase: "第 3-4 周：线索采集", detail: ["每月目标 800 条线索", "按评分优先触达"] },
        { phase: "第 5-8 周：个性化外呼", detail: ["基于行业场景发送个性化信息", "避免批量模板"] },
        { phase: "第 9-12 周：跟进与分级", detail: ["执行第 3/7/14 天自动跟进", "将热线索升级为预约会议"] }
      ],
      problem: ["过度依赖 inbound", "客户流入不稳定", "销售周期长"],
      implementation: ["电商与中小企业定向", "AI 每月采集 800 线索", "行业化外呼流程"],
      metrics: ["2,400 条线索", "14% 回复率", "32 场会议", "8 个新客户"],
      insight: "细分定向与案例证明可显著提升回复质量。"
    },
    {
      id: "tax",
      client: "税务顾问",
      industry: "Consultant",
      timeline: "4 个月成果",
      workflowTimeline: [
        { phase: "第 1 月：市场分层", detail: ["目标为新成立企业", "按行业细分"] },
        { phase: "第 2 月：教育型外呼", detail: ["使用教育式开场", "避免强推销"] },
        { phase: "第 3 月：跟进", detail: ["分阶段跟进", "加入法规场景提升相关性"] },
        { phase: "第 4 月：分级", detail: ["优先高意向线索", "导入年费顾问管道"] }
      ],
      problem: ["难触达老板", "竞争激烈", "人工外呼效率低"],
      implementation: ["行业分层", "教育型外呼", "结构化分级流程"],
      metrics: ["3,000 条线索", "11% 回复率", "19 个年度客户"],
      insight: "教育型沟通比直接销售更有效。"
    },
    {
      id: "interior",
      client: "室内设计公司",
      industry: "Interior",
      timeline: "6 个月成果",
      workflowTimeline: [
        { phase: "第 1-2 月：线索映射", detail: ["目标为开发商与新开门店", "聚焦高客单需求"] },
        { phase: "第 3-4 月：场景外呼", detail: ["围绕新项目需求沟通", "通过视觉内容建立信任"] },
        { phase: "第 5 月：三段跟进", detail: ["用视觉案例持续跟进", "提升方案讨论意愿"] },
        { phase: "第 6 月：升级成交", detail: ["热线索升级到商务讨论", "优先高价值机会"] }
      ],
      problem: ["依赖社媒 inbound", "缺少跟进系统", "线索流失严重"],
      implementation: ["新开项目定向", "视觉驱动 nurture", "意图驱动升级"],
      metrics: ["4 个高客单项目", "项目价值 2.5-4 亿印尼盾", "系统 ROI > 8x"],
      insight: "高客单服务需要持续培育，而非强销售。"
    },
    {
      id: "clinic",
      client: "医美诊所",
      industry: "Clinic",
      timeline: "实施成果",
      workflowTimeline: [
        { phase: "阶段 1：定向", detail: ["映射美妆品牌与商务达人", "聚焦 B2B 合作机会"] },
        { phase: "阶段 2：会话启动", detail: ["以合作为切入点", "避免直接促销项目"] },
        { phase: "阶段 3：意图分级", detail: ["按合作潜力分类响应", "聚焦高价值伙伴"] },
        { phase: "阶段 4：升级", detail: ["进入联名活动规划", "加速合作落地"] }
      ],
      problem: ["增长依赖广告", "缺少 B2B 合作系统", "合作机会流失"],
      implementation: ["合作方定向流程", "意图分类逻辑", "快速团队交接"],
      metrics: ["12 个活跃合作", "品牌曝光提升", "新增转介绍渠道"],
      insight: "系统化合作外呼可建立可持续的非广告增长通道。"
    }
  ]
};

export function CaseStudiesShowcase() {
  const { t, language } = useLanguage();
  const sectionLabels: Record<SectionKey, string> = {
    timeline: t("caseStudies.timeline"),
    problem: t("caseStudies.problem"),
    implementation: t("caseStudies.implementation"),
    results: t("caseStudies.results"),
    insight: t("caseStudies.insight")
  };

  const data = caseStudiesByLanguage[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    timeline: true,
    problem: false,
    implementation: false,
    results: false,
    insight: false
  });

  const study = useMemo(() => data[activeIndex], [data, activeIndex]);

  function toggleSection(key: SectionKey) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function switchCase(nextIndex: number) {
    setActiveIndex(nextIndex);
    setOpenSections({ timeline: true, problem: false, implementation: false, results: false, insight: false });
  }

  return (
    <div className="mt-10">
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
        {data.map((item, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => switchCase(index)}
              className={cn(
                "touch-feedback whitespace-nowrap rounded-full border px-3 py-2 text-xs transition-all sm:px-4 sm:text-sm",
                active ? "border-blue-300/50 bg-blue-500/20 text-white" : "border-white/20 bg-white/[0.04] text-slate-300 hover:bg-white/[0.1] hover:text-white"
              )}
            >
              {item.client}
            </button>
          );
        })}
      </div>

      <Reveal>
        <div key={study.id} className="glass mt-5 p-5 md:p-7 lg:min-h-[540px]">
          <p className="text-xs uppercase tracking-[0.2em] text-aegis-glow">{study.industry}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{study.client}</h3>
          <p className="mt-1 text-sm text-slate-300">{study.timeline}</p>

          <div className="mt-6 space-y-3">
            {(Object.keys(sectionLabels) as SectionKey[]).map((key) => {
              const isOpen = openSections[key];
              return (
                <div key={key} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                  <button
                    type="button"
                    onClick={() => toggleSection(key)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white">{sectionLabels[key]}</span>
                    <span className="text-lg text-slate-300">{isOpen ? "-" : "+"}</span>
                  </button>

                  <div className={cn("accordion-content", isOpen && "open")}>
                    <div className="min-h-0 overflow-hidden border-t border-white/10 px-4 py-3 text-sm text-slate-200">
                      {key === "timeline" && (
                        <div className="space-y-3">
                          {study.workflowTimeline.map((item, phaseIndex) => (
                            <div key={`${item.phase}-${phaseIndex}`} className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                              <p className="text-xs font-semibold uppercase tracking-wide text-aegis-glow">{item.phase}</p>
                              <ul className="mt-2 space-y-1.5">
                                {item.detail.map((point, pointIndex) => (
                                  <li key={`${item.phase}-${pointIndex}`} className="flex items-start gap-2.5 leading-relaxed">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aegis-glow" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {key === "problem" && (
                        <ul className="space-y-1.5">
                          {study.problem.map((item, itemIndex) => (
                            <li key={`problem-${itemIndex}`} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aegis-glow" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {key === "implementation" && (
                        <ul className="space-y-1.5">
                          {study.implementation.map((item, itemIndex) => (
                            <li key={`implementation-${itemIndex}`} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aegis-glow" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {key === "results" && (
                        <ul className="space-y-1.5">
                          {study.metrics.map((item, itemIndex) => (
                            <li key={`result-${itemIndex}`} className="flex items-start gap-2.5 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aegis-glow" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {key === "insight" && <p className="leading-relaxed">{study.insight}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
