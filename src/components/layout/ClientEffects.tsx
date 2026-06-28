"use client";

import { useEffect } from "react";

export function ClientEffects() {
  useEffect(() => {
    const backToTop = document.getElementById("back-to-top");
    const hero = document.getElementById("hero");
    const observers: IntersectionObserver[] = [];

    if (hero && backToTop) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          backToTop.classList.toggle("show", !entry.isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(hero);
      observers.push(observer);
    }

    if (backToTop) {
      const handler = () => window.scrollTo({ top: 0, behavior: "smooth" });
      backToTop.addEventListener("click", handler);
    }

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              const match = link.getAttribute("href") === "#" + id;
              link.classList.toggle("active", match);
              if (match) link.setAttribute("aria-current", "page");
              else link.removeAttribute("aria-current");
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
    );
    sections.forEach((s) => sectionObserver.observe(s));
    observers.push(sectionObserver);

    const revealEls = document.querySelectorAll(".scroll-reveal");
    if (revealEls.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      observers.push(revealObserver);
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => el.classList.add("visible"));
    }

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
