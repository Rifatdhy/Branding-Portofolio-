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
                  active === f ? "pastel-yellow" : "badge"
                }`}
                style={
                  active !== f
                    ? {
                        background: "var(--color-surface-alt)",
                        color: "var(--color-text-secondary)",
                        border: "1px solid var(--color-border)",
                      }
                    : undefined
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
          {filtered.map((project, i) => {
            const isWide = i === 0;
            const isFull =
              filtered.length === 1 ||
              (i === filtered.length - 1 && filtered.length > 1);
            const colSpan =
              filtered.length === 1
                ? "md:col-span-3"
                : isWide
                  ? "md:col-span-2"
                  : "";
            const cls = `${colSpan} ${
              isFull && filtered.length > 2 ? "md:col-span-3" : ""
            }`;
            return (
              <div
                key={project.title}
                className={`${cls} scroll-reveal`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="project-card">
                  <div className="grid md:grid-cols-5">
                    <div className={isWide ? "md:col-span-2" : "md:col-span-5"}>
                      <div
                        className="project-thumb"
                        style={{
                          background: project.gradient,
                          minHeight: isWide ? "100%" : "160px",
                        }}
                      >
                        <i
                          aria-hidden="true"
                          className={`ph-bold ${project.icon} text-4xl md:text-5xl`}
                          style={{
                            color: "var(--color-text-muted)",
                            opacity: 0.3,
                          }}
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
                    </div>
                      <div
                        className={`${
                          isWide ? "md:col-span-3" : "md:col-span-5"
                        } p-6 md:p-8 flex flex-col justify-start`}
                      >
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
                              className="ph-bold ph-arrow-up-right text-sm align-super text-[0.6em] ml-1"
                              style={{ color: "var(--color-text-muted)" }}
                            />
                          </a>
                        </h3>
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
                          className="project-link mt-auto pt-4"
                        >
                          <i aria-hidden="true" className="ph-bold ph-github-logo text-sm" />
                          Source Code
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
