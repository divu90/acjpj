"use client";
import { SOURCES } from "@/lib/expose-data";

export default function Cite({ ids }: { ids: string[] }) {
  return (
    <sup className="inline-flex gap-0.5 align-super">
      {ids.map((id) => {
        const src = SOURCES[id];
        if (!src) return null;
        return (
          <a
            key={id}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cite"
            aria-label={`Open source ${id} — ${src.outlet}`}
            title={`${src.outlet} · open article`}
          >
            [{id.replace("s", "")}]
          </a>
        );
      })}
    </sup>
  );
}
