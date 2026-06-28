"use client";

import { useState } from "react";
import { SITE, SOCIAL } from "@/lib/constants";

export function Contact() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_to", SITE.email);
    formData.append("_subject", "Pesan Baru dari Portfolio");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          type: "success",
          message: "Pesan berhasil dikirim. Saya akan menghubungi Anda segera.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            "Gagal mengirim pesan. Silakan kirim langsung ke email atau WhatsApp.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Gagal mengirim pesan. Silakan kirim langsung ke email atau WhatsApp.",
      });
    }
    setLoading(false);
  }

  return (
    <section id="kontak" className="py-28 md:py-32 bg-radial-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow inline-flex">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block bg-current opacity-60"
              />
              Tersedia untuk diskusi
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              Ada project atau ide?
            </h2>
            <div className="section-divider mx-auto" />
            <p
              className="mt-6 leading-relaxed max-w-md mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Selalu terbuka buat diskusi, kolaborasi, atau sekadar ngobrol
              seputar teknologi dan pengembangan web.
            </p>
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="max-w-2xl mx-auto mt-12">
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="icon-box">
                  <i
                    aria-hidden="true"
                    className="ph-bold ph-whatsapp-logo"
                    style={{ fontSize: "1.25rem", color: "var(--color-text-secondary)" }}
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    WhatsApp
                  </span>
                  <span
                    className="block text-xs truncate"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {SITE.phone}
                  </span>
                </div>
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="contact-card"
              >
                <div className="icon-box">
                  <i
                    aria-hidden="true"
                    className="ph-bold ph-envelope"
                    style={{ fontSize: "1.25rem", color: "var(--color-text-secondary)" }}
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    Email
                  </span>
                  <span
                    className="block text-xs truncate"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {SITE.email}
                  </span>
                </div>
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </a>
              <a
                href="/assets/CV%20Rifat.pdf"
                download
                className="contact-card"
              >
                <div className="icon-box">
                  <i
                    aria-hidden="true"
                    className="ph-bold ph-download-simple"
                    style={{ fontSize: "1.25rem", color: "var(--color-text-secondary)" }}
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    Download CV
                  </span>
                  <span
                    className="block text-xs truncate"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    PDF &mdash; Rifat Dhiya Ul Lail
                  </span>
                </div>
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="icon-box">
                  <i
                    aria-hidden="true"
                    className="ph-bold ph-github-logo"
                    style={{ fontSize: "1.25rem" }}
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    GitHub
                  </span>
                  <span
                    className="block text-xs truncate"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    @Rifatdhy
                  </span>
                </div>
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="max-w-xl mx-auto mt-16">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nama</label>
                <input type="text" id="name" name="name" required autoComplete="name" placeholder="Masukkan nama" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" required autoComplete="email" inputMode="email" placeholder="contoh@email.com" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Pesan</label>
                <textarea id="message" name="message" required placeholder="Ceritakan project atau idemu di sini&hellip;" className="form-input" rows={4} />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center mt-2" disabled={loading}>
                {loading ? (
                  <>
                    <i aria-hidden="true" className="ph-bold ph-spinner-gap ph-spin text-lg" />
                    Mengirim…
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <i aria-hidden="true" className="ph-bold ph-paper-plane-right text-lg" />
                  </>
                )}
              </button>
              {status.message && (
                <p
                  className="text-sm text-center mt-3 inline-flex items-center gap-2 justify-center"
                  style={{
                    color:
                      status.type === "success"
                        ? "var(--color-text-secondary)"
                        : "var(--color-text-primary)",
                  }}
                  role="status"
                  aria-live="polite"
                >
                  <i
                    aria-hidden="true"
                    className={`ph-bold ${
                      status.type === "success" ? "ph-check-circle" : "ph-warning-circle"
                    }`}
                  />
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="flex justify-center gap-3 mt-12">
            {[
              { href: SOCIAL.whatsapp, label: "WhatsApp", icon: "ph-whatsapp-logo" },
              { href: SOCIAL.github, label: "GitHub", icon: "ph-github-logo" },
              { href: SOCIAL.linkedin, label: "LinkedIn", icon: "ph-linkedin-logo" },
              { href: SOCIAL.instagram, label: "Instagram", icon: "ph-instagram-logo" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.label}>
                <i aria-hidden="true" className={`ph-bold ${s.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
