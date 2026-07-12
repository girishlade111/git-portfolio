"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";

const tech = ["TypeScript", "Multi-Agent Architecture", "LLM Orchestration"];

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="bg-accent/8 rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          <span className="bg-accent/15 text-accent mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Featured Project
          </span>

          <h3 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            research-ai-agent
          </h3>

          <p className="text-foreground/75 mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            Next-generation multi-agent research engine transforming raw queries
            into structured, verified intelligence reports. Built with
            TypeScript.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://github.com/girishladegit0/research-ai-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white hover:bg-accent-light inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              <GitFork size={18} />
              View on GitHub
            </Link>

            <Link
              href="https://github.com/girishladegit0/research-ai-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="border-accent text-accent hover:bg-accent hover:text-white inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors group"
            >
              Live Demo
              <motion.span
                className="inline-flex"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
