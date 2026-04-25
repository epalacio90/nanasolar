export const site = {
  name: "Nanasolar",
  legalName: "Nana Solar",
  url: "https://nanasolar.mx",
  locale: "es_MX",
  tagline: "Energía solar a tu medida",
  description:
    "Instalamos paneles solares para residencias, comercios e industrias en México. Reducimos tu factura de CFE hasta en 95%, sin inversión inicial y con financiamiento. Análisis gratis de tu recibo.",
  shortDescription:
    "Paneles solares a tu medida: reducimos tu factura de CFE hasta 95% sin inversión inicial.",
  whatsapp: "525659423407",
  whatsappDisplay: "+52 56 5942 3407",
  email: "hola@nanasolar.com",
  country: "México",
  keywords: [
    "paneles solares México",
    "energía solar México",
    "paneles solares CFE",
    "instalación de paneles solares",
    "ahorro de energía",
    "tarifa DAC",
    "paneles solares residenciales",
    "paneles solares para empresas",
    "sistema fotovoltaico",
    "energía solar CDMX",
    "financiamiento paneles solares",
    "Nanasolar",
    "Nana Solar",
  ],
  social: {
    instagram: "https://instagram.com/nanasolar_mx",
    facebook: "https://facebook.com/nanasolar",
    linkedin: "https://linkedin.com/company/nanasolar",
  },
} as const;

export function whatsappLink(message = "Hola Nanasolar, me gustaría un análisis de mi recibo de CFE.") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
}
