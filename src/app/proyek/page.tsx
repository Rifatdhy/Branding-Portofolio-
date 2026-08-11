"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { projects, allTechs } from "@/lib/data";

const filters = ["Semua", ...allTechs];

export default function ProyekPage() {
  const [active, setActive] = useState("Semua");
  const reduce = useReducedMotion();

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.techs.includes(active));

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Selected Work
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            Semua Proyek.
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 cursor-pointer"
              style={{
                background:
                  active === f ? "var(--color-text-primary)" : "transparent",
                color:
                  active === f
                    ? "var(--color-surface)"
                    : "var(--color-text-secondary)",
                borderColor:
                  active === f
                    ? "var(--color-text-primary)"
                    : "var(--color-border)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted">
              Tidak ada proyek dengan filter tersebut.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-card flex flex-col gap-5 p-6 md:p-8"
                initial={reduce ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduce ? {} : { y: -4 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-sm text-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--color-border)] bg-surface-alt text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}