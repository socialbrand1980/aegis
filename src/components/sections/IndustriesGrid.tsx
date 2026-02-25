import Link from "next/link";
import { industries } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export function IndustriesGrid() {
  return (
    <section className="section-spacing">
      <Container>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Built for High-Value Service Verticals</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="h-full hover:border-aegis-glow/50 hover:bg-white/15">
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{industry.problem}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
