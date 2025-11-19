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
];

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [shuffledPurchases, setShuffledPurchases] = useState<typeof purchases>([]);

  useEffect(() => {
    // Shuffle notifications only on the client-side to avoid hydration mismatch
    const shuffled = [...purchases]
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setShuffledPurchases(shuffled);
  }, []);

  useEffect(() => {
    if (shuffledPurchases.length === 0) return;

    const showInterval = setInterval(() => {
      setIsVisible(true);
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        // Wait for fade-out to complete before showing the next one
        const nextTimeout = setTimeout(() => {
           setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % shuffledPurchases.length);
        }, 500);
        return () => clearTimeout(nextTimeout);
      }, 5000); // Visible for 5 seconds

      return () => clearTimeout(hideTimeout);
    }, 8000); // Show a new notification every 8 seconds

    return () => clearInterval(showInterval);
  }, [currentNotificationIndex, shuffledPurchases.length]);
  
  if (shuffledPurchases.length === 0) {
    return null; // Don't render anything on the server or initial client render
  }

  const currentNotification = shuffledPurchases[currentNotificationIndex];

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <Card className="bg-popover border-border/50 shadow-2xl p-4 flex items-center gap-4 min-w-[300px]">
        <div className="bg-primary/20 text-primary p-2 rounded-full">
            <ShoppingCart className="size-6" />
        </div>
        <div>
            <p className="font-bold text-sm text-foreground">
              {currentNotification.name} de {currentNotification.location}
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
