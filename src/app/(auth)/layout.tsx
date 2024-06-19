import { LoadingProvider } from "@/contexts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <LoadingProvider>
        <body className={inter.className}>
          <div className="bg-bg_login_and_register min-h-screen flex justify-center items-center w-full">
            {children}
          </div>
        </body>
      </LoadingProvider>
    </html>
  );
}
