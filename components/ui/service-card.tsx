'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface ServiceCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText?: string;
  onBookNow?: () => void;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  price,
  buttonText = 'Quero Agendar',
  onBookNow,
}: ServiceCardProps) => {
  const isIconImage = typeof icon === 'string' && icon.startsWith('/');

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 bg-background">
      <CardHeader className="space-y-4">
        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-all">
          {isIconImage ? (
            <Image
              src={icon}
              alt={title}
              className="w-12 h-12 rounded-2xl"
              width={48}
              height={48}
              quality={100}
            />
          ) : (
            <span className="text-2xl">{icon}</span>
          )}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-4">
          <span className="text-2xl font-bold text-accent">{price}</span>
          <Button
            variant="outline"
            size="sm"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            onClick={onBookNow}
          >
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
