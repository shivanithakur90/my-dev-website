import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Custom healthcare software for patient workflows, provider operations, secure portals, reporting, automation, and integrations.",
};

export default function HealthcarePage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Industry"
        title="Healthcare"
        description="Add your content for this industry page here."
      />

      <section className="bg-white py-[50px]">
        <div className="container min-h-[240px]">
          {/* Add page content here. */}
        </div>
      </section>
    </main>
  );
}
