import HowWeDeliverSection from "@/components/common/HowWeDeliverSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FaqSection from "@/components/home/FaqSection";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "AI & Automation Services",
  description:
    "AI automation services for document workflows, customer operations, internal approvals, reporting, notifications, and SaaS-connected business processes.",
};



const caseStudies = [
  {
    title: "MealOps Vendor Invoice Management Platform",
    description:
      "A streamlined kitchen operations platform for managing vendor invoices, purchase orders, inventory records, and supplier approvals from one centralized workspace.",
    image: "/erp-6.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/content-management",
    ctaLabel: "View case study",
    tags: [
      "Kitchen Operations",
      "FoodTech",
      "Dashboard",
    ],
  },

  {
    title: "Smart MLM & Commission Management Platform",
    description:
      "A centralized platform for managing members, sales, payouts, commissions, affiliate networks, and business performance from one dashboard.",
    image: "/erp-7.png",
    imageAlt: "Finance operations dashboard",
    imageBackground: "bg-[#fff3eb]",
    href: "/solutions/smart-mlm",
    ctaLabel: "View case study",
    tags: [
      "Network Marketing",
      "Dashboard",
      "Affiliate Management",
    ],
  },
];


const customApplicationFaqs = [
  {
    question: "Will the AI act without our approval?",
    answer:
      "Only if you want it to. By default everything is human-in-the-loop — AI drafts and proposes, your team approves. As trust builds, you choose where to grant more autonomy. You're always in control of the dial.",
  },
  {
    question: "How do you stop it from hallucinating?",
    answer:
      "We ground every answer in your own data — your knowledge base, docs, and records — rather than the open internet, and we make sources traceable. Combined with human oversight on consequential actions, this keeps accuracy high and surprises rare.",
  },
  {
    question: "Where does our data go?",
    answer:
      "It stays in your infrastructure and accounts. We build the automation to run on your systems; your data and customer information don't leave your control.",
  },
  {
    question: "Is this a real product or just a demo?",
    answer:
      "Real, production software. The difference between us and demo-vendors is that we ship automation your team uses every day — integrated, monitored, and owned by you — not a slideware proof-of-concept.",
  },
  {
    question: "What can it integrate with?",
    answer:
      "The tools you already use — Intercom, HubSpot, Slack, Notion, your databases, and more. The AI reads from and acts on your existing stack, which is what makes it useful rather than a standalone toy.",
  },
];



const comparisonColumns = [
  {
    key: "feature",
    label: "Features",
    widthClassName: "w-[28%]",
  },
  {
    key: "openxcell",
    label: "OpenXcell FDE",
    highlighted: true,
  },
  {
    key: "traditional",
    label: "Staff- Aug Contractor",
  },
  {
    key: "diy",
    label: "Full Time Hire",
  },
];

const comparisonRows = [
  {
    feature: "Time to productive",
    openxcell: "Days",
    traditional: "Weeks (with mgmt)",
    diy: "3–6 months to hire",
  },
  {
    feature: "Unit of work",
    openxcell: "Outcomes",
    traditional: "Tickets",
    diy: "Outcomes",
  },
  {
    feature: "Breadth",
    openxcell: "Whole-solution",
    traditional: "Single stack",
    diy: "Single role",
  },
  {
    feature: "Built on your SaaS",
    openxcell: "Fully",
    traditional: "Usually",
    diy: "Locked to tool",
  },
];

export default function AiAutomationPage() {
  return (
    <div>
        <PageHeroBanner
          eyebrow="AI & INTELLIGENT AUTOMATION"
          title="AI that takes real work off your team’s plate."
          description="AI agents, copilots, and automated workflows — built on your data, integrated into the tools you already use, and shipped as production software. Not a demo. Not a chatbot bolt-on. Real automation that removes real work."
          primaryButtonText="Request a quote"
          primaryButtonHref="/contact"
          secondaryButtonText="See what we built"
          secondaryButtonHref="/our-work"
        />
        <ProblemSection
          eyebrow="THE PROBLEM"
          title="Your team spends hours on work, AI should be doing."
          description="Drafting the same replies. Re-keying data between systems. Reading documents to pull out three fields. Searching five tools to answer one question. It's repetitive, it doesn't scale, and it burns your best people on your lowest-value work."
          image="/your-team.avif"
          imageAlt="Financial internal tools illustration"
        />

        <ComparisonSection
          eyebrow="WHY US"
          eyebrowIcon="⑂"
          title="Why OpenXcell for AI automation."
          description=""
          columns={comparisonColumns}
          rows={comparisonRows}
          sectionClassName="py-[50px] sm:py-[70px] lg:py-[80px]"
        />

        <HowWeDeliverSection
          eyebrow="HOW WE DELIVER"
          title="From manual work to working automation, in weeks."
          description="AI-native delivery is the speed. Proper engineering is the reason it lasts."
          image="/from-manual.avif"
          cards={[
            {
              title: "Find the work",
              description:
              "We sit with your team and identify  the repetitive, high-volume work  AI can take over.",
            },
            {
              title: "Train on your data",
              description:
              "We build the agent or automation,  grounded in your knowledge base  and connected to your tools.",
            },
            {
              title: "Deploy guardrails",
              description:
              "Human-in-the-loop, logging, and  safety checks. Live in production,  not a sandbox.",
            },
            {
              title: "Tune & expand",
              description:
              "We measure what it removes,  tune accuracy, and widen  autonomy as trust grows.",
            },
          ]}
        />

        <WorkShowcaseSection
          eyebrow="CASE STUDIES"
          title="Real interfaces, built on real SaaS"
          description="A selection of digital products and platforms designed around real business workflows."
          projects={caseStudies}
          showFilters={false}
          showFinalCta={false}
          limit={2}
          className="!pt-0"
        />


        <FaqSection
            eyebrow="FAQ"
            title={
                <> Common <br /> Questions. </>
            }
            description="The things teams ask before trusting AI with real work."
            ctaLabel="Contact Sales"
            ctaHref="/contact"
            faqs={customApplicationFaqs}
            sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px] "
        />
    </div>
  );
}
