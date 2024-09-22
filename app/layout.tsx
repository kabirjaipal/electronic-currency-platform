import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TcMethods } from "@/types";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import settings from "@/utils/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: settings.WebsiteName,
  description: settings.WebsiteDescription,
  applicationName: settings.WebsiteName,
};

declare global {
  interface Window {
    tc: TcMethods;
  }
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_LOGIN: string;
      NEXT_PUBLIC_API_PASSWORD: string;
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900`}>
        <Toaster position="top-center" />
        {/* WP Button */}
        <WhatsAppButton />
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
        <script
          defer
          src="https://sandbox-cdn.transaction.cloud/latest/widget.sandbox.min.js"
        ></script>
      </body>
    </html>
  );
}
