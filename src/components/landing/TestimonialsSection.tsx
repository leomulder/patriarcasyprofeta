import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Juan P.",
    review: "Nunca imaginé que podría entender tan profundamente estas historias. La app hace que todo cobre vida. Es como tener un teólogo personal en mi bolsillo.",
    imageUrl: "https://i.postimg.cc/CxMF16X7/1.png",
  },
  {
    id: "testimonial-2",
    name: "Maria G.",
    review: "¡Las revelaciones son impactantes! Cada día descubro algo que me hace decir 'wow'. Mi fe se ha fortalecido muchísimo.",
    imageUrl: "https://i.postimg.cc/d0vGLvwP/1.png",
  },
  {
    id: "testimonial-3",
    name: "Carlos R.",
    review: "Soy pastor y esta herramienta se ha vuelto indispensable para preparar mis sermones. El contexto histórico-cultural es oro puro.",
    imageUrl: "https://i.postimg.cc/7LdDKP69/2.png",
  },
  {
    id: "testimonial-4",
    name: "Ana L.",
    review: "Me encanta la función de audiolibro. Puedo estudiar mientras viajo al trabajo. Transformó mi tiempo muerto en tiempo de crecimiento espiritual.",
    imageUrl: "https://i.postimg.cc/LXQPC1Pr/2.png",
  },
  {
    id: "testimonial-5",
    name: "Sofia M.",
    review: "La comunidad es increíble. Poder compartir lo que aprendo y leer las revelaciones de otros es una bendición. Me siento acompañada en mi estudio.",
    imageUrl: "https://i.postimg.cc/HjDVR4k3/3.png",
  },
  {
    id: "testimonial-6",
    name: "David S.",
    review: "Simple, profundo y sin complicaciones. Justo lo que buscaba para reconectar con las Escrituras de una manera relevante para mi vida hoy.",
    imageUrl: "https://i.postimg.cc/2jFRZ74F/3.png",
  },
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center gap-1 text-primary">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-muted-foreground/50'}`} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Lo Que Dicen Nuestros Estudiantes Reales
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating />
            <p className="font-bold text-lg text-foreground">4.9 / 5.0</p>
          </div>
          <p className="text-muted-foreground">— basado en +12.247 reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-background border-border/50 shadow-lg flex flex-col p-6">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex-grow">
                    <StarRating />
                    <p className="mt-4 text-foreground/90 italic">“{testimonial.review}”</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    {testimonial.imageUrl && (
                       <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    )}
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>
        <p className="mt-12 font-headline text-2xl sm:text-3xl text-foreground text-center">
          ¿De qué lado quieres estar?
        </p>
      </div>
    </section>
  );
}
