import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Girish Lade — Data Scientist & AI Engineer Portfolio",
  description:
    "Data scientist and AI engineer specializing in React, TypeScript, and AI research agents. Explore projects, skills, and innovations in machine learning and artificial intelligence.",
  openGraph: {
    title: "Girish Lade — Data Scientist & AI Engineer Portfolio",
    description:
      "Data scientist and AI engineer specializing in React, TypeScript, and AI research agents.",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
