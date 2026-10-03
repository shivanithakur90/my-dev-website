import type { Metadata } from "next";
import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import StackCtaSection from "@/components/home/StackCtaSection";
import SolutionsTabs, { type SolutionTab } from "@/components/common/SolutionsTabs";
import WorkShowcaseSection from "@/components/our-work/AllWork";

export const metadata: Metadata = {
  title: "MealOps Vendory",
  description:
    "Manage food vendors, purchasing, ingredients, inventory, recipes, purchase orders, invoices, and food operations from one platform.",
};


const manufacturingTabs: SolutionTab[] = [
  {
    id: "inventory",
    label: "Content Management",
    image: "/erp-4.png",
    Icon: "inventory",
  },
  {
    id: "vendor",
    label: "Network Marketing",
    image: "/erp-7.png",
    Icon: "vendor",
  },
  {
    id: "erp",
    label: "Kitchen Operations",
    image: "/erp-6.png",
    Icon: "erp",
  },
  {
    id: "project",
    label: "Reservations",
    image: "/erp-5.png",
    Icon: "project",
  },
];

const caseStudies = [
  {
    title: "ContentFlow Studio",
    description:
      "A centralized editorial workspace for managing articles, insights, portfolios, case studies, drafts, and team activity.",
    image: "/erp-4.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/content-management",
    ctaLabel: "View case study",
    tags: [
      "SaaS",
      "Content Management",
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


export default function MealOpsVendoryPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="MEALOPS VENDORY"
        title="Manage purchasing, vendors, inventory, and food operations from one platform."
        description="Track suppliers, purchase orders, received stock, vendor invoices, ingredients, inventory, recipes, and menu operations from one connected system built for food businesses."
        image="/erp-6.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/our-work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED VENDOR OPERATIONS"
        title="Bring suppliers, invoices, ingredients, and inventory into one workspace."
        description="We build food operations platforms that help teams manage suppliers, purchase orders, vendor invoices, stock receiving, ingredient inventory, recipes, and menu data in one place. Your team gets clearer purchasing visibility, better stock control, and fewer manual handoffs."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 9L6 4H18L20 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M5 9V20H19V9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            <rect
              x="10"
              y="13"
              width="6"
              height="7"
              rx="1"
              fill="white"
              stroke="currentColor"
              strokeWidth="1.4"
            />

            <path
              d="M12 15.5H14.5M12 18H14"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for food businesses that need better control over purchasing and stock."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Restaurant operations teams",
            description:
              "Manage purchasing, supplier activity, received stock, inventory, recipes, and menu operations from one connected dashboard.",
          },
          {
            number: "02",
            title: "Procurement teams",
            description:
              "Create purchase orders, track vendor invoices, compare supplier activity, and keep buying processes organized.",
          },
          {
            number: "03",
            title: "Inventory teams",
            description:
              "Track ingredients, quantities, received items, stock levels, unit costs, and category-level inventory with better visibility.",
          },
          {
            number: "04",
            title: "Multi-location food businesses",
            description:
              "Standardize suppliers, purchasing, ingredients, inventory, recipes, and reporting across multiple kitchens or restaurant locations.",
          },
        ]}
      />

      <SolutionsTabs
        heading="Solutions for fintech."
        description="The apps we build most often for teams like yours."
        tabs={manufacturingTabs}
        paddingClassName="pt-[50px] md:pt-[80px]"
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        paddingClassName="py-[50px] sm:py-[50px] md:py-[70px] lg:py-[80px]"
        eyebrow="HOW WE BUILD IT"
        title="Food operations software built around real purchasing and inventory workflows."
        description="We understand how your team orders ingredients, receives stock, manages suppliers, verifies invoices, and tracks inventory, then build a connected platform that keeps every step organized."
        cards={[
          {
            title: "Map your purchasing workflow",
            description:
              "We identify how purchase orders, vendors, deliveries, invoices, ingredients, stock updates, and approvals move through your operation.",
          },
          {
            title: "Connect vendors & inventory",
            description:
              "We build supplier management, purchase orders, received orders, vendor invoices, inventory tracking, recipe data, and menu management into one system.",
          },
          {
            title: "Track costs & improve control",
            description:
              "Dashboards and reports help your team monitor supplier activity, ingredient costs, invoice totals, stock movement, purchasing history, and overall food operations.",
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
              className="pt-0! sm:pb-[50px] md:pb-[70px] lg:pb-[80px]"
            />
            
      <StackCtaSection
        heading="Let's connect your stack."
        description="Tell us what needs to talk to what. We'll design the integration layer."
        buttonText="Start a conversation"
        buttonHref="/contact"
        backgroundColor="#040d20"
        leftGlowColor="#e8772c"
        centerGlowColor="#ff5708"
        rightGlowColor="#e95d25"
        paddingClassName="pt-[0px] pb-[50px] sm:pt-[0px] sm:pb-[50px] lg:pt-[0px] lg:pb-[80px]"
        headingColor="#fff"
        descriptionColor="#fff"
        buttonIcon={undefined}
      />
    </div>
  );
}
