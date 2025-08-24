import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="w-fit border-accent text-accent"
            >
              💖 Sobre Mim
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Apaixonada por realçar sua beleza
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Oi, eu sou a Marinalva! 💕 Sou especialista em estética há mais
                de 15 anos e minha missão é fazer você se sentir ainda mais
                linda e confiante. Cada cliente é única, e por isso personalizo
                cada atendimento. ✨
              </p>
              <p>
                Formada em Estética, com especializações em design de
                sobrancelhas, depilação e extensão de cílios. Adoro o que faço e
                isso faz toda a diferença no resultado! ✨
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card rounded-2xl border border-border">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Clientes Felizes
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl border border-border">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Anos de Experiência
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-card shadow-2xl">
              <img
                src="/mari.jpg"
                alt="Profissional esteticista moderna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
