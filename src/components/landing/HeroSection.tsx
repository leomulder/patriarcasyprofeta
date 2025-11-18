import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function HeroSection() {
  const bullets = [
    "Estudio profundo",
    "Audio-libro completo",
    "Comunidad activa",
    "Anotaciones, marcadores y revelaciones impactantes",
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
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
          Patriarcas y Profetas
        </h1>
        <h2 className="font-headline text-3xl md:text-5xl text-primary mt-2">
          Revelado Verso por Verso — Como Nunca Antes
        </h2>
        
        <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-2xl">
          Transforma tu estudio bíblico en una experiencia profunda, sorprendente y espiritual. Accede al único aplicativo LATAM que te sumerge en las historias, secretos y revelaciones de los grandes patriarcas… de manera práctica, viva y guiada.
        </p>

        <p className="mt-4 text-md md:text-lg text-foreground/80">
          Descubre la sabiduría ancestral que cambió civilizaciones — ahora al alcance de tu mano.
        </p>

        <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-foreground/90">
              <Check className="h-6 w-6 text-primary mr-3" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Button size="lg" className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 rounded-xl shadow-lg shadow-primary/30 transition-transform transform hover:scale-105">
          QUIERO COMENZAR MI ESTUDIO AHORA
        </Button>
      </div>
    </section>
  );
}
