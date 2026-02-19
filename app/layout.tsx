import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Via Amiga — Aulas de Direção sem Estresse",
  description:
    "Conecte-se com instrutores empáticos que priorizam sua tranquilidade. Sem gritos, apenas aprendizado. Comece suas aulas hoje.",
  keywords: [
    "aulas de direção",
    "instrutor de trânsito",
    "CNH",
    "autoescola",
    "aprender dirigir",
  ],
  openGraph: {
    title: "Via Amiga — Aulas de Direção sem Estresse",
    description:
      "Conecte-se com instrutores empáticos que priorizam sua tranquilidade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${splineSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
