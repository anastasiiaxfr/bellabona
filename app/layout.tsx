import type { Metadata } from "next";


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
  

  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        
      </head>
      <body className="min-h-full flex flex-col">
       
          {children}
        
      </body>
    </html>
  );
}
