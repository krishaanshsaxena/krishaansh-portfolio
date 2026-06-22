import type { Metadata } from "next";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects, skillGroups } from "../components/site-data";

export const metadata: Metadata = {
  title: "Resume | Krishaansh Saxena",
  description:
    "Resume overview for Krishaansh Pushkarprabhat Saxena, B.Tech CSE (AI & ML) student at KIIT University.",
};

export default function ResumePage() {
  return (
    <div className="py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Resume"
          title="Krishaansh Pushkarprabhat Saxena"
          description="B.Tech Computer Science Engineering (AI & ML), KIIT University. Expected graduation: June 2029."
        />
        <button
          type="button"
          disabled
          className="w-fit rounded-md border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-400"
        >
          Resume PDF coming soon
        </button>
      </div>

      <section className="mt-16 border-t border-slate-800 pt-10">
        <h2 className="text-2xl font-semibold text-slate-100">Education</h2>
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/35 p-6">
          <p className="font-semibold text-slate-100">KIIT University</p>
          <p className="mt-2 text-slate-400">
            B.Tech Computer Science Engineering (AI & ML)
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Expected Graduation: June 2029
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-slate-800 pt-10">
        <h2 className="text-2xl font-semibold text-slate-100">Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-slate-800 bg-slate-900/35 p-6"
            >
              <h3 className="font-semibold text-slate-100">{group.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-slate-800 pt-10">
        <h2 className="text-2xl font-semibold text-slate-100">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-slate-800 pt-10">
        <h2 className="text-2xl font-semibold text-slate-100">Achievements</h2>
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/35 p-6 text-slate-400">
          Achievements will be added here as they become ready to share.
        </div>
      </section>
    </div>
  );
}
