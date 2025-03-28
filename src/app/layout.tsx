import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IN - Ivandro Neto",
  description: "I deliver high-impact, scalable software solutions.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
