'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BookOpen, ChevronsRight, Smartphone, Headphones, Users, Star, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';

const featuresCompleto = [
  { icon: BookOpen, text: 'Estudio de Patriarcas' },
  { icon: ChevronsRight, text: 'Estudio de Profetas' },
  { icon: Smartphone, text: 'Acceso vía App' },
  { icon: Headphones, text: 'Audio-sesiones' },
  { icon: Users, text: 'Comunidad Privada' },
  { icon: Star, text: 'Todos los Bonos Originales' },
];

const newBonuses = [
  { icon: Gift, text: 'Mapa de Linhas do Tempo Proféticas' },
  { icon: Gift, text: "Acesso ao Workshop 'As 7 Chaves da Hermenêutica'" },
];

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function UpsellModal({ isOpen, onClose, onAccept }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-primary/50 shadow-2xl shadow-primary/20 sm:max-w-2xl p-0">
        <div className="p-6 md:p-8 text-center">
            <Badge variant="destructive" className="text-base mb-4 animate-pulse">OFERTA ÚNICA</Badge>
            <DialogTitle className="font-headline text-3xl sm:text-4xl font-bold text-primary">¡Espera! No te vayas todavía...</DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg mt-2">
                Vimos que te interesa comenzar tu viaje, y queremos darte una oferta irrepetible.
            </DialogDescription>
        </div>
        
        <div className='bg-background/50 px-6 md:px-8 py-8'>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">Lleva el <span className="text-secondary">PAQUETE COMPLETO</span> con un <span className="text-destructive">20% DE DESCUENTO</span></h3>
            <p className="text-center text-muted-foreground mt-2">¡Todo el contenido, todos los bonos y futuras actualizaciones por un precio especial!</p>
            
            <div className="flex items-center justify-center gap-4 my-6">
                <span className="text-2xl text-muted-foreground line-through">U$11,90</span>
                <span className="font-headline text-5xl font-bold text-primary animate-pulse">U$9,52</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 my-8 text-left">
                <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Recibirás todo esto:</h4>
                    <ul className="space-y-2">
                    {featuresCompleto.map((feature, index) => (
                        <li key={index} className="flex items-center">
                        <feature.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature.text}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Y DOS BONOS MÁS <span className="text-destructive">(¡GRATIS HOY!)</span>:</h4>
                    <ul className="space-y-2">
                    {newBonuses.map((bonus, index) => (
                        <li key={index} className="flex items-center">
                        <bonus.icon className="h-5 w-5 text-destructive mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm font-semibold">{bonus.text}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            <Button size="lg" className="w-full cta-button text-xl" onClick={onAccept}>
                ¡SÍ, QUIERO LA OFERTA COMPLETA!
                <ArrowRight className="ml-2 size-5" />
            </Button>

            <Button variant="link" className="mt-4 w-full text-muted-foreground hover:text-foreground" onClick={onClose}>
                No, gracias, prefiero continuar con el plan Básico
            </Button>
        </div>

        <div className="p-4 bg-card/50 text-center">
            <p className="text-xs text-muted-foreground">Esta es una oferta única. Si cierras esta ventana, la perderás para siempre.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
