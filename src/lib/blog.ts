export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string; variant?: "default" | "pink" | "blue" }
  | { type: "quote"; text: string }
  | { type: "stat-grid"; items: { label: string; value: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: "blue" | "pink";
  readMin: number;
  date: string;
  dateISO: string;
  blocks: ContentBlock[];
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function toc(post: Post) {
  return post.blocks
    .filter((b): b is Extract<ContentBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id ?? slugify(b.text), text: b.text }));
}

export function withIds(blocks: ContentBlock[]): ContentBlock[] {
  return blocks.map((b) =>
    b.type === "h2" || b.type === "h3"
      ? { ...b, id: b.id ?? slugify(b.text) }
      : b,
  );
}

export const posts: Post[] = [
  {
    slug: "cuanto-cuestan-paneles-solares-mexico-2026",
    title: "¿Cuánto cuestan los paneles solares en México en 2026?",
    description:
      "Precios reales por panel y por sistema completo, factores que mueven el costo y cuánto paga realmente una casa promedio en México en 2026.",
    category: "Guía de precios",
    categoryColor: "pink",
    readMin: 6,
    date: "17 de febrero de 2026",
    dateISO: "2026-02-17",
    blocks: withIds([
      {
        type: "p",
        text: "Si estás pensando en instalar paneles solares este 2026, seguramente la primera pregunta que te haces es: ¿cuánto cuesta realmente un sistema solar en México? La respuesta corta es: depende. Pero en este artículo te explicamos con números reales qué factores influyen en el precio, cuánto cuesta un sistema residencial promedio y cómo saber si realmente vale la pena para tu casa o negocio.",
      },
      { type: "h2", text: "Precio de paneles solares en México en 2026" },
      {
        type: "p",
        text: "En 2026, el costo promedio de un sistema fotovoltaico residencial en México se encuentra entre $8,000 y $12,000 pesos por panel instalado (equivalente a entre $14,000 y $22,000 pesos por kWp instalado). Este precio incluye equipo, inversor, estructura, instalación y trámites ante CFE.",
      },
      { type: "h3", text: "Precios aproximados por tamaño de sistema" },
      {
        type: "stat-grid",
        items: [
          { label: "4 paneles", value: "$32,000 – $48,000" },
          { label: "8 paneles", value: "$64,000 – $96,000" },
          { label: "10 paneles", value: "$80,000 – $120,000" },
          { label: "16 paneles", value: "$128,000 – $192,000" },
        ],
      },
      {
        type: "p",
        text: "Un sistema mayor debe evaluarse caso por caso: los proyectos grandes se benefician de economías de escala y su precio unitario puede bajar significativamente.",
      },
      {
        type: "callout",
        variant: "pink",
        text: "En Nanasolar no te vendemos un panel, ni cinco paneles. Te asesoramos y diseñamos un sistema hecho a tu medida, conforme a tus necesidades y requisitos.",
      },
      { type: "h2", text: "¿Por qué varía tanto el precio?" },
      {
        type: "p",
        text: "No todos los sistemas solares cuestan lo mismo. El precio depende principalmente de:",
      },
      {
        type: "ul",
        items: [
          "Consumo eléctrico mensual: mientras más alto sea tu recibo, mayor el sistema que necesitas.",
          "Tipo de tarifa: no es lo mismo una tarifa doméstica 1C que una DAC o una comercial en media tensión.",
          "Tipo de inversor: central, microinversores o híbrido con baterías — cada uno impacta el precio final.",
          "Calidad del equipo: paneles Tier 1, garantías de 25 a 30 años, marcas reconocidas, optimizadores.",
          "Tipo de techo: no cuesta lo mismo instalar en losa plana, teja, lámina o estructura elevada.",
        ],
      },
      { type: "h2", text: "¿Han bajado los precios en 2026?" },
      {
        type: "p",
        text: "En comparación con hace algunos años, el costo por watt instalado ha disminuido gracias a mayor competencia en el mercado, mejoras tecnológicas en los paneles (mayor eficiencia) y optimización de procesos de instalación. Sin embargo, factores como inflación, tipo de cambio y costos logísticos pueden influir en variaciones regionales.",
      },
      { type: "h2", text: "¿Cuánto paga realmente una casa promedio?" },
      {
        type: "p",
        text: "En México, una casa que paga entre $2,500 y $5,000 pesos bimestrales de luz normalmente requiere un sistema de entre 4 y 10 paneles (2.5 a 6 kWp). La inversión aproximada estaría entre $32,000 y $120,000 MXN, y el retorno de inversión suele encontrarse entre 3 y 5 años, dependiendo de la tarifa y hábitos de consumo.",
      },
      { type: "h2", text: "¿Conviene instalar paneles solares en 2026?" },
      {
        type: "p",
        text: "Sí, aunque siempre es necesario analizar caso por caso. Normalmente es altamente recomendable si:",
      },
      {
        type: "ul",
        items: [
          "Estás en tarifa DAC",
          "Tu recibo supera los $1,500 pesos",
          "Planeas quedarte en tu propiedad varios años",
          "Quieres protegerte contra futuros aumentos de CFE",
        ],
      },
      {
        type: "p",
        text: "Además, los sistemas solares aumentan el valor de la propiedad, reducen tu huella de carbono y son deducibles de impuestos para personas físicas con actividad empresarial y personas morales.",
      },
      { type: "h2", text: "¿Cómo saber cuánto costaría tu sistema?" },
      {
        type: "p",
        text: "No existe un precio estándar sin analizar tu recibo. Para cotizar correctamente se necesita tu último recibo de CFE, la ubicación del inmueble y el tipo de techo. Cada proyecto debe diseñarse a la medida para asegurar una instalación segura, fiable y garantizada.",
      },
      {
        type: "quote",
        text: "Más que buscar el sistema más barato, lo importante es elegir una instalación segura, bien diseñada y con respaldo técnico.",
      },
    ]),
  },
  {
    slug: "cuantos-paneles-necesito-recibo-cfe",
    title: "¿Cuántos paneles solares necesito según mi recibo de CFE?",
    description:
      "La mayoría calcula mal cuántos paneles necesita. Aprende a leer tu recibo de CFE en kWh y estima tu sistema correctamente.",
    category: "Dimensionamiento",
    categoryColor: "blue",
    readMin: 5,
    date: "16 de febrero de 2026",
    dateISO: "2026-02-16",
    blocks: withIds([
      {
        type: "p",
        text: "Si estás pensando en instalar paneles solares en tu casa o negocio, seguramente te has hecho esta pregunta: ¿cuántos paneles solares necesito realmente para reducir mi recibo de CFE? La respuesta no es igual para todos. El número de paneles depende principalmente de tu consumo eléctrico en kWh, el tipo de tarifa que tienes contratada, la ubicación de tu inmueble y el espacio disponible en tu techo.",
      },
      { type: "h2", text: "Revisa tu consumo en kWh, no el monto en pesos" },
      {
        type: "p",
        text: "Para saber cuántos paneles solares necesitas, no debes fijarte en cuánto pagas, sino en cuánta energía consumes. Busca en tu recibo el apartado que dice 'Energía consumida' o 'Consumo del periodo', expresado en kWh. Ese número es la base del cálculo.",
      },
      {
        type: "callout",
        variant: "blue",
        text: "Si tu recibo es bimestral (lo más común en casas habitación), divide el consumo entre 2 para obtener un promedio mensual.",
      },
      { type: "h3", text: "Ejemplo práctico" },
      {
        type: "ul",
        items: [
          "Consumo bimestral: 600 kWh",
          "Consumo mensual aproximado: 300 kWh",
        ],
      },
      {
        type: "p",
        text: "Ese será el dato principal para estimar tu sistema fotovoltaico.",
      },
      { type: "h2", text: "¿Cuánta energía produce un panel solar en México?" },
      {
        type: "p",
        text: "En promedio, un panel solar de 620 W en México puede generar entre 75 y 95 kWh al mes, dependiendo de la ciudad, la radiación solar, la inclinación, la orientación y las pérdidas del sistema.",
      },
      {
        type: "p",
        text: "Sin embargo, en Nanasolar no trabajamos con un número fijo por panel. Utilizamos software especializado de diseño solar que calcula de forma detallada: pérdidas eléctricas en conductores e inversor, factor de temperatura, orientación e inclinación específicas del techo, sombreado real durante todo el año y ubicación exacta del proyecto.",
      },
      { type: "h2", text: "Fórmula sencilla para estimar cuántos paneles" },
      {
        type: "p",
        text: "Una fórmula básica para tener una idea preliminar es: consumo mensual (kWh) ÷ producción mensual estimada por panel (kWh). Siguiendo el ejemplo anterior: 300 kWh ÷ 85 kWh ≈ 3.5 paneles. En este caso se instalarían aproximadamente 4 paneles de 620 W. Este cálculo es sólo una referencia inicial.",
      },
      { type: "h2", text: "Tabla rápida de referencia" },
      {
        type: "table",
        headers: ["Consumo mensual", "Paneles de 620 W aprox."],
        rows: [
          ["150 kWh", "2 paneles"],
          ["300 kWh", "4 paneles"],
          ["450 kWh", "6 paneles"],
          ["600 kWh", "7 paneles"],
          ["900 kWh", "11 paneles"],
        ],
      },
      {
        type: "p",
        text: "Estos valores son aproximados y pueden variar según la ubicación y las condiciones del sitio. El dimensionamiento correcto siempre debe ser realizado por un profesional.",
      },
      { type: "h2", text: "Error común: calcular sólo con el monto en pesos" },
      {
        type: "p",
        text: "Muchas personas preguntan: 'Pago $2,500 pesos, ¿cuántos paneles necesito?'. El problema es que el monto depende de la tarifa y los subsidios aplicables. Dos personas pueden pagar lo mismo y consumir cantidades muy distintas de energía. Por eso, el cálculo siempre debe hacerse con base en la energía consumida (kWh), no en el importe.",
      },
      { type: "h2", text: "¿Siempre se instala exactamente ese número?" },
      {
        type: "p",
        text: "No necesariamente. Un diseño profesional considera tipo de tarifa, consumo histórico anual, espacio disponible en el techo, sombreado, crecimiento futuro (aires acondicionados, autos eléctricos, expansión del negocio) y regulación de interconexión con CFE. En algunos casos conviene instalar un poco más o un poco menos, dependiendo del objetivo: salir de tarifa DAC, reducir el recibo al mínimo posible u optimizar el retorno de inversión.",
      },
      {
        type: "quote",
        text: "No siempre el objetivo es llegar a $0 pesos, sino lograr el mejor equilibrio entre inversión y ahorro.",
      },
    ]),
  },
  {
    slug: "conviene-paneles-solares-2026-negocio",
    title: "¿Conviene poner paneles solares en 2026 para tu negocio?",
    description:
      "Pros, contras y retorno real de inversión en paneles solares para empresas en México en 2026 — con beneficios fiscales actualizados.",
    category: "Negocios",
    categoryColor: "pink",
    readMin: 7,
    date: "20 de febrero de 2026",
    dateISO: "2026-02-20",
    blocks: withIds([
      {
        type: "p",
        text: "En 2026, instalar paneles solares dejó de ser una tendencia y se consolidó como una decisión financiera estratégica para empresas en México. Con tarifas eléctricas presionando los márgenes, mayor exigencia ambiental por parte del mercado y opciones de financiamiento empresarial más accesibles, cada vez más negocios están evaluando seriamente migrar a energía solar.",
      },
      { type: "h2", text: "Panorama eléctrico en México en 2026" },
      {
        type: "p",
        text: "Para los negocios en México, el costo de la electricidad impacta directamente la rentabilidad. Las empresas en baja y media tensión enfrentan cargos por energía, demanda y otros componentes tarifarios que pueden elevar significativamente los costos operativos, especialmente cuando el consumo es alto o se concentra en horarios pico. En este contexto, los sistemas fotovoltaicos se posicionan como una herramienta estratégica para reducir costos, estabilizar el flujo de efectivo y mejorar la competitividad.",
      },
      { type: "h2", text: "Beneficios de instalar paneles solares en 2026" },
      { type: "h3", text: "1. Ahorro significativo en el recibo de luz" },
      {
        type: "p",
        text: "Un sistema correctamente dimensionado puede reducir entre 80% y 95% del consumo facturado, dependiendo del perfil energético del negocio.",
      },
      { type: "h3", text: "2. Retorno de inversión atractivo" },
      {
        type: "p",
        text: "En México, el retorno de inversión promedio en 2026 suele estar entre 2.5 y 4 años para empresas con tarifas elevadas o cargos importantes por demanda. Después de ese periodo, la energía generada se convierte en ahorro directo.",
      },
      { type: "h3", text: "3. Protección contra incrementos futuros" },
      {
        type: "p",
        text: "Instalar paneles solares funciona como una cobertura ante posibles aumentos en las tarifas eléctricas. En lugar de depender completamente de variaciones externas, tu empresa produce parte de su propia energía.",
      },
      { type: "h3", text: "4. Mejora en la imagen y estrategia ESG" },
      {
        type: "p",
        text: "Reducir la dependencia de generación eléctrica convencional disminuye la huella de carbono, fortalece la percepción de marca y aporta valor a la estrategia ESG frente a clientes, socios e inversionistas.",
      },
      { type: "h3", text: "5. Beneficio fiscal para empresas" },
      {
        type: "p",
        text: "En México, los sistemas fotovoltaicos pueden ser deducibles al 100% en el primer año como inversión en energías renovables, conforme a la legislación fiscal vigente (Ley del ISR, Art. 34, fracción XIII). Esto significa que, además del ahorro en el recibo eléctrico, la empresa puede obtener un beneficio fiscal inmediato al disminuir su base gravable, mejorar su flujo de efectivo y acelerar el retorno real de inversión.",
      },
      {
        type: "callout",
        variant: "pink",
        text: "La verdadera pregunta no es cuánto cuestan los paneles solares, sino cuánto le está costando a tu empresa no generar su propia energía.",
      },
      { type: "h2", text: "Puntos a considerar antes de invertir" },
      { type: "h3", text: "Inversión inicial" },
      {
        type: "p",
        text: "Aunque los precios han disminuido en la última década, sigue siendo una inversión relevante si se paga de contado. En Nanasolar ayudamos a nuestros clientes a acceder a esquemas de financiamiento empresarial para que el proyecto pueda pagarse prácticamente con el mismo ahorro generado, evitando la descapitalización.",
      },
      { type: "h3", text: "No todas las propiedades son aptas" },
      {
        type: "p",
        text: "Factores como sombras, orientación, espacio disponible y capacidad estructural del techo influyen directamente en la viabilidad del proyecto. Realizamos análisis técnicos y estructurales antes de proponer cualquier sistema. Si un proyecto no puede garantizarse de forma profesional y segura, somos completamente honestos y no vendemos soluciones mal hechas.",
      },
      { type: "h3", text: "Requiere análisis técnico y financiero profesional" },
      {
        type: "p",
        text: "Un mal dimensionamiento puede afectar el rendimiento y retrasar el retorno esperado. Dimensionamos cada sistema con base en el perfil de consumo real, la tarifa aplicable y proyecciones financieras claras. No vendemos 'más paneles'; diseñamos proyectos optimizados para maximizar retorno de inversión y estabilidad energética.",
      },
      { type: "h2", text: "¿Cuál es el retorno real en 2026?" },
      {
        type: "p",
        text: "El retorno real depende principalmente del consumo mensual promedio (kWh), la tarifa eléctrica aplicable y el costo total del sistema instalado. Por ejemplo, un negocio con recibos de $2,500 a $50,000 MXN mensuales puede recuperar su inversión en aproximadamente 2.5 a 4 años, dependiendo del perfil de consumo. Empresas con alto consumo diurno suelen obtener retornos más acelerados, ya que aprovechan mejor la generación solar.",
      },
      {
        type: "p",
        text: "Después del periodo de recuperación, el sistema continúa generando ahorro durante 20 a 30 años, convirtiéndose en una ventaja competitiva sostenida.",
      },
      { type: "h2", text: "Entonces… ¿conviene?" },
      {
        type: "p",
        text: "En la mayoría de los casos empresariales, sí conviene, especialmente si:",
      },
      {
        type: "ul",
        items: [
          "Tu empresa tiene un consumo eléctrico elevado",
          "Pagas cargos importantes por demanda",
          "Buscas reducir costos fijos y mejorar márgenes",
          "Quieres aprovechar el beneficio fiscal vigente",
          "Planeas operar en el mismo inmueble al menos 3 o 4 años",
        ],
      },
      {
        type: "p",
        text: "Sin embargo, cada caso debe evaluarse de forma personalizada. Un análisis técnico y financiero adecuado es la base para que la inversión cumpla realmente con las expectativas.",
      },
      {
        type: "quote",
        text: "Instalar paneles solares en 2026 no es solo una decisión ecológica; es una estrategia financiera inteligente cuando se ejecuta correctamente.",
      },
    ]),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 2): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
