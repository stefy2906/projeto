import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lanches SG',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
      <Link rel="icon" href="%PUBLIC_URL%/favicon.icon"></Link>
      </Head>
      <body>
        {children}</body>
    </html>
  )
}
