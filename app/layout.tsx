// app/layout.tsx
import { SITE_TITLE, SITE_DESCRIPTION } from "./components/constants";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
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
    creator: "@krishaansh_s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Added data-scroll-behavior="smooth" to eliminate the Next.js router warning block
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-4 lg:px-4 pt-6 pb-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
