export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="container">

        {/* Top Content */}
        <div className="max-w-[760px]">
          {/* Badge */}
          <div className="mb-5 flex w-fit items-center gap-2 rounded-md border border-[#e5e5e5] bg-white px-3 py-1.5 shadow-sm">
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
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold leading-[1.05] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px]">
            What OpenXcell actually does.
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[720px] text-[15px] leading-[1.55] text-[#575757] sm:text-[16px]">
            You tell us the business app you need.{" "}
            <strong className="font-semibold text-[#171717]">
              A forward-deployed engineer
            </strong>{" "}
            — a senior builder who embeds with your team — uses AI and the best
            no-code tools to build it on top of your existing software, and
            ships it in weeks.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">

          {/* Card 1 */}
          <article className="flex min-h-[330px] flex-col rounded-[14px] border border-[#dedede] bg-white p-5 shadow-[0_3px_8px_rgba(0,0,0,0.08)] sm:p-6">
            {/* Icon */}
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#fff0e8] text-[#ff4d00]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="9"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M3.5 19C4.1 15.9 6.5 14 10 14C11.7 14 13.2 14.5 14.3 15.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />

                <path
                  d="M18 10V16M15 13H21"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.4px] text-[#171717]">
              A senior human engineer
            </h3>

            <p className="mt-3 text-[14px] leading-[1.55] text-[#5f5f5f]">
              Not an AI agent. Not an offshore ticket-taker. A senior builder
              who sits with your team, learns your workflows, and is
              accountable for the result.
            </p>

            {/* Bottom Box */}
            <div className="mt-auto pt-6">
              <div className="flex min-h-[68px] items-center rounded-[12px] bg-[#fff0e8] px-4">
                {/* Avatars */}
                <div className="flex items-center">
                  <div className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#91583f] to-[#e1b18d] text-xs font-semibold text-white">
                    A
                  </div>

                  <div className="relative z-30 -ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#d58b2e] to-[#f1c05b] text-xs font-semibold text-white">
                    J
                  </div>

                  <div className="relative z-20 -ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#b56758] to-[#e3a58e] text-xs font-semibold text-white">
                    M
                  </div>

                  <div className="relative z-10 -ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#328e9b] to-[#74c7cd] text-xs font-semibold text-white">
                    S
                  </div>
                </div>

                <span className="ml-4 whitespace-nowrap text-[12px] font-medium text-[#222]">
                  +250 Workforce
                </span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex min-h-[330px] flex-col rounded-[14px] border border-[#dedede] bg-white p-5 shadow-[0_3px_8px_rgba(0,0,0,0.08)] sm:p-6">
            {/* Icon */}
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#e9f5ff] text-[#1583ff]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                <path
                  d="M18.5 3L19 5L21 5.5L19 6L18.5 8L18 6L16 5.5L18 5L18.5 3Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.4px] text-[#171717]">
              Augmented by AI + the right tools
            </h3>

            <p className="mt-3 text-[14px] leading-[1.55] text-[#5f5f5f]">
              They use AI coding and no-code builders (Softr, Lovable, Retool,
              and more) to move at a speed a traditional dev shop can’t match.
            </p>

            {/* Bottom Box */}
            <div className="mt-auto pt-6">
              <div className="flex min-h-[68px] items-center justify-between rounded-[12px] bg-[#e8f4ff] px-4">
                <div className="flex items-center gap-2">
                  {/* Figma */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                    <div className="grid grid-cols-2 gap-[2px]">
                      <span className="h-[7px] w-[7px] rounded-full bg-[#f24e1e]" />
                      <span className="h-[7px] w-[7px] rounded-full bg-[#ff7262]" />
                      <span className="h-[7px] w-[7px] rounded-full bg-[#a259ff]" />
                      <span className="h-[7px] w-[7px] rounded-full bg-[#1abcfe]" />
                    </div>
                  </div>

                  {/* Tool 2 */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] text-white shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M6 7H14L18 11V17H10L6 13V7Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  {/* Tool 3 */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                    <div className="h-4 w-4 rounded-[5px] bg-gradient-to-br from-[#ff3b7b] via-[#ff9647] to-[#7457ff]" />
                  </div>

                  {/* Tool 4 */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1677ff] text-white shadow-sm">
                    <span className="text-[12px] font-bold">⚡</span>
                  </div>

                  {/* Tool 5 */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111] text-white shadow-sm">
                    <span className="text-[12px]">↗</span>
                  </div>
                </div>

                <span className="ml-3 whitespace-nowrap text-[11px] font-medium text-[#222]">
                  +50 More
                </span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex min-h-[330px] flex-col rounded-[14px] border border-[#dedede] bg-white p-5 shadow-[0_3px_8px_rgba(0,0,0,0.08)] sm:p-6">
            {/* Icon */}
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#edf6e8] text-[#5b9f1d]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8L12 4L20 8L12 12L4 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                <path
                  d="M4 12L12 16L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                <path
                  d="M4 16L12 20L20 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.4px] text-[#171717]">
              Built on top of your SaaS
            </h3>

            <p className="mt-3 text-[14px] leading-[1.55] text-[#5f5f5f]">
              We don’t replace your stack. We build the missing app on top of
              the tools and data you already have, and connect everything.
            </p>

            {/* Bottom Box */}
            <div className="mt-auto pt-6">
              <div className="flex min-h-[68px] items-center justify-center gap-5 rounded-[12px] bg-[#edf6e8] px-4">
                {/* App 1 */}
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white shadow-sm">
                  <div className="h-3 w-3 rounded-full border-2 border-[#c9c9c9]" />
                </div>

                <span className="h-1 w-1 rounded-full bg-[#80b45c]" />

                {/* Integration */}
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#ff4d00] text-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="17"
                      cy="7"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="7"
                      cy="17"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="17"
                      cy="17"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M9 7H15M7 9V15M17 9V15M9 17H15"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>

                <span className="h-1 w-1 rounded-full bg-[#80b45c]" />

                {/* Database */}
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-[#8d8d8d]"
                  >
                    <ellipse
                      cx="12"
                      cy="6"
                      rx="6"
                      ry="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 6V12C6 13.7 8.7 15 12 15C15.3 15 18 13.7 18 12V6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 12V18C6 19.7 8.7 21 12 21C15.3 21 18 19.7 18 18V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
