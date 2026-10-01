import type { Metadata } from 'next';
import Script from 'next/script';
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

const APP_URL = 'https://botanical-fleur.vercel.app';
const OGP_IMAGE_URL = 'https://botanical-fleur.vercel.app/images/ogp.png';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: 'Botanical Fleur - 366日の誕生花・花言葉とボタニカル図鑑カレンダー',
  description:
    '366日すべての誕生花と花言葉を美しいボタニカルイラストやガチャで楽しめるWebアプリ。誕生日や記念日のお花検索、花言葉の由来やトリビア、お花ギフトの検索にも対応。',
  keywords: [
    '誕生花',
    '花言葉',
    '366日誕生花',
    '誕生日',
    '花言葉ガチャ',
    'ボタニカル',
    '植物図鑑',
    'フラワーギフト',
    '記念日',
  ],
  authors: [{ name: 'Botanical Fleur' }],
  creator: 'Botanical Fleur',
  publisher: 'Botanical Fleur',
  alternates: {
    canonical: APP_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: APP_URL,
    siteName: 'Botanical Fleur',
    title: 'Botanical Fleur - 366日の誕生花・花言葉とボタニカル図鑑カレンダー',
    description:
      '366日すべての誕生花と花言葉を美しいボタニカルイラストやガチャで楽しめるWebアプリ。誕生日や記念日のお花検索、花言葉の由来やトリビア、お花ギフトの検索にも対応。',
    images: [
      {
        url: OGP_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Botanical Fleur - 366日の誕生花と花言葉',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botanical Fleur - 366日の誕生花・花言葉とボタニカル図鑑カレンダー',
    description:
      '366日すべての誕生花と花言葉を美しいボタニカルイラストやガチャで楽しめるWebアプリ。誕生日や記念日のお花検索、花言葉の由来やトリビア、お花ギフトの検索にも対応。',
    images: [OGP_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data (WebApplication & BreadcrumbList)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Botanical Fleur',
        url: APP_URL,
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'All',
        description:
          '366日すべての誕生花と花言葉を美しいボタニカルイラストやガチャで楽しめるWebアプリケーション。',
        inLanguage: 'ja',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'JPY',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ホーム',
            item: 'https://mofu-mitsu.github.io/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Botanical Fleur',
            item: APP_URL,
          },
        ],
      },
    ],
  };

  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="google-site-verification"
          content="b7ayC_ApkqZfpMCdnvnmZPQtpDMW8FATSpv0q1T2uV4"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GNTX973GET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GNTX973GET');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans">
        {children}
      </body>
    </html>
  );
}
