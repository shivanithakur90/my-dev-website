import ResourcesSection from "./ResourcesSection";
import { blogs } from "./data";

const Page = () => {

  return (

    <main className="overflow-hidden">

      <section className="relative overflow-hidden bg-[#f8f4fb]">

        {/* =========================

            GRADIENT BACKGROUND

        ========================== */}



        <div

          className="absolute inset-0"

          style={{

            background:

              "linear-gradient(110deg, #e8d9f1 0%, #f7dfe4 38%, #f4eef8 62%, #cfdafa 100%)",

          }}

        />



        {/* Left Glow */}



        <div className="pointer-events-none absolute -left-[120px] top-[40px] h-[420px] w-[520px] rounded-full bg-[#e9bdcf]/45 blur-[100px]" />



        {/* Center Glow */}



        <div className="pointer-events-none absolute left-1/2 top-[320px] h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-white/45 blur-[100px]" />



        {/* Right Glow */}



        <div className="pointer-events-none absolute -right-[100px] top-[20px] h-[430px] w-[520px] rounded-full bg-[#9bb5ef]/35 blur-[100px]" />



        {/* =========================

            GRID BACKGROUND

        ========================== */}



        <div

          className="pointer-events-none absolute inset-0 z-[1]"

          style={{

            backgroundImage: `

              linear-gradient(

                rgba(50, 55, 95, 0.10) 1px,

                transparent 1px

              ),

              linear-gradient(

                90deg,

                rgba(50, 55, 95, 0.10) 1px,

                transparent 1px

              )

            `,

            backgroundSize: "48px 48px",

            backgroundPosition: "center center",

          }}

        />



        {/* Grid Soft Fade */}



        <div

          className="pointer-events-none absolute inset-0 z-[2]"

          style={{

            background:

              "radial-gradient(circle at 50% 25%, transparent 10%, rgba(248,244,251,0.05) 45%, rgba(248,244,251,0.35) 100%)",

          }}

        />



        {/* =========================

            BLOG CONTENT

        ========================== */}



        <div className="relative z-10">

          <ResourcesSection

            eyebrow="LATEST INSIGHTS"

            heading="Featured Blog"

            description="Explore our latest insights, guides and practical resources."

            resources={blogs}

            classNames={{

              section:

                "relative w-full bg-transparent py-[90px] max-md:py-[60px]",



              container:

                "relative z-10 mx-auto w-full max-w-[1220px] px-5 md:px-7",



              eyebrow:

                "text-[11px] font-semibold uppercase tracking-[0.32em] text-[#ff5708]",



              heading:

                "mt-4 text-[48px] font-semibold leading-[1.05] tracking-[-2px] text-[#17171b] max-md:text-[34px] max-md:tracking-[-1px]",



              description:

                "mt-4 max-w-[680px] text-[17px] leading-[1.7] text-[#59575f]",



              /* =========================

                  FEATURED CARD

              ========================== */



              featuredCard:

                "group mt-[65px] grid grid-cols-[1.35fr_0.85fr] overflow-hidden rounded-[26px] border border-white/60 bg-white/75 shadow-[0_25px_70px_rgba(38,35,70,0.12)] backdrop-blur-[10px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(39,67,232,0.16)] max-lg:grid-cols-1",



              featuredImageWrap:

                "relative min-h-[430px] overflow-hidden bg-[#ececf3] max-lg:min-h-[360px] max-md:min-h-[250px]",



              featuredImage:

                "object-cover transition-transform duration-700 group-hover:scale-[1.03]",



              featuredContent:

                "relative flex flex-col justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(245,240,255,0.92)_48%,rgba(238,242,255,0.95)_100%)] px-[42px] py-[45px] max-md:px-6 max-md:py-8",



              badgeWrap:

                "absolute left-6 top-6 flex flex-wrap items-center gap-2",



              badge:

                "rounded-full border border-white/40 bg-[#ff5708] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-white shadow-sm",



              meta:

                "flex flex-wrap items-center gap-5 text-[12px] text-[#77727d]",



              featuredTitle:

                "mt-7 text-[34px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#17171b] max-md:text-[28px]",



              featuredDescription:

                "mt-4 text-[15px] leading-[1.75] text-[#5e5a63]",



              /* =========================

                  GRID

              ========================== */



              grid:

                "mt-[28px] grid grid-cols-2 gap-[22px] max-md:grid-cols-1",



              /* =========================

                  NORMAL CARD

              ========================== */



              card:

                "group overflow-hidden rounded-[24px] border border-white/70 bg-white/75 shadow-[0_14px_45px_rgba(38,35,70,0.08)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#ff5708]/35 hover:shadow-[0_22px_60px_rgba(39,67,232,0.13)]",



              cardImageWrap:

                "relative aspect-[16/8] overflow-hidden bg-[#f1f2f7] m-[14px] mb-0 rounded-[16px]",



              cardImage:

                "object-cover transition-transform duration-700 group-hover:scale-[1.04]",



              cardContent:

                "px-[24px] pb-[26px] pt-[20px]",



              cardMeta:

                "flex flex-wrap items-center gap-4 text-[12px] text-[#88848d]",



              cardTitle:

                "mt-5 line-clamp-2 text-[23px] font-semibold leading-[1.22] tracking-[-0.6px] text-[#17171b] transition-colors duration-300 group-hover:text-[#ff5708]",



              cardDescription:

                "mt-3 line-clamp-2 text-[14px] leading-[1.7] text-[#66616b]",

            }}

          />

        </div>



        {/* Bottom Fade */}



        <div

          className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[100px]"

          style={{

            background:

              "linear-gradient(to bottom, rgba(248,244,251,0), rgba(255,255,255,0.72))",

          }}

        />

      </section>

    </main>

  );

};



export default Page;
