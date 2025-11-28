
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Book, BookOpen, Smartphone, Headphones, Users, Star, ChevronsRight, ShieldCheck, Clock, Users2, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const featuresCompleto = [
  { icon: BookOpen, text: 'Estudio de Patriarcas' },
  { icon: ChevronsRight, text: 'Estudio de Profetas' },
  { icon: Smartphone, text: 'Acceso vía App' },
  { icon: Headphones, text: 'Audio-sesiones' },
  { icon: Users, text: 'Comunidad Privada' },
  { icon: Star, text: 'Todos los Bonos' },
];

const featuresBasico = [
  { icon: Book, text: 'Estudio de Patriarcas' },
  { icon: Smartphone, text: 'Acceso vía App' },
];

const UrgencyInfo = () => {
    const [purchases, setPurchases] = useState(47);
    const [bonusesTimeLeft, setBonusesTimeLeft] = useState(80);
    const [isMounted, setIsMounted] = useState(false);
    
    // Timer state
    const [hours, setHours] = useState(5);
    const [minutes, setMinutes] = useState(23);
    const [seconds, setSeconds] = useState(11);
    const [progress, setProgress] = useState(100);

    const initialTotalSeconds = 5 * 3600 + 23 * 60 + 11;


    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const purchaseInterval = setInterval(() => {
            setPurchases(prev => prev + Math.floor(Math.random() * 3) + 1);
        }, 8000);

        const bonusTimeInterval = setInterval(() => {
            setBonusesTimeLeft(prev => (prev > 10 ? prev - (Math.random() * 3) : 10));
        }, 3000);
        
        const countdownInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            }
            
            const currentTotalSeconds = hours * 3600 + minutes * 60 + seconds;
            setProgress((currentTotalSeconds / initialTotalSeconds) * 100);

        }, 1000);

        return () => {
            clearInterval(purchaseInterval);
            clearInterval(bonusTimeInterval);
            clearInterval(countdownInterval);
        };
    }, [isMounted, hours, minutes, seconds]);

    if (!isMounted) {
      return (
        <div className="space-y-4">
            <Card className="p-4 bg-card/50 border-border/30"><div className="h-10 bg-muted rounded-md w-full"></div></Card>
            <Card className="p-4 bg-card/50 border-border/30"><div className="h-6 bg-muted rounded-md w-full"></div></Card>
            <Card className="p-4 bg-card/50 border-border/30"><div className="h-10 bg-muted rounded-md w-full"></div></Card>
        </div>
      );
    }

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="space-y-4 font-semibold">
            <Card className="p-4 bg-accent/50 border-destructive/50 shadow-lg">
                <div className='space-y-2 text-center'>
                    <div className="flex items-center justify-center gap-2 text-sm text-destructive font-bold">
                        <Clock className="size-4" />
                        <span className="font-mono text-base">
                           {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
                        </span>
                    </div>
                    <Progress value={progress} className="h-2 bg-background/30" indicatorClassName="bg-destructive" />
                </div>
            </Card>
            
            <Card className="p-4 bg-card/50 border-border/30 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-sm text-foreground">
                    <Users2 className="size-4 text-primary" />
                    <span>{purchases} personas compraron en las últimas 3 horas</span>
                </div>
            </Card>

            <Card className="p-4 bg-card/50 border-border/30 shadow-lg">
                 <div className='space-y-2 text-center'>
                    <div className="flex items-center justify-center gap-2 text-sm text-primary font-bold">
                        <AlertTriangle className="size-4" />
                        <span>Los bonos pueden ser retirados sin aviso</span>
                    </div>
                    <Progress value={bonusesTimeLeft} className="h-2" indicatorClassName="bg-primary" />
                </div>
            </Card>
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
          <div className="mb-12 max-w-lg mx-auto">
            <UrgencyInfo />
          </div>

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
                  <span className="text-5xl font-bold font-headline text-foreground">U$11,90</span>
                  <p className="text-muted-foreground text-sm">Pago único</p>
                </div>
                <p className="text-left font-semibold text-foreground mt-8 mb-4">Incluye:</p>
                <ul className="space-y-4">
                  {featuresCompleto.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground font-semibold">{feature.text}</span>
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
                  <span className="text-5xl font-bold font-headline text-foreground">U$6,90</span>
                   <p className="text-muted-foreground text-sm">Pago único</p>
                </div>
                 <p className="text-left font-semibold text-foreground mt-8 mb-4">Incluye:</p>
                 <ul className="space-y-4">
                  {featuresBasico.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature.text}</span>
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
