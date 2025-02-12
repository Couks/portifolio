import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Castro - Desenvolvedor Frontend",
  description: "Portfolio pessoal de Matheus Castro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen font-mono">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
