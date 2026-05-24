"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KICKER } from "@/lib/expose-data";
import { exposeActions } from "./store";

export default function Kicker() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Kick off muted autoplay — video stays muted by default; user must click the
  // toggle below to enable audio. Previously we also auto-unmuted on the first
  // page-wide click/keydown, which caused audio to start playing as soon as the
  // user clicked anywhere on the site (other sections included). Removed.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
    v.play().catch(() => {});
  }, []);

  // Safety net: if the section scrolls out of view, force-mute the video so
  // even a previously unmuted soundtrack does not bleed into other sections.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const inView = entries[0]?.isIntersecting;
        if (!inView && !v.muted) {
          v.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section
      className="relative text-paper min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-ink"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Background video — fit-to-screen, autoplay loop */}
      <video
        ref={videoRef}
        src="/soft-propaganda-japan.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Dark overlay for text legibility */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(28,28,30,0.78) 0%, rgba(28,28,30,0.86) 50%, rgba(28,28,30,0.92) 100%)",
          zIndex: 1,
        }}
      />

      {/* Mute / unmute toggle — bottom-right corner of section */}
      <button
        onClick={toggleMute}
        className="font-mono uppercase bg-accent text-paper border-0 cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
          zIndex: 5,
          fontSize: "11px",
          letterSpacing: "0.22em",
          padding: "10px 18px",
          boxShadow: "4px 4px 0 rgba(0,0,0,0.4)",
        }}
        aria-label={muted ? "Unmute soundtrack" : "Mute soundtrack"}
      >
        {muted ? "🔊 Tap to hear" : "🔇 Mute"}
      </button>

      {/* Content container */}
      <div
        style={{
          maxWidth: "1080px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Subtle divider entry */}
        <div
          aria-hidden
          style={{
            width: "140px",
            height: "1px",
            margin: "0 auto 56px",
            borderTop: "1px dashed rgba(176,51,30,0.55)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-mono uppercase text-accent"
          style={{
            fontSize: "13px",
            letterSpacing: "0.4em",
            marginBottom: "56px",
          }}
        >
          ★ Final Plate ★
        </motion.div>

        <div
          className="relative"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "72px",
          }}
        >
          {[KICKER.line1, KICKER.line2, KICKER.line3].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.4 }}
              className={`font-display font-black ${
                i === 2 ? "text-accent italic" : "text-paper"
              }`}
              style={{
                fontSize: "clamp(26px, 5vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                textShadow: "0 2px 18px rgba(0,0,0,0.55)",
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap justify-center"
          style={{ gap: "18px", marginBottom: "80px" }}
        >
          <Link
            href="/#pledge"
            className="font-mono uppercase bg-accent text-paper no-underline transition-transform hover:-translate-y-0.5"
            style={{
              fontSize: "13px",
              letterSpacing: "0.22em",
              padding: "16px 32px",
              boxShadow: "6px 6px 0 var(--color-paper)",
            }}
          >
            ← Take the Pledge
          </Link>
          <button
            onClick={() => exposeActions.openDrawer()}
            className="font-mono uppercase bg-transparent text-paper border-2 border-paper cursor-pointer transition-transform hover:-translate-y-0.5"
            style={{
              fontSize: "13px",
              letterSpacing: "0.22em",
              padding: "16px 32px",
              boxShadow: "6px 6px 0 var(--color-accent)",
            }}
          >
            Read the sources →
          </button>
        </motion.div>

        <div
          className="font-mono uppercase text-paper/50"
          style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            textAlign: "center",
            paddingTop: "32px",
            borderTop: "1px dashed rgba(176,51,30,0.45)",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Compiled 22 May 2026 · Every claim sourced · Tags visible · Honesty intact
        </div>
      </div>
    </section>
  );
}
