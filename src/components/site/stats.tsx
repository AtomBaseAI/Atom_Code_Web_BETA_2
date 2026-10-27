"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "./reveal";
import { heroStats } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative" aria-label="Key numbers">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:glow-ring sm:p-8"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-fuchsia-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <dd className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="text-muted-foreground mt-2 text-sm font-medium">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
