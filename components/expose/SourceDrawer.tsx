"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SOURCES } from "@/lib/expose-data";
import { exposeActions, useExposeState } from "./store";

export default function SourceDrawer() {
  const open = useExposeState((s) => s.drawerOpen);
  const focused = useExposeState((s) => s.focusedSource);
  const focusedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && focused && focusedRef.current) {
      focusedRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [open, focused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") exposeActions.closeDrawer();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const sources = Object.values(SOURCES);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => exposeActions.closeDrawer()}
            className="fixed inset-0 bg-ink/80 backdrop-blur-[3px] z-[300]"
          />
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[560px] z-[301] bg-paper border-l-2 border-ink overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-ink text-paper px-6 py-4 flex justify-between items-center border-b-2 border-accent">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">
                  Source Drawer
                </div>
                <div className="font-display font-black text-xl">All citations · {sources.length}</div>
              </div>
              <button
                onClick={() => exposeActions.closeDrawer()}
                className="font-mono text-sm tracking-[0.2em] uppercase text-paper hover:text-accent bg-transparent border-0 cursor-pointer"
                aria-label="Close drawer"
              >
                ✕ Close
              </button>
            </div>

            <div className="px-6 py-6 space-y-3">
              {sources.map((s) => (
                <div
                  key={s.id}
                  ref={focused === s.id ? focusedRef : null}
                  className={`p-4 border transition-all ${
                    focused === s.id
                      ? "border-accent bg-paper-deep shadow-[4px_4px_0_var(--color-ink)]"
                      : "border-ink/15 bg-paper hover:border-ink"
                  }`}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-accent font-semibold">
                      [{s.id.replace("s", "")}]
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-soft">
                      {s.outlet}
                    </span>
                  </div>
                  <div className="font-display text-[15px] leading-snug text-ink mb-2">{s.title}</div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-ink-soft hover:text-accent underline decoration-dotted break-all"
                  >
                    {s.url}
                  </a>
                </div>
              ))}
            </div>

            <div className="px-6 pb-8 pt-2 border-t border-ink/15 mt-4">
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-soft/70 text-center">
                Every claim above is sourced. Tags visible. Honesty intact.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
