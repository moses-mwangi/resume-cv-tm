import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter, Roboto, Open_Sans, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({ subsets: ["latin"] });
export const openSans = Open_Sans({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Living Archive — Digital Artifacts & Interfaces",
    template: "%s | Living Archive",
  },
  description:
    "A portfolio of digital artifacts, interfaces, and quiet moments. Exploring the poetics of interaction and digital memory.",
  keywords: [
    "portfolio",
    "digital artifacts",
    "UI/UX",
    "creative developer",
    "interaction design",
    "web art",
    "digital wellness",
    "interactive narrative",
  ],
  icons: {
    icon: [
      {
        url: "/triple-m-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        // url: "/favicon.ico",
        url: "/triple-m-logo.svg",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    shortcut: "/triple-m-logo.svg",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
