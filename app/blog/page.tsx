// app/blog/page.tsx
import { blogPosts } from "@/app/components/constants";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="py-10 space-y-10 max-w-6xl mx-auto w-full">
      {/* Page Title */}
      <div className="space-y-1 border-b border-slate-900/60 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Technical Writing
        </h1>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mt-2">
          Knowledge Base & Conceptual Deep-Dives
        </p>
      </div>

      {/* Structured Card Grid Feed */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article 
            key={post.slug} 
            className="flex flex-col rounded-2xl border border-slate-900 bg-slate-950/30 p-6 hover:border-slate-800 transition duration-200 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">
                {post.date}
              </span>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[9px] font-semibold text-slate-500 border border-slate-800 uppercase tracking-wider">
                Queued
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
            
            <div className="mt-6 pt-4 border-t border-slate-900/40">
              <span className="text-[10px] font-mono text-slate-600 font-bold uppercase tracking-wider">
                Awaiting Content Input
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
