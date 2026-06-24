// app/blog/page.tsx
import Link from "next/link";
import { blogPosts } from "@/app/components/constants";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="py-10 space-y-10 max-w-6xl mx-auto w-full">
      
      {/* Structural Page Header */}
      <div className="space-y-1 border-b border-slate-900/60 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Technical Writing
        </h1>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mt-2">
          Knowledge Base & Conceptual Deep-Dives
        </p>
      </div>

      {/* Unified Interactive Card Grid Feed */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          // Check if it's the article you just initialized
          const isLive = post.slug === "stats-for-ai";

          return isLive ? (
            /* Active Live Clickable Article Module Link */
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-blue-500/30 bg-slate-950/40 p-6 hover:border-blue-500 hover:bg-slate-950/80 transition duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                  Published
                </span>
                <span className="rounded-full bg-blue-950/50 px-2 py-0.5 text-[9px] font-semibold text-blue-400 border border-blue-900/30 uppercase tracking-wider">
                  Active
                </span>
              </div>
              
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
                  Read Full Article &rarr;
                </span>
              </div>
            </Link>
          ) : (
            /* Coming Soon Queue Modules Placeholder */
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
          );
        })}
      </div>
    </div>
  );
}
