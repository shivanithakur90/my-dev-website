import type { Metadata } from "next";

import PageHeroBanner from "@/components/common/PageHeroBanner";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";
import { projects } from "@/components/our-work/projects";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description:
    "Explore real custom software projects, dashboards, portals, operations systems, and outcomes built by Openxcell.",
};

export default function OurWorkPage() {
  return (
    <main>
      {/* Hero */}
      <PageHeroBanner
        eyebrow="Our Work"
        title="Case studies."
        description="Real engagements, real engineering, real outcomes — the problems we were handed, what we built, and what changed."
      />

      {/* Case Studies */}
      <WorkShowcaseSection
        eyebrow="CASE STUDIES"
        title="Real interfaces, built for real businesses."
        description="Explore custom dashboards, SaaS platforms, internal tools, portals, and digital products built around real business workflows."
        projects={projects}
        showFilters={true}
        filterContent={{
          searchLabel: "Search",
          searchPlaceholder: "Search case studies...",
          industryLabel: "Industry",
          allLabel: "All",
          clearLabel: "Clear",
        }}
        emptyState={{
          title: "No case studies found.",
          description:
            "Try another search term or clear the selected industry.",
        }}
        showFinalCta={true}
        finalCta={{
          title: "Have a project like these?",
          description:
            "Tell us the problem you are solving. We will scope it on a focused call and send a fixed-price quote within 48 hours.",
          buttonLabel: "Request a quote",
          buttonHref: "/contact",
        }}
      />
    </main>
  );
}