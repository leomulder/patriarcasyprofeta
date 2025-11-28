'use client';

import { Download, KeyRound, BookOpen, Users, TrendingUp } from "lucide-react";

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
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Es tan simple como esto:
          </h2>
          <div className="relative mt-16">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center z-10">
                  <div className="bg-card border-4 border-border p-4 rounded-full">
                      <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mt-4 text-lg font-bold text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

            <div className="mt-20 space-y-2">
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