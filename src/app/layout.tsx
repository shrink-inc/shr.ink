import type { Metadata } from "next";
import "tailwindcss/tailwind.css";

import { Fira_Sans, Fira_Mono } from "next/font/google";

const sans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Fira_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shrink Inc.",
  description: "Shrink Inc. makes things for the www.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-pink-50/50 antialiased dark:bg-zinc-900 ${sans.variable} ${mono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
