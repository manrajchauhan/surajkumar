import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Early Effects | Early Effects Engineering Pvt Ltd.",
  description: "Electronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1450px] mx-auto">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
