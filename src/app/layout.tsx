import type {Metadata} from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import Script from 'next/script';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Patriarcas Revelados',
  description: 'Revelado Verso por Verso — Como Nunca Antes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(ptSans.variable, playfairDisplay.variable, "dark")}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script id="utmify-pixel-config" strategy="afterInteractive">
          {`window.pixelId = "68bdb8b58e919d275589459c";`}
        </Script>
        <Script 
          id="utmify-pixel"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
          async
          defer
        />
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          strategy="afterInteractive"
          async
          defer
        ></Script>
      </body>
    </html>
  );
}
