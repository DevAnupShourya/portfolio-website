import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const font = Spline_Sans_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anup Shourya",
  description: "Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bg-primary text-text-secondary`}>
        {children}
      </body>
    </html>
  );
}
