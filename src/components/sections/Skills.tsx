"use client";

import Image from "next/image";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const pastelColors = [
    "pastel-blue",
    "pastel-green",
    "pastel-yellow",
    "pastel-red",
  ];

  return (
    <section id="keahlian" className="py-28 md:py-32 bg-radial-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal">
          <div className="mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Teknologi &amp; perangkat
              <br />
              yang saya pakai sehari-hari.
            </h2>
            <div className="section-divider" />
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-5">
          {skillCategories.map((cat, catIdx) => {
            const pastelClass = pastelColors[catIdx] || "pastel-blue";
            return (
              <div
                key={cat.name}
                className={`scroll-reveal ${
                  catIdx === 0
                    ? "md:col-span-7"
                    : catIdx === 1
                      ? "md:col-span-5"
                      : "md:col-span-4"
                }`}
                style={{ transitionDelay: `${catIdx * 0.08}s` }}
              >
                <div>
                  <div className={`badge ${pastelClass} mb-4`}>
                    {cat.name}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {cat.skills.map((skill, i) => (
                      <div key={skill.name} className="skill-cell" style={{ transitionDelay: `${i * 0.06}s` }}>
                        <Image
                          src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace("#", "")}`}
                          alt={skill.name}
                          width={28}
                          height={28}
                          unoptimized
                        />
                        <span translate="no">{skill.name}</span>
                      </div>
                    ))}
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
