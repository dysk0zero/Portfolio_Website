import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Javier Bellido Roldan",
  description: "Physicist & developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/fonts/montserrat/montserrat-v30-latin-700.woff2" 
          as="font" type="font/woff2" crossOrigin="anonymous" 
        />
         <link 
          rel="preload" 
          href="/fonts/montserrat/montserrat-v30-latin-600.woff2" 
          as="font" type="font/woff2" crossOrigin="anonymous" 
        />
         <link 
          rel="preload" 
          href="/fonts/montserrat/montserrat-v30-latin-regular.woff2" 
          as="font" type="font/woff2" crossOrigin="anonymous" 
        />
      </head> 
      <body className="font-sans antialiased text-foreground">
        {children}
      </body>
    </html>
  );
}