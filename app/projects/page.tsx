// app/projects/page.tsx
import { projects } from "@/app/components/constants";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="py-10 space-y-10 max-w-6xl mx-auto w-full">
      {/* Dynamic Dashboard Title */}
      <div className="space-y-1 border-b border-slate-900/60 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Systems Catalog
        </h1>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mt-2">
          Production Repositories & Operational Builds
        </p>
      </div>

      {/* Complete Project Inventory Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col rounded-2xl border border-slate-900 bg-slate-950/30 p-6 hover:border-slate-800 transition duration-200"
          >
            <div className="flex-grow">
              <h2 className="text-lg font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-md bg-blue-950/30 px-2 py-0.5 text-[11px] font-medium text-blue-400 border border-blue-900/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {project.link !== "#" ? (
              <div className="mt-4 pt-4 border-t border-slate-900/60">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1"
                >
                  Explore Codebase &rarr;
                </a>
              </div>
            ) : (
              <div className="mt-4 pt-4 border-t border-slate-900/40 flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold text-amber-500/80 uppercase tracking-wider bg-amber-950/20 px-2 py-0.5 rounded border border-amber-900/20">
                  R&D In Progress
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
