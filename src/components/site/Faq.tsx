import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappLink } from "@/lib/site";

export const FAQ_ITEMS = [
  {
    q: "¿Cuánto cuestan los paneles solares en México en 2026?",
    a: "En 2026 un panel solar instalado cuesta entre $8,000 y $12,000 MXN — incluye panel, inversor, estructura, instalación y trámite ante CFE. Un sistema residencial típico (4 a 10 paneles) va de $32,000 a $120,000 MXN. No vendemos paneles sueltos: diseñamos un sistema completo según tu recibo, tu tarifa y tu techo.",
  },
  {
    q: "¿Cuántos paneles solares necesito para mi casa?",
    a: "Depende de los kWh que consumes, no del monto en pesos. Un panel de 620 W produce entre 75 y 95 kWh al mes en México. Como referencia: 150 kWh/mes ≈ 2 paneles, 300 ≈ 4, 600 ≈ 7, 900 ≈ 11. Nosotros lo calculamos con software que considera orientación, sombreado y pérdidas del techo específico.",
  },
  {
    q: "¿Puedo eliminar mi recibo de CFE al 100%?",
    a: "En un sistema interconectado sólo puedes eliminarlo hasta un 99%. CFE cobra una pequeña tarifa por el derecho a consumir su energía cuando la necesites. Aun así, muchos de nuestros clientes terminan pagando el mínimo.",
  },
  {
    q: "¿Cuánto cuesta el mantenimiento?",
    a: "Muy bajo. Los paneles Tier 1 que instalamos tienen 25 a 30 años de garantía y requieren limpieza ocasional. El inversor puede necesitar reemplazo después de 10–15 años, costo contemplado en la proyección financiera.",
  },
  {
    q: "¿Sube el predial si instalo paneles?",
    a: "No. La instalación de paneles solares no modifica el valor catastral del inmueble ni incrementa el predial. Al contrario, sí aumenta el valor comercial de la propiedad.",
  },
  {
    q: "¿Cuánto espacio necesito en el techo?",
    a: "Un panel de 620 W mide aproximadamente 2.3 m × 1.1 m y requiere espacio libre sin sombra. Durante el diseño analizamos orientación e inclinación para aprovechar al máximo el techo disponible — losa plana, teja o lámina.",
  },
  {
    q: "¿Qué pasa si después consumo más energía?",
    a: "El sistema puede ampliarse si el espacio lo permite. En el diseño inicial consideramos crecimiento futuro (aires nuevos, autos eléctricos, expansión del negocio) para evitar subdimensionarlo.",
  },
];

export function Faq() {
  return (
    <section
      id="preguntas"
      className="bg-white py-24 sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:px-8">
        <div className="md:sticky md:top-24 md:self-start">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-pink">
            <span className="h-px w-8 bg-brand-pink" aria-hidden />
            Preguntas frecuentes
          </span>
          <h2
            id="faq-title"
            className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-[2.75rem]"
          >
            Lo que casi nadie te dice{" "}
            <span className="italic text-brand-blue">
              sobre los paneles solares.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            ¿No ves tu pregunta? Escríbenos por WhatsApp — respondemos sin
            compromiso.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:underline"
          >
            Hablar con un experto →
          </a>
        </div>

        <Accordion className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-medium tracking-tight hover:no-underline">
                <span className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-[11px] text-brand-pink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-8 pr-4 text-[15px] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
