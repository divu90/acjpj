"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PRINCIPLES = [
  {
    roman: "Article I",
    title: "Nation Before Narrative.",
    short:
      "National priorities shaped by citizens and institutions — not online movements or personality-driven campaigns.",
    body: "National priorities will be shaped by citizens and institutions — not by online movements, viral campaigns, or personality-driven agendas. The national conversation must be grounded in reality, not performance. Real governance happens in real places, not on timelines.",
    cjpDid:
      "Launched as a viral social-media movement. The 'voice of Gen-Z' is a personality-led brand built around Dipke's verified handle — fed by trending clips, opposition endorsements, and weekend optics. The product is the founder.",
    weWill:
      "Take positions from RTI filings, parliamentary records and court orders. The national conversation is set by citizens and institutions — not by timelines. No founder-as-product, no 'satirical' brand on top.",
  },
  {
    roman: "Article II",
    title: "Justice With Accountability.",
    short:
      "No individual above scrutiny. Laws and institutions must apply equally to everyone.",
    body: "No individual is above scrutiny — regardless of status, ideology, or popularity. Laws and institutions must apply equally and consistently to everyone. Accountability is not selective. Without it, justice is just a word.",
    cjpDid:
      "Demands accountability from PM Modi, the CJI, the CEC — but stays silent on Mahua Moitra (cash-for-query expulsion), Sandip Ghosh (RG Kar CBI chargesheet), Partha Chatterjee (Bengal SSC), Senthil Balaji (cash-for-jobs ED arrest). Selective.",
    weWill:
      "Read every chargesheet through one rulebook. Opposition or ruling — if the evidence is on the record, the receipt is published. No carve-outs for ideological allies.",
  },
  {
    roman: "Article III",
    title: "Equal Standards For All.",
    short:
      "Rights, responsibilities, and reforms follow one rulebook — no selective exceptions carved out for convenience.",
    body: "Rights, responsibilities, and reforms should follow one rulebook — not selective exceptions carved out for convenience, community, or political expediency. One standard. Applied equally. No fine print.",
    cjpDid:
      "One rulebook for the BJP — every Adani/Ambani/Modi quote becomes a card. A different rulebook for the opposition — Sandeshkhali, MUDA, Punjab drug deaths, AAP 'Sheesh Mahal', Karnataka Valmiki scam = zero criticism.",
    weWill:
      "Publish one rulebook and apply it identically. Congress CM allotting plots to his wife → card. BJP minister named in a scam → card. No exceptions for political affinity. The standard is the standard.",
  },
  {
    roman: "Article IV",
    title: "Merit Before Identity.",
    short:
      "Positions earned through skill, capability, and qualification — not determined by quotas alone.",
    body: "Positions of responsibility and opportunity should be earned through demonstrated skill, capability, performance, and qualification. Identity has dignity — but capability has consequence. We support a system where who you are informs your story, but what you can do determines your role.",
    cjpDid:
      "Built around Abhijeet Dipke's personality — a Boston University student turned 'Gen-Z spokesperson.' The movement IS the founder. One biographical bottleneck; one face on every camera.",
    weWill:
      "Speak through evidence and institutions, not founders. Anyone with verifiable sources can contribute a receipt. The party is its records, not its face — no single founder bottleneck.",
  },
  {
    roman: "Article V",
    title: "Policy Over Popularity.",
    short:
      "Governance driven by practical solutions and long-term national interest — not trends and outrage cycles.",
    body: "Governance must be driven by practical solutions, measurable outcomes, and long-term national interest — not by trending topics, outrage cycles, or poll-chasing. Good policy is often unpopular. That is not a reason to abandon it. That is a reason to explain it.",
    cjpDid:
      "Targets only what already trends — Adani, Ambani, Modi, 'Godi media.' Avoids unpopular truths about opposition states (Bengal SSC, MUDA, Punjab overdose deaths, RG Kar cover-up) because they break the brand vibe.",
    weWill:
      "Publish the unpopular receipts too. Bengal SSC, Punjab drug deaths, MUDA scam, Mahua Moitra — even when they cost us social-media allies. Discomfort is the test of honesty.",
  },
];

export default function Manifesto() {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  // Portal needs a real document — gated on mount so SSR + hydration stay clean.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal open + close on Esc
  useEffect(() => {
    if (modalIdx === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalIdx]);

  return (
    <section
      id="manifesto"
      style={{
        padding: "80px 24px",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="text-center" style={{ marginBottom: "72px" }}>
        <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-accent mb-3">
          ★ The Counter-Manifesto · 2026
        </div>
        <h2
          className="font-display font-black"
          style={{
            fontSize: "clamp(44px, 7vw, 84px)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
          }}
        >
          The Five{" "}
          <em className="italic" style={{ color: "var(--color-accent)" }}>
            Principles.
          </em>
        </h2>
        <div className="flex items-center gap-3.5 mt-10 max-w-[640px] mx-auto">
          <span className="flex-1 h-px bg-ink" />
          <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-ink-soft whitespace-nowrap">
            Non-Negotiable · Filed 2026 · One Rulebook For All
          </span>
          <span className="flex-1 h-px bg-ink" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        {PRINCIPLES.map((p, i) => {
          const isFifth = i === 4;
          return (
            <button
              key={i}
              onClick={() => setModalIdx(i)}
              className={`group relative overflow-hidden cursor-pointer text-left transition-colors bg-paper hover:bg-paper-deep border-2 border-ink ${
                isFifth ? "md:col-span-2" : ""
              }`}
              style={{
                padding: "38px 36px 40px",
                boxShadow: "5px 5px 0 var(--color-ink)",
              }}
            >
              <span className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <span
                className="font-display font-black leading-none absolute select-none pointer-events-none"
                style={{
                  fontSize: isFifth ? "180px" : "140px",
                  color: "rgba(176,51,30,0.06)",
                  top: "-10px",
                  right: "20px",
                }}
              >
                {i + 1}
              </span>

              <div className="relative">
                <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-accent mb-4">
                  {p.roman}
                </div>
                <div
                  className="font-display font-black italic mb-5"
                  style={{
                    fontSize: isFifth
                      ? "clamp(28px, 3.4vw, 40px)"
                      : "clamp(24px, 2.4vw, 32px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {p.title}
                </div>
                <p
                  className="font-display"
                  style={{
                    fontSize: isFifth ? "17px" : "16px",
                    lineHeight: 1.7,
                    color: "var(--color-ink-soft)",
                    maxWidth: isFifth ? "780px" : "none",
                  }}
                >
                  {p.short}
                </p>
                <div
                  className="font-mono uppercase mt-5 pt-4 border-t border-ink/15"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    color: "var(--color-accent)",
                  }}
                >
                  Read more →
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal rendered via portal to document.body so the Manifesto <section>'s
          stacking context (globals.css sets `section { z-index: 1 }`) can't trap
          the modal behind the sticky nav (z-100). */}
      {mounted && modalIdx !== null && createPortal(
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-[3px]"
          style={{
            background: "rgba(28,28,30,0.78)",
            // Extra top padding pushes the dialog below the sticky topbar even on short viewports.
            padding: "80px 20px 32px",
          }}
          onClick={() => setModalIdx(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={PRINCIPLES[modalIdx].title}
            className="bg-paper border-2 border-ink"
            style={{
              maxWidth: "720px",
              width: "100%",
              maxHeight: "calc(100vh - 112px)",
              overflowY: "auto",
              boxShadow: "10px 10px 0 var(--color-accent)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header strip with eyebrow + close */}
            <div
              style={{
                position: "sticky",
                top: 0,
                background: "var(--color-paper)",
                borderBottom: "1px solid rgba(26,22,18,0.12)",
                padding: "20px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                zIndex: 1,
              }}
            >
              <div
                className="font-mono uppercase text-accent"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.32em",
                }}
              >
                {PRINCIPLES[modalIdx].roman}
              </div>
              <button
                onClick={() => setModalIdx(null)}
                className="font-mono uppercase text-ink-soft hover:text-accent bg-transparent border border-ink/20 hover:border-accent cursor-pointer transition-colors"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  padding: "8px 14px",
                }}
                aria-label="Close"
              >
                ✕ Close
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "32px 44px 44px" }}>
              <h3
                className="font-display font-black italic"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.018em",
                  marginBottom: "24px",
                }}
              >
                {PRINCIPLES[modalIdx].title}
              </h3>

              <p
                className="font-display text-ink-soft"
                style={{
                  fontSize: "16.5px",
                  lineHeight: 1.7,
                  marginBottom: "36px",
                }}
              >
                {PRINCIPLES[modalIdx].body}
              </p>

              {/* Contrast — CJP did vs we will */}
              <div
                style={{
                  paddingTop: "28px",
                  borderTop: "1px dashed rgba(176,51,30,0.4)",
                }}
              >
                <div
                  className="font-mono uppercase text-accent"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.32em",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  ★ Side by side
                </div>

                <div
                  className="manifesto-contrast"
                  style={{
                    display: "grid",
                    gap: "16px",
                    gridTemplateColumns: "1fr",
                  }}
                >
                  {/* CJP block */}
                  <div
                    style={{
                      border: "1.5px solid rgba(176,51,30,0.5)",
                      background: "rgba(176,51,30,0.05)",
                      padding: "18px 20px",
                    }}
                  >
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.22em",
                        color: "var(--color-accent)",
                        marginBottom: "10px",
                      }}
                    >
                      ✗ What CJP did
                    </div>
                    <p
                      className="font-display"
                      style={{
                        fontSize: "15.5px",
                        lineHeight: 1.6,
                        color: "var(--color-ink)",
                      }}
                    >
                      {PRINCIPLES[modalIdx].cjpDid}
                    </p>
                  </div>

                  {/* Our block */}
                  <div
                    style={{
                      border: "1.5px solid var(--color-ink)",
                      background: "var(--color-paper-deep, rgba(244,235,215,0.6))",
                      padding: "18px 20px",
                    }}
                  >
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.22em",
                        color: "var(--color-ink)",
                        marginBottom: "10px",
                      }}
                    >
                      ✓ What we will do
                    </div>
                    <p
                      className="font-display"
                      style={{
                        fontSize: "15.5px",
                        lineHeight: 1.6,
                        color: "var(--color-ink)",
                      }}
                    >
                      {PRINCIPLES[modalIdx].weWill}
                    </p>
                  </div>
                </div>

                <style jsx>{`
                  @media (min-width: 720px) {
                    :global(.manifesto-contrast) {
                      grid-template-columns: 1fr 1fr !important;
                      gap: 18px !important;
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
