import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react";

const contentItems = [
  "Adán y Eva", "Enoc", "Noé", "Abraham", "Isaac", "Jacob", "José", "Moisés",
  "Los Profetas Mayores", "Los Profetas Menores", "Reyes y Patriarcas clave",
  "Eventos que definieron la historia espiritual del mundo"
];

const subItems = [
  "Explicaciones profundas", "Contexto histórico-cultural", "Aportes espirituales",
  "Aplicaciones prácticas", "Revelaciones que “encienden la mente”"
];

export default function ContentSection() {
  return (
    <section id="content" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Dentro del Contenido</h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            Explora cada capítulo, cada personaje, cada revelación… como si estuvieras dentro de la historia.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {contentItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
                <AccordionTrigger className="font-headline text-xl text-foreground hover:text-primary transition-colors">
                  {item}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pl-4 pt-2">
                    {subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
