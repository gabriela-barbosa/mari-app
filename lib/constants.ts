export const SITE_CONFIG = {
  name: 'Mari Estética',
  description: 'Spa e Estética de Qualidade',
  tagline: 'Beleza e Bem-estar',
  contact: {
    phone: '+55 (21) 98372-8978',
    email: 'contato@mariestetica.com',
    address: 'São Paulo, SP',
    whatsapp: '5521983728978',
  },
  social: {
    instagram: '@mariestetica',
    facebook: 'MariEstetica',
  },
} as const;

export const SERVICES = {
  facial: 'Tratamentos Faciais',
  body: 'Tratamentos Corporais',
  massage: 'Massagens',
  spa: 'Spa Day',
  aesthetic: 'Procedimentos Estéticos',
} as const;

export const BUSINESS_HOURS = {
  monday: '09:00 - 18:00',
  tuesday: '09:00 - 18:00',
  wednesday: '09:00 - 18:00',
  thursday: '09:00 - 18:00',
  friday: '09:00 - 18:00',
  saturday: '09:00 - 16:00',
  sunday: 'Fechado',
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.contact.whatsapp}`;
