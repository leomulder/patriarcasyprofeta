import { Zap, BookOpen, RefreshCw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: <Zap className="size-8 text-primary" />, text: "Acceso inmediato" },
  { icon: <BookOpen className="size-8 text-primary" />, text: "Contenido completo" },
  { icon: <RefreshCw className="size-8 text-primary" />, text: "Actualizaciones constantes" },
  { icon: <Users className="size-8 text-primary" />, text: "Comunidad viva" },
];

export default function TransformSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Comienza Tu Transformación Espiritual Hoy
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            No pierdas la oportunidad de profundizar en los personajes que forjaron la historia espiritual del mundo — y dejar que esas historias transformen la tuya.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-card rounded-full p-4 border border-border/50">
                  {feature.icon}
                </div>
                <p className="mt-3 font-semibold text-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
          <a href="#pricing">
            <Button size="lg" className="mt-12 cta-button">
              QUIERO TRANSFORMAR MI ESTUDIO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
