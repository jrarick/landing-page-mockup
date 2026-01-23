import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/shell/header"
import Footer from "@/components/shell/footer"
import { cn } from "@/lib/utils"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | TopDog Law",
    default: "TopDog Law",
  },
  description: "Get a TopDog Lawyer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(openSans.className, "bg-background antialiased")}>
        <Header />
        <main className="pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
