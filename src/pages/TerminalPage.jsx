import { Terminal } from "../components/Terminal";
import { PageShell } from "./PageShell";

export function TerminalPage() {
  return (
    <PageShell
      eyebrow="interactive terminal"
      title="Try a command"
      intro="Hidden facts, profile data, and a small shell-style interface."
    >
      <Terminal />
    </PageShell>
  );
}
