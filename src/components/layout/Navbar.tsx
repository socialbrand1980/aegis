"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navItems = [
  { key: "product", href: "/product" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "industries", href: "/industries" },
  { key: "caseStudies", href: "/case-studies" },
  { key: "pricing", href: "/pricing" },
  { key: "resources", href: "/docs" },
  { key: "bookDemo", href: "/book-demo" }
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="glass flex h-16 items-center justify-between px-4 md:px-5">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            Aegis <span className="text-aegis-glow">AI</span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              const label = t(`nav.${item.key}`);
              const isCta = item.key === "bookDemo";
              if (isCta) {
                return (
                  <Button key={item.href} href={item.href} size="sm" className="ml-2">
                    {label}
                  </Button>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm text-slate-200 transition-all hover:bg-white/10 hover:text-white",
                    active && "bg-white/15 text-white"
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <LanguageSwitcher className="ml-3" />
          </nav>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/25 px-3 py-2 text-sm text-slate-100 xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>

        <div className={cn("mobile-sheet mt-3 xl:hidden", open ? "mobile-sheet-open" : "mobile-sheet-closed")}>
          <div className="glass p-2">
            <div className="mb-2 px-1">
              <LanguageSwitcher />
            </div>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${index * 25}ms` }}
                className={cn(
                  "touch-feedback block rounded-xl px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white",
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                  isActivePath(pathname, item.href) && "bg-white/10 text-white"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
