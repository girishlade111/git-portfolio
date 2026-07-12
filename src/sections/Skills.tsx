"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Globe,
  Server,
  BarChart3,
  Workflow,
  Bot,
  MessageSquareText,
  Code2,
  FileType,
  Layers,
  Palette,
  GitBranch,
  Container as ContainerIcon,
  Table,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/container";

type Skill = {
  name: string;
  icon: LucideIcon;
};

type Category = {
  label: string;
  Icon: LucideIcon;
  skills: Skill[];
};

const categories: Category[] = [
  {
    label: "Data Science",
    Icon: BarChart3,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Pandas", icon: Table },
      { name: "NumPy", icon: Database },
      { name: "Scikit-learn", icon: Brain },
      { name: "ML Modeling", icon: BarChart3 },
    ],
  },
  {
    label: "AI/Agents",
    Icon: Bot,
    skills: [
      { name: "LLM Orchestration", icon: Workflow },
      { name: "Multi-Agent Systems", icon: Bot },
      { name: "Prompt Engineering", icon: MessageSquareText },
    ],
  },
  {
    label: "Frontend",
    Icon: Globe,
    skills: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: FileType },
      { name: "Next.js", icon: Layers },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    label: "Tools",
    Icon: Server,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: ContainerIcon },
      { name: "PostgreSQL", icon: Database },
    ],
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-accent mt-4 h-1 rounded-full"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1, margin: "-40px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardReveal}
              className="border-muted/10 bg-background group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <span className="bg-accent/10 absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-30" />

              <div className="relative mb-5 flex items-center gap-3">
                <span className="bg-accent/10 flex items-center justify-center rounded-xl p-2.5 transition-colors duration-200 group-hover:bg-accent/20">
                  <cat.Icon className="text-accent" size={20} />
                </span>
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider">
                  {cat.label}
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                      className="border-muted/15 hover:border-accent hover:bg-accent/5 group/pill flex cursor-default items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-200"
                    >
                      <Icon
                        className="text-accent/70 group-hover/pill:text-accent shrink-0 transition-colors duration-200"
                        size={14}
                      />
                      <span className="text-foreground/80 group-hover/pill:text-foreground whitespace-nowrap text-sm font-medium leading-none transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
