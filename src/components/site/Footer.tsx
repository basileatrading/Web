import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import { CONTACT_EMAIL, useTranslation } from "@/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-14 w-auto max-w-[240px]" />
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70 max-w-sm">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-accent !font-sans font-semibold !text-accent">
            {t.footer.company}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent transition-colors">{t.nav.about}</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition-colors">{t.nav.divisions}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] !font-sans font-semibold !text-accent">
            {t.footer.divisions}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {t.footer.divisionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] !font-sans font-semibold !text-accent">
            {t.footer.contact}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <a href="tel:0913036931" className="hover:text-accent">0913036931</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              <a href="tel:+251116359235" className="hover:text-accent">+251 11 635 9235</a>
            </li>
            <li className="flex items-center gap-2 min-w-0">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent truncate">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>{t.footer.taglineBottom}</p>
        </div>
      </div>
    </footer>
  );
}
