import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { GlassCard } from "./components/GlassCard";
import { SectionHeader } from "./components/SectionHeader";
import { Terminal } from "./components/Terminal";
import {
  experience,
  highlights,
  metrics,
  navItems,
  profile,
  projects,
  skillGroups,
} from "./data/siteData";

const MotionDiv = motion.div;

function App() {
  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const subject = formData.get("subject") || "Portfolio inquiry";
    const message = formData.get("message");
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Hi Adam,\n\n${message}\n\nFrom: ${name}`,
    )}`;
    window.location.href = mailto;
  }

  return (
    <main className="relative overflow-hidden text-zinc-100">
      <div className="fixed inset-0 -z-10 bg-zinc-950/88" />
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3 font-mono text-sm font-bold text-white" href="#top">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">Adam Ng Shu Kai</span>
          </a>
          <div className="hidden items-center gap-6 font-mono text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-cyan-200" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-lime-300/30 bg-lime-300/10 px-3 py-2 font-mono text-sm text-lime-200 transition hover:bg-lime-300/15"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </nav>
      </div>

      <section id="top" className="mx-auto min-h-[88vh] max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionDiv
            className="min-w-0 max-w-[21.5rem] sm:max-w-none"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 font-mono text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Computer Science + Data Science
            </p>
            <h1 className="max-w-full font-mono text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
              <span className="block sm:inline">Adam Ng</span>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">Shu Kai</span>
            </h1>
            <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-zinc-300 sm:text-xl">
              Developer and systems builder focused on AI/LLM implementation, retrieval-augmented
              workflows, Linux administration, and practical data science.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-mono text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
              >
                <Braces className="h-4 w-4" />
                View Projects
              </a>
              <a
                href="#terminal"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-mono text-sm font-bold text-zinc-100 transition hover:border-lime-300/40 hover:text-lime-200"
              >
                <ArrowUpRight className="h-4 w-4" />
                Open Terminal
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            className="glass-panel min-w-0 max-w-[21.5rem] rounded-lg p-5 shadow-glow sm:max-w-none"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="border-b border-white/10 pb-4 font-mono text-sm text-cyan-200">
              profile.config
            </div>
            <div className="grid gap-4 py-5">
              {highlights.slice(0, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex min-w-0 gap-4 rounded-md border border-white/10 bg-black/25 p-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-lime-300" />
                    <div className="min-w-0">
                      <p className="font-mono text-sm text-zinc-400">{item.label}</p>
                      <p className="mt-1 break-words text-zinc-100">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-md bg-white/[0.04] p-3">
                  <p className="font-mono text-2xl font-black text-white">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase text-zinc-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <section id="arsenal" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="technical arsenal" title="Systems-minded, AI-ready stack">
          Practical tooling across software, infrastructure, language, and security.
        </SectionHeader>
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <GlassCard key={group.title} className={`p-6 ${group.border}`} delay={index * 0.08}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-mono text-2xl font-black text-white">{group.title}</h3>
                  <Icon className={`h-7 w-7 ${group.accent}`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="max-w-full break-words rounded-md border border-white/10 bg-black/25 px-3 py-2 font-mono text-sm text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="key projects" title="Deployments, agents, and usable web systems">
          Three current flagship directions for infrastructure, AI, and full-stack work.
        </SectionHeader>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <GlassCard key={project.title} className="flex h-full flex-col p-6" delay={index * 0.08}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-sm text-cyan-300">{project.status}</p>
                    <h3 className="mt-2 font-mono text-2xl font-black text-white">
                      {project.title}
                    </h3>
                  </div>
                  <Icon className="h-7 w-7 shrink-0 text-lime-300" />
                </div>
                <p className="leading-7 text-zinc-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span key={tool} className="max-w-full break-words rounded-md bg-white/[0.06] px-3 py-2 font-mono text-xs text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="professional experience" title="Leadership with hands-on operations">
          Hardware maintenance, system auditing, community management, and calm incident response.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.role} className="p-6" delay={index * 0.08}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10">
                        <Icon className="h-6 w-6 text-cyan-200" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-mono text-xl font-black text-white">{item.role}</h3>
                        <p className="mt-1 break-words text-zinc-300">{item.org}</p>
                      </div>
                    </div>
                    <p className="font-mono text-sm text-lime-300">{item.time}</p>
                  </div>
                  <ul className="mt-5 space-y-3 text-zinc-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="overflow-hidden">
            <div className="p-6">
              <p className="font-mono text-sm uppercase text-rose-300">credential</p>
              <h3 className="mt-3 font-mono text-2xl font-black text-white">
                UR2PhD Pre-Research Completion
              </h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Computing research preparation covering technical paper reading, literature
                searching, and analysis of experimental data.
              </p>
            </div>
            <img
              className="h-auto w-full border-t border-white/10 object-cover"
              src="/assets/pre-rec-certification.png"
              alt="UR2PhD Computing Research Association certificate for Adam Ng"
              loading="lazy"
            />
          </GlassCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="system profile" title="Breadth that compounds">
          A compact map of the strengths behind the portfolio.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.label} className="p-5" delay={index * 0.04}>
                <Icon className="h-6 w-6 text-cyan-300" />
                <p className="mt-5 font-mono text-sm text-zinc-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="interactive terminal" title="Try a command">
          Hidden facts, profile data, and a small shell-style interface.
        </SectionHeader>
        <Terminal />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="contact" title="Build something resilient">
          Reach out for full-stack work, systems support, AI tooling, or student collaboration.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <GlassCard className="p-6">
            <h3 className="font-mono text-2xl font-black text-white">Direct links</h3>
            <div className="mt-6 space-y-3">
              <a className="flex min-w-0 items-center gap-3 rounded-md border border-white/10 p-4 text-zinc-200 transition hover:border-cyan-300/35 hover:text-cyan-200" href={`mailto:${profile.email}`}>
                <Mail className="h-5 w-5 shrink-0" />
                <span className="min-w-0 break-all">{profile.email}</span>
              </a>
              <a className="flex min-w-0 items-center gap-3 rounded-md border border-white/10 p-4 text-zinc-200 transition hover:border-lime-300/35 hover:text-lime-200" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                <Phone className="h-5 w-5 shrink-0" />
                <span className="min-w-0 break-words">{profile.phone}</span>
              </a>
              <a className="flex items-center gap-3 rounded-md border border-white/10 p-4 text-zinc-200 transition hover:border-rose-300/35 hover:text-rose-200" href={profile.github} target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a className="flex items-center gap-3 rounded-md border border-white/10 p-4 text-zinc-200 transition hover:border-cyan-300/35 hover:text-cyan-200" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <div className="flex items-center gap-3 rounded-md border border-white/10 p-4 text-zinc-300">
                <MapPin className="h-5 w-5" />
                {profile.location}
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <form className="grid gap-4" onSubmit={handleContactSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-sm text-zinc-300">Name</span>
                  <input
                    className="rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/60"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-sm text-zinc-300">Subject</span>
                  <input
                    className="rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/60"
                    name="subject"
                    placeholder="Project idea"
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="font-mono text-sm text-zinc-300">Message</span>
                <textarea
                  className="min-h-40 resize-y rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/60"
                  name="message"
                  placeholder="Tell me what you want to build."
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-lime-300 px-5 py-3 font-mono text-sm font-bold text-zinc-950 transition hover:bg-lime-200"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center font-mono text-sm text-zinc-500">
        <p>© 2026 Adam Ng Shu Kai. Built with React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </main>
  );
}

export default App;
