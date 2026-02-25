import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function PricingTable() {
  return (
    <section className="section-spacing pt-16">
      <Container>
        <h1 className="text-4xl font-bold text-white">Custom Infrastructure for Serious Businesses</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Struktur biaya dibuat sederhana: setup gratis, subscription tahunan, dan maintenance bulanan untuk optimasi
          berkelanjutan.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-white">Setup Fee</h2>
            <p className="mt-2 text-lg font-semibold text-aegis-glow">Gratis</p>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Strategic research</li>
              <li>• AI workflow customization</li>
              <li>• Script personalization</li>
              <li>• CRM integration</li>
              <li>• Internal training</li>
            </ul>
            <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Subscription Platform</p>
              <p className="mt-1 text-xl font-semibold text-white">Rp50.000.000 / tahun</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-white">Maintenance Fee</h2>
            <p className="mt-2 text-lg font-semibold text-aegis-glow">Rp2.500.000 / bulan</p>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Ongoing optimization</li>
              <li>• Script testing</li>
              <li>• Target refinement</li>
              <li>• Monthly performance report</li>
            </ul>
          </Card>
        </div>

        <p className="mt-6 text-sm font-semibold text-aegis-glow">Ini bukan biaya marketing. Ini investasi sistem pertumbuhan.</p>

        <div className="mt-7">
          <Button href="/book-demo" size="lg">
            Book a Strategic Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
