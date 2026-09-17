import Link from "next/link";

export default function StackCtaSection({
  heading,
  description,

  buttonText = "Tell us what you need",
  buttonHref = "/contact",
  buttonIcon,

  sectionClassName = "",
  containerClassName = "",
  cardClassName = "",

  // Padding through props
  paddingClassName = "pt-[50px] pb-[50px] md:pb-[100px]",

  backgroundColor = "#f7f7fb",

  headingColor = "#171717",
  descriptionColor = "#171717",

  buttonBackground = "#ff5708",
  buttonTextColor = "#ffffff",
  buttonBorderColor = "#ff5708",

  buttonHoverBackground = "#ffffff",
  buttonHoverTextColor = "#ff5708",

  iconBackground = "#ffffff",
  iconColor = "#ff5708",
  iconHoverBackground = "#ff5708",
  iconHoverColor = "#ffffff",

  leftGlowColor = "#3c2ce8",
  centerGlowColor = "#ff472d",
  rightGlowColor = "#253ee9",

  showGlows = true,
}) {
  return (
    <section
      className={`w-full bg-white ${paddingClassName} ${sectionClassName}`}
    >
      <div className={`container ${containerClassName}`}>
        <div
          className={`
            relative
            isolate
            flex
            min-h-[400px]
            items-center
            justify-center
            overflow-hidden
            rounded-[36px]
            px-5
            py-16
            sm:min-h-[440px]
            sm:px-10
            lg:min-h-[460px]
            ${cardClassName}
          `}
          style={{
            backgroundColor,
          }}
        >
          {/* BACKGROUND GLOWS */}
          {showGlows && (
            <>
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-48
                  -left-32
                  -z-10
                  h-[520px]
                  w-[470px]
                  rounded-full
                  opacity-90
                  blur-[75px]
                "
                style={{
                  backgroundColor: leftGlowColor,
                }}
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-52
                  left-1/2
                  -z-10
                  h-[390px]
                  w-[520px]
                  -translate-x-1/2
                  rounded-full
                  opacity-85
                  blur-[85px]
                "
                style={{
                  backgroundColor: centerGlowColor,
                }}
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-48
                  -right-32
                  -z-10
                  h-[500px]
                  w-[470px]
                  rounded-full
                  opacity-95
                  blur-[75px]
                "
                style={{
                  backgroundColor: rightGlowColor,
                }}
              />

              {/* <div
                className="
                  pointer-events-none
                  absolute
                  left-[18%]
                  top-6
                  -z-10
                  h-[260px]
                  w-[360px]
                  rounded-full
                  bg-white
                  opacity-90
                  blur-[65px]
                "
              /> */}

              {/* <div
                className="
                  pointer-events-none
                  absolute
                  right-[17%]
                  top-12
                  -z-10
                  h-[260px]
                  w-[340px]
                  rounded-full
                  bg-white
                  opacity-90
                  blur-[65px]
                "
              /> */}
            </>
          )}

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-[900px] text-center">
            {heading && (
              <h2
                className="
                  text-[30px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-1.8px]
                  sm:text-[35px]
                  lg:text-[45px]
                  lg:tracking-[-2px]
                  max-w-[500px]
                  mx-auto
                "
                style={{
                  color: headingColor,
                }}
              >
                {heading}
              </h2>
            )}

            {description && (
              <p
                className="
                  mx-auto
                  mt-7
                  max-w-[850px]
                  text-[15px]
                  font-medium
                  leading-[1.6]
                  sm:text-[17px]
                  lg:text-[19px]
                "
                style={{
                  color: descriptionColor,
                }}
              >
                {description}
              </p>
            )}

            {buttonText && buttonHref && (
              <Link
                href={buttonHref}
                className="
                  group
                  mx-auto
                  mt-10
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-xl
                  border
                  py-1.5
                  pl-4
                  pr-1.5
                  text-[14px]
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-[var(--cta-hover-bg)]
                  hover:text-[var(--cta-hover-color)]
                "
                style={{
                  backgroundColor: buttonBackground,
                  color: buttonTextColor,
                  borderColor: buttonBorderColor,

                  "--cta-hover-bg": buttonHoverBackground,
                  "--cta-hover-color": buttonHoverTextColor,

                  "--cta-icon-bg": iconBackground,
                  "--cta-icon-color": iconColor,

                  "--cta-icon-hover-bg": iconHoverBackground,
                  "--cta-icon-hover-color": iconHoverColor,
                }}
              >
                <span>{buttonText}</span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-md
                    bg-[var(--cta-icon-bg)]
                    text-[var(--cta-icon-color)]
                    transition-all
                    duration-300
                    group-hover:bg-[var(--cta-icon-hover-bg)]
                    group-hover:text-[var(--cta-icon-hover-color)]
                  "
                >
                  {buttonIcon || <ArrowIcon />}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
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
  );
}