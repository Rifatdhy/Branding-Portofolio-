"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SOCIAL } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>(".hero-item");
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
      el.classList.add("hero-animate");
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center relative overflow-hidden bg-radial-soft"
    >
      <div className="ambient-blob" style={{ top: "-10%", left: "-5%" }} />

      <div
        className="max-w-6xl mx-auto px-6 w-full pt-24 md:pt-28 pb-16 relative z-10"
        ref={ref}
      >
        <div className="max-w-4xl">
          <div className="hero-item mb-8">
            <span className="badge pastel-green">
              <span className="w-1.5 h-1.5 rounded-full inline-block bg-current opacity-60" />
              Tersedia untuk project
            </span>
          </div>

          <h1 className="hero-item font-display text-[clamp(2.75rem,7vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-balance">
            <span
              className="block text-[0.3em] font-medium tracking-[0.25em] uppercase mb-4 font-body"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Rifat
            </span>
            DHIYA UL LAIL
          </h1>

          <p
            className="hero-item text-lg md:text-xl max-w-xl leading-relaxed mt-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Web &amp; Network Engineer. Nulis kode, ngulik jaringan, eksplorasi
            teknologi baru.
          </p>

          <div className="hero-item flex flex-wrap gap-3 mt-10">
            <Link href="/#proyek" className="btn btn-primary">
              Lihat Proyek
              <i aria-hidden="true" className="ph-bold ph-arrow-right text-lg" />
            </Link>
            <Link
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Hubungi Saya
              <i aria-hidden="true" className="ph-bold ph-arrow-up-right text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
