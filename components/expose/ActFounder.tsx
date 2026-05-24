"use client";
import { motion } from "framer-motion";
import { ACT_FOUNDER } from "@/lib/expose-data";
import ActHeader from "./ActHeader";
import Cite from "./Cite";
import Tag from "./Tag";
import VideoEmbed from "./VideoEmbed";

export default function ActFounder() {
  return (
    <section
      className="relative"
      style={{ background: "var(--color-paper)", paddingTop: "40px", paddingBottom: "80px" }}
    >
      <ActHeader eyebrow={ACT_FOUNDER.eyebrow} title={ACT_FOUNDER.title} />

      {/* Resume rows */}
      <div
        style={{
          maxWidth: "960px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginBottom: "80px",
        }}
      >
        {ACT_FOUNDER.resume.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "32px",
              paddingTop: "28px",
              paddingBottom: "28px",
              borderBottom: "1px solid rgba(26,22,18,0.18)",
            }}
            className="acthunt-row"
          >
            <div
              className="font-mono uppercase text-accent"
              style={{
                fontSize: "16px",
                letterSpacing: "0.16em",
                lineHeight: 1.5,
                paddingTop: "8px",
              }}
            >
              {row.period}
            </div>
            <div>
              <div
                className="flex items-center flex-wrap"
                style={{ gap: "10px", marginBottom: "8px" }}
              >
                <Tag kind={row.tag} />
                <Cite ids={row.sources} />
              </div>
              <div
                className="font-display font-black"
                style={{
                  fontSize: "clamp(25px, 2.8vw, 35px)",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                {row.role}
              </div>
              <div
                className="font-display italic"
                style={{ fontSize: "20px", color: "var(--color-ink-soft)", marginBottom: "8px" }}
              >
                {row.org}
              </div>
              <div
                className="font-mono uppercase"
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.14em",
                  color: "rgba(58,52,44,0.78)",
                }}
              >
                under {row.under}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0 }}
        style={{
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "48px",
          paddingBottom: "48px",
          borderTop: "2px solid var(--color-ink)",
          borderBottom: "2px solid var(--color-ink)",
          textAlign: "center",
        }}
      >
        <div
          className="font-mono uppercase text-accent"
          style={{
            fontSize: "13px",
            letterSpacing: "0.3em",
            marginBottom: "24px",
          }}
        >
          ★ His own words
        </div>
        <blockquote
          className="cinema-quote text-ink"
          style={{
            fontSize: "clamp(27px, 4vw, 45px)",
            lineHeight: 1.25,
          }}
        >
          &ldquo;{ACT_FOUNDER.pullQuote.text}&rdquo;
        </blockquote>
        <div
          className="font-mono uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "0.18em",
            color: "var(--color-ink-soft)",
            marginTop: "32px",
          }}
        >
          {ACT_FOUNDER.pullQuote.attribution} · {ACT_FOUNDER.pullQuote.date}
          <Cite ids={ACT_FOUNDER.pullQuote.sources} />
        </div>
      </motion.div>

      {/* Video: Dipke admitting AAP support / anti-BJP — in his own voice */}
      <div
        style={{
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "72px",
          paddingBottom: "16px",
        }}
      >
        <VideoEmbed
          src="/dipke-aap-supporter.mp4"
          eyebrow="★ And in his own voice"
          title="“I am an AAP supporter. And a big opponent of the BJP.”"
          caption="Abhijeet Dipke, on camera — direct admission of party alignment from the founder of a movement marketed as ‘leaderless, satirical, sponsored by no one.’"
          aspect="video"
          theme="light"
          maxWidth={820}
        />
      </div>

      {/* Verdict */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "820px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "72px",
          paddingBottom: "40px",
          textAlign: "center",
        }}
      >
        <div
          className="font-display italic text-ink"
          style={{
            fontSize: "clamp(25px, 3.4vw, 37px)",
            lineHeight: 1.4,
          }}
        >
          {ACT_FOUNDER.verdict}
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 640px) {
          :global(.acthunt-row) {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
