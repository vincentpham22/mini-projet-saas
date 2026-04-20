import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/theme-provider";
import SessionProvider from "./components/SessionProvider";

export const metadata: Metadata = {
  title: "SaaS MDC",
  description: "A SaaS application built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
