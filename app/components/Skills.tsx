// app/components/Skills.tsx
import { skillGroups } from "./constants";

export default function Skills() {
  return (
    <section className="py-10 border-b border-slate-900/60">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Capabilities & Tooling</h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">Engineering Engine Matrix</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-2xl border border-slate-900 bg-slate-950/30 p-5 hover:border-slate-800 transition">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300 border border-slate-800/60 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
