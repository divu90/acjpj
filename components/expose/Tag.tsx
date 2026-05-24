import type { Tag as TagType } from "@/lib/expose-data";

const STYLES: Record<TagType, string> = {
  FACT: "tag-fact",
  ALLEGATION: "tag-allegation",
  UNVERIFIED: "tag-unverified",
};

export default function Tag({ kind }: { kind: TagType }) {
  return (
    <span
      className={`${STYLES[kind]} inline-block px-2.5 py-1 font-mono text-[12px] tracking-[0.16em] uppercase font-semibold`}
    >
      {kind}
    </span>
  );
}
