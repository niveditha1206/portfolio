"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  CreditCard,
  FileText,
  Users,
} from "lucide-react";

const techStack = [
  "React",
  "TypeScript",
  "Redux Toolkit",
  "TanStack React Query",
  "Material UI",
  "Axios",
  "React Hook Form",
  "Yup",
  "Vite",
];

const features = [
  {
    icon: Users,
    title: "Client Management",
    description:
      "Managed client onboarding, financing deals, documents and customer information.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Built payment summaries, payment history, fee logging and payment workflows.",
  },
  {
    icon: FileText,
    title: "Reports",
    description:
      "Implemented in-house and brokered reports with export capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Role Based Access",
    description:
      "Implemented protected routes and role-specific application workflows.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 font-semibold">FEATURED PROJECT</p>

          <h2 className="mt-2 text-4xl font-bold">
            Enterprise Project Case Study
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            A detailed look at one of the largest enterprise applications I've
            contributed to during my professional experience.
          </p>
        </motion.div>

        {/* =================== CASE STUDY =================== */}

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-500" />

                <h3 className="text-3xl font-bold">Kesef</h3>
              </div>

              <p className="mt-3 text-blue-400">
                Enterprise Financing Platform
              </p>
            </div>

            <div className="rounded-xl bg-blue-600/10 px-5 py-3 text-blue-400">
              Internal Enterprise Application
            </div>
          </div>

          {/* Overview */}

          <div className="mt-12">
            <h4 className="text-2xl font-semibold">Overview</h4>

            <p className="mt-5 leading-8 text-zinc-400">
              Kesef is an internal financing management platform used for
              managing financing deals, clients, payments, reports, brokered
              deals, user administration, and application configuration. The
              application supports role-based workflows for administrators,
              investors, and other users while providing dashboards, reporting,
              document management, and payment tracking.
            </p>
          </div>

          {/* My Contributions */}

          <div className="mt-14">
            <h4 className="text-2xl font-semibold">My Contributions</h4>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Developed reusable React components using TypeScript.",
                "Integrated REST APIs using Axios and React Query.",
                "Implemented authentication and role-based workflows.",
                "Developed client management and financing modules.",
                "Worked on payment management and reporting screens.",
                "Collaborated with backend developers and QA engineers.",
                "Maintained scalable project architecture.",
                "Fixed bugs and improved overall application performance.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-800 p-5"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}

          <div className="mt-14">
            <h4 className="text-2xl font-semibold">Core Features</h4>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-zinc-800 p-6"
                  >
                    <Icon className="mb-4 text-blue-500" size={30} />

                    <h5 className="text-xl font-semibold">{feature.title}</h5>

                    <p className="mt-3 text-zinc-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech */}

          <div className="mt-14">
            <h4 className="text-2xl font-semibold">Tech Stack</h4>

            <div className="mt-6 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 px-5 py-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECOND PROJECT */}

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                Bridge X Capital Calculator
              </h3>

              <p className="mt-3 text-blue-400">
                Funding Eligibility Calculator
              </p>
            </div>

            <ArrowUpRight className="text-blue-500" />
          </div>

          <p className="mt-8 leading-8 text-zinc-400">
            Developed a responsive funding calculator that estimates business
            funding eligibility using monthly revenue and business duration.
            Built a clean user experience with form validation and seamless
            navigation to the funding application.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Material UI",
              "Axios",
              "Responsive Design",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 px-5 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
