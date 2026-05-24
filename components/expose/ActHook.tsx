"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HOOK } from "@/lib/expose-data";
import Cite from "./Cite";

export default function ActHook() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const roachY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const roachR = useTransform(scrollYProgress, [0, 1], [-10, 25]);
  const roach2Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const roach2R = useTransform(scrollYProgress, [0, 1], [12, -8]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-ink text-paper"
      style={{
        minHeight: "100vh",
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <motion.div
        style={{ y: roachY, rotate: roachR }}
        className="absolute right-[6vw] top-[10vh] text-[70px] sm:text-[120px] opacity-[0.08] select-none pointer-events-none"
      >
        🪳
      </motion.div>
      <motion.div
        style={{ y: roach2Y, rotate: roach2R }}
        className="absolute left-[6vw] bottom-[18vh] text-[55px] sm:text-[90px] opacity-[0.06] select-none pointer-events-none"
      >
        🪳
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-mono uppercase text-accent"
        style={{
          fontSize: "13px",
          letterSpacing: "0.32em",
        }}
      >
        Prologue · The Counter-Investigation
      </motion.div>

      {/* Main quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="cinema-quote text-paper/80"
        style={{
          fontSize: "clamp(23px, 5.4vw, 51px)",
          maxWidth: "900px",
          lineHeight: 1.15,
          marginTop: "28px",
          whiteSpace: "pre-line",
        }}
      >
        &ldquo;{HOOK.cjpClaim}&rdquo;
      </motion.div>

      {/* Attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="font-mono uppercase text-paper/40"
        style={{
          fontSize: "13px",
          letterSpacing: "0.28em",
          marginTop: "20px",
        }}
      >
        — Abhijeet Dipke (@abhijeet_dipke), CJP founder · 29 Mar 2026
        <Cite ids={[HOOK.cjpClaimSource]} />
      </motion.div>

      {/* Rule line — separate, with breathing room */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.0, delay: 2.2 }}
        style={{
          width: "min(820px, 100%)",
          height: "2px",
          background: "var(--color-accent)",
          marginTop: "40px",
          transformOrigin: "center",
        }}
      />

      {/* One question label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="font-mono uppercase text-accent"
        style={{
          fontSize: "13px",
          letterSpacing: "0.28em",
          marginTop: "28px",
        }}
      >
        ↓ Yet the brand on his own site reads:
      </motion.div>

      {/* Counter heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 2.8 }}
        className="font-display font-black text-accent"
        style={{
          fontSize: "clamp(31px, 6.4vw, 63px)",
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          marginTop: "18px",
          maxWidth: "920px",
          whiteSpace: "pre-line",
        }}
      >
        {HOOK.question}
      </motion.h1>

      {/* Context paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.4 }}
        className="font-display italic text-paper/65"
        style={{
          fontSize: "17px",
          maxWidth: "720px",
          marginTop: "32px",
          lineHeight: 1.6,
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        {HOOK.context}
        <Cite ids={HOOK.contextSources} />
      </motion.p>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 4.0 }}
        className="font-mono uppercase text-paper/40"
        style={{
          fontSize: "13px",
          letterSpacing: "0.28em",
          marginTop: "32px",
        }}
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
