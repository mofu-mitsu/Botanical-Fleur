'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Sparkles } from 'lucide-react';
import { SPECIAL_FLOWERS } from '@/lib/flowerData';
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

  // 外部からの月変更（記念日ショートカット等）に同期
  if (prevSelectedMonth !== selectedMonth) {
    setPrevSelectedMonth(selectedMonth);
    setViewMonth(selectedMonth);
  }

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
