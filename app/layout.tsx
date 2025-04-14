import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/lib/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MediCare - Healthcare Platform",
  description: "Advancing health and wellness: fostering a healthy future",
    generator: 'Next.js',
  applicationName: 'MediCare',
  referrer: 'origin-when-cross-origin',
  keywords: [
    "healthcare",
    "wellness",
    "health",
    "medical",
]}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
  )
}


import './globals.css'