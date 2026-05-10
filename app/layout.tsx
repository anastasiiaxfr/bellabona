import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/styles/globals.css";
import Layout from "@/components/layout/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Offer Daily Lunch To Build Culture & Cut Costs | Bella&Bona",
  description:
    "Jetzt Bella&Bona entdecken: Frisches, individuelles Catering für Ihr Team. Genießen Sie 30+ Gerichte täglich, steuerfrei und ohne Aufwand. Stärken Sie die Mitarbeiterzufriedenheit im Büro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bella&Bona",
    url: "https://www.bellabona.de",
    logo: "https://www.bellabona.de/logo.png",
    sameAs: [
      "https://www.facebook.com/bellabona",
      "https://www.linkedin.com/company/bellabona",
      "https://www.instagram.com/bellabona",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+49-123-4567890",
        contactType: "Customer Service",
        areaServed: "DE",
        availableLanguage: ["German", "English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musterstraße 1",
      addressLocality: "Berlin",
      postalCode: "10115",
      addressCountry: "DE",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // JSON.stringify ensures valid JSON inside the script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
