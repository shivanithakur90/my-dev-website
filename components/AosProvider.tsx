"use client";

import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

export default function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: "phone",
    });

    AOS.refresh();
  }, []);

  return children;
}