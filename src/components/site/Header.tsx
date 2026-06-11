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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-surface/95 shadow-[var(--shadow-card)] backdrop-blur-xl"
          : "border-border/50 bg-surface backdrop-blur-md"
      }`}
    >
      <div className="container-page relative flex h-[6.25rem] items-center justify-between gap-4 lg:h-28 lg:gap-6">
        <Link to="/" className="z-10 flex min-w-0 shrink-0 items-center">
          <Logo className="h-[4.25rem] w-auto max-w-[260px] sm:max-w-[280px] lg:h-[5.25rem] lg:max-w-[320px]" />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="z-10 hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="btn-primary !rounded-full !px-5 !py-2.5 !text-sm whitespace-nowrap"
          >
            {t.nav.requestQuote}
          </Link>
        </div>

        <div className="z-10 flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            aria-label={t.nav.toggleMenu}
            aria-expanded={open}
            className="p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border px-2 py-3 text-base font-medium text-foreground/90 last:border-0"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 !rounded-full"
            >
              {t.nav.requestQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
