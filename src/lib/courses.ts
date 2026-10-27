/**
 * Course catalog helpers — 100% static, zero database.
 *
 * All data lives in src/lib/course-data.ts and is compiled into the bundle,
 * so every consumer (catalog page, course detail pages, sitemap,
 * generateStaticParams) can be statically generated at build time.
 */
import { COURSE_GROUPS, CATALOG_UPDATED } from "./course-data";

export { CATALOG_UPDATED };

export interface CourseModule {
  order: number;
  title: string;
  practical: string | null;
  /** Hands-on hours allocated to this module (weight-based share of the course total). */
  hours: number;
}

export interface CourseSummary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  projects: string;
  tools: string[];
  moduleCount: number;
  /** Total hands-on hours for the whole course. */
  totalHours: number;
}

export interface CourseGroupData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  accent: string;
  courses: CourseSummary[];
}

export interface CourseDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  projects: string;
  tools: string[];
  group: { name: string; slug: string; accent: string };
  totalHours: number;
  modules: CourseModule[];
}

// ---------------------------------------------------------------------------
// Training-hours model
// ---------------------------------------------------------------------------
// Courses are measured in hands-on HOURS, not days. Each course declares a
// total in course-data.ts; that total is split across its modules
// proportionally to each module's actual weight — titles that pack more topic
// segments or deeper material (projects, deployment, security, exams…) earn
// more time, while intros/overviews earn less. Pure + deterministic so SSG
// output is stable across builds.

const LIGHT_TITLE =
  /\b(introduction|overview|welcome|setup|conclusion|recap|wrap-up|closing|orientation)\b/;
// Right edge deliberately open so stems match derivatives too:
// docker->dockerfiles, runner->runners, cloud->cloudfront/cloudwatch, deploy->deployment…
const HEAVY_TITLE =
  /\b(project|capstone|build|deploy|implement|integrat|authentic|security|advanc|optimi[sz]|exam|practice|portfolio|final|docker|container|runner|aws|cloud|pipeline|monitoring|kubernetes)/;

/** Relative weight of a single module, derived from its title. */
function moduleWeight(title: string): number {
  const t = title.toLowerCase();
  const segments = t
    .split(/,|&|\band\b|\bvs\b/)
    .map((s) => s.trim())
    .filter(Boolean);
  const words = t.split(/\s+/).filter(Boolean).length;

  let weight = 1.2 + 0.55 * (Math.max(1, segments.length) - 1) + 0.12 * words;
  if (t.includes("(")) weight += 0.4; // parenthetical = extra sub-topics
  if (LIGHT_TITLE.test(t)) weight *= 0.75; // intros / setups run lighter
  if (HEAVY_TITLE.test(t)) weight *= 1.3; // projects / deep dives run heavier
  return weight;
}

/**
 * Split `totalHours` across module titles by weight. Returns one entry per
 * title (same order), rounded to the nearest half hour with each module at
 * least 1 hr. The values always sum EXACTLY to `totalHours` — rounding drift
 * is absorbed by a largest-remainder pass on the half-hour grid.
 */
export function allocateModuleHours(totalHours: number, titles: string[]): number[] {
  const weights = titles.map(moduleWeight);
  const weightSum = weights.reduce((a, b) => a + b, 0);
  const exact = weights.map((w) => (totalHours * w) / weightSum);

  // nearest half hour, floored at 1 hr (2 half-hour units)
  const units = exact.map((h) => Math.max(2, Math.round(h * 2)));

  // absorb rounding drift, starting where rounding distorted the most
  let drift = Math.round(totalHours * 2) - units.reduce((a, b) => a + b, 0);
  const order = exact
    .map((h, i) => ({ i, err: h - units[i] / 2 }))
    .sort((a, b) => Math.abs(b.err) - Math.abs(a.err));

  let guard = 0;
  while (drift !== 0 && guard < 10_000) {
    for (const { i } of order) {
      if (drift === 0) break;
      const step = drift > 0 ? 1 : -1;
      if (units[i] + step >= 2) {
        units[i] += step;
        drift -= step;
      }
    }
    guard += 1;
  }

  return units.map((u) => u / 2);
}

/** "3 hrs" / "2.5 hrs" — display helper shared by the course UI. */
export function formatHours(hours: number): string {
  return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} hrs`;
}

/** All course groups with their courses (incl. module counts), in catalog order. */
export function getCourseGroups(): CourseGroupData[] {
  return COURSE_GROUPS.map((group, gi) => ({
    id: group.slug,
    name: group.name,
    slug: group.slug,
    tagline: group.tagline,
    accent: group.accent,
    courses: group.courses.map((course, ci) => ({
      id: course.slug,
      slug: course.slug,
      title: course.title,
      subtitle: course.subtitle,
      description: course.description,
      level: course.level,
      projects: course.projects,
      tools: course.tools,
      moduleCount: course.modules.length,
      totalHours: course.hours,
    })),
  }));
}

/** One course with its full ordered module list (null if slug is unknown). */
export function getCourseBySlug(slug: string): CourseDetail | null {
  for (const group of COURSE_GROUPS) {
    const course = group.courses.find((c) => c.slug === slug);
    if (!course) continue;

    const moduleHours = allocateModuleHours(
      course.hours,
      course.modules.map((m) => m.title)
    );

    return {
      id: course.slug,
      slug: course.slug,
      title: course.title,
      subtitle: course.subtitle,
      description: course.description,
      level: course.level,
      projects: course.projects,
      tools: course.tools,
      group: {
        name: group.name,
        slug: group.slug,
        accent: group.accent,
      },
      totalHours: course.hours,
      modules: course.modules.map((m, i) => ({
        order: m.order,
        title: m.title,
        practical: m.practical,
        hours: moduleHours[i],
      })),
    };
  }
  return null;
}

/** All course slugs — used by sitemap and generateStaticParams. */
export function getAllCourseSlugs(): string[] {
  return COURSE_GROUPS.flatMap((g) => g.courses.map((c) => c.slug));
}

/** Catalog-wide stats for hero chips. */
export function getCatalogStats(groups: CourseGroupData[]) {
  const courses = groups.reduce((acc, g) => acc + g.courses.length, 0);
  const modules = groups.reduce(
    (acc, g) => acc + g.courses.reduce((a, c) => a + c.moduleCount, 0),
    0
  );
  const hours = groups.reduce(
    (acc, g) => acc + g.courses.reduce((a, c) => a + c.totalHours, 0),
    0
  );
  return { groups: groups.length, courses, modules, hours };
}
