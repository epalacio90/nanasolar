import Script from "next/script";
import { Audiences } from "@/components/site/Audiences";
import { Blog } from "@/components/site/Blog";
import { Business } from "@/components/site/Business";
import { Cases } from "@/components/site/Cases";
import { Faq, FAQ_ITEMS } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Pillars } from "@/components/site/Pillars";
import { Process } from "@/components/site/Process";
import { SavingsForm } from "@/components/site/SavingsForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Pillars />
        <Audiences />
        <Process />
        <SavingsForm />
        <Cases />
        <Business />
        <Faq />
        <Blog />
        <FinalCta />
      </main>
      <Footer />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  );
}
