import Banner from "@/components/Banner";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "+55 Coffe Shop",
  description: "High quality Brazilian Coffee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
