"use client";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}{" "}
        {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
