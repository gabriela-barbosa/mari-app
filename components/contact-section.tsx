'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { redirectToWhatsapp } from '@/lib/utils';

export const ContactSection = () => {
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const whatsappMessage = `Olá, gostaria de agendar um horário para ${service}! Meu nome é ${name} e minha mensagem é: ${message}`;
    redirectToWhatsapp(whatsappMessage);
  };

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="outline"
            className="w-fit mx-auto border-accent text-accent"
          >
            📱 Vamos Conversar
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Pronta para se Transformar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para cuidar da sua beleza com todo carinho! Entre em
            contato e vamos agendar seu momento especial 💫
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.contact.phone}
                  </p>
                </div>
              </div>

              <div className="hidden flex items-start space-x-4 p-4 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Localização
                  </h3>
                  <p className="text-muted-foreground">
                    Rua das Flores, 123
                    <br />
                    Centro, São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-background rounded-2xl border border-border">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Horários</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 16h
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-bold text-foreground">
                Me Siga nas Redes! 📱
              </h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={() => redirectToWhatsapp()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-accent group-hover:text-accent-foreground transition-colors"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border bg-background shadow-xl">
            <CardHeader>
              <CardTitle className="font-bold">
                Mande uma Mensagem! 💌
              </CardTitle>
              <CardDescription>
                Preencha aqui e eu retorno rapidinho para você ✨
              </CardDescription>
            </CardHeader>
            <form action={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    name="name"
                    placeholder="Seu nome lindo"
                    className="border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Serviço de Interesse
                  </label>
                  <Input
                    name="service"
                    placeholder="Ex: Design de sobrancelhas"
                    className="border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Me conta o que você tem em mente! 💕"
                    className="min-h-[100px] border-border focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Enviar Mensagem 💌
                </Button>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
