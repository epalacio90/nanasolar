import { Building2, Factory, Home, School, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Case = {
  name: string;
  segment: string;
  tariff: string;
  kWh: number;
  saving: number;
  icon: LucideIcon;
};

const CASES: readonly Case[] = [
  { name: "Departamentos residenciales", segment: "Torres habitacionales · Cancún", tariff: "PDBT", kWh: 70000, saving: 95, icon: Building2 },
  { name: "Empresa de manufactura", segment: "Industria · Ecatepec", tariff: "PDBT", kWh: 57000, saving: 92, icon: Factory },
  { name: "Escuela primaria", segment: "Educación · Edo. de México", tariff: "PDBT", kWh: 13000, saving: 93, icon: School },
  { name: "Comercio local", segment: "Retail · Texcoco", tariff: "PDBT", kWh: 6000, saving: 90, icon: Store },
  { name: "Industria ligera", segment: "Manufactura · Bajío", tariff: "PDBT", kWh: 5500, saving: 90, icon: Factory },
  { name: "Casa habitación", segment: "Residencial · CDMX", tariff: "R1", kWh: 1000, saving: 95, icon: Home },
  { name: "Residencia familiar", segment: "Residencial · Edo. de México", tariff: "R1", kWh: 6000, saving: 95, icon: Home },
];

const formatKWh = new Intl.NumberFormat("es-MX").format;

export function Cases() {
  return (
    <section
      id="casos"
      className="relative bg-[#fafaf9] py-24 sm:py-28"
      aria-labelledby="casos-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(0,64,193,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
              <span className="h-px w-8 bg-brand-pink" aria-hidden />
              Casos reales
            </span>
            <h2
              id="casos-title"
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]"
            >
              Proyectos que ya producen{" "}
              <span className="italic text-brand-blue">su propia energía.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Tarifas residenciales (R1–R1F), PDBT, GDMTH. Trabajamos todo el
            país: Cancún, CDMX, Estado de México, Bajío y más.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map(({ name, segment, tariff, kWh, saving, icon: Icon }) => (
            <li
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex items-start justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/5 ring-1 ring-brand-blue/10">
                    <Icon className="h-5 w-5 text-brand-blue" aria-hidden />
                  </div>
                  <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                    {tariff}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-display text-[11px] uppercase tracking-[0.15em] text-brand-pink">
                    Ahorro
                  </div>
                  <div className="font-display text-3xl font-semibold tabular-nums leading-none text-brand-pink">
                    {saving}
                    <span className="text-base">%</span>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {name}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{segment}</p>
              </div>

              {/* Consumption visualization */}
              <div className="mt-5 border-t border-border/70 bg-brand-gray/30 px-6 py-4">
                <div className="flex items-end justify-between text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  <span>Consumo bimestral</span>
                  <span className="tabular-nums text-foreground">
                    {formatKWh(kWh)} kWh
                  </span>
                </div>
                <div className="mt-2.5">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-neutral-200/80">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-neutral-400"
                      style={{ width: "100%" }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-pink"
                      style={{ width: `${saving}%` }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
                      Generado con solar
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      Restante CFE
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
