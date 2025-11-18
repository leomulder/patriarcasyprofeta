import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/20 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center space-x-4 md:space-x-6 text-sm">
          <Link href="#" className="hover:text-primary transition-colors">Política de privacidad</Link>
          <Link href="#" className="hover:text-primary transition-colors">Términos de uso</Link>
          <Link href="#" className="hover:text-primary transition-colors">Suporte</Link>
          <Link href="#" className="hover:text-primary transition-colors">Acceso a la app</Link>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Patriarcas y Profetas — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
