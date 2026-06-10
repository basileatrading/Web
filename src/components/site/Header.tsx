import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { useTranslation } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.divisions },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-surface/95 backdrop-blur border-border" : "bg-surface border-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4 lg:gap-6">
        <Link to="/" className="flex items-center min-w-0 shrink-0">
          <Logo className="h-12 w-auto max-w-[200px] sm:max-w-[220px]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
            {t.nav.requestQuote}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher compact />
          <button
            aria-label={t.nav.toggleMenu}
            className="p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-surface">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base font-medium text-foreground/90 border-b border-border last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              {t.nav.requestQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
