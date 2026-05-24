"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ACT_MANIFESTO } from "@/lib/expose-data";
import Cite from "./Cite";
import VideoEmbed from "./VideoEmbed";

export default function ActManifesto() {
  // First item open by default so the reader immediately sees the pattern.
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const toggleItem = (i: number) =>
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--color-ink)",
        color: "var(--color-paper)",
        paddingTop: "40px",
        paddingBottom: "80px",
      }}
    >
      {/* What this movement has never criticized */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "56px",
          paddingBottom: "56px",
          background: "rgba(244,235,215,0.04)",
          borderTop: "2px solid var(--color-accent)",
          borderBottom: "2px solid var(--color-accent)",
        }}
      >
        <div
          className="font-mono uppercase text-accent"
          style={{
            fontSize: "13px",
            letterSpacing: "0.3em",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          The Silence is the Tell
        </div>
        <h3
          className="font-display font-black italic"
          style={{
            fontSize: "clamp(24px, 3.4vw, 38px)",
            lineHeight: 1.2,
            textAlign: "center",
            marginBottom: "16px",
            color: "var(--color-paper)",
          }}
        >
          {ACT_MANIFESTO.neverCriticized.title}
        </h3>
        <p
          className="font-display"
          style={{
            fontSize: "16px",
            lineHeight: 1.65,
            color: "rgba(244,235,215,0.75)",
            textAlign: "center",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
          }}
        >
          {ACT_MANIFESTO.neverCriticized.intro}
        </p>
        {/* Interactive accordion — click any row to expand the receipts */}
        <div
          className="font-mono uppercase text-accent"
          style={{
            fontSize: "11px",
            letterSpacing: "0.28em",
            textAlign: "center",
            marginBottom: "14px",
            opacity: 0.7,
          }}
        >
          ↓ click any row to expand the receipts
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {ACT_MANIFESTO.neverCriticized.items.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                style={{
                  background: isOpen ? "rgba(176,51,30,0.06)" : "var(--color-ink)",
                  border: `1px solid ${isOpen ? "var(--color-accent)" : "rgba(244,235,215,0.18)"}`,
                  transition: "background 0.25s ease, border-color 0.25s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleItem(i)}
                  aria-expanded={isOpen}
                  aria-controls={`silence-detail-${i}`}
                  className="silence-row-btn"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: "var(--color-paper)",
                    cursor: "pointer",
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  {/* Index */}
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.18em",
                      color: "var(--color-accent)",
                      fontWeight: 700,
                      flexShrink: 0,
                      minWidth: "28px",
                    }}
                  >
                    #{(i + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Topic + badge wrap together — flex-wraps on narrow viewports */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px 14px",
                    }}
                  >
                    <span
                      className="font-display font-black"
                      style={{
                        fontSize: "clamp(15px, 1.85vw, 18px)",
                        lineHeight: 1.3,
                        color: "var(--color-paper)",
                      }}
                    >
                      {item.topic}
                    </span>
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "0.22em",
                        color: "var(--color-accent)",
                        border: "1px solid rgba(176,51,30,0.55)",
                        padding: "3px 8px",
                        whiteSpace: "nowrap",
                        fontWeight: 600,
                      }}
                    >
                      0 CJP posts
                    </span>
                  </div>

                  {/* Chevron — rotates 45° to become an "×" when open */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontSize: "26px",
                      color: "var(--color-accent)",
                      display: "inline-block",
                      fontWeight: 300,
                      lineHeight: 1,
                      flexShrink: 0,
                      width: "22px",
                      textAlign: "center",
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`silence-detail-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="font-display"
                        style={{
                          padding: "16px 22px 22px 64px",
                          fontSize: "15px",
                          lineHeight: 1.65,
                          color: "rgba(244,235,215,0.82)",
                          borderTop: "1px dashed rgba(176,51,30,0.35)",
                        }}
                      >
                        {item.detail}
                        {item.sources && item.sources.length > 0 && (
                          <> <Cite ids={item.sources} /></>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <div
          className="font-display italic"
          style={{
            fontSize: "clamp(18px, 2.4vw, 24px)",
            lineHeight: 1.45,
            color: "var(--color-paper)",
            textAlign: "center",
            marginTop: "48px",
            maxWidth: "820px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {ACT_MANIFESTO.neverCriticized.closer}
        </div>
      </motion.div>

      {/* Outside-voice reel — GenZ hope-manipulation commentary */}
      <div
        style={{
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "56px",
          paddingBottom: "16px",
        }}
      >
        <VideoEmbed
          src="/genz-hope-manipulation.mp4"
          eyebrow="★ The outside voice"
          aspect="portrait"
          theme="dark"
          maxWidth={420}
        />
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          :global(.manifesto-row) {
            grid-template-columns: 48px 1fr !important;
            gap: 16px !important;
          }
        }
        :global(.silence-row-btn:hover) {
          background: rgba(176, 51, 30, 0.08) !important;
        }
        :global(.silence-row-btn:focus-visible) {
          outline: 2px solid var(--color-accent);
          outline-offset: -2px;
        }
      `}</style>
    </section>
  );
}
