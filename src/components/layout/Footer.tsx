"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navItems = [
  { key: "product", href: "/product" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "industries", href: "/industries" },
  { key: "caseStudies", href: "/case-studies" },
  { key: "pricing", href: "/pricing" },
  { key: "resources", href: "/resources" },
  { key: "bookDemo", href: "/book-demo" }
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 pb-10 pt-16">
      <Container>
        <div className="glass grid gap-8 p-7 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-2xl font-semibold text-white">Aegis AI</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
              {t("footer.description")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          <div className="md:col-span-2 border-t border-white/10 pt-6">
            <p className="text-xs text-slate-300">
              © {year} {t("footer.copyright")}
            </p>
            <p className="mt-2 text-xs text-slate-400">{t("footer.license")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
