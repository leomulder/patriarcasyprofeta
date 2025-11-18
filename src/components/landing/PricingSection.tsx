"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Check } from 'lucide-react';

const featuresCompleto = [
  "Acceso total a todos los estudios",
  "Todos los bonos exclusivos",
  "Acceso a la comunidad privada",
  "Audiolibro completo",
  "Actualizaciones constantes"
];

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            
            {/* Básico Plan */}
            <Card className="bg-card border-border/50 shadow-lg flex flex-col h-full">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-foreground">Básico</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">Contenido limitado.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <div className="my-4">
                  <span className="text-5xl font-bold font-headline text-foreground">U$3,90</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
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
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-headline text-3xl text-primary">Completo</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">La experiencia completa y transformadora.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center my-4">
                  <span className="text-5xl font-bold font-headline text-foreground">U$7,90</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <ul className="space-y-3 mt-8">
                  {featuresCompleto.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  QUIERO EL COMPLETO
                </Button>
              </CardFooter>
            </Card>
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
            <p className="text-muted-foreground line-through">Precio normal: U$7,90/mes</p>
            <p className="font-headline text-5xl font-bold text-foreground mt-2">U$6,90<span className="text-lg font-body text-muted-foreground">/mes</span></p>
            <p className="text-sm text-primary mt-1">Acceso Completo con Descuento</p>
          </div>
          <ul className="space-y-2 mb-6">
            {featuresCompleto.slice(0,3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              SÍ, QUIERO EL COMPLETO POR U$6,90
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => setIsModalOpen(false)}>
              No, gracias. Quiero el Básico por U$3,90
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
