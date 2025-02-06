export const plans = [
  {
    id: 1,
    title: "Basic",
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    description: "Características esenciales que necesitas para comenzar",
    features: [
      "Acceso a historias gratuitas",
      "Límite de lectura: 2",
      "Publicidad en la plataforma",
      "Lista de lectura personalizable",
    ],
    monthlyUrl: "/method-payment/basic-monthly",
    yearlyUrl: "/method-payment/basic-yearly",
    label: "Comprar Ya",
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 10000,
    yearlyPrice: 80000,
    description: "Perfect for owners of small & medium businesses",
    features: [
      "Acceso ilimitado a historias gratuitas",
      "1 historia premium gratis al mes",
      "Modo lectura sin publicidad",
      "Descarga de capítulos para lectura offline",
    ],
    popular: true,
    monthlyUrl: "/method-payment/pro-monthly",
    yearlyUrl: "/method-payment/pro-yearly",
    label: "Comprar Ya",
  },
  {
    id: 3,
    title: "Premium",
    monthlyPrice: 15000,
    yearlyPrice: 100000,
    description: "Dedicated support and infrastructure to fit your needs",
    features: [
      "Acceso ilimitado a todo el contenido (incluidas historias premium)",
      "Lectura anticipada de capítulos exclusivos",
      "Beneficios en eventos y sorteos",
      "Personalización avanzada del perfil",
      "Insignia de Lector VIP",
    ],
    exclusive: true,
    monthlyUrl: "/method-payment/premium-monthly",
    yearlyUrl: "/method-payment/premium-yearly",
    label: "Comprar Ya",
  },
];
