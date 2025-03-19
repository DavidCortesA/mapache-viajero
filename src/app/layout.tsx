import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import ThemeProvider from "./ThemeProvider";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300","600","800"],
});

export const metadata: Metadata = {
  title: "Mapache Viajero",
  description: "Explora el mundo con Mapache Viajero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} bg-white dark:bg-very-dark-blue`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
