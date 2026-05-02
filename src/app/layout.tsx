import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio — AI-Driven Modernization Engineer',
  description:
    '福島県在住のフリーランスエンジニア。業務システム改善、レガシー刷新、AI駆動開発を軸に、要件整理から実装・運用まで対応。',
  openGraph: {
    title: 'Portfolio — AI-Driven Modernization Engineer',
    description: '業務システム改善 / レガシー刷新 / AI駆動開発に対応するフリーランスエンジニア',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
