import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AestheticCursor from "@/components/AestheticCursor";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "QA Automation Engineer Portfolio",
  description: "Portfolio of a Senior QA Automation Engineer specializing in Cypress, Selenium, and Performance Testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
        <AestheticCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
