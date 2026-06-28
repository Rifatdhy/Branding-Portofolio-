"use client";

import { useEffect, useRef } from "react";

export function ThemeScript() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const script = document.createElement("script");
    script.innerHTML = `
      (function() {
        var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        });
      })();
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}
