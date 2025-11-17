import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/Navbar'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Next-Coffee | Coffee Shop Template",
  description: "Best Coffee in Town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} font-sans bg-light`}>
        <Navbar /> {/* Add Navbar here */}
        {children}
      </body>
    </html>
  );
}