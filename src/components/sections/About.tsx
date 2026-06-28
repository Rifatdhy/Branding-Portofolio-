"use client";

import { education, allTechs } from "@/lib/data";
import { SITE } from "@/lib/constants";

export function About() {
  const items = [
    { num: "2+", label: "Tahun Eksplorasi Web" },
    { num: "3+", label: "Project Publik" },
    { num: "S1", label: "Teknik Informatika" },
  ];

  return (
    <section id="tentang" className="pt-28 pb-36 md:pt-32 md:pb-40 bg-radial-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="scroll-reveal">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
                Siapa di balik layar.
              </h2>
              <div className="section-divider" />
              <p
                className="text-sm mt-6 leading-relaxed font-mono"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {SITE.location} &middot; {SITE.major} &middot; Angkatan{" "}
                {SITE.batch}
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="scroll-reveal">
              <div className="grid grid-cols-3 gap-3 mb-10">
                {items.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <span
                      className="stat-number"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {stat.num}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-reveal">
              <blockquote
                className="text-xl md:text-2xl leading-relaxed pl-6 md:pl-8 font-serif font-medium italic border-l-[3px] py-2"
                style={{
                  color: "var(--color-text-primary)",
                  borderColor: "var(--color-border)",
                }}
              >
                &ldquo;Buat saya, coding bukan cuma nulis function, tapi soal
                bikin sesuatu yang benar-benar dipakai orang.&rdquo;
              </blockquote>
            </div>

            <div className="scroll-reveal max-w-prose">
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "var(--color-text-primary)" }}
              >
                Halo, saya Rifat &mdash; mahasiswa Teknik Informatika di{" "}
                <strong>{SITE.location}</strong> yang tertarik sama pengembangan
                web. Dari ngoprek Laravel sampai mainin React, saya nikmatin
                proses belajar dan ngulik hal baru.
              </p>
            </div>

            <div className="scroll-reveal max-w-prose">
              <p className="mt-4 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Di luar web, saya juga tertarik sama jaringan komputer &mdash;
                routing, switching, dan administrasi network. Lumayan sering
                utak-atik MikroTik dan Cisco buat kebutuhan lab dan project
                lapangan.
              </p>
            </div>

            <div className="scroll-reveal max-w-prose">
              <p className="mt-4 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Saat ini aktif ngerjain project freelance dan explore ekosistem
                JavaScript &mdash; terutama Next.js sama TypeScript. Kadang
                iseng bikin UI pakai Figma.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-24 md:mt-32">
          <div className="md:col-span-5">
            <div className="scroll-reveal">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                Pendidikan.
              </h3>
              <div className="section-divider" />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="edu-timeline">
              {education.map((edu) => (
                <div key={edu.title} className="scroll-reveal edu-item">
                  <div className="edu-dot" />
                  <div className="edu-card">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-lg font-bold">
                          {edu.title}
                        </h4>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {edu.period}
                        </p>
                        <p
                          className="leading-relaxed mt-1"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {edu.description} {edu.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="scroll-reveal">
            <div className="flex flex-wrap gap-2">
              {allTechs.map((tech) => (
                <span
                  key={tech}
                  className="badge pastel-blue"
                  translate="no"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
