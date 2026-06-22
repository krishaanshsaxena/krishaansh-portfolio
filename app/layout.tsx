import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


import {
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "./components/site-data";


export const metadata = {
  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },

  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full bg-slate-950 text-slate-100">
        <Header />
        <main className="mx-auto min-h-screen max-w-7xl px-8 md:px-12 lg:px-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
