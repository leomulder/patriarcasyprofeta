'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {

  return (
    <section className="relative flex items-center justify-center text-center py-20 md:py-28 px-4">
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <h1 className="text-4xl md:text-6xl font-black font-headline text-foreground leading-tight">
          Patriarcas y Profetas — Explicados Verso por Verso
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-body text-primary font-bold">
          Transforma tu estudio de la Biblia en una experiencia clara, profunda y reveladora, con un recorrido detallado desde Abraham hasta Malaquías, que te mostrará cómo cada historia, cada profecía y cada personaje puede transformar tu fe hoy.
        </p>
        
        <p className="mt-8 text-lg md:text-xl font-semibold text-foreground max-w-3xl">
          Explora, versículo por verso, más de 2.300 pasajes bíblicos explicados con una claridad que nunca antes habías experimentado. Comprende el sentido real de los Patriarcas, la voz de los Profetas y las verdades eternas que Dios reveló a su pueblo.
        </p>

        <a href="#pricing">
          <Button size="lg" className="mt-10 cta-button">
            QUIERO COMENZAR AHORA
          </Button>
        </a>
      </div>
    </section>
  );
}
