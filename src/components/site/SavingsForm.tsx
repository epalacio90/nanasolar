"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { whatsappLink } from "@/lib/site";

type PropertyType = "residencia" | "negocio" | "industria";

const PROPERTY_LABEL: Record<PropertyType, string> = {
  residencia: "Residencial",
  negocio: "Comercio",
  industria: "Industria",
};

const PROPERTY_ORDER: readonly PropertyType[] = [
  "residencia",
  "negocio",
  "industria",
];

const CURRENCY = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export function SavingsForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState<number>(3000);
  const [type, setType] = useState<PropertyType>("residencia");
  const [city, setCity] = useState("");

  const yearly = useMemo(() => amount * 0.9 * 6, [amount]);
  const monthly = useMemo(() => amount * 0.9 / 2, [amount]);

  const message = useMemo(
    () =>
      `Hola Nanasolar, me gustaría un análisis gratis de mi recibo de CFE.\n\n` +
      `• Nombre: ${name || "—"}\n` +
      `• Inmueble: ${PROPERTY_LABEL[type]}\n` +
      `• Ciudad: ${city || "—"}\n` +
      `• Pago bimestral aprox.: ${CURRENCY.format(amount)}\n` +
      `\nAdjunto mi recibo en este chat.`,
    [name, type, city, amount],
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="cotiza"
      className="relative isolate overflow-hidden bg-brand-blue py-24 text-white sm:py-28"
      aria-labelledby="cotiza-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-brand-pink/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.05fr] md:items-start lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
            <span className="h-px w-8 bg-brand-pink" aria-hidden />
            Cotización sin costo
          </span>
          <h2
            id="cotiza-title"
            className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-[3rem]"
          >
            Calcula tu ahorro{" "}
            <span className="italic text-brand-pink">en 30 segundos.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            Comparte tus datos y tu pago aproximado. Te enviamos por WhatsApp un
            análisis técnico y financiero personalizado — si no conviene, te lo
            decimos.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/20 ring-1 ring-white/20">
            <div className="flex flex-col gap-2 bg-white/10 p-6 backdrop-blur">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
                Ahorro estimado / año
              </span>
              <span className="font-display text-4xl font-semibold tabular-nums text-white">
                {CURRENCY.format(yearly)}
              </span>
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-brand-pink/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-pink ring-1 ring-brand-pink/30">
                <span aria-hidden>↑</span> vs. CFE actual
              </span>
            </div>
            <div className="flex flex-col gap-2 bg-white/10 p-6 backdrop-blur">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
                Ahorro estimado / mes
              </span>
              <span className="font-display text-4xl font-semibold tabular-nums text-white">
                {CURRENCY.format(monthly)}
              </span>
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70 ring-1 ring-white/15">
                En promedio
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-white/55">
            Estimación basada en 90% de reducción. El análisis personalizado
            calcula tu ahorro real con tu tarifa, consumo en kWh y ubicación.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] bg-white p-6 text-foreground shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/5 sm:p-8"
          aria-describedby="cotiza-title"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-pink">
              Paso 01 · Cuéntanos
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              #NS-{Math.floor(Math.random() * 9000) + 1000}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="nombre" className="text-xs">
                Nombre completo
              </Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Ana García"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="whatsapp" className="text-xs">
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="tel"
                placeholder="55 1234 5678"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="ciudad" className="text-xs">
                Ciudad / Estado
              </Label>
              <Input
                id="ciudad"
                name="ciudad"
                placeholder="Ciudad de México"
                autoComplete="address-level2"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label className="text-xs">Tipo de inmueble</Label>
            <div
              role="radiogroup"
              aria-label="Tipo de inmueble"
              className="grid grid-cols-3 gap-1 rounded-full bg-brand-gray/50 p-1"
            >
              {PROPERTY_ORDER.map((t) => {
                const active = type === t;
                return (
                  <button
                    key={t}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setType(t)}
                    className={
                      active
                        ? "rounded-full bg-brand-blue px-3 py-2 text-xs font-semibold text-white transition-colors"
                        : "rounded-full px-3 py-2 text-xs font-medium text-foreground/70 transition-colors hover:text-foreground"
                    }
                  >
                    {PROPERTY_LABEL[t]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-baseline justify-between">
              <Label htmlFor="monto" className="text-xs">
                Pago bimestral aproximado
              </Label>
              <span className="font-display text-lg font-semibold tabular-nums text-brand-blue">
                {CURRENCY.format(amount)}
              </span>
            </div>
            <input
              id="monto"
              name="monto"
              type="range"
              min={1500}
              max={60000}
              step={500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-brand-gray accent-brand-pink"
              aria-valuemin={1500}
              aria-valuemax={60000}
              aria-valuenow={amount}
            />
            <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>$1,500</span>
              <span>$60,000+</span>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-7 h-12 w-full rounded-full bg-brand-pink text-base shadow-[0_10px_30px_-8px_rgba(255,0,128,0.5)] hover:bg-brand-pink/90"
          >
            <Send className="mr-1 h-4 w-4" />
            Enviar por WhatsApp
          </Button>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Al enviar aceptas nuestro aviso de privacidad. No compartimos tus
            datos.
          </p>
        </form>
      </div>
    </section>
  );
}
