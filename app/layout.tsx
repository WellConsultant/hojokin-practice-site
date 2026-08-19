import type { Metadata } from "next"
import { siteDescription, siteName, siteUrl } from "@/lib/seo"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s｜${siteName}` },
  description: siteDescription,
  keywords: ["補助金", "交付申請", "実績報告", "補助金申請", "行政書士", "認定支援機関", "阿久津和宏"],
  authors: [{ name: "阿久津和宏", url: siteUrl }],
  creator: "阿久津和宏",
  publisher: "Well Consultant LLC.",
  verification: { google: "8s693Q3I9X-x4NrOGtYdxLVjtaBXDBDy7D9h7of2hC8" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/og.png", width: 1731, height: 909, alt: siteName }],
  },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription, images: ["/og.png"] },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "ja",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": `${siteUrl}/#organization`,
        name: "Well Consultant合同会社",
        url: siteUrl,
        logo: `${siteUrl}/akutsu-github.png`,
        founder: { "@id": `${siteUrl}/#person` },
        areaServed: "JP",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "阿久津和宏",
        image: `${siteUrl}/akutsu-github.png`,
        jobTitle: "行政書士・認定経営革新等支援機関",
        worksFor: { "@id": `${siteUrl}/#organization` },
      },
    ],
  }

  return (
    <html lang="ja">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  )
}
