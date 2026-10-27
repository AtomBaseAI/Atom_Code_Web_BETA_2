"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marqueeItems } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

function FloatChip({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="glass rounded-2xl border shadow-lg shadow-primary/10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16" aria-label="Intro">
      {/* backdrop */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      <div
        className="aurora left-[-10%] top-[-12%] size-[480px] bg-primary/40 dark:bg-primary/30"
        aria-hidden
      />
      <div
        className="aurora right-[-8%] top-[8%] size-[420px] bg-fuchsia-500/35"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />
      <div
        className="aurora bottom-[-20%] left-[30%] size-[380px] bg-purple-500/25"
        style={{ animationDelay: "-11s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        {/* copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground backdrop-blur">
              <Sparkles className="size-3.5 text-primary" aria-hidden />
              EdTech · AI-Powered Engineering
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl"
          >
            Reimagine Engineering with{" "}
            <span className="text-gradient">AI-Powered Tools</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            Join the next generation of AI-powered engineers. Grow your skills,
            connect with a thriving community, and learn by building — fueled by
            AI, powered by{" "}
            <span className="text-foreground font-semibold">Atom Code Dev</span>.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#platform">
              <Button
                size="lg"
                className="group px-7 font-medium shadow-[0_12px_36px_-10px_rgba(118,0,255,0.65)]"
              >
                Get Started
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="px-7 font-medium backdrop-blur"
              >
                Explore Services
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="text-muted-foreground mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
              80% hands-on learning
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              6k+ students trained
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-fuchsia-500" aria-hidden />
              AWS & GCP partner
            </span>
          </motion.div>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="glow-ring relative rounded-2xl border bg-card p-6 sm:p-8">
            <div
              className="bg-dots absolute inset-0 rounded-2xl opacity-30"
              aria-hidden
            />
            <img
              src="/assets/hero-startup.svg"
              alt="Engineers building with AI-powered tools"
              className="relative mx-auto w-full max-w-md"
              width={489}
              height={500}
            />
          </div>

          <FloatChip delay={0.7} className="absolute -left-3 top-10 sm:-left-8">
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <TerminalSquare className="size-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold leading-none">Open IDE</p>
                <p className="text-muted-foreground mt-1 text-[11px] leading-none">
                  code · run · iterate
                </p>
              </div>
              <span className="ml-2 flex items-end gap-[3px]" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="w-[3px] origin-bottom rounded-full bg-primary/80"
                    style={{
                      height: 14,
                      animation: `eq 1.2s ease-in-out ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </span>
            </div>
          </FloatChip>

          <FloatChip delay={1} className="absolute -right-2 bottom-8 sm:-right-6">
            <div className="px-4 py-3">
              <p className="text-xs font-semibold">AI Suggestions</p>
              <div className="mt-2 space-y-1.5" aria-hidden>
                <div className="h-1.5 w-32 rounded-full bg-gradient-to-r from-primary/70 to-fuchsia-500/40" />
                <div className="h-1.5 w-24 rounded-full bg-primary/25" />
                <div className="h-1.5 w-28 rounded-full bg-primary/15" />
              </div>
            </div>
          </FloatChip>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="relative border-y bg-accent/40 py-4 backdrop-blur">
        <div
          className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-hidden
        >
          <div className="marquee-track items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((label, i) => (
              <span
                key={i}
                className="text-muted-foreground flex items-center gap-10 whitespace-nowrap text-sm font-medium"
              >
                {label}
                <span className="size-1.5 rounded-full bg-primary/50" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
