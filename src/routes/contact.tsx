import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Phone, Mail, Building2, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Basilea Trading" },
      {
        name: "description",
        content:
          "Contact Basilea Trading for pharmaceutical sourcing, construction materials supply, bulk quotes, and partnership inquiries.",
      },
      { property: "og:title", content: "Contact — Basilea Trading" },
      {
        property: "og:description",
        content:
          "Reach the Basilea Trading team for quotes, product catalogs, and partnership inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Speak with our team.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
            Whether you need a product catalog, a bulk quote, or a partnership conversation —
            we respond within one business day.
          </p>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside className="bg-primary text-primary-foreground rounded-2xl p-10 lg:p-12 h-fit">
            <h2 className="font-display text-2xl font-bold !text-primary-foreground">
              Direct lines
            </h2>
            <p className="mt-3 text-primary-foreground/75 text-sm">
              Reach the right team for the right division.
            </p>

            <ul className="mt-10 space-y-7">
              <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone">
                <a href="tel:0913036931" className="hover:text-accent">0913036931</a>
              </ContactItem>
              <ContactItem icon={<Building2 className="h-5 w-5" />} label="Office">
                <a href="tel:+251116359235" className="hover:text-accent">+251 11 635 9235</a>
              </ContactItem>
              <ContactItem icon={<Mail className="h-5 w-5" />} label="Email">
                <a
                  href="mailto:bekalugetahun683@gmail.com"
                  className="hover:text-accent break-all"
                >
                  bekalugetahun683@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={<Clock className="h-5 w-5" />} label="Hours">
                Monday – Saturday · 08:30 – 18:00
              </ContactItem>
            </ul>
          </aside>

          <div className="bg-surface border border-border rounded-2xl p-10 lg:p-12 shadow-[var(--shadow-card)]">
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center">
                <span className="eyebrow">Thank you</span>
                <h2 className="mt-5 font-display text-3xl font-bold">
                  We received your message.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  A member of our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-bold">Send a message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Inquiry type
                  </label>
                  <select
                    name="type"
                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  >
                    <option>Pharmaceutical sourcing</option>
                    <option>Construction materials</option>
                    <option>Bulk quote</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactItem({
  icon, label, children,
}: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-start min-w-0">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60 font-semibold">
          {label}
        </div>
        <div className="mt-1 text-primary-foreground">{children}</div>
      </div>
    </li>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
    </div>
  );
}
