import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/styles/mibooz.css";
import "../assets/styles/mibooz-responsive.css";
import "../assets/styles/custom.css";
import "../assets/styles/uicons-regular-rounded.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../assets/vendors/mibooz-icons/style.css";
import "../assets/vendors/fontawesome/css/all.min.css";
import "../assets/vendors/animate/animate.min.css";
import "../assets/vendors/animate/custom-animate.css";
import "../assets/vendors/reey-font/stylesheet.css";
import "../assets/vendors/the-sayinistic-font/stylesheet.css";

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
