import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const characters = [
  { 
    name: "Adán y Eva", 
    description: "El origen, la caída, la revelación que marcó toda la humanidad.",
    imageUrl: "https://i.ibb.co/Ld5Ts0Wy/Gemini-Generated-Image-p3egrtp3egrtp3eg.png"
  },
  { name: "Noé", description: "Fe irracional. Obediencia radical." },
  { name: "Abraham", description: "El pacto. La promesa. La prueba." },
  { name: "Jacob", description: "Lucha, identidad y destino." },
  { name: "José", description: "Propósito en medio del dolor." },
  { name: "Moisés", description: "Liberación, ley y liderazgo." },
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
                <div className="relative h-48 w-full">
                  <Image
                    src={character.imageUrl}
                    alt={`Imagen de ${character.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <CardHeader>
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
