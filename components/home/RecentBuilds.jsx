"use client";

import Image from "next/image";
import { useState } from "react";

export default function RecentBuildsSection() {
  const builds = [
    {
      title: "Speed CSM & Engagement Platform",
      category: "Customer Success",
      description: "Customer Success console + wallet-native reward games",
      image: "/recnet-build-imae.webp",
      icon: "chat",
    },
    {
      title: "Bank Deposit Guardian",
      category: "FinTech",
      description:
        "Automated deposit protection, validation and monitoring workflows.",
      image: "/recnet-build-imae.webp",
      icon: "shield",
    },
    {
      title: "Compliance & Transaction Monitoring System (CTMS)",
      category: "Compliance",
      description:
        "Real-time compliance and transaction monitoring for financial operations.",
      image: "/recnet-build-imae.webp",
      icon: "gauge",
    },
    {
      title: "Card Deposit Management System (DMS)",
      category: "Payments",
      description:
        "A unified console to manage card deposits, exceptions and approvals.",
      image: "/recnet-build-imae.webp",
      icon: "card",
    },
    {
      title: "Speed Cash Deposit Manager (CDM)",
      category: "Operations",
      description:
        "Cash deposit workflows with tracking, approvals and reconciliation.",
      image: "/recnet-build-imae.webp",
      icon: "cash",
    },
    {
      title: "Daily Reconciliation System (DRS)",
      category: "Finance",
      description:
        "Daily automated reconciliation across transactions and deposit sources.",
      image: "/recnet-build-imae.webp",
      icon: "database",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeBuild = builds[activeIndex];

  const renderIcon = (type) => {
    if (type === "chat") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11.5C20 16.194 16.418 20 12 20C10.919 20 9.887 19.772 8.947 19.359L4 21L5.461 16.634C4.546 15.184 4 13.42 4 11.5C4 6.806 7.582 3 12 3C16.418 3 20 6.806 20 11.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (type === "shield") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L19 6V11C19 15.5 16.3 19.2 12 21C7.7 19.2 5 15.5 5 11V6L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (type === "gauge") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17C4 12.582 7.582 9 12 9C16.418 9 20 12.582 20 17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 17L16 12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M5 17H19"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (type === "card") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M3 9H21"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M7 15H11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (type === "cash") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M7 9H7.01M17 15H17.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="12"
          cy="6"
          rx="7"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5 6V12C5 13.657 8.134 15 12 15C15.866 15 19 13.657 19 12V6"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5 12V18C5 19.657 8.134 21 12 21C15.866 21 19 19.657 19 18V12"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  };

  return (
    <section className="w-full bg-white pb-0 pt-[50px] md:py-[50px]">
      <div className="container">
        {/* Header */}
        <div className="max-w-[700px]">
          {/* Badge */}
          <div className="mb-5 flex w-fit items-center gap-2 rounded-md border border-[#e7e7e7] bg-white px-3 py-1.5 shadow-[0_3px_12px_rgba(0,0,0,0.04)]">
            <span className="flex h-4 w-4 items-center justify-center text-[#ff4d00]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 8H17M7 12H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#343434]">
              Example Gallery
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[46px] lg:text-[52px]">
            Recent builds, real outcomes.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#626262] sm:text-[15px]">
            Each of these is a real interface we&apos;ve built on top of a
            popular SaaS tool,
            <span className="block">
              shaped for a specific industry.
            </span>
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:mt-14 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[380px_minmax(0,1fr)] xl:gap-10">
          {/* LEFT */}
          <div className="w-full">
            {builds.map((build, index) => {
              const active = activeIndex === index;

              return (
                <button
                  type="button"
                  key={build.title}
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full text-left ${
                    index !== builds.length - 1
                      ? "border-b border-[#2e2e2e]/70"
                      : ""
                  }`}
                >
                  <div
                    className={`relative flex gap-3 py-5 transition-all duration-300 ${
                      active ? "pb-6" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mt-[1px] shrink-0 transition-colors ${
                        active
                          ? "text-[#166cff]"
                          : "text-[#8a8a8a] group-hover:text-[#444]"
                      }`}
                    >
                      {renderIcon(build.icon)}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-[17px] font-semibold leading-[1.25] tracking-[-0.3px] transition-colors ${
                          active
                            ? "text-[#202020]"
                            : "text-[#777] group-hover:text-[#333]"
                        }`}
                      >
                        {build.title}
                      </h3>

                      {active && (
                        <div className="mt-4">
                          <p className="text-[13px] leading-[1.55] text-[#626262]">
                            {build.description}
                          </p>

                          <span className="mt-4 inline-flex rounded-[3px] bg-[#dedede] px-2 py-1 text-[11px] font-medium text-[#333]">
                            {build.category}
                          </span>

                          <div className="mt-5 flex items-center gap-2 text-[11px] font-medium text-[#242424]">
                            <span>See use case</span>

                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M5 12H19M19 12L14 7M19 12L14 17"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Active Orange Line */}
                    {active && (
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff4d00]" />
                    )}
                  </div>
                </button>
              );
            })}

            {/* See All */}
            <button
              type="button"
              className="mt-6 flex items-center gap-2 text-[12px] font-medium text-[#ff4d00] transition hover:gap-3"
            >
              <span>See all use cases</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L14 7M19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-8 rounded-[40px] bg-[#e8e5ff] blur-[70px]" />

            <div className="relative overflow-hidden rounded-[18px] border border-[#e9e9e9] bg-[#f8f8f8] p-[7px] shadow-[0_14px_45px_rgba(30,30,50,0.16)]">
              <div className="relative aspect-[1600/942] w-full overflow-hidden rounded-[13px] bg-white">
                <Image
                  key={activeBuild.image}
                  src={activeBuild.image}
                  alt={activeBuild.title}
                  fill
                  className="object-contain transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
