"use client";

import { motion } from "framer-motion";
import { Mail, GitFork, ExternalLink } from "lucide-react";
import Container from "@/components/ui/container";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const contacts = [
  { icon: Mail, label: "Mail", href: "mailto:girish@example.com" },
  {
    icon: GitFork,
    label: "GitHub",
    href: "https://github.com/girishladegit0",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    href: "https://linkedin.com/in/girishlade",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="neu mx-auto max-w-xl p-8 sm:p-10 text-center"
        >
          <h2 className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base lg:text-lg">
            Open to data science roles, AI research collaborations, and
            freelance projects.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {contacts.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.95 }}
                className="neu-sm p-3 text-white/65 hover:text-accent transition-colors neu-hover"
                aria-label={item.label}
              >
                <item.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          onSubmit={(e) => e.preventDefault()}
          className="neu mx-auto mt-12 max-w-lg space-y-5 p-8 sm:p-10"
        >
          <motion.div variants={fadeUp}>
            <label htmlFor="name" className="text-white/45 mb-1.5 block text-xs font-medium sm:text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="neu-inset w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/25"
              onFocus={(e) => {
                e.target.style.boxShadow =
                  "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow =
                  "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.05)";
              }}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="email" className="text-white/45 mb-1.5 block text-xs font-medium sm:text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="neu-inset w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/25"
              onFocus={(e) => {
                e.target.style.boxShadow =
                  "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow =
                  "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.05)";
              }}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="message" className="text-white/45 mb-1.5 block text-xs font-medium sm:text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message..."
              className="neu-inset w-full resize-none rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/25"
              onFocus={(e) => {
                e.target.style.boxShadow =
                  "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow =
                  "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.05)";
              }}
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="neu-sm cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold text-white neu-hover"
          >
            Send Message
          </motion.button>
        </motion.form>
      </Container>
    </section>
  );
}
