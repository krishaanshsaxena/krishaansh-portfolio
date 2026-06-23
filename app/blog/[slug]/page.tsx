// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostData } from "@/app/utils/mdParser";

// Standardizing interface properties for Next.js 15 compatibility
interface ParamProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ParamProps) {
  const resolvedParams = await params; // Explicitly unwrap parameters
  const post = getPostData(resolvedParams.slug);
  return {
    title: post ? post.title : "Article",
  };
}

export default async function BlogPostDetail({ params }: ParamProps) {
  const resolvedParams = await params; // Explicitly unwrap parameters ahead of execution
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-10 max-w-3xl mx-auto w-full space-y-6">
      <Link 
        href="/blog" 
        className="text-xs font-mono text-slate-500 hover:text-blue-400 transition inline-flex items-center gap-1"
      >
        &larr; Back to Log Feed
      </Link>

      <header className="space-y-2 border-b border-slate-900 pb-6">
        <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          {post.date}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 font-medium italic">
          {post.summary}
        </p>
      </header>

      <article className="text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-sans">
        {post.content}
      </article>
    </div>
  );
}
