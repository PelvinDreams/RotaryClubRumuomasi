"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#impact", label: "Impact" },
  { href: "#news", label: "News" },
  { href: "#join", label: "Join" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-[#1d2d42]/90 px-3 py-2 shadow-[0_10px_24px_rgba(9,29,54,0.22)]">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">⌂</span>
          <span className="text-base font-medium tracking-[-0.04em] text-white/90">masi.vercel.app</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Add menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white"
          >
            +
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-40 rounded-2xl border border-white/10 bg-[#0a1f3a]/95 p-3 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-white/10 pt-2">
              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#d7b26a] px-4 py-3 text-sm font-bold text-[#0a1f3a]"
              >
                Become a Member
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
