import { Check } from "lucide-react";

const points = [
  "Quieres comprender profundamente las raíces de la fe",
  "Deseas claridad espiritual sin complicaciones",
  "Te interesa ver la Biblia “tomar vida”",
  "Buscas revelaciones que te hagan decir: “¿Cómo nunca vi esto antes?”",
  "Necesitas fortalecer tu relación con Dios",
  "Te encanta estudiar, marcar, anotar y compartir lo que descubres",
];

export default function ForYouSection() {
  return (
    <section id="for-you" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary text-center sm:text-left">
            Es Para Ti Si:
          </h2>
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start text-lg sm:text-xl">
                <Check className="h-7 w-7 text-primary mr-4 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
