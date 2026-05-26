import { absoluteUrl, siteConfig } from "@/lib/site";

type JsonLdProps = {
  path?: string;
  title?: string;
  description?: string;
  type?: "WebSite" | "WebPage";
};

export default function JsonLd({
  path = "",
  title = `${siteConfig.name} · ${siteConfig.tagline}`,
  description = siteConfig.description,
  type = "WebSite",
}: JsonLdProps) {
  const url = absoluteUrl(path);

  const schema =
    type === "WebSite"
      ? {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          alternateName: siteConfig.shortName,
          url: absoluteUrl("/"),
          description: siteConfig.description,
          inLanguage: siteConfig.locale,
          sameAs: [siteConfig.instagram],
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url,
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: absoluteUrl("/"),
          },
          inLanguage: siteConfig.locale,
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
