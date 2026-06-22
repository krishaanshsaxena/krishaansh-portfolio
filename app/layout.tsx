// app/layout.tsx
import { SITE_TITLE, SITE_DESCRIPTION } from "./components/constants";
import Navbar from "./components/Navbar"; // 1. Import your new Navbar
import "./globals.css"; 

export const metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Krishaansh Saxena",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://krishaansh.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://krishaansh.com",
    siteName: "Krishaansh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@krishaansh_s", // Enforces your Twitter handle in underlying SEO tags
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col">
        {/* 2. Mount the sticky header here */}
        <Navbar />
        
        {/* Main Content with responsive side-gutters */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
