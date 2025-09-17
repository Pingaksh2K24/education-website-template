import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topbar/TopBar";
import AnnouncementBar from "@/components/common/AnnouncementBar";
import BannerComponent from "@/components/common/BannerComponent";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "College - Educational Institution",
  description: "Educational institutional project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <AnnouncementBar />
        <BannerComponent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
