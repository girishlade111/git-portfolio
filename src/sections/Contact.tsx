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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
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
                whileHover={{ scale: 1.15, rotate: -6 }}
                whileTap={{ scale: 0.95 }}
                className="border-muted/30 text-foreground hover:border-accent hover:text-accent rounded-xl border p-3 transition-colors"
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
          viewport={{ once: true, margin: "-80px" }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-12 max-w-lg space-y-5"
        >
          <motion.div variants={fadeUp}>
            <label htmlFor="name" className="text-foreground/70 mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="border-muted/30 focus:ring-accent/40 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="email" className="text-foreground/70 mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border-muted/30 focus:ring-accent/40 w-full rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="message" className="text-foreground/70 mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message..."
              className="border-muted/30 focus:ring-accent/40 w-full resize-none rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2"
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="submit"
            className="bg-accent text-white hover:bg-accent-light cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </Container>
    </section>
  );
}
