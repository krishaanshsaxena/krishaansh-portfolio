// app/resume/page.tsx
import { skillGroups, timeline } from "@/app/components/constants";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="py-10 space-y-12 w-full">
      {/* Title block with actionable placeholder */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900/60 pb-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Profile Matrix</h1>
          <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mt-1">Verification Records</p>
        </div>
        <button 
          disabled 
          className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-2 text-xs font-mono font-bold text-slate-500 cursor-not-allowed uppercase tracking-wider"
        >
          PDF Compiling Soon
        </button>
      </div>

      {/* Education Segments */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-white border-b border-slate-900 pb-2">Academic Enrolments</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item, index) => (
            <div key={index} className="rounded-2xl border border-slate-900 bg-slate-950/20 p-6">
              <h3 className="text-lg font-bold text-white">{item.institution}</h3>
              <p className="text-sm text-slate-400 mt-1">{item.degree}</p>
              <p className="text-[11px] font-mono text-slate-500 mt-4 uppercase tracking-wider bg-slate-900 py-1 px-2 rounded inline-block border border-slate-800/60">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Array Grids */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-white border-b border-slate-900 pb-2">Technical Inventories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-2xl border border-slate-900 bg-slate-950/30 p-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-900 pb-2">
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
      </div>
    </div>
  );
}
