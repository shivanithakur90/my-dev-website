import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Discover & Assess",
      description:
        "We embed with your team, map the SaaS tools you already use, and find where the friction is. You end week one with a clear build plan and a fixed-price quote.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5H14M4 9H11M4 13H9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <circle
            cx="15.5"
            cy="14.5"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M18 17L21 20"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      title: "Week 1-3",
      description:
        "Your FDE builds the app — picking the right tool for the job — and wires it into your existing stack and proprietary data. You see working software in week one, refined every day after.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M8 2V5M16 2V5M7 9H17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Deploy & Own",
      description:
        "We ship to production, and over full ownership, and document everything. The app lives in your accounts. Extend it with us on retainer, or run it yourself.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 4.5C17.5 3 20.5 3.5 20.5 3.5C20.5 3.5 21 6.5 19.5 9.5L14 15L9 10L14.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          <circle
            cx="16"
            cy="8"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />

          <path
            d="M9 10L5.5 10.5L3.5 12.5L8 14M14 15L13.5 18.5L11.5 20.5L10 16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Bottom Soft Background */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-[#f1eaff] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Top Content */}
        <div className="mx-auto max-w-[760px] text-center">
          {/* Badge */}
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-md border border-[#e8e8e8] bg-white px-3 py-1.5 shadow-[0_3px_10px_rgba(0,0,0,0.04)]">
            <span className="flex h-4 w-4 items-center justify-center text-[#ff4d00]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 6H17M7 6L5 4M7 6L5 8M17 18H7M17 18L19 16M17 18L19 20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="17"
                  cy="6"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <circle
                  cx="7"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#343434]">
              How It Works
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px]">
            No prompting,
            <span className="block">No debugging. Just results.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[660px] text-[14px] leading-[1.6] text-[#626262] sm:text-[15px]">
            Everything is handled by our forward-deployed engineers, augmented
            by AI.
            <span className="block">
              You bring the problem — we bring the working software.
            </span>
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="group mx-auto flex min-h-[46px] w-fit items-center gap-3 rounded-[9px] bg-[#ff4d00] py-[5px] pl-4 pr-[5px] text-[12px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,77,0,0.25)]"
            >
              <span>Request a quote</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-white text-[#ff4d00]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
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
          </div>
        </div>

        {/* Process Card */}
        <div className="mx-auto mt-14 w-full max-w-[1000px] rounded-[18px] border border-[#ececec] bg-white px-5 py-7 shadow-[0_8px_25px_rgba(40,30,70,0.10)] sm:px-8 sm:py-8 lg:mt-16 lg:px-10">
          {/* Desktop Connecting Line */}
          <div className="relative hidden md:block">
            <div className="absolute left-[16.5%] right-[16.5%] top-[17px] h-px bg-[#1484ff]" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector mobile */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-[42px] hidden h-[calc(100%+40px)] w-px -translate-x-1/2 bg-[#1484ff]/30" />
                )}

                {/* Icon */}
                <div className="relative z-10 flex h-[36px] w-[36px] items-center justify-center rounded-[6px] border border-[#1484ff] bg-[#eaf5ff] text-[#087cff]">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.2px] text-[#202020]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[280px] text-[13px] leading-[1.55] text-[#626262]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}