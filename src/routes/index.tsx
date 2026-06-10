import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, BadgeCheck, Headset, Pill, HardHat } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import pharmaImg from "@/assets/pharma.jpg";
import constructionImg from "@/assets/construction.jpg";
import excellenceImg from "@/assets/excellence.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
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
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO — fits within a single viewport */}
      <section className="relative overflow-hidden">
        <div className="container-page grid gap-8 lg:gap-12 lg:grid-cols-[1.05fr_1fr] items-center min-h-[calc(100svh-5rem)] py-8 lg:py-10">
          <div className="reveal">
            <span className="eyebrow">Established Trading Company</span>
            <h1 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.05] text-primary">
              Supplying Healthcare.<br />
              Building Infrastructure.<br />
              <span className="text-accent">Delivering Trust.</span>
            </h1>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
              Basilea Trading delivers certified pharmaceutical products and
              precision-manufactured construction materials through reliable sourcing,
              quality control, and efficient logistics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request Product Catalog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get Bulk Quote
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-5">
              {[
                { k: "2", v: "Core divisions" },
                { k: "100%", v: "Certified suppliers" },
                { k: "24/7", v: "Logistics support" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-xl lg:text-2xl font-bold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative reveal hidden lg:block">
            <div className="absolute -inset-6 lg:-inset-8 bg-primary/5 rounded-2xl -z-10" />
            <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-elevated)]">
              <img
                src={heroImg}
                alt="Pharmaceutical vials and construction materials"
                width={1600}
                height={1200}
                className="w-full h-[60vh] max-h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border shadow-[var(--shadow-card)] rounded-lg p-4 max-w-[260px]">
              <div className="flex items-center gap-2 text-accent">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Quality Assured
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground">
                Every shipment is verified against international standards before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Business Divisions</span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                Two specialized divisions.<br />One operational standard.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Each division is governed by the same disciplined approach to sourcing,
              compliance, and on-time delivery.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <DivisionCard
              icon={<Pill className="h-6 w-6" />}
              title="Pharmaceutical Distribution"
              description="Certified medicines and medical supplies for pharmacies, clinics, and healthcare facilities — sourced from approved manufacturers, stored under regulated conditions, and dispatched through validated cold-chain logistics."
              image={pharmaImg}
            />
            <DivisionCard
              icon={<HardHat className="h-6 w-6" />}
              title="Construction Materials"
              description="Precision-manufactured building materials for contractors, developers, and infrastructure projects — engineered to specification, tested for performance, and delivered at the scale modern projects demand."
              image={constructionImg}
            />
          </div>
        </div>
      </section>

      {/* WHY BASILEA */}
      <section className="container-page py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Basilea</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            The standards that make us a long-term partner.
          </h2>
        </div>

        <div className="mt-14 grid gap-px bg-border rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              title: "Quality Assurance",
              body: "Documented inspection at every stage from supplier to delivery.",
            },
            {
              icon: <Truck className="h-6 w-6" />,
              title: "Reliable Supply Chain",
              body: "Redundant sourcing and disciplined logistics protect your timelines.",
            },
            {
              icon: <BadgeCheck className="h-6 w-6" />,
              title: "Industry Compliance",
              body: "Regulatory standards observed across pharmaceutical and construction lines.",
            },
            {
              icon: <Headset className="h-6 w-6" />,
              title: "Responsive Support",
              body: "Direct account management with measurable response times.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-surface p-8 lg:p-10 hover:bg-secondary/40 transition-colors">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/5 text-primary">
                {c.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-20 lg:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src={excellenceImg}
              alt="Modern distribution center demonstrating operational scale"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-[360px] lg:h-[520px] object-cover"
            />
          </div>
          <div>
            <span className="eyebrow !text-accent">Commitment to Excellence</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold !text-primary-foreground">
              Operational standards engineered for trust.
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              From manufacturer verification to controlled storage and last-mile delivery,
              every Basilea Trading process is documented, audited, and continuously
              improved. We treat each shipment as an obligation — to the patient who
              depends on it, and to the structure built on it.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Approved international manufacturers only",
                "Climate-controlled and segregated storage",
                "Full traceability across batches and lots",
                "Independent quality verification on dispatch",
              ].map((l) => (
                <li key={l} className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-primary-foreground/85">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 lg:py-28">
        <div className="bg-surface border border-border rounded-2xl p-10 lg:p-16 text-center max-w-4xl mx-auto shadow-[var(--shadow-card)]">
          <span className="eyebrow justify-center">Partner With Basilea</span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Build your next project on a supply chain you can trust.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Speak with our team about pharmaceutical sourcing, construction material
            specifications, or a long-term supply agreement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-outline">
              Explore Divisions
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function DivisionCard({
  icon, title, description, image,
}: { icon: React.ReactNode; title: string; description: string; image: string }) {
  return (
    <article className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1280}
          height={960}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
            {icon}
          </div>
          <h3 className="font-display text-2xl font-bold">{title}</h3>
        </div>
        <p className="mt-5 text-muted-foreground leading-relaxed">{description}</p>
        <Link
          to="/projects"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
