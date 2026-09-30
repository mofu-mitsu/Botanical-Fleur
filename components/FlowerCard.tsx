'use client';

import React, { useRef, useState } from 'react';
import { FlowerData } from '@/lib/flowerData';
import { FlowerSvg } from './FlowerSvg';
import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import {
  Download,
  Share2,
  Sparkles,
  Check,
  Twitter,
  Copy,
  Calendar,
  Heart,
  Leaf,
  Lightbulb,
  RefreshCw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FlowerCardProps {
  flower: FlowerData;
  isToday?: boolean;
}

const DEFAULT_TRIVIA_LIST = [
  '花瓶に飾るときは水の中に少量の砂糖や炭酸水を混ぜると、花が長持ちしやすくなります。',
  '日光が大好きな植物でも、直射日光よりレースカーテン越しの柔らかい光を好む花が多いです。',
  '花言葉は19世紀のイギリス・ビクトリア朝で花を贈る「秘密の手紙」として大流行しました。',
  '朝一番に水を替えて茎の根元を水中で少し斜めに切る（水切り）と、ぐんぐん水を吸い上げます。'
];

export const FlowerCard: React.FC<FlowerCardProps> = ({ flower, isToday = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [triviaIndex, setTriviaIndex] = useState(0);

  // 花言葉文字列
  const meaningsText = flower.meanings.join('・');

  // トリビアリスト（固有のものがあればそれ、なければ汎用豆知識）
  const activeTriviaList = (flower.triviaList && flower.triviaList.length > 0)
    ? flower.triviaList
    : DEFAULT_TRIVIA_LIST;

  const currentTrivia = activeTriviaList[triviaIndex % activeTriviaList.length];

  const handleNextTrivia = () => {
    setTriviaIndex((prev) => (prev + 1) % activeTriviaList.length);
  };

  // 画像保存ハンドラー
  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    setDownloading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: '#f8faf9',
      });

      const link = document.createElement('a');
      link.download = `flower_${flower.month}m${flower.day}d_${flower.name}.png`;
      link.href = dataUrl;
      link.click();

      // お祝いの紙吹雪エフェクト
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#059669', '#34d399', '#f43f5e', '#facc15'],
      });
    } catch (err) {
      console.error('Image export failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  // ナビゲーション共有ハンドラー
  const handleShare = async () => {
    const title = `${flower.month}月${flower.day}日の誕生花は「${flower.name}」`;
    const text = `${flower.month}月${flower.day}日の誕生花は【${flower.name}】🌸\n花言葉は『${meaningsText}』✨\n#誕生花 #花言葉 #BotanicalFleur`;
    const url = typeof window !== 'undefined' ? window.location.href : '';

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        return;
      } catch (err) {
        // ignore
      }
    }
    setShowShareModal(true);
  };

  const handleCopyText = async () => {
    const text = `${flower.month}月${flower.day}日の誕生花：【${flower.name}】\n花言葉：『${meaningsText}』\n${typeof window !== 'undefined' ? window.location.href : ''}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${flower.month}月${flower.day}日の誕生花は【${flower.name}】🌸\n花言葉は『${meaningsText}』✨\n`
  )}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`;

  return (
    <div id="flower-card-section" className="w-full flex flex-col items-center scroll-mt-24">
      {/* 操作アクションツールバー */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-2">
          {isToday && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold tracking-wide shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              本日の誕生花
            </span>
          )}
          {flower.isGachaSpecial && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {flower.rarity || 'ネタ枠・珍奇植物'}
            </span>
          )}
          {flower.anniversaryNote && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              {flower.anniversaryNote}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* 画像保存ボタン */}
          <button
            onClick={handleDownloadImage}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 disabled:opacity-50"
            title="お花カードを画像として保存"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? '保存中...' : 'カード保存'}</span>
          </button>

          {/* 共有ボタン */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 active:scale-95 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200"
            title="花言葉をシェア"
          >
            <Share2 className="w-4 h-4 text-emerald-600" />
            <span>シェア</span>
          </button>
        </div>
      </div>

      {/* 保存対象のお花カード（純白×ボタニカルグリーン） */}
      <div
        ref={cardRef}
        className="w-full relative overflow-hidden rounded-3xl bg-white border-2 border-emerald-100 shadow-xl shadow-emerald-950/5 p-6 sm:p-9 text-slate-800"
      >
        {/* ボタニカル背景パターン・装飾 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100/50 via-teal-50/30 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-100/40 to-transparent rounded-tr-full pointer-events-none" />

        {/* 四隅のエレガントな装飾 */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-300/80 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-300/80 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-300/80 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-300/80 rounded-br-lg pointer-events-none" />

        {/* カードヘッダー */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-emerald-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center font-bold text-lg shadow-inner">
              <Calendar className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase block">
                BIRTHDAY FLOWER
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-serif">
                {flower.month > 0 ? `${flower.month}月${flower.day}日` : 'SPECIAL FLOWER'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              {flower.category}
            </span>
            {flower.rarity && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                {flower.rarity}
              </span>
            )}
          </div>
        </div>

        {/* カードメインコンテンツ */}
        <div className="relative z-10 py-8 flex flex-col md:flex-row items-center gap-8">
          {/* お花のSVGビジュアル */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
            <div className="relative p-4 rounded-3xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-100/80 shadow-inner">
              <FlowerSvg
                type={flower.svgType}
                primaryColor={flower.flowerColor}
                secondaryColor={flower.secondaryColor}
                size={220}
              />
            </div>
            {flower.scientificName && (
              <span className="text-xs text-emerald-800/60 italic font-serif mt-3 text-center">
                {flower.scientificName}
              </span>
            )}
          </div>

          {/* 花の名前＆花言葉＆詳細 */}
          <div className="w-full md:w-1/2 space-y-5">
            <div>
              <span className="text-xs font-semibold text-emerald-600 tracking-wider">
                {flower.reading && `[ ${flower.reading} ]`}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tracking-tight font-serif mt-0.5">
                {flower.name}
              </h2>
            </div>

            {/* 花言葉ボックス */}
            <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/40" />
                <span>花言葉（HANAKOTOBA）</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {flower.meanings.map((meaning, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-emerald-950 font-bold text-sm sm:text-base border border-emerald-200 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {meaning}
                  </span>
                ))}
              </div>
            </div>

            {/* 植物の解説・エピソード */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                エピソード・特徴
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                {flower.description}
              </p>
            </div>

            {/* 補足植物セクション（同席・席を譲った植物・エピソード） */}
            {flower.subFlowers && flower.subFlowers.length > 0 && (
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 sm:p-4.5 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>補足の植物たち（同席・ゆかりの植物）</span>
                </div>
                <div className="space-y-2">
                  {flower.subFlowers.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white/90 border border-emerald-100 rounded-xl p-3 shadow-2xs space-y-1"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                          <span>🌱</span>
                          <span>{sub.name}</span>
                          {sub.reading && (
                            <span className="text-xs font-normal text-emerald-700/70 font-sans">
                              （{sub.reading}）
                            </span>
                          )}
                        </span>
                        {sub.note && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-800 border border-emerald-200">
                            {sub.note}
                          </span>
                        )}
                      </div>
                      {sub.meanings && sub.meanings.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          <span className="text-[11px] text-slate-500 font-medium">花言葉:</span>
                          {sub.meanings.map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200/60"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 面白いボタニカル豆知識（複数パターン切り替え） */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>ボタニカル豆知識</span>
                  <span className="text-[10px] bg-amber-200/60 text-amber-800 px-1.5 py-0.5 rounded-full font-mono">
                    {activeTriviaList.length > 1 ? `${(triviaIndex % activeTriviaList.length) + 1}/${activeTriviaList.length}` : 'Trivia'}
                  </span>
                </div>
                {activeTriviaList.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNextTrivia}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white/90 hover:bg-white text-[11px] font-medium text-amber-800 border border-amber-300/80 shadow-2xs active:scale-95 transition-all"
                  >
                    <RefreshCw className="w-3 h-3 text-amber-600" />
                    <span>別の豆知識を見る</span>
                  </button>
                )}
              </div>
              <motion.p
                key={triviaIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="leading-relaxed text-amber-950/90 font-medium"
              >
                {currentTrivia}
              </motion.p>
            </div>
          </div>
        </div>

        {/* カードフッター */}
        <div className="relative z-10 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-emerald-800/60 font-serif">
          <span>Botanical Fleur | 誕生花と花言葉</span>
          <span>四季の調べとボタニカルカード</span>
        </div>
      </div>

      {/* 共有モーダル（PCなどネイティブ共有が使えない環境向け） */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-emerald-100"
            >
              <h3 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-600" />
                花言葉をシェアする
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                「{flower.name}」の美しい花言葉をSNSやメッセージで贈りましょう。
              </p>

              <div className="space-y-3">
                {/* X（Twitter）でシェア */}
                <a
                  href={xShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-black text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X（旧Twitter）にポスト</span>
                </a>

                {/* テキストとリンクをコピー */}
                <button
                  onClick={handleCopyText}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-sm font-semibold transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>コピーしました！</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emerald-700" />
                      <span>紹介テキストをクリップボードにコピー</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-right">
                <button
                  onClick={() => setShowShareModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 rounded-xl"
                >
                  閉じる
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
