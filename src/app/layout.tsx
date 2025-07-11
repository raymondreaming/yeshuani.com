import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reality Recode - The Complete System | Yeshuani",
  description:
    "The last system you'll ever need. Reality Recode restructures the invisible patterns that shape your reality so things shift on their own - without effort, belief shifts, or endless mindset work. Coming March 7th, 2025.",
  keywords: [
    "reality recode",
    "fractal mastery",
    "reality restructuring",
    "personal transformation",
    "consciousness",
    "reality shifting",
    "fractal patterns",
    "yeshuani",
    "structural change",
    "life transformation",
  ],
  authors: [{ name: "Yeshuani" }],
  creator: "Yeshuani",
  publisher: "Yeshuani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yeshuani.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/yeshuani-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/yeshuani-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/yeshuani-logo.png",
    apple: [{ url: "/yeshuani-logo.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yeshuani.com",
    title: "Reality Recode - The Complete System | Yeshuani",
    description:
      "The last system you'll ever need. Reality Recode restructures the invisible patterns that shape your reality so things shift on their own - without effort, belief shifts, or endless mindset work. Coming March 7th, 2025.",
    siteName: "Yeshuani",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Reality Recode - The Complete System | Yeshuani",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Recode - The Complete System | Yeshuani",
    description:
      "The last system you'll ever need. Reality Recode restructures the invisible patterns that shape your reality so things shift on their own. Coming March 7th, 2025.",
    images: ["/og.png"],
    creator: "@yeshuani",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Personal Development",
  classification: "Personal Transformation System",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f23" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
    title: "Reality Recode",
    statusBarStyle: "black-translucent",
  },
  applicationName: "Reality Recode",
  appLinks: {
    web: {
      url: "https://yeshuani.com",
      should_fallback: true,
    },
  },
  bookmarks: ["https://yeshuani.com"],
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#603cba",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#603cba" />
        <meta name="msapplication-TileColor" content="#603cba" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
