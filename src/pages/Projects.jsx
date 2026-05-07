import { GlassCard } from "../components/GlassCard";
import { projects } from "../data/siteData";
import { PageShell } from "./PageShell";

export function Projects() {
  return (
    <PageShell
      eyebrow="key projects"
      title="Deployments, agents, and usable web systems"
      intro="Three current flagship directions for infrastructure, AI, and full-stack work."
    >
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
    </PageShell>
  );
}
