"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Check, Timer, ShieldCheck, Zap, TrendingUp, Flame, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const featuresBasico = [
  "Acceso a los estudios de los Patriarcas",
  "Contexto histórico y cultural",
  "Guía de Estudio Profundo (Bono #1)",
  "Soporte por correo electrónico"
];

const featuresCompleto = [
  "Acceso TOTAL a todos los estudios (Patriarcas y Profetas)",
  "TODOS los bonos exclusivos (valor $197)",
  "Acceso a la comunidad PRIVADA",
  "Audiolibro completo de todos los estudios",
  "Actualizaciones de contenido constantes y futuras"
];

const CountdownTimer = () => {
  const initialTime = 11 * 3600 + 37 * 60 + 37;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-destructive/90 text-destructive-foreground p-4 rounded-lg text-center max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Timer className="size-5" />
        <AlertTriangle className="size-5" />
        <p className="font-bold uppercase">¡El precio aumenta a medianoche!</p>
      </div>
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <div className="bg-destructive/50 p-3 rounded-lg min-w-[70px]">
          <div className="text-4xl font-bold font-headline">{String(hours).padStart(2, '0')}</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="bg-destructive/50 p-3 rounded-lg min-w-[70px]">
          <div className="text-4xl font-bold font-headline">{String(minutes).padStart(2, '00')}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="bg-destructive/50 p-3 rounded-lg min-w-[70px]">
          <div className="text-4xl font-bold font-headline">{String(seconds).padStart(2, '00')}</div>
          <div className="text-xs">SEG</div>
        </div>
      </div>
    </div>
  );
};

const DynamicPurchases = () => {
  const [purchases, setPurchases] = useState(22);

  useEffect(() => {
    const interval = setInterval(() => {
      setPurchases(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4500); // Update every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground p-3 rounded-full text-center max-w-md mx-auto font-semibold shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <TrendingUp className="size-5" />
        <Flame className="size-5" />
        <p>{purchases} personas compraron en las últimas 3 horas</p>
      </div>
    </div>
  );
};


export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-4">
            <DynamicPurchases />
            <CountdownTimer />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Básico Plan */}
            <Card className="bg-card border-border/50 shadow-lg flex flex-col h-full relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                PRECIO LANZAMIENTO
              </div>
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-3xl text-foreground">Básico</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">Para comenzar tu viaje.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center my-4">
                  <p className="text-muted-foreground line-through">De U$27,90</p>
                  <span className="text-5xl font-bold font-headline text-foreground">U$6,90</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                 <ul className="space-y-3 mt-8">
                  {featuresBasico.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="lg" className="w-full text-lg py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => setIsModalOpen(true)}>
                  QUIERO EL BÁSICO
                </Button>
              </CardFooter>
            </Card>

            {/* Completo Plan */}
            <Card className="bg-card border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                PRECIO LANZAMIENTO
              </div>
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-3xl text-primary">Completo</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">La experiencia completa y transformadora.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center my-4">
                  <p className="text-muted-foreground line-through">De U$57,90</p>
                  <span className="text-5xl font-bold font-headline text-foreground">U$11,90</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <ul className="space-y-3 mt-8">
                  {featuresCompleto.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90 font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button size="lg" className="w-full text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.location.href = 'https://pay.hotmart.com/K99537811Y?off=rtgmziqk&checkoutMode=10'}>
                  QUIERO EL COMPLETO
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 text-foreground/90">
              <ShieldCheck className="size-5 text-primary flex-shrink-0" />
              <span>Compra 100% segura con Hotmart</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground/90">
              <Zap className="size-5 text-primary flex-shrink-0" />
              <span>Acceso inmediato después del pago</span>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card border-primary text-foreground">
          <DialogHeader>
            <DialogTitle className="font-headline text-3xl text-primary text-center">¡Espera! Una Oferta Especial</DialogTitle>
            <DialogDescription className="text-center pt-2 text-muted-foreground">
              Por tiempo limitado, accede al Plan Completo por un precio increíble.
            </DialogDescription>
          </DialogHeader>
          <div className="my-6 text-center">
            <p className="text-muted-foreground line-through">Precio normal: U$11,90/mes</p>
            <p className="font-headline text-5xl font-bold text-foreground mt-2">U$9,00<span className="text-lg font-body text-muted-foreground">/mes</span></p>
            <p className="text-sm text-primary mt-1">Acceso Completo con Descuento</p>
          </div>
          <ul className="space-y-2 mb-6">
            {featuresCompleto.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.location.href = 'https://pay.hotmart.com/K99537811Y?off=5suiqzrp&checkoutMode=10'}>
              SÍ, QUIERO EL COMPLETO POR U$9,00
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => { setIsModalOpen(false); window.location.href = 'https://pay.hotmart.com/K99537811Y?off=8h2ivhga&checkoutMode=10'; }}>
              No, gracias. Quiero el Básico por U$6,90
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
