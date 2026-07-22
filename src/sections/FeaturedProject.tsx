"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
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
          className="neu neu-hover p-6 sm:p-8 lg:p-12 xl:p-16"
        >
          <span className="neu-tag-accent mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Featured Project
          </span>

          <h3 className="text-gradient text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            research-ai-agent
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base lg:text-lg">
            Next-generation multi-agent research engine transforming raw queries
            into structured, verified intelligence reports. Built with
            TypeScript.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="neu-tag-accent rounded-full px-3 py-1 text-xs font-medium sm:text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="https://github.com/girishladegit0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.97 }}
              className="neu-sm inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white neu-hover"
            >
              <GitFork size={18} />
              View on GitHub
            </motion.a>

            <motion.a
              href="https://github.com/girishladegit0/research-ai-agent"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.97 }}
              className="neu-sm inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-semibold neu-hover group"
              style={{
                borderColor: "rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                boxShadow:
                  "4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.15)",
              }}
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
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
