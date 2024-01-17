import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

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
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
