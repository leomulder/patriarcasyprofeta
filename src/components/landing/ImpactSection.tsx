'use client';

import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Lo que este estudio hará dentro de ti
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <Card key={index} className="bg-card border-border/30 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start text-left gap-4">
                    <CheckCircle className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{point}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-card border-border/50 shadow-2xl p-6 sm:p-8">
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
