import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Product Engineering Services",
  description:
    "Product engineering services for MVPs, SaaS products, customer portals, dashboards, and production-ready digital products from idea to launch.",
};

export default function ProductEngineeringPage() {
  return (
    <ServiceDetailPage
      eyebrow="Product Engineering"
      title="From idea to launched product, fast."
      description="We help you design, build, and ship digital products — from MVPs and SaaS platforms to customer portals and dashboards — with the product thinking and engineering discipline needed for real users."
      introTitle="A practical path from concept to production."
      introDescription="Good product engineering balances business goals, user experience, technical foundations, and launch speed. We turn rough ideas into scoped releases, build the right core features first, and create a codebase that can keep growing."
      audienceTitle="Best for teams building a new product or modernizing an existing one."
      audienceCards={[
        {
          number: "01",
          title: "Startup teams",
          description:
            "Build an MVP that proves the use case without months of overbuilding.",
        },
        {
          number: "02",
          title: "Product owners",
          description:
            "Turn product requirements into screens, workflows, integrations, and release plans.",
        },
        {
          number: "03",
          title: "Internal innovators",
          description:
            "Launch new tools or customer-facing products without waiting on a full internal team.",
        },
        {
          number: "04",
          title: "Scaling products",
          description:
            "Improve performance, reliability, architecture, and feature velocity as usage grows.",
        },
      ]}
      deliverables={[
        "Product discovery and release planning",
        "UX flows, interface design, and component structure",
        "Frontend and backend product development",
        "Authentication, roles, dashboards, and workflows",
        "Third-party integrations and API layers",
        "Launch checklist, QA support, and iteration plan",
      ]}
      processTitle="Ship the first valuable version, then grow from there."
      processDescription="We keep releases tight and useful, so your team learns from real users instead of waiting for a perfect product plan."
      processCards={[
        {
          title: "Define the first release",
          description:
            "We clarify users, outcomes, core workflows, and what must be built for launch.",
        },
        {
          title: "Engineer the product",
          description:
            "We build the interface, backend, data model, integrations, and deployment foundation.",
        },
        {
          title: "Launch and iterate",
          description:
            "We support testing, release, user feedback, and the next product cycle.",
        },
      ]}
    />
  );
}
