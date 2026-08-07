"use client";

import { SOCIAL } from "@/lib/constants";
import { GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-[var(--color-text-muted)] py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm">
            &copy; {year} Rifat Dhiya Ul Lail
          </p>
          <div className="flex items-center gap-x-4">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors" aria-label="Github">
              <GithubLogo size={22} />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors" aria-label="LinkedIn">
              <LinkedinLogo size={22} />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors" aria-label="Instagram">
              <InstagramLogo size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}