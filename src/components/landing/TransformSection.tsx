import { Button } from "@/components/ui/button";

export default function TransformSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
           <div className="mt-8 text-center">
            <p className="text-lg text-foreground mb-4">El momento es ahora. La revelación también.</p>
            <a href="#pricing">
              <Button size="lg" className="cta-button">
                👉 QUIERO TRANSFORMAR MI ESTUDIO AHORA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
