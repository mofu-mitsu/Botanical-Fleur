'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingBag, ExternalLink, Star, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface RakutenItem {
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  affiliateUrl?: string;
  imageUrl?: string;
  shopName?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

interface RakutenItemSectionProps {
  flowerName: string;
  subFlowerNames?: string[];
}

function extractFlowerKeywords(rawName: string, subNames?: string[]): string[] {
  const result: string[] = [];
  if (rawName.includes('ススキ') && rawName.includes('月見')) {
    result.push('ススキ', 'お月見 花');
  } else {
    const parts = rawName
      .split(/[＆&、,／/]|(?:\s+and\s+)/)
      .map((t) => t.replace(/（.*?）|\(.*?\)/g, '').trim())
      .filter((t) => t.length > 0);

    if (parts.length > 1) {
      result.push(...parts);
    } else {
      const mainName = rawName.replace(/（.*?）|\(.*?\)/g, '').trim();
      result.push(mainName || rawName);
    }
  }

  if (subNames && subNames.length > 0) {
    subNames.forEach((s) => {
      const cleaned = s.replace(/（.*?）|\(.*?\)/g, '').trim();
      if (cleaned && !result.includes(cleaned)) {
        result.push(cleaned);
      }
    });
  }

  return Array.from(new Set(result));
}

export const RakutenItemSection: React.FC<RakutenItemSectionProps> = ({ flowerName, subFlowerNames }) => {
  const [items, setItems] = useState<RakutenItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // 花の名前から検索キーワード候補（複数花や補足植物の場合は分割してそれぞれ検索・表示）
  const keywords = extractFlowerKeywords(flowerName, subFlowerNames);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [prevFlowerName, setPrevFlowerName] = useState(flowerName);

  // flowerNameが変わったらフィルターをリセット
  if (prevFlowerName !== flowerName) {
    setPrevFlowerName(flowerName);
    setSelectedFilter(null);
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchItems() {
      setLoading(true);
      try {
        // 全キーワード（＆で繋がれた名前全体）を渡し、API側で各お花ごとに商品を取得・生成
        const res = await fetch(`/api/rakuten?keyword=${encodeURIComponent(flowerName)}`);
        const data = await res.json();
        if (isMounted) {
          setItems(data.items || []);
          setIsLive(data.isLiveApi || false);
        }
      } catch (err) {
        console.error('Rakuten fetch error:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [flowerName]);

  // 選択フィルターに応じたアイテムの絞り込み
  const displayedItems = selectedFilter
    ? items.filter(
        (it) =>
          it.itemName.includes(selectedFilter) ||
          (it as any).categoryKeyword === selectedFilter
      )
    : items;

  return (
    <div className="w-full mt-10 pt-8 border-t border-emerald-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <ShoppingBag className="w-5 h-5 text-emerald-700" />
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
              {keywords.length > 1
                ? `「${keywords.join('」「')}」のお花ギフト & 関連商品`
                : `「${keywords[0]}」のお花ギフト & 関連商品`}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800/70 mt-1 ml-9">
            楽天市場で探せる旬のフラワーアレンジメントや鉢植え・ギフト
          </p>
        </div>

        {/* 楽天市場への直通検索ボタン（複数花の場合はそれぞれのお花ボタンを表示！） */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {keywords.map((kw) => (
            <a
              key={kw}
              href={`https://search.rakuten.co.jp/search/mall/${encodeURIComponent(kw)}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-medium text-xs shadow-sm hover:shadow transition-all shrink-0"
            >
              <span>楽天市場で「{kw}」を探す</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>

      {/* 複数のお花がある場合の表示切り替えタブ */}
      {keywords.length > 1 && (
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-emerald-900 shrink-0">表示切替:</span>
          <button
            onClick={() => setSelectedFilter(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              selectedFilter === null
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            すべて表示
          </button>
          {keywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setSelectedFilter(kw)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === kw
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              🌸 {kw} のみ
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 animate-pulse h-44" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.affiliateUrl || item.itemUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-4 border border-emerald-100/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {item.imageUrl ? (
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-3 bg-emerald-50 flex items-center justify-center relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.itemName}
                      fill
                      unoptimized
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-24 rounded-xl mb-3 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-emerald-600 text-3xl">
                    🌿
                  </div>
                )}

                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {item.itemName}
                </h4>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-600 block">{item.shopName}</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-slate-700">{item.reviewAverage || 4.8}</span>
                    <span className="text-[10px] text-slate-600">({item.reviewCount || 90}+)</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-600 block">税込・参考</span>
                  <span className="text-sm font-bold text-red-600">
                    ¥{item.itemPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};
