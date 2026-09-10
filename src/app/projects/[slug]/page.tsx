import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageWheel } from "@/components/ImageWheel";
import { RotaryLogo } from "@/components/RotaryLogo";
import { projectData } from "@/data/site";

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projectData.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

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
            <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-[#0e4b9c] px-4 py-2 text-sm font-bold text-[#0e4b9c]">Back to projects</Link>
            <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-4 py-2 text-sm font-bold text-[#0a1f3a]">Become a Member</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(12,31,57,0.08)]">
          <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-[#dfeaff] px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">{project.category}</span>
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">{project.title}</h1>
              <p className="mt-5 text-lg text-slate-600">{project.summary}</p>
              <p className="mt-5 text-base leading-8 text-slate-700">{project.details}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-6 py-3.5 text-sm font-bold text-[#0a1f3a]">Join the club</Link>
                <Link href="/donate" className="inline-flex items-center justify-center rounded-full border border-[#0e4b9c] px-6 py-3.5 text-sm font-bold text-[#0e4b9c]">Support this cause</Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ImageWheel images={gallery} size={420} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {project.highlights.map((item) => (
            <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(12,31,57,0.04)]">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">Outcome</p>
              <p className="mt-4 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
