import type { Language } from "@/lib/i18n";

export type DocsBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type DocsSubsection = {
  id: string;
  title: string;
  blocks: DocsBlock[];
};

export type DocsSection = {
  id: string;
  title: string;
  blocks: DocsBlock[];
  subsections?: DocsSubsection[];
};

export const docsSectionsByLanguage: Record<Language, DocsSection[]> = {
  id: [
    {
      id: "executive-overview",
      title: "1. Executive Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI adalah sistem **Client Acquisition Infrastructure** yang dirancang untuk mengubah konfigurasi bisnis menjadi mesin akuisisi klien otomatis yang **terstruktur, terukur, dan scalable**."
        },
        {
          type: "paragraph",
          text: "Aegis AI **bukan chatbot**, **bukan CRM add-on**, dan **bukan sekadar automation tool**."
        },
        {
          type: "paragraph",
          text: "Aegis AI adalah sistem orkestrasi yang membangun:"
        },
        {
          type: "list",
          items: [
            "Targeting logic",
            "Outreach automation",
            "Conversation intelligence",
            "Qualification engine",
            "Pipeline structuring",
            "Performance analytics",
            "Optimization loop"
          ]
        },
        {
          type: "paragraph",
          text: "Tujuannya adalah menciptakan sistem akuisisi klien yang **konsisten** dan dapat dioptimasi lintas industri."
        }
      ]
    },
    {
      id: "system-philosophy",
      title: "2. System Philosophy",
      blocks: [],
      subsections: [
        {
          id: "infrastructure-over-tool",
          title: "2.1 Infrastructure Over Tool",
          blocks: [
            {
              type: "paragraph",
              text: "Sebagian besar AI di pasar hanya menyelesaikan satu aktivitas, seperti membalas pesan atau membuat copy."
            },
            {
              type: "paragraph",
              text: "Aegis AI membangun keseluruhan sistem dari awal hingga closing."
            },
            {
              type: "paragraph",
              text: "Sistem tidak fokus pada pesan. Sistem fokus pada alur akuisisi **end-to-end**."
            }
          ]
        },
        {
          id: "configuration-driven-intelligence",
          title: "2.2 Configuration-Driven Intelligence",
          blocks: [
            { type: "paragraph", text: "Output sistem ditentukan oleh konfigurasi bisnis." },
            { type: "paragraph", text: "User mendefinisikan:" },
            {
              type: "list",
              items: ["Industry", "Ideal Client Profile", "Offer structure", "Deal value", "Sales cycle", "Brand tone"]
            },
            {
              type: "paragraph",
              text: "Sistem kemudian membangun workflow berbasis parameter tersebut."
            }
          ]
        },
        {
          id: "multi-model-orchestration",
          title: "2.3 Multi-Model Orchestration",
          blocks: [
            { type: "paragraph", text: "Aegis AI menggunakan pendekatan **multi-model orchestration**." },
            { type: "paragraph", text: "Model yang digunakan:" },
            {
              type: "list",
              items: ["OpenAI (GPT series)", "Anthropic (Claude)", "Qwen", "DeepSeek"]
            },
            {
              type: "paragraph",
              text: "Setiap model dipilih berdasarkan use case: reasoning, conversation, atau extraction."
            }
          ]
        }
      ]
    },
    {
      id: "architecture-overview",
      title: "3. Architecture Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI terdiri dari **5 lapisan utama** yang bekerja secara berurutan:"
        },
        {
          type: "list",
          items: [
            "**Strategic Targeting Engine** - Menentukan niche ideal dan ICP",
            "**AI Lead Hunter** - Mengumpulkan dan menganalisis prospek",
            "**AI Outreach & Conversation Engine** - Memulai dan mengelola percakapan",
            "**AI Follow Up Automation** - Follow up terjadwal dengan konten bernilai",
            "**Qualification & Escalation System** - Klasifikasi dan eskalasi lead"
          ]
        }
      ]
    },
    {
      id: "security-governance",
      title: "4. Security & Governance",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI dibangun dengan prinsip **security-first** untuk enterprise operations."
        },
        {
          type: "list",
          items: [
            "**Access Control** - Role-based access untuk tim",
            "**Data Handling** - Hanya data relevan yang disimpan",
            "**Auditability** - Semua perubahan tercatat",
            "**Escalation Protocol** - SOP untuk anomali sistem"
          ]
        }
      ]
    }
  ],
  en: [
    {
      id: "executive-overview",
      title: "1. Executive Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI is a **Client Acquisition Infrastructure** system designed to transform business configuration into an **structured, measurable, and scalable** automatic client acquisition engine."
        },
        {
          type: "paragraph",
          text: "Aegis AI is **not a chatbot**, **not a CRM add-on**, and **not just an automation tool**."
        },
        {
          type: "paragraph",
          text: "Aegis AI is an orchestration system that builds:"
        },
        {
          type: "list",
          items: [
            "Targeting logic",
            "Outreach automation",
            "Conversation intelligence",
            "Qualification engine",
            "Pipeline structuring",
            "Performance analytics",
            "Optimization loop"
          ]
        },
        {
          type: "paragraph",
          text: "The goal is to create a **consistent** client acquisition system that can be optimized across industries."
        }
      ]
    },
    {
      id: "system-philosophy",
      title: "2. System Philosophy",
      blocks: [],
      subsections: [
        {
          id: "infrastructure-over-tool",
          title: "2.1 Infrastructure Over Tool",
          blocks: [
            {
              type: "paragraph",
              text: "Most AI on the market only solves single activities, like replying to messages or creating copy."
            },
            {
              type: "paragraph",
              text: "Aegis AI builds the entire system from start to closing."
            },
            {
              type: "paragraph",
              text: "The system doesn't focus on messages. The system focuses on **end-to-end** acquisition flow."
            }
          ]
        },
        {
          id: "configuration-driven-intelligence",
          title: "2.2 Configuration-Driven Intelligence",
          blocks: [
            { type: "paragraph", text: "System output is determined by business configuration." },
            { type: "paragraph", text: "User defines:" },
            {
              type: "list",
              items: ["Industry", "Ideal Client Profile", "Offer structure", "Deal value", "Sales cycle", "Brand tone"]
            },
            {
              type: "paragraph",
              text: "The system then builds workflow based on those parameters."
            }
          ]
        },
        {
          id: "multi-model-orchestration",
          title: "2.3 Multi-Model Orchestration",
          blocks: [
            { type: "paragraph", text: "Aegis AI uses a **multi-model orchestration** approach." },
            { type: "paragraph", text: "Models used:" },
            {
              type: "list",
              items: ["OpenAI (GPT series)", "Anthropic (Claude)", "Qwen", "DeepSeek"]
            },
            {
              type: "paragraph",
              text: "Each model is selected based on use case: reasoning, conversation, or extraction."
            }
          ]
        }
      ]
    },
    {
      id: "architecture-overview",
      title: "3. Architecture Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI consists of **5 main layers** working sequentially:"
        },
        {
          type: "list",
          items: [
            "**Strategic Targeting Engine** - Defines ideal niche and ICP",
            "**AI Lead Hunter** - Collects and analyzes prospects",
            "**AI Outreach & Conversation Engine** - Initiates and manages conversations",
            "**AI Follow Up Automation** - Scheduled follow-ups with valuable content",
            "**Qualification & Escalation System** - Lead classification and escalation"
          ]
        }
      ]
    },
    {
      id: "security-governance",
      title: "4. Security & Governance",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI is built with **security-first** principles for enterprise operations."
        },
        {
          type: "list",
          items: [
            "**Access Control** - Role-based access for team",
            "**Data Handling** - Only relevant data is stored",
            "**Auditability** - All changes are logged",
            "**Escalation Protocol** - SOP for system anomalies"
          ]
        }
      ]
    }
  ],
  zh: [
    {
      id: "executive-overview",
      title: "1. 执行概述",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI 是一个**客户获取基础设施**系统，旨在将业务配置转变为**结构化、可衡量、可扩展**的自动客户获取引擎。"
        },
        {
          type: "paragraph",
          text: "Aegis AI **不是聊天机器人**，**不是 CRM 插件**，也**不仅仅是自动化工具**。"
        },
        {
          type: "paragraph",
          text: "Aegis AI 是一个构建以下内容的编排系统："
        },
        {
          type: "list",
          items: [
            "定向逻辑",
            "外展自动化",
            "对话智能",
            "筛选引擎",
            "管道结构化",
            "绩效分析",
            "优化循环"
          ]
        },
        {
          type: "paragraph",
          text: "目标是创建一个**一致的**客户获取系统，可以跨行业优化。"
        }
      ]
    },
    {
      id: "system-philosophy",
      title: "2. 系统哲学",
      blocks: [],
      subsections: [
        {
          id: "infrastructure-over-tool",
          title: "2.1 基础设施优于工具",
          blocks: [
            {
              type: "paragraph",
              text: "市场上大多数 AI 只解决单一活动，如回复消息或创建文案。"
            },
            {
              type: "paragraph",
              text: "Aegis AI 构建从开始到成交的完整系统。"
            },
            {
              type: "paragraph",
              text: "系统不关注消息。系统关注**端到端**的获取流程。"
            }
          ]
        },
        {
          id: "configuration-driven-intelligence",
          title: "2.2 配置驱动智能",
          blocks: [
            { type: "paragraph", text: "系统输出由业务配置决定。" },
            { type: "paragraph", text: "用户定义：" },
            {
              type: "list",
              items: ["行业", "理想客户画像", "报价结构", "交易价值", "销售周期", "品牌语调"]
            },
            {
              type: "paragraph",
              text: "系统然后根据这些参数构建工作流。"
            }
          ]
        },
        {
          id: "multi-model-orchestration",
          title: "2.3 多模型编排",
          blocks: [
            { type: "paragraph", text: "Aegis AI 使用**多模型编排**方法。" },
            { type: "paragraph", text: "使用的模型：" },
            {
              type: "list",
              items: ["OpenAI (GPT 系列)", "Anthropic (Claude)", "Qwen", "DeepSeek"]
            },
            {
              type: "paragraph",
              text: "每个模型根据用例选择：推理、对话或提取。"
            }
          ]
        }
      ]
    },
    {
      id: "architecture-overview",
      title: "3. 架构概述",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI 由**5 个主要层**按顺序工作组成："
        },
        {
          type: "list",
          items: [
            "**战略定向引擎** - 确定理想细分市场和 ICP",
            "**AI 线索挖掘** - 收集和分析潜在客户",
            "**AI 外展与对话引擎** - 发起和管理对话",
            "**AI 跟进自动化** - 用有价值的内容进行预定跟进",
            "**筛选与升级系统** - 线索分类和升级"
          ]
        }
      ]
    },
    {
      id: "security-governance",
      title: "4. 安全与治理",
      blocks: [
        {
          type: "paragraph",
          text: "Aegis AI 采用**安全优先**原则构建，适用于企业运营。"
        },
        {
          type: "list",
          items: [
            "**访问控制** - 团队基于角色的访问",
            "**数据处理** - 仅存储相关数据",
            "**可审计性** - 所有更改都有记录",
            "**升级协议** - 系统异常的 SOP"
          ]
        }
      ]
    }
  ]
};
