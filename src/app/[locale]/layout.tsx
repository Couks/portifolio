import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type Messages = {
  metadata?: {
    title?: string;
    description?: string;
  };
  [key: string]: unknown;
};

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages() as Messages;
  
  return {
    title: messages.metadata?.title || "Matheus Castro - Desenvolvedor Frontend",
    description: messages.metadata?.description || "Portfolio pessoal de Matheus Castro",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased tracking-tighter`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 