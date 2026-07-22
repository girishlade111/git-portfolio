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
import { asset } from "@/lib/basePath";

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
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <>
      <motion.header
        style={{
          boxShadow: useTransform(
            shadowOpacity,
            [0, 1],
            [
              "0 0 0 rgba(0,0,0,0)",
              "0 4px 12px rgba(0,0,0,0.2), 0 -2px 6px rgba(255,255,255,0.03)",
            ]
          ),
        }}
        className="fixed inset-x-0 top-0 z-50 h-16 bg-[#1a1a1a]"
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-gradient-accent text-lg font-semibold tracking-tight"
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
            className="text-white/80 hover:text-white flex items-center md:hidden transition-colors"
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
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-[#1a1a1a] shadow-[0_0_24px_rgba(0,0,0,0.4),-4px_0_12px_rgba(255,255,255,0.03)] md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span className="text-gradient-accent text-lg font-semibold tracking-tight">
                  Girish Lade
                </span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/80 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <nav className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-white/70 hover:text-accent neu-sm block rounded-lg px-3 py-3 text-base transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
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
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
      <Link href={href} className="group relative text-sm font-medium">
        <span className="text-white/70 group-hover:text-white transition-colors">
          {children}
        </span>
        <motion.span
          className="bg-accent absolute -bottom-0.5 left-0 h-[2px]"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      </Link>
    </motion.div>
  );
}

function ResumeButton() {
  return (
    <motion.a
      href={asset("/resume.pdf")}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.95 }}
      className="neu-sm flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/80 hover:text-white neu-hover"
      aria-label="Download resume"
    >
      <FileText size={16} />
      <span className="hidden sm:inline">Resume</span>
    </motion.a>
  );
}
