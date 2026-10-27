import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, GraduationCap, Layers, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer, ScrollTopButton } from "@/components/site/footer";
import { CourseCard } from "@/components/site/courses/course-card";
import { getCourseGroups, getCatalogStats } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Online Courses",
  description:
    "Explore Atom Code's online courses — foundations in C, C++, Java and Python, MERN/MEAN/Java full stack, machine learning, generative AI, AWS cloud and SDET software testing. Hands-on, mentor-led, portal-powered.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Online Courses | Atom Code",
    description:
      "Hands-on online courses across foundations, full stack, AI & ML, AWS cloud and SDET — powered by the Atom Code learning portal.",
    url: "/courses",
  },
};

export default function CoursesPage() {
  // Pure static data — this page is fully SSG at build time.
  const groups = getCourseGroups();
  const stats = getCatalogStats(groups);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        {/* ---------- hero ---------- */}
        <section className="relative overflow-hidden pt-16" aria-label="Online courses intro">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
          <div
            className="aurora left-[-10%] top-[-12%] size-[440px] bg-primary/40 dark:bg-primary/30"
            aria-hidden
          />
          <div
            className="aurora right-[-8%] top-[10%] size-[380px] bg-fuchsia-500/35"
            style={{ animationDelay: "-6s" }}
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-12 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground backdrop-blur">
              <GraduationCap className="size-3.5 text-primary" aria-hidden />
              Online Courses
            </span>
            <h1 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              Learn by Building with{" "}
              <span className="text-gradient">Expert-Led Courses</span>
            </h1>
            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              Pick a learning track and master it module by module — foundations,
              full stack, AI &amp; ML, AWS cloud and SDET. Every course is 80%
              hands-on, mentor-guided and delivered on the Atom Code portal.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: BookOpen, label: `${stats.groups} learning tracks` },
                { icon: GraduationCap, label: `${stats.courses} courses` },
                { icon: Layers, label: `${stats.modules} guided modules` },
                { icon: Clock, label: `${stats.hours} hrs of training` },
                { icon: Sparkles, label: "80% hands-on" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <Icon className="size-4 text-primary" aria-hidden />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- course groups ---------- */}
        <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          {groups.map((group) => (
            <section
              key={group.id}
              id={group.slug}
              aria-label={`${group.name} courses`}
              className="scroll-mt-24"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${group.accent}1f`, color: group.accent }}
                    >
                      <BookOpen className="size-5.5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {group.name}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {group.courses.length}{" "}
                        {group.courses.length === 1 ? "course" : "courses"}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
                    {group.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {group.courses.map((course, i) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    accent={group.accent}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ---------- CTA band ---------- */}
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" aria-label="Course enrollment call to action">
          <div className="glow-ring relative overflow-hidden rounded-3xl border bg-card/70 p-8 text-center backdrop-blur sm:p-12">
            <div
              className="aurora left-[-5%] top-[-30%] size-[300px] bg-primary/30"
              aria-hidden
            />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Not sure which track fits you?
              </h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base">
                Talk to our team — we&apos;ll map your goals to the right course,
                arrange institutional programs or plan your certification path.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_-10px_rgba(118,0,255,0.65)] transition-transform hover:scale-[1.03]"
              >
                Talk to our team
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
