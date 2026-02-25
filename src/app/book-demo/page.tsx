import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { DemoForm } from "@/components/forms/DemoForm";

export const metadata: Metadata = {
  title: "Book Demo",
  description: "Book a strategic consultation untuk membangun sistem client acquisition yang lebih predictable."
};

export default function BookDemoPage() {
  return (
    <section className="section-spacing pt-[calc(10.5rem+env(safe-area-inset-top))] sm:pt-32 md:pt-20">
      <Container className="flex flex-col items-center">
        <div className="mb-8 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white">Book a Strategic Consultation</h1>
          <p className="mt-3 text-slate-300">30-minute executive session. No obligation.</p>
        </div>
        <DemoForm />
      </Container>
    </section>
  );
}
