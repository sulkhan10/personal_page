import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-retro",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-console",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Sulkhan Galang Sakti",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
