'use client';

import { useState, useEffect } from 'react';
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from '@/components/ui/progress';

const points = [
  "Entiende a Daniel, José, Elías y Moisés… sin filtros ni confusión.",
  "Deja de depender de sermones que tergiversan la Escritura.",
  "Accede a interpretaciones limpias, directas y punto-a-punto.",
  "Descubre por qué Daniel no fue atacado por los leones — la parte que nadie cuenta.",
  "1.952 versículos explicados en orden, con claridad total y sin opiniones humanas.",
];

export default function ImpactSection() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 90) {
        setProgress(progress + 1);
      }
    }, 1000 * 60 * 5); // Aumenta 1% a cada 5 minutos
    return () => clearTimeout(timer);
  }, [progress]);


  return (
    <section id="impact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Lo Que Hará Este Estudio Por Ti
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            Descubre por qué miles están entendiendo la Biblia como nunca antes.
          </p>
          <ul className="mt-8 space-y-4 text-left">
            {points.map((point, index) => (
              <li key={index} className="flex items-start text-lg sm:text-xl">
                <Check className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Card className="mt-12 bg-card border-border/50 shadow-2xl p-6 sm:p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
            <CardContent className="p-0">
              <p className="text-xl sm:text-2xl font-bold text-foreground">
                Más de <span className="text-primary">12.400 estudiantes</span> ya abrieron los ojos.
                <br />
                Otros siguen leyendo la Biblia sin entenderla.
              </p>
              <p className="mt-4 font-headline text-2xl sm:text-3xl text-foreground">
                ¿De qué lado quieres estar?
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <div className="my-4 space-y-1 font-semibold text-muted-foreground">
              <p>Porque no suaviza.</p>
              <p>No adorna.</p>
              <p>No maquilla la verdad.</p>
            </div>
            <p className="font-bold text-lg text-foreground">Accede ahora por tiempo limitado.</p>
             <div className="max-w-sm mx-auto mt-4 space-y-2">
              <Progress value={progress} className="h-2 bg-destructive/20" indicatorClassName="bg-destructive" />
              <div className="flex justify-between text-xs font-mono text-muted-foreground">
                <span>0%</span>
                <span>OFERTA TERMINA</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
             <Link href="/#pricing">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 rounded-xl shadow-lg shadow-primary/30 transition-transform transform hover:scale-105">
                QUIERO COMENZAR MI ESTUDIO AHORA
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
