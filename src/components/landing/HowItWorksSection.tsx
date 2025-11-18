import { Download, KeyRound, Search, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: <Download className="size-10 text-primary" />,
    title: "Descarga la App",
    step: 1
  },
  {
    icon: <KeyRound className="size-10 text-primary" />,
    title: "Acceso Instantáneo a todo el estudio",
    step: 2
  },
  {
    icon: <Search className="size-10 text-primary" />,
    title: "Explora los Patriarcas y Profetas con profundidad",
    step: 3
  },
  {
    icon: <Users className="size-10 text-primary" />,
    title: "Anota, estudia, escucha, participa de la comunidad",
    step: 4
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">¿Cómo Funciona?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
          {/* Dashed line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-12">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>
          
          {steps.map((step, index) => (
            <Card key={index} className="bg-background border-border/50 text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-2 relative pt-6">
              <CardHeader>
                <div className="relative mx-auto bg-card rounded-full p-5 w-fit border-2 border-border">
                  {step.icon}
                   <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl font-headline">
                    {step.step}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-body text-lg font-bold text-foreground">{step.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
