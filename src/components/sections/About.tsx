"use client";

import { education } from "@/lib/data";
import { SITE } from "@/lib/constants";
import { Reveal } from "../magic/Reveal";

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
            <Reveal>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  Profile
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
                  Siapa di balik layar.
                </h2>
                <p
                  className="text-sm mt-6 leading-relaxed font-mono"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {SITE.location} &middot; {SITE.major} &middot; Angkatan{" "}
                  {SITE.batch}
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <div className="grid grid-cols-3 divide-x divide-[var(--color-border)] border-y border-[var(--color-border)] py-8 mb-12">
                {items.map((stat) => (
                  <div key={stat.label} className="px-4 first:pl-0">
                    <span className="block font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                      {stat.num}
                    </span>
                    <span className="block mt-1 text-xs text-secondary">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="max-w-prose">
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "var(--color-text-primary)" }}
              >
                Halo, saya Rifat &mdash; mahasiswa Teknik Informatika di{" "}
                <strong>{SITE.location}</strong> yang berfokus pada pengembangan
                web. Dari membangun aplikasi dengan Laravel hingga eksplorasi
                React, saya menikmati setiap proses belajar dan mengulik hal
                baru.
              </p>
            </Reveal>

            <Reveal className="max-w-prose">
              <p className="mt-4 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Di luar pengembangan web, saya juga mendalami jaringan komputer
                &mdash; routing, switching, dan administrasi network. Saya cukup
                sering bekerja dengan MikroTik dan Cisco untuk kebutuhan lab
                maupun project lapangan.
              </p>
            </Reveal>

            <Reveal className="max-w-prose">
              <p className="mt-4 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Saya bisa membantu di beberapa bidang: membangun website modern
                (React, Next.js, Laravel), mengembangkan aplikasi desktop maupun
                mobile, serta menangani infrastruktur jaringan &mdash; dari
                konfigurasi MikroTik, Cisco, hingga troubleshooting konektivitas.
                Saat ini saya juga aktif mendalami TypeScript dan desain UI.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-24 md:mt-32">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                Pendidikan.
              </h3>
              <div className="section-divider" />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <div className="edu-timeline">
              {education.map((edu) => (
                <Reveal key={edu.school} className="edu-item">
                  <div className="edu-dot" />
                  <div className="edu-card">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-lg font-bold">
                          {edu.school}
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
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        </div>
    </section>
  );
}
