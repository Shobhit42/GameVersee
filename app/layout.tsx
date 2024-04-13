import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

// type Metadata = {
//   title: string;
//   description: string;
//   preloadLinks?: { href: string; as: string }[];
// };

export const metadata: Metadata = {
  title: "GameVerse",
  description: "Gaming Platform for all gamers",
  // preloadLinks: [
  //   { href: "/single.jpg", as: "image" },
  //   { href: "/multiple.jpg", as: "image" },
  //   { href: "/ai.jpg", as: "image" },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
  <link rel="preload" href="/single.jpg" as="image" />
  <link rel="preload" href="/multiple.jpg" as="image" />
  <link rel="preload" href="/ai.jpg" as="image" />
</Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
