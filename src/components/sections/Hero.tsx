"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/lib/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "React Query",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 px-6 pt-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium tracking-[0.18em] text-blue-400"
          >
            HELLO, I&apos;M
          </motion.p>

          <motion.h1
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl"
          >
            Niveditha
            <span className="mt-2 block text-blue-400">Nandakumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl font-medium text-zinc-300 md:text-2xl"
          >
            Software Engineer I | Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-2xl text-base leading-7 text-zinc-400"
          >
            Frontend Developer with <strong>2+ years</strong> of experience
            building enterprise web applications using React, TypeScript, Redux
            Toolkit, React Query, Material UI, and modern frontend
            technologies. Passionate about creating scalable, reusable, and
            high-performance user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-zinc-800 p-2.5 text-zinc-400 transition hover:border-zinc-600 hover:text-white"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-zinc-800 p-2.5 text-zinc-400 transition hover:border-zinc-600 hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
              >
                {skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
