import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Highlights } from "@/components/site/highlights";
import { PlatformFeatures } from "@/components/site/platform-features";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Partnership } from "@/components/site/partnership";
// FAQ section hidden per client request — component + data kept for easy re-enable
// import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { Contact } from "@/components/site/contact";
import { Footer, ScrollTopButton } from "@/components/site/footer";
import { SiteJsonLd } from "@/components/site/json-ld";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteJsonLd />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Highlights />
        <PlatformFeatures />
        <Services />
        <About />
        <Partnership />
        {/* FAQ hidden per client request — re-enable by uncommenting (see also src/lib/seo.ts) */}
        {/* <Faq /> */}
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
