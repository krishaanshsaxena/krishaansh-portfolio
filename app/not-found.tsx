// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-32 text-center px-4 max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-6xl font-extrabold text-blue-500 tracking-tight">
          404
        </h1>
        <p className="text-xl font-bold text-white tracking-tight">
          System routing anomaly
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          The structural path you requested does not exist or has been shifted within the pipeline.
        </p>
      </div>
      
      <div>
        <Link 
          href="/" 
          className="inline-block rounded-xl bg-slate-900 border border-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 hover:text-blue-400 transition duration-200"
        >
          Return Home Base
        </Link>
      </div>
    </div>
  );
}
