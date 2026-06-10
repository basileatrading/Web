import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ArrowRight,
  Target,
  Pill,
  HardHat,
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

const principles = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Compliance first",
    body: "Regulatory standards drive every sourcing decision — not the other way around.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Documented quality",
    body: "Every batch, lot, and shipment is inspected, recorded, and traceable.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Trusted suppliers",
    body: "We partner only with approved international manufacturers with verified credentials.",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Long-term partnerships",
    body: "We measure success in renewed agreements, not single transactions.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative border-b border-border bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center py-16 lg:py-24">
          <div>
            <span className="eyebrow">About Basilea Trading</span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.05]">
              A trading company built on{" "}
              <span className="text-accent">standards</span>, not slogans.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Basilea Trading was founded on a simple principle: serious sectors
              deserve serious suppliers. We bring the same operational discipline to a
              pallet of medicine as we do to a truckload of building materials.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-6">
              {[
                { k: "2", v: "Divisions" },
                { k: "100%", v: "Verified sourcing" },
                { k: "24/7", v: "Logistics support" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-primary">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-primary/5 rounded-2xl -z-10" />
            <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elevated)]">
              <img
                src={aboutImg}
                alt="Curated arrangement of pharmaceutical packaging and construction material samples"
                width={1600}
                height={1000}
                className="w-full h-[360px] lg:h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + PRINCIPLES */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">Mission</span>
            <h2 className="mt-5 font-display text-3xl lg:text-4xl font-bold leading-tight">
              Deliver the products healthcare and infrastructure depend on.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We exist to make the supply of critical goods predictable, traceable, and
              accountable. Our partners count on us not because we promise the most,
              but because we document everything we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {principles.map((p) => (
              <div key={p.title} className="bg-surface p-7 lg:p-8">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/5 text-primary">
                  {p.icon}
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

      {/* DIVISIONS DEEP DIVE */}
      <Block
        eyebrow="Pharmaceutical Excellence"
        title="Certified medicines, governed end-to-end."
        icon={<Pill className="h-6 w-6" />}
        body="We work only with approved manufacturers. Products are received, inspected, and stored under regulated conditions, then dispatched through validated logistics with full batch traceability — so pharmacies, clinics, and healthcare facilities receive exactly what they ordered, intact."
        points={[
          "Approved manufacturers only",
          "Validated cold-chain logistics",
          "Full batch & lot traceability",
        ]}
      />

      <Block
        reverse
        eyebrow="Construction Integrity"
        title="Materials engineered to specification, delivered at scale."
        icon={<HardHat className="h-6 w-6" />}
        body="From cement and steel to finishing materials, our construction division sources for performance and consistency. Contractors, developers, and infrastructure projects depend on materials that meet specification and arrive on schedule — and that is the standard we hold."
        points={[
          "Specification-matched sourcing",
          "Bulk supply for major projects",
          "Scheduled, accountable delivery",
        ]}
      />

      <Block
        eyebrow="Our Promise"
        title="Accountability is the product."
        icon={<Target className="h-6 w-6" />}
        body="Every Basilea Trading shipment carries a chain of verification behind it. If something is not right, we trace it, fix it, and learn from it. That is what it means to build long-term partnerships in regulated, high-stakes sectors."
      />

      {/* CTA */}
      <section className="container-page pb-20 lg:pb-28">
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl lg:text-3xl font-bold !text-primary-foreground">
              Considering Basilea for a supply agreement?
            </h3>
            <p className="mt-3 text-primary-foreground/75">
              We will walk you through our sourcing standards, certifications, and
              fulfilment process before any commitment.
            </p>
          </div>
          <Link to="/contact" className="btn-accent shrink-0">
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({
  eyebrow,
  title,
  body,
  icon,
  reverse,
  points,
}: {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  reverse?: boolean;
  points?: string[];
}) {
  return (
    <section className="border-t border-border">
      <div className="container-page py-16 lg:py-24 grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className={reverse ? "lg:order-2" : ""}>
          <span className="eyebrow">{eyebrow}</span>
          <div className="mt-6 grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-foreground">
            {icon}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-2xl">
            {title}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            {body}
          </p>
          {points && (
            <ul className="mt-7 grid sm:grid-cols-3 gap-4 max-w-2xl">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 items-start text-sm text-foreground/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
