import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { NewsImage } from "@/components/NewsImage";
import { RotaryLogo } from "@/components/RotaryLogo";
import { causeData, projectData } from "@/data/site";
import { getNewsArticles } from "@/lib/news";

const stats = [
  { value: "1.2M+", label: "Rotary members worldwide, connected by purpose and service." },
  { value: "US$850M", label: "Value of volunteer hours contributed each year." },
  { value: "US$273M", label: "Global grants awarded to service initiatives each year." },
  { value: "99.9%", label: "Reduction in global polio cases since the campaign began." },
];

export default async function Home() {
  const stories = await getNewsArticles();

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091d36]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3 text-white">
            <img
              src="https://edge.sitecorecloud.io/rotaryinter069c-rotary3836-prod8518-4439/media/project/rotary/rotary-org/default-images/rotary-white-logo.svg?iar=0"
              alt="Rotary logo"
              className="h-10 w-10 rounded-full bg-white/5 p-1.5 object-contain"
            />
            <span className="flex flex-col leading-none">
              <strong className="text-[0.72rem] uppercase tracking-[0.18em]">Rotary Club</strong>
              <small className="text-xs opacity-80">of Rumuomasi</small>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#impact" className="transition hover:text-white">Impact</a>
            <a href="#news" className="transition hover:text-white">News</a>
            <a href="#join" className="transition hover:text-white">Join</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-[#d7b26a] bg-transparent px-4 py-2.5 text-sm font-bold text-[#f3d59a] transition hover:bg-white/5"
            >
              Donate
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-5 py-3 text-sm font-bold text-[#0a1f3a] shadow-[0_10px_24px_rgba(215,178,106,0.28)] transition hover:-translate-y-0.5"
            >
              Become a Member
            </Link>
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      <section id="top" className="hero-visual relative isolate flex min-h-[760px] items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80')" }}>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,24,44,0.82),rgba(8,24,44,0.38))]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-6 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#dfeaff]">
              People of Action
            </p>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Serving Rumuomasi, Rivers State, and beyond.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Rotary Club of Rumuomasi brings together leaders, professionals, and community-minded
              citizens to create meaningful change in health, education, sanitation, peace, and
              sustainable development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-6 py-3.5 font-bold text-[#0a1f3a] transition hover:-translate-y-0.5">
                Get involved
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3.5 font-bold text-white transition hover:bg-white/5">
                See our work
              </Link>
            </div>

            <ul className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <li className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <strong className="block text-lg">Community</strong>
                <span className="mt-1 block text-xs text-white/70">Local action</span>
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <strong className="block text-lg">Service</strong>
                <span className="mt-1 block text-xs text-white/70">Driven by purpose</span>
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <strong className="block text-lg">Impact</strong>
                <span className="mt-1 block text-xs text-white/70">Lasting change</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_1fr] lg:px-8">
          <div className="overflow-hidden rounded-[28px] shadow-[0_16px_40px_rgba(12,31,57,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
              alt="Rotary club volunteers supporting a community project in Rumuomasi"
              className="floating-image h-[620px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">
              About us
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">
              We are a club built on fellowship, service, and leadership.
            </h2>
            <div className="mt-6 space-y-5 text-base text-slate-600">
              <p>
                Rotary Club of Rumuomasi is part of the global Rotary movement, united by a shared
                commitment to improving lives and strengthening communities. We believe that practical
                service, rooted in compassion and collaboration, can solve real local challenges.
              </p>
              <p>
                From promoting sanitation and education to supporting public health and environmental
                action, our members dedicate time, skills, and resources to make Rumuomasi stronger,
                healthier, and more inclusive.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                { index: "01", title: "Service above self", text: "We work to meet urgent local needs with practical solutions." },
                { index: "02", title: "People of action", text: "Our members lead projects that improve health, safety, and opportunity." },
              ].map((item) => (
                <div key={item.index} className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-slate-200 bg-[#f7faff] p-4">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#0a1f3a] text-sm font-black text-white">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a1f3a]">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#edf3fa] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">
              Our causes
            </p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">
              Working across the issues that shape community life.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {causeData.map((cause) => (
              <article key={cause.title} className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_12px_28px_rgba(15,52,96,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2ff] text-xl font-black text-[#0e4b9c]">
                  ✦
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#0a1f3a]">{cause.title}</h3>
                <p className="mt-3 text-slate-600">{cause.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">
                Featured initiatives
              </p>
              <h2 className="text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">
                Recent projects that reflect our mission in action.
              </h2>
            </div>
            <Link href="/projects" className="hidden text-sm font-bold text-[#0e4b9c] md:inline-flex">
              View all projects →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr_1fr]">
            {projectData.map((project, index) => (
              <article
                key={project.slug}
                className={`${index === 0 ? "lg:row-span-2" : ""} flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,52,96,0.06)]`}
              >
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`${index === 0 ? "aspect-[16/11]" : "aspect-[4/3]"} floating-image w-full object-cover transition duration-300 hover:scale-[1.02]`}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[#0e4b9c]">
                    {project.category}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-3 block text-2xl font-bold leading-tight text-[#0a1f3a] hover:text-[#0e4b9c] md:text-[2rem]"
                  >
                    {project.title}
                  </Link>
                  <p className="mt-3 text-slate-600">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">
              Impact by the numbers
            </p>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">
              Strong service, measurable outcomes, and long-term community value.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-[22px] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_28px_rgba(15,52,96,0.04)]">
                <span className="block text-4xl font-black tracking-[-0.06em] text-[#0e4b9c] md:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-4 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#0e4b9c]">
                Rotary news
              </p>
              <h2 className="text-4xl font-black tracking-[-0.06em] text-[#0a1f3a] md:text-5xl">
                Stories from the club and the wider Rotary movement.
              </h2>
            </div>
            <Link href="/news" className="hidden text-sm font-bold text-[#0e4b9c] md:inline-flex">
              Read all news →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.slug} className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,52,96,0.04)]">
                <Link href={story.link && story.link !== "#" ? story.link : `/news/${story.slug}`} target={story.link && story.link !== "#" ? "_blank" : undefined} rel={story.link && story.link !== "#" ? "noreferrer" : undefined}>
                  <NewsImage src={story.image} alt={story.title} className="h-56 w-full object-cover" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-block text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#0e4b9c]">
                    {story.category}
                  </span>
                  <Link href={story.link && story.link !== "#" ? story.link : `/news/${story.slug}`} target={story.link && story.link !== "#" ? "_blank" : undefined} rel={story.link && story.link !== "#" ? "noreferrer" : undefined} className="mt-3 block text-2xl font-bold leading-tight text-[#0a1f3a] hover:text-[#0e4b9c]">
                    {story.title}
                  </Link>
                  <p className="mt-3 text-slate-600">{story.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="bg-[linear-gradient(135deg,#0a2d5d,#0e4b9c)] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-white/70">
              Join us
            </p>
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Bring your skills. Build your community. Be part of the change.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/join" className="inline-flex items-center justify-center rounded-full bg-[#d7b26a] px-6 py-3.5 text-sm font-bold text-[#0a1f3a] transition hover:-translate-y-0.5">
              Become a member
            </Link>
            <Link href="/donate" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              Donate now
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#081a2f] py-14 text-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <Link href="#top" className="flex items-center gap-3 text-white">
              <img
                src="https://edge.sitecorecloud.io/rotaryinter069c-rotary3836-prod8518-4439/media/project/rotary/rotary-org/default-images/rotary-white-logo.svg?iar=0"
                alt="Rotary logo"
                className="h-10 w-10 rounded-full bg-white/5 p-1.5 object-contain"
              />
              <span className="flex flex-col leading-none">
                <strong className="text-[0.72rem] uppercase tracking-[0.18em]">Rotary Club</strong>
                <small className="text-xs opacity-80">of Rumuomasi</small>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm text-white/70">
              Serving communities through people-powered action, local leadership, and practical
              solutions for a healthier, brighter future.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Explore</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#impact" className="hover:text-white">Impact</a></li>
              <li><a href="#news" className="hover:text-white">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Our focus</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#projects" className="hover:text-white">Health</a></li>
              <li><a href="#projects" className="hover:text-white">Education</a></li>
              <li><a href="#projects" className="hover:text-white">Sanitation</a></li>
              <li><a href="#projects" className="hover:text-white">Environment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Connect</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="mailto:hello@rumuomasirotary.org" className="hover:text-white">hello@rumuomasirotary.org</a></li>
              <li><a href="https://www.rotary.org/" target="_blank" rel="noreferrer" className="hover:text-white">Rotary International</a></li>
              <li><a href="https://www.instagram.com/rcrumuomasi/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Rotary Club of Rumuomasi. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
