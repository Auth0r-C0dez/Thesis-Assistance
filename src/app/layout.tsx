import "./globals.css";
import Navbar from "@/components/Navbar";
import DynamicBackground from "@/components/DynamicBackground";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "MyThesis Clone",
  description: "Next.js Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen text-white font-body antialiased bg-transparent">
        <DynamicBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}