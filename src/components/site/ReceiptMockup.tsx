import { Zap } from "lucide-react";

const BEFORE_BARS = [72, 88, 95, 82, 90, 76];
const AFTER_BARS = [12, 8, 14, 10, 9, 11];

export function ReceiptMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] select-none" aria-hidden>
      {/* Sun halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,0,128,0.35),rgba(255,0,128,0)_70%)]"
      />
      {/* Solar rays */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 520 560"
        fill="none"
      >
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 260 + Math.cos(angle) * 120;
          const y1 = 280 + Math.sin(angle) * 120;
          const x2 = 260 + Math.cos(angle) * 280;
          const y2 = 280 + Math.sin(angle) * 280;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          );
        })}
      </svg>

      {/* Back card — ANTES */}
      <div
        className="absolute left-0 top-0 w-[320px] origin-bottom-right -rotate-[7deg] rounded-2xl bg-[#f7f7f5] p-5 text-neutral-700 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:w-[340px]"
        style={{ transform: "translate(-10px, 40px) rotate(-7deg)" }}
      >
        <div className="flex items-center justify-between border-b border-dashed border-neutral-300 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-neutral-800 text-[10px] font-bold text-white">
              CFE
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
              Recibo · Antes
            </div>
          </div>
          <span className="rounded-sm bg-neutral-800 px-1.5 py-0.5 text-[9px] font-semibold text-white">
            DAC
          </span>
        </div>

        <div className="mt-4 space-y-3 font-mono text-[11px]">
          <div className="flex justify-between text-neutral-500">
            <span>Consumo bimestral</span>
            <span className="text-neutral-700">1,240 kWh</span>
          </div>
          <div className="flex items-end gap-1 pt-1">
            {BEFORE_BARS.map((h, i) => (
              <span
                key={i}
                className="w-full rounded-sm bg-neutral-400/60"
                style={{ height: `${h * 0.4 + 8}px` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-neutral-200 pt-3">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400">
            Total a pagar
          </div>
          <div className="relative mt-1">
            <div className="font-display text-3xl font-semibold tabular-nums text-neutral-400 line-through decoration-[#ff0080] decoration-[3px]">
              $8,420
            </div>
          </div>
        </div>
      </div>

      {/* Front card — DESPUÉS */}
      <div
        className="relative ml-auto mr-0 mt-0 w-[340px] origin-bottom-left rounded-2xl bg-white p-6 text-neutral-900 shadow-[0_35px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5 sm:w-[360px]"
        style={{ transform: "translate(20px, 0) rotate(3deg)" }}
      >
        <div className="flex items-center justify-between border-b border-dashed border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-blue text-[10px] font-bold text-white">
              CFE
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
              Recibo · Después
            </div>
          </div>
          <span className="rounded-sm bg-brand-blue px-1.5 py-0.5 text-[9px] font-semibold text-white">
            DAC
          </span>
        </div>

        <div className="mt-4 font-mono text-[11px]">
          <div className="flex justify-between text-neutral-500">
            <span>Tomado de CFE</span>
            <span className="text-neutral-800">60 kWh</span>
          </div>
          <div className="mt-1 flex justify-between text-neutral-500">
            <span>Generado por solar</span>
            <span className="text-brand-pink">1,180 kWh</span>
          </div>
          <div className="mt-2 flex items-end gap-1">
            {AFTER_BARS.map((h, i) => (
              <span
                key={i}
                className="flex w-full flex-col gap-[2px]"
                style={{ height: "40px" }}
              >
                <span
                  className="w-full rounded-sm bg-brand-pink"
                  style={{ height: `${40 - h * 0.4 - 6}px` }}
                />
                <span
                  className="mt-auto w-full rounded-sm bg-neutral-300"
                  style={{ height: `${h * 0.4}px` }}
                />
              </span>
            ))}
          </div>
          <div className="mt-1.5 flex items-center gap-3 text-[9px] text-neutral-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
              Solar
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
              CFE
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">
              Total a pagar
            </div>
            <div className="mt-1 font-display text-4xl font-semibold tabular-nums text-brand-blue">
              $420
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">
              ROI
            </div>
            <div className="mt-1 font-display text-4xl font-semibold tabular-nums text-neutral-900">
              3.4<span className="text-lg text-neutral-400">a</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings stamp — overlaps between cards */}
      <div
        className="absolute left-[58%] top-[38%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg]"
        aria-hidden
      >
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-brand-pink text-white shadow-[0_20px_40px_-10px_rgba(255,0,128,0.6)] ring-[3px] ring-white">
          <div className="absolute inset-2 rounded-full border border-dashed border-white/50" />
          <div className="flex flex-col items-center leading-none">
            <Zap className="mb-1 h-4 w-4 fill-white" aria-hidden />
            <span className="font-display text-3xl font-bold tabular-nums">
              -95
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
              Ahorro
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
