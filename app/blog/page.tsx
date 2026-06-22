import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import { blogPosts } from "../components/site-data";

export const metadata: Metadata = {
  title: "Blog | Krishaansh Saxena",
  description:
    "Future writing by Krishaansh Saxena on machine learning, statistics, finance and software fundamentals.",
};

export default function BlogPage() {
  return (
    <div className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Blog"
        title="Notes and essays, prepared for future posts."
        description="No fake articles yet. These placeholders reserve space for real writing as the learning library grows."
      />

      <div className="mt-12 divide-y divide-slate-800 rounded-lg border border-slate-800 bg-slate-900/35">
        {blogPosts.map((post) => (
          <article
            key={post}
            className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <h2 className="text-lg font-semibold text-slate-100">{post}</h2>
            <span className="w-fit rounded-md border border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400">
              Placeholder
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
