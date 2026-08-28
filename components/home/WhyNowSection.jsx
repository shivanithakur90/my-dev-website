import Image from "next/image";

export default function WhyNowSection() {
  const points = [
    {
      number: "01",
      title: "Vibe coding",
      description:
        "AI-augmented engineers ship in weeks what used to take quarters. Custom software finally fits a mid-market budget.",
    },
    {
      number: "02",
      title: "Headless SaaS",
      description:
        "Every major SaaS now exposes its data through APIs. We build the interface your team actually needs on top.",
    },
    {
      number: "03",
      title: "Forward-deployed engineers",
      description:
        "No specs and handoffs. Our engineers embed with your team and ship working software from week one.",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9ff] pb-0 pt-[50px] md:py-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-5 flex w-fit items-center gap-2 rounded-md border border-[#e7e3eb] bg-white px-3 py-1.5 shadow-[0_3px_12px_rgba(0,0,0,0.04)]">
              <span className="flex h-4 w-4 items-center justify-center text-[#ff4d00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.4 7.1L18 5L15.9 9.6L21 11L15.9 12.4L18 17L13.4 14.9L12 20L10.6 14.9L6 17L8.1 12.4L3 11L8.1 9.6L6 5L10.6 7.1L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#343434]">
                Why Now
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[580px] text-[38px] font-semibold leading-[1.1] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px]">
              Why custom software
              <span className="block">finally makes sense for</span>
              <span className="block">mid-market</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.55] text-[#606060] sm:text-[16px]">
              For years, custom software meant a 4-person team for 6 months and
              a $300K bill. So mid-market companies just lived with the
              friction. Three things changed that.
            </p>

            {/* Points */}
            <div className="mt-8 flex flex-col gap-4">
              {points.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 rounded-[14px] border border-[#e2dee7] bg-white p-4 shadow-[0_2px_6px_rgba(0,0,0,0.02)] sm:p-5"
                >
                  {/* Number */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f2f7fb] text-[11px] font-semibold text-[#52616d]">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#202020] sm:text-[16px]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-[1.55] text-[#626262] sm:text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT TESTIMONIAL CARD */}
          <div className="mx-auto w-full max-w-[430px] lg:max-w-none">
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_35px_rgba(30,20,60,0.14)]">
              {/* Image Area */}
              <div className="relative min-h-[440px] overflow-hidden bg-gradient-to-b from-[#e2e4ff] to-[#efefff] sm:min-h-[500px]">
                {/* Person Info */}
                <div className="absolute left-5 top-5 z-10 rounded-lg border border-white/70 bg-white/90 px-3.5 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.10)] backdrop-blur-sm sm:left-6 sm:top-6">
                  <p className="text-[12px] font-semibold text-[#242424]">
                    Sachin Dhamija
                  </p>

                  <p className="mt-1 text-[11px] leading-[1.4] text-[#5b5b5b]">
                    CEO,
                    <br />
                    OpenXcell
                  </p>
                </div>

                {/* Person Image */}
                <Image
                  src="/Dharmesh Shah.jpg"
                  alt="Sachin Dhamija, CEO of OpenXcell"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Quote */}
              <div className="bg-white px-6 py-6 sm:px-7 sm:py-7">
                <p className="text-[17px] font-medium leading-[1.45] tracking-[-0.3px] text-[#343434] sm:text-[19px]">
                  &quot;Every B2B software company is (or should be) building a
                  &apos;headless&apos; version of their product. But
                  &apos;headless&apos; doesn&apos;t mean &apos;brainless.&apos;&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
