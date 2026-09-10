import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppLoader } from "@/components/AppLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rotary Club of Rumuomasi | People of Action",
  description:
    "Rotary Club of Rumuomasi is a service-driven community club in Rivers State, Nigeria, focused on health, education, sanitation, and sustainable local development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f3f7fb] text-[#0a1f3a]">
        <AppLoader />
        {children}
      </body>
    </html>
  );
}
