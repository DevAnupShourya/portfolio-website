import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes';

const font = Spline_Sans_Mono({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: {
    default: "Anup Shourya",
    template: '%s – Anup Shourya'
  },
  description: "Full Stack Developer",
};

import Navbar from "@src/components/Navbar";
import Footer from "@src/sections/Footer";
import LocomotiveScrollComponent from "@src/animations/LocomotiveScroll";
import AnimationsContainer from "@src/animations/Animations";

// TODO : add dynamic SEO with href cards
// TODO : add title meta data in blog pages with not-found page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimationsContainer>
      <LocomotiveScrollComponent />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body
          data-scroll-container
          id="page"
          suppressHydrationWarning
          className={`${font.className} bg-bg-primary text-text-secondary transition-all duration-500 overflow-x-hidden selection:bg-accent selection:text-text-primary`}
        >
          <div id="pageBg" className="absolute top-0 z-[-2] size-full bg-bg-primary bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(254,53,68,0.3),rgba(255,255,255))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <Navbar />
          <div className="container mx-auto">
            {children}
          </div>
          <Footer />
        </body>
      </ThemeProvider>
    </AnimationsContainer>
  );
}
