import '@/styles/globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/header';
import RotatingLogo from '@/components/rotatingLogo';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { Atyp, Suisse } from '@/lib/customFonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  bg-light text-dark  transition-colors  duration-700 ease-in-out dark:bg-dark dark:text-light ${Suisse.variable} ${Atyp.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="relative flex flex-col">{children}</div>
          <TailwindIndicator />
          <RotatingLogo />
        </ThemeProvider>
        <Script
          src="../assets/scripts/jquery.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
