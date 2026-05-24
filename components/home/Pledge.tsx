"use client";
import { useEffect, useRef, useState } from "react";

const BASE_SUPPORTERS = 247;
const GOAL = 1000;

export default function Pledge() {
  const [supporters, setSupporters] = useState(BASE_SUPPORTERS);
  const [submitted, setSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const fnameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("acjp_pledges") || "0");
    setSupporters(BASE_SUPPORTERS + stored);

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true;
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("pledge");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [animatedCount, setAnimatedCount] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let start: number | null = null;
    let raf = 0;
    const target = supporters;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const prog = Math.min((ts - start) / 1800, 1);
      setAnimatedCount(Math.floor(prog * target));
      if (prog < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [animate, supporters]);

  const pct = Math.min((supporters / GOAL) * 100, 100);

  const handleSubmit = () => {
    const fname = fnameRef.current?.value.trim();
    const city = cityRef.current?.value.trim();
    if (!fname || !city) {
      formRef.current?.classList.remove("shake");
      void formRef.current?.offsetHeight;
      formRef.current?.classList.add("shake");
      setTimeout(() => formRef.current?.classList.remove("shake"), 500);
      alert("Please enter your name and city to file your pledge.");
      return;
    }
    const count = parseInt(localStorage.getItem("acjp_pledges") || "0") + 1;
    localStorage.setItem("acjp_pledges", String(count));
    setSupporters((s) => s + 1);
    setSubmitted(true);
  };

  return (
    <section
      id="pledge"
      style={{ padding: "96px 24px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}
    >
      {/* Header */}
      <div className="text-center" style={{ marginBottom: "64px" }}>
        <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-accent" style={{ marginBottom: "20px" }}>
          ★ Take the Pledge
        </div>
        <h2
          className="font-display font-black"
          style={{
            fontSize: "clamp(44px, 7vw, 84px)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
          }}
        >
          Sign the{" "}
          <em className="italic" style={{ color: "var(--color-accent)" }}>
            Register.
          </em>
        </h2>
      </div>

      {/* Pledge counter block */}
      <div
        className="text-center"
        style={{
          marginBottom: "72px",
          padding: "40px 32px",
          border: "2px solid var(--color-ink)",
          background: "var(--color-paper-deep)",
          boxShadow: "6px 6px 0 var(--color-ink)",
        }}
      >
        <div
          className="font-display font-black leading-none"
          style={{
            fontSize: "clamp(56px, 9vw, 110px)",
            color: "var(--color-accent)",
          }}
        >
          {animatedCount.toLocaleString()}
        </div>
        <div
          className="font-mono uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "var(--color-ink-soft)",
            marginTop: "12px",
          }}
        >
          Citizens Have Pledged
        </div>
        <div style={{ marginTop: "28px" }}>
          <div className="font-mono uppercase flex justify-between" style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--color-ink-soft)", marginBottom: "8px" }}>
            <span>Goal: 1,000 Pledges</span>
            <span>{pct.toFixed(1)}%</span>
          </div>
          <div className="h-2.5 border border-ink overflow-hidden" style={{ background: "var(--color-paper)" }}>
            <div
              className="h-full bg-accent transition-[width] duration-1000 ease-out"
              style={{ width: animate ? `${pct}%` : "0%" }}
            />
          </div>
        </div>
      </div>

      {!submitted ? (
        <div ref={formRef} id="pledge-form-wrap" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div className="grid sm:grid-cols-2" style={{ gap: "20px" }}>
            <Field label="First Name *">
              <input ref={fnameRef} type="text" placeholder="Ramesh" maxLength={50} className="form-input" />
            </Field>
            <Field label="Last Name">
              <input type="text" placeholder="Kumar" maxLength={50} className="form-input" />
            </Field>
          </div>

          <Field label="City / District *">
            <input ref={cityRef} type="text" placeholder="Delhi, Mumbai, Patna..." maxLength={60} className="form-input" />
          </Field>

          <div>
            <div className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.28em", color: "var(--color-ink-soft)", marginBottom: "16px" }}>
              I Pledge To Uphold
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                ["Nation Before Narrative", "I will prioritise citizens over narratives."],
                ["Justice With Accountability", "I will demand equal law for all."],
                ["Merit Before Identity", "I will judge by capability, not quotas."],
                ["Policy Over Popularity", "I will not be swayed by outrage cycles."],
              ].map(([t, b]) => (
                <label key={t} className="flex items-start cursor-pointer" style={{ gap: "12px" }}>
                  <input type="checkbox" defaultChecked className="cursor-pointer flex-shrink-0" style={{ width: 18, height: 18, marginTop: 3, accentColor: "var(--color-accent)" }} />
                  <span className="font-display" style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--color-ink-soft)" }}>
                    <strong style={{ color: "var(--color-ink)" }}>{t}</strong> — {b}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Field label="Why are you joining? (Optional)">
            <textarea placeholder="Tell us why this matters to you..." className="form-input" style={{ resize: "vertical", minHeight: "110px" }} />
          </Field>

          <button
            onClick={handleSubmit}
            className="font-mono uppercase border-0 cursor-pointer transition-all"
            style={{
              width: "100%",
              padding: "18px",
              background: "var(--color-ink)",
              color: "var(--color-paper)",
              fontSize: "12px",
              letterSpacing: "0.28em",
              boxShadow: "5px 5px 0 var(--color-accent)",
              marginTop: "8px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "7px 7px 0 var(--color-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "5px 5px 0 var(--color-accent)"; }}
          >
            ★ File My Pledge ★
          </button>
        </div>
      ) : (
        <div
          className="text-center"
          style={{
            padding: "48px 32px",
            border: "2px solid var(--color-accent)",
            boxShadow: "6px 6px 0 var(--color-ink)",
          }}
        >
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>🪳✕</div>
          <h3 className="font-display font-black" style={{ fontSize: "32px", marginBottom: "10px" }}>
            Pledge Filed.
          </h3>
          <p className="font-display italic" style={{ color: "var(--color-ink-soft)", fontSize: "16px" }}>
            You are now on the register. The kitchen will be cleaner for it.
          </p>
          <span className="font-mono uppercase block" style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--color-accent)", marginTop: "20px" }}>
            Opposition Filed · 2026
          </span>
        </div>
      )}

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          background: transparent;
          border: 1.5px solid var(--color-ink);
          padding: 14px 16px;
          font-family: var(--font-display);
          font-size: 16px;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.form-input:focus) {
          border-color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        className="block font-mono uppercase"
        style={{
          fontSize: "10px",
          letterSpacing: "0.26em",
          color: "var(--color-ink-soft)",
          marginBottom: "10px",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
