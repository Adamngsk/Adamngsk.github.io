import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems, profile } from "../data/siteData";

function navClass({ isActive }) {
  return `rounded-md px-2 py-1 transition ${
    isActive ? "bg-cyan-300/10 text-cyan-200" : "text-zinc-300 hover:text-cyan-200"
  }`;
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3 font-mono text-sm font-bold text-white" to="/">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">Adam Ng Shu Kai</span>
        </NavLink>

        <div className="hidden items-center gap-4 font-mono text-sm md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} className={navClass} end={item.to === "/"} to={item.to}>
              {item.label}
            </NavLink>
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

      <div className="border-t border-white/10 px-4 py-2 md:hidden">
        <div className="mx-auto grid max-w-[21.5rem] grid-cols-2 gap-2 text-center font-mono text-xs">
          {navItems.map((item) => (
            <NavLink key={item.to} className={navClass} end={item.to === "/"} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
