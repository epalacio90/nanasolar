import { ArrowRight, Calculator, Receipt, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

type Benefit = { icon: LucideIcon; title: string; body: string };

const BENEFITS: readonly Benefit[] = [
  {
    icon: Receipt,
    title: "Deducible al 100% el primer año",
    body: "Los sistemas fotovoltaicos califican como inversión en energías renovables (Ley del ISR, Art. 34 XIII). Menos impuestos, más flujo.",
  },
  {
    icon: TrendingUp,
    title: "ROI de 2.5 a 4 años",
    body: "Empresas con alto consumo diurno recuperan la inversión rápido. Después, el sistema genera ahorro 20 a 30 años.",
  },
  {
    icon: Calculator,
    title: "Paga con tu propio ahorro",
    body: "Esquemas de financiamiento empresarial donde la mensualidad se cubre prácticamente con el ahorro del mismo recibo.",
  },
];

export function Business() {
  const message =
    "Hola Nanasolar, soy de una empresa y me interesa una consultoría para analizar si conviene instalar paneles solares.";
  return (
    <section
      id="negocios"
      className="relative isolate overflow-hidden bg-brand-pink py-24 text-white sm:py-28"
      aria-labelledby="negocios-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-brand-blue/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-white/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="h-px w-8 bg-white/60" aria-hidden />
              Para tu empresa
            </span>
            <h2
              id="negocios-title"
              className="mt-4 font-display text-3xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl md:text-[3.5rem]"
            >
              ¿Cuánto le cuesta a tu empresa
              <span className="mt-2 block italic">
                no generar su propia energía?
              </span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/90">
            En 2026, los paneles solares dejaron de ser ecología y se
            convirtieron en una decisión financiera estratégica. Cada bimestre
            sin generar es una fuga de rentabilidad.
          </p>
        </div>

        <ul className="mt-14 grid gap-0 overflow-hidden rounded-3xl bg-white/12 ring-1 ring-white/15 backdrop-blur-sm md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className={
                i < BENEFITS.length - 1
                  ? "p-7 border-b border-white/15 md:border-b-0 md:border-r"
                  : "p-7"
              }
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <span
                  className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60"
                  aria-hidden
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button
            render={
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="h-12 rounded-full bg-white px-7 text-base font-medium text-brand-pink shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] hover:bg-white/90"
          >
            Agenda consultoría empresarial
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <p className="max-w-sm text-sm text-white/80">
            Si el proyecto no es viable, te lo decimos. Sin vender humo.
          </p>
        </div>
      </div>
    </section>
  );
}
