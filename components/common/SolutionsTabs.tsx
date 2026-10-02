"use client";

import Image from "next/image";
import { ComponentType, useState } from "react";

type IconProps = {
  className?: string;
};

type SolutionTabIconKey = "inventory" | "vendor" | "erp" | "project";

export type SolutionTab = {
  id: string;
  label: string;
  image: string;
  Icon: ComponentType<IconProps> | SolutionTabIconKey;
};

type SolutionsTabsProps = {
  heading: string;
  description: string;
  tabs: SolutionTab[];
  defaultTab?: string;
};

function InventoryIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 12H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 16H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function VendorIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 19C4.1 15.7 5.7 14.2 8 14.2C10.3 14.2 11.9 15.7 12.5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 7H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ErpIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 14V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 14V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 14V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 20H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ProjectIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 11V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const tabIcons: Record<SolutionTabIconKey, ComponentType<IconProps>> = {
  inventory: InventoryIcon,
  vendor: VendorIcon,
  erp: ErpIcon,
  project: ProjectIcon,
};

function getTabIcon(icon: SolutionTab["Icon"]) {
  return typeof icon === "string" ? tabIcons[icon] : icon;
}

export default function SolutionsTabs({
  heading,
  description,
  tabs,
  defaultTab,
}: SolutionsTabsProps) {
  const initialTab = defaultTab || tabs[0]?.id || "";

  const [activeTab, setActiveTab] = useState(initialTab);

  const activeItem =
    tabs.find((item) => item.id === activeTab) || tabs[0];

  if (!activeItem) return null;

  return (
    <section className="w-full bg-white py-[90px] max-md:py-[55px]">
      <div className="mx-auto w-full max-w-[1450px] px-5 max-md:px-4">

        {/* Heading */}
        <div className="mb-[58px] text-center max-md:mb-9">
          <h2 className="text-[52px] font-semibold leading-[1.05] tracking-[-2px] text-[#1d1d1f] max-lg:text-[44px] max-md:text-[34px] max-md:tracking-[-1px]">
            {heading}
          </h2>

          <p className="mt-[18px] text-[19px] leading-[1.5] text-[#666666] max-md:mt-3 max-md:text-[16px]">
            {description}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-[42px] grid grid-cols-4 gap-[20px] max-md:flex max-md:overflow-x-auto max-md:pb-2 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const Icon = getTabIcon(tab.Icon);
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group
                  flex
                  min-h-[100px]
                  flex-col
                  items-center
                  justify-center
                  gap-[9px]
                  rounded-[17px]
                  px-5
                  text-center
                  transition-all
                  duration-300

                  max-md:min-h-[88px]
                  max-md:min-w-[220px]

                  ${
                    isActive
                      ? "bg-[#fff0e9] text-[#ff5200]"
                      : "bg-transparent text-[#929292] hover:bg-[#fafafa]"
                  }
                `}
              >
                <Icon
                  className={
                    isActive
                      ? "text-[#ff5200]"
                      : "text-[#969696] transition-colors duration-300 group-hover:text-[#666]"
                  }
                />

                <span
                  className={`
                    text-[18px]
                    font-semibold
                    leading-[1.2]
                    max-md:text-[16px]

                    ${
                      isActive
                        ? "text-[#ff5200]"
                        : "text-[#7b7b7b]"
                    }
                  `}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden">
          <div
            key={activeItem.id}
            className="relative mx-auto w-full overflow-hidden rounded-[26px] bg-transparent max-md:rounded-[18px]"
          >
            <Image
              src={activeItem.image}
              alt={`${activeItem.label} dashboard`}
              width={1400}
              height={850}
              className="block h-auto w-full rounded-[26px] object-contain object-top max-md:rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
