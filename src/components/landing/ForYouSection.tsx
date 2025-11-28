'use client';

import {
  BookOpenCheck,
  Smartphone,
  Headphones,
  Users,
  ScrollText,
  Lightbulb,
  TrendingUp,
  Check,
  X,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const features = [
  {
    icon: BookOpenCheck,
    title: 'Verso por verso real',
    others: 'Superficial',
    yours: 'Completo',
  },
  {
    icon: Smartphone,
    title: 'App moderna',
    others: 'Inexistente',
    yours: 'Dedicada',
  },
  {
    icon: Headphones,
    title: 'Audiolibro completo',
    others: 'No disponible',
    yours: 'Integrado',
  },
  {
    icon: Users,
    title: 'Comunidad',
    others: 'Inactiva',
    yours: 'Activa y de apoyo',
  },
  {
    icon: ScrollText,
    title: 'Profetas y Patriarcas',
    others: 'Incompleto',
    yours: 'Estudio Amplio',
  },
  {
    icon: Lightbulb,
    title: 'Explicación clara',
    others: 'Técnica/Confusa',
    yours: 'Profundo y Simple',
  },
  {
    icon: TrendingUp,
    title: 'Actualizaciones',
    others: 'Nunca',
    yours: 'Constantes',
  },
];

export default function ForYouSection() {
  return (
    <section id="for-you" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
              Lo que NADIE te ofrece en LATAM…
            </h2>
            <p className="text-center text-lg sm:text-xl text-muted-foreground mt-4">
              pero tú tendrás desde el primer minuto:
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div className="hidden md:grid grid-cols-3 gap-4 text-center font-bold text-lg px-6">
                <h3 className="text-foreground">Característica</h3>
                <h3 className="text-muted-foreground">Otros Estudios</h3>
                <h3 className="text-primary">Este Estudio</h3>
            </div>
            {features.map((feature, index) => (
              <Card
                key={index}
                className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 p-4 bg-background border-border/50 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:scale-[1.02]"
                style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
              >
                {/* Feature Title (visible on all screens) */}
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-3">
                        <feature.icon className="size-6 text-primary flex-shrink-0" />
                        <h4 className="font-semibold text-foreground text-base sm:text-lg">
                        {feature.title}
                        </h4>
                    </div>
                </div>

                {/* Others (visible on all screens) */}
                <div className="text-center pr-4 md:pr-0">
                    <div className="md:hidden text-xs font-bold text-muted-foreground mb-2">Otros Estudios</div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <X className="size-5 text-destructive" />
                        <span className="hidden sm:inline">{feature.others}</span>
                    </div>
                </div>
                
                {/* Yours (visible on all screens) */}
                <div className="text-center">
                    <div className="md:hidden text-xs font-bold text-primary mb-2">Este Estudio</div>
                    <div className="flex items-center justify-center gap-2 font-bold text-primary">
                        <Check className="size-5" />
                        <span>{feature.yours}</span>
                    </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-muted-foreground">No es un PDF. No es un curso.</p>
            <p className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
              Es una EXPERIENCIA de estudio bíblico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
