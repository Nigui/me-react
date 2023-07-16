import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Metadata } from "next";

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
