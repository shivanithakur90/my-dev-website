import Link from "next/link";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import IntroContentSection from "@/components/common/IntroContentSection";
import AudienceSection, { type AudienceCard } from "@/components/common/AudienceSection";
import BuildProcessSection, { type BuildProcessCard } from "@/components/common/BuildProcessSection";

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  introDescription: string;
  audienceTitle: string;
  audienceCards: AudienceCard[];
  deliverables: string[];
  processTitle: string;
  processDescription: string;
  processCards: BuildProcessCard[];
};

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceDetailPage({
  eyebrow,
  title,
  description,
  introTitle,
  introDescription,
  audienceTitle,
  audienceCards,
  deliverables,
  processTitle,
  processDescription,
  processCards,
}: ServiceDetailPageProps) {
  return (
    <main className="overflow-hidden bg-white text-[#10101b]">
      <PageHeroBanner
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryButtonText="Request a quote"
        primaryButtonHref="/contact"
        secondaryButtonText="See our work"
        secondaryButtonHref="/our-work"
      />

      <IntroContentSection
        eyebrow="WHAT WE DO"
        title={introTitle}
        description={introDescription}
      />

      <AudienceSection
        eyebrow="WHO IT HELPS"
        title={audienceTitle}
        cards={audienceCards}
      />

      <section className="bg-white px-5 py-[50px] md:px-8 md:py-[70px]">
        <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#ececec] bg-[#fafafa] p-6 shadow-[0_16px_45px_rgba(20,20,40,0.06)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#ff5200]">
                Deliverables
              </p>

              <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] md:text-[42px]">
                What your team gets.
              </h2>

              <p className="mt-5 text-[16px] leading-[1.65] text-[#5f5f65]">
                Clear scope, production-ready software, and handover support so the system keeps working after launch.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-[#ececec] bg-white p-4 text-[15px] font-medium leading-[1.45] text-[#2b2b31] shadow-[0_8px_20px_rgba(20,20,40,0.04)]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0e9] text-[#ff5200]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BuildProcessSection
        eyebrow="HOW WE BUILD"
        title={processTitle}
        description={processDescription}
        cards={processCards}
      />

      <section className="bg-white px-5 pb-[50px] pt-0 md:px-8">
        <div
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] px-6 py-12 md:px-12 lg:px-16 lg:py-16"
          style={{
            background:
              "linear-gradient(120deg, #2036e9 0%, #742c8d 48%, #d62a34 75%, #f0440b 100%)",
          }}
        >
          <div className="absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full bg-white/15 blur-[100px]" />
          <div className="absolute -bottom-40 left-[20%] h-[350px] w-[350px] rounded-full bg-[#868fff]/20 blur-[100px]" />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                Start a project
              </p>

              <h2 className="mt-3 max-w-[720px] text-3xl font-semibold tracking-[-0.035em] text-white md:text-[46px] md:leading-[1.12]">
                Need this service for your team?
                <br />
                Let&apos;s scope it together.
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-white/75 md:text-base">
                Share the workflow, tools, and business goal. We&apos;ll suggest the fastest path to a working build.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-5 rounded-[14px] bg-[#ff4a08] px-6 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1"
            >
              Get a quote

              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff4a08]">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
