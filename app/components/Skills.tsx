import SectionHeading from "./SectionHeading";
import { skillGroups } from "./site-data";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Tools for learning and building."
        description="A practical stack focused on programming, AI and day-to-day engineering."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-800 p-8"
          >
            <h3 className="text-xl font-semibold text-slate-100">
              {group.title}
            </h3>

            <ul className="mt-6 space-y-4">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}