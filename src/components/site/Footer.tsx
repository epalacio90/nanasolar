import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const LINKS = [
  {
    title: "Nanasolar",
    items: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Casos reales", href: "#casos" },
      { label: "Para negocios", href: "#negocios" },
      { label: "Preguntas frecuentes", href: "#preguntas" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Blog", href: "#recursos" },
      { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
      { label: "Términos y condiciones", href: "/terminos" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] text-white/85">
      {/* Giant faded wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 select-none font-display text-[18vw] font-semibold tracking-[-0.05em] text-white/[0.04] sm:-bottom-32 sm:text-[16vw]"
      >
        NANASOLAR
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo variant="white" width={170} height={38} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Energía solar a tu medida para residencias, comercios e industrias
            en México.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {Object.entries(site.social).map(([k, href]) => (
              <a
                key={k}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={k}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <span className="text-[11px] font-semibold uppercase">
                  {k.slice(0, 2)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {LINKS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.items.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {year} {site.legalName}. Todos los derechos reservados.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em]">
            Hecho en México · Energía solar a tu medida
          </p>
        </div>
      </div>
    </footer>
  );
}
