import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Clock,
  GraduationCap,
  Layers,
  Mail,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer, ScrollTopButton } from "@/components/site/footer";
import { CurriculumList } from "@/components/site/courses/curriculum";
import { CourseCard } from "@/components/site/courses/course-card";
import { getCourseBySlug, getCourseGroups, getAllCourseSlugs } from "@/lib/courses";

/**
 * Fully static (SSG): every course page is prerendered at build time from
 * the static catalog in src/lib/course-data.ts — no database, no runtime
 * rendering. Unknown slugs statically 404.
 */
export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

const SITE_URL = "https://atomcode.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course not found" };

  const title = `${course.title} — Online Course`;
  const description = `${course.description} ${course.modules.length} hands-on modules over ${course.totalHours} hours, mentor-led, delivered on the Atom Code portal.`;

  return {
    title,
    description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${title} | Atom Code`,
      description,
      url: `/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const groups = getCourseGroups();
  const siblings = groups
    .find((g) => g.slug === course.group.slug)
    ?.courses.filter((c) => c.slug !== course.slug) ?? [];

  const accent = course.group.accent;

  // schema.org Course structured data (Google course rich result)
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/courses/${course.slug}`,
    educationalLevel: course.level,
    teaches: course.modules.map((m) => m.title),
    provider: {
      "@type": "Organization",
      name: "Atom Code",
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${course.totalHours}H`,
    },
  };

  const metaChips = [
    { icon: Layers, label: `${course.modules.length} modules` },
    { icon: Clock, label: `${course.totalHours}-hr track` },
    { icon: Sparkles, label: "80% hands-on" },
    { icon: Award, label: course.projects.includes("3 projects") ? "3 projects" : "2 projects" },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      {/* Course structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />
      <main className="flex-1">
        {/* ---------- course hero ---------- */}
        <section
          className="relative overflow-hidden pt-16"
          aria-label={`${course.title} overview`}
        >
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,black,transparent)]" />
          <div
            className="aurora left-[-8%] top-[-14%] size-[420px]"
            style={{ backgroundColor: `${accent}55` }}
            aria-hidden
          />
          <div
            className="aurora right-[-6%] top-[6%] size-[360px] bg-primary/35"
            style={{ animationDelay: "-7s" }}
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
            {/* breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/courses" className="transition-colors hover:text-foreground">
                Online Courses
              </Link>
              <span aria-hidden>/</span>
              <span className="font-medium text-foreground" aria-current="page">
                {course.title}
              </span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Link
                href={`/courses#${course.group.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: `${accent}1a`, color: accent, borderColor: `${accent}44` }}
              >
                <GraduationCap className="size-3.5" aria-hidden />
                {course.group.name}
              </Link>
              <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                {course.level}
              </span>
            </div>

            <h1 className="font-display mt-4 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-2 text-lg font-medium" style={{ color: accent }}>
              {course.subtitle}
            </p>
            <p className="text-muted-foreground mt-4 max-w-3xl text-base leading-relaxed">
              {course.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {metaChips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium shadow-sm sm:text-sm"
                >
                  <Icon className="size-3.5" style={{ color: accent }} aria-hidden />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(118,0,255,0.65)] transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: accent }}
              >
                Enroll in this course
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-accent"
              >
                <ArrowLeft className="size-4" aria-hidden />
                All courses
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- curriculum + sidebar ---------- */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_320px] lg:gap-12 lg:px-8 lg:pb-28">
          <section aria-label="Course curriculum">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
                  Curriculum
                </span>
                <h2 className="font-display mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  {course.modules.length} modules, {course.totalHours} hrs of hands-on
                  learning
                </h2>
              </div>
            </div>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
              Every module pairs a focused topic with a guided practical exercise —
              learn it, build it, then practice it on the Atom Code portal in the
              same session.
            </p>

            <div className="mt-8">
              <CurriculumList modules={course.modules} accent={accent} />
            </div>
          </section>

          {/* sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Course details">
            <div className="space-y-4">
              {/* details card */}
              <div className="rounded-2xl border bg-card/70 p-6 backdrop-blur">
                <h2 className="font-display text-base font-bold">Course details</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Level", course.level],
                    ["Duration", `${course.totalHours}-hr track`],
                    ["Format", "Live + portal practice"],
                    ["Projects", course.projects],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                        {label}
                      </dt>
                      <dd className="font-medium leading-snug">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* tools card */}
              {course.tools.length > 0 && (
                <div className="rounded-2xl border bg-card/70 p-6 backdrop-blur">
                  <h2 className="font-display flex items-center gap-2 text-base font-bold">
                    <Wrench className="size-4" style={{ color: accent }} aria-hidden />
                    Tools &amp; stack
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div className="glow-ring relative overflow-hidden rounded-2xl border bg-card/80 p-6 backdrop-blur">
                <div
                  className="aurora right-[-20%] top-[-30%] size-[220px]"
                  style={{ backgroundColor: `${accent}44` }}
                  aria-hidden
                />
                <div className="relative">
                  <h2 className="font-display text-base font-bold">
                    Ready to start {course.title}?
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    Get the full syllabus, upcoming batch dates and enrollment details.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(118,0,255,0.65)] transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: accent }}
                  >
                    <GraduationCap className="size-4" aria-hidden />
                    Request enrollment
                  </Link>
                  <a
                    href="mailto:info@atomcode.dev"
                    className="text-muted-foreground mt-3 inline-flex w-full items-center justify-center gap-1.5 text-xs font-medium transition-colors hover:text-foreground"
                  >
                    <Mail className="size-3.5" aria-hidden />
                    info@atomcode.dev
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ---------- related courses ---------- */}
        {siblings.length > 0 && (
          <section
            className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"
            aria-label={`More ${course.group.name} courses`}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                More in {course.group.name}
              </h2>
              <Link
                href="/courses"
                className="text-muted-foreground inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-foreground"
              >
                View all
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {siblings.map((sibling, i) => (
                <CourseCard
                  key={sibling.id}
                  course={sibling}
                  accent={accent}
                  delay={i * 0.06}
                  compact
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
