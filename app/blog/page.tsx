// app/blog/page.tsx
import { blogPosts } from "@/app/components/constants";

export const metadata = {
  title: "Blog | Krishaansh Saxena",
};

export default function BlogPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto px-4">
      <header className="max-w-2xl border-b border-slate-900 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Documenting concepts across machine learning engineering, computational statistics, options pricing math, and system architectures.
        </p>
      </header>

      <div className="mt-12 space-y-10">
        {blogPosts.map((post) => (
          <article 
            key={post.slug} 
            className="group relative flex flex-col items-start rounded-2xl border border-slate-800/40 bg-slate-950/10 p-6 transition duration-200 hover:border-slate-800 hover:bg-slate-950/30"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
                {post.date}
              </span>
              {post.date.toLowerCase() === "coming soon" && (
                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-500 border border-slate-800 uppercase tracking-wider">
                  In Queue
                </span>
              )}
            </div>
            
            <h2 className="mt-3 text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition duration-200">
              {post.title}
            </h2>
            
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
