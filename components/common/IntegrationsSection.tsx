import Image from "next/image";
import Link from "next/link";

export type IntegrationItem = {
  name: string;
  logo: string;
  logoAlt?: string;
};

type IntegrationClassNames = {
  section?: string;
  container?: string;
  badgeWrapper?: string;
  badge?: string;
  badgeIcon?: string;
  badgeText?: string;
  headerWrapper?: string;
  heading?: string;
  buttonWrapper?: string;
  button?: string;
  grid?: string;
  card?: string;
  logoWrapper?: string;
  logo?: string;
  title?: string;
};

type IntegrationsSectionProps = {
  badge?: string;
  heading: string;
  buttonText?: string;
  buttonHref?: string;
  integrations: IntegrationItem[];

  classNames?: IntegrationClassNames;
};

export default function IntegrationsSection({
  badge = "BUILT ON YOUR STACK",
  heading,
  buttonText = "View all Integrations",
  buttonHref = "#",
  integrations,
  classNames = {},
}: IntegrationsSectionProps) {
  return (
    <section
      className={
        classNames.section ??
        "w-full border-t border-[#eeeeee] bg-white py-[90px] max-md:py-[55px]"
      }
    >
      <div
        className={
          classNames.container ??
          "mx-auto w-full max-w-[1120px] px-4 md:px-6"
        }
      >
        {/* Badge */}
        <div
          className={
            classNames.badgeWrapper ?? "flex justify-center"
          }
        >
          <div
            className={
              classNames.badge ??
              "inline-flex min-h-[34px] items-center gap-2 rounded-[8px] border border-[#e9e9e9] bg-white px-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            }
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className={
                classNames.badgeIcon ?? "text-[#ff5200]"
              }
            >
              <circle
                cx="12"
                cy="12"
                r="3.2"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <path
                d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.7 7.7M16.3 16.3L18.4 18.4M18.4 5.6L16.3 7.7M7.7 16.3L5.6 18.4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            <span
              className={
                classNames.badgeText ??
                "text-[13px] font-medium tracking-[0.01em] text-[#2c2c2c]"
              }
            >
              {badge}
            </span>
          </div>
        </div>

        {/* Heading */}
        <div
          className={
            classNames.headerWrapper ??
            "mx-auto mt-[24px] max-w-[760px] text-center"
          }
        >
          <h2
            className={
              classNames.heading ??
              "text-[48px] font-semibold leading-[1.08] tracking-[-2px] text-[#1e1e1e] max-md:text-[34px] max-md:tracking-[-1px]"
            }
          >
            {heading}
          </h2>

          <div
            className={
              classNames.buttonWrapper ??
              "mt-[38px] flex justify-center"
            }
          >
            <Link
              href={buttonHref}
              className={
                classNames.button ??
                "inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-[#2b2b2b] bg-white px-[18px] text-[14px] font-semibold text-[#111] transition-all duration-300 hover:bg-[#111] hover:text-white"
              }
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div
          className={
            classNames.grid ??
            "mt-[58px] grid grid-cols-4 gap-[14px] max-lg:grid-cols-2 max-sm:grid-cols-1"
          }
        >
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className={
                classNames.card ??
                "flex min-h-[165px] flex-col items-center justify-center rounded-[15px] bg-[#f7f7f7] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              }
            >
              <div
                className={
                  classNames.logoWrapper ??
                  "relative flex h-[58px] w-[58px] items-center justify-center"
                }
              >
                <Image
                  src={integration.logo}
                  alt={integration.logoAlt ?? integration.name}
                  width={58}
                  height={58}
                  className={
                    classNames.logo ??
                    "h-[58px] w-[58px] object-contain"
                  }
                />
              </div>

              <h3
                className={
                  classNames.title ??
                  "mt-[16px] text-[17px] font-medium leading-[1.2] text-[#242424]"
                }
              >
                {integration.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}