import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Custom App Development Services",
  description:
    "Custom business app development for portals, dashboards, internal tools, approval workflows, CRMs, and operations systems built around your team.",
};

export default function CustomApplicationDevelopmentPage() {
  return (
    <ServiceDetailPage
      eyebrow="Custom App Development"
      title="Custom apps built around the way your team works."
      description="We design and build coded business applications for the workflows that off-the-shelf tools cannot handle — portals, dashboards, approval systems, CRMs, and operations tools your team can actually use."
      introTitle="From scattered process to owned software."
      introDescription="Your business should not have to bend around a rigid SaaS product. We map the way your team already works, turn the important steps into clean product flows, connect the data sources behind them, and ship a production-ready app that fits your operations."
      audienceTitle="Best for teams that need software shaped to a specific workflow."
      audienceCards={[
        {
          number: "01",
          title: "Operations teams",
          description:
            "Replace spreadsheets, manual handoffs, and scattered approvals with one guided workflow.",
        },
        {
          number: "02",
          title: "Service businesses",
          description:
            "Give staff and customers a shared portal for requests, records, updates, and reporting.",
        },
        {
          number: "03",
          title: "Growing companies",
          description:
            "Build internal tools that match the business now and can expand as volume grows.",
        },
        {
          number: "04",
          title: "SaaS-heavy teams",
          description:
            "Turn the data already living in multiple tools into one working application layer.",
        },
      ]}
      deliverables={[
        "Workflow discovery and product requirements",
        "Responsive web app or portal interface",
        "Role-based views and permissions",
        "Dashboards, forms, approvals, and activity logs",
        "SaaS, database, and API integrations",
        "Launch support, documentation, and handover",
      ]}
      processTitle="Built like a product, scoped like a business tool."
      processDescription="We keep the build focused on the workflows that create the most value first, then iterate with your team until the app is ready for daily use."
      processCards={[
        {
          title: "Map the workflow",
          description:
            "We identify users, steps, data sources, exceptions, and the manual work the app needs to remove.",
        },
        {
          title: "Build the core system",
          description:
            "We design the interface, data model, permissions, and integrations needed for the first production version.",
        },
        {
          title: "Launch and improve",
          description:
            "We ship, train your team, monitor feedback, and refine the app around real usage.",
        },
      ]}
    />
  );
}
