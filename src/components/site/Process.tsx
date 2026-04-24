import { FileText, LayoutDashboard, Sun, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { n: string; title: string; body: string; icon: LucideIcon };

const STEPS: readonly Step[] = [
  {
    n: "01",
    icon: FileText,
    title: "Envías tu recibo",
    body: "Nos compartes tu último recibo por WhatsApp. No usamos el monto en pesos: nos fijamos en los kWh — es el dato que realmente importa.",
  },
  {
    n: "02",
    icon: LayoutDashboard,
    title: "Diseñamos tu sistema",
    body: "Con software especializado analizamos orientación, inclinación, sombreado anual, pérdidas eléctricas y ubicación. Cada techo es único.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Instalamos bajo norma",
    body: "Ingeniería internacional, paneles Tier 1 y trámite de interconexión ante CFE incluido. Sin atajos.",
  },
  {
    n: "04",
    icon: Sun,
    title: "Ahorras desde el día uno",
    body: "El ahorro en tu factura cubre la mensualidad del financiamiento. Después de 3–5 años, produces tu propia energía.",
  },
];

export function Process() {
  return (
    <section
      id="como-funciona"
      className="relative bg-white py-24 sm:py-28"
      aria-labelledby="proceso-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
            <span className="h-px w-8 bg-brand-pink" aria-hidden />
            Cómo funciona
          </span>
          <h2
            id="proceso-title"
            className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]"
          >
            De tu recibo al ahorro,{" "}
            <span className="italic text-brand-blue">en cuatro pasos.</span>
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Connector line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(to_right,transparent,rgb(0_64_193/.2)_10%,rgb(0_64_193/.2)_90%,transparent)] lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map(({ n, icon: Icon, title, body }) => (
              <li key={n} className="relative">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-brand-blue/15">
                    <div className="absolute inset-1 rounded-full bg-brand-blue/5" />
                    <Icon
                      className="relative h-5 w-5 text-brand-blue"
                      aria-hidden
                    />
                  </div>
                  <span
                    className="font-display text-sm font-semibold tracking-[0.2em] text-brand-pink"
                    aria-hidden
                  >
                    PASO {n}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
