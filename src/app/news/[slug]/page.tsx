import Link from "next/link";
import { notFound } from "next/navigation";
import { RotaryLogo } from "@/components/RotaryLogo";
import { getNewsArticles } from "@/lib/news";

export default async function NewsDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stories = await getNewsArticles();
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

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
          <div className="flex items-center gap-3">
            <Link href="/news" className="inline-flex items-center justify-center rounded-full border border-[#0e4b9c] px-4 py-2 text-sm font-bold text-[#0e4b9c]">Back to news</Link>
            <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-4 py-2 text-sm font-bold text-[#0a1f3a]">Become a Member</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(12,31,57,0.08)]">
          <img src={story.image} alt={story.title} className="h-[420px] w-full object-cover" />
          <div className="p-6 md:p-8">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">{story.category}</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">{story.title}</h1>
            <p className="mt-5 text-lg text-slate-600">{story.excerpt}</p>
            <p className="mt-5 text-base leading-8 text-slate-700">{story.body}</p>
            <div className="mt-8">
              <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-6 py-3.5 text-sm font-bold text-[#0a1f3a]">Join the club</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
