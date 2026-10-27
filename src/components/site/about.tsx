"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { aboutChecklist, aboutImages, aboutPillars } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20" aria-label="About us">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/40 to-transparent dark:via-accent/20" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="About Atom Code"
          title="Bridging education and"
          highlight="the real world"
          description="AtomCode is an EdTech startup founded in 2023, powered by Atom Labs, MS InfoTech and Genius Academy — a team of passionate technologists, educators and industry experts."
        />

        {/* pillars */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {aboutPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="relative h-full rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(118,0,255,0.3)] sm:p-7">
                <span className="font-display absolute right-6 top-5 text-5xl font-bold text-primary/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <pillar.icon className="size-6" aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* story + images */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="glow-ring row-span-2 overflow-hidden rounded-3xl border bg-white p-4">
                <img
                  src={aboutImages[0].src}
                  alt={aboutImages[0].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
                <p className="mt-3 text-center text-sm font-semibold">
                  {aboutImages[0].label}
                </p>
              </div>
              {aboutImages.slice(1).map((img) => (
                <div
                  key={img.label}
                  className="overflow-hidden rounded-3xl border bg-white p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-28 w-full object-contain sm:h-32"
                  />
                  <p className="mt-2 text-center text-sm font-semibold">{img.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Our Story
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We deliver industry-focused technology training that closes the gap
              between academic learning and real-world skills — on-premises
              programs for institutions in Cloud Computing (AWS, GCP), DevOps,
              Full-Stack Development and Generative AI.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Our AI-driven learning approach ensures every learner gets a
              personalized experience, grasping complex concepts faster and
              applying them in real-world scenarios.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {aboutChecklist.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 rounded-xl border bg-card px-4 py-3 text-sm font-medium"
                >
                  <CheckCircle2 className="size-4.5 shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
