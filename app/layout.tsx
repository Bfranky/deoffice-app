import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export const metadata: Metadata = {
  title: "De Office Bar | Bar & Lounge – Port Harcourt, Rivers State",
  description:
    "Port Harcourt's premier bar and lounge. Phase 2, 8 Tombia Street, Rivers G.R.A. Opens 2 PM daily. Dine-in & takeaway. Call 0806 193 9718.",
  keywords:
    "de office bar port harcourt, bar port harcourt, lounge GRA PH, tombia street bar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}
