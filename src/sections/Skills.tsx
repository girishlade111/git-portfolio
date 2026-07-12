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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
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
              <div className="mb-4 flex items-center gap-2">
                <cat.Icon className="text-accent" size={18} />
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider">
                  {cat.label}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2, margin: "-40px" }}
                className="grid grid-cols-2 gap-2 sm:gap-3"
              >
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(92,122,92,0.12)" }}
                      className="border-b-accent bg-background group cursor-default rounded-xl border-b-2 p-4 transition-colors"
                    >
                      <Icon className="text-accent mb-2" size={20} />
                      <p className="text-foreground text-sm font-medium leading-tight">
                        {skill.name}
                      </p>
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
