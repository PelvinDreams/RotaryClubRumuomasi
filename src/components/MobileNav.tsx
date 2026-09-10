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
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white transition hover:bg-white/10"
      >
        {open ? "✕" : "☰"}
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[72px] z-40 rounded-2xl border border-white/10 bg-[#0a1f3a]/95 p-3 shadow-2xl backdrop-blur-xl">
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
