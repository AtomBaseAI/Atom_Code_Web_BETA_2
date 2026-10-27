"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Layers } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import type { CourseSummary } from "@/lib/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: CourseSummary;
  accent: string;
  delay?: number;
  compact?: boolean;
}

const levelStyles: Record<string, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25",
  Advanced: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25",
};

export function CourseCard({ course, accent, delay = 0, compact }: CourseCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/courses/${course.slug}`}
        aria-label={`${course.title} course details`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(118,0,255,0.35)]"
      >
        {/* accent top line */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity group-hover:opacity-100"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
        />

        <div className="flex items-center justify-between gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${accent}1f`, color: accent }}
          >
            <BookOpen className="size-5" aria-hidden />
          </span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-1 text-[11px] font-semibold",
              levelStyles[course.level] ?? levelStyles.Beginner
            )}
          >
            {course.level}
          </span>
        </div>

        <h3 className="font-display mt-4 text-lg font-bold leading-snug tracking-tight">
          {course.title}
        </h3>
        <p className="text-primary mt-1 text-sm font-medium">{course.subtitle}</p>

        {!compact && (
          <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-relaxed">
            {course.description}
          </p>
        )}

        <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="size-3.5" aria-hidden />
            {course.moduleCount} modules
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden />
            {course.totalHours}-hr track
          </span>
        </div>

        {!compact && course.tools.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {course.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-accent px-2 py-0.5 text-[11px] font-medium text-accent-foreground"
              >
                {tool}
              </span>
            ))}
            {course.tools.length > 4 && (
              <span className="text-muted-foreground px-1 py-0.5 text-[11px] font-medium">
                +{course.tools.length - 4} more
              </span>
            )}
          </div>
        )}

        <span
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold"
          style={{ color: accent }}
        >
          Explore course
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </Link>
    </Reveal>
  );
}
