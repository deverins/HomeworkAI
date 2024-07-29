import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeworkAI",
  description: "HomeworkAI is an intelligent platform designed to assist students with their homework. Leveraging cutting-edge AI technology, the app provides tailored explanations, helps with problem-solving, and offers guidance across various subjects, ensuring students get the support they need to succeed academically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
