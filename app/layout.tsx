import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Manrope } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Mari Estética - Design de Sobrancelhas, Massagens e Cílios',
  description:
    'Serviços especializados em design de sobrancelhas, massagens modeladoras, drenagem linfática, extensão de cílios e tratamentos estéticos.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${manrope.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
