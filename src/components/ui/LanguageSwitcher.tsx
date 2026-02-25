"use client";

import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

const locales: Language[] = ["id", "en", "zh"];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={cn("inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] p-1", className)}>
      {locales.map((locale) => {
        const active = language === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => setLanguage(locale)}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition",
              active ? "bg-blue-500/30 text-white" : "text-slate-300 hover:text-white"
            )}
          >
            {t(`language.${locale}`)}
          </button>
        );
      })}
    </div>
  );
}
