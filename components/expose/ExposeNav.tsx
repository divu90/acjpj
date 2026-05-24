"use client";
import Link from "next/link";
import { exposeActions } from "./store";

export default function ExposeNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[80] bg-ink/85 backdrop-blur-sm border-b border-accent/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center gap-2">
        <Link
          href="/"
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-paper/80 hover:text-accent no-underline whitespace-nowrap"
        >
          ← ACJP · Home
        </Link>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent hidden md:block">
          The Counter-Investigation · /expose
        </div>
        <button
          onClick={() => exposeActions.openDrawer()}
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-paper hover:text-accent bg-transparent border border-paper/30 hover:border-accent px-2.5 sm:px-3 py-1 sm:py-1.5 cursor-pointer transition-colors whitespace-nowrap"
        >
          Sources
        </button>
      </div>
    </nav>
  );
}
