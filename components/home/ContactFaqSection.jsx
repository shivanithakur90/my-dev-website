"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need a spec or detailed requirements?",
    answer:
      "No. A rough description of the problem and the tools your team uses is plenty. Turning fuzzy problems into scoped builds is what the scoping call is for.",
  },
  {
    question: "Is my idea confidential?",
    answer:
      "Yes. Anything you share with us is treated as confidential and only used to understand your project requirements.",
  },
  {
    question: "Will I get put into a sales sequence?",
    answer:
      "No. We keep the process focused on your actual project needs. You will not be added to an unnecessary automated sales sequence.",
  },
  {
    question: "Is the quote really fixed-price?",
    answer:
      "Yes. Once the scope is agreed, we provide a clear fixed-price proposal with the expected timeline and deliverables.",
  },
  {
    question: "What if it's urgent?",
    answer:
      "Mention the urgency in your message. We review enquiries quickly and will let you know the earliest realistic delivery timeline.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's completely fine. Share the problem you're trying to solve and we'll help identify the right approach during the scoping conversation.",
  },
];

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7f8fb] py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-[6px] border border-[#e4e4e4] bg-white px-3 py-2 shadow-[0_5px_18px_rgba(0,0,0,0.03)]">
              <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#ff5708] text-[#ff5708]">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.4 9a2.7 2.7 0 1 1 4.7 1.8c-1.4 1.1-2.1 1.7-2.1 3.2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="18"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#333333]">
                Before you ask
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-[420px] text-[38px] font-semibold leading-[1.13] tracking-[-1.8px] text-[#202020] sm:text-[44px] lg:text-[48px]">
              Wondering if you
              <br className="hidden sm:block" />
              should reach out?
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[360px] text-[14px] leading-[1.6] text-[#656565] sm:text-[15px]">
              The questions people have right before they hit submit.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[7px] border border-[#dddddd] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-[15px] text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[13px] font-semibold leading-5 text-[#333333] sm:text-[14px]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center text-[#333333] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pr-12 text-[13px] leading-[1.6] text-[#666666] sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}