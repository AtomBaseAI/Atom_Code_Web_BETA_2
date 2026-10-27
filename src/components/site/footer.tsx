"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerBlurb, navLinks, services } from "@/lib/site";

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Subscription failed");
      toast.success(data?.message ?? "Subscribed! Watch your inbox.");
      setEmail("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Subscription failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="relative">
        <Mail
          className="text-muted-foreground pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2"
          aria-hidden
        />
        <Input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="h-11 rounded-xl border-white/15 bg-white/5 pl-10 text-white placeholder:text-white/40 focus-visible:ring-primary"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="h-11 bg-primary font-medium text-white hover:bg-primary/90"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Subscribing…
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-[#0b0714] text-white" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Link href="#home" className="inline-block" aria-label="Atom Code home">
              <img
                src="/assets/logo-light.png"
                alt="Atom Code"
                loading="lazy"
                decoding="async"
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {footerBlurb}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                AWS Partner
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                GCP Partner
              </span>
            </div>
          </div>

          {/* company */}
          <nav className="lg:col-span-2" aria-label="Company links">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-primary transition-all group-hover:w-5" aria-hidden />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <span className="h-px w-3 bg-primary transition-all group-hover:w-5" aria-hidden />
                  Online Courses
                </Link>
              </li>
            </ul>
          </nav>

          {/* services */}
          <nav className="lg:col-span-3" aria-label="Service links">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-primary transition-all group-hover:w-5" aria-hidden />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white/90">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Subscribe to get updates on new programs and hackathons.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-sm text-white/50">
            © 2023–{new Date().getFullYear()}{" "}
            <span className="text-gradient font-semibold">Atom Code</span> Dev
          </p>
          <p className="text-sm text-white/50">
            Powered by{" "}
            <span className="font-semibold text-white/80">
              Atom Labs · MS InfoTech · Genius Academy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function ScrollTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-md bg-primary text-white shadow-[0_12px_32px_-8px_rgba(118,0,255,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}
