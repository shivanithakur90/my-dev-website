import OverviewPage from "@/components/common/OverviewPage";

const cards = [
  { eyebrow: "Company", title: "About OpenXcell", description: "A product-minded engineering team focused on useful software, measurable outcomes, and clear ownership.", accent: "orange" as const },
  { eyebrow: "People", title: "Our Team", description: "Senior designers, engineers, and delivery leaders working closely with customer teams.", accent: "blue" as const },
  { eyebrow: "Trust", title: "Security & Confidentiality", description: "Practical controls, private-by-default collaboration, and responsible handling of business data.", accent: "green" as const },
  { eyebrow: "Careers", title: "Build With Us", description: "Join a team that values ownership, thoughtful craft, direct communication, and continuous learning.", accent: "purple" as const },
  { eyebrow: "Customers", title: "Testimonials", description: "See how teams describe the collaboration, speed, communication, and results of their engagements.", accent: "orange" as const },
  { eyebrow: "Contact", title: "Start a Conversation", description: "Share the workflow or product challenge you want to solve and get a clear next step.", accent: "blue" as const },
];

export default function CompanyPage() {
  return <OverviewPage eyebrow="Company" title="Built for outcomes." description="A collaborative engineering partner for teams that need working software, direct communication, and dependable delivery." sectionEyebrow="Who we are" sectionTitle="Senior builders, close to the problem" sectionDescription="We combine product thinking, engineering depth, and modern tools to turn operational friction into software your team owns." cards={cards} statementTitle="A straightforward way to work together." statementDescription="Small senior teams stay close to your users, share progress continuously, and remain accountable from discovery through deployment." points={["Direct access to the people building the product", "Transparent scope, progress, and decisions", "Working software shown throughout delivery", "Full ownership of the finished solution"]} />;
}
