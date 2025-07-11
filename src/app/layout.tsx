import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "yeshuani.com - Coming Soon",
  description: "Something amazing is on the way",
  icons: {
    icon: "/yeshuani-logo.png",
    shortcut: "/yeshuani-logo.png",
    apple: "/yeshuani-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yeshuani.com",
    title: "yeshuani.com - Coming Soon",
    description: "Something amazing is on the way",
    siteName: "Yeshuani",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yeshuani - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yeshuani.com - Coming Soon",
    description: "Something amazing is on the way",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
