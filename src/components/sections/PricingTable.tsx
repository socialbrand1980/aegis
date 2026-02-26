"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PricingDetailsModal, type PricingPlan } from "@/components/sections/PricingDetailsModal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function PricingTable() {
  const { language, t } = useLanguage();
  const [activePlanId, setActivePlanId] = useState<string | null>(null);

  const plans = useMemo<PricingPlan[]>(
    () => [
      {
        id: "core",
        name: language === "id" ? "Aegis Core" : language === "zh" ? "Aegis Core" : "Aegis Core",
        price: "Free",
        description:
          language === "id"
            ? "Cocok untuk testing AI automation sebelum scale ke paket yang lebih tinggi."
            : language === "zh"
            ? "适合在扩展之前测试 AI 自动化。"
            : "Perfect for testing AI automation before scaling.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items:
              language === "id"
                ? ["50 AI Personalized Outreach / bulan", "1 Workspace", "1 Channel (Instagram ATAU Email)", "1 Basic Follow-up Sequence"]
                : language === "zh"
                ? ["每月 50 次 AI 个性化外展", "1 个工作区", "1 个渠道（Instagram 或 Email）", "1 个基础跟进序列"]
                : ["50 AI Personalized Outreach / month", "1 Workspace", "1 Channel (Instagram OR Email)", "1 Basic Follow-up Sequence"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items:
              language === "id"
                ? ["AI auto-reply standard", "Deteksi intent basic", "Tidak ada advanced objection handling"]
                : language === "zh"
                ? ["标准 AI 自动回复", "基础意图检测", "无高级异议处理"]
                : ["Standard AI auto-reply", "Basic intent detection", "No advanced objection handling"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items:
              language === "id"
                ? ["Tracking lead basic", "Pipeline view sederhana"]
                : language === "zh"
                ? ["基础线索跟踪", "简单管道视图"]
                : ["Basic lead tracking", "Simple pipeline view"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items:
              language === "id"
                ? ["Statistik bulanan basic", "Outreach sent", "Response rate"]
                : language === "zh"
                ? ["基础月度统计", "已发送外展", "回复率"]
                : ["Basic monthly stats", "Outreach sent", "Response rate"]
          },
          {
            id: "support",
            title: "Support",
            items:
              language === "id" ? ["Community support"] : language === "zh" ? ["社区支持"] : ["Community support"]
          }
        ]
      },
      {
        id: "growth",
        name: "Aegis Growth",
        price: "Rp 399.000 / bulan",
        description:
          language === "id"
            ? "Untuk UMKM yang siap menstabilkan pipeline dan dapat lead lebih konsisten."
            : language === "zh"
            ? "为准备稳定管道并获得更一致线索的小型企业设计。"
            : "For small businesses ready to stabilize their pipeline.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items:
              language === "id"
                ? ["500 AI Personalized Outreach / bulan", "2 Workspaces", "2 Channels", "Follow-up Automation 3 Tahap"]
                : language === "zh"
                ? ["每月 500 次 AI 个性化外展", "2 个工作区", "2 个渠道", "3 步跟进自动化"]
                : ["500 AI Personalized Outreach / month", "2 Workspaces", "2 Channels", "3-Step Follow-up Automation"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items:
              language === "id"
                ? ["AI auto-reply smart", "Lead scoring basic", "Klasifikasi intent"]
                : language === "zh"
                ? ["智能 AI 自动回复", "基础线索评分", "意图分类"]
                : ["Smart AI auto-reply", "Basic lead scoring", "Intent classification"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items:
              language === "id"
                ? ["Pipeline board visual", "Tracking status", "Adjust stage manual"]
                : language === "zh"
                ? ["可视化管道看板", "状态跟踪", "手动调整阶段"]
                : ["Visual pipeline board", "Status tracking", "Manual stage adjustment"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items:
              language === "id"
                ? ["Laporan performa bulanan", "Breakdown Outreach vs Response"]
                : language === "zh"
                ? ["月度绩效报告", "外展与回复细分"]
                : ["Monthly performance report", "Outreach vs Response breakdown"]
          },
          {
            id: "support",
            title: "Support",
            items: language === "id" ? ["Email support"] : language === "zh" ? ["邮件支持"] : ["Email support"]
          }
        ]
      },
      {
        id: "professional",
        name: "Aegis Professional",
        price: "Rp 2.500.000 / bulan",
        description:
          language === "id"
            ? "Scale bisnis dengan full acquisition intelligence dan automation canggih."
            : language === "zh"
            ? "通过完整的获客智能和高级自动化扩展业务。"
            : "Scale with full acquisition intelligence.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items:
              language === "id"
                ? ["5.000 AI Personalized Outreach / bulan", "5 Workspaces", "Multi-channel (Instagram, Email, WhatsApp, LinkedIn)", "Advanced automation builder"]
                : language === "zh"
                ? ["每月 5000 次 AI 个性化外展", "5 个工作区", "多渠道（Instagram, Email, WhatsApp, LinkedIn）", "高级自动化构建器"]
                : ["5,000 AI Personalized Outreach / month", "5 Workspaces", "Multi-channel (Instagram, Email, WhatsApp, LinkedIn)", "Advanced automation builder"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items:
              language === "id"
                ? ["Deteksi intent advanced", "Dynamic objection handling", "Automated qualification logic", "Advanced lead scoring (berbasis behavior)"]
                : language === "zh"
                ? ["高级意图检测", "动态异议处理", "自动化筛选逻辑", "高级线索评分（基于行为）"]
                : ["Advanced intent detection", "Dynamic objection handling", "Automated qualification logic", "Advanced lead scoring (behavior-based)"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items:
              language === "id"
                ? ["Full pipeline CRM-style", "Tracking nilai deal", "Auto-stage movement"]
                : language === "zh"
                ? ["完整 CRM 式管道", "交易价值跟踪", "自动阶段移动"]
                : ["Full CRM-style pipeline", "Deal value tracking", "Auto-stage movement"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items:
              language === "id"
                ? ["Conversion analytics", "Script performance tracking", "Funnel visualization"]
                : language === "zh"
                ? ["转化分析", "脚本绩效跟踪", "漏斗可视化"]
                : ["Conversion analytics", "Script performance tracking", "Funnel visualization"]
          },
          {
            id: "support",
            title: "Support",
            items:
              language === "id" ? ["Priority support", "Laporan bisa di-export"] : language === "zh" ? ["优先支持", "可导出报告"] : ["Priority support", "Exportable reports"]
          }
        ]
      },
      {
        id: "enterprise",
        name: "Aegis Enterprise",
        price: "Rp 50.000.000 / tahun",
        description:
          language === "id"
            ? "Kepala infrastruktur akuisisi klien Anda. Full control, unlimited scale, dedicated support."
            : language === "zh"
            ? "拥有您的客户获取基础设施。完全控制、无限扩展、专属支持。"
            : "Own your acquisition infrastructure.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items:
              language === "id"
                ? ["Unlimited AI Outreach (Fair Usage Policy)", "Unlimited Workspaces", "Custom workflow logic", "API access"]
                : language === "zh"
                ? ["无限 AI 外展（公平使用政策）", "无限工作区", "定制工作流逻辑", "API 访问"]
                : ["Unlimited AI Outreach (Fair Usage Policy)", "Unlimited Workspaces", "Custom workflow logic", "API access"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items:
              language === "id"
                ? ["Custom AI brand tuning", "Knowledge base integration", "Advanced qualification engine"]
                : language === "zh"
                ? ["定制 AI 品牌调优", "知识库集成", "高级筛选引擎"]
                : ["Custom AI brand tuning", "Knowledge base integration", "Advanced qualification engine"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items:
              language === "id"
                ? ["Multi-client management", "Role-based access control", "Custom pipeline stages"]
                : language === "zh"
                ? ["多客户管理", "基于角色的访问控制", "定制管道阶段"]
                : ["Multi-client management", "Role-based access control", "Custom pipeline stages"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items:
              language === "id"
                ? ["Custom dashboard", "BI integration ready", "Data export API"]
                : language === "zh"
                ? ["定制仪表板", "BI 集成就绪", "数据导出 API"]
                : ["Custom dashboard", "BI integration ready", "Data export API"]
          },
          {
            id: "support",
            title: "Support",
            items:
              language === "id"
                ? ["Dedicated Success Manager", "SLA support", "White-label option"]
                : language === "zh"
                ? ["专属成功经理", "SLA 支持", "白标选项"]
                : ["Dedicated Success Manager", "SLA support", "White-label option"]
          }
        ]
      }
    ],
    [language]
  );

  const activePlan = plans.find((plan) => plan.id === activePlanId) ?? null;

  return (
    <section className="section-spacing pt-16">
      <Container>
        <h1 className="text-4xl font-bold text-white">Pricing Plans for Every Stage of Growth</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          {language === "id"
            ? "Mulai dari free tier untuk testing, hingga enterprise solution untuk scale penuh. Semua paket menggunakan infrastruktur yang sama—berbeda di volume, fitur intelligence, dan level kontrol."
            : language === "zh"
            ? "从免费测试版到企业级全面扩展方案。所有套餐使用相同的基础设施——区别在于容量、智能功能和控制级别。"
            : "Start from free tier for testing, to enterprise solution for full scale. All plans use the same infrastructure—different in volume, intelligence features, and control level."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <Card key={plan.id} className="flex h-full flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                <p className="mt-2 text-lg font-semibold text-aegis-glow">{plan.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{plan.description}</p>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-200">
                <p>• {plan.sections[0].items[0]}</p>
                <p>• {plan.sections[1].items[0]}</p>
                <p>• {plan.sections[2].items[0]}</p>
              </div>

              <Button variant="secondary" className="mt-6 w-full" onClick={() => setActivePlanId(plan.id)}>
                {language === "id" ? "Lihat Detail" : language === "zh" ? "查看详情" : "View Details"}
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-aegis-glow">
          {language === "id"
            ? "Dirancang untuk operasi enterprise dengan keamanan data terstruktur, kontrol akses, dan workflow siap compliance."
            : language === "zh"
            ? "为企业运营设计，具有结构化数据安全、访问控制和合规准备工作流。"
            : "Designed for enterprise operations with structured data security, access control, and compliance-ready workflows."}
        </p>

        <div className="mt-7">
          <Button href="/coming-soon" size="lg">
            {t("pricing.tryAegis")}
          </Button>
        </div>

        <PricingDetailsModal plan={activePlan} isOpen={Boolean(activePlan)} onClose={() => setActivePlanId(null)} />
      </Container>
    </section>
  );
}
