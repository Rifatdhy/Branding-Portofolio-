import type { Metadata } from "next";
import { Newsreader, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { ClientEffects } from "@/components/layout/ClientEffects";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const newsreader = Newsreader({
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
  title: `${SITE.name} — ${SITE.title}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Portfolio`,
    description: SITE.description,
    type: "website",
    url: SITE.url,
  },
  keywords:
    "Rifat Dhiya Ul Lail, portfolio, web developer, teknik informatika, Jakarta Global University, frontend, react, nextjs, network",
  authors: [{ name: SITE.name }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${newsreader.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23787774'/%3E%3Ctext x='16' y='22' text-anchor='middle' fill='%23FBFBFA' font-family='DM Sans,sans-serif' font-weight='700' font-size='16'%3ERD%3C/text%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css" />
        <meta name="theme-color" content="#FBFBFA" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed -top-20 left-4 z-70 px-4 py-2 rounded bg-[var(--color-text-primary)] text-[var(--color-surface)] text-sm font-medium transition-all duration-300 focus:top-4"
        >
          Loncat ke konten utama
        </a>
        <ProgressBar />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <ClientEffects />
      </body>
    </html>
  );
}
