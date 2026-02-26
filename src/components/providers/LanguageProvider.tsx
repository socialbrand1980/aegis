"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getMessage, type Language } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (next: Language) => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem("aegis-language") as Language | null;
    if (saved === "id" || saved === "en" || saved === "zh") {
      setLanguage(saved);
    }
  }, []);

  function updateLanguage(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("aegis-language", next);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage: updateLanguage,
      t: (path: string) => getMessage(language, path)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
