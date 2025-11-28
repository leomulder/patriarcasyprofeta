import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const patriarcas = [
  {
    name: "Abraham",
    description: "Fe. Sacrificio. Promesa. Descubre por qué él es la base de la historia espiritual del mundo.",
    imageId: "abraham-image"
  },
  {
    name: "Isaac",
    description: "La herencia espiritual que define destino.",
    imageId: "isaac-image"
  },
  {
    name: "Jacob",
    description: "Identidad, lucha, transformación… y el momento exacto donde Dios cambia su nombre y cambia TODO.",
    imageId: "jacob-image"
  },
];

const profetas = [
  {
    name: "Isaías",
    description: "El profeta mesiánico. La visión más completa del plan de redención.",
    imageId: "isaias-image"
  },
  {
    name: "Jeremías",
    description: "El corazón de Dios expuesto — raw, real y sin maquillaje.",
    imageId: "jeremias-image"
  },
  {
    name: "Ezequiel",
    description: "La gloria de Dios en imágenes que pocos se atreven a explicar… aquí tú las entenderás.",
    imageId: "ezequiel-image"
  },
  {
    name: "Daniel",
    description: "Fidelidad. Profecías. Revelaciones del tiempo del fin. Lo que siempre quisiste entender — explicado con precisión cirúrgica.",
    imageId: "daniel-image"
  },
]

export default function ContentSection() {
  return (
    <section id="content" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="mt-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
              ☀️ Patriarcas
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
              Vas a caminar con ellos. Vas a sentir lo que sintieron. Vas a ver lo que Dios estaba haciendo en su época — y lo que significa para tu vida hoy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {patriarcas.map((character) => {
              const image = PlaceHolderImages.find(p => p.id === character.imageId);
              return (
                <Card key={character.name} className="bg-card border-border/50 shadow-lg flex flex-col overflow-hidden text-center">
                  {image && (
                    <div className="p-6 flex justify-center">
                      <div className="relative aspect-square w-32">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <CardHeader className={image ? "pt-0" : ""}>
                    <CardTitle className="font-headline text-2xl text-foreground">{character.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-lg">“{character.description}”</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
              🌙 Profetas
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
              Aquí las Escrituras se vuelven vivas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {profetas.map((character) => {
              const image = PlaceHolderImages.find(p => p.id === character.imageId);
              return (
                <Card key={character.name} className="bg-card border-border/50 shadow-lg flex flex-col overflow-hidden text-center">
                  {image && (
                    <div className="p-6 flex justify-center">
                      <div className="relative aspect-square w-32">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <CardHeader className={image ? "pt-0" : ""}>
                    <CardTitle className="font-headline text-2xl text-foreground">{character.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-lg">“{character.description}”</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
