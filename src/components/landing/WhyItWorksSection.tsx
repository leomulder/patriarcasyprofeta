import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    title: 'Contexto + cultura + historia',
  },
  {
    title: 'Explicación línea por línea',
  },
  {
    title: 'Zero interpretación humana',
  },
  {
    title: 'Zero “espiritualización extra”',
  },
  {
    title: 'Metodología clara, simple y profunda',
  },
];

export default function WhyItWorksSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Porque millones leen la Biblia…
          </h2>
          <p className="mt-4 text-2xl sm:text-3xl text-foreground font-semibold">
            pero pocos la entienden.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-muted-foreground text-lg">
              <p>❌ Falta contexto</p>
              <p>❌ Falta estructura</p>
              <p>❌ Falta guía</p>
              <p>❌ Falta claridad</p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-center text-xl font-bold text-foreground">Este estudio soluciona eso con:</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-background border-border/50 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p className="font-semibold text-foreground">{reason.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-headline font-bold text-foreground">
                Te doy la Biblia en HD.
            </p>
            <p className="text-xl sm:text-2xl font-body text-muted-foreground">
                Sin ruidos. Sin filtros.
            </p>
        </div>

      </div>
    </section>
  );
}
