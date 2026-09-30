import type { Metadata } from "next";
import "./globals.css";
import "./subpages.css";
import "./contact-page.css";
import "./catalog-variants.css";
import "./rent-card-fix.css";

export const metadata: Metadata = {
  title: "Markanday Enterprises | Real Estate & Interiors",
  description: "Buying, selling, rentals and interior solutions near you.",
  icons: {
    icon: [{ url: "/images/fevicon.png", type: "image/png" }],
    shortcut: ["/images/fevicon.png"],
    apple: [{ url: "/images/fevicon.png", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
