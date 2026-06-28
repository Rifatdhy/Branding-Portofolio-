import { SITE, SOCIAL } from "@/lib/constants";
import { education } from "@/lib/data";

export default function CVPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Curriculum Vitae.
          </h1>
          <div
            className="section-divider"
          />
        </div>

        <div
          className="p-8 md:p-10 rounded-lg print:border-none"
          style={{
            background: "var(--color-surface-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-8" style={{ borderBottom: "1px solid var(--color-border)" }}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                {SITE.name}
              </h2>
              <p style={{ color: "var(--color-text-secondary)" }}>
                {SITE.title}
              </p>
            </div>
            <div className="text-sm text-right" style={{ color: "var(--color-text-secondary)" }}>
              <p>{SITE.email}</p>
              <p>{SITE.phone}</p>
              <p>{SOCIAL.github.replace("https://", "")}</p>
            </div>
          </header>

          <section className="mb-8">
            <h3 className="font-display text-lg font-bold mb-3">Tentang Saya</h3>
            <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Mahasiswa Teknik Informatika di {SITE.location} yang tertarik pada
              pengembangan web dan jaringan komputer. Berpengalaman dalam
              membangun aplikasi web dengan React, Next.js, dan Laravel, serta
              konfigurasi jaringan menggunakan MikroTik dan Cisco.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-display text-lg font-bold mb-3">Pendidikan</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.title}>
                  <h4 className="font-semibold">{edu.title}</h4>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {edu.description} — {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-display text-lg font-bold mb-3">Keahlian</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-sm mb-1">Frontend</p>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Backend</p>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Laravel, Node.js, MySQL
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Tools</p>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Git, Figma, Linux
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Jaringan</p>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Cisco, MikroTik, Routing & Switching
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-display text-lg font-bold mb-3">Project</h3>
            <ul className="space-y-2" style={{ color: "var(--color-text-secondary)" }}>
              <li>
                <strong>Jarvis</strong> — Chatbot AI berbasis AIML dengan
                Text-to-Speech (Python)
              </li>
              <li>
                <strong>Mini-Whatsapp</strong> — Aplikasi chat multi-client
                dengan Java Socket Programming
              </li>
              <li>
                <strong>Chat-bot-UTS</strong> — Sistem chatbot berbasis aturan
                untuk tugas AI (Python)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
