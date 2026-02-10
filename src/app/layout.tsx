import { seoConfig } from "@/lib/seo-config";
import type { Metadata } from "next";
import type React from "react";
import LoadingScreen from "./components/loading-screen";
import ParticleBackground from "./components/particle-background";
import ScrollProgress from "./components/scroll-progress";
import { ThemeProvider } from "./components/theme-provider";
import ThemeToggle from "./components/theme-toggle";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: "%s | Usman Shahzad",
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  creator: seoConfig.creator,
  publisher: seoConfig.publisher,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: seoConfig.url,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: "Usman Shahzad Portfolio",
    images: [
      {
        url: seoConfig.image,
        width: 1200,
        height: 630,
        alt: "Usman Shahzad - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.image],
    creator: "@usmanshahzad",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: seoConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <ParticleBackground />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
