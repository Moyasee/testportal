import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portal - Your Gateway to Resources",
  description: "Your gateway to infinite possibilities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 