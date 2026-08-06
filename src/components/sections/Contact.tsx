"use client";

import { SITE, SOCIAL } from "@/lib/constants";

export function Contact() {


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
              className="mt-6 leading-relaxed max-w-md mx-auto text-secondary"
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
                    className="ph-bold ph-whatsapp-logo text-2xl text-secondary"
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
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0 text-muted"
                />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="contact-card"
              >
                <div className="icon-box">
                  <i
                    aria-hidden="true"
                    className="ph-bold ph-envelope text-2xl text-secondary"
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
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0 text-muted"
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
                    className="ph-bold ph-download-simple text-2xl text-secondary"
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
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0 text-muted"
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
                    className="ph-bold ph-github-logo text-2xl"
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
                <i
                  aria-hidden="true"
                  className="ph-bold ph-arrow-up-right text-sm ml-auto shrink-0 text-muted"
                />
              </a>
            </div>
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
