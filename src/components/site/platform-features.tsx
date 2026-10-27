"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { platformTabs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PlatformFeatures() {
  const [activeId, setActiveId] = React.useState(platformTabs[0].id);
  const active = platformTabs.find((t) => t.id === activeId) ?? platformTabs[0];

  return (
    <section id="platform" className="relative scroll-mt-20" aria-label="Platform features">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-transparent to-transparent dark:from-accent/20" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything you need to"
          highlight="level up"
          description="A quick view of Atom Code's technical services — from AI-assisted coding to career-ready tracks."
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:mt-16 lg:grid-cols-12">
          {/* tab list */}
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div
              role="tablist"
              aria-label="Platform features"
              className="flex flex-col gap-3"
            >
              {platformTabs.map((tab) => {
                const selected = tab.id === activeId;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                      selected
                        ? "border-primary/50 bg-card shadow-[0_16px_44px_-18px_rgba(118,0,255,0.45)]"
                        : "bg-card/60 hover:border-primary/30 hover:bg-card"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="platform-tab-glow"
                        className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-primary to-fuchsia-500"
                        aria-hidden
                      />
                    )}
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                          selected
                            ? "bg-gradient-to-br from-primary to-fuchsia-600 text-white"
                            : "bg-accent text-primary"
                        )}
                      >
                        <tab.icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold sm:text-lg">
                          {tab.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {selected && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-muted-foreground overflow-hidden text-sm leading-relaxed"
                            >
                              <span className="block pt-1.5">{tab.description}</span>
                              <span className="flex flex-wrap gap-2 pt-3">
                                {tab.bullets.map((b) => (
                                  <span
                                    key={b}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground"
                                  >
                                    <Check className="size-3" aria-hidden />
                                    {b}
                                  </span>
                                ))}
                              </span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* visual */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="glow-ring relative min-h-[320px] overflow-hidden rounded-2xl border bg-card p-6 sm:min-h-[420px] sm:p-10">
              <div
                className="bg-dots absolute inset-0 opacity-25"
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative flex h-full items-center justify-center"
                >
                  <img
                    src={active.image}
                    alt={active.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto max-h-[300px] w-auto max-w-full rounded-xl sm:max-h-[380px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
