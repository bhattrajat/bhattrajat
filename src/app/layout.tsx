import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajat Bhatt",
  description: `Rajat Bhatt's personal portfolio site`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} pb-8 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-50`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
