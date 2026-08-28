"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Do we own the code at the end?",
    answer:
      "Yes. Once the engagement is complete, your team owns the source code and all agreed project deliverables.",
  },
  {
    question: "What if our SaaS vendor changes its API?",
    answer:
      "We build integrations to be maintainable and can update the connection when your vendor changes its API or authentication requirements.",
  },
  {
    question: "How is this different from a contractor or traditional dev shop?",
    answer:
      "We work as a product-focused extension of your team, combining discovery, design, engineering, and long-term technical ownership.",
  },
  {
    question: "What's the smallest engagement you take?",
    answer:
      "We can begin with a focused discovery or a small, clearly defined build before expanding into a larger engagement.",
  },
  {
    question: "Do you replace our SaaS, or just sit on top?",
    answer:
      "Usually we connect and extend the tools you already use, but we can also replace specific workflows when that is the better option.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
      <div className="container grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
        <div className="lg:pt-1">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[13px] font-medium text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ff5708] text-[10px] font-semibold text-[#ff5708]">
              ?
            </span>
            FAQ
          </div>

          <h2 className="mt-6 text-[38px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#171717] sm:text-[46px] lg:text-[52px] lg:tracking-[-2px]">
            Common
            <br />
            Questions.
          </h2>

          <p className="mt-6 max-w-[360px] text-[15px] leading-[1.55] text-[#606060] sm:text-[17px]">
            The things mid-market buyers ask before booking a call.
          </p>

          <Link
            href="/contact"
            className="group mt-8 flex w-fit items-center gap-3 rounded-xl border border-[#ff5708] bg-[#ff5708] py-1.5 pl-4 pr-1.5 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#ff5708]"
          >
            Contact Sales
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#ff5708] transition-colors duration-300 group-hover:bg-[#ff5708] group-hover:text-white">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M14 7L19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#e4e4e4] bg-white shadow-[0_7px_20px_rgba(0,0,0,0.025)]"
              >
                <button
                  type="button"
                  className="flex min-h-[58px] w-full items-center justify-between gap-5 px-5 py-4 text-left text-[15px] font-medium text-[#242424] sm:px-6 sm:text-[16px]"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <svg
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 1.5L7 7L12.5 1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-[#eeeeee] px-5 pb-5 pt-4 text-[14px] leading-[1.65] text-[#666666] sm:px-6 sm:text-[15px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
