import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" className={cn("font-sans", geist.variable)}
    >
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
