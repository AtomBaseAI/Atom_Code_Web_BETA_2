import { contact, services } from "@/lib/site";

/**
 * Central place for schema.org JSON-LD structured data.
 * Rendered into a single <script type="application/ld+json"> via @graph.
 * All content here mirrors VISIBLE page content (Google requirement for
 * rich results) — the FAQ node matches the visible <details> FAQ section.
 */

const SITE_URL = "https://atomcode.dev";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

const KNOWS_ABOUT = [
  "Full Stack Development",
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "Generative AI",
  "DevOps",
  "Selenium Test Automation",
  "Power BI",
  "Snowflake",
  "ServiceNow",
  "MongoDB",
  "Python",
  "Java",
  "Data Structures and Algorithms",
];

const SERVICE_TYPES: Record<string, string> = {
  "web-portal": "Online Learning & Assessment Platform",
  trainings: "Certification Training Program",
  hackathons: "AI Hackathon Event",
};

export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": ORG_ID,
        name: "Atom Code",
        alternateName: ["AtomCode", "Atom Code Dev"],
        url: SITE_URL,
        description:
          "AI-powered EdTech and engineering company offering hands-on certification trainings, an AI-integrated Open IDE practice platform, institutional partnerships and one-day AI hackathons.",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo-mini.png`,
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "No. 4A, 3rd St, Bharathi Nagar, Raja Nagar, Ganapathy",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641006",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: contact.email,
          telephone: contact.phone.replace(/\s/g, ""),
          areaServed: "IN",
          availableLanguage: ["en", "ta"],
        },
        knowsAbout: KNOWS_ABOUT,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "Atom Code",
        alternateName: "AtomCode",
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: SITE_URL,
        name: "Atom Code — AI-Powered Engineering, Trainings & Hackathons",
        description:
          "Join the next generation of AI-powered engineers. Hands-on certification trainings, the Open IDE practice platform, institutional partnerships and one-day AI hackathons.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en",
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#services`,
        name: "Atom Code Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            serviceType: SERVICE_TYPES[service.id] ?? service.title,
            url: `${SITE_URL}/#services`,
            provider: { "@id": ORG_ID },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        })),
      },
      // FAQPage node hidden while the FAQ section is hidden (client request).
      // Re-enable together with <Faq /> in src/app/page.tsx:
      // {
      //   "@type": "FAQPage",
      //   "@id": `${SITE_URL}/#faq`,
      //   mainEntity: faqItems.map((item) => ({
      //     "@type": "Question",
      //     name: item.question,
      //     acceptedAnswer: {
      //       "@type": "Answer",
      //       text: item.answer,
      //     },
      //   })),
      // },
    ],
  };
}
