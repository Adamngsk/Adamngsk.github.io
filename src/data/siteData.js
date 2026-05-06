import {
  Blocks,
  Bot,
  BrainCircuit,
  Bug,
  Code2,
  Cpu,
  DatabaseZap,
  GraduationCap,
  Languages,
  Laptop,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Users,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Adam Ng Shu Kai",
  initials: "ANG",
  location: "Saint Paul, MN",
  email: "adamngsk@gmail.com",
  phone: "(612) 402-7280",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export const navItems = [
  { label: "Arsenal", href: "#arsenal" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "150+", label: "machines maintained" },
  { value: "20", label: "cluster nodes planned" },
  { value: "4", label: "spoken languages" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    accent: "text-cyan-300",
    border: "border-cyan-300/25",
    skills: [
      "Python",
      "R",
      "Java",
      "JavaScript",
      "English",
      "Cantonese",
      "Malay",
    ],
  },
  {
    title: "Systems",
    icon: ServerCog,
    accent: "text-lime-300",
    border: "border-lime-300/25",
    skills: [
      "Linux: Fedora, Arch, CachyOS",
      "Warewulf Clustering",
      "PXE Booting",
      "Bash/Zsh scripting",
    ],
  },
  {
    title: "Specializations",
    icon: ShieldCheck,
    accent: "text-rose-300",
    border: "border-rose-300/25",
    skills: [
      "Data Science",
      "Binary Exploitation",
      "RAG/Agentic Frameworks",
      "Cybersecurity",
    ],
  },
];

export const projects = [
  {
    title: "Linux Cluster Deployment",
    status: "Infrastructure",
    icon: Network,
    stack: ["Ubuntu", "PXE", "Warewulf", "Containers"],
    description:
      "Deploying a Linux compute cluster with PXE booting, containerized node images, and repeatable provisioning for lab-scale workloads.",
  },
  {
    title: "AI/RAG Framework",
    status: "AI Systems",
    icon: Bot,
    stack: ["Local LLMs", "Vector Search", "Agents", "Python"],
    description:
      "Designing a local LLM workflow that combines retrieval-augmented generation, prompt routing, and tool-aware agent patterns.",
  },
  {
    title: "Accounting Club Portal",
    status: "Web",
    icon: Layers3,
    stack: ["React", "Three.js", "Forms", "Automation"],
    description:
      "A club operations portal with Three.js motion, automated membership forms, and streamlined admin workflows.",
  },
];

export const experience = [
  {
    role: "Comp Sci and Data Sci Student Technician",
    org: "University of St. Thomas Computer and Data Science Department",
    time: "May 2025 - Present",
    icon: Wrench,
    bullets: [
      "Maintained and repaired 150+ student and faculty machines across hardware and software issues.",
      "Prepared classroom and project equipment for reliable lab usage.",
      "Supported peers with equipment operation, troubleshooting, and workflow blockers.",
    ],
  },
  {
    role: "Residential Advisor",
    org: "University of St. Thomas",
    time: "Jan 2026 - Present",
    icon: Users,
    bullets: [
      "Oversee floor operations in Brady Hall with a focus on inclusive community standards.",
      "Organize events that build peer connection and campus belonging.",
      "Serve as a first responder for conflict resolution and emergency situations.",
    ],
  },
];

export const highlights = [
  { label: "Education", value: "B.S. Computer Science & Data Science", icon: GraduationCap },
  { label: "AI", value: "LLM implementation, RAG, agentic workflows", icon: BrainCircuit },
  { label: "Systems", value: "Linux, Bash/Zsh, clustering, audits", icon: Cpu },
  { label: "Security", value: "Cybersecurity, binary exploitation, data integrity", icon: Bug },
  { label: "Research", value: "UR2PhD pre-research completion", icon: DatabaseZap },
  { label: "Communication", value: "English, Chinese, Cantonese, Malay", icon: Languages },
];

export const terminalFacts = [
  "Currently building toward AI, information security, and deployable systems work.",
  "Comfortable moving between hardware support, Linux infrastructure, and full-stack interfaces.",
  "Packaged a real-time gesture recognition app into a standalone executable.",
  "Research prep includes technical paper reading, literature search, and data visualization.",
];

export const quickCommands = [
  { command: "help", description: "list commands" },
  { command: "about", description: "short bio" },
  { command: "skills", description: "top stack" },
  { command: "facts", description: "easter eggs" },
  { command: "contact", description: "email" },
  { command: "clear", description: "reset terminal" },
];

export const commandIcons = {
  TerminalSquare,
  Blocks,
  Laptop,
};
