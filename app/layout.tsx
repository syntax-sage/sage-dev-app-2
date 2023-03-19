import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./(components)/(navbar)/Navbar";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Sage Dev App - Home",
  description: "Discover the world of code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
