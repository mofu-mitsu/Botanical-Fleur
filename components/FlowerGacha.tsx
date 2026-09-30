'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Dices, Gift, RotateCcw, X, Heart, Leaf } from 'lucide-react';
import { FlowerData, getRandomFlower } from '@/lib/flowerData';
import { FlowerSvg } from './FlowerSvg';
import confetti from 'canvas-confetti';

interface FlowerGachaProps {
  onSelectFlower?: (flower: FlowerData) => void;
}

export const FlowerGacha: React.FC<FlowerGachaProps> = ({ onSelectFlower }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultFlower, setResultFlower] = useState<FlowerData | null>(null);

  const handleSpinGacha = () => {
    setIsSpinning(true);
    setResultFlower(null);

    // 演出用タイマー（約1.2秒後に結果発表）
    setTimeout(() => {
      const drawn = getRandomFlower(true);
      setResultFlower(drawn);
      setIsSpinning(false);

      // ネタ枠やレアの場合に派手な紙吹雪
      if (drawn.isGachaSpecial) {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#f59e0b', '#10b981', '#8b5cf6'],
        });
      } else {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#10b981', '#34d399', '#fbcfe8'],
        });
      }
    }, 1200);
  };

  const handleOpenGacha = () => {
    setIsOpen(true);
    handleSpinGacha();
  };

  return (
    <>
      {/* ガチャ起動ボタン・バナー */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 sm:p-8 shadow-xl shadow-emerald-950/10">
        <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
        <div className="absolute left-10 -top-10 w-36 h-36 rounded-full bg-teal-400/20 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 text-xs font-semibold backdrop-blur-sm border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>運命のお花占い・ネタ枠も出現！</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              ボタニカル・ランダム花言葉ガチャ
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              366日の誕生花に加えて、世界最大の花「ラフレシア」や食虫植物「ウサギゴケ」、バニラやクスノキなど誕生日のない限定植物も排出！
              今日の運勢を花言葉で占ってみませんか？
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenGacha}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-amber-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all shrink-0"
          >
            <Dices className="w-5 h-5 text-amber-900" />
            <span>ガチャを回す！</span>
          </motion.button>
        </div>
      </div>

      {/* ガチャ結果モーダル */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-200 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* 閉じるボタン */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 回転中アニメーション */}
              {isSpinning && (
                <div className="py-16 flex flex-col items-center justify-center space-y-6 text-center">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-500/30 text-white"
                  >
                    <Dices className="w-12 h-12" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-extrabold text-emerald-950">
                      運命の花言葉を探索中...
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1">
                      世界中の珍奇植物や美しい花びらが集まっています
                    </p>
                  </div>
                </div>
              )}

              {/* ガチャ結果表示 */}
              {!isSpinning && resultFlower && (
                <div className="space-y-6">
                  {/* レア度バッジ */}
                  <div className="text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold shadow-sm ${
                        resultFlower.isGachaSpecial
                          ? 'bg-amber-500 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {resultFlower.rarity || 'Gacha Result'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-2 font-serif">
                      {resultFlower.name}
                    </h3>
                    {resultFlower.month > 0 && (
                      <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                        {resultFlower.month}月{resultFlower.day}日の誕生花
                      </p>
                    )}
                  </div>

                  {/* SVGビジュアル */}
                  <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center border border-emerald-100 shadow-inner">
                    <FlowerSvg
                      type={resultFlower.svgType}
                      primaryColor={resultFlower.flowerColor}
                      secondaryColor={resultFlower.secondaryColor}
                      size={180}
                    />
                  </div>

                  {/* 花言葉 */}
                  <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-center">
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1.5">
                      引き当てた花言葉
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {resultFlower.meanings.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-xl bg-white text-emerald-950 font-bold text-sm sm:text-base shadow-sm border border-emerald-200"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {resultFlower.description}
                  </p>

                  {/* モーダル下部のアクションボタン */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleSpinGacha}
                      className="flex-1 py-3 px-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-emerald-200"
                    >
                      <RotateCcw className="w-4 h-4 text-emerald-700" />
                      <span>もう一回引く！</span>
                    </button>

                    {onSelectFlower && (
                      <button
                        onClick={() => {
                          onSelectFlower(resultFlower);
                          setIsOpen(false);
                        }}
                        className={`flex-1 py-3 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                          resultFlower.isGachaSpecial || resultFlower.month === 0
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-amber-500/25'
                            : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
                        }`}
                      >
                        {resultFlower.isGachaSpecial || resultFlower.month === 0 ? (
                          <>
                            <Sparkles className="w-4 h-4 text-amber-200" />
                            <span>✨ ガチャ限定の花を詳しく鑑賞する</span>
                          </>
                        ) : (
                          <>
                            <Leaf className="w-4 h-4" />
                            <span>この花をメインで見る</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
