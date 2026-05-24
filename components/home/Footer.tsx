"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <footer
        className="relative flex justify-between items-center flex-wrap font-mono uppercase"
        style={{
          zIndex: 1,
          borderTop: "3px double var(--color-ink)",
          padding: "24px 28px",
          fontSize: "10px",
          letterSpacing: "0.16em",
          color: "var(--color-ink-soft)",
          gap: "14px",
          background: "var(--color-paper)",
        }}
      >
        <span>HQ: Wherever the floor is clean</span>
        <span style={{ color: "var(--color-accent)", letterSpacing: "0.3em" }}>★ ★ ★</span>
        <span
          style={{
            border: "1.5px solid var(--color-accent)",
            color: "var(--color-accent)",
            padding: "4px 10px",
            transform: "rotate(-3deg)",
            fontWeight: 600,
          }}
        >
          Opposition Filed · 2026
        </span>
        <a href="#" style={{ color: "var(--color-ink-soft)", textDecoration: "none" }}>
          anticockroachjantaparty.org
        </a>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed z-[90] border-0 flex items-center justify-center cursor-pointer transition-all ${showTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{
          bottom: 24,
          right: 24,
          background: "var(--color-ink)",
          color: "var(--color-paper)",
          width: 44,
          height: 44,
          fontSize: 18,
          boxShadow: "3px 3px 0 var(--color-accent)",
        }}
        title="Back to top"
      >
        ↑
      </button>
    </>
  );
}
