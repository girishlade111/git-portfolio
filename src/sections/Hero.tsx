"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GitFork } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stats = [
  { icon: Briefcase, label: "3+ Years Experience" },
  { icon: Code2, label: "10+ Projects Shipped" },
  { icon: GitFork, label: "Open Source Contributor" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <FloatingShapes />

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-foreground text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Turning data into decisions with{" "}
            <span className="text-accent">AI-driven</span> systems.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
          >
            Data Scientist specializing in React, TypeScript, and autonomous AI
            research agents. Currently building next-gen multi-agent research
            systems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-accent text-white hover:bg-accent-light rounded-full px-6 py-3 text-sm font-semibold transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border-accent text-accent hover:bg-accent hover:text-white rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="text-accent" size={18} />
                <span className="text-foreground text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="bg-accent/15 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 50, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="bg-accent/10 absolute -bottom-32 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="bg-accent/10 absolute top-1/3 right-1/4 h-64 w-64 rounded-full blur-3xl"
      />
    </div>
  );
}
