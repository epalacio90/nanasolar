import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AudienceData = {
  eyebrow: string;
  title: string;
  desc: string;
  ctaLabel: string;
  stat: { label: string; value: string };
  items: readonly string[];
};

const RESIDENCIAL: AudienceData = {
  eyebrow: "Para tu casa",
  title: "Blíndate contra la tarifa DAC.",
  desc: "Si pagas más de $1,500 bimestrales o estás en tarifa DAC, los paneles se pagan solos en pocos años y siguen generando ahorro por más de dos décadas.",
  ctaLabel: "Cotizar para mi casa",
  stat: { label: "Recuperación", value: "3–5 años" },
  items: [
    "Casas que pagan más de $1,500 bimestrales",
    "Protección frente a subidas de CFE y tarifa DAC",
    "Aumenta el valor de tu propiedad",
    "Financiamiento sin enganche disponible",
    "Paneles Tier 1 con 25 años de garantía",
  ],
};

const NEGOCIOS: AudienceData = {
  eyebrow: "Para tu empresa",
  title: "Convierte tu consumo en ventaja.",
  desc: "Además del ahorro directo, los sistemas solares son deducibles al 100% el primer año y fortalecen tu estrategia ESG frente a clientes, socios e inversionistas.",
  ctaLabel: "Cotizar para mi negocio",
  stat: { label: "Recuperación", value: "2.5–4 años" },
  items: [
    "Comercios e industrias en baja o media tensión",
    "Deducible 100% el primer año (ISR Art. 34-XIII)",
    "Reduce entre 80% y 95% del consumo facturado",
    "Acceso a clientes con requisitos ESG",
    "Financiamiento empresarial — paga con el ahorro",
  ],
};

export function Audiences() {
  return (
    <section
      id="para-quien"
      className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white sm:py-28"
      aria-labelledby="audiencias-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-blue/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-brand-pink/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
              <span className="h-px w-8 bg-brand-pink" aria-hidden />
              Para quién
            </span>
            <h2
              id="audiencias-title"
              className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-[3rem]"
            >
              Dos caminos.{" "}
              <span className="italic text-brand-pink">Un mismo ahorro.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/70">
            Cada instalación se diseña en función de tu recibo, tu tarifa y tus
            planes a futuro — nunca con una fórmula genérica.
          </p>
        </div>

        <Tabs defaultValue="residencial" className="mt-12">
          <TabsList className="inline-flex h-auto rounded-full bg-white/8 p-1 ring-1 ring-white/10 backdrop-blur">
            <TabsTrigger
              value="residencial"
              className="rounded-full px-6 py-2.5 text-sm font-medium text-white/75 data-[state=active]:bg-white data-[state=active]:text-[#0a0a0a]"
            >
              Residencial
            </TabsTrigger>
            <TabsTrigger
              value="negocios"
              className="rounded-full px-6 py-2.5 text-sm font-medium text-white/75 data-[state=active]:bg-white data-[state=active]:text-[#0a0a0a]"
            >
              Negocios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="residencial" className="mt-10">
            <AudienceCard data={RESIDENCIAL} />
          </TabsContent>

          <TabsContent value="negocios" className="mt-10">
            <AudienceCard data={NEGOCIOS} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function AudienceCard({ data }: { data: AudienceData }) {
  const { eyebrow, title, desc, items, ctaLabel, stat } = data;
  return (
    <div className="relative grid overflow-hidden rounded-3xl bg-white p-8 text-foreground sm:p-12 md:grid-cols-[1.1fr_1fr] md:gap-10">
      <div className="relative">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
          {eyebrow}
        </span>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          {desc}
        </p>

        <div className="mt-8 inline-flex items-baseline gap-3 rounded-full bg-brand-blue/5 px-4 py-2 ring-1 ring-brand-blue/10">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {stat.label}
          </span>
          <span className="font-display text-xl font-semibold tabular-nums text-brand-blue">
            {stat.value}
          </span>
        </div>

        <div className="mt-8">
          <Button
            render={<a href="#cotiza" />}
            className="h-11 rounded-full bg-brand-blue px-6 text-white hover:bg-brand-blue/90"
          >
            {ctaLabel}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <ul className="mt-8 flex flex-col gap-0 divide-y divide-border md:mt-0 md:border-l md:border-border md:pl-10">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 py-3.5 text-[15px]">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-pink/10">
              <Check className="h-3 w-3 text-brand-pink" aria-hidden />
            </span>
            <span className="text-foreground/85">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
