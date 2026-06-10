import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-accent text-accent-foreground font-display font-bold">
              B
            </span>
            <span className="font-display font-bold text-lg text-primary-foreground">
              Basilea Trading
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70 max-w-sm">
            Certified pharmaceutical distribution and precision-manufactured construction
            materials, delivered with operational discipline and verified quality.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-accent !font-sans font-semibold !text-accent">
            Company
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition-colors">Divisions</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] !font-sans font-semibold !text-accent">
            Divisions
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li>Pharmaceutical Distribution</li>
            <li>Construction Materials</li>
            <li>Logistics & Sourcing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] !font-sans font-semibold !text-accent">
            Contact
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
              <a href="mailto:bekalugetahun683@gmail.com" className="hover:text-accent truncate">
                bekalugetahun683@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Basilea Trading. All rights reserved.</p>
          <p>Pharmaceutical Distribution · Construction Materials Supply</p>
        </div>
      </div>
    </footer>
  );
}
