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

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-foreground mb-14 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Skills &amp; Technologies
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-5 flex items-center gap-3">
                <cat.Icon className="text-accent shrink-0" size={18} />
                <h3 className="text-foreground shrink-0 text-sm font-semibold uppercase tracking-wider">
                  {cat.label}
                </h3>
                <span className="border-muted/20 flex-1 border-t" />
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2, margin: "-40px" }}
                className="flex flex-wrap gap-3"
              >
                {cat.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={pillVariants}
                      transition={{ delay: i * 0.04 }}
                      className="border-muted/20 hover:border-accent bg-background hover:bg-accent/5 group flex cursor-default items-center gap-2 rounded-full border px-4 py-2.5 transition-all duration-200"
                    >
                      <span className="bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center rounded-full p-1 transition-colors duration-200">
                        <Icon className="text-accent" size={14} />
                      </span>
                      <span className="text-foreground text-sm font-medium leading-none">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
