"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { RotaryLogo } from "@/components/RotaryLogo";

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setSubmitted(true);
      formRef.current?.reset();
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f7fb] text-[#0a1f3a]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-[#0a1f3a]">
            <RotaryLogo className="h-10 w-10" />
            <span className="flex flex-col leading-none">
              <strong className="text-[0.72rem] uppercase tracking-[0.18em]">Rotary Club</strong>
              <small className="text-xs opacity-80">of Rumuomasi</small>
            </span>
          </Link>
          <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-4 py-2 text-sm font-bold text-[#0a1f3a]">
            Become a Member
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div className="rounded-[28px] bg-[#0a1f3a] p-8 text-white shadow-[0_20px_50px_rgba(10,31,58,0.18)]">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#dfeaff]">Give back</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">Support projects that change lives.</h1>
          <p className="mt-5 text-white/75">
            Your donation helps fund health, education, sanitation, and community development initiatives in Rumuomasi and beyond.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Support WASH and school sanitation projects.",
              "Fund community health and outreach initiatives.",
              "Back youth, education, and civic leadership programs.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(12,31,57,0.08)] sm:p-8">
          <h2 className="text-2xl font-black text-[#0a1f3a]">Donation form</h2>
          <p className="mt-2 text-sm text-slate-600">Every contribution helps fund meaningful local action.</p>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              <h3 className="text-lg font-bold">Donation request received</h3>
              <p className="mt-2">Thank you for your generosity. We will contact you to complete the donation process.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block text-sm font-medium text-slate-700">
                Full name
                <input name="fullName" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="Your full name" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="you@example.com" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Phone number
                <div className="mt-2 flex gap-2">
                  <select name="countryCode" defaultValue="+234" className="w-28 rounded-xl border border-slate-200 bg-slate-50 px-2 py-3 text-sm outline-none focus:border-[#0e4b9c]">
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+234">+234</option>
                    <option value="+233">+233</option>
                  </select>
                  <input type="tel" name="phone" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="800 000 0000" />
                </div>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Donation amount
                <input name="amount" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="₦20,000" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Purpose
                <select name="purpose" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]">
                  <option value="">Select a cause</option>
                  <option value="health">Health</option>
                  <option value="education">Education</option>
                  <option value="sanitation">Sanitation</option>
                  <option value="community">Community development</option>
                </select>
              </label>

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#d7b26a] px-6 py-3.5 text-sm font-bold text-[#0a1f3a] transition hover:-translate-y-0.5">
                Submit donation request
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
