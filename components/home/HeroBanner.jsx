import Link from "next/link";

export default function HeroBanner() {
  const companies = [
    "KABATA",
    "shohz",
    "Masdar",
    "alorica",
    "HUSK",
    "MOVEGISTICS",
    "AVL SYSTEMS",
    "Trak",
  ];

  return (
    <>
      <section className="relative min-h-[680px] w-full overflow-hidden bg-[linear-gradient(180deg,#3520a8_0%,#8d236f_42%,#d36c8c_72%,#efd7e3_100%)] md:min-h-[800px] md:bg-gradient-to-b md:from-[#2637e6] md:via-[#ba406e] md:to-white">
        {/* Background Gradient Effects */}
        <div className="pointer-events-none absolute -left-[10%] top-[-20%] hidden h-[650px] w-[700px] rounded-full bg-[#1538ff] blur-[100px] md:block" />

        <div className="pointer-events-none absolute left-1/2 top-[-35%] hidden h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#8f257e]/80 blur-[130px] md:block" />

        <div className="pointer-events-none absolute -right-[15%] top-[-10%] hidden h-[650px] w-[700px] rounded-full bg-[#ff512d]/90 blur-[110px] md:block" />

        <div className="pointer-events-none absolute -right-[10%] top-[25%] hidden h-[500px] w-[600px] rounded-full bg-[#ffc1ac]/80 blur-[120px] md:block" />

        {/* Bottom Left White Effect */}
        <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] hidden h-[550px] w-[700px] rounded-full bg-white/95 blur-[100px] md:block" />

        {/* Bottom Right White Effect */}
        <div className="pointer-events-none absolute -bottom-[15%] -right-[10%] hidden h-[550px] w-[700px] rounded-full bg-white/95 blur-[100px] md:block" />

        {/* Main Container */}
        <div className="container relative z-10 flex min-h-[680px] flex-col justify-start py-[50px] md:min-h-[800px] md:justify-between md:pb-7 md:pt-24">
          {/* Hero Content */}
          <div className="mx-auto w-full max-w-[1150px] text-center">
            {/* Badge */}
            <div className="mx-auto mb-[50px] flex w-fit max-w-full flex-col items-center gap-3 text-[12px] font-semibold text-white sm:text-sm md:mb-8 md:flex-row md:gap-0 md:overflow-hidden md:rounded-full md:bg-white/20 md:text-base md:backdrop-blur-md">
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2.5 text-[#3b3b3b] md:px-4">
                <span className="text-lg leading-none text-[#ff4c14]">
                  ✦
                </span>

                <span className="whitespace-nowrap">
                  AI-native company
                </span>
              </div>

              <span className="whitespace-nowrap px-3 md:py-2.5 md:px-4">
                Forward-Deployed Engineering
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-[1080px] text-[30px] font-semibold leading-[1.08] tracking-[-1.5px] text-white sm:text-[46px] md:text-[56px] md:tracking-[-2px] lg:text-[68px] lg:tracking-[-3px]">
              The business apps your team needs,

              <span className="mt-2 block text-[#fff000]">
                built and integrated for you.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-[50px] max-w-[950px] text-[15px] font-medium leading-[1.55] text-white md:mt-8 md:text-[17px] lg:text-[18px]">
              OpenXcell builds the business apps your team needs — custom
              portals, internal CRMs, ops dashboards, KYC workflows, support
              cockpits — and integrates them with the SaaS you already use.

              <span className="block">
                Forward-deployed engineers, working software in weeks.
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-[50px] flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
              <Link
                href="/contact"
                className="group flex min-h-[50px] w-full max-w-[280px] items-center justify-between gap-3 rounded-xl bg-[#ff4d00] py-[5px] pl-5 pr-[6px] text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,77,0,0.3)] sm:w-auto"
              >
                <span>Request a quote</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#ff4d00]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/work"
                className="hidden min-h-[50px] w-full max-w-[280px] items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-[#171717] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4f4f4] sm:flex sm:w-auto"
              >
                See what we built
              </Link>
            </div>
          </div>

          {/* Trusted Companies */}
          <div className="mx-auto mt-24 hidden w-full md:mt-28 md:block">
            <div className="mx-auto w-full max-w-[1320px]">
              {/* Title */}
              <div className="flex w-full items-center justify-center gap-6 px-3 md:gap-8 lg:gap-10">
                <div className="hidden h-px w-[220px] bg-black/20 md:block lg:w-[350px]" />

                <p className="shrink-0 text-center text-[13px] font-medium text-[#555] md:text-[15px]">
                  Trusted by over 250+ high-performing companies
                </p>

                <div className="hidden h-px w-[220px] bg-black/20 md:block lg:w-[350px]" />
              </div>

              {/* Marquee */}
              <div className="mx-auto mt-7 w-full max-w-[1120px]">
                <div className="relative w-full overflow-hidden">
                  {/* Left Fade */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[25px] bg-gradient-to-r from-white/90 via-white/60 to-transparent md:w-[45px]" />

                  {/* Right Fade */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[25px] bg-gradient-to-l from-white/90 via-white/60 to-transparent md:w-[45px]" />

                  <div className="company-marquee flex w-max items-center">
                    {/* First Group */}
                    <div className="flex shrink-0 items-center gap-4 px-1 sm:gap-5 md:gap-6">
                      {companies.map((company, index) => (
                        <span
                          key={`first-${index}`}
                          className="flex min-w-[95px] shrink-0 items-center justify-center whitespace-nowrap text-[16px] font-bold tracking-[-1px] text-[#666] opacity-70 sm:min-w-[105px] sm:text-[18px] md:min-w-[115px] md:text-[20px] lg:min-w-[120px] lg:text-[22px]"
                        >
                          {company}
                        </span>
                      ))}
                    </div>

                    {/* Duplicate Group */}
                    <div
                      aria-hidden="true"
                      className="flex shrink-0 items-center gap-4 px-1 sm:gap-5 md:gap-6"
                    >
                      {companies.map((company, index) => (
                        <span
                          key={`second-${index}`}
                          className="flex min-w-[95px] shrink-0 items-center justify-center whitespace-nowrap text-[16px] font-bold tracking-[-1px] text-[#666] opacity-70 sm:min-w-[105px] sm:text-[18px] md:min-w-[115px] md:text-[20px] lg:min-w-[120px] lg:text-[22px]"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
