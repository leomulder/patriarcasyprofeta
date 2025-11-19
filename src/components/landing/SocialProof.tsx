"use client";

import { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

const purchases = [
  { name: 'Maria V.', location: 'Bogotá, Colombia' },
  { name: 'Carlos B.', location: 'Cidade do México, México' },
  { name: 'Ana C.', location: 'Santiago, Chile' },
  { name: 'Jorge V.', location: 'Lima, Peru' },
  { name: 'Sofia B.', location: 'Medellín, Colombia' },
  { name: 'Mateo C.', location: 'Guadalajara, México' },
  { name: 'Lucia V.', location: 'Valparaíso, Chile' },
  { name: 'Diego B.', location: 'Arequipa, Peru' },
  { name: 'Camila C.', location: 'Cali, Colombia' },
  { name: 'Andrés V.', location: 'Monterrey, México' },
];

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(purchases[0]);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  useEffect(() => {
    const showInterval = setInterval(() => {
      setIsVisible(true);
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        // Wait for fade-out to complete before showing the next one
        const nextTimeout = setTimeout(() => {
           setPurchaseIndex((prevIndex) => (prevIndex + 1) % purchases.length);
           setCurrentPurchase(purchases[(purchaseIndex + 1) % purchases.length]);
        }, 500);
        return () => clearTimeout(nextTimeout);
      }, 5000); // Visible for 5 seconds

      return () => clearTimeout(hideTimeout);
    }, 8000); // Show a new notification every 8 seconds

    return () => clearInterval(showInterval);
  }, [purchaseIndex]);


  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <Card className="bg-popover border-border/50 shadow-2xl p-4 flex items-center gap-4">
        <div className="bg-primary/20 text-primary p-2 rounded-full">
          <ShoppingCart className="size-6" />
        </div>
        <div>
          <p className="font-bold text-sm text-foreground">
            {currentPurchase.name} de {currentPurchase.location}
          </p>
          <p className="text-xs text-muted-foreground">
            Acabou de adquirir o Plano Completo!
          </p>
        </div>
         <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
            <X className="size-4" />
        </button>
      </Card>
    </div>
  );
}
