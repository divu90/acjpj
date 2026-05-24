"use client";
import { useEffect, useRef, useState } from "react";

export default function RoachHunt() {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [time, setTime] = useState(30);
  const [over, setOver] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const runningRef = useRef(false);
  const spawnRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const EMOJIS = ["🪳", "🪳", "🪳", "🐛", "🦗"];

  const spawnRoach = () => {
    if (!runningRef.current || !boardRef.current) return;
    const board = boardRef.current;
    const r = document.createElement("div");
    r.className = "roach-target absolute text-[30px] cursor-pointer select-none transition-transform leading-none";
    r.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const bw = board.clientWidth - 40;
    const bh = board.clientHeight - 40;
    r.style.left = Math.random() * bw + "px";
    r.style.top = Math.random() * bh + "px";
    r.style.transform = `rotate(${Math.random() * 360}deg)`;
    r.addEventListener("click", () => {
      if (!runningRef.current) return;
      r.classList.add("squished");
      setScore((s) => s + 1);
      setTimeout(() => r.remove(), 300);
    });
    r.addEventListener("mouseenter", () => {
      r.style.transform = r.style.transform.replace(/scale\([^)]*\)/, "") + " scale(1.2)";
    });
    board.appendChild(r);
    const escapeTime = 1200 + Math.random() * 1800;
    setTimeout(() => {
      if (r.parentNode) {
        setMissed((m) => m + 1);
        r.remove();
      }
    }, escapeTime);
  };

  const startGame = () => {
    setScore(0);
    setMissed(0);
    setTime(30);
    setOver(false);
    setRunning(true);
    runningRef.current = true;
    boardRef.current?.querySelectorAll(".roach-target").forEach((r) => r.remove());
    spawnRef.current = window.setInterval(spawnRoach, 600);
    timerRef.current = window.setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          endGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const endGame = () => {
    runningRef.current = false;
    setRunning(false);
    setOver(true);
    if (spawnRef.current) clearInterval(spawnRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    boardRef.current?.querySelectorAll(".roach-target").forEach((r) => r.remove());
  };

  useEffect(() => () => {
    if (spawnRef.current) clearInterval(spawnRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const titles = ["Slipper Champion!", "Not Bad, Citizen.", "Keep Practising.", "The Roaches Won..."];
  const tIdx = score >= 20 ? 0 : score >= 12 ? 1 : score >= 6 ? 2 : 3;

  return (
    <section id="game" className="border-t border-b border-ink" style={{ padding: "60px 24px", background: "var(--color-paper-deep)" }}>
      <div style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-accent mb-2">
          ★ Citizens&apos; Training Exercise
        </div>
        <h2 className="font-display font-black text-[clamp(28px,4vw,48px)] mb-2">Roach Hunt</h2>
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-7">
          Click the cockroaches before they escape. Train your civic reflexes.
        </p>

        <div className="flex justify-center gap-10 flex-wrap" style={{ marginBottom: "28px" }}>
          <div className="text-center">
            <div className="font-display font-black text-4xl leading-none text-accent">{score}</div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-soft">Squished</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-4xl leading-none text-ink">{missed}</div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-soft">Escaped</div>
          </div>
          <div className="text-center">
            <div className="font-display font-black text-4xl leading-none text-ink">{time}</div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-soft">Seconds</div>
          </div>
        </div>

        <div ref={boardRef} className="relative w-full h-[320px] border-2 border-ink bg-paper overflow-hidden cursor-crosshair">
          {over && (
            <div className="absolute inset-0 bg-paper/95 flex items-center justify-center flex-col gap-2.5">
              <h3 className="font-display font-black text-[32px]">{titles[tIdx]}</h3>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft">
                You squished {score} cockroaches.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4.5">
          <button
            onClick={startGame}
            disabled={running}
            className="font-mono text-[11px] tracking-[0.2em] uppercase py-3.5 px-7 cursor-pointer border-0 inline-block"
            style={{
              background: "var(--color-ink)",
              color: "var(--color-paper)",
              boxShadow: "4px 4px 0 var(--color-accent)",
              opacity: running ? 0.6 : 1,
            }}
          >
            {running ? "◼ Running..." : over ? "▶ Play Again" : "▶ Start Hunt"}
          </button>
        </div>
      </div>
    </section>
  );
}
