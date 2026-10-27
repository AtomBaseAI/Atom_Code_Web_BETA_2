"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type ThemeTogglerVariant = "circle" | "hexagon";

interface AnimatedThemeTogglerProps {
  /** Button shape — "hexagon" mirrors the Atom Code mark. Default: "circle". */
  variant?: ThemeTogglerVariant;
  /** Duration (ms) of the circular reveal sweep. Default: 700. */
  duration?: number;
  className?: string;
}

interface ThemeViewTransition {
  ready: Promise<void>;
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => ThemeViewTransition;
};

const HEXAGON_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// Hydration-safe "is mounted" flag (no setState-in-effect): the server
// snapshot is false so SSR markup matches, flipping to true after hydration.
const subscribeNoop = () => () => {};
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

/**
 * MagicUI-style AnimatedThemeToggler, adapted to the site's design tokens
 * (bg-background / bg-border / text-foreground / primary violet).
 *
 * Toggling starts a View Transitions API circular reveal that sweeps the new
 * palette out from the button itself. Falls back to an instant swap when the
 * API is unavailable or the user prefers reduced motion.
 */
export function AnimatedThemeToggler({
  className,
  variant = "circle",
  duration = 700,
}: AnimatedThemeTogglerProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Guards against rapid re-clicks while the view-transition snapshot is
  // still pending (React state is not yet flushed, so a second click would
  // read a stale resolvedTheme and swallow one toggle).
  const startingRef = useRef(false);
  const mounted = useSyncExternalStore(
    subscribeNoop,
    getMountedSnapshot,
    getMountedServerSnapshot,
  );

  const isDark = mounted && resolvedTheme === "dark";
  const ThemeIcon = isDark ? Sun : Moon;

  const toggleTheme = useCallback(async () => {
    if (!mounted || startingRef.current) return;
    startingRef.current = true;

    try {
      const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
      const doc = document as ViewTransitionDocument;

      if (
        typeof doc.startViewTransition !== "function" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(nextTheme);
        return;
      }

      const transition = doc.startViewTransition(() => {
        // Flush synchronously so the "new" snapshot already paints the next
        // palette (next-themes applies its class in an effect, which would
        // otherwise land after the snapshot is taken).
        flushSync(() => setTheme(nextTheme));
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.documentElement.style.colorScheme = nextTheme;
      });

      await transition.ready;

      const button = buttonRef.current;
      if (!button) return;

      const { top, left, width, height } = button.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    } catch {
      // Transition skipped (e.g. overlapping toggles) — theme already applied.
    } finally {
      startingRef.current = false;
    }
  }, [duration, mounted, resolvedTheme, setTheme]);

  if (variant === "hexagon") {
    return (
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className={cn(
          "group relative inline-flex size-9 shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        <span
          aria-hidden
          className="absolute inset-0 transition-transform duration-300 group-active:scale-90"
        >
          {/* hexagon ring — border token, brightens to brand violet on hover */}
          <span
            aria-hidden
            style={{ clipPath: HEXAGON_CLIP }}
            className="absolute inset-0 bg-border transition-colors duration-300 group-hover:bg-primary"
          />
          {/* hexagon face — token background so it adapts to light/dark */}
          <span
            aria-hidden
            style={{ clipPath: HEXAGON_CLIP }}
            className="absolute inset-[1.5px] bg-background/80 backdrop-blur-sm transition-colors duration-300 group-hover:bg-accent"
          />
        </span>
        <ThemeIcon
          key={isDark ? "sun" : "moon"}
          aria-hidden
          className="relative size-[18px] animate-in fade-in zoom-in duration-300 text-foreground transition-colors duration-300 group-hover:text-primary"
        />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <ThemeIcon
        key={isDark ? "sun" : "moon"}
        aria-hidden
        className="size-[18px] animate-in fade-in zoom-in duration-300"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
