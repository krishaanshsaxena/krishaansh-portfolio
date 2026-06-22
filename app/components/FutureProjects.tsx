// app/components/FutureProjects.tsx
import { projects } from "./constants";

export default function FutureProjects() {
  // Filters or selects items that are slated for upcoming implementation (# placeholders)
  const dynamicBacklog = projects.filter(project => project.link === "#").slice(0, 3);

  return (
    <section className="py-10 border-b border-slate-900/60">
      {/* Signature Section Header */}
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          System Backlog
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Planned Deployments & R&D
        </p>
      </div>

      {/* Multi-column grid tracking elements cleanly */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dynamicBacklog.map((item) => (
          <div 
            key={item.id}
            className="flex flex-col rounded-2xl border border-slate-900 bg-slate-950/10 p-6 hover:border-slate-800 transition duration-200"
          >
            <div className="flex-grow">
              <h3 className="text-base font-bold text-slate-200 tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-900/40 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] font-medium text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800/40">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[10px] font-mono font-semibold text-amber-500/80 uppercase tracking-wider bg-amber-950/20 px-2 py-0.5 rounded border border-amber-900/20">
                In Queue
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
