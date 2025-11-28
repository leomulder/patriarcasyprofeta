'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {

  return (
    <section className="relative flex items-center justify-center text-center text-white py-20 px-4">
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground leading-tight">
          ¿Lees la Biblia… pero sientes que te falta la <span className="text-primary">revelación</span> que realmente <span className="text-primary">cambia tu vida</span>?
        </h1>
        <h2 className="font-body text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl">
          No es tu culpa. No faltan ganas. No falta fe.
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Lo que falta es una guía clara, profunda y <span className="font-bold text-foreground">HONESTA</span> — que te muestre lo que está detrás del texto, lo que el autor quiso decir, lo que estaba pasando en ese momento… y lo que Dios quiere decirte <span className="text-primary font-bold">HOY</span>.
        </p>

        <p className="mt-6 text-lg md:text-xl font-bold text-foreground max-w-3xl">
          Este estudio hace exactamente eso. Te revela lo que siempre estuvo ahí — pero nadie te había explicado.
        </p>
        
        <p className="mt-8 text-2xl md:text-3xl font-bold font-headline text-foreground">
          Entiende la Biblia como si Dios te la estuviera explicando personalmente.
        </p>
        <p className="mt-2 text-xl md:text-2xl font-body text-primary">
          Patriarcas y Profetas — Revelados Verso por Verso.
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
