"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 md:px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 font-semibold">FEATURED PROJECTS</p>

          <h2 className="mt-2 text-4xl font-bold">
            Selected work and product builds
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            A collection of projects that reflect my experience building
            responsive, data-driven web applications.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-blue-400">{project.description}</p>
                </div>
              </div>

              <div className="mt-14">
                <h4 className="text-2xl font-semibold">Highlights</h4>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-xl border border-zinc-800 p-5"
                    >
                      ✓ {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-5 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
