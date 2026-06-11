import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  HardHat,
  Headset,
  Pill,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { OptimizedImage } from "@/components/site/OptimizedImage";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionGrid } from "@/components/site/SectionGrid";
import { useTranslation } from "@/i18n";
import { siteImages } from "@/lib/site-images";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: siteImages.hero.webp,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
    meta: [
      { title: "Basilea Trading — Pharmaceutical & Construction Supply" },
      {
        name: "description",
        content:
          "Basilea Trading delivers certified pharmaceutical products and precision-manufactured construction materials through reliable sourcing, quality control, and efficient logistics.",
      },
      { property: "og:title", content: "Basilea Trading — Pharmaceutical & Construction Supply" },
      {
        property: "og:description",
        content:
          "Certified pharmaceutical distribution and precision construction materials, delivered with operational discipline and verified quality.",
      },
      { property: "og:image", content: siteImages.hero.src },
    ],
  }),
  component: Home,
});

const whyIcons = [ShieldCheck, Truck, BadgeCheck, Headset] as const;

const divisionCards = [
  { image: siteImages.pharma, icon: Pill },
  { image: siteImages.construction, icon: HardHat },
] as const;

function Home() {
  const { t } = useTranslation();
  const divisions = [
    t.home.divisions.pharma,
    t.home.divisions.construction,
  ] as const;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <SectionGrid align="right" />
        <div className="container-page relative grid min-h-[calc(100svh-6.25rem)] items-center gap-10 py-10 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-12">
          <div className="reveal max-w-xl lg:max-w-none">
            <span className="eyebrow">{t.home.hero.eyebrow}</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] text-primary sm:text-4xl lg:text-[3.25rem]">
              {t.home.hero.titleLine1}
              <br />
              {t.home.hero.titleLine2}
              <br />
              <span className="text-accent">{t.home.hero.titleLine3}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {t.home.hero.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                {t.home.hero.ctaCatalog} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                {t.home.hero.ctaQuote}
              </Link>
            </div>

            <dl className="mt-8 flex flex-wrap gap-3">
              {t.home.hero.stats.map((s) => (
                <div
                  key={s.v}
                  className="rounded-md border border-border/80 bg-surface/70 px-4 py-3 backdrop-blur-sm"
                >
                  <dt className="font-display text-xl font-bold tabular-nums text-primary lg:text-2xl">
                    {s.k}
                  </dt>
                  <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative reveal hidden lg:block">
            <div className="absolute -inset-6 rounded-2xl bg-primary/5 -z-10 lg:-inset-8" />
            <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-elevated)]">
              <OptimizedImage
                {...siteImages.hero}
                alt={t.home.hero.imageAlt}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-[58vh] max-h-[580px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-[270px] rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-accent">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {t.home.hero.badgeTitle}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {t.home.hero.badgeBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <SectionGrid align="left" className="opacity-60" />
        <div className="container-page relative py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">{t.home.divisions.eyebrow}</span>
              <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                {t.home.divisions.titleLine1}
                <br />
                {t.home.divisions.titleLine2}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed lg:pb-1">
              {t.home.divisions.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {divisions.map((division, i) => {
              const { image, icon: Icon } = divisionCards[i];
              return (
                <Link
                  key={division.title}
                  to="/projects"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/20 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      {...image}
                      alt={division.title}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <h3 className="font-display text-2xl font-bold text-primary-foreground">
                        {division.title}
                      </h3>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {division.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                      {t.home.divisions.learnMore}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <SectionGrid align="right" className="opacity-50" />
        <div className="container-page relative py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow">{t.home.why.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.home.why.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.why.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-8 transition-all hover:border-primary/15 hover:shadow-[var(--shadow-card)] lg:p-9"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/5 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="container-page py-20 lg:py-28">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-[var(--shadow-elevated)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[280px] lg:min-h-full">
                <OptimizedImage
                  {...siteImages.excellence}
                  alt={t.home.commitment.imageAlt}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/15 lg:bg-gradient-to-l lg:from-transparent lg:via-primary/25 lg:to-primary/70" />
              </div>

              <div className="p-10 lg:p-14">
                <span className="eyebrow !text-accent">{t.home.commitment.eyebrow}</span>
                <h2 className="mt-5 font-display text-3xl font-bold !text-primary-foreground sm:text-4xl lg:text-5xl">
                  {t.home.commitment.title}
                </h2>
                <p className="mt-6 leading-relaxed text-primary-foreground/80">
                  {t.home.commitment.body}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {t.home.commitment.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-4"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-snug text-primary-foreground/90">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]">
          <div className="grid gap-8 p-10 text-center lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:p-14 lg:text-left">
            <div className="hidden lg:block" />
            <div className="max-w-2xl lg:col-start-2">
              <span className="eyebrow justify-center lg:justify-start !text-accent">
                {t.home.cta.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold !text-primary-foreground sm:text-4xl lg:text-5xl">
                {t.home.cta.title}
              </h2>
              <p className="mt-5 text-primary-foreground/75">{t.home.cta.body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link to="/contact" className="btn-accent">
                  {t.home.cta.contactSales} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="btn-outline !border-primary-foreground/25 !text-primary-foreground hover:!border-primary-foreground hover:!bg-primary-foreground/10"
                >
                  {t.home.cta.exploreDivisions}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
