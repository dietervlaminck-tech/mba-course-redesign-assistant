import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Module Herontwerp Assistent – Nyenrode MBA",
  description:
    "AI-assistent voor het herontwerpen van modules in de Modulaire Executive MBA programma's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
