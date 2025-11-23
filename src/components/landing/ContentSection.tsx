import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const patriarcas = [
  {
    name: "Abraham",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "Cómo se forma la fe en medio de pruebas imposibles",
      "Entender el pacto, la promesa y el sacrificio",
      "Revelaciones sobre liderazgo espiritual y obediencia radical",
    ],
  },
  {
    name: "Isaac",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "El significado real de “hijo de la promesa”",
      "Cómo Dios trabaja en silencios y transiciones",
      "Revelaciones sobre identidad, herencia y propósito",
    ],
  },
  {
    name: "Jacob",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "El misterio detrás de su lucha con el Ángel",
      "Transformación de carácter: de engañador a príncipe",
      "Revelaciones sobre propósito, restauração y destino",
    ],
  },
];

const profetas = [
  {
    name: "Isaías",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "Profecías mesiánicas explicadas con claridad",
      "Entender el lenguaje poético y simbólico",
      "Revelaciones sobre redención, juicio y esperança",
    ],
  },
  {
    name: "Jeremías",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "Por qué es llamado “el profeta llorón”",
      "Cómo Deus habla en tiempos de crisis nacional",
      "Revelaciones sobre el nuevo pacto",
    ],
  },
  {
    name: "Ezequiel",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "Las visiones simbólicas y su significado real",
      "El valle de huesos secos explicado sin misticismo",
      "Revelaciones sobre gloria, restauración y futuro",
    ],
  },
  {
    name: "Daniel",
    items: [
      "Explicación verso a verso",
      "Contexto histórico-cultural",
      "Por qué no fue atacado por los leones (explicación real)",
      "Profecías del tiempo del fin sin confusión",
      "Revelaciones sobre fidelidad en exilio y propósito eterno",
    ],
  },
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
            {patriarcas.map((patriarca, index) => (
              <Card key={index} className="bg-background border-border/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground">
                    {patriarca.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {patriarca.items.map((item, subIndex) => (
                      <li key={subIndex} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="font-headline text-3xl font-bold text-foreground mt-12 mb-6 text-center">Profetas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profetas.map((profeta, index) => (
              <Card key={index} className="bg-background border-border/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground">
                    {profeta.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {profeta.items.map((item, subIndex) => (
                      <li key={subIndex} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
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
