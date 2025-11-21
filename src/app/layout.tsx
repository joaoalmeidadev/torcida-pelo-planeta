import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Torcida pelo Planeta",
  description:
    "A campanha TORCIDA PELO PLANETA une CBF, Taça dos Povos Indígenas e Para Quem Doar em uma mobilização nacional que transforma a paixão pelo futebol em impacto real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QFNHCCHXH0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QFNHCCHXH0');
          `}
        </Script>
        <main className="flex min-h-screen flex-1 flex-col overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
