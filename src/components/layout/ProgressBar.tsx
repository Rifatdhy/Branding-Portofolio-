"use client";

import { useEffect } from "react";

export function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    if (!bar) return;
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? scrollTop / docHeight : 0;
          bar!.style.transform = `scaleX(${progress})`;
          bar!.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="progress-bar"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      aria-label="Scroll progress"
      className="fixed top-0 left-0 h-[2px] z-[60] pointer-events-none"
      style={{ background: "var(--color-text-muted)" }}
    />
  );
}
