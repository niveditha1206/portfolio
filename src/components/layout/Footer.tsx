"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-zinc-800 px-6 py-8">
      <p className="mx-auto max-w-7xl text-sm text-zinc-500">
        © {year} Niveditha Nandakumar
      </p>
    </footer>
  );
}
