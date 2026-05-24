"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { NetNode, NetEdge } from "@/lib/expose-data";
import { ACT_ECOSYSTEM } from "@/lib/expose-data";
import Cite from "./Cite";

const CLUSTER_COLORS: Record<NetNode["cluster"], string> = {
  founder:      "#B0331E",
  aap:          "#D67A2A",
  swaraj:       "#7a4ea3",
  transparency: "#1e6b8c",
  youtube:      "#c43a5b",
  satire:       "#3a6e3a",
};

const CLUSTER_LABELS: Record<NetNode["cluster"], string> = {
  founder:      "Founder",
  aap:          "AAP",
  swaraj:       "Swaraj (ex-AAP)",
  transparency: "Transparency NGOs",
  youtube:      "YouTube cluster",
  satire:       "Satire / Politics",
};

const W = 1000;
const H = 700;

export default function NetworkGraph() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hover, setHover] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enterNode = (id: string) => {
    if (clearTimer.current) clearTimeout(clearTimer.current);
    setHover(id);
  };
  const leaveNode = () => {
    clearTimer.current = setTimeout(() => setHover(null), 120);
  };
  const keepCard = () => {
    if (clearTimer.current) clearTimeout(clearTimer.current);
  };
  const dropCard = () => setHover(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const nodeById = useMemo(() => {
    const m = new Map<string, NetNode>();
    ACT_ECOSYSTEM.nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, []);

  const px = (x: number) => (x / 100) * W;
  const py = (y: number) => (y / 100) * H;

  const hoveredEdges = useMemo(() => {
    if (!hover) return new Set<number>();
    const s = new Set<number>();
    ACT_ECOSYSTEM.edges.forEach((e, i) => {
      if (e.from === hover || e.to === hover) s.add(i);
    });
    return s;
  }, [hover]);

  // Mobile-only stacked list view
  if (isMobile) {
    return (
      <div className="space-y-6">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/50 text-center mb-2">
          Network — by cluster
        </div>
        {(Object.keys(CLUSTER_LABELS) as Array<NetNode["cluster"]>).map((cluster) => {
          const nodes = ACT_ECOSYSTEM.nodes.filter((n) => n.cluster === cluster);
          if (nodes.length === 0) return null;
          return (
            <div key={cluster} className="border border-paper/20 bg-ink">
              <div
                className="px-4 py-2 flex items-center gap-2 border-b border-paper/15"
                style={{ background: `${CLUSTER_COLORS[cluster]}30` }}
              >
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: CLUSTER_COLORS[cluster] }} />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper">
                  {CLUSTER_LABELS[cluster]}
                </span>
              </div>
              <div className="divide-y divide-paper/10">
                {nodes.map((n) => {
                  const edges = ACT_ECOSYSTEM.edges.filter((e) => e.from === n.id || e.to === n.id);
                  return (
                    <div key={n.id} className="px-4 py-3">
                      <div className="font-display font-black text-base text-paper leading-tight">
                        {n.label}
                      </div>
                      {n.note && (
                        <div className="font-display italic text-xs text-paper/60 mt-1">{n.note}</div>
                      )}
                      {edges.length > 0 && (
                        <details className="mt-2">
                          <summary className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent cursor-pointer">
                            {edges.length} connection{edges.length === 1 ? "" : "s"}
                          </summary>
                          <ul className="mt-2 space-y-1.5 pl-1">
                            {edges.map((e, i) => {
                              const otherId = e.from === n.id ? e.to : e.from;
                              const other = nodeById.get(otherId)!;
                              return (
                                <li key={i} className="font-display text-xs text-paper/70 leading-snug">
                                  <span className="font-bold text-paper">↔ {other.label}</span>
                                  {e.label && <span> — {e.label}</span>}
                                  <Cite ids={e.sources} />
                                </li>
                              );
                            })}
                          </ul>
                        </details>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4 justify-center mb-8 px-4">
        {(Object.keys(CLUSTER_COLORS) as Array<NetNode["cluster"]>).map((c) => (
          <div key={c} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: CLUSTER_COLORS[c] }} />
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/70">
              {CLUSTER_LABELS[c]}
            </span>
          </div>
        ))}
      </div>

      <div className="relative w-full">
        <svg
          ref={ref}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          style={{ maxHeight: "70vh" }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {ACT_ECOSYSTEM.edges.map((e: NetEdge, i: number) => {
            const a = nodeById.get(e.from)!;
            const b = nodeById.get(e.to)!;
            const isHovered = hoveredEdges.has(i);
            const baseOpacity = e.kind === "dashed" ? 0.35 : 0.6;
            return (
              <motion.line
                key={i}
                x1={px(a.x)}
                y1={py(a.y)}
                x2={px(b.x)}
                y2={py(b.y)}
                stroke={isHovered ? "#B0331E" : "#F4EBD7"}
                strokeWidth={isHovered ? 2.5 : 1.2}
                strokeDasharray={e.kind === "dashed" ? "6 5" : "0"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: isHovered ? 1 : baseOpacity } : {}}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.05 }}
                style={{ filter: isHovered ? "url(#glow)" : undefined }}
              />
            );
          })}

          {ACT_ECOSYSTEM.nodes.map((n, i) => {
            const isHovered = hover === n.id;
            const color = CLUSTER_COLORS[n.cluster];
            return (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, type: "spring", stiffness: 120 }}
                onMouseEnter={() => enterNode(n.id)}
                onMouseLeave={leaveNode}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={px(n.x)}
                  cy={py(n.y)}
                  r={n.id === "dipke" ? 26 : 18}
                  fill={color}
                  stroke="#F4EBD7"
                  strokeWidth={isHovered ? 3 : 1.5}
                  style={{
                    transform: isHovered ? "scale(1.15)" : "scale(1)",
                    transformOrigin: `${px(n.x)}px ${py(n.y)}px`,
                    transition: "transform .2s ease",
                    filter: isHovered ? "url(#glow)" : undefined,
                  }}
                />
                <text
                  x={px(n.x)}
                  y={py(n.y) + (n.y > 50 ? 38 : -28)}
                  textAnchor="middle"
                  fill="#F4EBD7"
                  fontFamily="Playfair Display, serif"
                  fontWeight={isHovered ? 900 : 700}
                  fontSize={n.id === "dipke" ? 17 : 13}
                  style={{ pointerEvents: "none" }}
                >
                  {n.label}
                </text>
                {n.id === "dipke" && (
                  <text
                    x={px(n.x)}
                    y={py(n.y) + 56}
                    textAnchor="middle"
                    fill="#B0331E"
                    fontFamily="IBM Plex Mono, monospace"
                    fontSize={9}
                    letterSpacing="2"
                    style={{ pointerEvents: "none", textTransform: "uppercase" }}
                  >
                    CJP FOUNDER
                  </text>
                )}
              </motion.g>
            );
          })}
        </svg>

        {hover && (() => {
          const hoveredNode = nodeById.get(hover)!;
          const placeRight = hoveredNode.x < 50;
          const placeBelow = hoveredNode.y < 50;
          const tx = placeRight ? "32px" : "calc(-100% - 32px)";
          const ty = placeBelow ? "24px" : "calc(-100% - 24px)";
          const connections = ACT_ECOSYSTEM.edges.filter(
            (e) => e.from === hover || e.to === hover
          );
          return (
            <div
              style={{
                position: "absolute",
                left: `${hoveredNode.x}%`,
                top: `${hoveredNode.y}%`,
                transform: `translate(${tx}, ${ty})`,
                zIndex: 30,
                pointerEvents: "auto",
              }}
              onMouseEnter={keepCard}
              onMouseLeave={dropCard}
            >
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="bg-paper text-ink border-2 border-ink shadow-[8px_8px_0_var(--color-accent)] flex flex-col"
                style={{
                  width: "clamp(340px, 28vw, 440px)",
                  maxHeight: "min(460px, 72vh)",
                }}
              >
                <div
                  className="flex-shrink-0"
                  style={{
                    padding: "18px 20px 14px",
                    borderBottom: "1px solid rgba(28,28,30,0.12)",
                    background: "rgba(176,51,30,0.06)",
                  }}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-1.5">
                    {CLUSTER_LABELS[hoveredNode.cluster]}
                  </div>
                  <div className="font-display font-black text-[22px] leading-[1.15]">
                    {hoveredNode.label}
                  </div>
                  {hoveredNode.note && (
                    <div className="font-display italic text-[13.5px] leading-snug text-ink-soft mt-2">
                      {hoveredNode.note}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    padding: "14px 20px 18px",
                    overflowY: "auto",
                    flex: "1 1 auto",
                  }}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-3">
                    {connections.length} documented connection
                    {connections.length === 1 ? "" : "s"}
                  </div>
                  <ul className="space-y-3">
                    {connections.map((e, i) => {
                      const otherId = e.from === hover ? e.to : e.from;
                      const other = nodeById.get(otherId)!;
                      return (
                        <li
                          key={i}
                          className="font-display text-[13.5px] leading-[1.55] text-ink-soft"
                          style={{
                            paddingLeft: "12px",
                            borderLeft: "2px solid rgba(176,51,30,0.35)",
                          }}
                        >
                          <span className="font-bold text-ink block mb-0.5">
                            ↔ {other.label}
                          </span>
                          {e.label && <span>{e.label}</span>}
                          <Cite ids={e.sources} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </div>

      <div className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-paper/40 mt-6">
        Hover any node to see its documented connections
      </div>
    </div>
  );
}
