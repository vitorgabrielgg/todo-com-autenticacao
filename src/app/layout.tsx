import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionAuthProvider } from "@/components/session-auth-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionAuthProvider>
        <body className={`${inter.className} bg-bg_body`}>
          {children}
          <Toaster />
        </body>
      </SessionAuthProvider>
    </html>
  );
}
