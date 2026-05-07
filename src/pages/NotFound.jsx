import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";

export function NotFound() {
  return (
    <section className="mx-auto grid min-h-[76vh] max-w-3xl place-items-center px-4 pb-20 pt-40 sm:px-6 md:pt-32">
      <GlassCard className="p-8 text-center">
        <p className="font-mono text-sm uppercase text-rose-300">404</p>
        <h1 className="mt-3 font-mono text-4xl font-black text-white">Route not found</h1>
        <p className="mt-4 leading-7 text-zinc-300">
          This page does not exist in the portfolio router. Use the navigation bar or return home.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-mono text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>
      </GlassCard>
    </section>
  );
}
