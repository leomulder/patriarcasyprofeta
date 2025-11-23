import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const patriarcas = [
  {
    name: "Abraham",
    description: "El pacto. La promesa. La prueba.",
    imageUrl: "https://i.postimg.cc/L50cN22y/Profetasypatriarcas.png"
  },
  {
    name: "Isaac",
    description: "El hijo de la promesa, heredero de la fe.",
    imageUrl: "https://i.postimg.cc/RCQxjxVy/1.png"
  },
  {
    name: "Jacob",
    description: "Lucha, identidad y destino.",
    imageUrl: "https://i.postimg.cc/yNc7xgs9/Profetasypatriarcas.png"
  },
];

const profetas = [
  {
    name: "Isaías",
    description: "El profeta mesiánico y la visión de la redención.",
    imageUrl: "https://i.postimg.cc/cC67MNDK/2.png"
  },
  {
    name: "Jeremías",
    description: "El profeta llorón y el nuevo pacto.",
    imageUrl: "https://i.postimg.cc/SNF7YH6Q/3.png"
  },
  {
    name: "Ezequiel",
    description: "La visión de la gloria de Dios y la restauración de Israel.",
    imageUrl: "https://i.postimg.cc/qv7tNG5Q/4.png"
  },
  {
    name: "Daniel",
    description: "Fidelidad en el exilio y las profecías del tiempo del fin.",
    imageUrl: "https://i.postimg.cc/cCZC073N/5.png"
  },
]

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

        <div className="mt-12">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-6 text-center">Patriarcas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patriarcas.map((character) => (
              <Card key={character.name} className="bg-background border-border/50 shadow-lg flex flex-col overflow-hidden text-center">
                {character.imageUrl && (
                  <div className="p-6 flex justify-center">
                    <div className="relative aspect-square w-32">
                      <Image
                        src={character.imageUrl}
                        alt={`Imagen de ${character.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <CardHeader className={character.imageUrl ? "pt-0" : ""}>
                  <CardTitle className="font-headline text-2xl text-foreground">{character.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-lg">“{character.description}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-6 text-center">Profetas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profetas.map((character) => (
              <Card key={character.name} className="bg-background border-border/50 shadow-lg flex flex-col overflow-hidden text-center">
                {character.imageUrl && (
                  <div className="p-6 flex justify-center">
                    <div className="relative aspect-square w-32">
                      <Image
                        src={character.imageUrl}
                        alt={`Imagen de ${character.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <CardHeader className={character.imageUrl ? "pt-0" : ""}>
                  <CardTitle className="font-headline text-2xl text-foreground">{character.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-lg">“{character.description}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}