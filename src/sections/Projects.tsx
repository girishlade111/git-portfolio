"use client";

import { motion } from "framer-motion";
import { GitFork, Circle } from "lucide-react";
import Container from "@/components/ui/container";

type Project = {
  name: string;
  description: string;
  language: string;
  color: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "digital-designer-portfolio",
    description: "Portfolio site for a creative digital designer built with Next.js and Framer Motion.",
    language: "TypeScript",
    color: "#3178C6",
    url: "https://github.com/girishladegit0/digital-designer-portfolio",
  },
  {
    name: "polyglot-studio",
    description: "Multi-language code analysis and transformation toolkit with AST-based refactoring pipelines.",
    language: "Python",
    color: "#3572A5",
    url: "https://github.com/girishladegit0/polyglot-studio",
  },
  {
    name: "Neon-Beat",
    description: "Audio-visual beat visualization engine with real-time waveform analysis and neon aesthetics.",
    language: "Python",
    color: "#3572A5",
    url: "https://github.com/girishladegit0/Neon-Beat",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section className="pb-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-foreground mb-10 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Other Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "-60px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="border-muted/30 hover:border-accent group rounded-2xl border p-6 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-foreground break-all text-lg font-semibold tracking-tight">
                  {project.name}
                </h3>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted hover:text-accent shrink-0 transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GitFork size={18} />
                </motion.a>
              </div>

              <p className="text-foreground/65 mt-2 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex items-center gap-1.5">
                <Circle fill={project.color} color={project.color} size={10} />
                <span className="text-muted text-xs font-medium">
                  {project.language}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
