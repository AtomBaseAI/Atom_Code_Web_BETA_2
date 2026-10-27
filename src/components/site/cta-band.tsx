"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { contact } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative" aria-label="Call to action">
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0b0714] px-6 py-14 text-center sm:px-12 lg:py-16">
            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black,transparent)]" />
            <div
              className="aurora left-[8%] top-[-30%] size-[340px] bg-primary/50"
              aria-hidden
            />
            <div
              className="aurora bottom-[-40%] right-[6%] size-[320px] bg-fuchsia-600/40"
              style={{ animationDelay: "-7s" }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have a question?{" "}
                <span className="text-gradient">Get in touch.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Enhance your institution&apos;s capabilities with industry-relevant
                cloud and coding training from Atom Code&apos;s certified experts.
                Contact us for details about our services and pricing.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="group bg-primary px-7 font-medium text-white shadow-[0_12px_40px_-10px_rgba(118,0,255,0.8)] hover:bg-primary/90"
                  >
                    Contact us
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </a>
                <a href={contact.phoneHref}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 px-7 font-medium text-white backdrop-blur hover:bg-white/10 hover:text-white"
                  >
                    <Phone className="size-4" />
                    Call now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
