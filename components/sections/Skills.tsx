"use client";

import { motion } from "framer-motion";
import { Code2, LayoutDashboard, Database, Wrench } from "lucide-react";

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
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold text-blue-500">SKILLS</p>

        <h2 className="mt-2 text-4xl font-bold text-white">Technical Skills</h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          Technologies and tools I use to build scalable, maintainable, and
          high-performance web applications.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-blue-500"
            >
              <div className="flex items-center gap-3">
                <Icon size={28} className="text-blue-500" />

                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
