"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#proyek", label: "Proyek" },
  { href: "/#keahlian", label: "Keahlian" },
  { href: "/#kontak", label: "Kontak" },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme((document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return { theme, toggle };
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-3 inset-x-0 z-50 px-4">
      <div className="max-w-3xl mx-auto bg-[var(--color-surface-card)]/80 backdrop-blur-xl border border-[var(--color-border)] rounded-full flex items-center justify-between gap-4 pl-6 pr-2 py-2 shadow-[var(--shadow-tint)]">
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-[var(--color-text-primary)]">
          RifatDhiya
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-brand-50)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={theme === "light" ? "Aktifkan dark mode" : "Aktifkan light mode"}
            className="text-[var(--color-text-primary)] hover:bg-[var(--color-brand-50)] transition-colors p-2 rounded-full"
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>

          <button
            className="md:hidden text-[var(--color-text-primary)] hover:bg-[var(--color-brand-50)] transition-colors p-2 rounded-full"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 max-w-3xl mx-auto bg-[var(--color-surface-card)]/95 backdrop-blur-xl border border-[var(--color-border)] rounded-3xl p-3 shadow-[var(--shadow-card)]">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-2xl text-[var(--color-text-primary)] hover:bg-[var(--color-brand-50)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}