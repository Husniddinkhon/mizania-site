import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIZANIA | Ethical Finance, Islamic Finance, Education & Consulting",
description: "MIZANIA is a premium brand focused on ethical finance, Islamic finance, education, consulting, justice, balance, and trust.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
