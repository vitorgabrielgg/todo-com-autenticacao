import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TaskContextProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TaskContextProvider>
        <body className={inter.className}>{children}</body>
      </TaskContextProvider>
    </html>
  );
}
