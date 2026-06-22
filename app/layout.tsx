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
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// 2. CORRECT: This must be the EXPORT DEFAULT and must return valid JSX
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* Your navigation component would go here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
