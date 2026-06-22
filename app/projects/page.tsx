import type { Metadata } from "next";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../components/site-data";

export const metadata: Metadata = {
  title: "Projects | Krishaansh Saxena",
  description:
    "Projects by Krishaansh Saxena across portfolio work, data tools, statistics and machine learning learning systems.",
};

export default function ProjectsPage() {
  return (
    <div className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Projects built for practice, clarity and growth."
        description="This page is structured for easy expansion as new work becomes ready to share."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
