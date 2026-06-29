import { Kanit, Outfit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Pranjal Garg | Portfolio",
  description: "Developer & Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kanit.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
