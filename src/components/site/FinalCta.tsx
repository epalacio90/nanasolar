import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-blue py-24 text-white sm:py-28"
      aria-labelledby="final-cta-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[620px] -translate-x-1/2 rounded-full bg-brand-pink/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
          <span className="h-px w-8 bg-brand-pink" aria-hidden />
          El sistema solar diseñado para ti
          <span className="h-px w-8 bg-brand-pink" aria-hidden />
        </span>
        <h2
          id="final-cta-title"
          className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          Tu siguiente recibo de CFE
          <span className="mt-2 block italic text-brand-pink">
            puede ser el último caro.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
          Envíanos tu recibo y te hacemos un análisis técnico y financiero sin
          costo. Si no conviene, te lo decimos.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            render={<a href="#cotiza" />}
            size="lg"
            className="h-12 rounded-full bg-brand-pink px-7 text-base shadow-[0_10px_30px_-8px_rgba(255,0,128,0.6)] hover:bg-brand-pink/90"
          >
            Analiza mi recibo gratis
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            render={
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/40 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
