import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHcomix",
  description: "The best comics in the world!",
  icons: "icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-40">
          <Link href="/">
            <Image
              src="/CHC.png"
              width={175}
              height={175}
              alt="CHC Logo"
              priority={true}
            />
          </Link>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
