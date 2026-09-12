import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function SmartRestaurantPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="SMART RESTAURANT"
        title="Run your restaurant from one smart, connected platform."
        description="Manage tables, orders, reservations, menu items, delivery, billing, and daily restaurant operations from one easy-to-use system built to keep service fast and organized."
        image="/erp-5.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED RESTAURANT OPERATIONS"
        title="From table service to billing, manage everything in one place."
        description="We build smart restaurant platforms that bring dine-in orders, menu management, reservations, delivery, billing, payments, and staff workflows into one connected system. Your team gets a faster way to serve customers while managers get real-time visibility into daily operations."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 3V10C7 11.7 8.3 13 10 13V21"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M4 3V8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M10 3V8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M17 3C15.3 3 14 4.3 14 6V12C14 13.1 14.9 14 16 14H18V21"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for restaurants that want faster service and simpler operations."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Restaurant owners",
            description:
              "See orders, reservations, sales, menu performance, and daily restaurant activity from one centralized dashboard.",
          },
          {
            number: "02",
            title: "Front-of-house teams",
            description:
              "Manage tables, take orders, track active bills, and serve customers faster without switching between different systems.",
          },
          {
            number: "03",
            title: "Kitchen & service teams",
            description:
              "Keep incoming orders organized and make sure every item moves smoothly from ordering to preparation and delivery.",
          },
          {
            number: "04",
            title: "Multi-location restaurants",
            description:
              "Standardize menu, billing, reporting, and restaurant operations across multiple branches from one scalable platform.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Restaurant software designed around the way your team actually works."
        description="We understand how your restaurant handles customers, tables, orders, menu items, payments, reservations, and delivery, then build a connected platform that makes every part of the operation easier to manage."
        cards={[
          {
            title: "Map your restaurant workflow",
            description:
              "We understand how orders move from customers to staff, kitchen, billing, and delivery while identifying bottlenecks in your current process.",
          },
          {
            title: "Build one connected POS platform",
            description:
              "We bring table service, menu management, reservations, delivery, billing, payments, and staff workflows into one simple system.",
          },
          {
            title: "Track performance & grow",
            description:
              "Real-time dashboards and reports help you monitor sales, popular menu items, restaurant activity, and operational performance as your business grows.",
          },
        ]}
      />
    </div>
  );
}