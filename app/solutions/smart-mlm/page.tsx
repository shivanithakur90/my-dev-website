import AudienceSection from "@/components/common/AudienceSection";
import BuildProcessSection from "@/components/common/BuildProcessSection";
import IntroContentSection from "@/components/common/IntroContentSection";
import PageHeroBanner from "@/components/common/PageHeroBanner";

export default function SmartMLMPage() {
  return (
    <div>
      {/* HERO */}
      <PageHeroBanner
        eyebrow="SMART MLM"
        title="Manage your entire MLM network from one smart platform."
        description="Track members, referrals, joinings, teams, commissions, wallet balances, payouts, orders, and network growth from one connected MLM management system."
        image="/erp-7.png"
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See what we built"
        secondaryButtonHref="/work"
      />

      {/* INTRO */}
      <IntroContentSection
        eyebrow="CONNECTED MLM OPERATIONS"
        title="See your members, network, commissions, and payouts in one place."
        description="We build MLM platforms that bring member registration, referral trees, ecommerce orders, wallet activity, commissions, credits, debits, payouts, affiliates, and reporting into one centralized system. Your team gets clear visibility while members get a smoother way to manage their network and earnings."
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="5"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="6"
              cy="17"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="18"
              cy="17"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <path
              d="M12 7.5V11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M12 11L6 14.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            <path
              d="M12 11L18 14.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      {/* WHO IT'S FOR */}
      <AudienceSection
        eyebrow="WHO IT'S FOR"
        title="Built for MLM businesses that need complete control over network growth."
        autoPlaySpeed={2000}
        cards={[
          {
            number: "01",
            title: "MLM administrators",
            description:
              "Manage members, registrations, referral trees, commissions, payouts, reports, and platform settings from one dashboard.",
          },
          {
            number: "02",
            title: "Network leaders",
            description:
              "Track team growth, joinings, left and right carry, referrals, sales performance, and member activity in real time.",
          },
          {
            number: "03",
            title: "Finance teams",
            description:
              "Monitor wallet balances, credits, debits, payout requests, confirmed payouts, commissions, and financial activity with clear reporting.",
          },
          {
            number: "04",
            title: "Growing MLM businesses",
            description:
              "Scale members, affiliates, orders, payout structures, ecommerce activity, and network operations without relying on disconnected systems.",
          },
        ]}
      />

      {/* HOW WE BUILD IT */}
      <BuildProcessSection
        eyebrow="HOW WE BUILD IT"
        title="MLM software built around your network structure and compensation model."
        description="We understand how your members join, refer others, earn commissions, place orders, request payouts, and grow their teams, then build one connected MLM platform around those real business workflows."
        cards={[
          {
            title: "Map your MLM structure",
            description:
              "We define your member hierarchy, referral tree, joining process, commission rules, carry structure, wallet logic, payouts, and business requirements.",
          },
          {
            title: "Build your connected MLM platform",
            description:
              "We create member dashboards, referral trees, ecommerce modules, wallet systems, commission calculations, payout workflows, reports, and admin controls.",
          },
          {
            title: "Track growth & payouts",
            description:
              "Real-time dashboards help you monitor joinings, sales, network growth, balances, credits, debits, commissions, and payout activity as your business scales.",
          },
        ]}
      />
    </div>
  );
}