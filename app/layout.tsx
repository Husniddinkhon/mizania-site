import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIZANIA",
  description: "Premium halal finance, Islamic finance, consulting and education platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
