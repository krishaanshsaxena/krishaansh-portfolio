type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-blue-500/60">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
