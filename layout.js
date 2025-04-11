// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "جیرفت آنلاین",
  description: "فرصتی برابر برای همگان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir="rtl" className="bg-rose-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
