import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mizania.uz"),
  title: {
    default: "MIZANIA — Halol moliya, islomiy moliya va premium konsalting",
    template: "%s | MIZANIA",
  },
  description:
    "MIZANIA — halol moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash yo‘nalishlarida premium platforma.",
  keywords: [
    "MIZANIA",
    "halol moliya",
    "islomiy moliya",
    "islamic finance",
    "ethical finance",
    "konsalting",
    "consulting",
    "investorlar",
    "ta'lim",
    "kurslar",
    "Uzbekistan",
  ],
  applicationName: "MIZANIA",
  alternates: {
    canonical: "/",
    languages: {
      uz: "/",
      en: "/?lang=en",
      ru: "/?lang=ru",
    },
  },
  openGraph: {
    type: "website",
    url: "https://mizania.uz",
    siteName: "MIZANIA",
    title: "MIZANIA — Halol moliya, islomiy moliya va premium konsalting",
    description:
      "Halol moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash uchun premium platforma.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "MIZANIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIZANIA — Halol moliya, islomiy moliya va premium konsalting",
    description:
      "Halol moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash uchun premium platforma.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#12382f",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MIZANIA",
  url: "https://mizania.uz",
  logo: "https://mizania.uz/logo.png",
  email: "mizaniamchj@gmail.com",
  telephone: "+998909012373",
  description:
    "MIZANIA — halol moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash yo‘nalishlarida premium platforma.",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MIZANIA",
  url: "https://mizania.uz",
  inLanguage: "uz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
