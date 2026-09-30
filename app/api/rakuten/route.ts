import { NextRequest, NextResponse } from 'next/server';

interface RakutenItem {
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  affiliateUrl?: string;
  imageUrl?: string;
  shopName?: string;
  reviewAverage?: number;
  reviewCount?: number;
  categoryKeyword?: string;
}

function extractKeywords(raw: string): string[] {
  if (raw.includes('ススキ') && raw.includes('月見')) {
    return ['ススキ', 'お月見 花'];
  }
  const parts = raw
    .split(/[＆&、,／/]|(?:\s+and\s+)/)
    .map((p) => p.replace(/（.*?）|\(.*?\)/g, '').trim())
    .filter((p) => p.length > 0);
  return parts.length > 0 ? Array.from(new Set(parts)) : ['誕生花'];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawKeyword = searchParams.get('keyword') || '誕生花';
  const keywords = extractKeywords(rawKeyword);
  const primaryKeyword = keywords[0] || '誕生花';

  const appId = process.env.RAKUTEN_APP_ID;
  const accessKey = process.env.RAKUTEN_ACCESS_KEY;
  const affiliateId = process.env.RAKUTEN_AFFILIATE_ID;

  // If real Rakuten credentials exist, call the Rakuten API for each keyword
  if (appId && accessKey) {
    try {
      const allItems: RakutenItem[] = [];
      for (const kw of keywords.slice(0, 2)) {
        const url = new URL('https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701');
        url.searchParams.set('applicationId', appId);
        if (affiliateId) {
          url.searchParams.set('affiliateId', affiliateId);
        }
        url.searchParams.set('keyword', `${kw} 花`);
        url.searchParams.set('format', 'json');
        url.searchParams.set('hits', keywords.length > 1 ? '3' : '6');

        const res = await fetch(url.toString(), {
          headers: { accessKey: accessKey },
          cache: 'no-store',
        });

        if (res.ok) {
          const data = await res.json();
          const items: RakutenItem[] = (data.Items || []).map((entry: any) => {
            const item = entry.Item || entry;
            return {
              itemName: item.itemName || 'お花アイテム',
              itemPrice: item.itemPrice || 0,
              itemUrl: item.affiliateUrl || item.itemUrl || `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(kw)}/`,
              affiliateUrl: item.affiliateUrl,
              imageUrl: item.mediumImageUrls?.[0]?.imageUrl || item.smallImageUrls?.[0]?.imageUrl || '',
              shopName: item.shopName || '楽天市場',
              reviewAverage: item.reviewAverage || 4.5,
              reviewCount: item.reviewCount || 0,
              categoryKeyword: kw,
            };
          });
          allItems.push(...items);
        }
      }

      if (allItems.length > 0) {
        return NextResponse.json({
          status: 'success',
          isLiveApi: true,
          keyword: primaryKeyword,
          keywords,
          items: allItems,
          rakutenSearchUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(primaryKeyword)}/`,
        });
      }
    } catch (err) {
      console.warn('Rakuten live API error, falling back to curated items:', err);
    }
  }

  // Graceful curated fallback for each flower keyword so both appear!
  const fallbackItems: RakutenItem[] = [];
  keywords.forEach((kw) => {
    fallbackItems.push(
      {
        itemName: `【誕生花ギフト】季節の${kw} プレミアムフラワーアレンジメント`,
        itemPrice: 4280,
        itemUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(kw + ' ギフト')}/`,
        shopName: 'ボタニカルフラワー楽天市場店',
        reviewAverage: 4.8,
        reviewCount: 142,
        categoryKeyword: kw,
      },
      {
        itemName: `【鉢植え・ガーデン】フレッシュな${kw} ポット苗・育成キット`,
        itemPrice: 2980,
        itemUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(kw + ' 苗')}/`,
        shopName: '花と緑のガーデン楽天市場店',
        reviewAverage: 4.7,
        reviewCount: 89,
        categoryKeyword: kw,
      },
      {
        itemName: `【花言葉カード付き】${kw}のナチュラルドライフラワーブーケ`,
        itemPrice: 3500,
        itemUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(kw + ' ブーケ')}/`,
        shopName: 'フルール・アトリエ楽天市場店',
        reviewAverage: 4.9,
        reviewCount: 215,
        categoryKeyword: kw,
      }
    );
  });

  return NextResponse.json({
    status: 'fallback',
    isLiveApi: false,
    keyword: primaryKeyword,
    keywords,
    message: appId ? '楽天APIから商品を取得中または代替表示' : '楽天APIキー設定で楽天市場の商品がリアルタイム反映されます',
    items: fallbackItems,
    rakutenSearchUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(primaryKeyword)}/`,
  });
}
