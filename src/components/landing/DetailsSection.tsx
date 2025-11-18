import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const characters = [
  { 
    name: "Adán y Eva", 
    description: "El origen, la caída, la revelación que marcó toda la humanidad.",
    imageUrl: "https://i.postimg.cc/FFZThdxS/1.png"
  },
  { 
    name: "Noé", 
    description: "Fe irracional. Obediencia radical.",
    imageUrl: "https://i.postimg.cc/fLsvNDtr/2.png"
  },
  { 
    name: "Abraham",  
    description: "El pacto. La promesa. La prueba.",
    imageUrl: "https://i.postimg.cc/vHKLmWxH/3.png"
  },
  { 
    name: "Jacob", 
    description: "Lucha, identidad y destino.",
    imageUrl: "https://i.postimg.cc/fyLmzLwB/4.png"
  },
  { 
    name: "José", 
    description: "Propósito en medio del dolor.",
    imageUrl: "https://i.postimg.cc/ZRYyHRvX/6.png"
  },
  { 
    name: "Moisés", 
    description: "Liberación, ley y liderazgo.",
    imageUrl: "https://i.postimg.cc/c4PwW0Pd/5.png"
  },
];

export default function DetailsSection() {
  return (
    <section id="details" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Descubre Cada Historia en Detalle</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {characters.map((character) => (
            <Card key={character.name} className="bg-background border-border/50 shadow-lg flex flex-col overflow-hidden">
              {character.imageUrl && (
                <div className="p-8">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={character.imageUrl}
                      alt={`Imagen de ${character.name}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
              <CardHeader className="pt-0">
                <CardTitle className="font-headline text-2xl text-foreground">{character.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-lg">“{character.description}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
