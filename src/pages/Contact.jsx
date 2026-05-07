import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { profile } from "../data/siteData";
import { PageShell } from "./PageShell";

export function Contact() {
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
    <PageShell
      eyebrow="contact"
      title="Build something resilient"
      intro="Reach out for full-stack work, systems support, AI tooling, or student collaboration."
    >
      <div className="grid w-full max-w-[calc(100vw-2rem)] gap-6 sm:mx-auto sm:max-w-none lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard className="w-full max-w-full p-6">
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

        <GlassCard className="w-full max-w-full p-6">
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
    </PageShell>
  );
}
