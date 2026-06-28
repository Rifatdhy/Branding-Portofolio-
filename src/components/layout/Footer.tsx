import Link from "next/link";
import { SOCIAL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ background: "var(--color-surface-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            &copy; {year} Rifat Dhiya Ul Lail
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              GitHub
            </Link>
            <Link
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              LinkedIn
            </Link>
            <span className="hidden sm:inline text-xs" style={{ color: "var(--color-text-muted)" }} aria-hidden="true">/</span>
            <Link
              href="/privacy"
              className="text-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Privasi
            </Link>
            <button
              id="back-to-top"
              aria-label="Kembali ke atas"
              className="scroll-to-top"
            >
              <span className="hidden sm:inline">Ke atas</span>
              <i aria-hidden="true" className="ph-bold ph-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
