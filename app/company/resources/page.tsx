import { memo } from "react";
import ResourcesSection, {
  type ResourceItem,
} from "./ResourcesSection";

export const resources: ResourceItem[] = [
  {
    id: 1,
    title: "How to Handle Backorders and Stockouts Effectively on Shopify?",
    slug: "how-to-handle-backorders-and-stockouts-effectively-on-shopify",
    excerpt:
      "Running a Shopify store involves managing product availability in real time. Learn how to handle backorders and stockouts without losing customers.",
    image: "/backorders-shopify.png",
    type: "Blog",
    readTime: "8 min",
    date: "Aug 26, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Payment Gateway Errors on Shopify: Causes and Solutions",
    slug: "payment-gateway-errors-on-shopify",
    excerpt:
      "Understand the most common Shopify payment gateway errors, why they happen, and how to troubleshoot checkout and transaction issues.",
    image: "/payment-gateway-shopify.png",
    type: "Shopify",
    readTime: "8 min",
    date: "Aug 21, 2025",
  },
  {
    id: 3,
    title: "What Are Backoffice Support Services and Why Businesses Need Them?",
    slug: "backoffice-support-services",
    excerpt:
      "Learn how backoffice support can streamline daily operations, reduce workload, improve accuracy, and help teams focus on business growth.",
    image: "/backoffice-support.png",
    type: "Business",
    readTime: "8 min",
    date: "Aug 13, 2025",
  },
  {
    id: 4,
    title: "How to Add Custom Fields to Shopify Products",
    slug: "add-custom-fields-to-shopify-products",
    excerpt:
      "Add flexible custom fields to Shopify product pages for personalization, additional information, and better customer experiences.",
    image: "/shopify-custom-fields.png",
    type: "Shopify",
    readTime: "6 min",
    date: "Aug 08, 2025",
  },
  {
    id: 5,
    title: "What Is Customer Service Support and Why Every Business Needs It",
    slug: "customer-service-support-business",
    excerpt:
      "Discover why customer support plays a major role in customer satisfaction, retention, loyalty, and long-term business growth.",
    image: "/customer-support.jpg",
    type: "Customer Support",
    readTime: "7 min",
    date: "Aug 02, 2025",
  },
  {
    id: 6,
    title: "Shopify vs WooCommerce: Which One Is Right for Your Business?",
    slug: "shopify-vs-woocommerce",
    excerpt:
      "Compare Shopify and WooCommerce across pricing, scalability, customization, maintenance, and ease of use.",
    image: "/shopify-woocomerce.png",
    type: "E-commerce",
    readTime: "9 min",
    date: "Jul 28, 2025",
  },
  {
    id: 7,
    title: "Top Shopify Theme Customization Issues and Fixes",
    slug: "top-shopify-theme-customization-issues-fixes",
    excerpt:
      "Shopify is a powerful eCommerce platform that empowers businesses of all sizes to create visually appealing and high-performing online stores. One of its core strengths lies in the flexibility of theme customization, allowing merc...",
    image: "/top-shopify-theme.jpg",
    type: "E-commerce",
    readTime: "8 min",
    date: "Jun 03, 2025",
  },
  {
    id: 8,
    title: "How to Fix Duplicate Content Issues on Shopify?",
    slug: "how-to-fix-duplicate-content-issues-on-shopify",
    excerpt:
      "Duplicate content can silently undermine the success of your Shopify store, dragging down your SEO rankings and user experience. As a Shopify store owner, ensuring a seamless and optimized shopping experience is essential, but dup...",
    image: "/how-to-fix.png",
    type: "E-commerce",
    readTime: "18 min read",
    date: "Jun 09, 2025",
  },
  {
    id: 9,
    title: "How to Ensure a Smooth Transition to Shopify From Other Platforms? ",
    slug: "how-to-ensure-smooth-transition-to-shopify-from-other-platforms",
    excerpt:
      "Migrating your online store from one platform to another can feel overwhelming. Whether you're moving from WooCommerce, Magento, BigCommerce, Wix, or any other eCommerce platform, transitioning to Shopify offers a wide range of be...",
    image: "/how-to-switch.jpg",
    type: "E-commerce",
    readTime: "18 min read",
    date: "Jul 26, 2025",
  },
  {
    id: 10,
    title: "Enhancing Product Customization and Functionality on Shopify: A Deep Dive",
    slug: "enhancing-product-customization-and-functionality-on-shopify-a-deep-dive",
    excerpt:
      "In the world of eCommerce, Shopify product page customization plays a vital role in increasing customer satisfaction, enhancing user engagement, and driving conversions. When customers can personalize their products, they are more...",
    image: "/enhancing-product-customization.jpg",
    type: "E-commerce",
    readTime: "18 min read",
    date: "Apr 08, 2025",
  },
  {
    id: 11,
    title: "How to Increase Sales on Your Shopify Store: 15 Proven Strategies That Work",
    slug: "how-to-increase-sales-on-your-shopify-store-15-proven-strategies-that-work",
    excerpt:
      "If you've launched your Shopify store and started seeing a few weekly sales, you're off to a good start. But what if you want to scale up and increase your Shopify sales tenfold? With limited time and a tight marketing budget, foc...",
    image: "/increase-sales-shopify-store-strategies.jpg",
    type: "E-commerce",
    readTime: "18 min read",
    date: "Apr 08, 2025",
  },
  {
    id: 12,
    title: "11 Ways Shopify Helps You Build a Profitable Online Store",
    slug: "11-ways-shopify-helps-you-build-a-profitable-online-store",
    excerpt:
      "In the competitive world of online business, having the right platform to build and grow your store can make all the difference. Shopify, one of the leading ecommerce platforms, has empowered millions of entrepreneurs to create su...",
    image: "/11-ways-shopify-helps-you-build-a-profitable-online-store.jpg",
    type: "E-commerce",
    readTime: "2 min read",
    date: "Apr 02, 2025",
  },
  {
    id: 13,
    title: "Common Shopify SEO Mistakes That Are Hurting Your Rankings",
    slug: "common-shopify-seo-mistakes-that-are-hurting-your-rankings",
    excerpt:
      "Shopify is a powerhouse in the e-commerce industry , offering entrepreneurs a robust platform to showcase their products and manage their online stores. While it simplifies the process of setting up an online business, success on ...",
    image: "/common-shopify-seo-mistakes-hurting-your-rankings.jpg",
    type: "E-commerce",
    readTime: "12 min read",
    date: "Feb 22, 2025",
  },
  {
    id: 14,
    title: "How Much Do YouTubers Charge for Promotion in India?",
    slug: "how-much-do-youtubers-charge-for-promotion-in-india",
    excerpt:
      "With YouTube becoming a powerful platform for brands to connect with audiences, influencer marketing has grown exponentially. In India, YouTubers charge for promotions based on various factors, including subscriber count, niche, a...",
    image: "/how-much-do-youtubers-charge-for-promotion-in-india.png",
    type: "E-commerce",
    readTime: "18 min read",
    date: "Dec 24, 2024",
  },
  {
    id: 15,
    title: "Is It Worthwhile Investing in Digital Marketing for Yoga Studio, and Why?",
    slug: "is-it-worthwhile-investing-in-digital-marketing-for-yoga-studio-and-why",
    excerpt:
      "Digital marketing for Yoga studio or other industries refers to the use of digital channels, such as search engines, social media, email, and websites, to promote products or services. It has become an essential aspect of modern b...",
    image: "/digital-marketing-for-yoga-studio.jpg",
    type: "E-commerce",
    readTime: "28 min read",
    date: "Nov 28, 2024",
  },
  {
    id: 16,
    title: "Why is Facebook still a powerful marketing tool?",
    slug: "why-is-facebook-still-a-powerful-marketing-tool",
    excerpt:
      "Facebook started as a social networking site which makes it easy for people to connect with strangers. And share pictures, texts, or videos with their family and friends online. It was created initially for college students by mar...",
    image: "/powerful-marketing-tool-facebook.jpg",
    type: "E-commerce",
    readTime: "21 min read",
    date: "Nov 22, 2024",
  },
  {
    id: 17,
    title: "How to Start an Amazon Business: Beginners Guide to Start Selling on Amazon",
    slug: "how-to-start-an-amazon-business-beginners-guide-to-start-selling-on-amazon",
    excerpt:
      "Today, Amazon is one of the biggest online marketplace in the whole world. Believe it or not, it is super easy to sell on Amazon and you can do it anytime (yes, you!). To start your online business with Amazon you do not require a...",
    image: "/how-to-start-an-amazon-business.png",
    type: "E-commerce",
    readTime: "21 min read",
    date: "Nov 24, 2024",
  },
   {
    id: 18,
    title: "Why Should You Hire Digital Marketing Agency?",
    slug: "why-should-you-hire-digital-marketing-agency",
    excerpt:
      "Well, now, when you have finally decided to invest over the tools for your business to grow online. We have shortlisted some marketing options for you to start from; you&amp;#39;ve got SEO, EMAIL, PPC, SOCIAL MEDIA, BLOGGING, and ...",
    image: "/hire-digital-marketing-agency.jpg",
    type: "E-commerce",
    readTime: "21 min read",
    date: "Nov 24, 2024",
  },
  {
    id: 19,
    title: "SEO vs. PPC: When and Which Search Marketing Method to use for Maximum Profit",
    slug: "seo-vs-ppc-when-and-which-search-marketing-method-to-use-for-maximum-profit",
    excerpt:
      "It had been mentioned before, but it bears repeating: Traffic is the lifeblood of any online business. The success of an online business largely depends on the number of visitors it can generate for its web pages. This really is a...",
    image: "/difference-between-seo-ad-ppc.jpg",
    type: "E-commerce",
    readTime: "21 min read",
    date: "Nov 28, 2024",
  },
  {
    id: 20,
    title: "What Are The Benefits Of Using Shopify For Your Ecommerce Store? Know From Us!",
    slug: "what-are-the-benefits-of-using-shopify-for-your-ecommerce-store-know-from-us",
    excerpt:
      "E-commerce has completely transformed the business universe, with businesses showcasing their products online rather than investing over physical stores.&nbsp; Because of this, there is a need to come up with e-commerce websites t...",
    image: "/benefits-of-shopify-for-ecommerce.jpg",
    type: "E-commerce",
    readTime: "21 min read",
    date: "Nov 28, 2024",
  },
  {
    id: 21,
    title: "What Is the Difference Between UI/UX?",
    slug: "what-is-the-difference-between-ui-ux",
    excerpt:
      "- INTRODUCTION: User interface or UI on its most basic means the series of screens, pages, and visual elements. These include buttons and icons. This helps a person and enables him to interact with a service or product. &nbsp;On t...",
    image: "/difference-between-uiux.jpg",
    type: "E-commerce",
    readTime: "20 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 22,
    title: "Time to Increase Your Instagram Engagement",
    slug: "time-to-increase-your-instagram-engagement",
    excerpt:
      "INTRODUCTION: Social media is the real boss today. One can easily get fame here and can surely have a wonderful career made by Instagram. A person goes viral and within the night he reaches the heights of popularity.&nbsp; But man...",
    image: "/time-to-increase-instagram-engagement.jpg",
    type: "E-commerce",
    readTime: "18 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 23,
    title: "How to Make Your Website Unique?",
    slug: "how-to-make-your-website-unique",
    excerpt:
      "INTRODUCTION: In the world of high competition, companies are no doubt taking advantage of the new ways and methods to share their ideas and to increase their market share. Ever we may use various methods and ways to bring the cus...",
    image: "/make-your-website-unique.jpg",
    type: "E-commerce",
    readTime: "24 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 24,
    title: "6-Steps to Execute Your Seo Clean-Up Strategy",
    slug: "6-steps-to-execute-your-seo-clean-up-strategy",
    excerpt:
      "INTRODUCTION: Talking of a successful business; you would have realized that the website of the brand or the business is growing at a similar pace to your business. How does it happen? With consistency in posting the blogs, produc...",
    image: "/seo-clean-up-strategy.jpg",
    type: "E-commerce",
    readTime: "24 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 25,
    title: "Best Tactics for Twitter Business Engagements in 2025",
    slug: "best-tactics-for-twitter-business-engagements-in-2025",
    excerpt:
      "INTRODUCTION: It is a well-known fact that; to get followers on social media is not an easy task. It requires lots of mindful tactics and also good strategies to get to the goal of getting a good amount of followers. Well, it is a...",
    image: "/twitter-business-engagements-in-2021.jpg",
    type: "E-commerce",
    readTime: "29 min read",
    date: "Nov 21, 2024",
  },
   {
    id: 26,
    title: "How to Enhance Your Digital Presence?",
    slug: "how-to-enhance-your-digital-presence",
    excerpt:
      "INTRODUCTION: Every business wants to improve or enhance its digital presence. There are many reasons for this as it helps the business to get more reach and get to their targeted audience and much more. But do you know what exact...",
    image: "/how-to-enhance-your-digital-presence.jpg",
    type: "E-commerce",
    readTime: "29 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 27,
    title: "What Things Can Make Your Ads Have Higher Roi and Double the CTR?",
    slug: "what-things-can-make-your-ads-have-higher-roi-and-double-the-ctr",
    excerpt:
      "INTRODUCTION: Experts in the field of digital marketing and people who have good experience in running the paid advertisement campaigns have suggested that the majority of the advertisements running on the internet are simply a wa...",
    image: "/how-can-make-higher-roi-and-ctr-of-ad.jpg",
    type: "E-commerce",
    readTime: "29 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 28,
    title: "E-Commerce Shopping",
    slug: "e-commerce-shopping",
    excerpt:
      "INTRODUCTION: E-commerce companies like Shopify, Amazon, Flipkart and many more are earning billions. This directly means that e-commerce shopping and e-commerce are very famous these days. The success of these companies represent...",
    image: "/e-commerce-shopping.jpg",
    type: "E-commerce",
    readTime: "29 min read",
    date: "Nov 21, 2024",
  },
  {
    id: 29,
    title: "Learn different aspects of technical SEO and its importance for a website’s top Ranking",
    slug: "learn-different-aspects-of-technical-seo-and-its-importance-for-a-website-s-top-ranking",
    excerpt:
      "Technology has driven us to move out from the conventional ways of marketing and shift into the modern and advanced ways of marketing. Yes, it is time to market digitally and leave the old ways of marketing forever. Digital techno...",
    image: "/different-aspects-of-technical-seo.jpg",
    type: "E-commerce",
    readTime: "29 min read",
    date: "Nov 21, 2024",
  },
];

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
            RESOURCES CONTENT
        ========================== */}
        <div className="relative z-10">
          <ResourcesSection
            eyebrow="EMERGING FROM THE NEBULA"
            heading="Featured Resource"
            description="One study every fortnight — chosen for depth, honesty and the impact we’ve measured with our own clients."
            resources={resources}
            classNames={{
              /* important:
                 transparent rakha hai so outer grid visible rahe */
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

export default memo(Page);