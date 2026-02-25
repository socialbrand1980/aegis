import { CaseStudy } from "@/types";
import { Card } from "@/components/ui/Card";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Card className="h-full">
      <p className="text-xs uppercase tracking-[0.2em] text-aegis-glow">{study.industry}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{study.client}</h2>
      <p className="mt-1 text-sm font-medium text-slate-300">{study.timeline}</p>

      <div className="mt-6 space-y-5 text-sm text-slate-200">
        <div>
          <p className="font-semibold text-white">Timeline Alur AI</p>
          <div className="mt-3 space-y-3">
            {study.workflowTimeline.map((item) => (
              <div key={item.phase} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-aegis-glow">{item.phase}</p>
                <ul className="mt-2 space-y-1.5 text-slate-200">
                  {item.detail.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aegis-glow" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Problem</p>
          <ul className="mt-2 space-y-1.5">
            {study.problem.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Implementation</p>
          <ul className="mt-2 space-y-1.5">
            {study.implementation.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Results</p>
          <ul className="mt-2 space-y-1.5">
            {study.metrics.map((metric) => (
              <li key={metric}>• {metric}</li>
            ))}
          </ul>
        </div>

        <p className="border-t border-white/10 pt-4 text-aegis-glow">
          <span className="font-semibold">Insight:</span> {study.insight}
        </p>
      </div>
    </Card>
  );
}
