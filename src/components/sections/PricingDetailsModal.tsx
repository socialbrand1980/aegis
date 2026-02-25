"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, ChevronDown, Database, LifeBuoy, MessageSquare, Send, X } from "lucide-react";

export type PricingSection = {
  id: "outreach" | "conversation" | "pipeline" | "analytics" | "support";
  title: string;
  items: string[];
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  sections: PricingSection[];
};

type PricingDetailsModalProps = {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
};

const sectionIcon = {
  outreach: Send,
  conversation: MessageSquare,
  pipeline: Database,
  analytics: BarChart3,
  support: LifeBuoy
} as const;

export function PricingDetailsModal({ plan, isOpen, onClose }: PricingDetailsModalProps) {
  const [openSection, setOpenSection] = useState<PricingSection["id"] | null>(null);

  useEffect(() => {
    if (!isOpen || !plan) return;
    setOpenSection(plan.sections[0]?.id ?? null);
  }, [isOpen, plan]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && plan ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="glass relative w-full max-w-3xl overflow-hidden border-white/20 bg-[#0d1a45]/90 p-5 sm:p-7"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 p-2 text-slate-200 transition hover:bg-white/15 hover:text-white"
              aria-label="Close pricing details"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[78vh] overflow-y-auto pr-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{plan.name}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{plan.price}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{plan.description}</p>

              <div className="mt-6 space-y-3">
                {plan.sections.map((section) => {
                  const Icon = sectionIcon[section.id];
                  const isSectionOpen = openSection === section.id;

                  return (
                    <div key={section.id} className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.03]">
                      <button
                        type="button"
                        onClick={() => setOpenSection(isSectionOpen ? null : section.id)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left"
                      >
                        <span className="flex items-center gap-2.5 text-sm font-semibold text-white sm:text-base">
                          <Icon className="h-4 w-4 text-blue-300" />
                          {section.title}
                        </span>
                        <ChevronDown className={`h-4 w-4 text-slate-300 transition ${isSectionOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isSectionOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="border-t border-white/10"
                          >
                            <ul className="space-y-2 px-4 py-3">
                              {section.items.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-300" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
