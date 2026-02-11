import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '逗播 Doubo - 东南亚娱乐直播平台',
  description: '逗播 - 东南亚领先的娱乐直播平台，发现有趣的主播，发送礼物支持你喜欢的创作者！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
