import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const integral = localFont({
  src: [
    {
      path: "/fonts/integral.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-integral",
});

const satoshi = localFont({
  src: [
    {
      path: "/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Miso",
  description: "Buy Korean Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${integral.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
