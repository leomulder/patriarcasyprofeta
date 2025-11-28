import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ForYouSection() {
  return (
    <section id="for-you" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary text-center">
            🔥 Lo que NADIE te ofrece en LATAM…
          </h2>
          <p className="text-center text-lg text-muted-foreground mt-2">pero tú tendrás desde el primer minuto:</p>
          
          <Table className="mt-8 text-base sm:text-lg">
            <TableHeader>
              <TableRow className="border-b-border/50">
                <TableHead className="font-bold text-foreground">Característica</TableHead>
                <TableHead className="text-center font-bold text-muted-foreground">Otros Estudios</TableHead>
                <TableHead className="text-center font-bold text-primary">Este Estudio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Verso por verso real</TableCell>
                <TableCell className="text-center text-muted-foreground">Medio</TableCell>
                <TableCell className="text-center text-primary font-bold">Completo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>App</TableCell>
                <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Audiolibro</TableCell>
                <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Comunidad</TableCell>
                <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                <TableCell className="text-center text-primary font-bold">✔ Activa</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Profetas y Patriarcas</TableCell>
                <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                <TableCell className="text-center text-primary font-bold">✔ Amplio</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>Explicación profunda y simple</TableCell>
                <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                <TableCell className="text-center text-primary font-bold">✔ Perfecto Balance</TableCell>
              </TableRow>
              <TableRow className="border-b-0">
                <TableCell>Actualizaciones constantes</TableCell>
                <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                <TableCell className="text-center text-primary font-bold">✔ Siempre Crece</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-8 text-center">
            <p className="text-xl text-muted-foreground">No es un PDF. No es un curso.</p>
            <p className="text-2xl font-bold text-foreground">Es una EXPERIENCIA de estudio bíblico.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
