export type Language = "id" | "en" | "zh";

export type Industry = {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
};

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  timeline: string;
  workflowTimeline: {
    phase: string;
    detail: string[];
  }[];
  problem: string[];
  implementation: string[];
  metrics: string[];
  insight: string;
};

export type ResourcePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
};

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
      resources: "Documentation",
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
      title1: "Bangun Mesin Akuisisi Klien yang Predictable",
      title2: "untuk Service Business Anda",
      description:
        "Aegis AI menggabungkan targeting, outreach, follow up, dan qualification dalam satu sistem terukur—dari respons pertama sampai impact revenue.",
      ctaPrimary: "Jadwalkan Demo Strategis",
      ctaSecondary: "Pelajari Cara Kerjanya",
      trustTitle: "Kenapa Memilih Aegis",
      trust1: "Dibangun khusus untuk service industries",
      trust2: "Sistem qualification berbasis data",
      trust3: "Setup sekali, optimize terus",
      stat1: "Prospek / Bulan",
      stat2: "Kenaikan Reply Rate",
      stat3: "Visibilitas Pipeline"
    },
    problem: {
      title: "Kebanyakan Service Business Belum Punya Sistem Business Development yang Bener",
      currentReality: "Kondisi Saat Ini",
      businessImpact: "Dampak ke Bisnis",
      p1: "Dependen sama referral untuk lead",
      p2: "Andalin relasi personal buat jualan",
      p3: "Konten organik tanpa follow up yang sistematis",
      p4: "Tim sales manual tanpa data terstruktur",
      i1: "Lead datang tidak konsisten",
      i2: "Follow up sering kelewatan",
      i3: "Gak tau conversion rate yang sebenarnya",
      i4: "Susah prediksi revenue",
      note: "Tanpa sistem, pertumbuhan bakal selalu naik-turun."
    },
    solution: {
      title: "Infrastruktur Akuisisi Klien Berbasis AI",
      description:
        "Aegis AI bukan chatbot dan bukan auto-DM massal. Ini sistem terstruktur 5 lapisan yang bikin akuisisi klien konsisten, terukur, dan scalable."
    },
    timeline: {
      title: "Gimana AI Bekerja dari Awal Sampai Hasil",
      description:
        "Urutan operasional end-to-end Aegis AI—dari targeting awal sampai dashboard performa. Lengkap, tanpa diringkas."
    },
    dashboard: {
      title: "Ukur Yang Penting, Bukan Yang Asal",
      description: "Business development jadi measurable, bukan lagi pakai asumsi."
    },
    caseStudies: {
      title: "Case Studies dari Berbagai Industri",
      description: "Pilih studi kasus di bawah. Detail lengkap ada di accordion.",
      timeline: "Timeline Kerja AI",
      problem: "Masalah",
      implementation: "Implementasi",
      results: "Hasil",
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
    },
    comingSoon: {
      badge: "Segera Hadir",
      title1: "Sesuatu yang Luar Biasa",
      title2: "Sedang Dikembangkan",
      description:
        "Kami sedang mengembangkan fitur ini dengan hati-hati untuk memberikan pengalaman terbaik. Segera hadir untuk membantu bisnis Anda mencapai pertumbuhan yang lebih predictable dan measurable.",
      backHome: "Kembali ke Beranda",
      getNotified: "Dapatkan Notifikasi!",
      launch: "Launch",
      features: "Features",
      experience: "Experience",
      ctaText: "Ingin tahu lebih lanjut?",
      ctaLink: "Jadwalkan demo strategis"
    },
    productPage: {
      description:
        "Controlled product showcase of Aegis AI dashboard prototype, featuring setup engine, conversation intelligence, analytics, and enterprise control."
    },
    howItWorks: {
      ctaTitle: "Implementasi Terstruktur dari Hari Pertama",
      ctaDescription:
        "Setiap fase punya outcome jelas sehingga tim kamu bisa bergerak cepat tanpa kehilangan kontrol kualitas."
    },
    industries: {
      ctaTitle: "Need an Industry-Specific Flow?",
      ctaDescription: "Kami bantu rancang alur conversation dan pipeline yang sesuai karakter pasar kamu."
    },
    caseStudiesPage: {
      title: "Industry Case Studies",
      description:
        "Setiap studi kasus mencakup problem, implementasi, hasil, dan insight agar bisa direplikasi pada konteks bisnis Anda."
    },
    docs: {
      description:
        "Complete Aegis AI documentation: architecture, workflow, orchestration, security, and enterprise operations."
    },
    howItWorksSteps: {
      title: "How It Works",
      description: "Delivery umumnya berada pada rentang 30-90 hari tergantung kompleksitas industri dan proses internal.",
      step1Title: "Strategic Discovery",
      step1Detail: "Audit channel, profile ideal client, bottleneck follow up, dan baseline conversion.",
      step2Title: "AI Configuration",
      step2Detail: "Custom workflow, script personalization, tone brand, dan decision-tree intent.",
      step3Title: "Deployment",
      step3Detail: "Integrasi CRM, QA alur percakapan, dan aktivasi outreach terjadwal.",
      step4Title: "Optimization",
      step4Detail: "Testing script, target refinement, dan improvement cadence berbasis data.",
      step5Title: "Reporting",
      step5Detail: "Monthly performance report dengan fokus response, meeting, conversion, dan revenue contribution."
    },
    industriesGrid: {
      title: "Built for High-Value Service Verticals"
    },
    caseStudyCard: {
      timeline: "Timeline Alur AI",
      problem: "Problem",
      implementation: "Implementation",
      results: "Results",
      insight: "Insight"
    },
    pricing: {
      tryAegis: "Mulai Trial Gratis"
    },
    resources: {
      title: "Documentation",
      description: "Panduan operasional Aegis AI untuk implementasi client acquisition end-to-end: mulai dari konfigurasi awal, eksekusi outreach, pengelolaan percakapan, sampai evaluasi performa dashboard."
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
      resources: "Documentation",
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
    },
    comingSoon: {
      badge: "Coming Soon",
      title1: "Something Amazing Is",
      title2: "In The Works",
      description:
        "We're carefully developing this feature to deliver the best experience. Coming soon to help your business achieve more predictable and measurable growth.",
      backHome: "Back to Home",
      getNotified: "Get Your Notification Here!",
      launch: "Launch",
      features: "Features",
      experience: "Experience",
      ctaText: "Want to know more?",
      ctaLink: "Schedule a strategic demo"
    },
    productPage: {
      description:
        "Controlled product showcase of Aegis AI dashboard prototype, featuring setup engine, conversation intelligence, analytics, and enterprise control."
    },
    howItWorks: {
      ctaTitle: "Structured Implementation from Day One",
      ctaDescription:
        "Every phase has clear outcomes so your team can move fast without losing quality control."
    },
    industries: {
      ctaTitle: "Need an Industry-Specific Flow?",
      ctaDescription: "We'll help design conversation flows and pipelines that match your market characteristics."
    },
    caseStudiesPage: {
      title: "Industry Case Studies",
      description:
        "Each case study covers problem, implementation, results, and insights that can be replicated to your business context."
    },
    docs: {
      description:
        "Complete Aegis AI documentation: architecture, workflow, orchestration, security, and enterprise operations."
    },
    howItWorksSteps: {
      title: "How It Works",
      description: "Delivery typically ranges from 30-90 days depending on industry complexity and internal processes.",
      step1Title: "Strategic Discovery",
      step1Detail: "Channel audit, ideal client profiling, follow-up bottleneck analysis, and conversion baseline.",
      step2Title: "AI Configuration",
      step2Detail: "Custom workflow, script personalization, brand tone, and intent decision-tree.",
      step3Title: "Deployment",
      step3Detail: "CRM integration, conversation flow QA, and scheduled outreach activation.",
      step4Title: "Optimization",
      step4Detail: "Script testing, target refinement, and data-driven improvement cadence.",
      step5Title: "Reporting",
      step5Detail: "Monthly performance report focusing on response, meetings, conversion, and revenue contribution."
    },
    industriesGrid: {
      title: "Built for High-Value Service Verticals"
    },
    caseStudyCard: {
      timeline: "AI Workflow Timeline",
      problem: "Problem",
      implementation: "Implementation",
      results: "Results",
      insight: "Insight"
    },
    pricing: {
      tryAegis: "Start Free Trial"
    },
    resources: {
      title: "Documentation",
      description: "Aegis AI operational guides for end-to-end client acquisition implementation: from initial configuration, outreach execution, conversation management, to dashboard performance evaluation."
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
      resources: "文档",
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
    },
    comingSoon: {
      badge: "即将推出",
      title1: "一些令人惊叹的",
      title2: "正在开发中",
      description:
        "我们正在精心开发此功能，以提供最佳体验。即将推出，帮助您的企业实现更可预测和可衡量的增长。",
      backHome: "返回首页",
      getNotified: "获取通知！",
      launch: "发布",
      features: "功能",
      experience: "体验",
      ctaText: "想了解更多？",
      ctaLink: "预约战略演示"
    },
    productPage: {
      description:
        "Aegis AI 仪表板原型的受控产品展示，包括设置引擎、对话智能、分析和企业控制。"
    },
    howItWorks: {
      ctaTitle: "从第一天开始的结构化实施",
      ctaDescription:
        "每个阶段都有明确的结果，让您的团队可以快速行动而不失质量控制。"
    },
    industries: {
      ctaTitle: "需要特定行业的流程？",
      ctaDescription: "我们将帮助设计符合您市场特征的对话流程和管道。"
    },
    caseStudiesPage: {
      title: "行业案例研究",
      description:
        "每个案例研究都包含问题、实施、结果和洞察，可以复制到您的业务环境中。"
    },
    docs: {
      description:
        "完整的 Aegis AI 文档：架构、工作流、编排、安全和企业运营。"
    },
    howItWorksSteps: {
      title: "运作方式",
      description: "交付周期通常为 30-90 天，具体取决于行业复杂性和内部流程。",
      step1Title: "战略发现",
      step1Detail: "渠道审计、理想客户画像、跟进瓶颈分析和转化基准。",
      step2Title: "AI 配置",
      step2Detail: "定制工作流、脚本个性化、品牌语调和意图决策树。",
      step3Title: "部署",
      step3Detail: "CRM 集成、对话流程 QA 和计划外展激活。",
      step4Title: "优化",
      step4Detail: "脚本测试、目标细化和数据驱动的改进周期。",
      step5Title: "报告",
      step5Detail: "月度绩效报告，重点关注回复、会议、转化和收入贡献。"
    },
    industriesGrid: {
      title: "为高价值服务垂直领域打造"
    },
    caseStudyCard: {
      timeline: "AI 工作流时间线",
      problem: "问题",
      implementation: "实施",
      results: "结果",
      insight: "洞察"
    },
    pricing: {
      tryAegis: "开始免费试用"
    },
    resources: {
      title: "文档",
      description: "Aegis AI 运营指南，用于端到端客户获取实施：从初始配置、外展执行、对话管理到仪表板性能评估。"
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
