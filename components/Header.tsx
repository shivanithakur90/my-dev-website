"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full border-b border-white/15 text-white"
      style={{
        background:
          "linear-gradient(110deg, #1736e8 0%, #4129b9 28%, #9b1f57 57%, #d42a1f 78%, #ef3b00 100%)",
      }}
    >
      <div className="mx-auto flex h-[92px] max-w-[1500px] items-center justify-between px-6 lg:px-10 xl:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 13.5L4 3L7.8 15.2L13.5 13.5Z" fill="#2743E8" />
              <path d="M13.5 13.5L23 3L19.2 15.2L13.5 13.5Z" fill="#2743E8" />
              <path d="M13.5 13.5L4 24L16 19.5L13.5 13.5Z" fill="#2743E8" />
              <path d="M13.5 13.5L23 24L11 19.5L13.5 13.5Z" fill="#2743E8" />
            </svg>
          </span>

          <span className="text-[28px] font-semibold tracking-[-1px]">
            Openxcell
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/services"
            className="group flex items-center gap-2 text-[17px] font-medium"
          >
            Services
            <span className="transition-transform group-hover:rotate-180">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/solutions"
            className="group flex items-center gap-2 text-[17px] font-medium"
          >
            Solutions
            <span className="transition-transform group-hover:rotate-180">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/industries"
            className="group flex items-center gap-2 text-[17px] font-medium"
          >
            Industries
            <span className="transition-transform group-hover:rotate-180">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/company"
            className="group flex items-center gap-2 text-[17px] font-medium"
          >
            Company
            <span className="transition-transform group-hover:rotate-180">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/our-work"
            className="text-[17px] font-medium"
          >
            Our work
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="flex items-center gap-4 rounded-[15px] bg-[#ff5708] py-[10px] pl-5 pr-[10px] text-[17px] font-semibold transition hover:bg-[#ff6a20]"
          >
            Get a quote

            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[7px] bg-white text-[#ff5708]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 7L19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/15 px-6 pb-7 pt-4 lg:hidden">
          <nav className="flex flex-col">
            <Link
              href="/services"
              className="border-b border-white/10 py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/solutions"
              className="border-b border-white/10 py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </Link>

            <Link
              href="/industries"
              className="border-b border-white/10 py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </Link>

            <Link
              href="/company"
              className="border-b border-white/10 py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Company
            </Link>

            <Link
              href="/our-work"
              className="border-b border-white/10 py-4 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Our work
            </Link>

            <Link
              href="/contact"
              className="mt-5 flex w-fit items-center gap-4 rounded-xl bg-[#ff5708] py-3 pl-5 pr-3 font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get a quote

              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#ff5708]">
                →
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}