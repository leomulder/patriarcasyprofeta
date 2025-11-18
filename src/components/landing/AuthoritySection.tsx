import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const authorImage = PlaceHolderImages.find(p => p.id === 'author-image');

export default function AuthoritySection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            {authorImage && (
              <div className="p-2 border-2 border-border rounded-xl shadow-lg w-64 h-80">
                <Image
                  src={authorImage.imageUrl}
                  alt={authorImage.description}
                  data-ai-hint={authorImage.imageHint}
                  width={448}
                  height={576}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            )}
          </div>
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
              Una guía de alguien que ya recorrió este camino
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
              Esta experiencia fue creada por Juan Esteban, un teólogo y autor con más de 15 años ayudando a personas a redescubrir una fe genuina y profunda. Su enfoque no es religioso, sino espiritual y transformador, basado en los principios eternos que guiaron a los patriarcas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
