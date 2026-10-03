import Image from "next/image";
import Link from "next/link";

export type ResourceItem = {
    id: number | string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    type?: string;
    readTime?: string;
    date?: string;
    featured?: boolean;
};

export type ResourceSectionClassNames = {
    section?: string;
    container?: string;
    eyebrow?: string;
    heading?: string;
    description?: string;

    featuredCard?: string;
    featuredImageWrap?: string;
    featuredImage?: string;
    featuredContent?: string;
    badgeWrap?: string;
    badge?: string;
    meta?: string;
    featuredTitle?: string;
    featuredDescription?: string;

    grid?: string;
    card?: string;
    cardImageWrap?: string;
    cardImage?: string;
    cardContent?: string;
    cardMeta?: string;
    cardTitle?: string;
    cardDescription?: string;
};

type ResourcesSectionProps = {
    eyebrow?: string;
    heading: string;
    description?: string;
    resources: ResourceItem[];
    classNames?: ResourceSectionClassNames;
};

export default function ResourcesSection({
    eyebrow = "RESOURCES",
    heading,
    description,
    resources,
    classNames = {},
}: ResourcesSectionProps) {
    const featuredResource =
        resources.find((item) => item.featured) ?? resources[0];

    const otherResources = resources.filter(
        (item) => item.slug !== featuredResource?.slug
    );

    if (!featuredResource) return null;

    return (
        <section
            className={
                classNames.section ??
                `
        relative
        w-full
        overflow-hidden
        bg-white
        py-[90px]
        max-md:py-[60px]
        `
            }
        >
            {/* Background glow */}
            <div
                className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[180px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#2743e8]/10
          blur-[120px]
        "
            />

            <div
                className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[350px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#ff5708]/10
          blur-[120px]
        "
            />

            <div
                className={
                    classNames.container ??
                    "relative z-10 mx-auto w-full container"
                }
            >
                {/* Header */}
                <div className="max-w-[760px]">
                    <span
                        className={
                            classNames.eyebrow ??
                            `
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#ff5708]
              `
                        }
                    >
                        {eyebrow}
                    </span>

                    <h2
                        className={
                            classNames.heading ??
                            `
              mt-4
              text-[48px]
              font-semibold
              leading-[1.05]
              tracking-[-2px]
              text-[#111111]
              max-lg:text-[42px]
              max-md:text-[34px]
              max-md:tracking-[-1px]
              `
                        }
                    >
                        {heading}
                    </h2>

                    {description ? (
                        <p
                            className={
                                classNames.description ??
                                `
                mt-4
                max-w-[680px]
                text-[17px]
                leading-[1.7]
                text-[#686868]
                max-md:text-[15px]
                `
                            }
                        >
                            {description}
                        </p>
                    ) : null}
                </div>

                {/* ======================
            FEATURED RESOURCE
        ====================== */}

                <Link
                    href={`/resources/${featuredResource.slug}`}
                    className={
                        classNames.featuredCard ??
                        `
            group
            mt-[65px]
            grid
            grid-cols-[1.35fr_0.85fr]
            overflow-hidden
            rounded-[26px]
            border
            border-[#e5e7f2]
            bg-[#071022]
            shadow-[0_25px_70px_rgba(18,28,70,0.08)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_30px_80px_rgba(39,67,232,0.14)]
            max-lg:grid-cols-1
            `
                    }
                >
                    {/* Image */}
                    <div
                        className={
                            classNames.featuredImageWrap ??
                            `
              relative
              min-h-[430px]
              overflow-hidden
              bg-[#10152f]
              max-lg:min-h-[360px]
              max-md:min-h-[250px]
              `
                        }
                    >
                        <Image
                            src={featuredResource.image}
                            alt={featuredResource.title}
                            fill
                            priority
                            className={
                                classNames.featuredImage ??
                                `
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.03]
                `
                            }
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#1736e8]/15 via-transparent to-[#ff5708]/10" />

                        {/* Badges */}
                        <div
                            className={
                                classNames.badgeWrap ??
                                "absolute left-6 top-6 flex flex-wrap items-center gap-2"
                            }
                        >
                            <span
                                className={
                                    classNames.badge ??
                                    `
                  rounded-full
                  border
                  border-white/20
                  bg-[#1736e8]
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  backdrop-blur-md
                  `
                                }
                            >
                                Featured
                            </span>

                            {featuredResource.type ? (
                                <span
                                    className="
                    rounded-full
                    border
                    border-white/20
                    bg-black/40
                    px-4
                    py-2
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white
                    backdrop-blur-md
                  "
                                >
                                    {featuredResource.type}
                                </span>
                            ) : null}
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        className={
                            classNames.featuredContent ??
                            `
              relative
              flex
              flex-col
              justify-center
              bg-[linear-gradient(145deg,#071022_0%,#101631_60%,#26102a_100%)]
              px-[42px]
              py-[45px]
              max-md:px-6
              max-md:py-8
              `
                        }
                    >
                        <div
                            className={
                                classNames.meta ??
                                "flex flex-wrap items-center gap-5 text-[13px] text-white/55"
                            }
                        >
                            {featuredResource.readTime ? (
                                <span className="flex items-center gap-2">
                                    <ClockIcon />
                                    {featuredResource.readTime}
                                </span>
                            ) : null}

                            {featuredResource.date ? (
                                <span className="flex items-center gap-2">
                                    <CalendarIcon />
                                    {featuredResource.date}
                                </span>
                            ) : null}
                        </div>

                        <h3
                            className={
                                classNames.featuredTitle ??
                                `
                mt-7
                text-[35px]
                font-medium
                leading-[1.08]
                tracking-[-1.4px]
                text-white
                max-md:text-[28px]
                `
                            }
                        >
                            {featuredResource.title}
                        </h3>

                        <p
                            className={
                                classNames.featuredDescription ??
                                `
                mt-4
                text-[15px]
                leading-[1.75]
                text-white/65
                `
                            }
                        >
                            {featuredResource.excerpt}
                        </p>

                        <span
                            className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#ff6b2b]
              "
                        >
                            Read resource
                            <ArrowIcon />
                        </span>
                    </div>
                </Link>

                {/* ======================
            RESOURCE GRID
        ====================== */}

                <div
                    className={
                        classNames.grid ??
                        `
            mt-[34px]
            grid
            grid-cols-2
            gap-[24px]
            max-md:grid-cols-1
            `
                    }
                >
                    {otherResources.map((resource) => (
                        <Link
                            key={resource.id}
                            href={`/resources/${resource.slug}`}
                            className={
                                classNames.card ??
                                `
                group
                overflow-hidden
                rounded-[24px]
                border
                border-[#e4e7f4]
                bg-white
                shadow-[0_12px_40px_rgba(20,32,80,0.05)]
                transition-all
                duration-400
                hover:-translate-y-1
                hover:border-[#2743e8]/30
                hover:shadow-[0_22px_55px_rgba(39,67,232,0.11)]
                `
                            }
                        >
                            {/* Card image */}
                            <div
                                className={
                                    classNames.cardImageWrap ??
                                    `
                  relative
                  aspect-[16/8]
                  overflow-hidden
                  bg-[#f1f3f9]
                  `
                                }
                            >
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className={
                                        classNames.cardImage ??
                                        `
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                    `
                                    }
                                />

                                <div
                                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[70px]
                    bg-gradient-to-t
                    from-black/20
                    to-transparent
                  "
                                />
                            </div>

                            {/* Content */}
                            <div
                                className={
                                    classNames.cardContent ??
                                    "px-[24px] pb-[26px] pt-[20px]"
                                }
                            >
                                <div
                                    className={
                                        classNames.cardMeta ??
                                        `
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    text-[12px]
                    text-[#858585]
                    `
                                    }
                                >
                                    {resource.readTime ? (
                                        <span className="flex items-center gap-1.5">
                                            <ClockIcon />
                                            {resource.readTime}
                                        </span>
                                    ) : null}

                                    {resource.date ? (
                                        <span className="flex items-center gap-1.5">
                                            <CalendarIcon />
                                            {resource.date}
                                        </span>
                                    ) : null}
                                </div>

                                <h3
                                    className={
                                        classNames.cardTitle ??
                                        `
                    mt-5
                    line-clamp-2
                    text-[24px]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.7px]
                    text-[#151515]
                    transition-colors
                    duration-300
                    group-hover:text-[#2743e8]
                    `
                                    }
                                >
                                    {resource.title}
                                </h3>

                                <p
                                    className={
                                        classNames.cardDescription ??
                                        `
                    mt-3
                    line-clamp-2
                    text-[14px]
                    leading-[1.7]
                    text-[#696969]
                    `
                                    }
                                >
                                    {resource.excerpt}
                                </p>

                                <div className="mt-5 flex items-center justify-between">
                                    {resource.type ? (
                                        <span
                                            className="
                        rounded-full
                        bg-[#fff1eb]
                        px-3
                        py-1.5
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.05em]
                        text-[#ff5708]
                      "
                                        >
                                            {resource.type}
                                        </span>
                                    ) : (
                                        <span />
                                    )}

                                    <span className="text-[#ff5708] transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowIcon />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ======================
   ICONS
====================== */

function ClockIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M12 7.8V12L15 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CalendarIcon() {
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
                y="5.5"
                width="16"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M8 3.5V7M16 3.5V7M4 9.5H20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="18"
            height="18"
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