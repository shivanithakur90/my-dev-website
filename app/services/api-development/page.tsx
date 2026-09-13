import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";

export const metadata: Metadata = {
  title: "System Integration & API Development",
  description:
    "System integration and API development services to connect CRMs, ERPs, payment tools, support platforms, databases, and SaaS workflows.",
};

export default function ApiDevelopmentPage() {
  return (
    <ServiceDetailPage
      eyebrow="System Integration"
      title="Connect every tool your business depends on."
      description="We build APIs, webhooks, middleware, sync jobs, and integration layers that connect your SaaS tools, databases, portals, dashboards, and internal systems."
      introTitle="One connected stack instead of scattered software."
      introDescription="Most teams already have the tools they need — the problem is that those tools do not talk to each other cleanly. We connect the systems behind your business so data moves where it should, teams stop duplicating work, and workflows become visible."
      audienceTitle="Best for teams that need their SaaS stack to work together."
      audienceCards={[
        {
          number: "01",
          title: "Multi-tool operations",
          description:
            "Sync customer, order, invoice, ticket, and workflow data across the systems you already use.",
        },
        {
          number: "02",
          title: "Portal projects",
          description:
            "Connect customer or internal portals to the tools that hold the real business data.",
        },
        {
          number: "03",
          title: "Reporting teams",
          description:
            "Pull data from multiple platforms into one dashboard or reporting database.",
        },
        {
          number: "04",
          title: "Automation teams",
          description:
            "Trigger workflows, notifications, approvals, and updates without manual copy-paste.",
        },
      ]}
      deliverables={[
        "API design and integration architecture",
        "SaaS, CRM, ERP, payment, and database connectors",
        "Webhook handlers and event-based workflows",
        "Data sync jobs, retry logic, and audit logs",
        "Middleware dashboards and operational visibility",
        "Integration documentation and support handover",
      ]}
      processTitle="Clean data movement with clear ownership."
      processDescription="We design integrations around the source of truth, the timing of each sync, and the operational visibility your team needs when something changes."
      processCards={[
        {
          title: "Map the systems",
          description:
            "We define what data moves, where it comes from, where it goes, and which tool owns it.",
        },
        {
          title: "Build the connectors",
          description:
            "We implement APIs, webhooks, sync jobs, transformations, logging, and retry handling.",
        },
        {
          title: "Make it observable",
          description:
            "Your team gets dashboards, alerts, and documentation so integrations do not become a black box.",
        },
      ]}
    />
  );
}
