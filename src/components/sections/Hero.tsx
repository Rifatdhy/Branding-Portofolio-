"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { SOCIAL } from "@/lib/constants";
import { about } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="text-[var(--color-text-primary)] min-h-screen pt-28 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            Rifat
            <br />
            Dhiya Ul Lail
          </h1>

          <p className="text-lg sm:text-xl max-w-xl mt-8 text-[var(--color-text-secondary)]">
            {about}
          </p>

          <div className="flex flex-wrap gap-3 mt-12">
            <Link
              href="/#proyek"
              className="btn btn-primary"
            >
              Lihat Proyek
              <ArrowRight aria-hidden="true" weight="bold" className="ml-1" />
            </Link>
            <Link
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Hubungi Saya
              <ArrowUpRight aria-hidden="true" weight="bold" className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      </section>
  );
}