import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { WHATSAPP_LINK } from './constants';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const getWhatsappLink = (
  text: string = 'Olá, gostaria de agendar um horário!'
) => `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;

export const redirectToWhatsapp = (text?: string) => {
  window.open(getWhatsappLink(text), '_blank');
};
