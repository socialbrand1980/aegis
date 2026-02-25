import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AppProviders } from "@/components/providers/AppProviders";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SiteMotionLayer } from "@/components/ui/SiteMotionLayer";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aegis AI | Client Acquisition Infrastructure",
    template: "%s | Aegis AI"
  },
  description:
    "Aegis AI membantu service business membangun infrastruktur akuisisi klien berbasis AI yang terukur, scalable, dan siap enterprise.",
  metadataBase: new URL("https://aegis-ai.example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <AppProviders>
          <SiteMotionLayer />
          <div className="relative z-10">
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
