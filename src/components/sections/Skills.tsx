"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutDashboard, Wrench } from "lucide-react";
import SectionHeading from "@/src/components/ui/SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "State Management",
    icon: LayoutDashboard,
    skills: ["Redux Toolkit", "TanStack React Query", "Context API"],
  },
  {
    title: "API & Forms",
    icon: Database,
    skills: ["REST APIs", "Axios", "React Hook Form", "Yup"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "VS Code", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SKILLS"
          title="Technical skills"
          description="Technologies and tools I use to build scalable, maintainable, and high-performance web applications."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-blue-400" />
                  <h3 className="text-lg font-medium text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
