import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { faqItems } from "@/lib/site";

/**
 * FAQ section built on native <details>/<summary> so every question and
 * answer ships in the server-rendered HTML — fully crawlable by search
 * engines and eligible for FAQ rich results (matched by FAQPage JSON-LD).
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      {/* soft backdrop blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 size-[560px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions,"
          highlight="Answered"
          description="Everything you need to know about Atom Code's trainings, Open IDE platform, hackathons and institutional partnerships."
        />

        <Reveal className="mt-12 space-y-3" delay={0.05}>
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border bg-card/60 px-5 backdrop-blur transition-colors hover:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold">{item.question}</h3>
                <span
                  aria-hidden
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-accent text-primary transition-transform duration-300 group-open:rotate-180"
                >
                  <ChevronDown className="size-4" />
                </span>
              </summary>
              <p className="text-muted-foreground pb-5 pr-8 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </Reveal>

        <p className="text-muted-foreground mt-8 text-center text-sm">
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  );
}
