import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE, SOCIAL } from "@/lib/constants";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.title}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Portfolio`,
    description: SITE.description,
    type: "website",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.description,
  },
  keywords:
    "Rifat Dhiya Ul Lail, portfolio, web developer, teknik informatika, Jakarta Global University, frontend, react, nextjs, network",
  authors: [{ name: SITE.name }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.title,
  almaMater: "Jakarta Global University",
  knowsAbout: [
    "Web Development",
    "Network Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "MikroTik",
    "Cisco",
  ],
  sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0b0b0d"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fafafc"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var m=matchMedia("(prefers-color-scheme: light)");if(!t)t=m.matches?"light":"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="fixed -top-20 left-4 z-[70] px-4 py-2 rounded bg-[var(--color-text-primary)] text-[var(--color-surface)] text-sm font-medium transition-all duration-300 focus:top-4"
        >
          Loncat ke konten utama
        </a>
        <ProgressBar />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
