'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Dices, BookOpen, Tag, Info, Award } from 'lucide-react';
import { FlowerData } from '@/lib/flowerData';
import { FlowerSvg } from './FlowerSvg';

interface GachaSpecialFlowerModalProps {
  flower: FlowerData | null;
  onClose: () => void;
  onSpinAgain?: () => void;
}

export const GachaSpecialFlowerModal: React.FC<GachaSpecialFlowerModalProps> = ({
  flower,
  onClose,
  onSpinAgain
}) => {
  if (!flower) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 25 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className="relative w-full max-w-xl bg-gradient-to-b from-white via-[#fafdfb] to-[#f4fbf7] rounded-3xl p-5 sm:p-8 shadow-2xl border-2 border-amber-300/80 overflow-hidden max-h-[92vh] overflow-y-auto"
        >
          {/* 金色とエメラルドの輝く光彩エフェクト */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20 cursor-pointer"
            aria-label="閉じる"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* ヘッダーエリア */}
          <div className="text-center pt-2 pb-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white shadow-md shadow-amber-500/25 border border-yellow-200">
              <Award className="w-4 h-4" />
              <span>{flower.rarity || '✨ ガチャ限定プレミアム'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-3 font-serif tracking-tight">
              {flower.name}
            </h3>

            {flower.reading && (
              <p className="text-xs sm:text-sm text-emerald-700/80 font-medium mt-0.5">
                {flower.reading}
              </p>
            )}

            {flower.scientificName && (
              <p className="text-xs text-slate-500 italic mt-0.5">
                学名: {flower.scientificName}
              </p>
            )}

            <div className="inline-block mt-2 px-3 py-0.5 rounded-md bg-emerald-100/70 text-emerald-800 text-[11px] font-bold">
              {flower.category || '特別植物'}
            </div>
          </div>

          {/* 特大SVGイラスト鑑賞 */}
          <div className="relative my-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/70 flex items-center justify-center border border-emerald-100 shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <FlowerSvg
              type={flower.svgType}
              primaryColor={flower.flowerColor}
              secondaryColor={flower.secondaryColor}
              size={220}
              className="z-10"
            />
          </div>

          {/* 花言葉 */}
          <div className="mt-5 bg-white/90 rounded-2xl p-4 sm:p-5 border border-emerald-100 shadow-sm text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase tracking-wider mb-2.5">
              <Tag className="w-3.5 h-3.5" />
              <span>引き当てた花言葉</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {flower.meanings.map((m, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-950 font-black text-sm sm:text-base border border-emerald-200/80 shadow-xs"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* 植物の解説・ストーリー */}
          <div className="mt-4 bg-white/90 rounded-2xl p-4 sm:p-5 border border-emerald-100 shadow-sm space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase tracking-wider">
              <Info className="w-3.5 h-3.5" />
              <span>植物のストーリー＆解説</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {flower.description}
            </p>
          </div>

          {/* トリビア（ある場合） */}
          {flower.triviaList && flower.triviaList.length > 0 && (
            <div className="mt-4 bg-amber-50/60 rounded-2xl p-4 sm:p-5 border border-amber-200/60 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>知って楽しいボタニカルトリビア</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                {flower.triviaList.map((t, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* アクションボタン */}
          <div className="mt-6 pt-2 flex flex-col sm:flex-row gap-3">
            {onSpinAgain && (
              <button
                onClick={() => {
                  onClose();
                  onSpinAgain();
                }}
                className="flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <Dices className="w-4 h-4" />
                <span>もう一度ガチャを回す</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>閉じる</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
