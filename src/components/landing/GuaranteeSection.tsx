import { ShieldCheck } from 'lucide-react';

const GuaranteeSeal = () => (
  <div className="relative inline-block size-32">
    <svg
      viewBox="0 0 24 24"
      fill="hsl(var(--primary))"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary size-full"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
      <div className="text-center font-bold">
        <div className="text-3xl leading-none pt-1">30</div>
        <div className="text-sm leading-none">DÍAS</div>
      </div>
    </div>
  </div>
);

export default function GuaranteeSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 sm:p-12 shadow-2xl border border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
            <div className="flex-shrink-0">
              <GuaranteeSeal />
            </div>
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                Garantía 100% SIN RIESGO
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-foreground max-w-md">
                30 días. Sin preguntas. Si no te transforma: devolvemos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}