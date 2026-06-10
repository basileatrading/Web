import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Target, Pill, HardHat, Handshake } from "lucide-react";

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

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow">About Basilea Trading</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            A trading company built on standards, not slogans.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
            Basilea Trading was founded on a simple principle: serious sectors deserve
            serious suppliers. We bring the same operational discipline to a pallet of
            medicine as we do to a truckload of building materials.
          </p>
        </div>
        <div className="mt-14 overflow-hidden rounded-xl">
          <img
            src={aboutImg}
            alt="Basilea Trading leadership team in strategic review"
            width={1600}
            height={1000}
            className="w-full h-[360px] lg:h-[520px] object-cover"
          />
        </div>
      </section>

      <Block
        eyebrow="Mission"
        title="Deliver the products that healthcare and infrastructure depend on."
        icon={<Target className="h-6 w-6" />}
        body="We exist to make the supply of critical goods predictable, traceable, and accountable. Our partners count on us not because we promise the most, but because we document everything we deliver."
      />

      <Block
        reverse
        eyebrow="Pharmaceutical Excellence"
        title="Certified medicines, governed end-to-end."
        icon={<Pill className="h-6 w-6" />}
        body="We work only with approved manufacturers. Products are received, inspected, and stored under regulated conditions, then dispatched through validated logistics with full batch traceability — so pharmacies, clinics, and healthcare facilities receive exactly what they ordered, intact."
      />

      <Block
        eyebrow="Construction Integrity"
        title="Materials engineered to specification, delivered at scale."
        icon={<HardHat className="h-6 w-6" />}
        body="From cement and steel to finishing materials, our construction division sources for performance and consistency. Contractors, developers, and infrastructure projects depend on materials that meet specification and arrive on schedule — and that is the standard we hold."
      />

      <Block
        reverse
        eyebrow="Our Promise"
        title="Accountability is the product."
        icon={<Handshake className="h-6 w-6" />}
        body="Every Basilea Trading shipment carries a chain of verification behind it. If something is not right, we trace it, fix it, and learn from it. That is what it means to build long-term partnerships in regulated, high-stakes sectors."
      />

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
  eyebrow, title, body, icon, reverse,
}: { eyebrow: string; title: string; body: string; icon: React.ReactNode; reverse?: boolean }) {
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
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">{body}</p>
        </div>
      </div>
    </section>
  );
}
