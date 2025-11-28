'use client';

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const points = [
  "Vas a sentir que la Biblia se abre ante tus ojos.",
  "Vas a entender por qué Dios actuó así en cada historia.",
  "Vas a ver conexiones que nunca habías visto.",
  "Vas a descubrir detalles que transforman tu fe.",
  "Vas a dejar de depender de sermones que tergiversan el texto.",
  "Vas a tener claridad REAL — sin misticismo, sin adornos, sin teología complicada."
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            💡 Lo que este estudio hará dentro de ti
          </h2>
          <ul className="mt-8 space-y-4 text-left">
            {points.map((point, index) => (
              <li key={index} className="flex items-start text-lg sm:text-xl text-muted-foreground">
                <Check className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Card className="mt-12 bg-card border-border/50 shadow-2xl p-6 sm:p-8">
            <CardContent className="p-0">
              <p className="text-xl sm:text-2xl font-bold text-foreground">
                “Por fin entiendo lo que leo.”
              </p>
              <p className="mt-2 text-lg text-muted-foreground">
                Eso es lo que más escuchamos… porque es lo que verdaderamente pasa.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
