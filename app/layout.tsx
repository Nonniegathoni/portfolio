import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crafted Code & Creative Vision portfolio",
  description:
    "A dynamic showcase of my development journey - blending clean code, modern design, and purposeful innovation.",
  generator: "v0.dev",
  keywords: [
    "Lucy Gathoni Mugo",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "Portfolio",
    "Web Development",
    "Mobile Development",
    "Machine Learning",
  ],
  authors: [{ name: "Lucy Gathoni Mugo" }],
  creator: "Lucy Gathoni Mugo",
  publisher: "Lucy Gathoni Mugo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucygathoni.dev",
    title: "Crafted Code & Creative Vision portfolio",
    description:
      "A dynamic showcase of my development journey - blending clean code, modern design, and purposeful innovation.",
    siteName: "Lucy Gathoni Mugo Portfolio",
    images: [
      {
        url: "/gathoni-logo.svg",
        width: 1200,
        height: 630,
        alt: "Lucy Gathoni Mugo - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crafted Code & Creative Vision portfolio",
    description:
      "A dynamic showcase of my development journey - blending clean code, modern design, and purposeful innovation.",
    images: ["/gathoni-logo.svg"],
    creator: "@lucygathoni",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffa9f9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucy Gathoni Mugo",
              jobTitle: "Junior Software Developer",
              description:
                "A dynamic showcase of my development journey - blending clean code, modern design, and purposeful innovation.",
              url: "https://lucygathoni.dev",
              sameAs: ["https://github.com/Nonniegathoni", "https://www.linkedin.com/in/lucy-gathoni02"],
              knowsAbout: [
                "Software Development",
                "Full Stack Development",
                "React",
                "Next.js",
                "Python",
                "JavaScript",
                "TypeScript",
                "Mobile Development",
                "Machine Learning",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "KCA University",
              },
              email: "Lucygathonilg05@gmail.com",
              telephone: "+254757726970",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Analytics and tracking scripts can go here */}
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
