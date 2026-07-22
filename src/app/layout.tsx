import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://girishlade111.github.io/git-portfolio"),
  title: "Girish Lade — Data Scientist & AI Engineer Portfolio",
  description:
    "Data scientist and AI engineer specializing in React, TypeScript, and AI research agents. Explore projects, skills, and innovations in machine learning and artificial intelligence.",
  keywords: [
    "data scientist",
    "AI engineer",
    "machine learning",
    "React",
    "TypeScript",
    "portfolio",
    "Mumbai",
  ],
  authors: [{ name: "Girish Lade" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://girishlade111.github.io/git-portfolio",
    siteName: "Girish Lade Portfolio",
    title: "Girish Lade — Data Scientist & AI Engineer Portfolio",
    description:
      "Data scientist and AI engineer specializing in React, TypeScript, and AI research agents.",
    images: [
      {
        url: "/profile.png",
        width: 500,
        height: 500,
        alt: "Girish Lade — Data Scientist & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Girish Lade — Data Scientist & AI Engineer Portfolio",
    description:
      "Data scientist and AI engineer specializing in React, TypeScript, and AI research agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "font-sans")}>
        <ScrollProgress />
        <div className="animated-bg" />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
