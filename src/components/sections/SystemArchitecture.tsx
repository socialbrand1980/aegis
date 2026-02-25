import { architectureLayers, conversationLogic } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export function SystemArchitecture() {
  return (
    <section className="section-spacing pt-16">
      <Container>
        <h1 className="text-4xl font-bold text-white">Detailed 5-Layer Architecture</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Setiap lapisan punya fungsi operasional yang jelas: dari targeting, outreach, follow up, qualification,
          sampai eskalasi ke tim closing.
        </p>

        <div className="mt-8 space-y-4">
          {architectureLayers.map((item) => (
            <Card key={item.title} className="md:flex md:items-start md:justify-between md:gap-8">
              <h2 className="text-xl font-semibold text-white md:max-w-sm">{item.title}</h2>
              <div className="mt-2 md:mt-0 md:max-w-2xl">
                <p className="text-slate-300">{item.description}</p>
                <p className="mt-2 text-sm font-semibold text-aegis-glow">{item.output}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-white">Conversation Decision Logic</h2>
            <ul className="mt-4 space-y-2 text-slate-200">
              {conversationLogic.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-white">Qualification & Escalation</h2>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Hot Lead: tanya timeline, proposal, budget.</li>
              <li>• Warm Lead: tertarik tapi belum urgent.</li>
              <li>• Cold Lead: tidak respons.</li>
              <li>• Hot lead otomatis diteruskan ke tim Anda untuk closing.</li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
