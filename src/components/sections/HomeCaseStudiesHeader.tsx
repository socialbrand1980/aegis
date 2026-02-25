"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HomeCaseStudiesHeader() {
  const { t } = useLanguage();

  return (
    <Reveal>
      <h2 className="headline">{t("caseStudies.title")}</h2>
      <p className="subcopy mt-4">{t("caseStudies.description")}</p>
    </Reveal>
  );
}
