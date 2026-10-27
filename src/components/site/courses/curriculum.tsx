"use client";

import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { formatHours, type CourseModule } from "@/lib/courses";
import { cn } from "@/lib/utils";

interface CurriculumListProps {
  modules: CourseModule[];
  accent: string;
}

/**
 * LMS-style curriculum: modules rendered one by one on a numbered
 * timeline, each with its practical exercise. Content is server-rendered
 * (SEO-friendly) and enhanced with reveal animations.
 */
export function CurriculumList({ modules, accent }: CurriculumListProps) {
  return (
    <div className="relative space-y-4">
      {modules.map((module, index) => (
        <Reveal key={module.order} delay={Math.min(index * 0.03, 0.4)}>
          <article className="relative flex gap-4 sm:gap-5">
            {/* timeline rail */}
            <div className="relative flex flex-col items-center" aria-hidden>
              <span
                className={cn(
                  "z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-xs font-bold",
                  index === 0
                    ? "border-transparent text-white"
                    : "bg-background"
                )}
                style={
                  index === 0
                    ? { backgroundColor: accent }
                    : { borderColor: `${accent}55`, color: accent }
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < modules.length - 1 && (
                <span
                  className="absolute top-10 bottom-[-16px] w-px"
                  style={{ background: `linear-gradient(${accent}44, ${accent}22)` }}
                />
              )}
            </div>

            {/* module card */}
            <div
              className={cn(
                "group flex-1 rounded-2xl border bg-card/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_40px_-20px_rgba(118,0,255,0.35)] sm:p-5"
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold sm:text-base">
                  Module {String(index + 1).padStart(2, "0")}
                  <span className="text-muted-foreground font-normal">
                    {" \u00b7 "}
                    {formatHours(module.hours)}
                  </span>
                </h3>
                {index === 0 ? (
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <PlayCircle className="size-3" aria-hidden />
                    Start here
                  </span>
                ) : (
                  <span className="text-muted-foreground text-[11px] font-medium">
                    Hands-on session
                  </span>
                )}
              </div>
              <p className="font-display mt-1.5 text-base font-bold leading-snug tracking-tight sm:text-lg">
                {module.title}
              </p>
              {module.practical && (
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {module.practical}
                </p>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
