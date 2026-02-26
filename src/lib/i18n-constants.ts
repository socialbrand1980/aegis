import type { Industry, CaseStudy, ResourcePost } from "./i18n";

export type Language = "id" | "en" | "zh";

export interface I18nConstants {
  trustIndicators: string[];
  coreProblems: string[];
  coreImpacts: string[];
  architectureLayers: Array<{ title: string; description: string; output: string }>;
  conversationLogic: string[];
  aiExecutionTimeline: Array<{ phase: string; detail: string[] }>;
  dashboardMetrics: string[];
  industries: Industry[];
  caseStudies: CaseStudy[];
  resourcePosts: ResourcePost[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  sections: Array<{
    id: string;
    title: string;
    items: string[];
  }>;
}

export const constantsByLanguage: Record<Language, I18nConstants> = {
  id: {
    trustIndicators: [
      "Dibangun khusus untuk service industries",
      "Sistem qualification berbasis data",
      "Setup sekali, optimize terus"
    ],
    coreProblems: [
      "Dependen sama referral untuk lead",
      "Andalin relasi personal buat jualan",
      "Konten organik tanpa follow up yang sistematis",
      "Tim sales manual tanpa data terstruktur"
    ],
    coreImpacts: [
      "Lead datang tidak konsisten",
      "Follow up sering kelewatan",
      "Gak tau conversion rate yang sebenarnya",
      "Susah prediksi revenue"
    ],
    architectureLayers: [
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
    conversationLogic: [
      "Bertanya harga -> AI gali kebutuhan dulu sebelum framing penawaran.",
      "Bertanya layanan -> AI jelaskan ringkas lalu arahkan diskusi ke fit bisnis.",
      "Tertarik -> AI kirim studi kasus relevan dan dorong next step.",
      "Diam -> AI jalankan follow up terjadwal tanpa spam."
    ],
    aiExecutionTimeline: [
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
          "Jika prospect bertanya layanan: AI menjelaskan ringkas lalu mengarahkan diskusi.",
          "Jika prospect tertarik: AI mengirim studi kasus relevan.",
          "Jika prospect diam: AI memindahkan ke jalur follow up otomatis."
        ]
      },
      {
        phase: "Phase 04 - Follow Up Automation (Day 3, 7, 14, 60-90)",
        detail: [
          "Follow up terjadwal berjalan di hari ke-3, ke-7, dan ke-14.",
          "Reminder pasif dilanjutkan di hari ke-60 sampai ke-90.",
          "Setiap follow up membawa nilai baru: insight, studi kasus, informasi industri, atau update relevan.",
          "Tujuan follow up adalah edukasi dan nurturing, bukan spam."
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
          "Dashboard menampilkan top performing industries dan script performance analysis.",
          "Dengan ini, business development menjadi measurable, bukan asumsi."
        ]
      }
    ],
    dashboardMetrics: [
      "Total prospect added",
      "Outreach sent",
      "Response rate",
      "Meeting booked",
      "Conversion rate",
      "Revenue generated",
      "Top performing industries",
      "Script performance analysis"
    ],
    industries: [
      {
        slug: "agency",
        title: "Agency",
        problem: "Inbound tidak stabil dan sales cycle panjang karena business development belum tersistem.",
        solution: "Aegis membuat engine outreach personal berbasis niche dan follow-up terstruktur.",
        outcomes: ["Reply rate naik", "Meeting booked konsisten", "Klien baru lebih prediktif"]
      },
      {
        slug: "consultant",
        title: "Consultant",
        problem: "Sulit menjangkau pemilik usaha, sementara kompetitor semakin padat.",
        solution: "Aegis memprioritaskan pendekatan edukatif untuk membuka dialog berkualitas.",
        outcomes: ["Percakapan lebih relevan", "Lead retainer meningkat", "Pipeline lebih sehat"]
      },
      {
        slug: "legal",
        title: "Legal",
        problem: "Intake calon klien manual dan tidak terstruktur sehingga banyak kasus tidak fit tersaring terlambat.",
        solution: "Aegis mengotomasi intake, qualification, dan routing berdasarkan intent kasus.",
        outcomes: ["Intake lebih cepat", "Case-fit meningkat", "Waktu non-billable menurun"]
      },
      {
        slug: "clinic",
        title: "Clinic",
        problem: "Bergantung pada ads, belum ada sistem kolaborasi partnership B2B yang konsisten.",
        solution: "Aegis membuka percakapan kolaborasi dan mengklasifikasikan partner potensial.",
        outcomes: ["Partnership aktif bertambah", "Exposure brand naik", "Referral channel baru"]
      },
      {
        slug: "interior",
        title: "Interior",
        problem: "Lead inbound tidak stabil dan banyak calon klien hilang karena follow-up lemah.",
        solution: "Aegis membangun nurture sequence visual untuk high-ticket opportunity.",
        outcomes: ["Project high-ticket bertambah", "ROI sistem meningkat", "Nurture lebih rapi"]
      },
      {
        slug: "software-house",
        title: "Software House",
        problem: "Outreach masih ad-hoc, discovery call tidak konsisten antar anggota tim.",
        solution: "Aegis menstandarkan qualification dan handoff sebelum sales call.",
        outcomes: ["Call quality meningkat", "Sales cycle lebih singkat", "Forecast lebih jelas"]
      }
    ],
    caseStudies: [
      {
        id: "cs-digital-agency",
        client: "Digital Marketing Agency",
        industry: "Agency",
        timeline: "Hasil 90 Hari",
        workflowTimeline: [
          {
            phase: "Minggu 1-2: Targeting Setup",
            detail: [
              "AI menetapkan target utama: brand e-commerce dan SME lokal.",
              "AI memetakan ICP agar outreach benar-benar berbasis niche."
            ]
          },
          {
            phase: "Minggu 3-4: Lead Hunting",
            detail: [
              "Engine hunting berjalan dengan target 800 prospek per bulan.",
              "Sistem scoring dipakai agar akun prioritas disentuh lebih dulu."
            ]
          },
          {
            phase: "Minggu 5-8: Outreach Personal",
            detail: [
              "AI mengirim outreach personal dengan konteks niche bisnis prospect.",
              "Pendekatan tidak menggunakan template massal."
            ]
          },
          {
            phase: "Minggu 9-12: Follow Up + Qualification",
            detail: [
              "Cadence follow up day 3/7/14 dijalankan otomatis.",
              "Hot lead langsung diteruskan ke tim untuk booking meeting."
            ]
          }
        ],
        problem: ["Bergantung pada inbound", "Klien datang tidak stabil", "Sales cycle panjang"],
        implementation: [
          "Target brand e-commerce & SME lokal",
          "AI hunting 800 prospek per bulan",
          "Outreach personal berbasis niche"
        ],
        metrics: ["2.400 prospek", "14% reply rate", "32 meeting", "8 klien baru", "Revenue tambahan ± 180 juta"],
        insight: "Niche targeting dan studi kasus spesifik meningkatkan reply rate secara signifikan."
      },
      {
        id: "cs-tax-consultant",
        client: "Konsultan Pajak",
        industry: "Consultant",
        timeline: "Hasil 4 Bulan",
        workflowTimeline: [
          {
            phase: "Bulan 1: Segmentasi Pasar",
            detail: [
              "AI menyasar PT dan CV baru usia 0-2 tahun.",
              "Segmen dipisah berdasarkan sektor usaha."
            ]
          },
          {
            phase: "Bulan 2: Edukasi Outreach",
            detail: [
              "Pesan awal dirancang edukatif.",
              "Tujuannya membuka percakapan tanpa hard selling."
            ]
          },
          {
            phase: "Bulan 3: Follow Up Bertahap",
            detail: [
              "AI menjalankan follow up bertahap dengan konteks kebutuhan usaha.",
              "Konten follow up menyertakan insight regulasi."
            ]
          },
          {
            phase: "Bulan 4: Qualification Retainer",
            detail: [
              "Prospect dengan intent tinggi diprioritaskan.",
              "Mereka diarahkan ke jalur penawaran retainer tahunan."
            ]
          }
        ],
        problem: ["Sulit menjangkau pemilik usaha", "Kompetitor banyak", "Outreach manual tidak efektif"],
        implementation: [
          "Target PT & CV baru usia 0-2 tahun",
          "Segmentasi berdasarkan sektor usaha",
          "Outreach edukatif (bukan hard selling)"
        ],
        metrics: ["3.000 prospek", "11% reply rate", "19 klien retainer baru", "Rata-rata kontrak tahunan"],
        insight: "Pendekatan edukasi lebih efektif dibanding penawaran langsung."
      },
      {
        id: "cs-interior",
        client: "Interior Designer",
        industry: "Interior",
        timeline: "Hasil 6 Bulan",
        workflowTimeline: [
          {
            phase: "Bulan 1-2: Prospect Mapping",
            detail: [
              "AI menargetkan developer dan bisnis cafe yang baru launching.",
              "Fokus pada sumber demand high-ticket."
            ]
          },
          {
            phase: "Bulan 3-4: Contextual Outreach",
            detail: [
              "Percakapan awal difokuskan pada kebutuhan proyek baru.",
              "AI membawa angle positioning visual brand."
            ]
          },
          {
            phase: "Bulan 5: 3-Stage Follow Up",
            detail: [
              "AI mengirim follow up 3 tahap dengan studi visual.",
              "Tujuannya menaikkan trust sebelum pembahasan proposal."
            ]
          },
          {
            phase: "Bulan 6: Hot Lead Escalation",
            detail: [
              "Lead dengan intent proyek tinggi langsung dieskalasi.",
              "Tim melanjutkan ke diskusi komersial dan scope."
            ]
          }
        ],
        problem: ["Bergantung pada Instagram inbound", "Tidak punya sistem follow up", "Banyak lead hilang"],
        implementation: [
          "Target developer dan cafe baru",
          "AI fokus bisnis yang baru launching",
          "Follow up 3 tahap dengan studi visual"
        ],
        metrics: ["4 project high-ticket", "Nilai proyek 250-400 juta", "ROI sistem > 8x biaya tahunan"],
        insight: "High-ticket service membutuhkan nurturing lebih lama, bukan hard selling."
      },
      {
        id: "cs-clinic",
        client: "Klinik Estetika",
        industry: "Clinic",
        timeline: "Hasil Implementasi",
        workflowTimeline: [
          {
            phase: "Tahap 1: Partnership Targeting",
            detail: [
              "AI memetakan beauty brand dan influencer bisnis yang relevan.",
              "Fokus pada peluang kolaborasi B2B."
            ]
          },
          {
            phase: "Tahap 2: Conversation Start",
            detail: [
              "Outreach dibuka dengan angle kolaborasi.",
              "Pendekatan tidak langsung promosi treatment."
            ]
          },
          {
            phase: "Tahap 3: Intent Classification",
            detail: [
              "Setiap respons dipetakan berdasarkan potensi partnership.",
              "Tim fokus hanya pada peluang dengan kualitas tertinggi."
            ]
          },
          {
            phase: "Tahap 4: Escalation to Deal",
            detail: [
              "Partner dengan intent tinggi langsung dieskalasi.",
              "Pembahasan diarahkan ke campaign dan aktivasi bersama."
            ]
          }
        ],
        problem: ["Bergantung pada ads", "Tidak punya sistem partnership B2B", "Peluang kolaborasi sering terlewat"],
        implementation: [
          "Target beauty brand dan influencer bisnis",
          "AI memulai percakapan kolaborasi",
          "Sistem klasifikasi partnership"
        ],
        metrics: ["12 partnership aktif", "Brand exposure meningkat", "Channel referral baru"],
        insight: "Partnership outreach yang sistematis membuka channel growth non-ads yang berkelanjutan."
      }
    ],
    resourcePosts: [
      {
        slug: "quick-start-implementation",
        title: "Quick Start: Implementasi Aegis AI",
        excerpt: "Panduan tahap demi tahap setup awal hingga sistem siap live.",
        category: "Getting Started",
        readTime: "8 min",
        date: "2026-02-25",
        content: "Tujuan:\nMenyiapkan Aegis AI agar bisa langsung dipakai sebagai client acquisition infrastructure.\n\nLangkah Implementasi:\n1. Definisikan objective bisnis (meeting target bulanan, conversion target, dan revenue target).\n2. Tetapkan ICP (industry, ukuran bisnis, wilayah, dan profil decision maker).\n3. Upload data dasar penawaran (service utama, studi kasus, differentiator, dan CTA).\n4. Pilih channel operasional (Instagram, Email, WhatsApp, atau kombinasi multi-channel).\n5. Aktifkan sequence follow up awal (day 3, day 7, day 14).\n6. Uji 1 minggu pertama pada sample audience sebelum scale penuh.\n\nOutput yang diharapkan:\n- Workflow outreach aktif.\n- Kualifikasi lead berjalan otomatis.\n- Dashboard metrik mulai terisi untuk baseline analisis."
      },
      {
        slug: "operational-workflow-guide",
        title: "Operational Workflow Guide",
        excerpt: "Cara kerja Aegis AI dari targeting sampai eskalasi hot lead.",
        category: "Operations",
        readTime: "10 min",
        date: "2026-02-25",
        content: "Alur Kerja Sistem:\n\nPhase 1 - Strategic Targeting Engine\n- Sistem memetakan niche, ICP, dan prioritas akun berdasarkan potensi.\n\nPhase 2 - AI Lead Hunter\n- Prospek dikumpulkan dan diperkaya datanya sesuai parameter targeting.\n\nPhase 3 - Outreach & Conversation Engine\n- AI memulai percakapan personal.\n- Respons prospect dipetakan berdasarkan intent.\n\nPhase 4 - Follow Up Automation\n- Follow up otomatis berjalan terjadwal dengan konten bernilai.\n\nPhase 5 - Qualification & Escalation\n- Lead diklasifikasikan (hot, warm, cold).\n- Hot lead langsung dieskalasi ke tim closing.\n\nPhase 6 - Dashboard & Optimization\n- Tim memonitor response rate, meeting rate, conversion, dan revenue impact.\n- Script serta targeting dioptimasi berkala dari data aktual."
      },
      {
        slug: "conversation-logic-playbook",
        title: "Conversation Logic Playbook",
        excerpt: "Playbook respons AI untuk berbagai skenario percakapan prospek.",
        category: "Conversation Intelligence",
        readTime: "9 min",
        date: "2026-02-25",
        content: "Aturan Respons Utama:\n\n1. Saat prospect bertanya harga\n- Jangan langsung kirim angka.\n- Gali konteks kebutuhan dan objective bisnis prospect.\n- Framing penawaran berdasarkan value, bukan hanya price.\n\n2. Saat prospect bertanya layanan\n- Jelaskan layanan secara singkat dan relevan.\n- Arahkan ke use case yang paling sesuai dengan industrinya.\n\n3. Saat prospect menunjukkan intent tinggi\n- Kirim studi kasus yang relevan.\n- Arahkan ke next step (meeting/demo).\n\n4. Saat prospect tidak membalas\n- Sistem menjalankan follow up sequence otomatis.\n- Gunakan konten edukatif, bukan spam promosi.\n\nChecklist kualitas percakapan:\n- Tone konsisten dengan positioning brand.\n- CTA jelas tapi tetap natural.\n- Tidak over-claim hasil."
      },
      {
        slug: "security-and-governance-standards",
        title: "Security & Governance Standards",
        excerpt: "Standar keamanan data, kontrol akses, dan governance operasional.",
        category: "Security",
        readTime: "7 min",
        date: "2026-02-25",
        content: "Framework Keamanan Operasional:\n\n1. Access Control\n- Gunakan role-based access untuk membatasi hak akses tim.\n- Pisahkan akses admin, operator, dan reviewer.\n\n2. Data Handling\n- Simpan hanya data yang relevan dengan operasional akuisisi.\n- Terapkan kebijakan retensi dan pembersihan data berkala.\n\n3. Auditability\n- Catat perubahan workflow, script, dan aturan kualifikasi.\n- Pastikan setiap perubahan bisa ditelusuri.\n\n4. Escalation Protocol\n- Siapkan SOP jika ada anomali sistem atau percakapan sensitif.\n- Semua eskalasi harus terdokumentasi.\n\n5. Compliance Readiness\n- Struktur workflow dibuat agar siap untuk kebutuhan governance enterprise.\n- Dokumentasi proses dijaga agar mudah diaudit internal."
      }
    ]
  },
  en: {
    trustIndicators: [
      "Custom-built for service industries",
      "Data-driven qualification system",
      "Setup once, optimize continuously"
    ],
    coreProblems: [
      "Heavy reliance on referrals",
      "Personal network as a primary sales channel",
      "Organic content without structured follow-up",
      "Manual sales process without structured data"
    ],
    coreImpacts: [
      "Inconsistent lead flow",
      "Missed follow-ups",
      "Unclear conversion visibility",
      "Hard-to-forecast revenue"
    ],
    architectureLayers: [
      {
        title: "Layer 1 - Strategic Targeting Engine",
        description: "Define ideal niche, ICP, industry/size/location/digital activity segmentation, and lead potential scoring.",
        output: "Output: Curated prospect database every month."
      },
      {
        title: "Layer 2 - AI Lead Hunter",
        description: "Collect prospects based on parameters, analyze digital profiles, identify needs, and sync to CRM.",
        output: "Target: 500-1,000 prospects per month."
      },
      {
        title: "Layer 3 - AI Outreach & Conversation Engine",
        description: "AI initiates conversations with specific observations, light insights, and open questions for natural dialogue.",
        output: "Intent-based decision logic for every prospect reply."
      },
      {
        title: "Layer 4 - AI Follow Up Automation",
        description: "Scheduled follow-ups on day 3, 7, 14, then passive reminders 60-90 days with valuable content.",
        output: "Every follow-up contains insights, case studies, or relevant updates."
      },
      {
        title: "Layer 5 - Qualification & Escalation System",
        description: "Classify hot/warm/cold leads based on intent signals and auto-escalate to closing team.",
        output: "Hot leads immediately forwarded to your team."
      }
    ],
    conversationLogic: [
      "Asks about price -> AI explores needs first before framing offer.",
      "Asks about services -> AI explains briefly then directs discussion to business fit.",
      "Shows interest -> AI sends relevant case study and pushes for next step.",
      "Goes silent -> AI executes scheduled follow-up without spamming."
    ],
    aiExecutionTimeline: [
      {
        phase: "Phase 01 - Strategic Targeting Engine",
        detail: [
          "AI maps ideal niches and builds ICP (Ideal Client Profile).",
          "Segmentation by industry, business size, location, and digital activity.",
          "Each account scored for potential to prioritize outreach."
        ]
      },
      {
        phase: "Phase 02 - AI Lead Hunter",
        detail: [
          "System collects prospects based on targeting parameters.",
          "AI analyzes digital profiles and business need signals.",
          "All prospect data automatically saved to CRM.",
          "Standard target: 500-1,000 prospects per month."
        ]
      },
      {
        phase: "Phase 03 - AI Outreach & Conversation Engine",
        detail: [
          "AI opens natural dialogue: specific observation, light insight, then open question.",
          "If prospect asks price: AI explores needs before framing offer.",
          "If prospect asks services: AI explains briefly then directs discussion.",
          "If prospect shows interest: AI sends relevant case study.",
          "If prospect goes silent: AI moves to automated follow-up track."
        ]
      },
      {
        phase: "Phase 04 - Follow Up Automation (Day 3, 7, 14, 60-90)",
        detail: [
          "Scheduled follow-ups run on day 3, 7, and 14.",
          "Passive reminders continue from day 60 to 90.",
          "Every follow-up brings new value: insights, case studies, industry info, or relevant updates.",
          "Goal is education and nurturing, not spam."
        ]
      },
      {
        phase: "Phase 05 - Qualification & Escalation",
        detail: [
          "AI classifies prospects as Hot, Warm, or Cold.",
          "Hot Lead signals include timeline, proposal, or budget questions.",
          "Hot leads automatically escalated to closing team to maintain momentum."
        ]
      },
      {
        phase: "Phase 06 - Performance Dashboard",
        detail: [
          "Dashboard shows total prospects added and outreach sent.",
          "Dashboard tracks response rate, meetings booked, conversion rate, and revenue generated.",
          "Dashboard displays top performing industries and script performance analysis.",
          "This makes business development measurable, not assumption-based."
        ]
      }
    ],
    dashboardMetrics: [
      "Total prospects added",
      "Outreach sent",
      "Response rate",
      "Meetings booked",
      "Conversion rate",
      "Revenue generated",
      "Top performing industries",
      "Script performance analysis"
    ],
    industries: [
      {
        slug: "agency",
        title: "Agency",
        problem: "Unstable inbound and long sales cycles due to unsystematic business development.",
        solution: "Aegis creates niche-based personal outreach engine and structured follow-up.",
        outcomes: ["Increased reply rate", "Consistent meeting bookings", "More predictable new clients"]
      },
      {
        slug: "consultant",
        title: "Consultant",
        problem: "Hard to reach business owners while competition gets denser.",
        solution: "Aegis prioritizes educational approach to open quality dialogues.",
        outcomes: ["More relevant conversations", "Increased retainer leads", "Healthier pipeline"]
      },
      {
        slug: "legal",
        title: "Legal",
        problem: "Manual and unstructured client intake causing many non-fit cases filtered too late.",
        solution: "Aegis automates intake, qualification, and routing based on case intent.",
        outcomes: ["Faster intake", "Better case-fit", "Reduced non-billable time"]
      },
      {
        slug: "clinic",
        title: "Clinic",
        problem: "Dependent on ads, no consistent B2B partnership collaboration system.",
        solution: "Aegis opens collaboration conversations and classifies potential partners.",
        outcomes: ["More active partnerships", "Increased brand exposure", "New referral channels"]
      },
      {
        slug: "interior",
        title: "Interior",
        problem: "Unstable inbound leads and many prospects lost due to weak follow-up.",
        solution: "Aegis builds visual nurture sequences for high-ticket opportunities.",
        outcomes: ["More high-ticket projects", "Better system ROI", "Cleaner nurture process"]
      },
      {
        slug: "software-house",
        title: "Software House",
        problem: "Ad-hoc outreach, inconsistent discovery calls among team members.",
        solution: "Aegis standardizes qualification and handoff before sales calls.",
        outcomes: ["Improved call quality", "Shorter sales cycles", "Clearer forecasting"]
      }
    ],
    caseStudies: [
      {
        id: "cs-digital-agency",
        client: "Digital Marketing Agency",
        industry: "Agency",
        timeline: "90-Day Results",
        workflowTimeline: [
          {
            phase: "Week 1-2: Targeting Setup",
            detail: [
              "AI targeted e-commerce brands and local SMEs.",
              "Built niche-specific ICP for outreach."
            ]
          },
          {
            phase: "Week 3-4: Lead Hunting",
            detail: [
              "Hunting engine running with 800 prospects/month target.",
              "Scoring system used to prioritize accounts."
            ]
          },
          {
            phase: "Week 5-8: Personalized Outreach",
            detail: [
              "AI sent personalized outreach with niche business context.",
              "No mass templates used."
            ]
          },
          {
            phase: "Week 9-12: Follow-Up + Qualification",
            detail: [
              "Day 3/7/14 follow-up cadence automated.",
              "Hot leads immediately forwarded to team for meeting booking."
            ]
          }
        ],
        problem: ["Heavy inbound dependency", "Unstable client flow", "Long sales cycle"],
        implementation: [
          "Target e-commerce & local SMEs",
          "AI hunting 800 prospects/month",
          "Niche-based personalized outreach"
        ],
        metrics: ["2,400 prospects", "14% reply rate", "32 meetings", "8 new clients", "~IDR 180M additional revenue"],
        insight: "Niche targeting and specific case studies significantly increased reply rates."
      },
      {
        id: "cs-tax-consultant",
        client: "Tax Consultant",
        industry: "Consultant",
        timeline: "4-Month Results",
        workflowTimeline: [
          {
            phase: "Month 1: Market Segmentation",
            detail: [
              "Targeted newly established PT/CV (0-2 years old).",
              "Segmented by business sector."
            ]
          },
          {
            phase: "Month 2: Educational Outreach",
            detail: [
              "Initial messages designed to be educational.",
              "Goal: open conversations without hard selling."
            ]
          },
          {
            phase: "Month 3: Staged Follow-Up",
            detail: [
              "AI executed staged follow-up with business need context.",
              "Follow-up content included regulatory insights."
            ]
          },
          {
            phase: "Month 4: Retainer Qualification",
            detail: [
              "High-intent prospects prioritized.",
              "Directed to annual retainer offer track."
            ]
          }
        ],
        problem: ["Hard to reach business owners", "High competition", "Manual outreach ineffective"],
        implementation: [
          "Target new PT/CV 0-2 years",
          "Business sector segmentation",
          "Educational outreach (no hard selling)"
        ],
        metrics: ["3,000 prospects", "11% reply rate", "19 new retainer clients", "Average annual contracts"],
        insight: "Educational approach more effective than direct selling."
      },
      {
        id: "cs-interior",
        client: "Interior Designer",
        industry: "Interior",
        timeline: "6-Month Results",
        workflowTimeline: [
          {
            phase: "Month 1-2: Prospect Mapping",
            detail: [
              "Targeted developers and newly launched cafes.",
              "Focused on high-ticket demand sources."
            ]
          },
          {
            phase: "Month 3-4: Contextual Outreach",
            detail: [
              "Initial conversations focused on new project needs.",
              "AI brought visual brand positioning angle."
            ]
          },
          {
            phase: "Month 5: 3-Stage Follow-Up",
            detail: [
              "AI sent 3-stage follow-up with visual studies.",
              "Goal: build trust before proposal discussion."
            ]
          },
          {
            phase: "Month 6: Hot Lead Escalation",
            detail: [
              "High project intent leads immediately escalated.",
              "Team continued to commercial and scope discussion."
            ]
          }
        ],
        problem: ["Dependent on Instagram inbound", "No follow-up system", "Many leads lost"],
        implementation: [
          "Target new developers and cafes",
          "AI focus on newly launched businesses",
          "3-stage visual follow-up"
        ],
        metrics: ["4 high-ticket projects", "Project value IDR 250-400M", "System ROI > 8x annual cost"],
        insight: "High-ticket services require longer nurturing, not hard selling."
      },
      {
        id: "cs-clinic",
        client: "Aesthetic Clinic",
        industry: "Clinic",
        timeline: "Implementation Results",
        workflowTimeline: [
          {
            phase: "Stage 1: Partnership Targeting",
            detail: [
              "AI mapped relevant beauty brands and business influencers.",
              "Focused on B2B collaboration opportunities."
            ]
          },
          {
            phase: "Stage 2: Conversation Start",
            detail: [
              "Outreach opened with collaboration angle.",
              "Approach not directly promoting treatments."
            ]
          },
          {
            phase: "Stage 3: Intent Classification",
            detail: [
              "Every response mapped by partnership potential.",
              "Team focused only on highest quality opportunities."
            ]
          },
          {
            phase: "Stage 4: Escalation to Deal",
            detail: [
              "High-intent partners immediately escalated.",
              "Discussion directed to campaign and joint activation."
            ]
          }
        ],
        problem: ["Ad-dependent growth", "No B2B partnership system", "Missed collaboration opportunities"],
        implementation: [
          "Target beauty brands and business influencers",
          "AI opens collaboration conversations",
          "Partnership classification system"
        ],
        metrics: ["12 active partnerships", "Increased brand exposure", "New referral channel"],
        insight: "Systematic partnership outreach created sustainable non-ads growth channel."
      }
    ],
    resourcePosts: [
      {
        slug: "quick-start-implementation",
        title: "Quick Start: Aegis AI Implementation",
        excerpt: "Step-by-step guide for initial setup until system goes live.",
        category: "Getting Started",
        readTime: "8 min",
        date: "2026-02-25",
        content: "Objective:\nPrepare Aegis AI for immediate use as client acquisition infrastructure.\n\nImplementation Steps:\n1. Define business objectives (monthly meeting targets, conversion targets, revenue targets).\n2. Establish ICP (industry, business size, region, decision maker profile).\n3. Upload base offer data (core services, case studies, differentiators, CTA).\n4. Choose operational channels (Instagram, Email, WhatsApp, or multi-channel combination).\n5. Activate initial follow-up sequence (day 3, day 7, day 14).\n6. Test first week on sample audience before full scale.\n\nExpected outputs:\n- Active outreach workflow.\n- Automated lead qualification.\n- Dashboard metrics populated for baseline analysis."
      },
      {
        slug: "operational-workflow-guide",
        title: "Operational Workflow Guide",
        excerpt: "How Aegis AI works from targeting to hot lead escalation.",
        category: "Operations",
        readTime: "10 min",
        date: "2026-02-25",
        content: "System Workflow:\n\nPhase 1 - Strategic Targeting Engine\n- System maps niches, ICP, and account priorities by potential.\n\nPhase 2 - AI Lead Hunter\n- Prospects collected and enriched per targeting parameters.\n\nPhase 3 - Outreach & Conversation Engine\n- AI initiates personalized conversations.\n- Prospect responses mapped by intent.\n\nPhase 4 - Follow Up Automation\n- Automated follow-ups run on schedule with valuable content.\n\nPhase 5 - Qualification & Escalation\n- Leads classified (hot, warm, cold).\n- Hot leads immediately escalated to closing team.\n\nPhase 6 - Dashboard & Optimization\n- Team monitors response rate, meeting rate, conversion, revenue impact.\n- Scripts and targeting optimized periodically from actual data."
      },
      {
        slug: "conversation-logic-playbook",
        title: "Conversation Logic Playbook",
        excerpt: "AI response playbook for various prospect conversation scenarios.",
        category: "Conversation Intelligence",
        readTime: "9 min",
        date: "2026-02-25",
        content: "Core Response Rules:\n\n1. When prospect asks about price\n- Don't send numbers immediately.\n- Explore context needs and prospect business objectives.\n- Frame offer based on value, not just price.\n\n2. When prospect asks about services\n- Explain services briefly and relevantly.\n- Direct to use case most suitable for their industry.\n\n3. When prospect shows high intent\n- Send relevant case study.\n- Direct to next step (meeting/demo).\n\n4. When prospect doesn't respond\n- System executes automated follow-up sequence.\n- Use educational content, not promotional spam.\n\nConversation quality checklist:\n- Tone consistent with brand positioning.\n- CTA clear but natural.\n- No over-claiming results."
      },
      {
        slug: "security-and-governance-standards",
        title: "Security & Governance Standards",
        excerpt: "Data security standards, access control, and operational governance.",
        category: "Security",
        readTime: "7 min",
        date: "2026-02-25",
        content: "Operational Security Framework:\n\n1. Access Control\n- Use role-based access to limit team permissions.\n- Separate admin, operator, and reviewer access.\n\n2. Data Handling\n- Store only data relevant to acquisition operations.\n- Apply data retention and cleanup policies periodically.\n\n3. Auditability\n- Log workflow changes, scripts, and qualification rules.\n- Ensure all changes are traceable.\n\n4. Escalation Protocol\n- Prepare SOP for system anomalies or sensitive conversations.\n- All escalations must be documented.\n\n5. Compliance Readiness\n- Workflow structure designed for enterprise governance needs.\n- Process documentation maintained for easy internal audit."
      }
    ]
  },
  zh: {
    trustIndicators: [
      "专为服务行业定制",
      "数据驱动的线索筛选系统",
      "一次配置，持续优化"
    ],
    coreProblems: [
      "过度依赖转介绍",
      "过度依赖个人关系获客",
      "只有内容运营，缺乏系统化跟进",
      "人工销售流程，缺少结构化数据"
    ],
    coreImpacts: [
      "线索来源不稳定",
      "跟进容易遗漏",
      "转化率不清晰",
      "营收难以预测"
    ],
    architectureLayers: [
      {
        title: "第一层 - 战略定向引擎",
        description: "确定理想细分市场、ICP、行业/规模/地点/数字活动细分，以及潜在客户潜力评分。",
        output: "输出：每月精选潜在客户数据库。"
      },
      {
        title: "第二层 - AI 线索挖掘",
        description: "根据参数收集潜在客户，分析数字画像，识别需求，并同步到 CRM。",
        output: "目标：每月 500-1000 条线索。"
      },
      {
        title: "第三层 - AI 外展与对话引擎",
        description: "AI 通过具体观察、轻度洞察和开放性问题发起自然对话。",
        output: "基于意图的决策逻辑处理每个潜在客户回复。"
      },
      {
        title: "第四层 - AI 跟进自动化",
        description: "第 3、7、14 天安排跟进，然后 60-90 天被动提醒，提供有价值的内容。",
        output: "每次跟进包含洞察、案例研究或相关更新。"
      },
      {
        title: "第五层 - 筛选与升级系统",
        description: "基于意图信号将线索分为热/温/冷，并自动升级到成交团队。",
        output: "热线索立即转发给您的团队。"
      }
    ],
    conversationLogic: [
      "询问价格 -> AI 先探索需求再构建报价。",
      "询问服务 -> AI 简要说明然后引导讨论业务契合度。",
      "表示兴趣 -> AI 发送相关案例并推动下一步。",
      "沉默不语 -> AI 执行预定跟进，不发送垃圾信息。"
    ],
    aiExecutionTimeline: [
      {
        phase: "第一阶段 - 战略定向引擎",
        detail: [
          "AI 绘制理想细分市场并构建 ICP（理想客户画像）。",
          "按行业、企业规模、地点和数字活动进行细分。",
          "每个账户评分以确定外展优先级。"
        ]
      },
      {
        phase: "第二阶段 - AI 线索挖掘",
        detail: [
          "系统根据定向参数收集潜在客户。",
          "AI 分析数字画像和业务需求信号。",
          "所有潜在客户数据自动保存到 CRM。",
          "标准目标：每月 500-1000 条线索。"
        ]
      },
      {
        phase: "第三阶段 - AI 外展与对话引擎",
        detail: [
          "AI 开启自然对话：具体观察、轻度洞察，然后开放性问题。",
          "如果潜在客户询问价格：AI 在构建报价前探索需求。",
          "如果潜在客户询问服务：AI 简要说明然后引导讨论。",
          "如果潜在客户表示兴趣：AI 发送相关案例。",
          "如果潜在客户沉默：AI 移至自动跟进流程。"
        ]
      },
      {
        phase: "第四阶段 - 跟进自动化（第 3、7、14、60-90 天）",
        detail: [
          "第 3、7、14 天执行预定跟进。",
          "第 60-90 天继续被动提醒。",
          "每次跟进带来新价值：洞察、案例、行业信息或相关更新。",
          "目标是教育和培养，不是垃圾信息。"
        ]
      },
      {
        phase: "第五阶段 - 筛选与升级",
        detail: [
          "AI 将潜在客户分类为热、温、冷。",
          "热线索信号包括时间线、提案或预算问题。",
          "热线索自动升级到成交团队以保持势头。"
        ]
      },
      {
        phase: "第六阶段 - 绩效仪表板",
        detail: [
          "仪表板显示添加的潜在客户总数和发送的外展数量。",
          "仪表板跟踪回复率、预订会议数、转化率和产生的收入。",
          "仪表板显示表现最佳的行业和脚本绩效分析。",
          "这使业务开发可衡量，不再基于假设。"
        ]
      }
    ],
    dashboardMetrics: [
      "添加的潜在客户总数",
      "发送的外展",
      "回复率",
      "预订的会议",
      "转化率",
      "产生的收入",
      "表现最佳的行业",
      "脚本绩效分析"
    ],
    industries: [
      {
        slug: "agency",
        title: "代理机构",
        problem: "由于业务开发不系统，入站流量不稳定且销售周期长。",
        solution: "Aegis 创建基于细分的个性化外展引擎和结构化跟进。",
        outcomes: ["回复率提高", "会议预订稳定", "新客户更可预测"]
      },
      {
        slug: "consultant",
        title: "顾问",
        problem: "难以触达企业主，竞争日益激烈。",
        solution: "Aegis 优先采用教育方法开启高质量对话。",
        outcomes: ["对话更相关", "常年客户线索增加", "管道更健康"]
      },
      {
        slug: "legal",
        title: "法律",
        problem: "手动且非结构化的客户 intake 导致许多不匹配的案件筛选太晚。",
        solution: "Aegis 自动化 intake、筛选和基于案件意图的路由。",
        outcomes: ["intake 更快", "案件匹配度更好", "减少非计费时间"]
      },
      {
        slug: "clinic",
        title: "诊所",
        problem: "依赖广告，没有一致的 B2B 合作伙伴协作系统。",
        solution: "Aegis 开启合作对话并分类潜在合作伙伴。",
        outcomes: ["活跃合作伙伴增加", "品牌曝光度提高", "新推荐渠道"]
      },
      {
        slug: "interior",
        title: "室内设计",
        problem: "入站线索不稳定，由于跟进薄弱导致许多潜在客户流失。",
        solution: "Aegis 为高价值机会构建视觉培养序列。",
        outcomes: ["高价值项目增加", "系统 ROI 提高", "培养流程更清晰"]
      },
      {
        slug: "software-house",
        title: "软件公司",
        problem: "临时外展，团队成员之间的发现电话不一致。",
        solution: "Aegis 在销售电话前标准化筛选和交接。",
        outcomes: ["电话质量提高", "销售周期缩短", "预测更清晰"]
      }
    ],
    caseStudies: [
      {
        id: "cs-digital-agency",
        client: "数字营销机构",
        industry: "Agency",
        timeline: "90 天成果",
        workflowTimeline: [
          {
            phase: "第 1-2 周：定向设置",
            detail: [
              "AI 锁定电商品牌与本地中小企业",
              "建立细分 ICP"
            ]
          },
          {
            phase: "第 3-4 周：线索采集",
            detail: [
              "每月目标 800 条线索",
              "按评分优先触达"
            ]
          },
          {
            phase: "第 5-8 周：个性化外呼",
            detail: [
              "基于行业场景发送个性化信息",
              "避免批量模板"
            ]
          },
          {
            phase: "第 9-12 周：跟进与分级",
            detail: [
              "执行第 3/7/14 天自动跟进",
              "将热线索升级为预约会议"
            ]
          }
        ],
        problem: ["过度依赖 inbound", "客户流入不稳定", "销售周期长"],
        implementation: ["电商与中小企业定向", "AI 每月采集 800 线索", "行业化外呼流程"],
        metrics: ["2,400 条线索", "14% 回复率", "32 场会议", "8 个新客户"],
        insight: "细分定向与案例证明可显著提升回复质量。"
      },
      {
        id: "cs-tax-consultant",
        client: "税务顾问",
        industry: "Consultant",
        timeline: "4 个月成果",
        workflowTimeline: [
          {
            phase: "第 1 月：市场分层",
            detail: [
              "目标为新成立企业",
              "按行业细分"
            ]
          },
          {
            phase: "第 2 月：教育型外呼",
            detail: [
              "使用教育式开场",
              "避免强推销"
            ]
          },
          {
            phase: "第 3 月：跟进",
            detail: [
              "分阶段跟进",
              "加入法规场景提升相关性"
            ]
          },
          {
            phase: "第 4 月：分级",
            detail: [
              "优先高意向线索",
              "导入年费顾问管道"
            ]
          }
        ],
        problem: ["难触达老板", "竞争激烈", "人工外呼效率低"],
        implementation: ["行业分层", "教育型外呼", "结构化分级流程"],
        metrics: ["3,000 条线索", "11% 回复率", "19 个年度客户"],
        insight: "教育型沟通比直接销售更有效。"
      },
      {
        id: "cs-interior",
        client: "室内设计公司",
        industry: "Interior",
        timeline: "6 个月成果",
        workflowTimeline: [
          {
            phase: "第 1-2 月：线索映射",
            detail: [
              "目标为开发商与新开门店",
              "聚焦高客单需求"
            ]
          },
          {
            phase: "第 3-4 月：场景外呼",
            detail: [
              "围绕新项目需求沟通",
              "通过视觉内容建立信任"
            ]
          },
          {
            phase: "第 5 月：三段跟进",
            detail: [
              "用视觉案例持续跟进",
              "提升方案讨论意愿"
            ]
          },
          {
            phase: "第 6 月：升级成交",
            detail: [
              "热线索升级到商务讨论",
              "优先高价值机会"
            ]
          }
        ],
        problem: ["依赖社媒 inbound", "缺少跟进系统", "线索流失严重"],
        implementation: ["新开项目定向", "视觉驱动 nurture", "意图驱动升级"],
        metrics: ["4 个高客单项目", "项目价值 2.5-4 亿印尼盾", "系统 ROI > 8x"],
        insight: "高客单服务需要持续培育，而非强销售。"
      },
      {
        id: "cs-clinic",
        client: "医美诊所",
        industry: "Clinic",
        timeline: "实施成果",
        workflowTimeline: [
          {
            phase: "阶段 1：定向",
            detail: [
              "映射美妆品牌与商务达人",
              "聚焦 B2B 合作机会"
            ]
          },
          {
            phase: "阶段 2：会话启动",
            detail: [
              "以合作为切入点",
              "避免直接促销项目"
            ]
          },
          {
            phase: "阶段 3：意图分级",
            detail: [
              "按合作潜力分类响应",
              "聚焦高价值伙伴"
            ]
          },
          {
            phase: "阶段 4：升级",
            detail: [
              "进入联名活动规划",
              "加速合作落地"
            ]
          }
        ],
        problem: ["增长依赖广告", "缺少 B2B 合作系统", "合作机会流失"],
        implementation: ["合作方定向流程", "意图分类逻辑", "快速团队交接"],
        metrics: ["12 个活跃合作", "品牌曝光提升", "新增转介绍渠道"],
        insight: "系统化合作外呼可建立可持续的非广告增长通道。"
      }
    ],
    resourcePosts: [
      {
        slug: "quick-start-implementation",
        title: "快速入门：实施 Aegis AI",
        excerpt: "逐步指南，从初始设置到系统上线。",
        category: "Getting Started",
        readTime: "8 min",
        date: "2026-02-25",
        content: "目标：\n准备 Aegis AI 作为客户获取基础设施立即使用。\n\n实施步骤：\n1. 定义业务目标（月度会议目标、转化目标、收入目标）。\n2. 建立 ICP（行业、企业规模、地区、决策者画像）。\n3. 上传基础报价数据（核心服务、案例、差异化、CTA）。\n4. 选择运营渠道（Instagram、Email、WhatsApp 或多渠道组合）。\n5. 激活初始跟进序列（第 3、7、14 天）。\n6. 在全面扩展前在样本受众上测试第一周。\n\n预期输出：\n- 活跃的外展工作流。\n- 自动化线索筛选。\n- 仪表板指标填充用于基线分析。"
      },
      {
        slug: "operational-workflow-guide",
        title: "运营工作流指南",
        excerpt: "Aegis AI 从定向到热线索升级的工作原理。",
        category: "Operations",
        readTime: "10 min",
        date: "2026-02-25",
        content: "系统工作流：\n\n第一阶段 - 战略定向引擎\n- 系统按潜力绘制细分市场、ICP 和账户优先级。\n\n第二阶段 - AI 线索挖掘\n- 根据定向参数收集和丰富潜在客户数据。\n\n第三阶段 - 外展与对话引擎\n- AI 发起个性化对话。\n- 潜在客户回复按意图映射。\n\n第四阶段 - 跟进自动化\n- 自动跟进按计划运行，提供有价值的内容。\n\n第五阶段 - 筛选与升级\n- 线索分类（热、温、冷）。\n- 热线索立即升级到成交团队。\n\n第六阶段 - 仪表板与优化\n- 团队监控回复率、会议率、转化、收入影响。\n- 脚本和定向根据实际数据定期优化。"
      },
      {
        slug: "conversation-logic-playbook",
        title: "对话逻辑手册",
        excerpt: "AI 响应各种潜在客户对话场景的手册。",
        category: "Conversation Intelligence",
        readTime: "9 min",
        date: "2026-02-25",
        content: "核心响应规则：\n\n1. 当潜在客户询问价格\n- 不要立即发送数字。\n- 探索上下文需求和潜在客户业务目标。\n- 基于价值构建报价，不只是价格。\n\n2. 当潜在客户询问服务\n- 简要且相关地解释服务。\n- 引导到最适合其行业的用例。\n\n3. 当潜在客户表示高意向\n- 发送相关案例。\n- 引导到下一步（会议/演示）。\n\n4. 当潜在客户不回复\n- 系统执行自动跟进序列。\n- 使用教育内容，不是促销垃圾信息。\n\n对话质量检查清单：\n- 语调与品牌定位一致。\n- CTA 清晰但自然。\n- 不过度承诺结果。"
      },
      {
        slug: "security-and-governance-standards",
        title: "安全与治理标准",
        excerpt: "数据安全标准、访问控制和运营治理。",
        category: "Security",
        readTime: "7 min",
        date: "2026-02-25",
        content: "运营安全框架：\n\n1. 访问控制\n- 使用基于角色的访问限制团队权限。\n- 分离管理员、操作员和审查员访问。\n\n2. 数据处理\n- 仅存储与获取运营相关的数据。\n- 定期应用数据保留和清理策略。\n\n3. 可审计性\n- 记录工作流更改、脚本和筛选规则。\n- 确保所有更改可追溯。\n\n4. 升级协议\n- 为系统异常或敏感对话准备 SOP。\n- 所有升级必须记录。\n\n5. 合规准备\n- 工作流结构设计用于企业治理需求。\n- 流程文档维护以便轻松内部审计。"
      }
    ]
  }
};
