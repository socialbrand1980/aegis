"use client";

import { cn } from "@/lib/utils";

type DocsSidebarProps = {
  items: { id: string; title: string; level: 1 | 2 }[];
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
};

export function DocsSidebar({ items, activeId, onNavigate, className }: DocsSidebarProps) {
  return (
    <aside className={cn("h-full min-h-0 rounded-2xl border border-white/10 bg-[#081235]/92 p-3", className)}>
      <div className="h-full overflow-y-auto pr-1">
        <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Documentation</p>
        <nav className="space-y-1.5">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "w-full rounded-lg border-l-2 py-2.5 text-left text-sm transition-all duration-150 ease-in-out",
                  item.level === 1 ? "px-3 font-medium" : "pl-6 pr-3 text-xs",
                  active
                    ? "border-blue-300 bg-blue-500/15 text-white shadow-[inset_0_0_24px_rgba(59,130,246,0.14)]"
                    : "border-transparent text-slate-300 hover:bg-white/6 hover:text-white"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
