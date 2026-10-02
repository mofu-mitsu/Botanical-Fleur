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

  const appId = process.env.RAKUTEN_APPLICATION_ID || process.env.RAKUTEN_APP_ID;
  const accessKey = process.env.RAKUTEN_ACCESS_KEY;
  const affiliateId = process.env.RAKUTEN_AFFILIATE_ID;

  // If real Rakuten credentials exist, call the Rakuten API for each keyword
  if (appId) {
    try {
      const allItems: RakutenItem[] = [];

      // リクエスト元のURL/Referer（楽天APIのReferer検証用）
      const incomingReferer = request.headers.get('referer');
      let siteOrigin = 'https://mofu-mitsu.github.io';
      try {
        if (incomingReferer) {
          siteOrigin = new URL(incomingReferer).origin;
        } else if (request.nextUrl?.origin) {
          siteOrigin = request.nextUrl.origin;
        }
      } catch {
        // fallback
      }

      for (const kw of keywords.slice(0, 2)) {
        // クレマチスの場合は「スイセイ2号（彗星2号）」を最優先で検索！
        // なければ「クレマチス 花」「クレマチス」へと自動フォールバック
        const searchQueriesToTry = kw.includes('クレマチス')
          ? ['クレマチス スイセイ2号', 'クレマチス 彗星2号', `${kw} 花`, kw]
          : [`${kw} 花`, kw];

        // 1. まずOpenAPI（accessKeyがある場合）または標準APIエンドポイントを試す
        const endpointsToTry: { url: string; useAccessKey: boolean }[] = [];
        if (accessKey) {
          endpointsToTry.push({
            url: 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701',
            useAccessKey: true,
          });
        }
        // 標準エンドポイント（Refererエラー時の確実なフォールバック先）
        endpointsToTry.push({
          url: 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601',
          useAccessKey: false,
        });

        let rawItems: any[] = [];

        for (const queryTerm of searchQueriesToTry) {
          if (rawItems.length > 0) break;

          for (const ep of endpointsToTry) {
            try {
              const url = new URL(ep.url);
              url.searchParams.set('applicationId', appId);
              if (affiliateId) {
                url.searchParams.set('affiliateId', affiliateId);
              }
              url.searchParams.set('keyword', queryTerm);
              url.searchParams.set('format', 'json');
              url.searchParams.set('hits', keywords.length > 1 ? '3' : '6');

              const reqHeaders: Record<string, string> = {
                'Referer': incomingReferer || `${siteOrigin}/`,
                'Origin': siteOrigin,
                'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              };
              if (ep.useAccessKey && accessKey) {
                reqHeaders['accessKey'] = accessKey;
              }

              const res = await fetch(url.toString(), {
                headers: reqHeaders,
                cache: 'no-store',
              });

              console.log(
                `[Rakuten API] Fetching: ${url.origin}${url.pathname}?keyword=${encodeURIComponent(queryTerm)}&appIdExists=${!!appId}&status=${res.status}`
              );

              if (res.ok) {
                const data = await res.json();
                const fetched = data.Items || [];
                if (fetched.length > 0) {
                  rawItems = fetched;
                  break; // エンドポイントループを抜ける
                }
              } else {
                const errText = await res.text().catch(() => '');
                console.warn(`[Rakuten API Warning] Status: ${res.status}, Body: ${errText.slice(0, 160)}`);
              }
            } catch (fetchErr: any) {
              console.warn(`[Rakuten Endpoint Error] ${ep.url}:`, fetchErr?.message || fetchErr);
            }
          }
        }

        const items: RakutenItem[] = rawItems.map((entry: any) => {
          const item = entry.Item || entry;
          // 楽天画像URLの安全な取得
          const img =
            item.mediumImageUrls?.[0]?.imageUrl ||
            (typeof item.mediumImageUrls?.[0] === 'string' ? item.mediumImageUrls[0] : '') ||
            item.smallImageUrls?.[0]?.imageUrl ||
            '';
          return {
            itemName: item.itemName || 'お花アイテム',
            itemPrice: item.itemPrice || 0,
            itemUrl:
              item.affiliateUrl ||
              item.itemUrl ||
              `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(kw)}/`,
            affiliateUrl: item.affiliateUrl,
            imageUrl: img,
            shopName: item.shopName || '楽天市場',
            reviewAverage: item.reviewAverage || 4.5,
            reviewCount: item.reviewCount || 0,
            categoryKeyword: kw,
          };
        });
        allItems.push(...items);
      }

      if (allItems.length > 0) {
        return NextResponse.json({
          status: 'success',
          isLiveApi: true,
          keyword: primaryKeyword,
          keywords,
          items: allItems,
          rakutenSearchUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(primaryKeyword)}/`,
          debug: {
            appIdSet: !!appId,
            accessKeySet: !!accessKey,
            affiliateIdSet: !!affiliateId,
            itemCount: allItems.length,
          },
        });
      }
    } catch (err: any) {
      console.error('[Rakuten API Error]:', err?.message || err);
      console.warn('Rakuten live API error, falling back to curated items:', err);
    }
  }

  // Graceful curated fallback for each flower keyword so both appear!
  const fallbackItems: RakutenItem[] = [];
  keywords.forEach((kw) => {
    const isClematis = kw.includes('クレマチス');
    fallbackItems.push(
      {
        itemName: isClematis
          ? '【極上品種】クレマチス「流星・スイセイ2号」優美な星咲き苗 ポット植え'
          : `【誕生花ギフト】季節の${kw} プレミアムフラワーアレンジメント`,
        itemPrice: isClematis ? 3850 : 4280,
        itemUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(isClematis ? 'クレマチス スイセイ2号' : kw + ' ギフト')}/`,
        shopName: 'ボタニカルフラワー楽天市場店',
        reviewAverage: 4.9,
        reviewCount: 168,
        categoryKeyword: kw,
      },
      {
        itemName: isClematis
          ? '【開花見込み株】クレマチス スイセイ2号（彗星2号）アンドロメダ系 育成キット'
          : `【鉢植え・ガーデン】フレッシュな${kw} ポット苗・育成キット`,
        itemPrice: 2980,
        itemUrl: `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(isClematis ? 'クレマチス スイセイ2号 苗' : kw + ' 苗')}/`,
        shopName: '花と緑のガーデン楽天市場店',
        reviewAverage: 4.8,
        reviewCount: 95,
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
