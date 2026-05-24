"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollSpine() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div className="hidden sm:block fixed left-3 sm:left-6 top-0 bottom-0 z-[50] pointer-events-none">
      <div className="relative h-full w-px bg-accent/10">
        <motion.div className="absolute top-0 left-0 right-0 bg-accent" style={{ height }} />
        {[0.0, 0.18, 0.35, 0.52, 0.7, 0.88].map((p, i) => (
          <div
            key={i}
            className="absolute -left-1 w-2 h-2 rounded-full bg-accent border border-paper"
            style={{ top: `${p * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
