import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const bonuses = [
  {
    imageUrl: "https://i.postimg.cc/rFCG1KmS/1.png",
    title: "Bono #1: Guía de Estudio Profundo",
    value: "U$39",
    description: "Estudio bíblico nivel teólogo… pero explicada para cualquier persona."
  },
  {
    imageUrl: "https://i.postimg.cc/brfbbhfC/2.png",
    title: "Bono #2: Mapa Mental de Patriarcas y Profetas",
    value: "U$27",
    description: "Todas las conexiones, líneas proféticas y estructuras, en una sola imagen."
  },
  {
    imageUrl: "https://i.postimg.cc/wjjND2ZW/3.png",
    title: "Bono #3: Audio-sesiones Exclusivas",
    value: "U$47",
    description: "Revelaciones avanzadas que no están en el contenido escrito."
  },
  {
    imageUrl: "https://i.postimg.cc/hjTQK5Q3/4.png",
    title: "Bono #4: Comunidad Privada",
    value: "U$84",
    description: "Acompañamiento, respuestas, apoyo, debates y crecimiento real."
  },
];

export default function BonusSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            🎁 Recibe <span className="text-foreground">$197</span> en Bonos GRATIS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-background border-border/50 shadow-lg flex items-center p-6 gap-6">
              <div className="flex-shrink-0">
                 <div className="relative aspect-square w-24">
                  <Image
                    src={bonus.imageUrl}
                    alt={bonus.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <CardTitle className="font-headline text-xl font-bold text-foreground">{bonus.title}</CardTitle>
                <p className="text-muted-foreground mt-1">{bonus.description}</p>
                <p className="mt-2 font-bold text-primary">Valor real: {bonus.value}</p>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-center mt-12 font-headline text-2xl font-bold text-foreground">
          HOY → 100% GRATIS.
        </p>
      </div>
    </section>
  );
}
