import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Oliveira - Portfolio",
  description: "Personal portfolio of Pedro Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            (function () {
              const storageKey = 'portfolio-theme';
              const root = document.documentElement;
              const stored = window.localStorage.getItem(storageKey);
              if (stored === 'light' || stored === 'dark') {
                root.classList.add(stored);
                return;
              }
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              root.classList.add(prefersDark ? 'dark' : 'light');
            })();
          `}
        </Script>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
