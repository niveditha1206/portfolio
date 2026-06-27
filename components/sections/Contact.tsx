"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold text-blue-500">CONTACT</p>

        <h2 className="mt-2 text-4xl font-bold">Let's Connect</h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm always interested in discussing frontend development, new
          opportunities, and exciting projects. Feel free to reach out.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Mail className="text-blue-500" />

            <div>
              <h3 className="font-semibold">Email</h3>

              <p className="mt-2 text-zinc-400">niveditha.n360@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Phone className="text-blue-500" />

            <div>
              <h3 className="font-semibold">Phone</h3>

              <p className="mt-2 text-zinc-400">+91 94824 56165</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <MapPin className="text-blue-500" />

            <div>
              <h3 className="font-semibold">Location</h3>

              <p className="mt-2 text-zinc-400">Karnataka, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-zinc-700 bg-transparent p-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-zinc-700 bg-transparent p-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full rounded-xl border border-zinc-700 bg-transparent p-4 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-medium transition hover:bg-blue-700"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
