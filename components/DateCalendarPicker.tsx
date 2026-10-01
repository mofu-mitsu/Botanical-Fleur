'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Sparkles, Search, X } from 'lucide-react';
import { SPECIAL_FLOWERS, getAllSpecialFlowers, FlowerData } from '@/lib/flowerData';
import { CHARACTERS_MAP } from '@/lib/characterData';

interface DateCalendarPickerProps {
  selectedMonth: number;
  selectedDay: number;
  onSelectDate: (month: number, day: number) => void;
}

export const DateCalendarPicker: React.FC<DateCalendarPickerProps> = ({
  selectedMonth,
  selectedDay,
  onSelectDate,
}) => {
  const [viewMonth, setViewMonth] = useState(selectedMonth);
  const [prevSelectedMonth, setPrevSelectedMonth] = useState(selectedMonth);
  const [searchQuery, setSearchQuery] = useState('');

  // 外部からの月変更（記念日ショートカット等）に同期
  if (prevSelectedMonth !== selectedMonth) {
    setPrevSelectedMonth(selectedMonth);
    setViewMonth(selectedMonth);
  }

  // 補足植物も含めたクイック検索結果
  const searchResults = React.useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    const all = getAllSpecialFlowers();
    const matches: { month: number; day: number; label: string; subLabel?: string }[] = [];

    all.forEach((f) => {
      if (f.month <= 0 || f.day <= 0) return;
      const isMainMatch =
        f.name.toLowerCase().includes(q) ||
        (f.reading && f.reading.includes(q)) ||
        f.meanings.some((m) => m.toLowerCase().includes(q));

      if (isMainMatch) {
        matches.push({
          month: f.month,
          day: f.day,
          label: f.name,
          subLabel: f.meanings.slice(0, 2).join('・'),
        });
      }

      // 補足植物の一致も検出！
      if (f.subFlowers && f.subFlowers.length > 0) {
        f.subFlowers.forEach((sub) => {
          if (
            sub.name.toLowerCase().includes(q) ||
            (sub.meanings && sub.meanings.some((m) => m.toLowerCase().includes(q))) ||
            (sub.note && sub.note.toLowerCase().includes(q))
          ) {
            matches.push({
              month: f.month,
              day: f.day,
              label: `🌿 ${sub.name}（${f.name}の補足）`,
              subLabel: sub.meanings ? sub.meanings.join('・') : undefined,
            });
          }
        });
      }
    });

    return matches.slice(0, 8);
  }, [searchQuery]);

  // 各月の日数（うるう年考慮で2月は29日まで選択可能）
  const getDaysInMonth = (m: number) => {
    if (m === 2) return 29;
    if ([4, 6, 9, 11].includes(m)) return 30;
    return 31;
  };

  const daysCount = getDaysInMonth(viewMonth);
  const daysArray = Array.from({ length: daysCount }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setViewMonth((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const handleNextMonth = () => {
    setViewMonth((prev) => (prev === 12 ? 1 : prev + 1));
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-emerald-100 shadow-xl shadow-emerald-950/5">
      {/* カレンダーヘッダー */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <CalendarIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-emerald-950">
              誕生花カレンダー
            </h3>
            <p className="text-xs text-emerald-800/70">
              日付をタップして誕生花をチェック
            </p>
          </div>
        </div>

        {/* 月切り替え */}
        <div className="flex items-center gap-1.5 bg-emerald-50 p-1 rounded-2xl border border-emerald-100">
          <button
            onClick={handlePrevMonth}
            className="p-1.5 rounded-xl hover:bg-white text-emerald-800 hover:text-emerald-950 transition-colors"
            title="前月へ"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-bold text-sm text-emerald-950 min-w-16 text-center px-1">
            {viewMonth} 月
          </span>
          <button
            onClick={handleNextMonth}
            className="p-1.5 rounded-xl hover:bg-white text-emerald-800 hover:text-emerald-950 transition-colors"
            title="次月へ"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* クイック検索バー（補足植物・花名・花言葉で日付ジャンプ） */}
      <div className="relative mb-3.5">
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 text-emerald-600 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="お花名や補足植物（例: えんどう豆、ハッカ、桜）で日付を検索"
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-emerald-950 placeholder:text-emerald-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 検索一致ドロップダウン */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 z-30 bg-white rounded-2xl border border-emerald-100 shadow-xl overflow-hidden max-h-56 overflow-y-auto">
            {searchResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setViewMonth(item.month);
                  onSelectDate(item.month, item.day);
                  setSearchQuery('');
                }}
                className="w-full px-3.5 py-2 text-left hover:bg-emerald-50 flex items-center justify-between gap-2 border-b border-emerald-50 last:border-0 transition-colors"
              >
                <div className="min-w-0">
                  <span className="text-xs font-bold text-emerald-950 block truncate">
                    {item.label}
                  </span>
                  {item.subLabel && (
                    <span className="text-[10px] text-slate-500 block truncate">
                      {item.subLabel}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-emerald-700 shrink-0 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                  {item.month}月{item.day}日へ
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 月クイックセレクタ */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-3 scrollbar-none">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
          <button
            key={m}
            onClick={() => setViewMonth(m)}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              viewMonth === m
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50/70 text-emerald-800 hover:bg-emerald-100/70'
            }`}
          >
            {m}月
          </button>
        ))}
      </div>

      {/* 日付グリッド */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {daysArray.map((d) => {
          const isSelected = selectedMonth === viewMonth && selectedDay === d;
          const key = `${viewMonth}-${d}`;
          const hasSpecialFlower = !!SPECIAL_FLOWERS[key];
          const hasCharacter = !!CHARACTERS_MAP[key];

          return (
            <button
              key={d}
              onClick={() => onSelectDate(viewMonth, d)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-200 aspect-square ${
                isSelected
                  ? 'bg-emerald-700 text-white font-bold shadow-md shadow-emerald-900/20 scale-105 z-10'
                  : 'bg-emerald-50/40 hover:bg-emerald-100/60 text-slate-800 hover:scale-102 border border-emerald-100/60'
              }`}
            >
              <span className={`text-xs sm:text-sm ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                {d}
              </span>

              {/* 特別な花やキャラがいる日のマーカー */}
              <div className="flex items-center gap-0.5 mt-0.5">
                {hasCharacter && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-pink-500'}`}
                    title="キャラクター誕生日"
                  />
                )}
                {hasSpecialFlower && !hasCharacter && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-200' : 'bg-emerald-500'}`}
                    title="厳選誕生花"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 凡例ガイド */}
      <div className="mt-4 pt-3 border-t border-emerald-50 flex items-center justify-between text-[11px] text-emerald-900/70">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <span>キャラクター特別日</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>特別選定花</span>
          </div>
        </div>

        <button
          onClick={() => {
            const today = new Date();
            const tm = today.getMonth() + 1;
            const td = today.getDate();
            setViewMonth(tm);
            onSelectDate(tm, td);
          }}
          className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>今日の日付に合わせる</span>
        </button>
      </div>
    </div>
  );
};
