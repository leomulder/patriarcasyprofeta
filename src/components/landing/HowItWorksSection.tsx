import { Download, KeyRound, Search, Users, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "1️⃣",
    title: "Descargas la App",
  },
  {
    step: "2️⃣",
    title: "Acceso inmediato a TODO",
  },
  {
    step: "3️⃣",
    title: "Lees, escuchas, anotas, estudias",
  },
  {
    step: "4️⃣",
    title: "Te unes a la comunidad",
  },
  {
    step: "5️⃣",
    title: "Creces todos los días",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
              {steps.map((step) => (
                <div key={step.step} className="text-center">
                  <p className="text-4xl">{step.step}</p>
                  <p className="mt-2 font-semibold text-foreground">{step.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-2">
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
