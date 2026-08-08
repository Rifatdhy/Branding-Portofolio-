"use client";

import { useState } from "react";
import { SITE, SOCIAL } from "@/lib/constants";
import {
  WhatsappLogo,
  Envelope,
  DownloadSimple,
  GithubLogo,
  ArrowUpRight,
  LinkedinLogo,
  InstagramLogo
} from "@phosphor-icons/react";
import { Reveal } from "../magic/Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      setErrors(data.errors || ["Gagal mengirim. Coba lagi."]);
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontak" className="py-28 md:py-32 bg-radial-soft">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Tersedia untuk diskusi
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight mt-4">
              Ada project atau ide?
            </h2>
            <p
              className="mt-6 leading-relaxed max-w-md mx-auto text-secondary"
            >
              Selalu terbuka buat diskusi, kolaborasi, atau sekadar ngobrol
              seputar teknologi dan pengembangan web.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-2xl mx-auto mt-12">
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="icon-box">
                  <WhatsappLogo
                    aria-hidden="true"
                    weight="bold"
                    className="text-2xl text-secondary"
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    WhatsApp
                  </span>
                  <span
                    className="block text-xs truncate text-secondary"
                  >
                    {SITE.phone}
                  </span>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  weight="bold"
                  className="text-sm ml-auto shrink-0 text-muted"
                />
              </a>
              <a
                href={SITE.emailCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="icon-box">
                  <Envelope
                    aria-hidden="true"
                    weight="bold"
                    className="text-2xl text-secondary"
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    Email
                  </span>
                  <span
                    className="block text-xs truncate text-secondary"
                  >
                    {SITE.email}
                  </span>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  weight="bold"
                  className="text-sm ml-auto shrink-0 text-muted"
                />
              </a>
              <a
                href="/assets/CV%20Rifat.pdf"
                download
                className="contact-card"
              >
                <div className="icon-box">
                  <DownloadSimple
                    aria-hidden="true"
                    weight="bold"
                    className="text-2xl text-secondary"
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    Download CV
                  </span>
                  <span
                    className="block text-xs truncate text-secondary"
                  >
                    PDF &mdash; Rifat Dhiya Ul Lail
                  </span>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  weight="bold"
                  className="text-sm ml-auto shrink-0 text-muted"
                />
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="icon-box">
                  <GithubLogo
                    aria-hidden="true"
                    weight="bold"
                    className="text-2xl"
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-sm font-display font-semibold truncate">
                    GitHub
                  </span>
                  <span
                    className="block text-xs truncate text-secondary"
                  >
                    @Rifatdhy
                  </span>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  weight="bold"
                  className="text-sm ml-auto shrink-0 text-muted"
                />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-lg mx-auto mt-12">
            {status === "success" ? (
              <div className="rounded-2xl p-6 text-center border" style={{ background: "var(--color-surface-card)", borderColor: "var(--color-border)" }}>
                <Envelope weight="bold" className="text-4xl mx-auto mb-3" style={{ color: "var(--color-text-primary)" }} />
                <p className="font-display font-semibold text-lg">Pesan terkirim!</p>
                <p className="text-sm mt-1 text-secondary">Saya akan membalas secepatnya. Terima kasih.</p>
                <button onClick={() => setStatus("idle")} className="btn btn-outline mt-4">
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <textarea
                  name="message"
                  placeholder="Pesan..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  className="form-input"
                />

                {errors.length > 0 && (
                  <div className="rounded-lg p-3 text-sm" style={{ background: "var(--color-surface-alt)", color: "var(--color-text-secondary)" }}>
                    {errors.map((err, i) => (
                      <p key={i}>{err}</p>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary w-full justify-center"
                >
                  {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-center gap-3 mt-12">
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
              <WhatsappLogo aria-hidden="true" weight="bold" className="text-xl" />
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GithubLogo aria-hidden="true" weight="bold" className="text-xl" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinLogo aria-hidden="true" weight="bold" className="text-xl" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <InstagramLogo aria-hidden="true" weight="bold" className="text-xl" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}