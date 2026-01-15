import type { Metadata } from "next";
import { locales } from "@/i18n";

export const metadata: Metadata = {
  title: "Como Foreign Exchange",
  description: "Trade global shares, options, and cryptocurrencies",
  icons: {
    icon: "/favicon.webp",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
