import OverviewPage from "@/components/common/OverviewPage";

const cards = [
  { eyebrow: "Sales", title: "Custom CRM", description: "A CRM shaped around your pipeline, reporting, approvals, and customer workflows.", accent: "orange" as const },
  { eyebrow: "Customers", title: "Client Portals", description: "Secure branded portals for documents, requests, payments, updates, and collaboration.", accent: "blue" as const },
  { eyebrow: "Operations", title: "Dashboards & Reporting", description: "Live operational views that combine data from the SaaS tools your team already uses.", accent: "purple" as const },
  { eyebrow: "People", title: "Employee Portals", description: "One place for internal requests, policies, resources, onboarding, and team communication.", accent: "green" as const },
  { eyebrow: "Learning", title: "LMS & Knowledge Base", description: "Structured learning, assessments, documentation, and searchable organizational knowledge.", accent: "blue" as const },
  { eyebrow: "Business", title: "ERP & Inventory", description: "Connected workflows for purchasing, inventory, vendors, finance, and daily operations.", accent: "orange" as const },
];

export default function SolutionsPage() {
  return <OverviewPage eyebrow="Solutions" title="Business solutions." description="Practical internal tools and customer-facing applications built around the way your company actually works." sectionEyebrow="What we solve" sectionTitle="Software shaped around your workflow" sectionDescription="We connect your existing systems and build the missing experience your users and teams need." cards={cards} statementTitle="Your process comes first." statementDescription="You do not need to force your business into another rigid platform. We design the interface, automation, and data flow around your real operation." points={["Built on top of your existing SaaS stack", "Role-based access and secure data flows", "Clear ownership and documentation", "Designed to extend as the business changes"]} />;
}
