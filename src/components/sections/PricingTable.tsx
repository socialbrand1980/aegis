"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PricingDetailsModal, type PricingPlan } from "@/components/sections/PricingDetailsModal";

export function PricingTable() {
  const [activePlanId, setActivePlanId] = useState<string | null>(null);

  const plans = useMemo<PricingPlan[]>(
    () => [
      {
        id: "core",
        name: "Aegis Core",
        price: "Free",
        description: "Perfect for testing AI automation before scaling.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items: ["50 AI Personalized Outreach / month", "1 Workspace", "1 Channel (Instagram OR Email)", "1 Basic Follow-up Sequence"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items: ["Standard AI auto-reply", "Basic intent detection", "No advanced objection handling"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items: ["Basic lead tracking", "Simple pipeline view"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items: ["Basic monthly stats", "Outreach sent", "Response rate"]
          },
          {
            id: "support",
            title: "Support",
            items: ["Community support", "Aegis watermark"]
          }
        ]
      },
      {
        id: "growth",
        name: "Aegis Growth",
        price: "Rp 399.000 / month",
        description: "For small businesses ready to stabilize their pipeline.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items: ["500 AI Personalized Outreach / month", "2 Workspaces", "2 Channels", "3-Step Follow-up Automation"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items: ["Smart AI auto-reply", "Basic lead scoring", "Intent classification"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items: ["Visual pipeline board", "Status tracking", "Manual stage adjustment"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items: ["Monthly performance report", "Outreach vs Response breakdown"]
          },
          {
            id: "support",
            title: "Support",
            items: ["Email support", "No watermark"]
          }
        ]
      },
      {
        id: "professional",
        name: "Aegis Professional",
        price: "Rp 2.500.000 / month",
        description: "Scale with full acquisition intelligence.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items: [
              "5.000 AI Personalized Outreach / month",
              "5 Workspaces",
              "Multi-channel (Instagram, Email, WhatsApp, LinkedIn)",
              "Advanced automation builder"
            ]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items: [
              "Advanced intent detection",
              "Dynamic objection handling",
              "Automated qualification logic",
              "Advanced lead scoring (behavior-based)"
            ]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items: ["Full CRM-style pipeline", "Deal value tracking", "Auto-stage movement"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items: ["Conversion analytics", "Script performance tracking", "Funnel visualization"]
          },
          {
            id: "support",
            title: "Support",
            items: ["Priority support", "Exportable reports"]
          }
        ]
      },
      {
        id: "enterprise",
        name: "Aegis Enterprise",
        price: "Rp 50.000.000 / year",
        description: "Own your acquisition infrastructure.",
        sections: [
          {
            id: "outreach",
            title: "Outreach & Automation",
            items: ["Unlimited AI Outreach (Fair Usage Policy)", "Unlimited Workspaces", "Custom workflow logic", "API access"]
          },
          {
            id: "conversation",
            title: "Conversation Intelligence",
            items: ["Custom AI brand tuning", "Knowledge base integration", "Advanced qualification engine"]
          },
          {
            id: "pipeline",
            title: "Pipeline & CRM",
            items: ["Multi-client management", "Role-based access control", "Custom pipeline stages"]
          },
          {
            id: "analytics",
            title: "Analytics",
            items: ["Custom dashboard", "BI integration ready", "Data export API"]
          },
          {
            id: "support",
            title: "Support",
            items: ["Dedicated Success Manager", "SLA support", "White-label option"]
          }
        ]
      }
    ],
    []
  );

  const activePlan = plans.find((plan) => plan.id === activePlanId) ?? null;

  return (
    <section className="section-spacing pt-16">
      <Container>
        <h1 className="text-4xl font-bold text-white">Pricing Plans for Every Stage of Growth</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Choose the plan that matches your current acquisition maturity. Each plan keeps the same architecture quality,
          with higher throughput, smarter intelligence, and broader control.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <Card key={plan.id} className="flex h-full flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                <p className="mt-2 text-lg font-semibold text-aegis-glow">{plan.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{plan.description}</p>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-200">
                <p>• {plan.sections[0].items[0]}</p>
                <p>• {plan.sections[1].items[0]}</p>
                <p>• {plan.sections[2].items[0]}</p>
              </div>

              <Button variant="secondary" className="mt-6 w-full" onClick={() => setActivePlanId(plan.id)}>
                View Details
              </Button>
            </Card>
          ))}
        </div>

      

        <div className="mt-7">
          <Button href="/book-demo" size="lg">
            Book a Strategic Consultation
          </Button>
        </div>

        <PricingDetailsModal plan={activePlan} isOpen={Boolean(activePlan)} onClose={() => setActivePlanId(null)} />
      </Container>
    </section>
  );
}
