"use client";

import { sendContactMessage } from "@/src/services/contact";
import SectionHeading from "@/src/components/ui/SectionHeading";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "niveditha.n360@gmail.com",
    href: "mailto:niveditha.n360@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9482456165",
    href: "tel:+919482456165",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Udupi, Karnataka",
  },
];

const fieldClassName =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-blue-500";

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
    const form = e.currentTarget;
    const formData = new FormData(form);
    sendMessage(
      {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      },
      { onSuccess: () => form.reset() },
    );
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's connect"
          description="I'm always interested in discussing frontend development, new opportunities, and exciting projects. Feel free to reach out."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="space-y-3">
            {details.map((item) => {
              const Icon = item.icon;
              const body = (
                <>
                  <span className="mt-0.5 text-blue-400">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-200">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              const className =
                "flex gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5";

              return item.href ? (
                <a key={item.label} href={item.href} className={className}>
                  {body}
                </a>
              ) : (
                <div key={item.label} className={className}>
                  {body}
                </div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8"
          >
            <label className="block space-y-2">
              <span className="text-sm text-zinc-400">Name</span>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                required
                maxLength={150}
                className={fieldClassName}
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-zinc-400">Email</span>
              <input
                type="email"
                placeholder="you@email.com"
                name="email"
                required
                maxLength={150}
                className={fieldClassName}
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-zinc-400">Message</span>
              <textarea
                rows={6}
                required
                name="message"
                maxLength={5000}
                placeholder="What would you like to talk about?"
                className={fieldClassName}
              />
            </label>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {isPending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" position="bottom-right" />
    </section>
  );
}
