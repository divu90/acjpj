"use client";
import { motion } from "framer-motion";

export default function ActHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div
      style={{
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "80px",
        paddingBottom: "48px",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-mono uppercase text-accent"
        style={{
          fontSize: "13px",
          letterSpacing: "0.35em",
          marginBottom: "20px",
        }}
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display font-black"
        style={{
          fontSize: "clamp(35px, 5.4vw, 63px)",
          lineHeight: 0.98,
          letterSpacing: "-0.02em",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
