import SectionHeading from "./SectionHeading";
import { timeline } from "./site-data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-32">
      <SectionHeading
        eyebrow="Timeline"
        title="A long-term learning arc."
        description="The roadmap is intentionally simple: learn deeply, build steadily and keep compounding."
      />

      <ol className="relative mt-12 space-y-12 border-l border-slate-800 pl-8">
        {timeline.map((item) => (
          <li key={item.year} className="relative">
            <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-4 border-slate-800 bg-blue-500" />
            <time className="text-sm font-semibold text-blue-400">
              {item.year}
            </time>
            <p className="mt-2 text-xl font-medium text-slate-100">
              {item.title}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
