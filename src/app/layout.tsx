import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/global-styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const authorCaglayanDemirci = {
  name: "Çağlayan Demirci",
  githubUrl: "https://github.com/cademirci",
  website: "https://www.caglay.de/"
}

export const metadata: Metadata = {
  title: "Initial Next Project",
  authors: [authorCaglayanDemirci],
  description: "An initial, scalable, Next.js App Router project",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
