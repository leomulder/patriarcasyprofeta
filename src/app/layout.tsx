import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-poppins',
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
    <html lang="es" className={cn(poppins.variable, "dark")}>
      <head>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        ></script>
      </head>
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
      </body>
    </html>
  );
}
