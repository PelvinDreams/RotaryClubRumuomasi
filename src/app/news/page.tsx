import Link from "next/link";
import { NewsImage } from "@/components/NewsImage";
import { RotaryLogo } from "@/components/RotaryLogo";
import { getNewsArticles } from "@/lib/news";

export default async function NewsPage() {
  const stories = await getNewsArticles();

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
            <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-4 py-2 text-sm font-bold text-[#0a1f3a]">Become a Member</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">Rotary news</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">Stories, voices, and community action</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article key={story.slug} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(12,31,57,0.06)]">
              <Link href={story.link && story.link !== "#" ? story.link : `/news/${story.slug}`} target={story.link && story.link !== "#" ? "_blank" : undefined} rel={story.link && story.link !== "#" ? "noreferrer" : undefined}>
                <NewsImage src={story.image} alt={story.title} className="h-64 w-full object-cover" />
              </Link>
              <div className="p-6">
                <span className="inline-block text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#0e4b9c]">{story.category}</span>
                <Link href={story.link && story.link !== "#" ? story.link : `/news/${story.slug}`} target={story.link && story.link !== "#" ? "_blank" : undefined} rel={story.link && story.link !== "#" ? "noreferrer" : undefined} className="mt-3 block text-2xl font-bold text-[#0a1f3a] hover:text-[#0e4b9c]">
                  {story.title}
                </Link>
                <p className="mt-3 text-slate-600">{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
