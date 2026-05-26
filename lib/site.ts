export const siteConfig = {
  name: "Anti-Cockroach Janta Party",
  shortName: "ACJP",
  tagline: "The Opposition",
  description:
    "A political counter-movement for citizens who pick up the broom. Five principles. Zero excuses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anticockroachjantaparty.org",
  instagram: "https://www.instagram.com/anticockroachjantapartyorg",
  ogImage: "/ajcp-logo.png",
  locale: "en_IN",
  keywords: [
    "Anti-Cockroach Janta Party",
    "ACJP",
    "Cockroach Janata Party opposition",
    "Indian politics",
    "political satire",
    "citizen movement",
    "manifesto",
    "expose",
    "anticockroachjantaparty",
  ],
} as const;

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${base}${normalizedPath}`;
}
