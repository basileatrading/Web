import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionGrid } from "@/components/site/SectionGrid";
import { useTranslation } from "@/i18n";
import {
  ArrowRight,
  Handshake,
  ShieldCheck,
  Globe2,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Basilea Trading" },
      {
        name: "description",
        content:
          "Basilea Trading is a multi-division supplier built on disciplined sourcing, regulatory compliance, and an unwavering commitment to its partners.",
      },
      { property: "og:title", content: "About — Basilea Trading" },
      {
        property: "og:description",
        content:
          "Discover the mission and operating principles behind Basilea Trading's pharmaceutical and construction divisions.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const principleIcons = [
  <ShieldCheck className="h-5 w-5" />,
  <Layers className="h-5 w-5" />,
  <Globe2 className="h-5 w-5" />,
  <Handshake className="h-5 w-5" />,
];

function AboutPage() {
  const { t } = useTranslation();

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <SectionGrid align="right" />
        <div className="container-page relative pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl">
            <span className="eyebrow">{t.about.hero.eyebrow}</span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              {t.about.hero.titleBefore}{" "}
              <span className="text-accent">{t.about.hero.titleAccent}</span>
              {t.about.hero.titleAfter}
            </h1>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
              {t.about.hero.body}
            </p>

            <dl className="mt-10 flex flex-wrap gap-3">
              {t.about.hero.stats.map((s) => (
                <div
                  key={s.v}
                  className="rounded-md border border-border/80 bg-surface/70 px-4 py-3 backdrop-blur-sm"
                >
                  <dt className="font-display text-xl font-bold text-primary tabular-nums">
                    {s.k}
                  </dt>
                  <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">{t.about.mission.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl lg:text-4xl font-bold leading-tight">
              {t.about.mission.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.about.mission.body}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {t.about.principles.map((p, i) => (
              <div key={p.title} className="bg-surface p-7 lg:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/5 text-primary">
                  {principleIcons[i]}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {t.about.blocks.map((block, i) => (
        <Block
          key={block.eyebrow}
          index={`0${i + 1}`}
          eyebrow={block.eyebrow}
          title={block.title}
          body={block.body}
          points={block.points.length > 0 ? block.points : undefined}
          muted={i === 1}
          reverse={i === 1}
        />
      ))}

      <section className="container-page pb-20 lg:pb-28">
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl lg:text-3xl font-bold !text-primary-foreground">
              {t.about.cta.title}
            </h3>
            <p className="mt-3 text-primary-foreground/75">
              {t.about.cta.body}
            </p>
          </div>
          <Link to="/contact" className="btn-accent shrink-0">
            {t.about.cta.button} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({
  index,
  eyebrow,
  title,
  body,
  muted,
  reverse,
  points,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  muted?: boolean;
  reverse?: boolean;
  points?: string[];
}) {
  return (
    <section
      className={`relative overflow-hidden border-t border-border ${
        muted ? "bg-surface" : ""
      }`}
    >
      <SectionGrid align={reverse ? "left" : "right"} />

      <div className="container-page relative py-16 lg:py-24">
        <div
          className={`grid gap-10 lg:gap-20 lg:grid-cols-[1fr_1.4fr] lg:items-start ${
            reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          <div>
            <div className="flex items-center gap-4">
              <span
                className="font-display text-sm font-semibold tabular-nums tracking-widest text-accent/70"
                aria-hidden
              >
                {index}
              </span>
              <span className="h-px flex-1 max-w-12 bg-border" aria-hidden />
            </div>
            <span className="eyebrow mt-4">{eyebrow}</span>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {title}
            </h2>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed lg:text-[1.0625rem]">
              {body}
            </p>
            {points && (
              <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
                {points.map((p, i) => (
                  <li
                    key={p}
                    className={`px-5 py-4 backdrop-blur-sm ${
                      muted ? "bg-surface/90" : "bg-background/90"
                    }`}
                  >
                    <span className="font-display text-[11px] font-semibold tabular-nums tracking-widest text-accent/80">
                      {index}.{i + 1}
                    </span>
                    <p className="mt-2 text-sm leading-snug text-foreground/85">
                      {p}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
