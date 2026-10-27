"use client";

import * as React from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { contact } from "@/lib/site";

const topics = [
  "Web Portal",
  "Trainings & Certifications",
  "AI Hackathons",
  "Partnership / MOU",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [submitting, setSubmitting] = React.useState(false);

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong");
      toast.success("Message sent! We'll get back to you soon.");
      setForm(initialForm);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20" aria-label="Contact">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="together"
          description="Mail us your queries for instant solutions for your business or career development."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12">
          {/* info cards */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start gap-4 rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_40px_-18px_rgba(118,0,255,0.4)]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display font-semibold">Email us</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {contact.email}
                  </p>
                </div>
              </a>

              <a
                href={contact.phoneHref}
                className="group flex items-start gap-4 rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_40px_-18px_rgba(118,0,255,0.4)]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display font-semibold">Call us</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {contact.phone}
                  </p>
                </div>
              </a>

              <div className="flex flex-1 items-start gap-4 rounded-3xl border bg-card p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display font-semibold">Visit us</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="glow-ring relative overflow-hidden rounded-3xl border bg-card p-6">
                <div className="bg-dots absolute inset-0 opacity-20" aria-hidden />
                <div className="relative flex items-center gap-4">
                  <img
                    src="/assets/contact-illustration.svg"
                    alt="Atom Code contact and support illustration"
                    loading="lazy"
                    decoding="async"
                    className="h-24 w-auto"
                  />
                  <p className="text-sm font-medium leading-relaxed">
                    We usually reply within{" "}
                    <span className="text-gradient font-bold">24 hours</span>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal className="lg:col-span-7" delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="relative h-full rounded-3xl border bg-card p-6 sm:p-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={update("name")}
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={update("phone")}
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-topic">I&apos;m interested in</Label>
                  <Select
                    value={form.topic}
                    onValueChange={(v) =>
                      setForm((f) => ({ ...f, topic: v }))
                    }
                  >
                    <SelectTrigger id="contact-topic" className="h-11 rounded-xl">
                      <SelectValue placeholder="Choose a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="contact-message">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your institution, team or goals..."
                    value={form.message}
                    onChange={update("message")}
                    required
                    className="min-h-32 rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  By submitting, you agree to be contacted about Atom Code
                  services. We never share your data.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full px-8 font-medium shadow-[0_12px_36px_-10px_rgba(118,0,255,0.65)] sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="size-4" aria-hidden />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
