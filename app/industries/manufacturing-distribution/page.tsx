import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Manufacturing & Distribution",
  description:
    "Custom manufacturing and distribution software for demand planning, inventory, vendor workflows, production, and operations.",
};

export default function ManufacturingDistributionPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Industry"
        title="Manufacturing & Distribution"
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
