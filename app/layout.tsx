import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const font = Figtree({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Yandex Music Clone',
  description: 'My training pet project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
        </body>
    </html>
  )
}
