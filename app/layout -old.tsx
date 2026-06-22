// app/layout.tsx
import { SITE_TITLE, SITE_DESCRIPTION } from "./components/constants";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // 1. Import your new Footer
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
    <html lang="en">
      {/* min-h-screen, flex, and flex-col handle layout distribution securely */}
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        
        {/* flex-grow pushes the footer to the absolute bottom of thin pages */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-4 lg:px-4 pt-6 pb-12">
          {children}
        </main>

        {/* 2. Mount the universal footer anchor */}
        <Footer />
      </body>
    </html>
  );
}
