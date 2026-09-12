import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Openxcell about your workflow, portal, dashboard, automation, or integration project and get a fixed-price quote.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
