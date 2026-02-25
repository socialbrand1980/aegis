import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    title: "Strategic Discovery",
    detail: "Audit channel, profile ideal client, bottleneck follow up, dan baseline conversion."
  },
  {
    title: "AI Configuration",
    detail: "Custom workflow, script personalization, tone brand, dan decision-tree intent."
  },
  {
    title: "Deployment",
    detail: "Integrasi CRM, QA alur percakapan, dan aktivasi outreach terjadwal."
  },
  {
    title: "Optimization",
    detail: "Testing script, target refinement, dan improvement cadence berbasis data."
  },
  {
    title: "Reporting",
    detail: "Monthly performance report dengan fokus response, meeting, conversion, dan revenue contribution."
  }
];

export function HowItWorksSteps() {
  return (
    <section className="section-spacing pt-16">
      <Container>
        <h1 className="text-4xl font-bold text-white">How It Works</h1>
        <p className="mt-3 max-w-3xl text-slate-300">Delivery umumnya berada pada rentang 30-90 hari tergantung kompleksitas industri dan proses internal.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-aegis-glow">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-2 text-slate-300">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
