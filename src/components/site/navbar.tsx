"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setActive(href.replace("#", ""));
    setOpen(false);
  };

  // Contact link removed from the nav per client request — the header CTA
  // button (renamed to "Contact") covers it. Footer keeps its Contact link.
  const headerLinks = navLinks.filter((link) => link.href !== "#contact");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b shadow-[0_8px_30px_-12px_rgba(118,0,255,0.15)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2.5"
          aria-label="Atom Code home"
        >
          <img
            src="/assets/logo-dark.png"
            alt="Atom Code"
            loading="lazy"
            decoding="async"
            className="hidden h-7 w-auto dark:hidden sm:block"
          />
          <img
            src="/assets/logo-light.png"
            alt="Atom Code"
            loading="lazy"
            decoding="async"
            className="hidden h-7 w-auto dark:sm:block"
          />
          {/* hexagon mark for small screens */}
          <img
            src="/assets/logo-mini.png"
            alt="Atom Code"
            loading="lazy"
            decoding="async"
            className="h-8 w-8 sm:hidden"
          />
          <span className="sr-only">Atom Code</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {headerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={onHome ? link.href : `/${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  active === link.href.replace("#", "")
                    ? "bg-accent/60 text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* standalone page link — sits between About and the theme switcher */}
          <li className="ml-1">
            <Link
              href="/courses"
              aria-label="Online Courses"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition-all",
                pathname.startsWith("/courses")
                  ? "bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_rgba(118,0,255,0.7)]"
                  : "border border-primary/25 bg-accent/50 text-accent-foreground hover:border-primary/50 hover:bg-accent/60"
              )}
            >
              <GraduationCap
                className={cn(
                  "size-4",
                  pathname.startsWith("/courses")
                    ? "text-primary-foreground"
                    : "text-primary"
                )}
                aria-hidden
              />
              Online Courses
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <AnimatedThemeToggler variant="hexagon" />
          <a href={onHome ? "#contact" : "/#contact"} className="hidden md:inline-flex">
            <Button className="font-medium shadow-[0_8px_24px_-8px_rgba(118,0,255,0.6)]">
              Contact
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b bg-background/95 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {headerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={onHome ? link.href : `/${link.href}`}
                    onClick={() => handleNavClick(link.href)}
                    className="block rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent/60"
                >
                  <GraduationCap className="size-4.5 text-primary" aria-hidden />
                  Online Courses
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={onHome ? "#contact" : "/#contact"}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  <Button className="w-full">Contact</Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
