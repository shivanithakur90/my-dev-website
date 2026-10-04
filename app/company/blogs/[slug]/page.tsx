import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogInner from "@/components/common/BlogInner";
import { blogs } from "../data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,

    openGraph: {
      title: blog.title,
      description: blog.excerpt,

      images: blog.image
        ? [
            {
              url: blog.image,
            },
          ]
        : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return <BlogInner blog={blog} />;
}
