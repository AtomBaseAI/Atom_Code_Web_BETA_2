import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/site/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const SITE_URL = "https://atomcode.dev";
const TITLE = "Atom Code — AI-Powered Engineering, Trainings & Hackathons";
const DESCRIPTION =
  "Atom Code is an AI-powered EdTech company offering hands-on certification trainings, an AI-integrated Open IDE practice platform, institutional partnerships and one-day AI hackathons for aspiring engineers. Fueled by AI — powered by Atom Code Dev.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Atom Code",
  },
  description: DESCRIPTION,
  keywords: [
    "Atom Code",
    "AtomCode",
    "atomcode.dev",
    "AI-powered EdTech",
    "AI engineering training",
    "certification training India",
    "AWS certification training",
    "GCP certification training",
    "Azure certification",
    "Snowflake SnowPro training",
    "ServiceNow certification",
    "full stack developer course",
    "MERN stack training",
    "MEAN stack training",
    "Java full stack Spring Boot",
    "AI hackathon India",
    "one-day hackathon",
    "Open IDE",
    "coding practice platform",
    "programming practice platform",
    "AI pair programming",
    "college training programs",
    "institutional training partnership",
    "campus placement training",
    "EdTech company Coimbatore",
    "learn to code",
    "data analytics training",
    "Power BI training",
    "DevOps training",
    "Selenium test automation",
  ],
  applicationName: "Atom Code",
  authors: [{ name: "Atom Code Dev", url: SITE_URL }],
  creator: "Atom Code Dev",
  publisher: "Atom Code Dev",
  category: "education",
  classification: "Education, Technology Training, AI Engineering",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Atom Code",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  // Replace with the token from Google Search Console
  // (https://search.google.com/search-console → URL prefix → HTML tag)
  verification: {
    google: "REPLACE-WITH-GOOGLE-SEARCH-CONSOLE-TOKEN",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/assets/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/assets/icon-192.png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore, Tamil Nadu, India",
    ICBM: "11.0168, 76.9558",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0710" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
