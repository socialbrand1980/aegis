"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { type DocsBlock, docsSectionsByLanguage } from "@/components/docs/docsContent";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function DocsPageClient() {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState(docsSectionsByLanguage[language][0]?.id ?? "executive-overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const docsSections = docsSectionsByLanguage[language];

  const sidebarItems = useMemo(
    () =>
      docsSections.flatMap((section) => [
        { id: section.id, title: section.title, level: 1 as const },
        ...(section.subsections?.map((subsection) => ({ id: subsection.id, title: subsection.title, level: 2 as const })) ?? [])
      ]),
    [docsSections]
  );

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const onNavigate = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  const activeSection = useMemo(
    () =>
      docsSections.find(
        (section) => section.id === activeId || section.subsections?.some((subsection) => subsection.id === activeId)
      ) ?? docsSections[0],
    [activeId, docsSections]
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const root = contentRef.current;
      if (!root) return;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;

      if (activeId === activeSection.id) {
        if (desktop) {
          root.scrollTo({ top: 0, behavior: "auto" });
        } else {
          root.scrollIntoView({ behavior: "auto", block: "start" });
        }
        return;
      }

      const target = root.querySelector<HTMLElement>(`#${CSS.escape(activeId)}`);
      if (!target) return;
      if (desktop) {
        const rootRect = root.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const top = root.scrollTop + (targetRect.top - rootRect.top) - 8;
        root.scrollTo({ top, behavior: "auto" });
      } else {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeId, activeSection.id, docsSections]);

  const renderTextWithBold = (text: string) => {
    const chunks = text.split(/(\*\*.*?\*\*)/g);
    return chunks.map((chunk, index) => {
      const matched = chunk.match(/^\*\*(.*)\*\*$/);
      if (!matched) return <span key={`${chunk}-${index}`}>{chunk}</span>;
      return (
        <strong key={`${chunk}-${index}`} className="font-semibold text-white">
          {matched[1]}
        </strong>
      );
    });
  };

  const renderBlock = (block: DocsBlock, key: string) => {
    if (block.type === "paragraph") {
      return (
        <p key={key} className="leading-relaxed text-slate-200">
          {renderTextWithBold(block.text)}
        </p>
      );
    }

    return (
      <ul key={key} className="space-y-2">
        {block.items.map((item, itemIndex) => (
          <li key={`${item}-${itemIndex}`} className="flex items-start gap-2.5 text-slate-200">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
            <span>{renderTextWithBold(item)}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="section-spacing min-h-[calc(100dvh-5rem)] py-6 lg:min-h-[calc(100dvh-5rem)] lg:overflow-hidden">
      <Container className="lg:h-full">
        <div className="flex min-h-0 flex-col lg:h-full">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <h1 className="text-3xl font-semibold text-white">Aegis Documentation</h1>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white"
            >
              <Menu className="h-4 w-4" />
              Menu
            </button>
          </div>

          <div className="grid min-h-0 flex-1 items-start gap-8 lg:grid-cols-[260px_minmax(0,900px)] lg:justify-center">
            <div className="hidden h-full min-h-0 lg:block lg:min-h-[calc(100dvh-10rem)] lg:max-h-[calc(100dvh-6rem)]">
              <DocsSidebar items={sidebarItems} activeId={activeId} onNavigate={onNavigate} />
            </div>

            <article
              className={cn(
                "mx-auto flex min-h-[78dvh] w-full max-w-[900px] flex-col rounded-2xl border border-white/10 bg-[#0c173f]/72 px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[calc(100dvh-10rem)] lg:max-h-[calc(100dvh-6rem)] lg:overflow-hidden lg:px-10 lg:py-12",
                "transition-all duration-500 ease-out",
                entered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              )}
            >
              <header className="mb-6 border-b border-white/10 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Documentation</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">AEGIS AI</h1>
                <p className="mt-3 text-lg font-medium text-slate-200">Client Acquisition Infrastructure Platform</p>
                <p className="mt-1 text-sm text-slate-300">Version 1.0</p>
              </header>

              <div ref={contentRef} className="space-y-12 pr-1 lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
                <section key={activeSection.id} id={activeSection.id}>
                  <h2 className="text-2xl font-semibold text-white">{activeSection.title}</h2>
                  {activeSection.blocks.length > 0 ? (
                    <div className="mt-4 space-y-3">
                      {activeSection.blocks.map((block, index) => renderBlock(block, `${activeSection.id}-${index}`))}
                    </div>
                  ) : null}
                  {activeSection.subsections?.length ? (
                    <div className="mt-6 space-y-8">
                      {activeSection.subsections.map((subsection) => (
                        <section key={subsection.id} id={subsection.id}>
                          <h3 className="text-xl font-semibold text-slate-100">{subsection.title}</h3>
                          <div className="mt-3 space-y-3">
                            {subsection.blocks.map((block, index) => renderBlock(block, `${subsection.id}-${index}`))}
                          </div>
                        </section>
                      ))}
                    </div>
                  ) : null}
                </section>
              </div>
            </article>
          </div>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[120] lg:hidden">
          <button
            aria-label="Close docs menu overlay"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[86%] max-w-[320px] border-r border-white/10 bg-[#071233] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Documentation Menu</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/20 bg-white/5 p-2 text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <DocsSidebar items={sidebarItems} activeId={activeId} onNavigate={onNavigate} className="h-[calc(100%-2.75rem)]" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
