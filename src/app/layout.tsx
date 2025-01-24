import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Header } from "~/widgets/header/ui";
import { LayoutBase } from "~/shared/components/providers";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
  subsets: ["cyrillic", "latin", "latin-ext", "greek"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Meta tags generator",
  description: "Generator for meta tags especially for next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <LayoutBase className="mt-4">{children}</LayoutBase>
      </body>
    </html>
  );
}
