"use client";

import { Mail, GitFork, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

const links = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/girishladegit0" },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    href: "https://linkedin.com/in/girishlade",
  },
  { icon: Mail, label: "Mail", href: "mailto:girish@example.com" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="border-t border-white/5"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between"
        >
          <motion.p variants={childVariants} className="text-white/40 text-xs">
            &copy; 2026 Girish Lade
          </motion.p>
          <motion.div variants={childVariants} className="flex items-center gap-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-sm flex items-center justify-center p-2 text-white/40 hover:text-accent"
                aria-label={link.label}
                whileHover={{ scale: 1.15, color: "#FFFFFF" }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.footer>
  );
}
