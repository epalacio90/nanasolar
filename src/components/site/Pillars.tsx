import { Banknote, CreditCard, Leaf, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  accent: "blue" | "pink";
};

const PILLARS: readonly Pillar[] = [
  {
    num: "01",
    icon: Banknote,
    title: "Reducción de costos",
    body: "Reducimos tu factura de CFE hasta un 95%. Bajo norma y 100% legal — sin sorpresas.",
    accent: "blue",
  },
  {
    num: "02",
    icon: CreditCard,
    title: "Sin inversión inicial",
    body: "Ofrecemos financiamiento sin enganche. Pagas menos desde el primer período: el ahorro cubre la mensualidad.",
    accent: "pink",
  },
  {
    num: "03",
    icon: Leaf,
    title: "Impacto ambiental",
    body: "Mejora tu imagen pública y accede a clientes con requisitos ESG reduciendo tu huella de carbono.",
    accent: "blue",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Instalación de calidad",
    body: "Ingeniería, dimensionamiento e instalación con estándares internacionales. Paneles Tier 1 con 25 años de garantía.",
    accent: "pink",
  },
];

export function Pillars() {
  return (
    <section
      className="relative border-b border-border bg-white py-24 sm:py-28"
      aria-labelledby="pilares-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
              <span className="h-px w-8 bg-brand-pink" aria-hidden />
              Qué hacemos
            </span>
            <h2
              id="pilares-title"
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]"
            >
              No vendemos paneles.{" "}
              <span className="italic text-brand-blue">
                Diseñamos sistemas solares a tu medida.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Instalamos sistemas fotovoltaicos para residencias, comercios e
            industrias en México — diseñados con software especializado para tu
            consumo, tu tarifa y tu techo.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ num, icon: Icon, title, body, accent }) => (
            <li
              key={title}
              className="group relative flex flex-col bg-white p-7 transition-colors duration-200 hover:bg-brand-gray/40"
            >
              <div className="flex items-center justify-between">
                <div
                  className={
                    accent === "pink"
                      ? "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pink/10 ring-1 ring-brand-pink/15"
                      : "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/5 ring-1 ring-brand-blue/10"
                  }
                >
                  <Icon
                    className={
                      accent === "pink"
                        ? "h-5 w-5 text-brand-pink"
                        : "h-5 w-5 text-brand-blue"
                    }
                    aria-hidden
                  />
                </div>
                <span
                  className="font-display text-3xl font-semibold tabular-nums text-foreground/10"
                  aria-hidden
                >
                  {num}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
              <span
                aria-hidden
                className={
                  accent === "pink"
                    ? "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-pink transition-transform duration-300 group-hover:scale-x-100"
                    : "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-blue transition-transform duration-300 group-hover:scale-x-100"
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
