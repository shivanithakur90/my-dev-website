import BuiltWithOnSection from "@/components/common/BuiltWithOnSection";
import HowWeDeliverSection, {
  BuildIntegrateIcon,
  DeployScaleIcon,
  DiscoverIcon,
  HandOverIcon,
} from "@/components/common/HowWeDeliverSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import ProblemSection from "@/components/common/ProblemSection";
import TrustedAiSection from "@/components/common/TrustedAiSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FaqSection from "@/components/home/FaqSection";
import StackCtaSection from "@/components/home/StackCtaSection";
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
    label: "Traditional Dev Shop",
  },
  {
    key: "diy",
    label: "DIY, single tools",
  },
];

const comparisonRows = [
  {
    feature: "Time to working software",
    openxcell: "Week 1",
    traditional: "2-3 months",
    diy: "Hours, but limited ",
  },
  {
    feature: "Production-ready & scalable",
    openxcell: "Deep, multi-SaaS",
    traditional: "From Scratch",
    diy: "Tool-limited",
  },
  {
    feature: "You own the code",
    openxcell: "Yes — engineered",
    traditional: "Variable",
    diy: "Breaks at scale",
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
            icon: <DiscoverIcon />,
            description:
              "We sit with your team and identify  the repetitive, high-volume work  AI can take over.",
          },
          {
            title: "Train on your data",
            icon: <BuildIntegrateIcon />,
            description:
              "We build the agent or automation,  grounded in your knowledge base  and connected to your tools.",
          },
          {
            title: "Deploy guardrails",
            icon: <DeployScaleIcon />,
            description:
              "Human-in-the-loop, logging, and  safety checks. Live in production,  not a sandbox.",
          },
          {
            title: "Tune & expand",
            icon: <HandOverIcon />,
            description:
              "We measure what it removes,  tune accuracy, and widen  autonomy as trust grows.",
          },
        ]}
      />

      <TrustedAiSection
        eyebrow="BUILT TO BE TRUSTED"
        title="AI you can actually let loose safely."
        description="The reason most AI projects stall isn't capability. It's trust."
        secondaryDescription="We build automation that earns it."
        items={[
          {
            title: "Human-in-the-loop by default",
            description:
              "AI drafts and proposes; your team approves before anything goes out or changes. You decide how much autonomy to grant, and dial it up as trust builds.",
          },
          {
            title: "Grounded in your data",
            description:
              "Answers come from your knowledge base, docs, and records — not the open internet. Less hallucination, more accuracy, every source traceable.",
          },
          {
            title: "Audited and owned",
            description:
              "Every AI action is logged and reviewable. The system runs in your infrastructure, on your accounts — your data never leaves your control.",
          },
        ]}
      />

      <BuiltWithOnSection
        eyebrow="BUILT WITH & BUILT ON"
        title="Built with & Built on your SaaS"
        description="So your people tab-switch between tools, export to spreadsheets, and work around software that doesn’t quite fit."
        paddingClassName="pb-[50px] sm:pb-[50px] lg:pb-[110px]"
        leftGroup={{
          title: "Built with",
          description:
            "Frontier models and the right framework for the job.",
          items: [
            {
              label: "Claude",
              icon: <span className="text-[#df7045]">✳</span>,
            },
            {
              label: "n8n",
              image: "/n8n.svg",
              icon: <span className="text-[#ff4f64]">⌁</span>,
            },
            {
              label: "Open AI",
              image: "/open-ai.svg",
              icon: <span className="text-black">◉</span>,
            },
            {
              label: "RAG/Vector DBs",
              image: "/rag.svg",
              icon: <span>🗄️</span>,
            },
            {
              label: "Custom Agent",
              icon: <span className="text-[#ff5708]">⚙</span>,
            },
          ],
        }}
        rightGroup={{
          title: "Built on",
          description:
            "Connected to where your work and knowledge already live.",
          items: [
            {
              label: "Intercom",
              image: "/itercom.png",
              icon: <span className="text-[#12253f]">▥</span>,
            },
            {
              label: "HubSpot",
              image: "/hubspot.svg",
              icon: <span className="text-[#ff5c35]">⌯</span>,
            },
            {
              label: "Notion",
              image: "/notion.svg",
              icon: <span className="text-black">N</span>,
            },
            {
              label: "Slack",
              image: "/slack.svg",
              icon: <span>✣</span>,
            },
            {
              label: "Your Docs",
              image: "/doc.svg",
              icon: <span className="text-[#4285f4]">▤</span>,
            },
          ],
        }}
        moreLabel="+more"
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

      <StackCtaSection
        heading="What work could AI take off your plate?"
        description="Tell us where your team is spending time on repetitive work. We'll scope an automation on a 30-minute call and send a fixed-price quote within 48 hours."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#f7f7fb"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#171717"
        descriptionColor="#555555" buttonIcon={undefined} />
    </div>
  );
}
