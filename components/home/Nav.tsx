"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 80) cur = el.id;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-[100] bg-ink flex justify-between items-center px-7 border-b-2 border-accent">
      <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper py-3 whitespace-nowrap">
        <span className="text-accent">ACJP</span> · Anti-Cockroach Janta Party
      </div>
      <div className={`md:flex md:gap-0 md:relative md:bg-transparent md:flex-row md:border-0 ${open ? "flex flex-col absolute top-full left-0 right-0 bg-ink border-t border-white/10" : "hidden md:flex"}`} id="nav-links">
        {[
          { href: "#home", label: "Home" },
          { href: "#manifesto", label: "Manifesto" },
          { href: "#about", label: "About" },
          { href: "#pledge", label: "Take Pledge" },
          { href: "#game", label: "Roach Hunt" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
          >
            {l.label}
          </a>
        ))}
        <Link href="/expose" onClick={close} className="nav-link text-accent">
          ⚠ Expose
        </Link>
      </div>
      <button
        className="md:hidden bg-transparent border-0 text-paper text-[22px] cursor-pointer p-2"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        ☰
      </button>
    </nav>
  );
}
