'use client';

import { redirectToWhatsapp } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Clock } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit bg-primary/20 text-primary border-primary/30"
              >
                ✨ Especialista em Beleza Feminina
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Desperte sua
                <span className="text-accent"> beleza única</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transforme seu visual com nossos serviços especializados: design
                de sobrancelhas, massagens relaxantes, extensão de cílios e
                muito mais. Porque você merece se sentir incrível! 💫
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
                onClick={() => redirectToWhatsapp()}
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Quero Agendar!
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Ver Serviços
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground font-medium">
                  4.9/5 (200+ clientes felizes)
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-card shadow-2xl">
              <Image
                src="/elegant-spa-room.png"
                alt="Ambiente moderno do estúdio de estética"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">+5 anos</p>
                  <p className="text-sm text-muted-foreground">
                    cuidando da sua beleza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
