import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moelfre Holiday Rentals | Anglesey, North Wales",
  description:
    "Discover beautiful holiday cottages and coastal retreats in Moelfre, Anglesey. Stunning sea views, peaceful beaches, and the very best of North Wales awaits.",
  keywords:
    "Moelfre holiday rentals, Anglesey cottages, Wales holiday lets, coastal retreat, North Wales holidays",
  openGraph: {
    title: "Moelfre Holiday Rentals | Anglesey, North Wales",
    description:
      "Beautiful holiday cottages in the picturesque village of Moelfre, Anglesey.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
