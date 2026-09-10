"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { RotaryLogo } from "@/components/RotaryLogo";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/join", {
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
          <Link href="/donate" className="inline-flex items-center justify-center rounded-full border border-[#0e4b9c] px-4 py-2 text-sm font-bold text-[#0e4b9c]">
            Donate
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div className="rounded-[28px] bg-[#091d36] p-8 text-white shadow-[0_20px_50px_rgba(9,29,54,0.16)]">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#dfeaff]">Join Rotary</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">Become a member of Rotary Club of Rumuomasi</h1>
          <p className="mt-5 text-white/75">
            Join a service-focused network of professionals and community leaders committed to building
            stronger, healthier, and more resilient communities.
          </p>

          <div className="mt-8 space-y-5">
            {[
              "Support impactful local and global service work.",
              "Network with leaders, professionals, and changemakers.",
              "Strengthen your leadership, skills, and community presence.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#d7b26a] text-xs font-black text-[#0a1f3a]">✓</span>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(12,31,57,0.08)] sm:p-8">
          <h2 className="text-2xl font-black text-[#0a1f3a]">Membership application</h2>
          <p className="mt-2 text-sm text-slate-600">Complete the form below and our team will connect with you.</p>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              <h3 className="text-lg font-bold">Application received</h3>
              <p className="mt-2">Thank you for your interest in Rotary Club of Rumuomasi. We will reach out shortly.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  First name
                  <input name="firstName" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="Your first name" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Last name
                  <input name="lastName" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="Your last name" />
                </label>
              </div>

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
                Occupation / profession
                <input name="profession" required className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="Professional / business / student" />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Why do you want to join Rotary?
                <textarea name="motivation" required rows={4} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-[#0e4b9c]" placeholder="Tell us about your interest in service and leadership." />
              </label>

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#d7b26a] px-6 py-3.5 text-sm font-bold text-[#0a1f3a] transition hover:-translate-y-0.5">
                Submit application
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
