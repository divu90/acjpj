"use client";
import { motion } from "framer-motion";
import { ACT_ECOSYSTEM } from "@/lib/expose-data";

export default function ActEcosystem() {
  return (
    <section className="relative bg-ink text-paper pt-20 md:pt-28 pb-8 md:pb-16">
      {/* Subtle divider between Act III and Act IV */}
      <div
        aria-hidden
        style={{
          width: "140px",
          height: "1px",
          margin: "0 auto 64px",
          borderTop: "1px dashed rgba(176,51,30,0.35)",
        }}
      />

      {/* The verdict */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "64px",
          paddingBottom: "64px",
          background: "rgba(244,235,215,0.04)",
          borderTop: "1px dashed rgba(176,51,30,0.3)",
          borderBottom: "1px dashed rgba(176,51,30,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "13px",
              letterSpacing: "0.3em",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            {ACT_ECOSYSTEM.honesty.eyebrow}
          </div>
          <h3
            className="font-display font-black italic"
            style={{
              fontSize: "clamp(26px, 3.6vw, 40px)",
              lineHeight: 1.18,
              textAlign: "center",
              marginBottom: "40px",
              color: "var(--color-paper)",
            }}
          >
            {ACT_ECOSYSTEM.honesty.title}
          </h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {ACT_ECOSYSTEM.honesty.points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="font-display"
                style={{
                  display: "flex",
                  gap: "14px",
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "rgba(244,235,215,0.85)",
                }}
              >
                <span
                  className="text-accent"
                  style={{ flexShrink: 0, fontWeight: 700 }}
                >
                  →
                </span>
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-display italic"
            style={{
              fontSize: "clamp(22px, 2.8vw, 30px)",
              lineHeight: 1.4,
              textAlign: "center",
              color: "var(--color-accent)",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px dashed rgba(176,51,30,0.4)",
            }}
          >
            {ACT_ECOSYSTEM.honesty.closer}
          </motion.div>
        </div>
      </motion.div>

      <div className="pb-16 md:pb-32" />
    </section>
  );
}
