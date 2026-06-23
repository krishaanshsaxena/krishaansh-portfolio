// app/blog/page.tsx
import Link from "next/link";
import { blogPosts as placeholderPosts } from "@/app/components/constants";
import { getSortedPostsData } from "@/app/utils/mdParser";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  // Read production markdown posts directly from your content directory
  const realPosts = getSortedPostsData();

  return (
    <div className="py-10 space-y-10 max-w-6xl mx-auto w-full">
      <div className="space-y-1 border-b border-slate-900/60 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Technical Writing
        </h1>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mt-2">
          Knowledge Base & Conceptual Deep-Dives
        </p>
      </div>

      {/* Grid Feed Container */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* A. Dynamic Live Markdown Posts */}
        {realPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/40 p-6 hover:border-blue-500/40 hover:bg-slate-950/80 transition duration-200 group"
          >
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
              {post.date}
            </span>
            <div className="flex-grow mt-4">
              <h2 className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition duration-200">
                {post.title}
              </h2>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {post.summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-900/60">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider group-hover:underline">
                Read Article &rarr;
              </span>
            </div>
          </Link>
        ))}

        {/* B. Scheduled Placeholder Posts queue (Filters out duplicates of active posts) */}
        {placeholderPosts
          .filter((place) => !realPosts.some((real) => real.slug === place.slug))
          .map((post) => (
            <article 
              key={post.slug} 
              className="flex flex-col rounded-2xl border border-slate-900 bg-slate-950/10 p-6 opacity-60"
            >
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                Coming Soon
              </span>
              <div className="flex-grow mt-4">
                <h2 className="text-base font-bold tracking-tight text-slate-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {post.summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900/40">
                <span className="text-[10px] font-mono text-slate-600 font-bold uppercase tracking-wider">
                  Awaiting Pipeline Entry
                </span>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
