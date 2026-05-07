import { GlassCard } from "../components/GlassCard";
import { experience } from "../data/siteData";
import { PageShell } from "./PageShell";

export function Experience() {
  const certificateSrc = `${import.meta.env.BASE_URL}assets/pre-rec-certification.png`;

  return (
    <PageShell
      eyebrow="professional experience"
      title="Leadership with hands-on operations"
      intro="Hardware maintenance, system auditing, community management, and calm incident response."
    >
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
            src={certificateSrc}
            alt="UR2PhD Computing Research Association certificate for Adam Ng"
            loading="lazy"
          />
        </GlassCard>
      </div>
    </PageShell>
  );
}
