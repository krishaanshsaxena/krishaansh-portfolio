// app/components/Stats.tsx
import { stats } from "./constants";

export default function Stats() {
  return (
    /* REMOVED 'border-t' and added 'border-b border-slate-900/60 last:border-b-0' 
       to cleanly synchronize with the rest of your system components */
    <section className="py-10 border-b border-slate-900/60 last:border-b-0">
      
      {/* Signature Section Header */}
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          System Metrics
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Telemetry & Operational Scale
        </p>
      </div>

      {/* Synchronized Card Matrix Grid */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-900 bg-slate-950/30 p-6 text-center sm:text-left flex flex-col justify-between hover:border-slate-800 transition duration-200"
          >
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              {stat.label}
            </span>
            <h3 className="text-4xl sm:text-5xl font-black text-blue-500 tracking-tight mt-4">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
