import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { ReceiptMockup } from "./ReceiptMockup";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-blue text-white"
      aria-labelledby="hero-title"
    >
      {/* Background textures */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 h-[720px] w-[720px] rounded-full bg-brand-pink/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-64 -left-40 h-[620px] w-[620px] rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 md:grid-cols-[1.05fr_1fr] md:gap-10 md:pb-32 md:pt-28 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-pink" aria-hidden />
            Diseñado a tu medida · 100% legal bajo norma CFE
          </span>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem]"
          >
            Energía solar
            <span className="relative ml-0 mt-1 block italic font-[500] text-brand-pink">
              a tu medida.
              <svg
                aria-hidden
                viewBox="0 0 320 16"
                className="absolute -bottom-2 left-0 h-3 w-[60%] text-brand-pink/60"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 10 Q 80 2, 160 8 T 318 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Con tarifas de CFE cada vez más altas, reducimos tu factura hasta en un{" "}
            <strong className="font-semibold text-white">95%</strong>. Sin
            inversión inicial, sin enganche y pagas menos desde el primer
            período.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              render={<a href="#cotiza" />}
              size="lg"
              className="h-12 rounded-full bg-brand-pink px-7 text-base font-medium shadow-[0_10px_30px_-8px_rgba(255,0,128,0.6)] hover:bg-brand-pink/90"
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
              Escríbenos por WhatsApp
            </Button>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
                Reducción
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold tabular-nums">
                hasta 95%
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
                ROI
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold tabular-nums">
                3–5<span className="text-base text-white/60"> años</span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
                Garantía
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold tabular-nums">
                25<span className="text-base text-white/60"> años</span>
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-pink" aria-hidden />
              Bajo norma CFE
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-pink" aria-hidden />
              Ingeniería internacional
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-pink" aria-hidden />
              Paneles Tier 1
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center md:justify-end">
          <ReceiptMockup />
        </div>
      </div>

      {/* Marquee trust strip */}
      <div className="relative border-t border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 text-xs uppercase tracking-[0.18em] text-white/60 sm:px-6 lg:px-8">
          <span>Residencial</span>
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
          <span>Comercial</span>
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
          <span>Industrial</span>
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
          <span>Tarifa DAC · PDBT · GDMTH</span>
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
          <span>Financiamiento</span>
        </div>
      </div>
    </section>
  );
}
