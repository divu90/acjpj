"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const BASE_SUPPORTERS = 247;

function useAnimatedCount(target: number, duration = 1800, run: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      setN(Math.floor(prog * target));
      if (prog < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, run]);
  return n;
}

export default function Hero() {
  const [supporters, setSupporters] = useState(BASE_SUPPORTERS);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("acjp_pledges") || "0");
    setSupporters(BASE_SUPPORTERS + stored);
    setAnimate(true);
  }, []);

  const animated = useAnimatedCount(supporters, 1800, animate);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
      style={{
        padding: "60px 24px",
        borderBottom: "3px double var(--color-ink)",
      }}
    >
      <div
        className="font-mono uppercase"
        style={{
          fontSize: "10px",
          letterSpacing: "0.28em",
          color: "var(--color-ink-soft)",
          marginBottom: "18px",
        }}
      >
        Vol. 1 · Edition 01 &nbsp;★&nbsp; Est. 2026 &nbsp;★&nbsp; The Counter-Movement
      </div>

      <h1
        className="font-display"
        style={{
          fontWeight: 900,
          fontSize: "clamp(38px, 8vw, 100px)",
          lineHeight: 0.92,
          letterSpacing: "-0.025em",
          padding: "6px 0",
        }}
      >
        <span
          className="inline-block"
          style={{
            background: "var(--color-ink)",
            color: "var(--color-paper)",
            padding: "2px 16px 6px",
            transform: "rotate(-1.5deg)",
            marginRight: "6px",
          }}
        >
          ANTI
        </span>
        —COCKROACH
        <br />
        JANTA PARTY
      </h1>

      <div
        className="font-hindi"
        style={{
          fontWeight: 800,
          fontSize: "clamp(18px, 3vw, 32px)",
          color: "var(--color-ink-soft)",
          padding: "10px 0 6px",
        }}
      >
        कॉकरोच विरोधी जनता पार्टी
      </div>

      <p
        className="font-display italic"
        style={{
          fontSize: "clamp(16px, 2vw, 22px)",
          color: "var(--color-ink-soft)",
          maxWidth: "580px",
          margin: "16px auto 0",
          lineHeight: 1.5,
        }}
      >
        A political counter-movement for citizens who pick up the broom.{" "}
        <strong className="not-italic" style={{ color: "var(--color-ink)" }}>
          Five principles. Zero excuses. One very large resolve.
        </strong>
      </p>

      <div className="flex flex-wrap justify-center" style={{ gap: "14px", marginTop: "32px" }}>
        <a href="#manifesto" className="btn btn-primary">Read the Manifesto</a>
        <a href="#pledge" className="btn btn-outline">Take the Pledge</a>
        <Link href="/expose" className="btn btn-expose">⚠ Expose the Roaches →</Link>
      </div>

      <div
        className="hero-stats flex w-full"
        style={{
          gap: 0,
          border: "2px solid var(--color-ink)",
          marginTop: "36px",
          background: "var(--color-ink)",
          maxWidth: "min(720px, 100%)",
        }}
      >
        <HStat num={animated.toLocaleString()} label="Supporters" red />
        <HStat num="5" label="Principles" red />
        <HStat num="0" label="Corporate Donors" />
        <HStat num="∞" label="Resolve" red last />
      </div>

      <style jsx global>{`
        .btn {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 13px 26px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          border: none;
          display: inline-block;
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--color-ink);
          color: var(--color-paper);
          box-shadow: 4px 4px 0 var(--color-accent);
        }
        .btn-primary:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--color-accent);
        }
        .btn-outline {
          background: transparent;
          color: var(--color-ink);
          border: 2px solid var(--color-ink);
          box-shadow: 4px 4px 0 var(--color-ink-soft);
        }
        .btn-outline:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--color-ink-soft);
        }
        .btn-expose {
          background: var(--color-accent);
          color: var(--color-paper);
          box-shadow: 4px 4px 0 var(--color-ink);
          transform: rotate(-1deg);
          font-weight: 600;
        }
        .btn-expose:hover {
          transform: rotate(-1deg) translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--color-ink);
        }
        @media (max-width: 640px) {
          .hero-stats { flex-wrap: wrap; }
          .hero-stats > div { min-width: 50%; }
        }
      `}</style>
    </section>
  );
}

function HStat({ num, label, red, last }: { num: string; label: string; red?: boolean; last?: boolean }) {
  return (
    <div
      className="text-center"
      style={{
        flex: 1,
        background: "var(--color-paper)",
        padding: "16px 12px",
        borderRight: last ? "none" : "1px solid var(--color-ink)",
      }}
    >
      <div
        className="font-display leading-none"
        style={{
          fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 44px)",
          color: red ? "var(--color-accent)" : "var(--color-ink)",
        }}
      >
        {num}
      </div>
      <div
        className="font-mono uppercase"
        style={{
          fontSize: "9px",
          letterSpacing: "0.2em",
          color: "var(--color-ink-soft)",
          marginTop: "4px",
        }}
      >
        {label}
      </div>
    </div>
  );
}
