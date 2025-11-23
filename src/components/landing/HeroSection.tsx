'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function HeroSection() {
  const bullets = [
    "Explicación verso por verso",
    "Contexto histórico-cultural",
    "Audiolibro completo",
    "Comunidad activa",
    "Revelaciones profundas que fortalecen tu fe"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white py-20 px-4">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground leading-tight">
          ¿Lees la Biblia… pero sientes que te falta la <span className="text-primary">revelación</span> que realmente <span className="text-primary">transforma</span>?
        </h1>
        <h2 className="font-body text-xl md:text-2xl text-foreground/90 mt-4 max-w-3xl">
          <span className="font-bold">Patriarcas y Profetas</span> — Revelado Verso por Verso, con <span className="font-bold text-amber-300">claridad brutal</span> y <span className="font-bold text-amber-300">profundidad real.</span>
        </h2>
        
        <p className="mt-8 text-lg md:text-xl text-foreground/90 max-w-2xl">
          La Biblia no debería sentirse confusa. Si estás cansado de leer sin entender, perder detalles, o sentir que <span className="font-semibold">“te estás perdiendo algo importante”</span>… este es el estudio que cambia todo.
        </p>

        <p className="mt-4 text-lg md:text-xl font-bold text-foreground/90">
          Aquí no hay teoría vacía. <span className="underline decoration-primary">Aquí comprendes lo que otros solo leen.</span>
        </p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-left max-w-lg mx-auto">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-foreground/90">
              <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        
        <p className="mt-8 text-lg md:text-xl font-semibold text-foreground/90">
          Entender la Biblia nunca había sido tan claro.
        </p>

        <Link href="/#pricing">
          <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 rounded-xl shadow-lg shadow-primary/30 transition-transform transform hover:scale-105">
            QUIERO COMENZAR MI ESTUDIO AHORA
          </Button>
        </Link>
      </div>
    </section>
  );
}
