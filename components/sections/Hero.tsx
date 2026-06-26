"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-lg font-medium text-blue-500"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Niveditha
            <br />
            <span className="text-blue-500">Nandakumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-2xl font-semibold text-zinc-300 md:text-3xl"
          >
            Software Engineer I | Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-8 text-zinc-400"
          >
            Frontend Developer with <strong>2+ years</strong> of experience
            building enterprise web applications using React, TypeScript, Redux
            Toolkit, React Query, Material UI, and modern frontend technologies.
            Passionate about creating scalable, reusable, and high-performance
            user interfaces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Redux Toolkit",
              "React Query",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative h-95 w-95 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Niveditha Nandakumar"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
