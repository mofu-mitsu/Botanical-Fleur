import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Cormorant_Garamond, Noto_Serif_JP } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Botanical Fleur - 誕生花と花言葉',
  description: '366日の誕生花と花言葉をカレンダーやガチャで楽しめるボタニカルアプリ。おしゃれなお花カードの画像保存やSNS共有、お花ギフト検索にも対応。',
  openGraph: {
    title: 'Botanical Fleur - 誕生花と花言葉',
    description: '366日の誕生花と花言葉をカレンダーやガチャで楽しめるボタニカルアプリ。おしゃれなお花カードの画像保存やSNS共有、お花ギフト検索にも対応。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botanical Fleur - 誕生花と花言葉',
    description: '366日の誕生花と花言葉をカレンダーやガチャで楽しめるボタニカルアプリ。おしゃれなお花カードの画像保存やSNS共有、お花ギフト検索にも対応。',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSerif.variable}`}>
      <body suppressHydrationWarning className="font-sans">{children}</body>
    </html>
  );
}

