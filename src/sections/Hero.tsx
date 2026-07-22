"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GitFork } from "lucide-react";
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
      <NeuShapes />
      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-gradient text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Turning data into decisions with{" "}
            <span className="text-gradient-accent">AI-driven</span> systems.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg md:text-xl"
          >
            Data Scientist specializing in React, TypeScript, and autonomous AI
            research agents. Currently building next-gen multi-agent research
            systems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.97 }}
              className="neu-sm inline-block rounded-full px-6 py-3 text-sm font-semibold text-white neu-hover"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.97 }}
              className="neu-sm inline-block rounded-full border px-6 py-3 text-sm font-semibold neu-hover"
              style={{
                borderColor: "rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                boxShadow:
                  "4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.15)",
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="neu-sm flex items-center gap-2 rounded-full px-4 py-2">
                <stat.icon className="text-accent shrink-0" size={18} />
                <span className="text-white/75 text-sm font-medium">
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

function NeuShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full sm:h-96 sm:w-96"
        style={{
            background: "#1a1a1a",
          boxShadow:
            "20px 20px 40px rgba(0,0,0,0.45), -20px -20px 40px rgba(255,255,255,0.06)",
        }}
        animate={{
          y: [0, -30, 0, 20, 0],
          x: [0, 10, -15, 5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full sm:h-[30rem] sm:w-[30rem]"
        style={{
          background: "#1a1a1a",
          boxShadow:
            "25px 25px 50px rgba(0,0,0,0.45), -25px -25px 50px rgba(255,255,255,0.06)",
        }}
        animate={{
          y: [0, 20, -10, 30, 0],
          x: [0, -15, 10, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full"
        style={{
          background: "#1a1a1a",
          boxShadow:
            "16px 16px 32px rgba(0,0,0,0.4), -16px -16px 32px rgba(255,255,255,0.06)",
        }}
        animate={{
          y: [0, -15, 10, -5, 0],
          x: [0, 5, -10, 8, 0],
          scale: [1, 1.05, 0.98, 1.03, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
