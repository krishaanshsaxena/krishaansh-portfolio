import { SITE_OWNER, COPYRIGHT_YEAR } from "./site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-16 text-center text-slate-500">
      <p>Built with Next.js and Tailwind CSS.</p>

      <p className="mt-3">
        © {COPYRIGHT_YEAR} {SITE_OWNER}
      </p>
    </footer>
  );
}