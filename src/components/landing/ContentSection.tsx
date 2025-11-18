import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const patriarcas = [
  "Abraham",
  "Isaac",
  "Jacob",
];

const profetas = [
  "Isaías",
  "Jeremías",
  "Ezequiel",
  "Daniel",
];

const subItems = [
  "Explicaciones profundas",
  "Contexto histórico-cultural",
  "Aportes espirituales",
  "Aplicaciones prácticas",
  "Revelaciones que “encienden la mente”",
];

export default function ContentSection() {
  return (
    <section id="content" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Dentro del Contenido
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            Explora cada capítulo, cada personaje, cada revelación… como si
            estuvieras dentro de la historia.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-6 text-center">Patriarcas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patriarcas.map((item, index) => (
              <Card key={index} className="bg-background border-border/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground">
                    {item}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="font-headline text-3xl font-bold text-foreground mt-12 mb-6 text-center">Profetas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profetas.map((item, index) => (
              <Card key={index} className="bg-background border-border/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground">
                    {item}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
