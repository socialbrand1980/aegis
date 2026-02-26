"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Industry, CaseStudy, ResourcePost } from "@/lib/i18n";

export function useConstants() {
  const { t } = useLanguage();

  return {
    trustIndicators: t("constants.trustIndicators") as string[],
    coreProblems: t("constants.coreProblems") as string[],
    coreImpacts: t("constants.coreImpacts") as string[],
    architectureLayers: t("constants.architectureLayers") as Array<{
      title: string;
      description: string;
      output: string;
    }>,
    conversationLogic: t("constants.conversationLogic") as string[],
    aiExecutionTimeline: t("constants.aiExecutionTimeline") as Array<{
      phase: string;
      detail: string[];
    }>,
    dashboardMetrics: t("constants.dashboardMetrics") as string[],
    industries: t("constants.industries") as Industry[],
    caseStudies: t("constants.caseStudies") as CaseStudy[],
    resourcePosts: t("constants.resourcePosts") as ResourcePost[]
  };
}
