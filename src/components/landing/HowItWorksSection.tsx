'use client';

import { Download, KeyRound, BookOpen, Users, TrendingUp, Feather, Zap, BrainCircuit, Sparkles } from "lucide-react";

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

const outcomes = [
    { text: "Simple.", icon: Feather },
    { text: "Rápido.", icon: Zap },
    { text: "Profundo.", icon: BrainCircuit },
    { text: "Transformador.", icon: Sparkles, isPrimary: true },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
            Es tan simple como esto:
          </h2>
          <div className="relative mt-16">
            {/* The connecting line for desktop */}
            <div className="absolute top-8 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center z-10">
                  <div className="bg-card border-4 border-green-400/50 p-4 rounded-full mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome) => (
                 <div
                 key={outcome.text}
                 className={`rounded-xl border p-6 flex flex-col items-center justify-center gap-3 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                   outcome.isPrimary
                     ? 'bg-primary/10 border-green-400/50 shadow-primary/10'
                     : 'bg-card border-green-400/50'
                 }`}
               >
                 <outcome.icon className={`size-8 ${outcome.isPrimary ? 'text-primary' : 'text-foreground'}`} />
                 <p className={`text-xl font-bold ${outcome.isPrimary ? 'text-primary' : 'text-foreground'}`}>
                   {outcome.text}
                 </p>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
