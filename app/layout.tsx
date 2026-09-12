import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AosProvider from "@/components/AosProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Openxcell | Custom Business Apps & AI Automation",
    template: "%s | Openxcell",
  },
  description:
    "Openxcell builds custom business apps, AI automation, portals, dashboards, and integrations for teams that need working software fast.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <AosProvider>{children}</AosProvider>
        <Footer />
      </body>
    </html>
  );
}
