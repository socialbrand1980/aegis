# Aegis AI Website

Website marketing SaaS berbasis **Next.js 14 (App Router)**, **TypeScript**, dan **TailwindCSS**.

README ini dibuat untuk memudahkan kamu edit sendiri (copywriting, section, halaman, pricing, dll).

## 1. Menjalankan Project

```bash
npm install
npm run dev
```

Buka: `http://localhost:3000`

Build production:

```bash
npm run build
npm run start
```

## 2. Struktur Utama

```txt
src/
  app/                  # Route/page Next.js
  components/
    layout/             # Navbar, Footer, Container
    sections/           # Komponen section per halaman
    forms/              # Form (Book Demo)
    ui/                 # Komponen UI reusable
  lib/
    i18n.ts             # Semua copy multi-bahasa (ID/EN/ZH)
    constants.ts        # Data statis: industry, case study, dll
  styles/
    globals.css         # Global style + utility class
```

## 3. Lokasi Edit Copy (Paling Penting)

### A. Copy Multi-bahasa global
- File: `src/lib/i18n.ts`
- Dipakai oleh:
  - Hero
  - Problem
  - Solution
  - Timeline
  - CTA
  - Navbar/Footer label
  - Product label tertentu
- Kalau mau ganti teks yang punya switch bahasa (ID/EN/中文), edit di sini.

### B. Copy/data berbasis konten panjang
- File: `src/lib/constants.ts`
- Isi:
  - industries data
  - case studies
  - workflow timeline
  - metrics, dll

### C. Copy yang hardcoded di komponen tertentu
- Pricing page: `src/components/sections/PricingTable.tsx`
  - Data plan + harga + CTA pricing + isi modal detail plan
- Modal detail pricing: `src/components/sections/PricingDetailsModal.tsx`
- Form Book Demo: `src/components/forms/DemoForm.tsx`

## 4. Mapping Halaman → File

- Home: `src/app/page.tsx`
- Product: `src/app/product/page.tsx`
- How It Works: `src/app/how-it-works/page.tsx`
- Industries overview: `src/app/industries/page.tsx`
- Industry detail:
  - `src/app/industries/agency/page.tsx`
  - `src/app/industries/consultant/page.tsx`
  - `src/app/industries/legal/page.tsx`
  - `src/app/industries/clinic/page.tsx`
  - `src/app/industries/interior/page.tsx`
  - `src/app/industries/software-house/page.tsx`
- Case Studies: `src/app/case-studies/page.tsx`
- Pricing: `src/app/pricing/page.tsx`
- Resources: `src/app/resources/page.tsx`
- Resource detail slug: `src/app/resources/[slug]/page.tsx`
- Book Demo: `src/app/book-demo/page.tsx`

## 5. Edit Pricing (Plan + Modal Detail)

Semua ada di satu tempat:
- `src/components/sections/PricingTable.tsx`

Yang bisa diubah:
- Nama plan
- Price
- Description
- Section detail fitur (Outreach, Conversation, Pipeline, Analytics, Support)
- CTA button text

Modal detail otomatis baca dari data plan di file yang sama.

## 6. Edit Form Book Demo

File:
- `src/components/forms/DemoForm.tsx`

Yang bisa diubah:
- Field input
- Label field
- Plan default
- Payload untuk Google Calendar
- Teks status submit

## 7. Edit Design Global

File:
- `src/styles/globals.css`

Yang biasa diubah:
- Utility class `.glass`, `.surface`, `.section-spacing`, `.headline`, `.subcopy`
- Behavior responsive global
- Motion layer styling (`.site-motion-layer`, `.site-motion-canvas`)

## 8. Animasi Background Global

Komponen:
- `src/components/ui/SiteMotionLayer.tsx`

Di-inject di:
- `src/app/layout.tsx`

Kalau mau matikan animasi seluruh website:
1. Hapus import `SiteMotionLayer` di `src/app/layout.tsx`
2. Hapus `<SiteMotionLayer />` di dalam `<AppProviders>`

## 9. Menambah Halaman Baru

Contoh tambah halaman `/about`:
1. Buat folder `src/app/about`
2. Buat file `src/app/about/page.tsx`
3. Tambahkan link nav di:
   - `src/lib/navigation.ts`
   - dan label di `src/lib/i18n.ts` (jika perlu multi-bahasa)

## 10. Deploy

Project sudah diset untuk **GitHub Pages** via GitHub Actions.

File deploy:
- `.github/workflows/deploy-pages.yml`

Setiap push ke branch `main` akan trigger deploy otomatis.

## 11. Tips Aman Saat Edit

- Setelah edit, jalankan:

```bash
npm run build
```

- Kalau build sukses, baru push.
- Untuk perubahan copy multi-bahasa, pastikan key di `i18n.ts` tidak typo.
- Untuk perubahan layout mobile, cek langsung di device (Safari iPhone kadang beda dari emulator).

