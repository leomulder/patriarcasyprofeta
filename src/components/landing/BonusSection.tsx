import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const bonuses = [
  {
    imageUrl: "https://i.postimg.cc/rFCG1KmS/1.png",
    title: "Bono #1: Guía de Estudio Profundo",
  },
  {
    imageUrl: "https://i.postimg.cc/brfbbhfC/2.png",
    title: "Bono #2: Mapa Mental de Patriarcas y Profetas",
  },
  {
    imageUrl: "https://i.postimg.cc/wjjND2ZW/3.png",
    title: "Bono #3: Audio-sesiones exclusivas",
  },
  {
    imageUrl: "https://i.postimg.cc/hjTQK5Q3/4.png",
    title: "Bono #4: Comunidad privada de discusión espiritual",
  },
];

export default function BonusSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Más de <span className="text-foreground">$197</span> en Bonos GRATIS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-card border-border/50 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <CardHeader className="p-0 flex justify-center items-center pt-6">
                <div className="relative aspect-square w-2/3">
                  <Image
                    src={bonus.imageUrl}
                    alt={bonus.title}
                    fill
                    className="object-contain rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center p-6">
                <CardTitle className="font-body text-lg font-bold text-foreground">{bonus.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-12 font-headline text-2xl font-bold text-foreground">
          HOY: GRATIS en el acceso completo.
        </p>
      </div>
    </section>
  );
}
