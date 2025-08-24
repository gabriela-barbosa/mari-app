import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">
                ✨
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">
              {SITE_CONFIG.name}
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2025 {SITE_CONFIG.name}. Feito com 💕 para você!
          </p>
          <p className="text-sm text-muted-foreground">
            Transformando sua beleza com carinho e profissionalismo ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
