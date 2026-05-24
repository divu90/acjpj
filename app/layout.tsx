import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anti-Cockroach Janta Party · The Opposition",
  description: "A political counter-movement for citizens who pick up the broom. Five principles. Zero excuses.",
  icons: {
    icon: "/ajcp-logo.png",
    shortcut: "/ajcp-logo.png",
    apple: "/ajcp-logo.png",
  },
  openGraph: {
    title: "Anti-Cockroach Janta Party · The Opposition",
    description: "A political counter-movement for citizens who pick up the broom. Five principles. Zero excuses.",
    images: [
      {
        url: "/ajcp-logo.png",
        width: 1200,
        height: 630,
        alt: "Anti-Cockroach Janta Party logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Cockroach Janta Party · The Opposition",
    description: "A political counter-movement for citizens who pick up the broom. Five principles. Zero excuses.",
    images: ["/ajcp-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EBD7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;600&family=Noto+Serif+Devanagari:wght@600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
