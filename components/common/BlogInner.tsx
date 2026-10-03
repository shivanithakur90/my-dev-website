import Image from "next/image";

import Link from "next/link";

import { memo } from "react";



/* =====================================

   BLOG CONTENT TYPES

===================================== */



export type BlogTextSegment = {

  text: string;

  href?: string;

  strong?: boolean;

};



export type BlogContentBlock = {

  /*

   \* New structured block types.

   \*

   \* type na dene par old structure bhi work karega:

   \* {

   \*   heading: "...",

   \*   text: "...",

   \*   list: [...]

   \* }

   */

  type?:

    | "heading"

    | "subheading"

    | "paragraph"

    | "list"
    | "image"

    | "divider";



  /*

   \* Old / backward-compatible fields

   */

  heading?: string;

  text?: string;

  image?: string;
  list?: string[];



  /*

   \* New fields

   */

  items?: string[];

  segments?: BlogTextSegment[];



  imageAlt?: string;

  caption?: string;



  ordered?: boolean;



  id?: string;

};



export type BlogData = {

  title: string;

  excerpt: string;

  image: string;



  type?: string;

  readTime?: string;

  date?: string;

  author?: string;



  content?: BlogContentBlock[];

};



type BlogInnerProps = {

  blog: BlogData;

};



/* =====================================

   BLOG INNER

===================================== */



const BlogInner = ({ blog }: BlogInnerProps) => {

  return (

    <main className="bg-white">

      {/* =====================================

          HERO

      ====================================== */}



      <section className="relative overflow-hidden bg-[#f8f4fb]">

        {/* Gradient */}



        <div

          className="absolute inset-0"

          style={{

            background:

              "linear-gradient(110deg,#e8d9f1 0%,#f7dfe4 38%,#f4eef8 62%,#cfdafa 100%)",

          }}

        />



        {/* Glow */}



        <div className="pointer-events-none absolute -left-[100px] top-10 h-[420px] w-[500px] rounded-full bg-[#e9bdcf]/50 blur-[100px]" />



        <div className="pointer-events-none absolute -right-[100px] top-0 h-[420px] w-[500px] rounded-full bg-[#9bb5ef]/40 blur-[100px]" />



        {/* Grid */}



        <div

          className="pointer-events-none absolute inset-0"

          style={{

            backgroundImage: `

              linear-gradient(

                rgba(50,55,95,0.09) 1px,

                transparent 1px

              ),

              linear-gradient(

                90deg,

                rgba(50,55,95,0.09) 1px,

                transparent 1px

              )

            `,

            backgroundSize: "48px 48px",

          }}

        />



        {/* Fade */}



        <div

          className="pointer-events-none absolute inset-0"

          style={{

            background:

              "radial-gradient(circle at center,transparent 10%,rgba(248,244,251,.15) 60%,rgba(248,244,251,.6) 100%)",

          }}

        />



        <div className="relative z-10 mx-auto max-w-[1180px] px-5 pb-[100px] pt-[65px] sm:pt-[75px] md:px-7 md:pb-[120px] md:pt-[85px] lg:pb-[135px]">

          {/* Back */}



          <Link

            href="/company/blogs"

            className="

              inline-flex

              items-center

              gap-2

              text-[14px]

              font-semibold

              text-[#55515c]

              transition

              hover:text-[#ff5708]

            "

          >

            <BackIcon />



            Back to Blogs

          </Link>



          <div className="mx-auto mt-10 max-w-[950px] text-center">

            {/* Meta */}



            <div className="flex flex-wrap items-center justify-center gap-3">

              {blog.type && (

                <span

                  className="

                    rounded-full

                    bg-[#fff0e9]

                    px-4

                    py-2

                    text-[11px]

                    font-semibold

                    uppercase

                    tracking-[0.08em]

                    text-[#ff5708]

                  "

                >

                  {blog.type}

                </span>

              )}



              {blog.readTime && (

                <span className="flex items-center gap-2 text-[13px] text-[#69656e]">

                  <ClockIcon />



                  {blog.readTime}

                </span>

              )}



              {blog.date && (

                <span className="flex items-center gap-2 text-[13px] text-[#69656e]">

                  <CalendarIcon />



                  {blog.date}

                </span>

              )}

            </div>



            {/* Heading */}



            <h1

              className="
                mt-5
                text-[30px]
                font-semibold
                leading-[1.12]
                tracking-[-1px]
                text-[#17171b]

                sm:mt-6
                sm:text-[34px]

                md:text-[42px]
                md:tracking-[-1.6px]

                lg:text-[50px]
              "

            >

              {blog.title}

            </h1>



            {/* Excerpt */}



            <p

              className="
                mx-auto
                mt-4
                max-w-[800px]
                text-[14px]
                leading-[1.7]
                text-[#55515c]

                sm:mt-5
                sm:text-[15px]

                md:mt-6
                md:text-[17px]
              "

            >

              {blog.excerpt}

            </p>



            {/* Author */}



            {blog.author && (

              <div className="mt-6 flex items-center justify-center gap-3 md:mt-7">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17171b] text-[13px] font-semibold text-white">

                  {blog.author

                    .split(" ")

                    .map((word) => word[0])

                    .join("")

                    .slice(0, 2)}

                </div>



                <div className="text-left">

                  <div className="text-[14px] font-semibold text-[#202024]">

                    {blog.author}

                  </div>



                  <div className="text-[12px] text-[#77737b]">

                    Author

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </section>



      {/* =====================================

          FEATURE IMAGE

      ====================================== */}



      <section className="relative z-20 mx-auto mt-[-85px] max-w-[1180px] px-5 md:px-7">

        <div

          className="

            relative

            aspect-[16/8]

            overflow-hidden

            rounded-[26px]

            border-[7px]

            border-white

            bg-[#ececf2]

            shadow-[0_30px_90px_rgba(37,35,65,0.18)]

          "

        >

          <Image

            src={blog.image}

            alt={blog.title}

            fill

            priority

            sizes="(max-width: 768px) 100vw, 1180px"

            className="object-cover"

          />

        </div>

      </section>



      {/* =====================================

          ARTICLE

      ====================================== */}



      <section className="py-[48px] sm:py-[60px] md:py-[78px]">

        <div

          className="

            mx-auto

            grid

            max-w-[1180px]

            grid-cols-1

            gap-[34px]

            px-5

            md:gap-[44px]



            md:px-7



            lg:grid-cols-[220px_minmax(0,760px)]

          "

        >

          {/* Sidebar */}



          <aside className="hidden self-start lg:sticky lg:top-[110px] lg:block">

            <div>

              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#99959d]">

                Article

              </div>



              <div className="mt-4 h-px bg-[#ececec]" />



              <div className="mt-5 flex flex-col gap-3">

                {blog.readTime && (

                  <span className="text-[13px] text-[#6d6972]">

                    {blog.readTime}

                  </span>

                )}



                {blog.date && (

                  <span className="text-[13px] text-[#6d6972]">

                    {blog.date}

                  </span>

                )}



                {blog.type && (

                  <span className="text-[13px] text-[#ff5708]">

                    {blog.type}

                  </span>

                )}

              </div>

            </div>

          </aside>



          {/* Content */}



          <article className="min-w-0">

            {/* Intro */}



            {/* <p className="text-[19px] font-medium leading-[1.9] text-[#3f3c43]">

              {blog.excerpt}

            </p> */}



            {/* Dynamic Article Blocks */}



            <div className="mt-0">

              {blog.content?.map((block, index) => (

                <BlogBlock

                  key={`${block.type ?? "legacy"}-${index}`}

                  block={block}

                  blogTitle={blog.title}

                />

              ))}

            </div>



            {/* =====================================

                BOTTOM CTA

            ====================================== */}



            <div

              className="

                relative

                mt-[70px]

                overflow-hidden

                rounded-[26px]

                bg-[linear-gradient(110deg,#1736e8_0%,#5428bd_35%,#bd2451_70%,#ff5708_100%)]

                px-7

                py-9

                text-white



                md:px-10

                md:py-10

              "

            >

              <h3 className="max-w-[560px] text-[22px] font-semibold leading-[1.2] tracking-[-0.5px] sm:text-[24px] md:text-[27px]">

                Need help building something similar?

              </h3>



              <p className="mt-3 max-w-[580px] text-[15px] leading-[1.7] text-white/75">

                Tell us what you&apos;re building and we&apos;ll help you

                choose the right approach.

              </p>



              <Link

                href="/contact"

                className="

                  mt-6

                  inline-flex

                  items-center

                  gap-3

                  rounded-[11px]

                  bg-white

                  px-5

                  py-3

                  text-[14px]

                  font-semibold

                  text-[#111111]

                  transition

                  hover:-translate-y-0.5

                "

              >

                Talk to our team



                <ArrowIcon />

              </Link>

            </div>

          </article>

        </div>

      </section>

    </main>

  );

};



export default memo(BlogInner);



/* =====================================

   BLOG BLOCK RENDERER

===================================== */



type BlogBlockProps = {

  block: BlogContentBlock;

  blogTitle: string;

};



function BlogBlock({

  block,

  blogTitle,

}: BlogBlockProps) {

  /*

   \* =====================================

   \* NEW STRUCTURED BLOCKS

   \* =====================================

   */



  if (block.type === "heading") {

    return (

      <h2

        id={block.id}

        className="
          mt-7
          scroll-mt-[120px]
          text-[23px]
          font-semibold
          leading-[1.28]
          tracking-[-0.45px]
          text-[#17171b]

          sm:mt-8
          sm:text-[25px]

          md:mt-10
          md:text-[29px]
        "

      >

        {block.text}

      </h2>

    );

  }



  if (block.type === "subheading") {

    return (

      <h3

        id={block.id}

        className="
          mt-5
          scroll-mt-[120px]
          text-[18px]
          font-semibold
          leading-[1.4]
          tracking-[-0.15px]
          text-[#252229]

          sm:mt-6
          sm:text-[19px]

          md:mt-7
          md:text-[21px]
        "

      >

        {block.text}

      </h3>

    );

  }



  if (block.type === "paragraph") {

    return (

      <p

        className="
          mt-2
          whitespace-pre-line
          text-[15px]
          leading-[1.75]
          text-[#615e66]

          sm:mt-3

          md:mt-4
          md:text-[16px]
          md:leading-[1.8]
        "

      >

        {block.segments?.length

          ? renderTextSegments(block.segments)

          : block.text}

      </p>

    );

  }



  if (block.type === "list") {

    const items = block.items ?? block.list ?? [];



    if (!items.length) {

      return null;

    }



    if (block.ordered) {

      return (

        <ol className="mt-6 flex list-decimal flex-col gap-3 pl-6">

          {items.map((item, itemIndex) => (

            <li

              key={itemIndex}

              className="

                pl-1

                text-[16px]

                leading-[1.8]

                text-[#55525a]



                marker:font-semibold

                marker:text-[#ff5708]



                md:text-[17px]

              "

            >

              {item}

            </li>

          ))}

        </ol>

      );

    }



    return (

      <ul className="mt-6 flex flex-col gap-4">

        {items.map((item, itemIndex) => (

          <li

            key={itemIndex}

            className="

              flex

              items-start

              gap-3

              text-[16px]

              leading-[1.8]

              text-[#55525a]



              md:text-[17px]

            "

          >

            <span className="mt-[11px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#ff5708]" />



            <span>{item}</span>

          </li>

        ))}

      </ul>

    );

  }

  if (block.type === "image") {

    if (!block.image) {

      return null;

    }



    return (

      <figure className="mt-10">

        <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-[#f1f1f4]">

          <Image

            src={block.image}

            alt={block.imageAlt ?? blogTitle}

            fill

            sizes="(max-width: 768px) 100vw, 760px"

            className="object-cover"

          />

        </div>



        {block.caption && (

          <figcaption className="mt-3 text-center text-[13px] leading-[1.6] text-[#88838c]">

            {block.caption}

          </figcaption>

        )}

      </figure>

    );

  }



  if (block.type === "divider") {

    return (

      <div className="my-12 h-px w-full bg-[#ebe8ee]" />

    );

  }



  /*

   \* =====================================

   \* OLD CONTENT STRUCTURE SUPPORT

   \*

   \* Existing data break nahi hoga.

   \* =====================================

   */



  return (

    <div>

      {block.heading && (

        <h2

          id={block.id}

          className="
            mt-7
            scroll-mt-[120px]
            text-[23px]
            font-semibold
            leading-[1.28]
            tracking-[-0.45px]
            text-[#17171b]

            sm:mt-8
            sm:text-[25px]

            md:mt-10
            md:text-[29px]
          "

        >

          {block.heading}

        </h2>

      )}



      {block.text && (

        <p

          className="
            mt-2
            whitespace-pre-line
            text-[15px]
            leading-[1.75]
            text-[#615e66]

            sm:mt-3

            md:mt-4
            md:text-[16px]
            md:leading-[1.8]
          "

        >

          {block.segments?.length

            ? renderTextSegments(block.segments)

            : block.text}

        </p>

      )}



      {block.list && (

        <ul className="mt-6 flex flex-col gap-4">

          {block.list.map((item, listIndex) => (

            <li

              key={listIndex}

              className="

                flex

                items-start

                gap-3

                text-[16px]

                leading-[1.8]

                text-[#55525a]



                md:text-[17px]

              "

            >

              <span className="mt-[11px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#ff5708]" />



              <span>{item}</span>

            </li>

          ))}

        </ul>

      )}

      {block.image && (

        <figure className="mt-10">

          <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-[#f1f1f4]">

            <Image

              src={block.image}

              alt={block.imageAlt ?? block.heading ?? blogTitle}

              fill

              sizes="(max-width: 768px) 100vw, 760px"

              className="object-cover"

            />

          </div>



          {block.caption && (

            <figcaption className="mt-3 text-center text-[13px] leading-[1.6] text-[#88838c]">

              {block.caption}

            </figcaption>

          )}

        </figure>

      )}

    </div>

  );

}



/* =====================================

   INLINE RICH TEXT

===================================== */



function renderTextSegments(

  segments: BlogTextSegment[]

) {

  return segments.map((segment, index) => {

    const content = segment.strong ? (

      <strong className="font-semibold text-[#29262d]">

        {segment.text}

      </strong>

    ) : (

      segment.text

    );



    if (!segment.href) {

      return (

        <span key={index}>

          {content}

        </span>

      );

    }



    const isExternal =

      segment.href.startsWith("http://") ||

      segment.href.startsWith("https://");



    return (

      <Link

        key={index}

        href={segment.href}

        target={isExternal ? "_blank" : undefined}

        rel={isExternal ? "noopener noreferrer" : undefined}

        className="

          font-medium

          text-[#2743e8]

          underline-offset-4

          transition-colors

          hover:text-[#ff5708]

          hover:underline

        "

      >

        {content}

      </Link>

    );

  });

}



/* =====================================

   ICONS

===================================== */



function BackIcon() {

  return (

    <svg

      width="18"

      height="18"

      viewBox="0 0 24 24"

      fill="none"

      aria-hidden="true"

    >

      <path

        d="M19 12H5M5 12L11 6M5 12L11 18"

        stroke="currentColor"

        strokeWidth="1.8"

        strokeLinecap="round"

        strokeLinejoin="round"

      />

    </svg>

  );

}



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

        d="M12 7.5V12L15 14"

        stroke="currentColor"

        strokeWidth="1.6"

        strokeLinecap="round"

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

        y="5"

        width="16"

        height="15"

        rx="2"

        stroke="currentColor"

        strokeWidth="1.6"

      />



      <path

        d="M8 3V7M16 3V7M4 9H20"

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