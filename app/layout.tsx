// app/layout.tsx
import { SITE_TITLE, SITE_DESCRIPTION } from "./components/constants";
import "./globals.css"; // Or your global style entry path

// 1. CORRECT: This must be a NAMED export (do NOT use "export default metadata")
export const metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Krishaansh Saxena",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://krishaansh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://krishaansh.com",
    siteName: "Krishaansh Portfolio",
    locale: "en_US",
    type: "website",
  },
    // ... your other metadata config
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@krishaansh_s", // Adds your Twitter/X handle to social share cards
  },
};

// 2. CORRECT: This must be the EXPORT DEFAULT and must return valid JSX

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* max-w-7xl limits ultra-wide screens, mx-auto centers it, px-4/sm:px-6/lg:px-8 adds fluid side margins */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}

