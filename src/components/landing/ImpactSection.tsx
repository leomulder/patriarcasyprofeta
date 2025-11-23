import { Check } from "lucide-react";

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
        </div>
      </div>
    </section>
  );
}
