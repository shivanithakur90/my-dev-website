import type { Metadata } from "next";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "E-commerce & Retail",
  description:
    "Custom e-commerce and retail software for storefront operations, inventory, customer workflows, recommendations, and dashboards.",
};

export default function EcommerceRetailPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHeroBanner
        eyebrow="Fintech & Financial Services"
        title="Software for fintech, built for you."
        description="Custom apps, AI automation, and integrations built for payments, lending, and financial platforms — on top of the SaaS and compliance tools you already run. Delivered by forward-deployed engineers, production-grade in weeks."
      />
      <section className="bg-white py-[50px]">
        <div className="container min-h-[240px]">
          {/* Add page content here. */}
        </div>
      </section>
    </main>
  );
}
