"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-zinc-400 md:flex-row">
        <p>
          © {year} Niveditha Nandakumar. All rights reserved.
        </p>

        <p>Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
