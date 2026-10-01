'use client';

import React, { useState } from 'react';
import { getAllSpecialFlowers, FlowerData } from '@/lib/flowerData';
import { Search, Sparkles, X, Leaf, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FlowerSvg } from './FlowerSvg';

interface FlowerListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (flower: FlowerData) => void;
}

export const FlowerListModal: React.FC<FlowerListModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const allFlowers = getAllSpecialFlowers();

  const filtered = allFlowers.filter((f) => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    const matchesMain =
      f.name.toLowerCase().includes(q) ||
      (f.reading && f.reading.includes(q)) ||
      f.meanings.some((m) => m.toLowerCase().includes(q)) ||
      `${f.month}月${f.day}日`.includes(q) ||
      `${f.month}/${f.day}`.includes(q);

    const matchesSub =
      f.subFlowers &&
      f.subFlowers.some(
        (sub) =>
          sub.name.toLowerCase().includes(q) ||
          (sub.meanings && sub.meanings.some((m) => m.toLowerCase().includes(q))) ||
          (sub.note && sub.note.toLowerCase().includes(q))
      );

    return matchesMain || matchesSub;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-100 flex flex-col max-h-[85vh]"
          >
            {/* モーダルヘッダー */}
            <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                  <BookOpen className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                    厳選誕生花 & 花言葉図鑑
                  </h3>
                  <p className="text-xs text-emerald-800/70">
                    全90種以上の厳選された美しい花言葉コレクション
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 検索入力 */}
            <div className="mt-4 mb-3 relative">
              <Search className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="花名（例: ミモザ）、花言葉（例: 愛）、日付（例: 4月26日）で検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm text-emerald-950 placeholder:text-emerald-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            {/* 一覧グリッド */}
            <div className="overflow-y-auto pr-1 space-y-2 mt-2 flex-1 scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-sm">
                  お花が見つかりませんでした。別のキーワードでお試しください。
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filtered.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        onSelect(f);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-3 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/50 text-left transition-all group bg-white shadow-xs"
                    >
                      <div className="w-14 h-14 rounded-xl bg-emerald-50/80 shrink-0 flex items-center justify-center p-1 border border-emerald-100/60">
                        <FlowerSvg
                          type={f.svgType}
                          primaryColor={f.flowerColor}
                          secondaryColor={f.secondaryColor}
                          size={50}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                            {f.month}月{f.day}日
                          </span>
                          <span className="text-xs font-semibold text-slate-800 truncate group-hover:text-emerald-800">
                            {f.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-1">
                          {f.meanings.join('・')}
                        </p>
                        {f.subFlowers && f.subFlowers.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {f.subFlowers.map((sub, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[10px] bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded border border-teal-100"
                              >
                                🌿 {sub.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
