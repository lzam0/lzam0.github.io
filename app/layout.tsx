import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leihl Zambrano — builtbyleihl",
  description: "Leihl Zambrano. Computer Science graduate (UEA, Class of 2026) looking for software roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${display.variable} ${inter.variable} bg-white text-ink font-inter antialiased`}
      >
        <noscript>
          <style>{`.reveal{opacity:1!important}`}</style>
        </noscript>
        <Splash />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
