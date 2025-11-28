"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Timer, ShieldCheck, Zap, TrendingUp, Flame, AlertTriangle } from 'lucide-react';

const featuresBasico = [
  "Patriarcas",
  "Guía de estudio",
];

const featuresCompleto = [
  "Patriarcas",
  "Profetas",
  "App",
  "Audiolibro",
  "Comunidad privada",
  "TODOS los bonos",
  "Actualizaciones futuras",
];

const UrgencyInfo = () => {
    const [purchases, setPurchases] = useState(30);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        const interval = setInterval(() => {
            setPurchases(prev => prev + Math.floor(Math.random() * 2) + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <div className="space-y-3 text-sm text-center font-semibold text-muted-foreground">
            <p>⏳ {purchases} personas compraron en las últimas 3 horas</p>
            <p>⏳ El precio sube a medianoche</p>
            <p>⏳ Los bonos pueden ser retirados sin aviso</p>
        </div>
    )
}

export default function PricingSection() {
  
  const redirectTo = (baseUrl: string) => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      const params = window.location.search;
      const separator = baseUrl.includes('?') ? '&' : '?';
      const urlParams = params.startsWith('?') ? params.substring(1) : params;
      const finalUrl = urlParams ? `${baseUrl}${separator}${urlParams}` : baseUrl;
      window.location.href = finalUrl;
    } catch (e) {
      window.location.href = baseUrl;
    }
  };

  return (
    <>
      <section id="pricing" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

            {/* Completo Plan */}
            <Card className="bg-card border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col h-full relative order-first lg:order-last">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-3xl text-primary">Completo</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">La experiencia total.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center my-4">
                  <p className="text-muted-foreground line-through">De U$57,90</p>
                  <span className="text-5xl font-bold font-headline text-foreground">U$11,90</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-left font-semibold text-foreground mt-8 mb-3">Incluye:</p>
                <ul className="space-y-3">
                  {featuresCompleto.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button size="lg" className="w-full cta-button" onClick={() => redirectTo('https://pay.hotmart.com/K99537811Y?off=rtgmziqk&checkoutMode=10')}>
                  QUIERO EL COMPLETO
                </Button>
              </CardFooter>
            </Card>
            
            {/* Básico Plan */}
            <Card className="bg-card border-border/50 shadow-lg flex flex-col h-full">
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-3xl text-foreground">Básico</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">Para comenzar.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center my-4">
                  <p className="text-muted-foreground line-through">De U$27,90</p>
                  <span className="text-5xl font-bold font-headline text-foreground">U$6,90</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                 <p className="text-left font-semibold text-foreground mt-8 mb-3">Incluye:</p>
                 <ul className="space-y-3">
                  {featuresBasico.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="lg" className="w-full text-lg py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => redirectTo('https://pay.hotmart.com/K99537811Y?off=8h2ivhga&checkoutMode=10')}>
                  QUIERO EL BÁSICO
                </Button>
              </CardFooter>
            </Card>

          </div>
          <div className="mt-12 max-w-md mx-auto space-y-4">
            <UrgencyInfo />
            <div className="flex items-center justify-center gap-3 text-muted-foreground pt-4">
              <ShieldCheck className="size-5 text-primary flex-shrink-0" />
              <span>Compra 100% segura con Hotmart</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
