import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "app\global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
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
