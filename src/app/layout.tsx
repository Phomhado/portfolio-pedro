import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Grain from "./components/Grain";
import SystemBar from "./components/SystemBar";
import SideRail from "./components/SideRail";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Oliveira | Frontend-Focused Full-Stack Developer",
  description: "Pedro Oliveira builds frontend experiences with React, Next.js, and TypeScript and works across the stack with Ruby on Rails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Grain />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <SystemBar />
        <SideRail />
        <div className="site-content lg:pr-9">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
