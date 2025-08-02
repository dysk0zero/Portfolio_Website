import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio Javier Bellido Roldan",
  description: "Physicist & developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}