const stats = [
  {
    value: "2+",
    label: "Years Learning",
  },

  {
    value: "5+",
    label: "Projects",
  },

  {
    value: "2029",
    label: "Graduation",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 p-10"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {stat.value}
            </h2>

            <p className="mt-4 text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}