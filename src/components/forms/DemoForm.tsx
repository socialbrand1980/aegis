"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const revenueRanges = [
  "< $10K / month",
  "$10K - $50K / month",
  "$50K - $150K / month",
  "> $150K / month"
];

export function DemoForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "");
    const companyName = String(formData.get("companyName") ?? "");
    const industry = String(formData.get("industry") ?? "");
    const email = String(formData.get("email") ?? "");
    const monthlyRevenueRange = String(formData.get("monthlyRevenueRange") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Demo Request - ${companyName || fullName}`);
    const body = encodeURIComponent(
      [
        "Halo tim Aegis AI,",
        "",
        "Saya ingin booking demo.",
        "",
        `Nama: ${fullName}`,
        `Company: ${companyName}`,
        `Industry: ${industry}`,
        `Email: ${email}`,
        `Monthly Revenue: ${monthlyRevenueRange}`,
        "",
        "Message:",
        message || "-",
        "",
        "Terima kasih."
      ].join("\n")
    );

    window.location.href = `mailto:hello@aegis-ai.co?subject=${subject}&body=${body}`;
    setStatus("Aplikasi email Anda sudah dibuka. Silakan kirim email untuk melanjutkan booking demo.");
    setLoading(false);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass w-full max-w-2xl space-y-4 p-6 md:p-8">
      <Input name="fullName" label="Full Name" placeholder="Your full name" required />
      <Input name="companyName" label="Company Name" placeholder="Your company" required />
      <Input name="industry" label="Industry" placeholder="Agency, Legal, Clinic, ..." required />
      <Input name="email" type="email" label="Email" placeholder="name@company.com" required />

      <label className="block text-sm font-medium text-slate-200">
        Monthly Revenue Range
        <select
          name="monthlyRevenueRange"
          required
          className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-aegis-glow/70 focus:ring-2 focus:ring-aegis-glow/30"
        >
          <option value="" className="bg-[#0A1128]">
            Select range
          </option>
          {revenueRanges.map((range) => (
            <option key={range} value={range} className="bg-[#0A1128]">
              {range}
            </option>
          ))}
        </select>
      </label>

      <Input as="textarea" name="message" label="Message" placeholder="Tell us your current acquisition challenges" rows={5} />

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Book Demo"}
      </Button>

      {status ? <p className="text-center text-sm text-slate-200">{status}</p> : null}
    </form>
  );
}
