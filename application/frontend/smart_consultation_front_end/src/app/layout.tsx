import type { Metadata } from "next";
import "./globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";
import { Providers } from "./providers";
import GlobalLayout from "@/components/layouts/GlobalLayout";

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
    <html lang="en">
      <body >
        <Providers>
        <GlobalLayout>
        
        {children}
        </GlobalLayout>
        </Providers></body>
    </html>
  );
}
