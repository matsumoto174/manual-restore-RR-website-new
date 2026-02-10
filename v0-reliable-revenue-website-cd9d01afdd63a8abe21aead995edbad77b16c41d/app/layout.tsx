import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Pay-Per-Call Marketing Agency | Get 10 Sales Calls a Month',
  description: 'We book sales calls with your ideal clients on a pay-per-call basis. Zero risk, all reward. Your sales headache is finally gone.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
