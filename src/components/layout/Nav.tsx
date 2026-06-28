"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const links = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#proyek", label: "Proyek" },
  { href: "/blog", label: "Blog" },
  { href: "/#keahlian", label: "Keahlian" },
  { href: "/#kontak", label: "Kontak" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    const next = !open;
    setOpen(next);
    toggleRef.current?.setAttribute("aria-expanded", String(next));
    if (next) {
      setTimeout(() => menuRef.current?.classList.add("open"), 10);
    } else {
      menuRef.current?.classList.remove("open");
    }
  }

  function closeMenu() {
    setOpen(false);
    menuRef.current?.classList.remove("open");
    toggleRef.current?.setAttribute("aria-expanded", "false");
  }

  return (
    <nav id="nav" className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-end h-14 md:h-16">
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          ref={toggleRef}
          id="menu-toggle"
          className="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors p-2 rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <i aria-hidden="true" className={`ph-bold text-xl transition-all duration-300 ${open ? "ph-x rotate-90" : "ph-list"}`} />
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className="md:hidden"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
