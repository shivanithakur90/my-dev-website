"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

export type WorkShowcaseProject = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];

  imageBackground?: string;
  imageAlt?: string;
  ctaLabel?: string;
};

type FilterContent = {
  searchLabel?: string;
  searchPlaceholder?: string;
  industryLabel?: string;
  allLabel?: string;
  clearLabel?: string;
};

type EmptyStateContent = {
  title?: string;
  description?: string;
};

type FinalCtaContent = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
};

type WorkShowcaseSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;

  icon?: ReactNode;

  projects: WorkShowcaseProject[];

  showFilters?: boolean;
  filterContent?: FilterContent;

  emptyState?: EmptyStateContent;

  showFinalCta?: boolean;
  finalCta?: FinalCtaContent;

  limit?: number;

  className?: string;
};

function CaseStudiesIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 4V8M16 4V8M4 10H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

export default function WorkShowcaseSection({
  eyebrow,
  title,
  description,

  icon,

  projects,

  showFilters = true,
  filterContent,

  emptyState,

  showFinalCta = false,
  finalCta,

  limit,

  className = "",
}: WorkShowcaseSectionProps) {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState(
    filterContent?.allLabel || "All"
  );

  const allLabel = filterContent?.allLabel || "All";

  const industries = [
    allLabel,
    ...Array.from(
      new Set(projects.flatMap((project) => project.tags))
    ).sort(),
  ];

  const filteredProjects = projects.filter((project) => {
    if (!showFilters) {
      return true;
    }

    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );

    const matchesIndustry =
      industry === allLabel ||
      project.tags.includes(industry);

    return matchesSearch && matchesIndustry;
  });

  const displayedProjects =
    typeof limit === "number"
      ? filteredProjects.slice(0, limit)
      : filteredProjects;

  const resetFilters = () => {
    setSearch("");
    setIndustry(allLabel);
  };

  return (
    <section
      className={`bg-white pt-[50px] sm:pt-[50px] md:pt-[70px] lg:pt-[80px] ${className}`}>
      <div className="container">
        {/* Header */}
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-[56px] max-w-[1040px] text-center">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#e8e8e8] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2b2b2b] shadow-[0_18px_45px_rgba(30,25,45,0.08)]">
                <span className="text-[#ff5708]">
                  {icon ?? <CaseStudiesIcon />}
                </span>

                <span>{eyebrow}</span>
              </div>
            )}

            {title && (
              <h2 className="mx-auto mt-6 max-w-[1000px] text-[34px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#171717] sm:text-[44px] md:text-[50px]">
                {title}
              </h2>
            )}

            {description && (
              <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.6] text-[#5d5d5d] sm:text-[18px]">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Filters */}
        {showFilters && (
          <div className="mb-10 grid gap-4 rounded-[18px] border border-[#e5e5e5] bg-[#fafafa] p-4 sm:grid-cols-[1fr_260px_auto] sm:items-end sm:p-5">
            {/* Search */}
            <label className="block">
              {filterContent?.searchLabel && (
                <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5c5c5c]">
                  {filterContent.searchLabel}
                </span>
              )}

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder={
                  filterContent?.searchPlaceholder || ""
                }
                className="h-12 w-full rounded-[10px] border border-[#dcdcdc] bg-white px-4 text-[14px] text-[#202020] outline-none transition placeholder:text-[#969696] focus:border-[#ff5708]"
              />
            </label>

            {/* Industry Filter */}
            <label className="block">
              {filterContent?.industryLabel && (
                <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5c5c5c]">
                  {filterContent.industryLabel}
                </span>
              )}

              <select
                value={industry}
                onChange={(event) =>
                  setIndustry(event.target.value)
                }
                className="h-12 w-full cursor-pointer rounded-[10px] border border-[#dcdcdc] bg-white px-4 text-[14px] text-[#202020] outline-none transition focus:border-[#ff5708]"
              >
                {industries.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </label>

            {/* Clear */}
            {filterContent?.clearLabel && (
              <button
                type="button"
                onClick={resetFilters}
                className="h-12 rounded-[10px] border border-[#ff5708] px-5 text-[14px] font-semibold text-[#ff5708] transition-colors hover:bg-[#ff5708] hover:text-white"
              >
                {filterContent.clearLabel}
              </button>
            )}
          </div>
        )}

        {/* Projects */}
        {displayedProjects.length > 0 && (
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
            {displayedProjects.map(
              (project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="flex h-full flex-col rounded-[22px] border border-[#e3e3e3] bg-white p-3 shadow-[0_14px_45px_rgba(25,25,35,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(25,25,35,0.12)]"
                >
                  {/* Image */}
                  {project.image && (
                    <div
                      className={`relative aspect-[1.66/1] overflow-hidden rounded-[16px] p-3.5 ${
                        project.imageBackground ||
                        "bg-[#f5f5f5]"
                      }`}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-white shadow-[0_7px_18px_rgba(0,0,0,0.12)]">
                        <Image
                          src={project.image}
                          alt={
                            project.imageAlt ||
                            project.title
                          }
                          fill
                          sizes="(max-width: 767px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col px-0 pb-1 pt-4">
                    {/* Tags */}
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[11px] font-medium leading-none text-[#666]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    {project.title && (
                      <h3 className="mt-4 text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#151515] sm:text-[22px]">
                        {project.title}
                      </h3>
                    )}

                    {/* Description */}
                    {project.description && (
                      <p className="mt-2 text-[13px] leading-[1.55] text-[#454545] sm:text-[14px]">
                        {project.description}
                      </p>
                    )}

                    {/* Card CTA */}
                    {project.href &&
                      project.ctaLabel && (
                        <Link
                          href={project.href}
                          className="group mt-6 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-[#ff4d00] transition-all hover:gap-3 hover:underline hover:underline-offset-4"
                        >
                          {project.ctaLabel}

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowIcon />
                          </span>
                        </Link>
                      )}
                  </div>
                </article>
              )
            )}
          </div>
        )}

        {/* Empty State */}
        {displayedProjects.length === 0 &&
          emptyState && (
            <div className="rounded-[20px] border border-dashed border-[#d6d6d6] px-5 py-16 text-center">
              {emptyState.title && (
                <h2 className="text-[24px] font-semibold text-[#171717]">
                  {emptyState.title}
                </h2>
              )}

              {emptyState.description && (
                <p className="mt-2 text-[14px] text-[#666]">
                  {emptyState.description}
                </p>
              )}
            </div>
          )}

        {/* Final CTA */}
        {showFinalCta && finalCta && (
          <div className="mt-[50px] overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#273ee9_0%,#652596_45%,#c2264c_72%,#f0440b_100%)] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-1.4px] sm:text-[42px]">
              {finalCta.title}
            </h2>

            {finalCta.description && (
              <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.6] text-white/85 sm:text-[16px]">
                {finalCta.description}
              </p>
            )}

            <Link
              href={finalCta.buttonHref}
              className="group mx-auto mt-7 inline-flex items-center gap-3 rounded-xl bg-[#ff5708] py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-white transition hover:bg-[#ed4b00]"
            >
              {finalCta.buttonLabel}

              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#ff5708]"
                aria-hidden="true"
              >
                <ArrowIcon />
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}