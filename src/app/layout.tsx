"use client ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matheus Castro - Desenvolvedor Frontend",
  description: "Portfolio pessoal de Matheus Castro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
