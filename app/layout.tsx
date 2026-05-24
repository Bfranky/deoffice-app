import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Office Bar | Bar & Lounge – Port Harcourt, Rivers State",
  description:
    "Port Harcourt's premier bar and lounge at Phase 2, 8 Tombia Street, Rivers G.R.A. Dine-in & takeaway. Opens 2 PM daily. Call 0806 193 9718.",
  keywords: "de office bar port harcourt, bar port harcourt, lounge GRA port harcourt, bar tombia street",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}