import OverviewPage from "@/components/common/OverviewPage";

const cards = [
  { eyebrow: "Industry", title: "Healthcare", description: "Secure workflows for patient operations, provider teams, learning, reporting, and compliance.", accent: "blue" as const },
  { eyebrow: "Industry", title: "Fintech", description: "Transaction monitoring, reconciliation, KYC operations, risk review, and finance dashboards.", accent: "green" as const },
  { eyebrow: "Industry", title: "E-commerce & Retail", description: "Commerce operations, inventory, customer service, merchandising, and partner portals.", accent: "orange" as const },
  { eyebrow: "Industry", title: "Real Estate", description: "Property operations, investor portals, document workflows, reporting, and communication.", accent: "purple" as const },
  { eyebrow: "Industry", title: "SaaS & Technology", description: "Customer success tools, admin consoles, support cockpits, and product operations systems.", accent: "blue" as const },
  { eyebrow: "Industry", title: "Manufacturing", description: "Vendor, production, inventory, quality, and distribution workflows in one connected layer.", accent: "green" as const },
];

export default function IndustriesPage() {
  return <OverviewPage eyebrow="Industries" title="Industry expertise." description="Custom applications that respect the workflows, controls, and customer expectations unique to your market." sectionEyebrow="Where we work" sectionTitle="Built with your operating context in mind" sectionDescription="Our approach starts with how work moves through your organization—not with a generic software template." cards={cards} statementTitle="Domain context, without the long handoff." statementDescription="Forward-deployed engineers learn the workflow directly from your team, identify the highest-value friction, and ship the first working version quickly." points={["Industry-aware discovery and scoping", "Integrations with the systems already in place", "Security and compliance considered from day one", "Fast feedback with working software early"]} />;
}
