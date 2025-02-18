import React from "react";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sumit Saurav - Developer",
  description:
    "I'm Sumit Saurav, a developer and digital nomad who loves exploring the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
        suppressHydrationWarning={true}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
