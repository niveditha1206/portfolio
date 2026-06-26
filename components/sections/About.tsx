"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, Users } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "2+ Years",
    description: "Professional Experience",
  },
  {
    icon: Code2,
    title: "Enterprise Apps",
    description: "Business & Finance Platforms",
  },
  {
    icon: Layers,
    title: "Modern Frontend",
    description: "React, TypeScript & Next.js",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Agile Development & Collaboration",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 text-blue-500 font-semibold">ABOUT ME</p>

        <h2 className="text-4xl font-bold text-white">
          Building scalable web experiences.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          I'm a Frontend Developer with <strong>2+ years</strong> of
          professional experience building enterprise web applications. My
          expertise lies in developing scalable and maintainable user interfaces
          using React, TypeScript, Redux Toolkit, React Query, and Material UI.
          <br />
          <br />I enjoy transforming business requirements into intuitive,
          high-performance applications while writing clean, reusable, and
          maintainable code. I continuously learn modern frontend technologies
          and best practices to deliver exceptional user experiences.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
            >
              <Icon className="mb-5 text-blue-500" size={34} />

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-zinc-400">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
