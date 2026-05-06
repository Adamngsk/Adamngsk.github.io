import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw, SendHorizontal, TerminalSquare } from "lucide-react";
import { profile, quickCommands, terminalFacts } from "../data/siteData";

const MotionDiv = motion.div;

const bootLines = [
  "adamng.dev shell v1.0.0",
  "session: portfolio://developer-centric",
  "type `help` to inspect available commands",
];

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: bootLines.join("\n") },
  ]);
  const inputRef = useRef(null);

  const commandMap = useMemo(
    () => ({
      help: quickCommands.map((item) => `${item.command.padEnd(8)} ${item.description}`).join("\n"),
      about:
        "Adam Ng Shu Kai is a Computer Science & Data Science student focused on AI/LLM implementation, RAG systems, Linux administration, and secure deployment workflows.",
      skills:
        "Python, R, Java, JavaScript, Linux, Warewulf, Bash/Zsh, data science, binary exploitation, cybersecurity, and local LLM tooling.",
      facts: terminalFacts.map((fact, index) => `[${index + 1}] ${fact}`).join("\n"),
      contact: `${profile.email} | ${profile.location}`,
      whoami: "student-technician / resident-advisor / builder-of-useful-systems",
      clear: "CLEAR",
    }),
    [],
  );

  function runCommand(command) {
    const normalized = command.trim().toLowerCase();
    if (!normalized) return;

    if (normalized === "clear") {
      setHistory([{ type: "system", content: bootLines.join("\n") }]);
      return;
    }

    const response =
      commandMap[normalized] ??
      `command not found: ${normalized}\ntry: help`;

    setHistory((current) => [
      ...current,
      { type: "command", content: normalized },
      { type: "response", content: response },
    ]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    runCommand(input);
    setInput("");
  }

  function handleQuickCommand(command) {
    runCommand(command);
    inputRef.current?.focus();
  }

  return (
    <div className="glass-panel overflow-hidden rounded-lg border-cyan-300/20" id="terminal">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-lime-300" />
          </div>
          <div className="flex items-center gap-2 font-mono text-sm text-zinc-200">
            <TerminalSquare className="h-4 w-4 text-cyan-300" />
            adam@portfolio:~
          </div>
        </div>
        <button
          className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          type="button"
          aria-label="Reset terminal"
          onClick={() => setHistory([{ type: "system", content: bootLines.join("\n") }])}
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div
        className="terminal-scrollbar min-h-[22rem] overflow-y-auto bg-zinc-950/65 p-4 font-mono text-sm leading-6 text-zinc-200 md:min-h-[26rem]"
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence initial={false}>
          {history.map((entry, index) => (
            <MotionDiv
              key={`${entry.type}-${index}-${entry.content}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="mb-3 whitespace-pre-wrap break-words"
            >
              {entry.type === "command" ? (
                <span className="text-lime-300">
                  <ArrowRight className="mr-2 inline h-4 w-4" />
                  {entry.content}
                </span>
              ) : (
                <span className={entry.type === "system" ? "text-cyan-200" : "text-zinc-200"}>
                  {entry.content}
                </span>
              )}
            </MotionDiv>
          ))}
        </AnimatePresence>

        <form className="mt-4 flex items-center gap-2" onSubmit={handleSubmit}>
          <span className="text-lime-300">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-w-0 flex-1 border-0 bg-transparent text-zinc-100 outline-none placeholder:text-zinc-500"
            placeholder="help"
            autoComplete="off"
            aria-label="Terminal command"
          />
          <button
            type="submit"
            className="rounded-md border border-cyan-300/25 p-2 text-cyan-200 transition hover:bg-cyan-300/10"
            aria-label="Run terminal command"
          >
            <SendHorizontal className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="grid gap-2 border-t border-white/10 bg-black/30 p-3 sm:grid-cols-3 lg:grid-cols-6">
        {quickCommands.map((item) => (
          <button
            key={item.command}
            type="button"
            onClick={() => handleQuickCommand(item.command)}
            className="rounded-md border border-white/10 px-3 py-2 text-left font-mono text-xs text-zinc-300 transition hover:border-lime-300/40 hover:text-lime-200"
            title={item.description}
          >
            {item.command}
          </button>
        ))}
      </div>
    </div>
  );
}
