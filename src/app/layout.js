import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/styles/mibooz.css";
import "../assets/styles/mibooz-responsive.css";
import "../assets/styles/custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tzar Digital Marketing Agency",
  description: "Tzar Digital Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
