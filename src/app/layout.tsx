import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers/theme-provider";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajat Bhatt",
  verification: {
    google: "vOiMdryuJTe7tHKM9vmYRYISLkQS5uosBCmSAM4MCus",
  },
  description:
    "Hi, My name is Rajat Bhatt. I am a full stack developer with 4+ years of experience as a web developer. During my professional career, I have used tools and libraries like React, Javascript, Typescript, GraphQL, Postgres, HTML & CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} pb-8 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50`}
      >
        <Providers>
          <Header />
          <main role="main" id="main" className="p-4 md:p-8">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
