"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick(e: any, href: string) {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) {
      setIsOpen(false);
      return;
    }

    const headerOffset = 80; // matches h-20 (5rem = 80px)
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setIsOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          Niveditha
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-3 text-zinc-300 transition hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-4 rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white"
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
