import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atom Code — AI-Powered Engineering, Trainings & Hackathons",
    short_name: "Atom Code",
    description:
      "Atom Code is an AI-powered EdTech company offering hands-on certification trainings, an AI-integrated Open IDE practice platform and one-day AI hackathons.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0a0710",
    theme_color: "#7600FF",
    categories: ["education", "productivity"],
    icons: [
      {
        src: "/assets/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
