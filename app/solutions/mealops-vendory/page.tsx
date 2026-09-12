import type { Metadata } from "next";
import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "MealOps Vendory",
  description:
    "Manage food vendors, purchasing, ingredients, inventory, recipes, purchase orders, invoices, and food operations from one platform.",
};

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
        secondaryButtonHref="/work"
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

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
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
    </div>
  );
}
