"use client";

import { projects } from "@/lib/constants";
import SectionHeading from "@/src/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Selected work and product builds"
          description="A collection of projects that reflect my experience building responsive, data-driven web applications."
        />

        <div className="mt-8 grid gap-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
