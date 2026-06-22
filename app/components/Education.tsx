// app/components/Education.tsx
import { timeline } from "./constants";

export default function Education() {
  return (
    <section className="py-10 border-b border-slate-900/60">
      {/* Signature Section Header */}
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Academic Training
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Institutional Records
        </p>
      </div>

      {/* Grid Container matching your standard style blocks */}
      <div className="grid gap-6 md:grid-cols-2">
        {timeline.map((item, index) => (
          <div 
            key={index}
            className="rounded-2xl border border-slate-900 bg-slate-950/30 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {item.institution}
              </h3>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {item.degree}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Status
              </span>
              <span className="rounded-md bg-blue-950/40 px-2 py-0.5 text-[11px] font-mono font-medium text-blue-400 border border-blue-900/30">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
