import { GlassCard } from "../components/GlassCard";
import { skillGroups } from "../data/siteData";
import { PageShell } from "./PageShell";

export function Arsenal() {
  return (
    <PageShell
      eyebrow="technical arsenal"
      title="Systems-minded, AI-ready stack"
      intro="Practical tooling across software, infrastructure, language, and security."
    >
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
    </PageShell>
  );
}
