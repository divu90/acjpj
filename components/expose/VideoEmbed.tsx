"use client";
import { motion } from "framer-motion";

type Props = {
  src: string;
  poster?: string;
  eyebrow?: string;
  title?: string;
  caption?: string;
  aspect?: "video" | "portrait" | "square";
  /** ink-on-paper or paper-on-ink frame */
  theme?: "light" | "dark";
  maxWidth?: number;
};

export default function VideoEmbed({
  src,
  poster,
  eyebrow,
  title,
  caption,
  aspect = "video",
  theme = "dark",
  maxWidth = 760,
}: Props) {
  const aspectRatio =
    aspect === "portrait" ? "9 / 16" : aspect === "square" ? "1 / 1" : "16 / 9";

  const frameBg = theme === "light" ? "var(--color-paper)" : "var(--color-ink)";
  const frameBorder =
    theme === "light" ? "var(--color-ink)" : "rgba(244,235,215,0.2)";
  const eyebrowColor = "var(--color-accent)";
  const titleColor =
    theme === "light" ? "var(--color-ink)" : "var(--color-paper)";
  const captionColor =
    theme === "light" ? "rgba(28,28,30,0.7)" : "rgba(244,235,215,0.7)";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: `${maxWidth}px`,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "0",
        padding: 0,
      }}
    >
      {eyebrow && (
        <div
          className="font-mono uppercase"
          style={{
            fontSize: "12px",
            letterSpacing: "0.3em",
            color: eyebrowColor,
            textAlign: "center",
            marginBottom: "14px",
          }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <div
          className="font-display font-black italic"
          style={{
            fontSize: "clamp(20px, 2.6vw, 28px)",
            lineHeight: 1.25,
            color: titleColor,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio,
          background: frameBg,
          border: `2px solid ${frameBorder}`,
          boxShadow: "8px 8px 0 var(--color-accent)",
          overflow: "hidden",
        }}
      >
        <video
          src={src}
          poster={poster}
          controls
          preload="metadata"
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            background: "var(--color-ink)",
          }}
        />
      </div>
      {caption && (
        <figcaption
          className="font-display italic"
          style={{
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: captionColor,
            textAlign: "center",
            marginTop: "18px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
