import type { Metadata } from "next";
import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import StackCtaSection from "@/components/home/StackCtaSection";

export const metadata: Metadata = {
  title: "Fleet Dispatch",
  description:
    "Build a fleet dispatch platform to manage orders, trucks, drivers, routes, load status, delivery progress, and fleet activity.",
};


const caseStudies = [
  {
    title: "SST Employee Hub",
    description:
      "A self-service employee portal for attendance, leave management, payslips, company policies, and internal announcements in one dashboard.",
    image: "/erp-1.png",
    imageAlt: "ContentFlow Studio dashboard",
    imageBackground: "bg-[#3b2116]",
    href: "/solutions/employee-hub",
    ctaLabel: "View case study",
    tags: [
      "Employee Portal",
      "HRMS",
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
      "Affiliate Management",
      "Dashboard",
      "Network Marketing",
    ],
  },
];


export default function FleetDispatchPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="FLEET DISPATCH"
        title="Keep every truck, driver, and load moving from one connected dispatch platform."
        description="Manage dispatch orders, fleet activity, drivers, trucks, routes, load status, and delivery progress in real time — all from one clear and connected operations dashboard."
        image="/erp-3.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED FLEET OPERATIONS"
        title="See every dispatch, truck, driver, and load in one place."
        description="We build fleet dispatch platforms that help logistics teams manage orders, assign drivers, track trucks, monitor loads, plan routes, and stay updated on delivery progress from one centralized system. Your team gets real-time visibility while dispatch operations stay faster, clearer, and easier to manage."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6H14V16H3V6Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            <path
              d="M14 9H18L21 12V16H14V9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            <circle
              cx="7"
              cy="18"
              r="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="18"
              cy="18"
              r="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for logistics teams that need complete visibility over daily fleet operations."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Dispatch teams",
            description:
              "Create, assign, and manage dispatch orders while tracking load progress and driver activity from one workspace.",
          },
          {
            number: "02",
            title: "Fleet managers",
            description:
              "Monitor active trucks, available vehicles, load capacity, maintenance status, and day-to-day fleet performance.",
          },
          {
            number: "03",
            title: "Logistics operations teams",
            description:
              "Track planned loads, accepted loads, completed deliveries, route progress, and operational performance in real time.",
          },
          {
            number: "04",
            title: "Growing transport businesses",
            description:
              "Scale drivers, trucks, routes, dispatch orders, and delivery volume without relying on spreadsheets or disconnected systems.",
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
        className="pb-0"
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Fleet management software built around real dispatch operations."
        description="We understand how your dispatchers, drivers, trucks, customers, routes, and loads work together, then build one connected system that gives your team the visibility and control needed to keep every shipment moving."
        cards={[
          {
            title: "Map your dispatch workflow",
            description:
              "We understand how orders are created, assigned, scheduled, tracked, delivered, and reported across your fleet operations.",
          },
          {
            title: "Connect drivers, trucks & loads",
            description:
              "We build workflows that connect dispatch orders, drivers, vehicles, planned loads, routes, delivery status, and operational data in one platform.",
          },
          {
            title: "Track performance in real time",
            description:
              "Live dashboards help your team monitor completion rates, active loads, fleet utilization, driver status, delivery progress, and overall operational performance.",
          },
        ]}
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
