import type { Metadata } from "next";
import "./globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";
import { Providers } from "./providers";
import GlobalLayout from "@/components/layouts/GlobalLayout";
import { Montserrat_Alternates, Roboto } from 'next/font/google';

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Укажите нужные начертания
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'], // Укажите нужные начертания
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `${SITE_NAME} | %s`
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body >
        <Providers>
        <GlobalLayout>
        
        {children}
        </GlobalLayout>
        </Providers></body>
    </html>
  );
}
