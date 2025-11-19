import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "¿Qué incluye exactamente este material?",
    answer:
      "El material incluye acceso completo a los estudios detallados de \"Patriarcas y Profetas\", audio-libro, mapas mentales, guías de estudio, y acceso a una comunidad privada de discusión. El Combo Completo te da acceso a todo, mientras que el Básico se enfoca en los Patriarcas.",
  },
  {
    question: "¿Cómo accedo al contenido después de la compra?",
    answer:
      "Inmediatamente después de la confirmación del pago, recibirás un correo electrónico con un enlace para descargar nuestra aplicación y tus credenciales de acceso. El acceso es instantáneo y de por vida.",
  },
  {
    question: "¿Necesito conocimientos teológicos previos?",
    answer:
      "No. El contenido está diseñado tanto para principiantes como para estudiantes avanzados de la Biblia. Explicamos todo de manera clara y profunda, sin la necesidad de conocimiento previo.",
  },
  {
    question: "¿Puedo usar este material para estudios en grupo?",
    answer:
      "¡Claro que sí! Muchos de nuestros miembros usan el material para enriquecer sus grupos de estudio. El Combo Completo, con acceso a la comunidad, es ideal para esto.",
  },
  {
    question: "¿Cuál es la diferencia entre el paquete Básico y el Combo Completo?",
    answer:
      "El plan Básico te da acceso a todos los estudios sobre los Patriarcas. El Combo Completo incluye Patriarcas, Profetas, todos los bonos (audiolibro, comunidad, etc.) y actualizaciones futuras.",
  },
  {
    question: "¿Hay garantía de devolución?",
    answer:
      "Sí. Ofrecemos una garantía incondicional de 30 días. Si por cualquier motivo no estás satisfecho, te devolvemos el 100% de tu dinero, sin preguntas.",
  },
  {
    question: "¿El contenido está en formato digital?",
    answer:
      "Sí, todo el contenido es 100% digital y accesible a través de nuestra aplicación exclusiva para móviles y tabletas, para que puedas estudiar donde y cuando quieras.",
  },
  {
    question: "¿Recibo actualizaciones del material?",
    answer:
      "Sí, los miembros del Combo Completo reciben todas las actualizaciones y nuevos estudios que agreguemos en el futuro sin costo adicional.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Encuentra respuestas a las dudas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border/50 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-4">¿Listo para transformar tu estudio de la Biblia?</p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 rounded-xl shadow-lg shadow-primary/30 transition-transform transform hover:scale-105">
              VER OPCIONES DE COMPRA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
