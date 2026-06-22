// app/components/Stats.tsx
import { stats } from "./constants";
//1
export default function Stats() {
  return (
    <section className="py-16 border-t border-slate-900">
      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8 text-center sm:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-500 tracking-tight">
              {stat.value}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
