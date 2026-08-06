"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/data";

const allFilters = ["Semua", ...Array.from(new Set(projects.flatMap((p) => p.techs)))];

export function Projects() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.techs.includes(active));

  return (
    <section id="proyek" className="py-28 md:py-32 bg-radial-soft">
      <div className="max-w-6xl mx-auto px-6">
          <div className="scroll-reveal">
          <div className="mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Beberapa yang pernah
              <br />
              saya kerjakan.
            </h2>
            <div className="section-divider" />
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="flex flex-wrap gap-2 mb-10">
            {allFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`badge transition-all duration-200 ${
                  active === f ? "pastel-yellow" : "border-default bg-surface-alt text-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="scroll-reveal project-card p-6 md:p-8 flex flex-col"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex-grow">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity duration-200"
                  >
                    {project.title}
                    <i
                      aria-hidden="true"
                      className="ph-bold ph-arrow-up-right text-sm align-super text-[0.6em] ml-1 text-muted"
                    />
                  </a>
                </h3>
                <p className="mt-3 leading-relaxed text-sm text-secondary">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {project.techs.map((tech) => (
                    <Image
                      key={tech}
                      src={`https://cdn.simpleicons.org/${tech.toLowerCase()}`}
                      alt={tech}
                      width={22}
                      height={22}
                      className="opacity-70"
                    />
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link ml-auto"
                >
                  <i aria-hidden="true" className="ph-bold ph-github-logo text-sm" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
