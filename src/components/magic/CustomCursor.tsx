"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const prevRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = "ontouchstart" in window;
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("cursor-hidden");

    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      const dx = posRef.current.x - prevRef.current.x;
      const dy = posRef.current.y - prevRef.current.y;
      prevRef.current.x += dx * 0.12;
      prevRef.current.y += dy * 0.12;
      if (cursor) {
        cursor.style.transform = `translate(${prevRef.current.x - 12}px, ${prevRef.current.y - 12}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", move, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("cursor-hidden");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999] mix-blend-difference"
      style={{
        background: "rgba(255,255,255,0.3)",
        boxShadow: "0 0 12px rgba(255,255,255,0.15)",
        filter: "blur(0.5px)",
        transition: "transform 0.05s linear",
      }}
    />
  );
}
