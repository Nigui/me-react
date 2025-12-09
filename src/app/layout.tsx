import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

const { title, description, url } = {
  title: "Nigui website",
  description: "Handcrafted to introduce myself",
  url: "https://beta.nigui.fr",
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: "Nigui.fr",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@GuillaumeN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="https://dev-try-v3.abtasty.com/36ad5e4d1a4e0f94c06814a7a02d3c3f.js"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
