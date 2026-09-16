import type { Metadata } from "next";
import ServiceDetailPage from "@/components/common/ServiceDetailPage";
import FaqSection from "@/components/home/FaqSection";
import BuiltWithOnSection from "@/components/common/BuiltWithOnSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import ProblemSection from "@/components/common/ProblemSection";


export const metadata: Metadata = {
  title: "System Integration & API Development",
  description:
    "System integration and API development services to connect CRMs, ERPs, payment tools, support platforms, databases, and SaaS workflows.",
};


const customApplicationFaqs = [
  {
    question: "Will this disrupt our current systems?",
    answer:
      "No. We build integrations in an isolated layer that sits beside your tools, not inside them. Your existing systems keep running exactly as they do today — we just connect them.",
  },
  {
    question: "What if a vendor changes their API?",
    answer:
      "Because the integration layer is isolated, an upstream API change is a surgical fix, not a rebuild. On a retainer we monitor for these changes and handle them proactively.",
  },
  {
    question: "Can you connect to our in-house / legacy system?",
    answer:
      "Yes. If it has any way to expose data — an API, a database, even a file export — we can bridge it to your modern stack without rebuilding it.",
  },
  {
    question: "How is this different from Zapier or Make?",
    answer:
      "Those are great for simple triggers. We build deep, custom integrations that handle complex logic, large volumes, and reliability requirements that no-code connectors break under — and you own the result outright.",
  },
  {
    question: "Do we own the integration code?",
    answer:
      "Fully. It lives in your infrastructure and accounts. No lock-in to a connector platform or to us.",
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
    label: "DIY / Vibe-coding Alone",
  },
];

const comparisonRows = [
  {
    feature: "Depth",
    openxcell: "Deep, custom, multi-SaaS",
    traditional: "Project-by-project",
    diy: "Surface-level triggers",
  },
  {
    feature: "Handles complex logic",
    openxcell: "Yes",
    traditional: "Sometimes",
    diy: "Surface-level triggers",
  },
  {
    feature: "Reliability at scale",
    openxcell: "Monitored, resilient",
    traditional: "Variable",
    diy: "Breaks at volume",
  },
  {
    feature: "Disruption to current tools",
    openxcell: "None — isolated layer",
    traditional: "Risk of rework",
    diy: "None, but shallow",
  },
  {
    feature: "You own it",
    openxcell: "Fully",
    traditional: "Usually",
    diy: "Locked to platform",
  },
];


export default function ApiDevelopmentPage() {
  return (
    <>
      {/* =====================================================
      PROBLEM
      ===================================================== */}
      <ProblemSection
        eyebrow="THE PROBLEM"
        title="Your tools don’t talk. So your data is stuck."
        description="Sales lives in one system, support in another, billing in a third, and the truth lives in a spreadsheet someone updates by hand. Data gets re-keyed, reports go stale, and nobody trusts the numbers. The tools are fine — the gaps between them aren't."
        image="/your-tool.avif"
        imageAlt="Cloud, DevOps and security infrastructure illustration"
      />
      <ComparisonSection
        eyebrow="WHY US"
        eyebrowIcon="⑂"
        title="Why OpenXcell for integration."
        description=""
        columns={comparisonColumns}
        rows={comparisonRows}
        sectionClassName="pb-[50px] sm:pb-[70px] lg:pb-[80px]"
      />
      <BuiltWithOnSection
        eyebrow="BUILT WITH & BUILT ON"
        title="We connect to your stack."
        description=""
        paddingClassName="pt-[50px] sm:pt-[50px] lg:pt-[80px]"
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
      <FaqSection
        eyebrow="FAQ"
        title={
          <> Common <br /> Questions. </>
        }
        description="Specific to systems integration."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        faqs={customApplicationFaqs}
        sectionClassName="py-[50px] sm:py-[50px] lg:py-[80px] "
      />
    </>
  );
}
