import type { Metadata } from "next";
import "./globals.css";

import {Inter, Poppins} from "next/font/google";
const inter = Inter({subsets:["latin"], variable: "--font-inter", weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

const poppins = Poppins({subsets: ["latin"], variable: "--font-poppins", weight: ["100", "200", "300", "400"]})


export const metadata: Metadata = {
  title: "practice-frontend",
  description: "practice frontend description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
