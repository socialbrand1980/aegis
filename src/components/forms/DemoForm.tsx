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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("Request terkirim. Tim kami akan menghubungi kamu dalam 1x24 jam kerja.");
      form.reset();
    } catch {
      setStatus("Terjadi kendala saat mengirim form. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
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
