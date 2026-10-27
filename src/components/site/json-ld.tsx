import { buildStructuredData } from "@/lib/seo";

/**
 * Emits the site-wide schema.org JSON-LD graph (Organization, WebSite,
 * WebPage, BreadcrumbList, Service ItemList, FAQPage) as a single script.
 * Server component — the payload ships in the initial HTML.
 */
export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Structured data is built from first-party constants (no user input)
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildStructuredData()).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
