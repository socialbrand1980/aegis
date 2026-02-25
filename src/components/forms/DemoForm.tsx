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

function formatGoogleDate(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");

  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate()),
    "T",
    pad(date.getUTCHours()),
    pad(date.getUTCMinutes()),
    pad(date.getUTCSeconds()),
    "Z"
  ].join("");
}

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
    const preferredDate = String(formData.get("preferredDate") ?? "");
    const preferredTime = String(formData.get("preferredTime") ?? "");
    const monthlyRevenueRange = String(formData.get("monthlyRevenueRange") ?? "");
    const message = String(formData.get("message") ?? "");

    const start = new Date(`${preferredDate}T${preferredTime}`);
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    if (Number.isNaN(start.getTime())) {
      setStatus("Jadwal tidak valid. Mohon pilih tanggal dan jam meeting yang benar.");
      setLoading(false);
      return;
    }

    const details = [
      "Demo Request - Aegis AI",
      "",
      `Nama: ${fullName}`,
      `Company: ${companyName}`,
      `Industry: ${industry}`,
      `Email: ${email}`,
      `Monthly Revenue: ${monthlyRevenueRange}`,
      "",
      "Kebutuhan / Challenge:",
      message || "-"
    ].join("\n");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Aegis AI Demo - ${companyName || fullName}`,
      dates: `${formatGoogleDate(start)}/${formatGoogleDate(end)}`,
      details,
      location: "Google Meet",
      add: "socialbrand1980@gmail.com"
    });

    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, "_blank", "noopener,noreferrer");
    setStatus("Google Calendar terbuka. Lanjutkan Save untuk kirim undangan meeting ke socialbrand1980@gmail.com.");
    setLoading(false);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass w-full max-w-2xl space-y-4 overflow-hidden p-6 md:p-8">
      <Input name="fullName" label="Full Name" placeholder="Your full name" required />
      <Input name="companyName" label="Company Name" placeholder="Your company" required />
      <Input name="industry" label="Industry" placeholder="Agency, Legal, Clinic, ..." required />
      <Input name="email" type="email" label="Email" placeholder="name@company.com" required />
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <Input name="preferredDate" type="date" label="Preferred Date" required />
        <Input name="preferredTime" type="time" label="Preferred Time" required />
      </div>

      <label className="block min-w-0 text-sm font-medium text-slate-200">
        Monthly Revenue Range
        <select
          name="monthlyRevenueRange"
          required
          className="mt-2 block w-full min-w-0 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-aegis-glow/70 focus:ring-2 focus:ring-aegis-glow/30"
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
        {loading ? "Opening Calendar..." : "Book Demo"}
      </Button>

      {status ? <p className="text-center text-sm text-slate-200">{status}</p> : null}
    </form>
  );
}
