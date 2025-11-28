'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {

  return (
    <section className="relative flex items-center justify-center text-center py-20 px-4">
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
          Entiende la Biblia como si Dios te la estuviera explicando personalmente.
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-body text-primary">
          Patriarcas y Profetas — Revelados Verso por Verso.
        </p>
        
        <p className="mt-8 text-lg font-bold text-foreground max-w-3xl">
          Transformación espiritual real, sin confusión, sin interpretaciones humanas, sin adornos.
        </p>

        <a href="#pricing">
          <Button size="lg" className="mt-8 cta-button">
            QUIERO COMENZAR AHORA
          </Button>
        </a>
      </div>
    </section>
  );
}
