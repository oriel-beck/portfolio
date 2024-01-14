import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oriel\'s portfolio',
  description: 'I\'m a Full Stack Developer with a passion for code and the web, Welcome to my Portfolio, I\'m glad to see you here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
