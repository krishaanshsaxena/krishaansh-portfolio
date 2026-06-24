// app/components/Hero.tsx
import { HERO } from "./constants";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 space-y-4 max-w-3xl">
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-900/30">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        Open for Research & Core Engineering Roles
      </span>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
        {HERO.name}
      </h1>
      <p className="text-lg sm:text-2xl font-semibold text-slate-300 tracking-tight">
        Building the future with <span className="text-blue-500">Intelligence & Math.</span>
      </p>
      <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
        {HERO.bio} Exploring data engineering life cycles, mathematical modeling pipelines, and quantitative workflows.
      </p>
    </section>
  );
}
