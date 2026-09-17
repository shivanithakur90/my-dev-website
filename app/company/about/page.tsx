import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AboutPage() {
  return (
    <main>
      {/* =====================================================
          1. ABOUT HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f7f8ff]">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute -left-[120px] -top-[140px] h-[520px] w-[520px] rounded-full bg-[#9a326d]/45 blur-[120px]" />

          <div className="absolute left-[28%] top-[20px] h-[380px] w-[420px] rounded-full bg-[#c49af0]/40 blur-[120px]" />

          <div className="absolute right-[-100px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#66c8c2]/45 blur-[130px]" />

          <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-white/90 blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-[590px] flex-col items-center justify-center px-5 py-20 text-center md:px-6 lg:px-8">
          <h1 className="max-w-[1100px] text-[40px] font-medium leading-[1.08] tracking-[-2px] text-[#171717] sm:text-[50px] md:text-[60px] lg:text-[70px] lg:tracking-[-3px]">
            Powering the future of intelligent
            <br className="hidden md:block" />
            software product
          </h1>

          <p className="mt-10 max-w-[780px] text-[17px] font-normal leading-[1.5] text-[#575757] sm:text-[19px] md:text-[21px] lg:text-[22px]">
            We help businesses to build and scale their own dedicated teams at a
            competitive price in India
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="
                group
                flex
                items-center
                gap-5
                rounded-[14px]
                border
                border-[#ff5708]
                bg-[#ff5708]
                py-2
                pl-6
                pr-2
                text-[17px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#ff5708]
                md:text-[18px]
              "
            >
              Request a quote

              <span
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-white
                  text-[#ff5708]
                  transition-all
                  duration-300
                  group-hover:bg-[#ff5708]
                  group-hover:text-white
                "
              >
                <ArrowIcon />
              </span>
            </Link>

            <div className="flex items-center gap-3 text-[17px] font-medium text-black md:text-[18px]">
              <ShieldIcon />
              <span>100% Confidential and Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. SIMPLIFYING WORKFLOWS
      ====================================================== */}
      <AboutSplitSection
        title="Simplifying workflows so teams can build faster and smarter every day"
        image="/image.webp"
        imageAlt="OpenXcell software development team"
        imagePosition="left"
        showIcon={true}
        paragraphs={[
          "OpenXcell, software development company founded in 2009, is a leading IT consulting & services known for its innovative and robust digital solutions. We help you evolve your business into a profitable venture by using the unrivaled experience of our highly qualified product development team. Our huge pool of skilled professionals for Machine Learning, Cloud Computing, IoT, Artificial Intelligence, and more help you expand your web and mobile app development customer base.",
        ]}
      />

      {/* =====================================================
          3. CORE VALUES
      ====================================================== */}
      <section className="bg-[#fff7f3] py-[70px] md:py-[90px]">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <h2 className="mx-auto max-w-[650px] text-center text-[28px] font-medium leading-[1.2] tracking-[-1px] text-[#191919] sm:text-[34px] md:text-[38px]">
            Core values are fundamental to the working
            <br className="hidden sm:block" />
            spirit of OpenXcell
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
            <ValueCard
              title="Integrity"
              description="Accountability and being genuine in what we do inculcate reliability, and we sustain the virtue"
              icon={<IntegrityIcon />}
              className="lg:col-span-2"
            />

            <ValueCard
              title="Quality assurance"
              description="We ensure premium quality in all our services and guaranteed delivery of technically sound products"
              icon={<QualityIcon />}
              className="lg:col-span-2"
            />

            <ValueCard
              title="Transparency"
              description="We maintain transparency in our operations and ensure the client is fully aware of our processes"
              icon={<TransparencyIcon />}
              className="lg:col-span-2"
            />

            <ValueCard
              title="Value for people"
              description="We foster growth and nurture lives by providing a workplace conducive to constant learning"
              icon={<PeopleIcon />}
              className="lg:col-span-3"
            />

            <ValueCard
              title="Commitment"
              description="We pursue our clients by being consistent and committed to the delivery of their results"
              icon={<CommitmentIcon />}
              className="lg:col-span-3"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          4. AI CONVERSATIONS / MISSION / VISION
      ====================================================== */}
      <section className="bg-white py-[80px] md:py-[100px] lg:py-[115px]">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[95px]">
            {/* LEFT */}
            <div>
              <h2 className="max-w-[560px] text-[38px] font-medium leading-[1.14] tracking-[-1.6px] text-[#191919] sm:text-[44px] md:text-[50px]">
                Shaping the future of AI conversations
              </h2>

              <p className="mt-6 max-w-[540px] text-[17px] leading-[1.55] text-[#666666] md:text-[18px]">
                OpenXcell, software development company founded in 2009, is a
                leading IT consulting & services known for its innovative and
                robust digital solutions.
              </p>

              <div className="mt-12 grid max-w-[480px] grid-cols-2 gap-8">
                <div>
                  <div className="text-[44px] font-normal leading-none text-[#050505] md:text-[48px]">
                    250+
                  </div>

                  <p className="mt-4 max-w-[190px] text-[14px] leading-[1.6] text-[#555555] md:text-[15px]">
                    installed by teams that value speed and precision.
                  </p>
                </div>

                <div>
                  <div className="text-[44px] font-normal leading-none text-[#050505] md:text-[48px]">
                    90%
                  </div>

                  <p className="mt-4 max-w-[190px] text-[14px] leading-[1.6] text-[#555555] md:text-[15px]">
                    Monthly users powered by our chat AI.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute bottom-[8px] left-[5px] top-[10px] hidden border-l border-dashed border-[#bdbdbd] sm:block" />

              <div className="space-y-12">
                <MissionItem
                  title="Our Mission"
                  text="We aim at transforming the digital experience of our customers into cost effective, functional, user-centric and innovative technical solutions. OpenXcell recognizes and adapts quickly to the changing digital landscape thereby empowering clients to uplift their presence in the market."
                />

                <MissionItem
                  title="Our Vision"
                  text="We envision becoming a global leader in outsourcing and offshoring technological solutions. Our eye into the details, quality assurance and meticulous selection of talent will help businesses to evolve into profitable assets."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          5. BUILDING WORLD CLASS TEAMS
      ====================================================== */}
      <AboutSplitSection
        title="Building world class teams and infrastructure"
        image="/image-2.webp"
        imageAlt="OpenXcell office and development team"
        imagePosition="left"
        showIcon={true}
        paragraphs={[
          "OpenXcell endeavors to bring premium infrastructure and top 3% Talent to create innovative solutions. We have a bandwidth of 500+ employees that help in creating a powerful inhouse development team with their experience.",
          "We not only provide infrastructure but also ensure that the resources we hire are culturally fit, our team is time-zone aligned and have excellent communication skills to pull off the conversations effectively.",
        ]}
      />

      {/* =====================================================
          6. WHO WE ARE
      ====================================================== */}
      <AboutSplitSection
        title="Who we are, how to join us and partnership"
        image="/image-3.webp"
        imageAlt="OpenXcell business partnership"
        imagePosition="right"
        showIcon={false}
        paragraphs={[
          "We are a curious team of creative IT people who want to simplify the lives of entrepreneurs and enterprises by providing our skills and resources to build customized and reliable software solutions.",
          "Our leadership team comprises of highly experienced, trained executives from the IT industry.",
          "Careers at OpenXcell bring a gamut of opportunities and learning experiences without compromising on the work-life balance. Partnership with OpenXcell ensures mutual growth and effective digital transformation of both the parties and the clients.",
        ]}
      />

      {/* =====================================================
          7. FACTS AND FIGURES
      ====================================================== */}
      <section className="bg-white py-[75px] md:py-[95px] lg:py-[110px]">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#eeeeee] bg-white px-3 py-1.5 shadow-sm">
              <span className="text-[#ff5708]">
                <FactsBadgeIcon />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#555555]">
                Facts and Figures
              </span>
            </div>

            <h2 className="mt-4 text-[36px] font-medium leading-[1.1] tracking-[-1.5px] text-[#191919] sm:text-[42px] md:text-[48px]">
              Facts and Figures
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.6] text-[#666666] md:text-[15px]">
              OpenXcell, software development company founded in 2009, is a
              leading IT consulting & services known for its innovative and
              robust digital solutions.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* LEFT */}
            <div className="flex flex-col gap-5">
              <FactCard className="min-h-[260px]">
                <div className="flex h-[120px] items-center justify-center rounded-[12px] bg-[#eef7ff]">
                  <TeamIllustration />
                </div>

                <div className="mt-5">
                  <div className="text-[27px] font-medium leading-none text-[#111111]">
                    1500+
                  </div>

                  <p className="mt-3 text-[13px] leading-[1.5] text-[#555555]">
                    Software designed, Development & deployed
                  </p>
                </div>
              </FactCard>

              <FactCard>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-[27px] font-medium leading-none text-[#111111]">
                      500+
                    </div>

                    <p className="mt-3 text-[13px] leading-[1.5] text-[#555555]">
                      Software engineers & technical staff
                    </p>
                  </div>

                  <FactIconCircle>
                    <PeopleSmallIcon />
                  </FactIconCircle>
                </div>
              </FactCard>
            </div>

            {/* CENTER */}
            <div className="flex flex-col gap-5">
              <FactCard>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-[27px] font-medium leading-none text-[#111111]">
                      25000
                    </div>

                    <p className="mt-3 text-[13px] leading-[1.5] text-[#555555]">
                      SQ. MTR of office space
                    </p>
                  </div>

                  <FactIconCircle>
                    <BuildingIcon />
                  </FactIconCircle>
                </div>
              </FactCard>

              <FactCard className="min-h-[260px]">
                <div>
                  <div className="text-[27px] font-medium leading-none text-[#111111]">
                    1000+
                  </div>

                  <p className="mt-3 text-[13px] leading-[1.5] text-[#555555]">
                    Happy Customers
                  </p>
                </div>

                <div className="mt-5 flex h-[120px] items-center justify-center rounded-[12px] bg-[#eef9ec]">
                  <CustomerIllustration />
                </div>
              </FactCard>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
              <FactCard className="min-h-[260px]">
                <div className="flex h-[120px] items-center justify-center rounded-[12px] bg-[#fff1f1]">
                  <SupportIllustration />
                </div>

                <div className="mt-5">
                  <div className="text-[27px] font-medium leading-none text-[#111111]">
                    24/7
                  </div>

                  <p className="mt-3 text-[13px] leading-[1.5] text-[#555555]">
                    IT support staff availability
                  </p>
                </div>
              </FactCard>

              <FactCard>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-[27px] font-medium leading-none text-[#111111]">
                      15+
                    </div>

                    <p className="mt-3 text-[13px] leading-[1.5] text-[#555555]">
                      Years of development experience
                    </p>
                  </div>

                  <FactIconCircle>
                    <ExperienceIcon />
                  </FactIconCircle>
                </div>
              </FactCard>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          8. FINAL CTA
      ====================================================== */}
      <section className="bg-white pb-[80px] md:pb-[100px] lg:pb-[120px]">
        <div className="container mx-auto px-5 md:px-6 lg:px-8">
          <div
            className="
              relative
              mx-auto
              max-w-[1200px]
              overflow-hidden
              rounded-[30px]
              px-5
              py-[70px]
              text-center
              sm:px-8
              md:py-[90px]
              lg:py-[100px]
            "
            style={{
              background:
                "linear-gradient(105deg, #ff7945 0%, #f15422 20%, #7b2a25 40%, #202020 63%, #202020 84%, #15109a 100%)",
            }}
          >
            {/* Purple / Blue Glow */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-240px]
                left-[42%]
                h-[480px]
                w-[480px]
                -translate-x-1/2
                rounded-full
                bg-[#2815bd]
                opacity-80
                blur-[110px]
              "
            />

            {/* Orange Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-[200px]
                -left-[130px]
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#ff612c]
                opacity-60
                blur-[100px]
              "
            />

            <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center">
              <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-1.8px] text-white sm:text-[44px] md:text-[52px] lg:text-[58px]">
                Business apps built
                <br />
                around how your team
                <br />
                works.
              </h2>

              <p className="mt-8 max-w-[620px] text-[14px] font-medium leading-[1.65] text-white md:text-[15px]">
                Tell us what your team uses and what you&apos;re trying to
                solve. We&apos;ll send back a tailored example walkthrough and
                a custom quote within 48 hours.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-[11px]
                    border
                    border-[#ff5708]
                    bg-[#ff5708]
                    py-2
                    pl-5
                    pr-2
                    text-[15px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#ff5708]
                  "
                >
                  Request a quote

                  <span
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      items-center
                      justify-center
                      rounded-[7px]
                      bg-white
                      text-[#ff5708]
                      transition-all
                      duration-300
                      group-hover:bg-[#ff5708]
                      group-hover:text-white
                    "
                  >
                    <ArrowIcon />
                  </span>
                </Link>

                <Link
                  href="/our-work"
                  className="
                    flex
                    min-h-[52px]
                    items-center
                    justify-center
                    rounded-[11px]
                    border
                    border-white
                    bg-white
                    px-6
                    text-[15px]
                    font-semibold
                    text-[#111111]
                    transition-all
                    duration-300
                    hover:bg-transparent
                    hover:text-white
                  "
                >
                  See what we built
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   REUSABLE IMAGE + CONTENT SECTION
===================================================== */

type AboutSplitSectionProps = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  showIcon?: boolean;
};

function AboutSplitSection({
  title,
  paragraphs,
  image,
  imageAlt,
  imagePosition = "left",
  showIcon = true,
}: AboutSplitSectionProps) {
  const imageRight = imagePosition === "right";

  return (
    <section className="bg-white py-[70px] md:py-[90px] lg:py-[105px]">
      <div className="container mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[65px] xl:gap-[80px]">
          {/* IMAGE */}
          <div className={imageRight ? "lg:order-2" : "lg:order-1"}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#eee4ff_0%,#f1efff_100%)] p-[22px] sm:p-[24px]">
              <div className="relative overflow-hidden rounded-[18px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={900}
                  height={620}
                  className="
                    h-[300px]
                    w-full
                    object-cover
                    sm:h-[380px]
                    md:h-[420px]
                    lg:h-[390px]
                    xl:h-[420px]
                  "
                />

                {showIcon && (
                  <div className="absolute left-4 top-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[#17182a] text-white shadow-lg">
                    <BrainIcon />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
            <h2 className="max-w-[650px] text-[35px] font-medium leading-[1.12] tracking-[-1.5px] text-[#181818] sm:text-[42px] md:text-[47px] lg:text-[48px] xl:text-[52px]">
              {title}
            </h2>

            <div className="mt-7 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-[650px] text-[16px] font-normal leading-[1.6] text-[#414141] sm:text-[17px] md:text-[18px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   VALUE CARD
===================================================== */

function ValueCard({
  title,
  description,
  icon,
  className = "",
}: {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-[16px]
        border
        border-[#eeeeee]
        bg-white
        p-[22px]
        shadow-[0_5px_14px_rgba(0,0,0,0.08)]
        ${className}
      `}
    >
      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-[#ffebe2] text-[#ff5b1a]">
        {icon}
      </div>

      <h3 className="mt-6 text-[21px] font-medium leading-[1.2] text-[#111111]">
        {title}
      </h3>

      <p className="mt-2 max-w-[430px] text-[15px] leading-[1.55] text-[#3f3f3f] md:text-[16px]">
        {description}
      </p>
    </div>
  );
}

/* =====================================================
   MISSION ITEM
===================================================== */

function MissionItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="relative pl-0 sm:pl-[36px]">
      <span className="absolute left-0 top-[7px] hidden h-[12px] w-[12px] rounded-full bg-[#ff6528] sm:block" />

      <h3 className="text-[21px] font-semibold leading-[1.2] text-[#111111] md:text-[23px]">
        {title}
      </h3>

      <p className="mt-5 max-w-[590px] text-[16px] leading-[1.55] text-[#3f3f3f] md:text-[17px]">
        {text}
      </p>
    </div>
  );
}

/* =====================================================
   FACT CARD
===================================================== */

function FactCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-[16px]
        border
        border-[#e9e9e9]
        bg-white
        p-5
        shadow-[0_6px_18px_rgba(0,0,0,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function FactIconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-[#111111] shadow-sm">
      {children}
    </span>
  );
}

/* =====================================================
   HERO ICONS
===================================================== */

function ArrowIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11C19 15.5 16.2 19 12 21C7.8 19 5 15.5 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =====================================================
   BRAIN ICON
===================================================== */

function BrainIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.5 5.2C8 4 5.6 5 5.6 7C3.7 7.3 3.1 9.8 4.6 11C3.2 12.3 3.9 14.7 5.7 15C5.8 17.1 8 18.1 9.5 16.8V5.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 5.2C16 4 18.4 5 18.4 7C20.3 7.3 20.9 9.8 19.4 11C20.8 12.3 20.1 14.7 18.3 15C18.2 17.1 16 18.1 14.5 16.8V5.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.5 7.5H12M14.5 7.5H12M9.5 12H12M14.5 12H12M12 5V18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =====================================================
   CORE VALUE ICONS
===================================================== */

function IntegrityIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="7" r="3" fill="currentColor" />

      <path
        d="M3 15C3.8 12.5 5.4 11.3 8 11.3C9.5 11.3 10.8 11.8 11.7 12.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M16 11L20 12.5V15.5C20 18.2 18.3 20 16 21C13.7 20 12 18.2 12 15.5V12.5L16 11Z"
        fill="currentColor"
      />

      <path
        d="M14.3 15.8L15.5 17L18 14.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="9.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 5.5L13.2 8L16 8.4L14 10.3L14.5 13L12 11.7L9.5 13L10 10.3L8 8.4L10.8 8L12 5.5Z"
        fill="currentColor"
      />

      <path
        d="M8.5 14.5L7.5 21L12 18.7L16.5 21L15.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="9"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3 19C3.9 15.7 6.1 14 10 14C12.2 14 14 14.6 15.3 15.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M18 7V11M16 9H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3" fill="currentColor" />
      <circle cx="5" cy="9" r="2.2" fill="currentColor" />
      <circle cx="19" cy="9" r="2.2" fill="currentColor" />

      <path
        d="M7 20V16.4C7 13.7 8.9 12 12 12C15.1 12 17 13.7 17 16.4V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M2 19V16.7C2 14.7 3.1 13.4 5.2 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M22 19V16.7C22 14.7 20.9 13.4 18.8 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CommitmentIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10.7 7L11.7 8L13.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M4 13L8.5 17.5C9.5 18.5 11 18.5 12 17.5L14 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 13L15.5 17.5C14.5 18.5 13 18.5 12 17.5L10 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =====================================================
   FACT ICONS
===================================================== */

function FactsBadgeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L14 8L19 10L14 12L12 17L10 12L5 10L10 8L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 20V5H15V20M15 10H20V20M8 8H10M8 12H10M8 16H10M17 13H18M17 16H18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleSmallIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17"
        cy="9"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3 19C4 15.5 6 14 9 14C12 14 14 15.5 15 19M15 14.5C18 14.5 20 16 21 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8H20V19H4V8ZM8 8V5H16V8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 13H15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =====================================================
   FACT ILLUSTRATIONS
===================================================== */

function TeamIllustration() {
  return (
    <svg
      width="150"
      height="90"
      viewBox="0 0 150 90"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="37"
        y="15"
        width="76"
        height="49"
        rx="4"
        stroke="#8DAFC8"
        strokeWidth="2"
      />

      <circle
        cx="60"
        cy="40"
        r="10"
        stroke="#5C83A3"
        strokeWidth="2"
      />

      <circle
        cx="90"
        cy="40"
        r="10"
        stroke="#5C83A3"
        strokeWidth="2"
      />

      <path
        d="M45 70C48 57 54 52 60 52C66 52 72 57 75 70"
        stroke="#5C83A3"
        strokeWidth="2"
      />

      <path
        d="M75 70C78 57 84 52 90 52C96 52 102 57 105 70"
        stroke="#5C83A3"
        strokeWidth="2"
      />

      <path
        d="M23 25H35M115 25H127M20 31H31M119 31H132"
        stroke="#8DAFC8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CustomerIllustration() {
  return (
    <svg
      width="150"
      height="90"
      viewBox="0 0 150 90"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="52"
        cy="40"
        r="12"
        stroke="#72A36B"
        strokeWidth="2"
      />

      <circle
        cx="75"
        cy="32"
        r="12"
        stroke="#72A36B"
        strokeWidth="2"
      />

      <circle
        cx="98"
        cy="40"
        r="12"
        stroke="#72A36B"
        strokeWidth="2"
      />

      <path
        d="M35 72C38 56 44 50 52 50C60 50 66 56 69 72"
        stroke="#72A36B"
        strokeWidth="2"
      />

      <path
        d="M58 72C61 50 67 44 75 44C83 44 89 50 92 72"
        stroke="#72A36B"
        strokeWidth="2"
      />

      <path
        d="M81 72C84 56 90 50 98 50C106 50 112 56 115 72"
        stroke="#72A36B"
        strokeWidth="2"
      />
    </svg>
  );
}

function SupportIllustration() {
  return (
    <svg
      width="150"
      height="90"
      viewBox="0 0 150 90"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="75"
        cy="34"
        r="15"
        stroke="#C78F8F"
        strokeWidth="2"
      />

      <path
        d="M51 75C55 56 63 49 75 49C87 49 95 56 99 75"
        stroke="#C78F8F"
        strokeWidth="2"
      />

      <path
        d="M58 30C60 18 66 13 75 13C84 13 90 18 92 30"
        stroke="#C78F8F"
        strokeWidth="2"
      />

      <path
        d="M57 33H52V45H59M93 33H98V45H91"
        stroke="#C78F8F"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="117"
        cy="40"
        r="13"
        stroke="#D9AAAA"
        strokeWidth="2"
      />

      <path
        d="M111 40L115 44L123 35"
        stroke="#D9AAAA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}