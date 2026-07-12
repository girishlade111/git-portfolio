"use client";

import { useState } from "react";
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      onMouseMove={handleMouse}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <FloatingShapes />
      <CursorGlow x={mousePos.x} y={mousePos.y} />

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
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-accent text-white hover:bg-accent-light inline-block rounded-full px-6 py-3 text-sm font-semibold transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="border-accent text-accent hover:bg-accent hover:text-white inline-block rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
            >
              Get in Touch
            </motion.a>
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

function CursorGlow({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 h-[500px] w-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(92,122,92,0.08) 0%, transparent 70%)",
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      }}
    />
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
