import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/cookieBanner";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata = {
  title: "Black and White Spares",
  description: "Trusted truck and plant spares supplier",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brandBlack text-brandWhite font-sans flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 w-full p-0 m-0">
          {children}
        </main>

        <Footer />

        <CookieBanner />

        <Analytics />
      </body>
    </html>
  );
}



