import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Navbar from "./(components)/(navbar)/Navbar";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sage Dev App - Home",
  description: "Learn to code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito_sans.className}>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
