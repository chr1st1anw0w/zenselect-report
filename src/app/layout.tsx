import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const display = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
});

const sansCn = Noto_Sans_TC({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans-cn",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Expert UX Intelligence: ZenSelect",
  description: "Strategic e-commerce UI/UX analysis report.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${display.variable} ${sansCn.variable} ${mono.variable}`}>
      <body className="blueprint-grid font-sans-cn tracking-wide">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
