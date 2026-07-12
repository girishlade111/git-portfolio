"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            [0, 1],
            ["rgba(237, 234, 226, 0)", "rgba(237, 234, 226, 1)"]
          ),
          boxShadow: useTransform(
            bgOpacity,
            [0, 1],
            [
              "0 0 0 0 rgba(0,0,0,0)",
              "0 1px 3px 0 rgba(0,0,0,0.06)",
            ]
          ),
        }}
        className="fixed inset-x-0 top-0 z-50 h-16"
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-foreground text-lg font-semibold tracking-tight"
          >
            Girish Lade
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <ResumeButton />
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-foreground flex items-center md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="bg-background fixed inset-y-0 right-0 z-50 flex w-72 flex-col shadow-xl md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span className="text-foreground text-lg font-semibold tracking-tight">
                  Girish Lade
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground hover:text-accent rounded-lg px-3 py-3 text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto px-8 pb-10">
                <ResumeButton />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="group relative text-sm font-medium">
      <span className="text-foreground">{children}</span>
      <motion.span
        className="bg-accent absolute -bottom-0.5 left-0 h-[2px]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </Link>
  );
}

function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="border-muted text-foreground hover:bg-accent hover:text-white flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors"
      aria-label="Download resume"
    >
      <FileText size={16} />
      <span className="hidden sm:inline">Resume</span>
    </motion.a>
  );
}
