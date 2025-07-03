import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crafted Code & Creative Vision portfolio",
  description: "A dynamic showcase of my development journey — blending clean code, modern design, and purposeful projects into a seamless experience.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  )
}
