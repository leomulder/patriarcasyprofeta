'use client';

import { Download, KeyRound, BookOpen, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: Download,
    title: "Descargas la App",
    description: "El primer paso hacia la revelación.",
  },
  {
    icon: KeyRound,
    title: "Acceso Inmediato",
    description: "Todo el contenido desbloqueado para ti.",
  },
  {
    icon: BookOpen,
    title: "Estudias a tu Ritmo",
    description: "Lee, escucha, anota y aprende.",
  },
  {
    icon: Users,
    title: "Te Unes a la Comunidad",
    description: "Comparte y crece con otros estudiantes.",
  },
  {
    icon: TrendingUp,
    title: "Creces Todos los Días",
    description: "Una transformación diaria y constante.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Es tan simple como esto:
          </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-12">
              {steps.map((step, index) => (
                <Card key={index} className="bg-card border-border/50 shadow-lg text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-primary/20 hover:scale-105 hover:-translate-y-2">
                    <div className="bg-primary/10 p-4 rounded-full border-4 border-primary/20">
                        <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mt-4 text-lg font-bold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-16 space-y-2">
                <p className="text-2xl font-bold text-foreground">Simples.</p>
                <p className="text-2xl font-bold text-foreground">Rápido.</p>
                <p className="text-2xl font-bold text-foreground">Profundo.</p>
                <p className="text-2xl font-bold text-primary">Transformador.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
