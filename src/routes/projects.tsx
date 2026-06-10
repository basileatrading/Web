import { createFileRoute, Link } from "@tanstack/react-router";
import pharmaImg from "@/assets/pharma.jpg";
import constructionImg from "@/assets/construction.jpg";
import excellenceImg from "@/assets/excellence.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
      { property: "og:image", content: constructionImg },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Divisions & Projects</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            What we supply, and who relies on us.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
            Two specialized divisions, one shared standard of operational discipline.
            Here is how each one serves its sector.
          </p>
        </div>
      </section>

      <Division
        eyebrow="Division 01"
        title="Pharmaceutical Distribution"
        intro="Certified medicines and medical supplies serving pharmacies, clinics, and healthcare facilities. We source only from approved manufacturers and maintain documented chain-of-custody from intake to delivery."
        image={pharmaImg}
        bullets={[
          "Prescription and OTC medicines",
          "Medical consumables and devices",
          "Cold-chain capable logistics",
          "Batch and lot traceability",
          "Regulatory documentation on every shipment",
        ]}
      />

      <Division
        reverse
        eyebrow="Division 02"
        title="Construction Materials Supply"
        intro="Precision-manufactured construction materials for contractors, developers, and infrastructure projects. Specifications, performance, and timelines treated with the same rigor."
        image={constructionImg}
        bullets={[
          "Cement, aggregates, and reinforcement steel",
          "Finishing and structural materials",
          "Bulk and project-based supply contracts",
          "Specification matching and substitution support",
          "Coordinated delivery to active sites",
        ]}
      />

      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 lg:py-28 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src={excellenceImg}
              alt="Distribution center supporting partnership growth"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-[360px] lg:h-[480px] object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Growth & Partnerships</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Long-term agreements with measurable performance.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Basilea Trading partners with healthcare networks, contractors, and
              infrastructure programs on multi-year supply agreements with documented
              KPIs — fill rate, lead time, defect rate, and incident response.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our growth is driven by repeat business. We invest in capacity, certifications,
              and people so that our partners can scale with confidence.
            </p>
            <Link to="/contact" className="mt-8 btn-primary">
              Discuss a partnership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Division({
  eyebrow, title, intro, image, bullets, reverse,
}: {
  eyebrow: string; title: string; intro: string; image: string;
  bullets: string[]; reverse?: boolean;
}) {
  return (
    <section className="container-page py-16 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
      <div className={`overflow-hidden rounded-xl ${reverse ? "lg:order-2" : ""}`}>
        <img
          src={image}
          alt={title}
          width={1280}
          height={960}
          loading="lazy"
          className="w-full h-[360px] lg:h-[480px] object-cover"
        />
      </div>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">{intro}</p>
        <ul className="mt-8 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground/85">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
