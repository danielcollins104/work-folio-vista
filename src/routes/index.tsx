import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { companies, images, partnerships, projects, timeline } from "../lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Daniel Collins — Entrepreneur, Founder & Tech Innovator" },
    { name: "description", content: "The independent portfolio of Daniel Collins: founder, Python developer, AI builder, and creator in Minneapolis." },
    { property: "og:title", content: "Daniel Collins — Entrepreneur, Founder & Tech Innovator" },
    { property: "og:description", content: "Projects, ventures, partnerships, and the story behind Daniel Collins." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em]"><span className="size-2 rounded-full bg-accent" />Daniel Collins</a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about">Story</a><a href="#companies">Ventures</a><a href="#projects">Projects</a><a href="#partnerships">Partners</a><a href="#contact">Contact</a>
          </nav>
          <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Minneapolis · 2026</span>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-8 px-5 py-14 md:px-10 lg:min-h-[830px] lg:py-20">
          <div className="ambient ambient-one" /><div className="ambient ambient-two" />
          <div className="relative z-10 col-span-12 lg:col-span-7">
            <p className="section-kicker">The independent portfolio · No. 01</p>
            <h1 className="mt-6 font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.8] text-foreground">Daniel<br /><em className="font-normal text-primary">Collins</em></h1>
            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-muted-foreground">Entrepreneur, serial founder, and tech innovator. I build products that matter — from Python-coded casino games with fair odds to AI-powered facial manipulation and a fasting program born from personal recovery.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a className="primary-action" href="#projects">View my work <ArrowDown size={16} /></a>
              <a className="text-sm underline decoration-accent/60 underline-offset-4" href="#contact">Start a conversation</a>
            </div>
          </div>
          <div className="relative z-10 col-span-12 lg:col-span-5">
            <div className="glass-frame"><img className="aspect-[4/5] w-full rounded-md object-cover object-top" src={images.portrait} alt="Daniel Collins" /></div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[["4", "Companies"], ["5", "Live products"], ["7+", "Years building"]].map(([value,label]) => <div className="glass-panel p-4" key={label}><p className="font-display text-3xl text-primary">{value}</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell border-t border-border">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3"><p className="section-kicker">01 — The story</p><h2 className="section-title">Builder.<br/><em>Disruptor.</em><br/>Human.</h2></div>
            <div className="col-span-12 lg:col-span-6 lg:pl-8">
              <p className="story-lead">I'm Daniel Collins — entrepreneur, serial founder, and tech innovator based in Minneapolis, MN. My path to building wasn't a straight line.</p>
              <div className="mt-7 space-y-5 leading-7 text-muted-foreground"><p>I've battled homelessness, addiction, and years of being misunderstood by systems that were supposed to help. I came out the other side with something most people don't get in a classroom: real humility, compassion, and a genuine enjoyment of life.</p><p>I'm a student of teachings handed down from Biblical times. Those ancient principles are woven into everything I build — and I build with my cat, my kid, and a mission to prove that where you start doesn't determine where you end up.</p><p>None of this would exist without the presence of the Holy Spirit in my life and the people who believe in me and have my back. Their unwavering belief and God's grace are the foundation everything else is built on.</p></div>
            </div>
            <div className="col-span-12 lg:col-span-3"><div className="glass-panel flex min-h-72 flex-col justify-between p-6"><p className="font-display text-5xl leading-none text-accent">7+</p><p className="font-display text-3xl">Years of building<br/>from Minneapolis.</p><p className="meta-label">Local roots · Global products</p></div></div>
          </div>
        </section>

        <section id="companies" className="section-shell border-t border-border"><p className="section-kicker">02 — Companies & ventures</p><h2 className="section-title max-w-3xl">Four ideas made <em>real.</em></h2><div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">{companies.map(([name,role,year,description]) => <article className="bg-background p-7 md:p-9" key={name}><p className="meta-label">{role} · Founded {year}</p><h3 className="mt-4 font-display text-3xl">{name}</h3><p className="mt-4 max-w-[56ch] leading-7 text-muted-foreground">{description}</p></article>)}</div></section>

        <section id="projects" className="section-shell border-t border-border"><p className="section-kicker text-accent">03 — Featured projects</p><h2 className="section-title">What I've <em>built.</em></h2><div className="mt-14 space-y-24">{projects.map((project,index) => <article className="grid grid-cols-12 items-center gap-7 lg:gap-12" key={project.title}><div className={`col-span-12 lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}><a href={project.link} target="_blank" rel="noreferrer" className="group block glass-frame">{index === 1 ? <div className="flex aspect-[16/9] items-center justify-center rounded-md bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,.32),transparent_40%),linear-gradient(145deg,#111927,#050a14)]"><div className="text-center"><p className="font-display text-6xl text-primary">FR</p><p className="mt-2 text-xs uppercase tracking-[.25em] text-muted-foreground">AI facial manipulation</p></div></div> : <img className="aspect-[16/9] w-full rounded-md object-cover object-top transition duration-500 group-hover:scale-[1.015]" src={project.image} alt={`${project.title} project preview`}/>}</a></div><div className={`col-span-12 lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}><p className="meta-label">Live project · {String(index + 1).padStart(2,"0")}</p><h3 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{project.title}</h3><p className="mt-2 text-primary">{project.subtitle}</p><p className="mt-5 leading-7 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="mt-7 flex flex-wrap gap-8">{project.stats.map(([value,label]) => <div key={label}><p className="font-display text-2xl text-primary">{value}</p><p className="meta-label">{label}</p></div>)}</div><a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary" href={project.link} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={16}/></a></div></article>)}</div></section>

        <section className="section-shell border-t border-border"><div className="grid grid-cols-12 gap-8"><div className="col-span-12 lg:col-span-4"><p className="section-kicker">04 — Journey</p><h2 className="section-title">The long way <em>forward.</em></h2></div><div className="col-span-12 lg:col-span-8">{timeline.map(([year,title,desc]) => <article className="grid gap-3 border-t border-border py-7 md:grid-cols-[9rem_1fr]" key={year}><p className="font-display text-2xl text-primary">{year}</p><div><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{desc}</p></div></article>)}</div></div></section>

        <section id="partnerships" className="section-shell border-t border-border"><p className="section-kicker">05 — Strategic partnerships</p><h2 className="section-title">Built with a <em>network.</em></h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{partnerships.map(([name,type,desc]) => <article className="glass-panel p-6" key={name}><p className="meta-label text-primary">{type}</p><h3 className="mt-3 font-display text-2xl">{name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p></article>)}</div></section>

        <section id="contact" className="section-shell border-t border-border"><div className="grid grid-cols-12 items-end gap-8"><div className="col-span-12 lg:col-span-7"><p className="section-kicker text-accent">06 — Contact</p><h2 className="section-title max-w-4xl">Let's build something <em>worth shipping.</em></h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Whether you're looking to partner, invest, collaborate, or just want to talk tech — I'm always open to meaningful conversations.</p></div><div className="col-span-12 space-y-3 lg:col-span-5"><a className="primary-action w-full justify-between" href="mailto:danielcollins104@gmail.com"><span className="inline-flex items-center gap-3"><Mail size={17}/>danielcollins104@gmail.com</span><ArrowUpRight size={17}/></a><div className="glass-panel flex items-center gap-3 p-4 text-sm text-muted-foreground"><MapPin size={17} className="text-accent"/>Minneapolis, MN · Remote-First</div></div></div></section>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 px-5 py-7 text-xs uppercase tracking-[0.12em] text-muted-foreground md:flex-row md:px-10"><span>© 2026 Daniel Collins · Nexus Digital Labs</span><a href="https://github.com/danielcollins104" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </div>
  );
}
