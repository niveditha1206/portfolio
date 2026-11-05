"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, Users } from "lucide-react";
import SectionHeading from "@/src/components/ui/SectionHeading";

const highlights = [
  {
    icon: Briefcase,
    title: "2+ Years",
    description: "Professional experience",
  },
  {
    icon: Code2,
    title: "Enterprise Apps",
    description: "Business and finance platforms",
  },
  {
    icon: Layers,
    title: "Modern Frontend",
    description: "React, TypeScript, and Next.js",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Agile delivery and collaboration",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ABOUT"
          title="Building scalable web experiences."
          description="I'm a Frontend Developer with 2+ years of professional experience building enterprise web applications. I focus on scalable interfaces with React, TypeScript, Redux Toolkit, React Query, and Material UI, and on turning requirements into clear, reusable code."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              >
                <Icon className="text-blue-400" size={22} />
                <h3 className="mt-4 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
