"use client";
import { motion } from "framer-motion";
import { ACT_ENDORSEMENTS } from "@/lib/expose-data";
import ActHeader from "./ActHeader";
import Cite from "./Cite";
import Tag from "./Tag";

export default function ActEndorsements() {
  return (
    <section className="relative bg-paper-deep py-8 md:py-16">
      <ActHeader eyebrow={ACT_ENDORSEMENTS.eyebrow} title={ACT_ENDORSEMENTS.title} />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 mb-12 md:mb-20">
        <div>
          <div className="flex items-baseline justify-between mb-5 sm:mb-6">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-accent">
              Public endorsers (Opposition)
            </div>
            <div className="font-display font-black text-4xl sm:text-5xl text-accent leading-none">
              {ACT_ENDORSEMENTS.opposition.length}
            </div>
          </div>
          <div className="space-y-3">
            {ACT_ENDORSEMENTS.opposition.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-paper border border-ink/15 p-4"
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <div className="font-display font-black text-base sm:text-lg">{e.name}</div>
                  <Cite ids={e.sources} />
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-soft mb-2">{e.party}</div>
                <div className="font-display italic text-sm text-ink-soft leading-snug">&ldquo;{e.quote}&rdquo;</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:sticky md:top-24 md:self-start">
          <div className="flex items-baseline justify-between mb-5 sm:mb-6">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ink-soft">
              NDA / BJP endorsers
            </div>
            <div className="font-display font-black text-4xl sm:text-5xl text-ink leading-none">{ACT_ENDORSEMENTS.ndaCount}</div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-ink text-paper p-6 sm:p-8 text-center"
          >
            <div className="font-display font-black text-[80px] sm:text-[120px] leading-none text-accent mb-2">0</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">
              Not a typo
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 sm:mt-6 border-2 border-accent bg-paper p-5"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Tag kind={ACT_ENDORSEMENTS.hostile.tag} />
              <Cite ids={ACT_ENDORSEMENTS.hostile.sources} />
            </div>
            <div className="font-display font-black text-lg mb-1">{ACT_ENDORSEMENTS.hostile.name}</div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-soft mb-3">
              {ACT_ENDORSEMENTS.hostile.party} · Hostile allegation
            </div>
            <div className="font-display italic text-sm text-ink-soft leading-snug mb-3">
              &ldquo;{ACT_ENDORSEMENTS.hostile.quote}&rdquo;
            </div>
            <div className="font-mono text-[10px] tracking-[0.1em] text-accent border-t border-ink/15 pt-2 leading-relaxed">
              {ACT_ENDORSEMENTS.hostile.note}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[820px] mx-auto px-5 sm:px-6 pt-8 sm:pt-12 pb-16 md:pb-32 text-center"
      >
        <div className="font-display italic text-[clamp(20px,3.2vw,34px)] leading-[1.35] text-ink">
          {ACT_ENDORSEMENTS.verdict}
        </div>
      </motion.div>
    </section>
  );
}
