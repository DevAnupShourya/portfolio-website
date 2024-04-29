import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import "../styles/globals.css";

const font = Spline_Sans_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anup Shourya",
  description: "Full Stack Engineer",
};

import Navbar from "@src/components/Navbar";
import Footer from "@src/sections/Footer";
import LocomotiveScrollComponent from "@src/animations/LocomotiveScroll";
import AnimationsContainer from "@src/animations/Animations";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimationsContainer>
      <LocomotiveScrollComponent />
      <body
        data-scroll-container
        id="page"
        className={`${font.className} bg-bg-primary text-text-secondary transition-all duration-500 overflow-x-hidden selection:bg-highlight selection:text-accent`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </AnimationsContainer>
  );
}
