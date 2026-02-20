import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${instrumentSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
