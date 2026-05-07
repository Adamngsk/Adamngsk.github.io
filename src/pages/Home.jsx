import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";
import { highlights, metrics } from "../data/siteData";

const MotionDiv = motion.div;

export function Home() {
  return (
    <>
      <section className="mx-auto min-h-[88vh] max-w-7xl px-4 pb-16 pt-40 sm:px-6 md:pt-32 lg:px-8">
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
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-mono text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
              >
                <Braces className="h-4 w-4" />
                View Projects
              </Link>
              <Link
                to="/terminal"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-mono text-sm font-bold text-zinc-100 transition hover:border-lime-300/40 hover:text-lime-200"
              >
                <ArrowUpRight className="h-4 w-4" />
                Open Terminal
              </Link>
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

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
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
    </>
  );
}
