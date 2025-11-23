import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    title: 'No interpreta — revela.',
    description:
      'No adiciona opinión humana. No suaviza. No inventa significados. Solo expone lo que el texto realmente dice en su contexto original.',
  },
  {
    title: 'Sigue un orden verso a verso.',
    description:
      "Nada de saltos. Nada de 'esto aquí y aquello allá'. Cada línea se conecta con la siguiente, revelando una narrativa clara y sin confusión.",
  },
  {
    title: 'Historia, cultura y profecía explicadas con precisión.',
    description: '– tiempo histórico\n– costumbres\n– significado real de los términos\n– implicaciones espirituales\nTodo desmenuzado de forma rigurosa.',
  },
  {
    title: 'Elimina adornos y ‘espiritualizaciones’.',
    description:
      'Sin metáforas inventadas. Sin misticismo. Sin suposiciones. Solo lo que el texto realmente dice.',
  },
  {
    title: 'Miles ya comprobaron su impacto.',
    description:
      'Clareza. Profundidade. Conexión real con el texto. La sensación de: ‘Ahora sí entiendo’.',
  },
  {
    title: 'Funciona porque es simple.',
    description:
      'Sin complicación. Sin técnica oculta. Solo verdad explicada con honestidad.',
  },
];

export default function WhyItWorksSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Por Qué Este Método Funciona
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            Porque durante años, millones han leído la Biblia… pero sin
            comprender la estructura, el trasfondo y la intención real de cada
            verso.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card border-border/50 shadow-lg flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-start text-xl font-bold text-foreground">
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>{reason.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground whitespace-pre-line">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-headline font-bold text-foreground">
                "Por eso funciona. Porque es Biblia REAL — explicada como nunca antes."
            </p>
        </div>

      </div>
    </section>
  );
}
