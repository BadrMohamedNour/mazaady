import { Nunito } from "next/font/google"

import Header from "@/components/layout/header/header"

import "@/styles/globals.scss"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
