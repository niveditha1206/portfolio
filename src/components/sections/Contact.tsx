"use client";

import { sendContactMessage } from "@/src/services/contact";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: sendContactMessage,
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: () => {
      toast.error("Failed to send message");
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    sendMessage({ name, email, message });
    console.log(name, email, message);
  };
  return (
    <section id="contact" className="scroll-mt-20 px-4 md:px-6 py-8">
      <div className="mx-auto max-w-7xl">
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
                <a href="mailto:niveditha.n360@gmail.com">
                  <p className="mt-2 text-zinc-400 relative text-lg font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                    niveditha.n360@gmail.com
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <Phone className="text-blue-500" />

              <div>
                <a href="tel:+919482456165">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="mt-2 text-zinc-400 relative text-lg font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                    +91 9482456165
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <MapPin className="text-blue-500" />

              <div>
                <h3 className="font-semibold">Location</h3>

                <p className="mt-2 text-zinc-400">Udupi, Karnataka</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              maxLength={150}
              className="w-full rounded-xl border border-zinc-700 bg-transparent p-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              maxLength={150}
              className="w-full rounded-xl border border-zinc-700 bg-transparent p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows={6}
              required
              name="message"
              maxLength={5000}
              placeholder="Message"
              className="w-full rounded-xl border border-zinc-700 bg-transparent p-4 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-medium transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
