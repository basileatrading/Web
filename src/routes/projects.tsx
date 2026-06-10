import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  HardHat,
  Handshake,
  Pill,
} from "lucide-react";
import { OptimizedImage } from "@/components/site/OptimizedImage";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionGrid } from "@/components/site/SectionGrid";
import { useTranslation } from "@/i18n";
import { siteImages, type SiteImage } from "@/lib/site-images";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Divisions & Projects — Basilea Trading" },
      {
        name: "description",
        content:
          "Explore Basilea Trading's pharmaceutical distribution, construction materials supply, and partnership programs.",
      },
      { property: "og:title", content: "Divisions & Projects — Basilea Trading" },
      {
        property: "og:description",
        content:
          "Pharmaceutical distribution, construction materials supply, and strategic partnerships at Basilea Trading.",
      },
      { property: "og:image", content: siteImages.construction.src },
    ],
  }),
  component: ProjectsPage,
});

const divisionMeta = [
  { id: "pharma", icon: Pill, ...siteImages.pharma },
  { id: "construction", icon: HardHat, ...siteImages.construction },
] as const;

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <SectionGrid align="right" />
        <div className="container-page relative pt-16 pb-12 lg:pt-24 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl reveal">
              <span className="eyebrow">{t.projects.hero.eyebrow}</span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                {t.projects.hero.title}
              </h1>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
                {t.projects.hero.body}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {t.projects.divisions.map((division, i) => (
                  <a
                    key={division.title}
                    href={`#${divisionMeta[i].id}`}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/80 px-4 py-2.5 text-sm font-semibold text-primary backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-surface"
                  >
                    {division.eyebrow}
                    <ArrowRight className="h-3.5 w-3.5 text-accent" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative reveal hidden lg:grid grid-cols-2 gap-4">
              {divisionMeta.map((item, i) => (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-xl shadow-[var(--shadow-card)] ${
                    i === 1 ? "mt-10" : ""
                  }`}
                >
                  <OptimizedImage
                    src={item.src}
                    webp={item.webp}
                    alt=""
                    width={item.width}
                    height={item.height}
                    sizes="220px"
                    className="h-44 w-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg border border-border bg-surface px-5 py-3 shadow-[var(--shadow-card)]">
                <p className="flex items-center gap-2 text-center text-sm font-semibold text-primary">
                  <span className="font-display text-xl tabular-nums">2</span>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t.nav.divisions}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-b border-border">
        <div className="container-page py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {t.projects.divisions.map((division, i) => {
              const { icon: Icon } = divisionMeta[i];
              return (
                <a
                  key={division.title}
                  href={`#${divisionMeta[i].id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/20 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      {...divisionMeta[i]}
                      alt={division.title}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                          {division.eyebrow}
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-bold text-primary-foreground">
                          {division.title}
                        </h2>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {division.intro}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                      {t.home.divisions.learnMore}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {t.projects.divisions.map((division, i) => (
        <DivisionSection
          key={division.title}
          id={divisionMeta[i].id}
          index={division.eyebrow.replace(/\D/g, "") || String(i + 1).padStart(2, "0")}
          eyebrow={division.eyebrow}
          title={division.title}
          intro={division.intro}
          image={divisionMeta[i]}
          icon={divisionMeta[i].icon}
          bullets={division.bullets}
          ctaLabel={t.nav.requestQuote}
          muted={i === 1}
          reverse={i === 1}
        />
      ))}

      <section className="container-page pb-20 lg:pb-28">
        <div className="overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-10 lg:p-14">
              <span className="eyebrow !text-accent">{t.projects.partnerships.eyebrow}</span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold !text-primary-foreground">
                {t.projects.partnerships.title}
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/80">
                {t.projects.partnerships.body1}
              </p>
              <p className="mt-4 leading-relaxed text-primary-foreground/75">
                {t.projects.partnerships.body2}
              </p>
              <Link to="/contact" className="btn-accent mt-8">
                {t.projects.partnerships.button} <Handshake className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[280px] lg:min-h-full">
              <OptimizedImage
                {...siteImages.excellence}
                alt={t.projects.partnerships.imageAlt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 lg:bg-gradient-to-r lg:from-primary lg:via-primary/40 lg:to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function DivisionSection({
  id,
  index,
  eyebrow,
  title,
  intro,
  image,
  icon: Icon,
  bullets,
  ctaLabel,
  muted,
  reverse,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: SiteImage;
  icon: typeof Pill;
  bullets: string[];
  ctaLabel: string;
  muted?: boolean;
  reverse?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden border-t border-border ${
        muted ? "bg-surface" : ""
      }`}
    >
      <SectionGrid align={reverse ? "left" : "right"} />

      <div className="container-page relative py-16 lg:py-24">
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/5 -z-10" />
            <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elevated)]">
              <OptimizedImage
                {...image}
                alt={title}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 grid h-14 w-14 place-items-center rounded-md bg-accent text-accent-foreground shadow-[var(--shadow-card)]">
              <Icon className="h-6 w-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <span
                className="font-display text-sm font-semibold tabular-nums tracking-widest text-accent/80"
                aria-hidden
              >
                {index.padStart(2, "0")}
              </span>
              <span className="h-px max-w-12 flex-1 bg-border" aria-hidden />
            </div>
            <span className="eyebrow mt-4">{eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold leading-tight">
              {title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground lg:text-[1.0625rem]">
              {intro}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={`flex gap-3 rounded-lg border border-border p-4 ${
                    muted ? "bg-background" : "bg-surface"
                  }`}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm leading-snug text-foreground/85">{bullet}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-outline mt-8">
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
