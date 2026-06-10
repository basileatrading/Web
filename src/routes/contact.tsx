import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Clock, Mail, Phone } from "lucide-react";
import { OptimizedImage } from "@/components/site/OptimizedImage";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionGrid } from "@/components/site/SectionGrid";
import { siteImages } from "@/lib/site-images";
import { CONTACT_EMAIL, useTranslation } from "@/i18n";

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

const channels = [
  {
    key: "mobile",
    icon: Phone,
    labelKey: "phone" as const,
    href: "tel:0913036931",
    value: "0913036931",
    external: false,
  },
  {
    key: "office",
    icon: Building2,
    labelKey: "office" as const,
    href: "tel:+251116359235",
    value: "+251 11 635 9235",
    external: false,
  },
  {
    key: "email",
    icon: Mail,
    labelKey: "email" as const,
    href: `mailto:${CONTACT_EMAIL}`,
    value: CONTACT_EMAIL,
    external: false,
  },
  {
    key: "hours",
    icon: Clock,
    labelKey: "hours" as const,
    valueKey: "hoursValue" as const,
    external: false,
  },
] as const;

function ContactPage() {
  const { t } = useTranslation();

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <SectionGrid align="left" />
        <div className="container-page relative pt-16 pb-12 lg:pt-24 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl reveal">
              <span className="eyebrow">{t.contact.hero.eyebrow}</span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                {t.contact.hero.title}
              </h1>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
                {t.contact.hero.body}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="tel:0913036931" className="btn-primary">
                  {t.contact.aside.phone} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline">
                  {t.contact.aside.email}
                </a>
              </div>
            </div>

            <div className="relative reveal hidden lg:block">
              <div className="absolute -inset-5 bg-primary/5 rounded-2xl -z-10" />
              <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elevated)]">
                <OptimizedImage
                  {...siteImages.excellence}
                  alt=""
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-[340px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 max-w-[240px] rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2 text-accent">
                  <Clock className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    {t.contact.aside.hours}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {t.contact.aside.hoursValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.contact.aside.title}</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold">
            {t.contact.aside.body}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {channels.map((channel) => (
            <ContactChannel
              key={channel.key}
              icon={channel.icon}
              label={t.contact.aside[channel.labelKey]}
              value={
                "valueKey" in channel
                  ? t.contact.aside[channel.valueKey]
                  : channel.value
              }
              href={"href" in channel ? channel.href : undefined}
            />
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]">
          <div className="grid gap-8 p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {t.contact.aside.email}
              </p>
              <p className="mt-3 font-display text-2xl font-bold break-all sm:text-3xl">
                {CONTACT_EMAIL}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
                {t.contact.hero.body}
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-accent shrink-0 self-start lg:self-center"
            >
              {t.contact.aside.email} <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactChannel({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6 min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-primary break-words">
          {value}
        </p>
      </div>
      {href && (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          {label} <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const className =
    "group flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition-all hover:border-primary/20 hover:shadow-[var(--shadow-elevated)]";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
