import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIZANIA | Premium Ethical Finance & Islamic Finance",
  description: "MIZANIA is a premium multi-language website for ethical finance, Islamic finance, education, consulting, and investors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
