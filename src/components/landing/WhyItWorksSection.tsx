'use client';

import { Check, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  { text: "Falta contexto" },
  { text: "Falta estructura" },
  { text: "Falta guía" },
  { text: "Falta claridad" },
];

const solutions = [
  'Contexto + cultura + historia',
  'Explicación línea por línea',
  'Zero interpretación humana',
  'Zero “espiritualización extra”',
  'Metodología clara, simple y profunda',
];

export default function WhyItWorksSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Porque millones leen la Biblia…
          </h2>
          <p className="mt-4 text-2xl sm:text-3xl text-foreground font-semibold">
            pero pocos la entienden.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-background/50 rounded-xl p-6 border border-destructive/30">
            <div className="flex items-center gap-3">
              <XCircle className="size-8 text-destructive" />
              <h3 className="font-headline text-2xl font-bold text-foreground">El Problema</h3>
            </div>
            <p className="text-muted-foreground mt-2">La mayoría de los estudios te dejan con más dudas que respuestas porque les falta:</p>
            <div className="mt-6 space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3 bg-destructive/10 p-3 rounded-lg">
                  <XCircle className="size-5 text-destructive/80 flex-shrink-0" />
                  <p className="font-semibold text-foreground/90">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-background/50 rounded-xl p-6 border border-primary/30">
            <div className="flex items-center gap-3">
              <Check className="size-8 text-primary" />
              <h3 className="font-headline text-2xl font-bold text-foreground">La Solución</h3>
            </div>
             <p className="text-muted-foreground mt-2">Este estudio soluciona eso con:</p>
            <div className="mt-6 space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center gap-3 bg-primary/10 p-3 rounded-lg">
                  <Check className="size-5 text-primary flex-shrink-0" />
                  <p className="font-semibold text-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-headline font-bold text-foreground">
                Te doy la Biblia en HD.
            </p>
            <p className="text-xl sm:text-2xl font-body text-muted-foreground mt-2">
                Sin ruidos. Sin filtros.
            </p>
        </div>

      </div>
    </section>
  );
}
