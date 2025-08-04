import type { Metadata } from "next";
import { Barlow, Fraunces } from 'next/font/google'
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Scavos side ",
  description: "a landing page for scavo",
};
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-barlow',
});


const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-fraunces',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${fraunces.variable} scroll-smooth`}>
      <body
className="font-sans antialiased"
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
