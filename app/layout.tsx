import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markanday Enterprises | Real Estate & Interiors",
  description: "Buying, selling, rentals and interior solutions near you."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
