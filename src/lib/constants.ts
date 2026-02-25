import { CaseStudy, Industry, ResourcePost } from "@/types";

export const trustIndicators = [
  "Custom-built for service industries",
  "Data-driven qualification system",
  "Setup once, optimize continuously"
];

export const coreProblems = [
  "Referral sebagai sumber utama lead",
  "Relasi personal sebagai channel penjualan",
  "Konten organik tanpa sistem follow up",
  "Tim sales manual tanpa data terstruktur"
];

export const coreImpacts = [
  "Lead tidak konsisten",
  "Follow up terlewat",
  "Tidak tahu conversion rate sebenarnya",
  "Tidak bisa memprediksi revenue"
];

export const architectureLayers = [
  {
    title: "Layer 1 - Strategic Targeting Engine",
    description:
      "Menentukan niche ideal, ICP, segmentasi industri/ukuran/lokasi/aktivitas digital, serta scoring potensi lead.",
    output: "Output: database prospek terkurasi setiap bulan."
  },
  {
    title: "Layer 2 - AI Lead Hunter",
    description:
      "Mengumpulkan prospek sesuai parameter, menganalisis profil digital, identifikasi kebutuhan, dan sinkron ke CRM.",
    output: "Target rata-rata: 500-1.000 prospek per bulan."
  },
  {
    title: "Layer 3 - AI Outreach & Conversation Engine",
    description:
      "AI memulai percakapan dengan observasi spesifik, insight ringan, dan pertanyaan terbuka untuk dialog natural.",
    output: "Decision logic berbasis intent untuk setiap balasan prospect."
  },
  {
    title: "Layer 4 - AI Follow Up Automation",
    description:
      "Follow up terjadwal di hari ke-3, ke-7, ke-14, lalu reminder pasif 60-90 hari dengan konten bernilai.",
    output: "Setiap follow up berisi insight, studi kasus, atau update relevan."
  },
  {
    title: "Layer 5 - Qualification & Escalation System",
    description:
      "Klasifikasi hot/warm/cold lead berdasarkan sinyal intent dan eskalasi otomatis ke tim closing.",
    output: "Hot lead langsung diteruskan ke tim Anda."
  }
];

export const conversationLogic = [
  "Bertanya harga -> AI gali kebutuhan dulu sebelum framing penawaran.",
  "Bertanya layanan -> AI jelaskan ringkas lalu arahkan diskusi ke fit bisnis.",
  "Tertarik -> AI kirim studi kasus relevan dan dorong next step.",
  "Diam -> AI jalankan follow up terjadwal tanpa spam."
];

export const aiExecutionTimeline = [
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
];

export const dashboardMetrics = [
  "Total prospect added",
  "Outreach sent",
  "Response rate",
  "Meeting booked",
  "Conversion rate",
  "Revenue generated",
  "Top performing industries",
  "Script performance analysis"
];

export const industries: Industry[] = [
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
];

export const caseStudies: CaseStudy[] = [
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
];

export const resourcePosts: ResourcePost[] = [
  {
    slug: "ai-lead-response-playbook",
    title: "AI Lead Response Playbook untuk Service Business",
    excerpt: "Framework implementasi response + follow up agar lead tidak hilang di tengah funnel.",
    category: "Playbook",
    readTime: "6 min",
    date: "2026-01-12",
    content:
      "Dokumen ini menjelaskan cara menyusun SLA response, cadence follow up, dan handoff ke sales team agar pipeline menjadi lebih prediktif."
  },
  {
    slug: "measuring-client-acquisition-roi",
    title: "Measuring Client Acquisition ROI",
    excerpt: "Cara menghubungkan activity outreach dengan hasil revenue secara operasional.",
    category: "Analytics",
    readTime: "5 min",
    date: "2025-12-02",
    content:
      "Gunakan kombinasi metrik response, qualification, meeting booked, conversion rate, dan revenue generated untuk evaluasi berkala."
  },
  {
    slug: "enterprise-ai-compliance-basics",
    title: "Enterprise AI Compliance Basics",
    excerpt: "Checklist governance dan keamanan data untuk implementasi AI di service business.",
    category: "Compliance",
    readTime: "7 min",
    date: "2025-11-04",
    content:
      "Fokus pada role-based access, audit trail, data retention, dan SOP eskalasi untuk memastikan implementasi tetap aman dan auditable."
  }
];
