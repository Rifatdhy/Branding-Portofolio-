"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[70] p-4"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="max-w-md mx-auto flex items-center gap-4 px-4 py-3 rounded border shadow-tint"
        style={{
          background: "var(--color-surface-card)",
          borderColor: "var(--color-border)",
          pointerEvents: "auto",
        }}
      >
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Situs ini menggunakan cookie anonim untuk analytics.{" "}
          <Link
            href="/privacy"
            className="underline"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Pelajari lebih lanjut
          </Link>
        </p>
        <button
          onClick={accept}
          className="btn btn-primary text-xs shrink-0"
          style={{ padding: "0.375rem 0.75rem", minHeight: "32px" }}
        >
          Setuju
        </button>
      </div>
    </div>
  );
}
