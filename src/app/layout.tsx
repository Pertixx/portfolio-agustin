import "./globals.css";

import { Calistoga, Inter } from 'next/font/google';

import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400'] });

export const metadata: Metadata = {
  title: "Agustin Perticaro - Portfolio",
  description: "Agustin Perticaro is a software engineer based in Buenos Aires, Argentina. He specializes in building high-quality web applications.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/agustin-memoji.png",
        href: "/images/agustin-memoji.png"
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/agustin-memoji.png",
        href: "/images/agustin-memoji.png"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        {children}
        </body>
    </html>
  );
}
