"use client";

import * as React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20" aria-label="Services">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Services built for"
          highlight="future engineers"
          description="From an AI-integrated learning portal to certification trainings and campus hackathons — pick your path."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_rgba(118,0,255,0.4)]">
                {/* visual header */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-card to-accent/60 p-6 dark:from-accent/50 dark:via-card dark:to-accent/30">
                  <div className="bg-dots absolute inset-0 opacity-25" aria-hidden />
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="relative max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4 rounded-full bg-primary/90 text-white">
                    {service.badge}
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <service.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-foreground/90 mt-4 text-sm font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground mt-2 line-clamp-3 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.checklist.slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span className="line-clamp-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="group/btn w-full font-medium"
                        >
                          Learn more
                          <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-3xl p-0 sm:w-full">
                        <DialogHeader className="sr-only">
                          <DialogTitle>{service.title}</DialogTitle>
                          <DialogDescription>{service.tagline}</DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="max-h-[85vh]">
                          <div className="p-6 sm:p-8">
                            <div className="flex items-center gap-4">
                              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-fuchsia-600 text-white">
                                <service.icon className="size-6" aria-hidden />
                              </span>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                  {service.badge}
                                </p>
                                <h3 className="font-display text-2xl font-bold">
                                  {service.title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-muted-foreground mt-5 leading-relaxed">
                              {service.description}
                            </p>

                            <h4 className="font-display mt-7 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                              Key features
                            </h4>
                            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                              {service.features.map((f) => (
                                <div
                                  key={f.label}
                                  className="flex items-center gap-3 rounded-xl border bg-secondary/50 px-3.5 py-2.5"
                                >
                                  <f.icon
                                    className="size-4.5 shrink-0 text-primary"
                                    aria-hidden
                                  />
                                  <span className="text-sm font-medium">{f.label}</span>
                                </div>
                              ))}
                            </div>

                            <h4 className="font-display mt-7 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                              What you get
                            </h4>
                            <ul className="mt-3 space-y-2.5">
                              {service.checklist.map((point) => (
                                <li
                                  key={point}
                                  className="text-muted-foreground flex items-start gap-2.5 text-sm leading-relaxed"
                                >
                                  <CheckCircle2
                                    className="mt-0.5 size-4.5 shrink-0 text-primary"
                                    aria-hidden
                                  />
                                  {point}
                                </li>
                              ))}
                            </ul>

                            <h4 className="font-display mt-7 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                              Tracks
                            </h4>
                            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                              {service.stack.map((s) => (
                                <div
                                  key={s.name}
                                  className="rounded-xl border bg-accent/60 p-3"
                                >
                                  <p className="text-sm font-semibold">{s.name}</p>
                                  <p className="text-muted-foreground mt-1 text-[11px] leading-snug">
                                    {s.detail}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 flex justify-end">
                              <a href="#contact">
                                <Button className="font-medium">
                                  Talk to us
                                </Button>
                              </a>
                            </div>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
