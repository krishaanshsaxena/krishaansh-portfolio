// app/components/Timeline.tsx
import { timeline } from "./constants";

export default function Timeline() {
  return (
    <section className="py-10 border-b border-slate-900/60">
      {/* Signature Section Header */}
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Engineering Roadmap
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Chronological Pipeline Execution
        </p>
      </div>

      {/* Minimalist node pathway */}
      <div className="relative border-l border-slate-900 ml-3 pl-6 space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="relative group">
            {/* The active intersection point node marker */}
            <div className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full bg-blue-500 ring-4 ring-slate-950 transition duration-200 group-hover:scale-125" />
            
            <div className="max-w-2xl rounded-2xl border border-slate-900/40 bg-slate-950/10 p-5 group-hover:border-slate-800 transition duration-200">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {item.period}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight mt-3">
                {item.institution}
              </h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {item.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
