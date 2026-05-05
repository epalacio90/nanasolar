import { Zap } from "lucide-react";
import { site } from "@/lib/site";

const CFE_GREEN = "#009639";

const ADDRESS_LINES = [
  "Av. Paseo de la Reforma 164, Col. Juárez,",
  "Alcaldía: Cuauhtémoc, Código Postal: 06600,",
  "Ciudad de México. RFC: CFE370814QI0",
] as const;

const SOLAR_RAYS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 * Math.PI) / 180;
  return {
    x1: Math.round(230 + Math.cos(angle) * 130),
    y1: Math.round(290 + Math.sin(angle) * 130),
    x2: Math.round(230 + Math.cos(angle) * 290),
    y2: Math.round(290 + Math.sin(angle) * 290),
  };
});

type Tag = {
  className: string;
  label: string;
  withIcon?: boolean;
};

type ReceiptData = {
  amount: string;
  amountInWords: string;
  subject: string;
  amountClass: string;
  tag: Tag;
};

const BEFORE: ReceiptData = {
  amount: "13,290",
  amountInWords: "TRECE MIL DOSCIENTOS NOVENTA PESOS",
  subject: "Pronto voy a pagar menos",
  amountClass: "text-neutral-900",
  tag: { className: "bg-neutral-900", label: "Antes" },
};

const AFTER: ReceiptData = {
  amount: "367",
  amountInWords: "TRESCIENTOS SESENTA Y SIETE PESOS",
  subject: "¡Ya estoy ahorrando!",
  amountClass: "text-brand-blue",
  tag: { className: "bg-brand-pink", label: "−95% ahorro", withIcon: true },
};

function CfeMark() {
  return (
    <div className="flex flex-col leading-none">
      <span
        className="font-display tracking-[-0.06em]"
        style={{
          color: CFE_GREEN,
          fontSize: "30px",
          lineHeight: "0.85",
          fontStyle: "italic",
          fontWeight: 800,
        }}
      >
        CFE
      </span>
      <span
        className="mt-1 italic font-semibold tracking-tight"
        style={{ color: CFE_GREEN, fontSize: "6.5px", lineHeight: "1.1" }}
      >
        Comisión Federal de Electricidad
        <sup style={{ fontSize: "5px" }}>®</sup>
      </span>
    </div>
  );
}

function Receipt({ data, width }: { data: ReceiptData; width: number }) {
  return (
    <article
      className="relative overflow-hidden rounded-md bg-white text-neutral-900 shadow-[0_28px_55px_-15px_rgba(0,0,0,0.5)] ring-1 ring-black/5"
      style={{ width: `${width}px` }}
    >
      <header className="flex items-start justify-between gap-3 px-4 pb-3 pt-3">
        <CfeMark />
        <div
          className="pt-0.5 leading-[1.45] text-neutral-700"
          style={{ fontSize: "6.5px" }}
        >
          <div className="font-bold">Comisión Federal de Electricidad</div>
          {ADDRESS_LINES.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-[1.05fr_1fr] gap-px bg-white">
        <div className="bg-neutral-100 px-4 py-3">
          <div className="text-[12px] font-bold leading-tight tracking-tight">
            CLIENTE SATISFECHO
          </div>
          <div className="mt-1 text-[10px] leading-snug text-neutral-700">
            {data.subject}
          </div>
          <div className="text-[10px] leading-snug text-neutral-700">
            Estado de México
          </div>
        </div>
        <div className="bg-neutral-100 px-4 py-3">
          <div className="text-[8px] font-medium uppercase tracking-wide text-neutral-600">
            TOTAL A PAGAR:
          </div>
          <div
            className={`mt-0.5 font-display font-bold tabular-nums leading-none ${data.amountClass}`}
            style={{ fontSize: "32px" }}
          >
            ${data.amount}
          </div>
          <div
            className="mt-1 uppercase tracking-tight text-neutral-500"
            style={{ fontSize: "6.5px" }}
          >
            ({data.amountInWords} M.N.)
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-3 text-[10px] leading-[1.65] text-neutral-800">
        <div className="flex">
          <span className="w-[105px] shrink-0 font-bold tracking-tight">
            NO. DE SERVICIO:
          </span>
          <span className="font-semibold" style={{ color: CFE_GREEN }}>
            ¡Cotiza gratis!
          </span>
        </div>
        <div className="flex">
          <span className="w-[105px] shrink-0 font-bold tracking-tight">RMU:</span>
          <span className="tabular-nums">{site.whatsappDisplay}</span>
        </div>
        <div className="flex">
          <span className="w-[105px] shrink-0 font-bold tracking-tight">
            CUENTA:
          </span>
          <span>Descubre cuánto puedes ahorrar</span>
        </div>
      </div>

      <div
        className={`absolute right-0 top-0 flex items-center gap-1 px-2 py-1 ${data.tag.className}`}
      >
        {data.tag.withIcon ? (
          <Zap className="h-2.5 w-2.5 fill-white text-white" aria-hidden />
        ) : null}
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">
          {data.tag.label}
        </span>
      </div>
    </article>
  );
}

export function ReceiptMockup() {
  return (
    <div
      className="relative mx-auto aspect-[460/580] w-full max-w-[460px] select-none"
      aria-hidden
    >
      {/* Sun halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,0,128,0.35),rgba(255,0,128,0)_70%)]"
      />

      {/* Solar rays */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 460 580"
        fill="none"
      >
        {SOLAR_RAYS.map((ray, i) => (
          <line
            key={i}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        ))}
      </svg>

      {/* BEFORE — top-left */}
      <div
        className="absolute left-0 top-0"
        style={{ transform: "translate(-10px, 8px) rotate(-4deg)" }}
      >
        <Receipt data={BEFORE} width={310} />
      </div>

      {/* Pink arrow */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 460 580"
        fill="none"
      >
        <defs>
          <filter
            id="receipt-arrow-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="6"
              floodColor="#ff0080"
              floodOpacity="0.55"
            />
          </filter>
        </defs>
        <g filter="url(#receipt-arrow-glow)">
          <path
            d="M 270 198 Q 60 290, 158 376"
            stroke="#ff0080"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <g transform="translate(158 376) rotate(43)">
            <polygon points="0,0 -18,-9 -18,9" fill="#ff0080" />
          </g>
        </g>
      </svg>

      {/* AFTER — bottom-right */}
      <div
        className="absolute bottom-0 right-0"
        style={{ transform: "translate(10px, -8px) rotate(2deg)" }}
      >
        <Receipt data={AFTER} width={340} />
      </div>
    </div>
  );
}
