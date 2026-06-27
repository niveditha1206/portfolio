"use client";

import { motion } from "framer-motion";
import { CalendarDays, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-semibold text-blue-500">EXPERIENCE</p>

        <h2 className="text-4xl font-bold text-white">
          Professional Experience
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Over the past two years, I've contributed to enterprise applications
          focused on financing, lending, and business management while building
          scalable frontend solutions using React and TypeScript.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
      >
        {/* Header */}

        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div>
            <h3 className="text-2xl font-bold">Software Engineer I</h3>

            <div className="mt-3 flex items-center gap-2 text-zinc-400">
              <Building2 size={18} />
              Codezyng Private Limited, Udupi
            </div>

            <div className="mt-2 flex items-center gap-2 text-zinc-400">
              <CalendarDays size={18} />
              March 2023 – Present
            </div>
          </div>

          <div className="rounded-xl bg-blue-600/10 px-5 py-3 text-blue-400">
            2+ Years
          </div>
        </div>

        {/* Responsibilities */}

        <div className="mt-10">
          <h4 className="mb-5 text-xl font-semibold">Responsibilities</h4>

          <ul className="space-y-4 text-zinc-400">
            <li>
              • Developed enterprise web applications using React, TypeScript,
              and modern frontend technologies.
            </li>

            <li>
              • Built reusable UI components to improve consistency and
              maintainability across the application.
            </li>

            <li>
              • Integrated REST APIs using Axios and managed server state with
              TanStack React Query.
            </li>

            <li>
              • Managed application state using Redux Toolkit and implemented
              authentication and role-based access.
            </li>

            <li>
              • Collaborated with backend developers, QA engineers, and product
              teams to deliver new features.
            </li>

            <li>
              • Optimized application performance and improved user experience
              through efficient rendering and reusable architecture.
            </li>
          </ul>
        </div>

        {/* Major Projects */}

        <div className="mt-12">
          <h4 className="mb-5 text-xl font-semibold">Major Projects</h4>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h5 className="text-lg font-semibold">Kesef</h5>

              <p className="mt-3 text-zinc-400">
                Enterprise financing platform for managing clients, financing
                deals, payments, reports, brokered deals, user management, and
                role-based workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h5 className="text-lg font-semibold">
                Bridge X Capital Calculator
              </h5>

              <p className="mt-3 text-zinc-400">
                Funding calculator that estimates business funding eligibility
                based on monthly revenue and business duration, providing a
                seamless lead generation flow.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-12">
          <h4 className="mb-5 text-xl font-semibold">Technologies</h4>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Next.js",
              "Redux Toolkit",
              "React Query",
              "Material UI",
              "Tailwind CSS",
              "Axios",
              "React Hook Form",
              "Yup",
              "Git",
              "GitHub",
              "Vite",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
