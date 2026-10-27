"use client";

import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { highlights } from "@/lib/site";

export function Highlights() {
  return (
    <section className="relative" aria-label="Our highlights">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Our Highlights"
          title="Scalable, efficient tech"
          highlight="that sharpens skills"
          description="We provide highly scalable and efficient technical services engineered to enhance students' skills."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {highlights.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(118,0,255,0.35)]">
                <div
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20"
                  aria-hidden
                />
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-fuchsia-600 text-white shadow-[0_10px_24px_-8px_rgba(118,0,255,0.6)]">
                  <feature.icon className="size-5.5" aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold leading-snug">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
