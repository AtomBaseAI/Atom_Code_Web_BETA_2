"use client";

import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { partnershipSteps, partners } from "@/lib/site";

export function Partnership() {
  return (
    <section className="relative" aria-label="Partnerships">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Partnerships"
          title="Universities & institutions,"
          highlight="in collaboration"
          description="We collaborate with universities and top-tier institutions to provide platforms, cutting-edge training and certification programs."
        />

        {/* steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          <div
            className="absolute left-[16%] right-[16%] top-16 hidden border-t-2 border-dashed border-primary/25 md:block"
            aria-hidden
          />
          {partnershipSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <article className="relative flex h-full flex-col items-center rounded-3xl border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(118,0,255,0.3)]">
                <span className="relative flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-fuchsia-600 text-white shadow-[0_12px_30px_-8px_rgba(118,0,255,0.55)]">
                  <step.icon className="size-7" aria-hidden />
                  <span className="font-display absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-card text-xs font-bold text-primary ring-1 ring-primary/30">
                    {step.step}
                  </span>
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* cloud partners */}
        <Reveal className="mt-14 lg:mt-20" delay={0.05}>
          <div className="rounded-2xl border bg-card/70 p-8 backdrop-blur sm:p-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Cloud Certification Partners
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
              {partners.map((p) => (
                <div
                  key={p.alt}
                  className="group flex items-center justify-center rounded-2xl bg-white px-6 py-4 ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:ring-primary/40 hover:shadow-[0_14px_36px_-14px_rgba(118,0,255,0.4)]"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
