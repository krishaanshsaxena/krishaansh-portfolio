import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishaansh Saxena - Rising AI/ML Engineer",
  description:
    "Computer Science Student | AI/ML Enthusiast | Lifelong Learner - Portfolio of Krishaansh Pushkarprabhat Saxena",
  keywords: [
    "AI",
    "Machine Learning",
    "Data Science",
    "Computer Science",
    "Portfolio",
    "Developer",
  ],
  authors: [{ name: "Krishaansh Pushkarprabhat Saxena" }],
  openGraph: {
    title: "Krishaansh Saxena - Rising AI/ML Engineer",
    description:
      "Computer Science Student | AI/ML Enthusiast | Lifelong Learner",
    url: "https://krishaansh-portfolio.vercel.app",
    siteName: "Krishaansh Saxena",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <meta name="theme-color" content="#0f0f1e" />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 px-4 sm:px-6 lg:px-10">
        {children}
      </body>
    </html>
  );
}
