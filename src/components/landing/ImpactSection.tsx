import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const points = [
  "Entiende a Daniel, José, Elías y Moisés… sin filtros ni confusión.",
  "Deja de depender de sermones que tergiversan la Escritura.",
  "Accede a interpretaciones limpias, directas y punto-a-punto.",
  "Descubre por qué Daniel no fue atacado por los leones — la parte que nadie cuenta.",
  "1.952 versículos explicados en orden, con claridad total y sin opiniones humanas.",
];

export default function ImpactSection() {
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

        </div>
      </div>
    </section>
  );
}
