import type { Metadata } from "next";
import { DocsPageClient } from "@/components/docs/DocsPageClient";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Complete Aegis AI documentation: architecture, workflow, orchestration, security, and enterprise operations."
};

export default function DocsPage() {
  return <DocsPageClient />;
}
