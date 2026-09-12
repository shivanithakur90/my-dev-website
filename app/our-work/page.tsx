import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import WorkShowcaseSection from "@/components/our-work/WorkShowcaseSection";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description:
    "Explore real custom software projects, dashboards, portals, operations systems, and outcomes built by Openxcell.",
};

export default function OurWorkPage() {
  return (
    <main>
      <PageHeroBanner
        eyebrow="Our Work"
        title="Case studies."
        description="Real engagements, real engineering, real outcomes — the problems we were handed, what we built, and what changed."
      />
      <WorkShowcaseSection />
    </main>
  );
}
