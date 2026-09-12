import OverviewPage from "@/components/common/OverviewPage";
import PageHeroBanner from "@/components/common/PageHeroBanner";


export default function SolutionsPage() {
  return (
    <PageHeroBanner
      eyebrow="CLIENT PORTAL"
      title="A client portal, built for you — not by you."
      description="Give your clients one secure, branded place to see their data, share files, track requests, and pay invoices — connected to the CRM, storage, and billing you already use."
      image="/erp-4.png"
      primaryButtonText="Request a quote"
      primaryButtonHref="/contact"
      secondaryButtonText="See what we built"
      secondaryButtonHref="/work"
    />
  );
}
