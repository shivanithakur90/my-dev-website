import type { Metadata } from "next";
import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Employee Hub",
  description:
    "Create a custom employee hub for team data, workflows, operations, requests, dashboards, and internal business processes.",
};

export default function CustomSoftwarePlatformsPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <PageHeroBanner
       eyebrow="EMPLOYEE HUB"
        title="Run your entire operation from one connected platform."
        description="Replace disconnected tools, spreadsheets, and manual processes with custom business software built around the way your team actually works."
        image="/ERP-1.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO SECTION */}
      <IntroContentSection
        eyebrow="CUSTOM BUSINESS SOFTWARE"
        title="Bring your customers, workflows, teams, and operations into one system."
        description="We build custom software platforms that bring customers, jobs, vehicles, technicians, inventory, invoices, reporting, and daily operations into one centralized system. Your team gets real-time visibility, faster workflows, and less manual work across the business."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M3 8H21"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M8 8V21"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M11 12H18"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M11 16H16"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <circle
              cx="5.5"
              cy="5.5"
              r="0.8"
              fill="currentColor"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for businesses managing complex daily operations."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "Operations teams",
            description:
              "Manage jobs, staff, customers, workflows, inventory, and day-to-day business activity from one connected platform.",
          },
          {
            number: "02",
            title: "Service businesses",
            description:
              "Track customers, bookings, jobs, technicians, service history, invoices, and payments without relying on disconnected tools.",
          },
          {
            number: "03",
            title: "Management teams",
            description:
              "Get real-time dashboards, reports, performance metrics, and operational visibility for faster and better decisions.",
          },
          {
            number: "04",
            title: "Growing businesses",
            description:
              "Replace spreadsheets and multiple systems with scalable software designed around the way your business actually operates.",
          },
        ]}
      />

      {/* BUILD PROCESS */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="Business software designed around your actual operations."
        description="We understand your workflows, users, data, and operational challenges, then build one connected platform that makes everyday work simpler, faster, and easier to manage."
        cards={[
          {
            title: "Map your operations",
            description:
              "We identify your workflows, teams, roles, data, approvals, reporting requirements, and existing business systems.",
          },
          {
            title: "Build your platform",
            description:
              "We create dashboards, modules, permissions, workflows, integrations, and automation around your specific business processes.",
          },
          {
            title: "Scale & improve",
            description:
              "As your business grows, new modules, users, locations, integrations, and workflows can be added without rebuilding everything.",
          },
        ]}
      />
    </div>
  );
}
