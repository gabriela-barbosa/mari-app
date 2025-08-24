'use client';

import { Button } from './ui/button';
import Image from 'next/image';
import { SITE_CONFIG } from '../lib/constants';
import { redirectToWhatsapp } from '@/lib/utils';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-xl">
              ✨
            </span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-foreground">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xs text-muted-foreground">
              {SITE_CONFIG.tagline}
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#inicio"
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Contato
          </a>
        </nav>

        <Button
          className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
          onClick={() => redirectToWhatsapp()}
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={16}
            height={16}
            className="mr-2"
          />
          Agendar
        </Button>
      </div>
    </header>
  );
};
