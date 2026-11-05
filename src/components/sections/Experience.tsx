"use client";

import { experience } from "@/lib/constants";
import { getDurationInYears } from "@/lib/utils";
import SectionHeading from "@/src/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Building2, CalendarDays } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Professional experience"
          description="Over the past two years, I've contributed to enterprise applications focused on financing, lending, and business management while building scalable frontend solutions using React and TypeScript."
        />

        <motion.article
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {experience.title}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-zinc-400">
                <Building2 size={16} />
                {experience.company}, {experience.location}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                <CalendarDays size={16} />
                {experience.duration}
              </p>
            </div>
            <p className="w-fit rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-300">
              {getDurationInYears("2024-03-01")}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium tracking-wide text-zinc-300">
              Responsibilities
            </h4>
            <ul className="mt-4 space-y-3">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h4 className="text-sm font-medium tracking-wide text-zinc-300">
              Major projects
            </h4>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {experience.projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-xl border border-zinc-800 p-5"
                >
                  <h5 className="font-medium text-white">{project.title}</h5>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-sm font-medium tracking-wide text-zinc-300">
              Technologies
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
