"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { projects, allTechs } from "@/lib/data";

const filters = ["Semua", ...allTechs];

export default function ProyekPage() {
  const [active, setActive] = useState("Semua");
  const reduce = useReducedMotion();

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) =>
          p.techs.some((t) => t === active)
        );

  return (
    <div className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Semua Proyek.
          </h1>
          <div
            className="section-divider"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-3.5 py-1.5 text-xs font-medium rounded transition-all duration-200"
              style={{
                background:
                  active === f
                    ? "var(--color-text-primary)"
                    : "transparent",
                color:
                  active === f
                    ? "var(--color-surface)"
                    : "var(--color-text-secondary)",
                border:
                  active === f
                    ? "1px solid var(--color-text-primary)"
                    : "1px solid var(--color-border)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p
              className="text-lg"
              style={{ color: "var(--color-text-muted)" }}
            >
              Tidak ada proyek dengan filter tersebut.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={reduce ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduce ? {} : { y: -3 }}
              >
                <div
                  className="project-thumb"
                  style={{
                    background: project.gradient,
                    minHeight: "180px",
                  }}
                >
                  <i
                    aria-hidden="true"
                    className={`ph-bold ${project.icon} text-4xl md:text-5xl`}
                    style={{ color: "var(--color-text-muted)", opacity: 0.4 }}
                  />
                  <div className="tech-stack">
                    {project.techs.map((tech) => (
                        <Image
                          key={tech}
                          src={`https://cdn.simpleicons.org/${tech.toLowerCase()}`}
                          alt={tech}
                          width={22}
                          height={22}
                          unoptimized
                        />
                      ))}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-xl md:text-2xl font-bold">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition-opacity duration-300"
                    >
                      {project.title}
                      <i
                        aria-hidden="true"
                        className="ph-bold ph-arrow-up-right text-sm align-super text-[0.6em] ml-1"
                        style={{ color: "var(--color-text-muted)" }}
                      />
                    </a>
                  </h2>
                  <p
                    className="mt-2 leading-relaxed text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link mt-4"
                  >
                    <i aria-hidden="true" className="ph-bold ph-github-logo text-sm" />
                    Source Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
