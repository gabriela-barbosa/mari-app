'use client';

import { Badge } from '@/components/ui/badge';
import { ServiceCard } from '@/components/ui/service-card';
import { redirectToWhatsapp } from '@/lib/utils';

const services = [
  {
    icon: '/eyebrow-design-icon.png',
    title: 'Design de Sobrancelhas',
    description:
      'Sobrancelhas perfeitas que harmonizam com seu rosto e destacam seu olhar único ✨',
    features: [
      'Análise facial personalizada',
      'Técnicas de micropigmentação',
      'Manutenção e cuidados especiais',
    ],
    price: 'R$ 80',
    whatsappMessage:
      'Olá, gostaria de agendar um horário para design de sobrancelhas!',
  },
  {
    icon: '💆‍♀️',
    title: 'Massagens Relaxantes',
    description:
      'Momentos de puro relaxamento com massagens modeladoras, drenagem e muito mais 🌸',
    features: [
      'Massagem modeladora',
      'Drenagem linfática',
      'Massagem relaxante anti-stress',
    ],
    price: 'R$ 120',
    whatsappMessage:
      'Olá, gostaria de agendar um horário para massagens relaxantes!',
  },
  {
    icon: '/eyelash-extension-icon.png',
    title: 'Extensão de Cílios',
    description:
      'Cílios volumosos e naturais para um olhar marcante e irresistível 💫',
    features: [
      'Técnica fio a fio natural',
      'Volume russo glamouroso',
      'Manutenção inclusa no pacote',
    ],
    price: 'R$ 150',
    whatsappMessage:
      'Olá, gostaria de agendar um horário para extensão de cílios!',
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="outline"
            className="w-fit mx-auto border-accent text-accent"
          >
            💅 Nossos Serviços
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Tratamentos que Transformam
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossos serviços exclusivos pensados especialmente para
            realçar sua beleza natural com técnicas modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
              onBookNow={() => redirectToWhatsapp(service.whatsappMessage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
