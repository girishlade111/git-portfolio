"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import { asset } from "@/lib/basePath";

const tags = [
  "Multi-Agent Systems",
  "LLM Orchestration",
  "React/TypeScript",
  "Data Pipelines",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="neu neu-hover grid items-center gap-12 p-6 sm:p-8 md:grid-cols-5 lg:p-12"
        >
          <div className="flex justify-center md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-48 w-48 overflow-hidden rounded-full sm:h-56 sm:w-56 md:h-64 md:w-64"
              style={{
                boxShadow:
                  "8px 8px 16px rgba(0,0,0,0.4), -8px -8px 16px rgba(255,255,255,0.06), 0 0 0 2px rgba(255,255,255,0.15)",
              }}
            >
              <img
                src={asset("/profile.png")}
                alt="Girish Lade"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <p className="text-white/75 text-sm leading-relaxed sm:text-base md:text-lg">
              I&apos;m Girish Lade, a data scientist and full-stack developer
              based in Mumbai, India. I specialize in building intelligent
              systems that bridge data science and modern web development. My
              current focus is on autonomous AI research agents — systems that
              transform raw queries into structured, verified intelligence.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10"
            >
              <p className="text-white/35 mb-4 text-xs font-medium uppercase tracking-wider sm:text-sm">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeUp}
                    className="neu-tag-accent rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
