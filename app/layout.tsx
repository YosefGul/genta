import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

// Varsayılan metadata değerleri
export const metadata: Metadata = {
  title: {
    default: "GENTA Calistay",
    template: "%s | GENTA Calistay",
  },
  description:
    "GENTA Liseler Arası Gençlik Çalıştayı, gençlerin potansiyelini keşfetmelerine ve geliştirmelerine yardımcı olan bir organizasyondur.",
  keywords: ["GENTA", "çalıştay", "gençlik", "eğitim", "lise", "akademik", "komite", "İstanbul"],
  authors: [{ name: "GENTA" }],
  creator: "GENTA Ekibi",
  publisher: "GENTA",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "GENTA Calistay",
    description:
      "GENTA Liseler Arası Gençlik Çalıştayı, gençlerin potansiyelini keşfetmelerine ve geliştirmelerine yardımcı olan bir organizasyondur.",
    images: [
      {
        url: "/og-image.jpg", // Relative URL
        width: 1200,
        height: 630,
        alt: "GENTA Calistay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GENTA Calistay",
    description:
      "GENTA Liseler Arası Gençlik Çalıştayı, gençlerin potansiyelini keşfetmelerine ve geliştirmelerine yardımcı olan bir organizasyondur.",
    images: ["/twitter-image.jpg"], // Relative URL
    creator: "@gentacalistay",
    site: "@gentacalistay",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground flex flex-col`}>
        <ScrollToTop />
        {/* Yapısal veri (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GENTA Calistay",
              logo: "/logo.png", // Relative URL
              sameAs: [
                "https://instagram.com/gentacalistay",
                "https://twitter.com/gentacalistay",
                "https://linkedin.com/company/genta",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+902163788386",
                contactType: "customer service",
                areaServed: "TR",
                availableLanguage: "Turkish",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Şeyhli Mahallesi, Hayatı Üstün Caddesi, Merdane Sokak No:1",
                addressLocality: "Pendik",
                addressRegion: "İstanbul",
                postalCode: "34906",
                addressCountry: "TR",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}



import './globals.css'