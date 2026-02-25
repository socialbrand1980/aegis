export type Language = "id" | "en" | "zh";

interface Dict {
  [key: string]: string | Dict;
}

export const messages: Record<Language, Dict> = {
  id: {
    language: { id: "ID", en: "EN", zh: "中文" },
    nav: {
      product: "Product",
      howItWorks: "How It Works",
      industries: "Industries",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      resources: "Resources",
      bookDemo: "Book Demo"
    },
    footer: {
      description:
        "Client acquisition infrastructure untuk service business yang ingin membangun growth engine yang predictable dan measurable.",
      copyright: "Aegis AI. Seluruh hak cipta dilindungi.",
      license: "Produk ini dilisensikan untuk penggunaan komersial berdasarkan perjanjian tertulis."
    },
    hero: {
      badge: "Enterprise Growth Infrastructure",
      title1: "Build a Predictable Client Acquisition Engine",
      title2: "for Your Service Business",
      description:
        "Aegis AI menggabungkan targeting, outreach, follow up, dan qualification dalam satu sistem yang bisa diukur dari respons awal sampai revenue impact.",
      ctaPrimary: "Schedule Strategy Demo",
      ctaSecondary: "Explore How It Works",
      trustTitle: "Trust Indicators",
      trust1: "Custom-built for service industries",
      trust2: "Data-driven qualification system",
      trust3: "Setup once, optimize continuously",
      stat1: "Prospects / Month",
      stat2: "Typical Reply Uplift",
      stat3: "Pipeline Visibility"
    },
    problem: {
      title: "Most Service Businesses Don't Have a Real Business Development System",
      currentReality: "Current Reality",
      businessImpact: "Business Impact",
      p1: "Referral sebagai sumber utama lead",
      p2: "Relasi personal sebagai channel penjualan",
      p3: "Konten organik tanpa sistem follow up",
      p4: "Tim sales manual tanpa data terstruktur",
      i1: "Lead tidak konsisten",
      i2: "Follow up terlewat",
      i3: "Tidak tahu conversion rate sebenarnya",
      i4: "Tidak bisa memprediksi revenue",
      note: "Tanpa sistem, pertumbuhan selalu fluktuatif."
    },
    solution: {
      title: "AI-Powered Client Acquisition Infrastructure",
      description:
        "Aegis AI bukan chatbot dan bukan auto-DM massal. Ini sistem terstruktur dengan 5 lapisan kerja agar akuisisi klien berjalan konsisten, terukur, dan scalable."
    },
    timeline: {
      title: "Timeline Alur AI Bekerja",
      description:
        "Berikut urutan operasional end-to-end bagaimana Aegis AI menjalankan client acquisition infrastructure dari targeting awal sampai dashboard performa, lengkap tanpa diringkas."
    },
    dashboard: {
      title: "Measure What Matters",
      description: "Business development menjadi measurable, bukan asumsi."
    },
    caseStudies: {
      title: "Industry Case Studies",
      description: "Pilih case di bawah ini. Detail lengkap ditampilkan lewat accordion.",
      timeline: "Timeline Alur AI",
      problem: "Problem",
      implementation: "Implementation",
      results: "Results",
      insight: "Insight"
    },
    product: {
      heroTitle: "Your Client Acquisition Command Center",
      heroDesc:
        "Aegis AI berjalan melalui dashboard terstruktur yang dirancang untuk akuisisi klien yang scalable. Konfigurasi sekali, lalu terapkan lintas industri.",
      ctaPrimary: "Minta Demo Privat",
      ctaSecondary: "Lihat Cara Kerja",
      sectionCtaTitle: "Slot Founding Partner Terbatas",
      sectionCtaDesc: "Akses prototype terbatas dan hanya melalui permintaan demo.",
      interactiveTitle: "Interactive Prototype Scroll",
      interactiveDesc: "Ikuti alur lengkap dari setup hingga optimasi. Setiap layar bertransisi halus saat Anda scroll.",
      salesOsTitle: "Built Like a Sales OS",
      salesOsDesc: "Aegis bukan hanya untuk outreach. Sistem ini menyusun pipeline Anda dari kontak pertama sampai deal.",
      controlTitle: "Enterprise-Level Control",
      controlDesc:
        "Setiap deployment berjalan dalam kerangka lisensi yang terstruktur. Logika workflow dan arsitektur automasi dilindungi sebagai sistem proprietary."
    },
    model: {
      kicker: "Model Ecosystem",
      title: "Built with Leading AI Models",
      description:
        "Aegis AI dibangun dengan arsitektur multi-model yang dapat memakai OpenAI, Claude (Anthropic), Qwen, dan DeepSeek sesuai kebutuhan workflow, kualitas output, serta efisiensi biaya.",
      b1: "Model dipilih sesuai use case: reasoning, conversation, atau extraction.",
      b2: "Routing model dapat disesuaikan per campaign dan per industri.",
      b3: "Fallback model tersedia untuk menjaga stabilitas saat traffic tinggi.",
      b4: "Prompt framework dan orchestration layer tetap dikontrol oleh Aegis AI.",
      note: "OpenAI, Claude, Anthropic, Qwen, dan DeepSeek adalah merek dagang milik pemilik masing-masing."
    }
  },
  en: {
    language: { id: "ID", en: "EN", zh: "中文" },
    nav: {
      product: "Product",
      howItWorks: "How It Works",
      industries: "Industries",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      resources: "Resources",
      bookDemo: "Book Demo"
    },
    footer: {
      description:
        "Client acquisition infrastructure for service businesses that want a predictable and measurable growth engine.",
      copyright: "Aegis AI. All rights reserved.",
      license: "This product is licensed for commercial use under a written agreement."
    },
    hero: {
      badge: "Enterprise Growth Infrastructure",
      title1: "Build a Predictable Client Acquisition Engine",
      title2: "for Your Service Business",
      description:
        "Aegis AI combines targeting, outreach, follow-up, and qualification into one measurable system from first response to revenue impact.",
      ctaPrimary: "Schedule Strategy Demo",
      ctaSecondary: "Explore How It Works",
      trustTitle: "Trust Indicators",
      trust1: "Custom-built for service industries",
      trust2: "Data-driven qualification system",
      trust3: "Setup once, optimize continuously",
      stat1: "Prospects / Month",
      stat2: "Typical Reply Uplift",
      stat3: "Pipeline Visibility"
    },
    problem: {
      title: "Most Service Businesses Don't Have a Real Business Development System",
      currentReality: "Current Reality",
      businessImpact: "Business Impact",
      p1: "Heavy reliance on referrals",
      p2: "Personal network as a primary sales channel",
      p3: "Organic content without structured follow-up",
      p4: "Manual sales process without structured data",
      i1: "Inconsistent lead flow",
      i2: "Missed follow-ups",
      i3: "Unclear conversion visibility",
      i4: "Hard-to-forecast revenue",
      note: "Without a system, growth stays volatile."
    },
    solution: {
      title: "AI-Powered Client Acquisition Infrastructure",
      description:
        "Aegis AI is not a chatbot and not a mass auto-DM tool. It is a structured 5-layer system built for consistent, measurable, and scalable client acquisition."
    },
    timeline: {
      title: "How the AI Workflow Operates",
      description:
        "Below is the end-to-end operational flow of Aegis AI, from initial targeting to performance dashboard, presented in full detail."
    },
    dashboard: {
      title: "Measure What Matters",
      description: "Business development becomes measurable, not assumption-based."
    },
    caseStudies: {
      title: "Industry Case Studies",
      description: "Choose a case below. Full details are available through the accordion.",
      timeline: "AI Workflow Timeline",
      problem: "Problem",
      implementation: "Implementation",
      results: "Results",
      insight: "Insight"
    },
    product: {
      heroTitle: "Your Client Acquisition Command Center",
      heroDesc:
        "Aegis AI runs through a structured dashboard built for scalable client acquisition. Configure once and deploy across industries.",
      ctaPrimary: "Request Private Demo",
      ctaSecondary: "See How It Works",
      sectionCtaTitle: "Limited Founding Partner Slots",
      sectionCtaDesc: "Prototype access is controlled and available by request only.",
      interactiveTitle: "Interactive Prototype Scroll",
      interactiveDesc: "Follow the complete workflow from setup to optimization with smooth screen transitions on scroll.",
      salesOsTitle: "Built Like a Sales OS",
      salesOsDesc: "Aegis is not only for outreach. It structures your pipeline from first contact to closed deal.",
      controlTitle: "Enterprise-Level Control",
      controlDesc:
        "Each deployment runs within a structured licensing framework. Workflow logic and automation architecture are protected and proprietary."
    },
    model: {
      kicker: "Model Ecosystem",
      title: "Built with Leading AI Models",
      description:
        "Aegis AI is built on a multi-model architecture that can leverage OpenAI, Claude (Anthropic), Qwen, and DeepSeek based on workflow needs, output quality, and cost efficiency.",
      b1: "Models are selected by use case: reasoning, conversation, or extraction.",
      b2: "Model routing can be configured per campaign and per industry.",
      b3: "Fallback models are available to maintain stability under high traffic.",
      b4: "Prompt framework and orchestration layer remain controlled by Aegis AI.",
      note: "OpenAI, Claude, Anthropic, Qwen, and DeepSeek are trademarks of their respective owners."
    }
  },
  zh: {
    language: { id: "ID", en: "EN", zh: "中文" },
    nav: {
      product: "产品",
      howItWorks: "运作方式",
      industries: "行业",
      caseStudies: "案例",
      pricing: "价格",
      resources: "资源",
      bookDemo: "预约演示"
    },
    footer: {
      description: "面向服务型企业的客户获取基础设施，帮助团队建立可预测、可衡量的增长引擎。",
      copyright: "Aegis AI。保留所有权利。",
      license: "本产品仅可在书面商业协议下获得授权使用。"
    },
    hero: {
      badge: "企业增长基础设施",
      title1: "构建可预测的客户获取引擎",
      title2: "专为服务型企业打造",
      description: "Aegis AI 将获客定位、触达、跟进与线索筛选整合为一体化系统，可从首次回复到营收贡献进行量化。",
      ctaPrimary: "预约策略演示",
      ctaSecondary: "查看运作方式",
      trustTitle: "信任指标",
      trust1: "专为服务行业定制",
      trust2: "数据驱动的线索筛选系统",
      trust3: "一次配置，持续优化",
      stat1: "每月潜在线索",
      stat2: "平均回复率提升",
      stat3: "管道可视化"
    },
    problem: {
      title: "多数服务企业尚未建立真正的业务开发系统",
      currentReality: "当前现状",
      businessImpact: "业务影响",
      p1: "过度依赖转介绍",
      p2: "过度依赖个人关系获客",
      p3: "只有内容运营，缺乏系统化跟进",
      p4: "人工销售流程，缺少结构化数据",
      i1: "线索来源不稳定",
      i2: "跟进容易遗漏",
      i3: "转化率不清晰",
      i4: "营收难以预测",
      note: "没有系统，增长就会持续波动。"
    },
    solution: {
      title: "AI 驱动的客户获取基础设施",
      description: "Aegis AI 不是聊天机器人，也不是群发工具。它是由 5 层架构组成的系统化获客方案，强调稳定、可衡量与可扩展。"
    },
    timeline: {
      title: "AI 工作流时间线",
      description: "以下展示 Aegis AI 从目标定位到绩效仪表盘的完整端到端流程。"
    },
    dashboard: {
      title: "聚焦关键指标",
      description: "让业务开发从“凭感觉”变成“可衡量”。"
    },
    caseStudies: {
      title: "行业案例",
      description: "选择下方案例，完整细节可在手风琴中查看。",
      timeline: "AI 工作流时间线",
      problem: "问题",
      implementation: "实施",
      results: "结果",
      insight: "洞察"
    },
    product: {
      heroTitle: "您的客户获取指挥中心",
      heroDesc: "Aegis AI 通过结构化仪表盘实现可扩展获客。一次配置，可跨行业部署。",
      ctaPrimary: "申请私密演示",
      ctaSecondary: "查看运作方式",
      sectionCtaTitle: "创始合作名额有限",
      sectionCtaDesc: "原型访问受控，仅支持申请后开放。",
      interactiveTitle: "交互式原型滚动",
      interactiveDesc: "从配置到优化，跟随滚动查看完整工作流与平滑过渡。",
      salesOsTitle: "如同销售操作系统",
      salesOsDesc: "Aegis 不只是外呼工具，它能把您的销售管道从首次接触到成交全程结构化。",
      controlTitle: "企业级控制",
      controlDesc: "每个部署实例都运行在结构化许可框架下，工作流逻辑与自动化架构受保护且为专有。"
    },
    model: {
      kicker: "模型生态",
      title: "基于主流 AI 模型构建",
      description: "Aegis AI 采用多模型架构，可按工作流需求、输出质量与成本效率调用 OpenAI、Claude（Anthropic）、Qwen 与 DeepSeek。",
      b1: "按场景选择模型：推理、对话或信息提取。",
      b2: "支持按行业与活动配置模型路由策略。",
      b3: "高并发下可启用备用模型，保障稳定性。",
      b4: "提示词框架与编排层由 Aegis AI 统一控制。",
      note: "OpenAI、Claude、Anthropic、Qwen 与 DeepSeek 均为其各自所有者的商标。"
    }
  }
};

export function getMessage(locale: Language, path: string): string {
  const parts = path.split(".");
  let current: string | Dict | undefined = messages[locale];

  for (const part of parts) {
    if (!current || typeof current === "string") {
      return path;
    }
    current = current[part];
  }

  if (typeof current === "string") {
    return current;
  }

  return path;
}
