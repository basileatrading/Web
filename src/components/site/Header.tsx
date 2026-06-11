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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-surface/95 shadow-[var(--shadow-card)] backdrop-blur-xl"
          : "border-border/50 bg-surface backdrop-blur-md"
      }`}
    >
      <div className="container-page relative flex h-[6.25rem] items-center gap-3 lg:h-28 lg:gap-4">
        <div className="z-10 flex items-center gap-2 lg:gap-3">
          <button
            type="button"
            aria-label={t.nav.toggleMenu}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/80 text-primary transition-colors hover:border-primary/25 hover:bg-primary/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden items-center gap-0.5 rounded-full border border-border/60 bg-background/70 p-1 shadow-sm backdrop-blur-md lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/5 hover:text-primary whitespace-nowrap"
                activeProps={{
                  className:
                    "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground whitespace-nowrap",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          to="/"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <Logo className="h-[4.25rem] w-auto max-w-[min(74vw,18rem)] sm:max-w-[min(70vw,19rem)] lg:h-[5.75rem] lg:max-w-[24rem]" />
        </Link>

        <div className="z-10 ml-auto flex items-center gap-2 lg:gap-3">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="btn-primary hidden !rounded-full !px-5 !py-2.5 !text-sm lg:inline-flex whitespace-nowrap"
          >
            {t.nav.requestQuote}
          </Link>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label={t.nav.toggleMenu}
            className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-[2px] lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 flex w-[min(85vw,18rem)] flex-col border-r border-border/60 bg-surface/95 shadow-[var(--shadow-elevated)] backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t.nav.toggleMenu}
              </span>
              <button
                type="button"
                aria-label={t.nav.toggleMenu}
                className="grid h-9 w-9 place-items-center rounded-full text-primary hover:bg-primary/5"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 p-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground/85 transition-colors hover:bg-primary/5"
                  activeProps={{ className: "bg-primary/8 text-primary font-semibold" }}
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
        </>
      )}
    </header>
  );
}
