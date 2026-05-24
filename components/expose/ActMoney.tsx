"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ACT_MONEY, ACT_THREAT } from "@/lib/expose-data";
import ActHeader from "./ActHeader";
import Cite from "./Cite";
import Tag from "./Tag";

// Single keyed accordion state for the whole Act V — keys: "d-<idx>" for each
// domain row, "t-malware" / "t-impersonators" for the two threat cards.
// First domain + Threat 1 default to open so the reader immediately sees the
// expand-pattern without having to discover it.
function useAccordion(defaultOpen: string[] = []) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));
  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  return { isOpen: (k: string) => open.has(k), toggle };
}

function CountUp({ to, duration = 2000 }: { to: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const prog = Math.min((ts - start) / duration, 1);
            setN(Math.floor(prog * to));
            if (prog < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{n.toLocaleString("en-IN")}</span>;
}

export default function ActMoney() {
  // cockroachjantaparty.buzz is domains[3] — keep it open by default; both
  // threats start closed (reader clicks to reveal).
  const { isOpen, toggle } = useAccordion(["d-3"]);
  return (
    <section className="relative bg-paper pt-20 md:pt-28 pb-8 md:pb-16">
      {/* Subtle divider between Act IV and Act V */}
      <div
        aria-hidden
        style={{
          width: "140px",
          height: "1px",
          margin: "0 auto 64px",
          borderTop: "1px dashed rgba(176,51,30,0.35)",
        }}
      />

      <ActHeader eyebrow="Act V" title={ACT_MONEY.title} />

      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          marginBottom: "72px",
        }}
      >
        <div
          className="font-mono uppercase text-accent"
          style={{
            fontSize: "13px",
            letterSpacing: "0.3em",
            marginBottom: "14px",
            textAlign: "center",
          }}
        >
          The donation infrastructure
        </div>
        <div
          className="font-mono uppercase text-ink-soft"
          style={{
            fontSize: "11px",
            letterSpacing: "0.28em",
            textAlign: "center",
            marginBottom: "28px",
            opacity: 0.7,
          }}
        >
          ↓ click any domain to expand donation flow + disclaimer
        </div>
        <div className="grid" style={{ gap: "12px" }}>
          {ACT_MONEY.domains.map((d, i) => {
            const key = `d-${i}`;
            const open = isOpen(key);
            return (
              <motion.div
                key={d.url}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                style={{
                  border: `2px solid ${
                    open
                      ? "var(--color-accent)"
                      : d.official
                      ? "var(--color-ink)"
                      : "rgba(26,22,18,0.2)"
                  }`,
                  background: open
                    ? "rgba(176,51,30,0.04)"
                    : d.official
                    ? "var(--color-paper-deep)"
                    : "var(--color-paper)",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggle(key)}
                  aria-expanded={open}
                  aria-controls={`domain-detail-${i}`}
                  className="domain-row-btn"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: "var(--color-ink)",
                    cursor: "pointer",
                    padding: "16px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
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
                      className="font-mono text-ink font-semibold break-all"
                      style={{
                        fontSize: "16px",
                        letterSpacing: "0.04em",
                        lineHeight: 1.3,
                      }}
                    >
                      {d.url}
                    </span>
                    {d.official && (
                      <span
                        className="bg-accent text-paper font-mono uppercase"
                        style={{
                          padding: "3px 8px",
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Flagship · Dipke
                      </span>
                    )}
                  </div>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-accent"
                    style={{
                      fontSize: "22px",
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
                  {open && (
                    <motion.div
                      id={`domain-detail-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "14px 22px 20px",
                          borderTop: "1px dashed rgba(176,51,30,0.35)",
                          display: "grid",
                          gridTemplateColumns: "auto 1fr",
                          gap: "10px 18px",
                          alignItems: "start",
                        }}
                      >
                        <div
                          className="font-mono uppercase text-accent"
                          style={{
                            fontSize: "10.5px",
                            letterSpacing: "0.22em",
                            paddingTop: "3px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Donation flow
                        </div>
                        <div
                          className="font-display text-ink"
                          style={{ fontSize: "16px", lineHeight: 1.5 }}
                        >
                          {d.donation}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <div
          className="font-mono italic text-ink-soft/75"
          style={{
            marginTop: "20px",
            fontSize: "13px",
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: "780px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Whether the UPI handles and Razorpay accounts on look-alike domains are controlled by Dipke or by squatters is{" "}
          <span className="text-accent font-bold not-italic">UNVERIFIED</span>. No reporting has pierced this.
        </div>
      </div>

      {/* ─── HIJACK BLOCK — sits between the domains list above and the registration grid below ─── */}
      <div
        aria-hidden
        style={{
          width: "140px",
          height: "1px",
          margin: "48px auto 56px",
          borderTop: "1px dashed rgba(176,51,30,0.35)",
        }}
      />
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingBottom: "20px",
        }}
      >
        {/* Eyebrow + heading + intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <div
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "13px",
              letterSpacing: "0.3em",
              marginBottom: "18px",
            }}
          >
            The hijack — where the data, the donations, and the brand end up
          </div>
          <h3
            className="font-display font-black text-ink"
            style={{
              fontSize: "clamp(28px, 4.4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              maxWidth: "920px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "22px",
            }}
          >
            {ACT_THREAT.title}
          </h3>
          <p
            className="font-display text-ink-soft"
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.6,
              maxWidth: "820px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {ACT_THREAT.intro}
            <Cite ids={ACT_THREAT.titleSources} />
          </p>
        </motion.div>

        <div
          className="font-mono uppercase text-accent"
          style={{
            fontSize: "11px",
            letterSpacing: "0.28em",
            textAlign: "center",
            marginBottom: "20px",
            opacity: 0.75,
          }}
        >
          ↓ click any threat to expand the receipts
        </div>

        {/* THREAT 1 — MALWARE (CRITICAL) — accordion */}
        {(() => {
          const key = "t-malware";
          const open = isOpen(key);
          return (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              style={{
                border: "2px solid var(--color-accent)",
                background: open
                  ? "var(--color-paper-deep)"
                  : "rgba(176,51,30,0.04)",
                transition: "background 0.25s ease",
                marginBottom: "20px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggle(key)}
                aria-expanded={open}
                aria-controls="threat-malware-detail"
                className="threat-row-btn"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  color: "var(--color-ink)",
                  cursor: "pointer",
                  padding: "22px clamp(20px, 3vw, 32px)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Tag kind={ACT_THREAT.malware.tag} />
                    <span
                      className="font-mono uppercase font-bold text-paper"
                      style={{
                        background: "var(--color-accent)",
                        padding: "5px 12px",
                        fontSize: "11px",
                        letterSpacing: "0.22em",
                      }}
                    >
                      ★ {ACT_THREAT.malware.severity}
                    </span>
                    <span
                      className="font-mono uppercase text-ink-soft"
                      style={{ fontSize: "12px", letterSpacing: "0.2em" }}
                    >
                      {ACT_THREAT.malware.label}
                    </span>
                  </div>
                  <h4
                    className="font-display font-black text-ink"
                    style={{
                      fontSize: "clamp(18px, 2.4vw, 24px)",
                      lineHeight: 1.28,
                      margin: 0,
                      maxWidth: "880px",
                    }}
                  >
                    {ACT_THREAT.malware.headline}
                  </h4>
                </div>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-accent"
                  style={{
                    fontSize: "28px",
                    display: "inline-block",
                    fontWeight: 300,
                    lineHeight: 1,
                    flexShrink: 0,
                    width: "26px",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id="threat-malware-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "8px clamp(20px, 3vw, 32px) 26px",
                        borderTop: "1px dashed rgba(176,51,30,0.4)",
                      }}
                    >
                      <div
                        className="font-mono uppercase text-accent"
                        style={{
                          fontSize: "10.5px",
                          letterSpacing: "0.22em",
                          marginTop: "16px",
                          marginBottom: "10px",
                        }}
                      >
                        Sources
                        <Cite ids={ACT_THREAT.malware.sources} />
                      </div>
                      <p
                        className="font-display text-ink-soft"
                        style={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          marginBottom: "18px",
                          maxWidth: "880px",
                        }}
                      >
                        {ACT_THREAT.malware.body}
                      </p>
                      <ul
                        className="font-display text-ink"
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 22px 0",
                          display: "grid",
                          gap: "10px",
                        }}
                      >
                        {ACT_THREAT.malware.capabilities.map((c) => (
                          <li
                            key={c}
                            style={{
                              paddingLeft: "22px",
                              position: "relative",
                              fontSize: "15px",
                              lineHeight: 1.55,
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                color: "var(--color-accent)",
                                fontWeight: 900,
                              }}
                            >
                              ✕
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>
                      <div
                        style={{
                          borderTop: "1px dashed rgba(176,51,30,0.35)",
                          paddingTop: "16px",
                        }}
                      >
                        <div
                          className="font-mono uppercase text-accent"
                          style={{
                            fontSize: "11px",
                            letterSpacing: "0.25em",
                            marginBottom: "8px",
                          }}
                        >
                          CJP's fault
                        </div>
                        <p
                          className="font-display italic text-ink"
                          style={{
                            fontSize: "15px",
                            lineHeight: 1.55,
                            maxWidth: "880px",
                          }}
                        >
                          {ACT_THREAT.malware.cjpFault}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })()}

        {/* THREAT 2 — IMPERSONATORS — accordion */}
        {(() => {
          const key = "t-impersonators";
          const open = isOpen(key);
          return (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                border: `2px solid ${open ? "var(--color-accent)" : "var(--color-ink)"}`,
                background: open ? "rgba(176,51,30,0.04)" : "var(--color-paper)",
                transition: "background 0.25s ease, border-color 0.25s ease",
                marginBottom: "20px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggle(key)}
                aria-expanded={open}
                aria-controls="threat-impersonators-detail"
                className="threat-row-btn"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  color: "var(--color-ink)",
                  cursor: "pointer",
                  padding: "22px clamp(20px, 3vw, 32px)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Tag kind={ACT_THREAT.impersonators.tag} />
                    <span
                      className="font-mono uppercase text-ink-soft"
                      style={{ fontSize: "12px", letterSpacing: "0.2em" }}
                    >
                      {ACT_THREAT.impersonators.label}
                    </span>
                  </div>
                  <h4
                    className="font-display font-black text-ink"
                    style={{
                      fontSize: "clamp(18px, 2.4vw, 24px)",
                      lineHeight: 1.28,
                      margin: 0,
                      maxWidth: "880px",
                    }}
                  >
                    {ACT_THREAT.impersonators.headline}
                  </h4>
                </div>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-accent"
                  style={{
                    fontSize: "28px",
                    display: "inline-block",
                    fontWeight: 300,
                    lineHeight: 1,
                    flexShrink: 0,
                    width: "26px",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id="threat-impersonators-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "16px clamp(20px, 3vw, 32px) 26px",
                        borderTop: "1px dashed rgba(176,51,30,0.4)",
                      }}
                    >
                      <p
                        className="font-display text-ink-soft"
                        style={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          marginBottom: "22px",
                          maxWidth: "880px",
                        }}
                      >
                        {ACT_THREAT.impersonators.body}
                      </p>

                      {/* Inventory cards */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                          gap: "14px",
                          marginBottom: "22px",
                        }}
                      >
                        {ACT_THREAT.impersonators.inventory.map((row) => (
                          <div
                            key={row.what}
                            style={{
                              border: "1px solid rgba(26,22,18,0.25)",
                              padding: "16px 14px",
                              background: "var(--color-paper-deep)",
                            }}
                          >
                            <div
                              className="font-display font-black text-accent"
                              style={{
                                fontSize: "26px",
                                lineHeight: 1,
                                marginBottom: "8px",
                              }}
                            >
                              {row.count}
                            </div>
                            <div
                              className="font-mono text-ink"
                              style={{
                                fontSize: "11.5px",
                                lineHeight: 1.45,
                                letterSpacing: "0.02em",
                              }}
                            >
                              {row.what}
                              <Cite ids={row.sources} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          borderTop: "1px dashed rgba(26,22,18,0.25)",
                          paddingTop: "16px",
                        }}
                      >
                        <div
                          className="font-mono uppercase text-accent"
                          style={{
                            fontSize: "11px",
                            letterSpacing: "0.25em",
                            marginBottom: "8px",
                          }}
                        >
                          CJP's fault
                        </div>
                        <p
                          className="font-display italic text-ink"
                          style={{
                            fontSize: "15px",
                            lineHeight: 1.55,
                            maxWidth: "880px",
                          }}
                        >
                          {ACT_THREAT.impersonators.cjpFault}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })()}
      </div>
      {/* ─── End hijack block ───────────────────────────────── */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          marginTop: "48px",
          marginBottom: "0",
          gap: "20px",
        }}
      >
        {[
          { label: "ECI", value: ACT_MONEY.registration.eci },
          { label: "MCA / Section 8 / Trust", value: ACT_MONEY.registration.mca },
          { label: "Trademark", value: ACT_MONEY.registration.trademark },
        ].map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="border-2 border-ink bg-paper"
            style={{ padding: "28px 24px", textAlign: "center" }}
          >
            <div
              className="font-mono uppercase text-accent"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                marginBottom: "14px",
              }}
            >
              {r.label}
            </div>
            <div
              className="font-display text-ink"
              style={{ fontSize: "17px", lineHeight: 1.5 }}
            >
              {r.value}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-ink text-paper"
        style={{ padding: "80px 0", margin: "72px 0" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "32px",
            paddingRight: "32px",
            textAlign: "center",
          }}
        >
          <div
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "13px",
              letterSpacing: "0.35em",
              marginBottom: "28px",
            }}
          >
            What is being collected
          </div>
          <div
            className="font-display font-black text-accent"
            style={{
              fontSize: "clamp(56px, 18vw, 160px)",
              lineHeight: 1,
              marginBottom: "10px",
            }}
          >
            <CountUp to={350000} />+
          </div>
          <div
            className="font-mono uppercase text-paper/60"
            style={{
              fontSize: "14px",
              letterSpacing: "0.22em",
              marginBottom: "40px",
            }}
          >
            Indian sign-ups, in 6 days
          </div>

          <div
            className="flex flex-wrap justify-center"
            style={{ gap: "12px", marginBottom: "48px" }}
          >
            {ACT_MONEY.data.fields.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-paper/30 font-mono uppercase"
                style={{
                  padding: "10px 18px",
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                }}
              >
                {f}
              </motion.span>
            ))}
          </div>

          <div
            style={{
              maxWidth: "780px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              textAlign: "left",
            }}
          >
            <div className="border-l-2 border-accent" style={{ paddingLeft: "18px", paddingTop: "6px", paddingBottom: "6px" }}>
              <div
                className="font-mono uppercase text-accent"
                style={{ fontSize: "12px", letterSpacing: "0.2em", marginBottom: "6px" }}
              >
                Privacy policy
              </div>
              <div className="font-display" style={{ fontSize: "17px", lineHeight: 1.5 }}>
                {ACT_MONEY.data.privacy}
              </div>
            </div>
            <div className="border-l-2 border-accent" style={{ paddingLeft: "18px", paddingTop: "6px", paddingBottom: "6px" }}>
              <div
                className="font-mono uppercase text-accent"
                style={{ fontSize: "12px", letterSpacing: "0.2em", marginBottom: "6px" }}
              >
                DPDP Act 2023
              </div>
              <div className="font-display" style={{ fontSize: "17px", lineHeight: 1.5 }}>
                {ACT_MONEY.data.dpdp}
                <Cite ids={ACT_MONEY.data.sources} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "920px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "32px",
          paddingBottom: "56px",
        }}
      >
        <div
          className="border-2 border-ink bg-paper"
          style={{
            padding: "40px 48px",
            textAlign: "center",
            boxShadow: "10px 10px 0 var(--color-accent)",
          }}
        >
          <div
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "13px",
              letterSpacing: "0.3em",
              marginBottom: "20px",
            }}
          >
            The structural fact
          </div>
          <div
            className="font-display font-black"
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              lineHeight: 1.2,
              marginBottom: "18px",
            }}
          >
            {ACT_MONEY.structural.rule}
          </div>
          <div
            className="font-display italic text-ink-soft"
            style={{
              fontSize: "clamp(17px, 2.4vw, 24px)",
              lineHeight: 1.45,
            }}
          >
            {ACT_MONEY.structural.consequence}
          </div>
        </div>
      </motion.div>

      <div style={{ paddingBottom: "120px" }} />

      <style jsx>{`
        :global(.domain-row-btn:hover),
        :global(.threat-row-btn:hover) {
          background: rgba(176, 51, 30, 0.06) !important;
        }
        :global(.domain-row-btn:focus-visible),
        :global(.threat-row-btn:focus-visible) {
          outline: 2px solid var(--color-accent);
          outline-offset: -2px;
        }
      `}</style>
    </section>
  );
}
